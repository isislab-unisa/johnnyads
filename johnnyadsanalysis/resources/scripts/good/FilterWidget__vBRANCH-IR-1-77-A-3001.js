Ext.define('Ext.Uitk.Filters', {

	extend:'Ext.form.Panel',

	advancedItems: [],
	layout:'column',
	stateful:true,
	stateEvents:['filtered'],
	buttonHeight:28,
	ctCls:'uitkFilterWidget',
	hasFiltered:false,

	initComponent: function() {
		this.callParent();
		this.addEvents('filtered');
		this.init();
	},
	updateStore:function() {// TODO: eliminate duplication of this function in uitk_table.js; this is here because the filter widget can be passed a table config in custom views
		var me = this;
		if(me.serverSide) {// remove duplicate query params; this should be fixed by not setting defaults on the query string
			var url = me.store.proxy.url;
			for(var key in me.getValues()) {
				if(url.indexOf(key) != -1) {
					url = url.replace(new RegExp('([?&])' + key + '=(.*)[&]'),'$1');
				}
			}
			me.store.proxy.url = url;
		}
		me.store.proxy.extraParams = me.getAllParams();
	},
	init:function() {
		var me = this,
			items = me.items,
			advancedBtnItems = [];
		me.stateId = me.stateId || 'stateform_' + me.id;
		var state = Ext.state.Manager.getProvider().get(me.stateId);
		if(state) {
			me.stateValues = state.values;
		}

		me.on('beforestatesave',function(el,state) {
			if(!hasFiltered) {
				return false;
			}
			state.values = me.getValues();
		});

		Ext.EventManager.onWindowResize(function() {
			var ct = me.renderTo ? Ext.get(me.renderTo) : me.container;
            me.doComponentLayout();
			me.setWidth(ct.getWidth(true));
		});


		if(me.tableParams) {// single table
			me.store = Ext.getCmp('grid_' + me.tableParams.id).getStore();
			me.originalParams = me.store.proxy.extraParams;
			me.store.on('beforeload', me.updateStore, me);
			if(!Ext.isObjectEmpty(me.stateValues)) {
				me.updateStore();
			}
		}

		items.each(function(el, idx) {
			if(el.xtype != 'hidden') {
				el.margin = me.margins;

				if(el.menu) {
					el.menu.addCls('uitkFilterMenu');
				}

				el.padding = '0 0 0 7';
				if(el.advanced) {
					el.hidden = true;
					el.addCls('uitkFilterAdvanced');
					el.padding = '0';
					me.advancedItems.push(el);
					advancedBtnItems.push(me.createAdvancedButtonItem(el));
				}
				me.addFunctionsByType(el,idx);
			}
		});

		me.createAdvancedButton(advancedBtnItems);
		me.createSubmitButton();
	},
	afterRender: function() {
		var me = this;
		me.callParent(arguments);

		if(me.advancedButton) {
			me.advancedButton.menu.items.each(function(item) {
				var initialValue = item.myEl.initialValue;

				if(!Ext.isEmpty(initialValue) && initialValue != 'ALL') {
					me.showAdvancedItem(item.myEl, me.advancedButton.menu, item, me, true);
				}
			});
		}
	},
	createSubmitButton:function() {
		if(!this.autoSubmit) {
			this.add({
				xtype: 'button',
				height: this.buttonHeight,
				cls: 'uitkFilterApply',
				padding: '0 10 0',
				text: '<i class=\"fa fa-search\"></i>',
				listeners: {
					click: this.doApplyFilter,
					scope: this
				}
			});
		}
		
	},
	getAllParams:function() {
		return Ext.apply(this.getValues(), this.originalParams);
	},
	handleLayout:function(removeClears) {// ensure advanced filters and their close buttons don't move to separate lines
		var me = this;

		me.items.each(function(el, idx) {
			if(el.closeButton) {
				var cb = el.getBox(),
					filt = me.items.get(idx+1).getBox(),
					cls = 'uitkClear';
				if(removeClears) {
					el.removeCls(cls);
				}
				if(cb.x + el.width > filt.x) {// corresponding filter moved to next line
					el.addCls(cls);
				}
			}
		});

		Ext.defer(function() {
			var innerCt = me.layout.innerCt;
			me.setHeight(innerCt.getHeight());
		}, 1);
	},
	addFunctionsByType:function(el) {
		var me = this,
			getInitialLabel = function(lbl) {
				return Ext.isEmpty(lbl) ? (el.emptyLabel || 'All') : lbl;
			};

		if(me.isSelect(el)) {
			if(me.stateValues && !Ext.isObjectEmpty(me.stateValues) && !el.overrideState) {
				el.setValue(me.stateValues[el.name]);
			}

			el.on('change', function() {
				me.doFilter();
			});
		}
		else if(me.isMultiSelect(el)) {
			if(me.stateValues && !Ext.isObjectEmpty(me.stateValues) && !el.overrideState) {
				el.applyStateValues(me.stateValues);
			}

			el.on('change', function() {
				me.doFilter();
			});
		}
		else if(me.isText(el)) {
			el.on('change', function() {
				me.doFilter();
			});
		}
		else if(me.isSearch(el)) {
			el.on('enterkey', function() {
				me.doApplyFilter();
			});
		}
		else if(me.isCalendarWidget(el)) {
			el.maxWidth = 240;
			el.on('endvalueset',function() {
				me.setButtonValue(el, getInitialLabel(this.getDisplayValue()), '');
				me.doFilter();
			});

			if(!el.overrideState && me.stateValues) {
				if(me.stateValues[el.startInput.name]) {
					el.getStartField().setValue(Ext.Date.format(Ext.Date.parse(me.stateValues[el.startInput.name],'Y-m-d'),'M d Y'));
				}
				if(me.stateValues[el.endInput.name]) {
					el.getEndField().setValue(Ext.Date.format(Ext.Date.parse(me.stateValues[el.endInput.name],'Y-m-d'),'M d Y'));
				}
			}

			me.setButtonLabel(el, getInitialLabel(el.getDisplayValue()));
		}
	},
	resetSelectFilters: function(apply) {
		var me = this;
		me.items.each(function(item) {
			if(me.isSelect(item)) {
				item.resetValue();
			}
		});

		if(apply) {
			me.doApplyFilter();
		}
	},
	isSelect: function(el) {
		return el.xtype == 'selectfilter';
	},
	isMultiSelect: function(el) {
		return el.xtype == 'multiselectfilter';
	},
	isText: function(el) {
		return el.xtype == 'textfilter';
	},
	isSearch: function(el) {
		return el.xtype == 'searchfilter';
	},
	isCalendarWidget: function(el) {
		return el.xtype == 'uitkcalendarfield';
	},
	setButtonLabel:function(btn,text) {
		var match = btn.getText().match(/(.*)<b>(.*)<\/b>/);
		btn.setText(match[0].replace('<b>' + match[2] + '</b>', '<b>' + text + '</b>'));
		if(!this.isCalendarWidget(btn.xtype)) {
			btn.setTooltip(text);
		}
	},
	setButtonValue:function(btn,text,value) {
		this.setButtonLabel(btn, text);
		if(btn.setValue) {
			btn.setValue(value);
		}
		btn.value = value;
	},
	createCloseButton:function(tbar,el) {
		var me = this,
			valLabel = 'All',
			btn = Ext.create('Ext.button.Button', {
				text: '<i class=\"fa fa-times\"></i>',
				width:24,
				cls:'uitkFilterHideAdvanced',
				height:me.buttonHeight,
				closeButton:true,
				handler: function() {
					el.hide();
					me.remove(this);
					me.advancedButton.menu.add(me.createAdvancedButtonItem(el));
					me.advancedButton.show();

					if(me.isSelect(el) || me.isMultiSelect(el) || me.isText(el) || me.isSearch(el)) {
						el.resetValue();
					}
					else if(me.isCalendarWidget(el)){
						me.setButtonValue(el,valLabel,'');
						el.clearValues();
					}
					me.doFilter(el, null, {removeClears: true});
				}
			});
		var items = me.items,
			btnIdx = 0;
		items.each(function(ele, idx) {
			if(ele == el) {
				btnIdx = idx;
			}
		});
		tbar.insert(btnIdx, btn);
	},
	createAdvancedButton:function(advancedBtnItems) {
		var me = this;
		if(me.advancedItems.length > 0) {
			me.advancedButton = Ext.create('Ext.button.Split', {
				text: '<i class=\"fa fa-plus\"></i>',
				cls: 'uitkFilterMore uitkNoCaret',
				margin: me.margins,
				height: me.buttonHeight,
				menu: new Ext.menu.Menu({
					cls:'uitkFilterAdvMenu',
					showSeparator:false,
					items: advancedBtnItems,
					findByEid : function(eid) {
						if (this.items && this.items.items) {
							var menuItems = this.items.items;
							for(var i= 0,ilen=menuItems.length; i<ilen; i++) {
								if('eid' in menuItems[i] && menuItems[i].eid == eid) {
									return menuItems[i];
								}
							}
						}
					}
				})
			});
			me.add(me.advancedButton);
		}
	},
	showAdvancedItem:function(el, menu, menuItem, widget, skipLayout) {
		el.show();
		menu.remove(menuItem);
		menu.hide();
		widget.createCloseButton(widget,el);

		if(!skipLayout) {
			widget.handleLayout();
		}
		if(menu.items.length === 0) {
			widget.advancedButton.hide();
		}
	},
	createAdvancedButtonItem:function(el) {
		var me = this;
		return {
			eid : el.id,
			myEl : el,
			text:el.emptyText || el.text,
			handler:function() {
				me.showAdvancedItem(el, me.advancedButton.menu, this, me);
			}
		};
	},
	doFilter:function(filter,evt,options) {
		var me = this,
			removeClears = options && options.removeClears ? options.removeClears : false;
		me.handleLayout(removeClears);
		if(me.autoSubmit) {
			me.doApplyFilter()
		}
	},
	doApplyFilter:function() {
		var me = this;
		if(!me.loadable()) {
			return;
		}

		if(me.serverSide === false) {
			me.getForm().submit({
				submitEmptyText:false,
				standardSubmit:true,
				params:Ext.apply({uitk_csrf:me.csrf}, me.getAllParams()),
				clientValidation:false
			});
		} else {
			if(me.store) {
				me.store.load();
			}
		}
		hasFiltered = true;
		me.fireEvent('filtered', me);
	},
	loadable:function() {
		var me = this,
			loadable = true;

		me.items.each(function(item) {
			if(item.requiredValue && Ext.isEmpty(item.value)) {
				Ext.Msg.alert('Note', 'You must select a value for ' + item.text);
				return loadable = false;
			}
		});

		return loadable;
	},
	getValues: function(asString) {
		var me = this,
			values = this.callParent();

		for(var key in values) {
			if(Ext.isEmpty(values[key])) {
				delete values[key];
			}
		}

		me.items.each(function(btn) {
			// get values from calendar widget
			if(me.isCalendarWidget(btn)) {
				if(this.hidden) {
					 delete values[btn.startInput.name];
					 delete values[btn.endInput.name];
				}
				else {
					values[btn.startInput.name] = btn.getStartFieldValue();
					values[btn.endInput.name] = btn.getEndFieldValue();
			 	}
			}

			if(btn.hidden) {
				return;
			}

			if(me.multiSubmitAsArray && me.isMultiSelect(btn)) {
				var msArr = [],
					isMultiName = btn.isMultiNameField();

				btn.getItems(true).each(function(item) {
					if(!isMultiName) {
						msArr.push(item.get('value') || '');
					}
					else {
						values[item.get('name')] = item.get('value') || '';
					}
				});
				if(!isMultiName && msArr.length > 0) {
					values[btn.name] = msArr;
				}
			}
			else {
				if(btn != me.advancedButton && (me.isSelect(btn) || me.isMultiSelect(btn) || me.isText(btn))) {
					values[btn.name] = btn.value || '';
				}
				else if(me.isSearch(btn)) {
					values[btn.name] = btn.getRawValue();
				}
			}
		});
		if(asString) {
			values = Ext.Object.toQueryString(values);
		}
		return values;
	}
});
