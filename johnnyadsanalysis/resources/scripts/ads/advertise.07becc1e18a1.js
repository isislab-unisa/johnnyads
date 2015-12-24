

/** @license
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Works with jQuery +1.2.6. Tested on FF 2/3, IE 6/7/8, Opera 9.5/6, Safari 3, Chrome 1 on WinXP.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 */

/*
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
*		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window)._scrollable();
	};

	// Hack, hack, hack :)
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn._scrollable = function(){
		return this.map(function(){
			var elem = this,
				isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

				if( !isWin )
					return elem;

			var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
			
			return $.browser.safari || doc.compatMode == 'BackCompat' ?
				doc.body : 
				doc.documentElement;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		if( target == 'max' )
			target = 9e9;
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.speed || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this._scrollable().each(function(){
			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					max = $scrollTo.max(elem, axis);

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
				}else{ 
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) == '%' ? 
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if( /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});

			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};

		}).end();
	};
	
	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function( elem, axis ){
		var Dim = axis == 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;
		
		if( !$(elem).is('html,body') )
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();
		
		var size = 'client' + Dim,
			html = elem.ownerDocument.documentElement,
			body = elem.ownerDocument.body;

		return Math.max( html[scroll], body[scroll] ) 
			 - Math.min( html[size]  , body[size]   );
			
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );

(function () {
    $.fn.clearValidation = function () {
        $(this).removeClass("input-validation-success").removeClass("input-validation-error");
        $(this).siblings("label.input-validation-error").remove();
    };

    var validateForm = function (event, context) {
        if (context && context.isSuccessful()) {
            if ($(this).data("validation-submit") != undefined) {
                $(this).data("validation-submit")(this, event);
            }

            // by not calling event.preventDefault(), we actually submit here.
        } else {
            var form = $(this);
            var fields = form.find("input:enabled, select:enabled, textarea:enabled").filter(function () { return $(this).data('validation-routing') != undefined; });
            var pending = fields.length;
            var errors = 0;

            context = {
                isComplete: function () { return pending == 0; },
                isSuccessful: function () { return pending == 0 && errors == 0; },

                onValidating: function (field) {
                },

                onSuccess: function (field) {
                    pending--;
                    if (this.isSuccessful()) {
                        form.trigger('submit', this);
                    }
                },

                onError: function (field, message) {
                    if (errors < 1) {
                        $.scrollTo(field, { offset: -72 });
                    }

                    errors++;
                }
            };
            fields.validate(context);

            event.preventDefault();
        }
    };

    var defaultValidationMessage = function (field, valid, message) {
        if (valid) {
            $(field).siblings("label.input-validation-error").remove();
        } else {
            if (field.data('messagePosition') == 'before') {
                if ($(field).prev("label.input-validation-error").length) {
                    $(field).prev("label.input-validation-error").html(message);
                } else {
                    $(field).before($("<label>", { "class": "input-validation-error", text: message }));
                }
            } else {
                if ($(field).next("label.input-validation-error").length) {
                    $(field).next("label.input-validation-error").html(message);
                } else {
                    $(field).after($("<label>", { "class": "input-validation-error", text: message }));
                }
            }
        }
    };

    $.fn.setupValidation = function (options) {
        if (options == undefined) options = {};
        var settings = $.extend({
            'beforeValidation': false,
            'routing': false,
            'name': 'value',
            'message': false,
            'messagePosition': 'before',
            'validateOn': ['change', 'blur', 'keyup', 'paste']
        }, options);

        var group = $(this);

        return this.each(function () {
            if ($(this).is("form")) {
                $(this).find("input, select, textarea").filter(function () {
                    return $(this).data("val") != undefined;
                }).setupValidation(settings);
            } else {
                var field = $(this);
                var form = field.closest("form").unbind('submit', validateForm).bind('submit', validateForm);
                field.data("validation-routing", options.routing);
                field.data("validation-post-field", options.name);
                field.data("validation-message", options.message);
                field.data("validation-messagePosition", options.messagePosition);
                var label = $("label[for='" + field.attr("id") + "']");
                label.data('default-text', label.html());
                field.clearValidation();

                if ($.browser.mobile == undefined || (!$.browser.tablet && !$.browser.mobile)) {
                    field.bind(settings.validateOn.join(' '), function (event) {
                        if ($(this).is(":text,:password") &&
                                ($.inArray('keyup', settings.validateOn) > -1 || $.inArray('keydown', settings.validateOn) > -1) &&
                                event != undefined && event.originalEvent != undefined &&
                                (event.originalEvent.type == "blur" || event.originalEvent.type == "change")) return;
                        if (event.keyCode == undefined || event.keyCode == 8 || event.keyCode >= 46) { // backspace == 8, ignore alt/shift/ctrl/enter/pause/caps etc.. keep delete and higher
                            if ($(this).data('validation-timeout') != undefined) {
                                clearTimeout(field.data('validation-timeout'));
                                if (settings.beforeValidation != false) {
                                    settings.beforeValidation(field);
                                }
                            }
                            var form = $(this).closest('form');
                            $(this).data("validation-timeout", setTimeout(function () {
                                group.data('validation-memoized-value', null);
                                group.data('validation-memoized-result', null);

                                field.validate(/* no context */);
                            }, 400));
                        }
                    });
                }
            }
        });
    };

    $.fn.validate = function (context) {
        if (context == undefined) context = {};
        context = $.extend({
            onValidating: function (field) { },
            onSuccess: function (field) { },
            onError: function (field, error) { }
        }, context);

        return this.each(function () {
            var field = $(this);
            var label = $("label[for='" + field.attr("id") + "']");

            var routing = $(this).data("validation-routing");
            var postField = $(this).data("validation-post-field");

            field.removeClass("input-validation-success");

            var value = !field.hasClass('placeholder') ? field.val() : null;

            var validationMessage;
            if (typeof ($(this).data("validation-message")) == 'function') {
                validationMessage = $(this).data("validation-message");
            } else {
                validationMessage = defaultValidationMessage;
            }

            var handleResult = function (result) {
                if ($.browser.mobile == undefined || (!$.browser.tablet && !$.browser.mobile)) {
                    field.data('validation-memoized-value', value);
                    field.data('validation-memoized-result', result);
                }

                validationMessage(field, result.valid, result.error);

                if (result.valid) {
                    field.addClass("input-validation-success").removeClass("input-validation-error");
                    context.onSuccess(field);
                } else {
                    context.onError(field, result.error);
                    field.addClass("input-validation-error").removeClass("input-validation-success");
                }
            };

            context.onValidating(field);
            if (field.data('validation-memoized-value') === value) {
                handleResult(field.data('validation-memoized-result'));
            } else if (field.data('val') == undefined) {
                switch (typeof (routing)) {
                    case 'function':
                        handleResult(routing(field, label));
                        break;
                    case 'undefined':
                    case 'boolean':
                    case 'object':
                        routing = '/validate';
                    case 'string':
                        // Else, fire off the ajax call to validate it
                        postVars = {};
                        postVars[postField] = value;
                        $.post(routing, postVars, handleResult, 'json');
                        break;
                }
            } else {
                var getValidationMessage = function (field, value) {
                    if (field.data("val-required") != undefined && (value == null || value.length == 0)) {
                        return field.data("val-required");
                    }

                    if (field.data('val-length') != undefined) {
                        if (field.data('val-length-max') != undefined && value.length > field.data('val-length-max')) {
                            return field.data('val-length');
                        }

                        if (field.data('val-length-min') != undefined && value.length < field.data('val-length-min')) {
                            return field.data('val-length');
                        }
                    }

                    if (field.data('val-regex') != undefined && !value.match(field.data('val-regex-pattern'))) {
                        return field.data('val-regex');
                    }

                    return '';
                };

                var message = getValidationMessage(field, value);

                handleResult({
                    valid: message == '',
                    error: message == '' ? null : message
                });
            }
        });
    };
})();

var rfc2822Regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]+?$/i;
$(function () {
    $("#contactEmail").setupValidation({
        routing: function ($field) {
            return {
                valid: rfc2822Regex.test($field.val()),
                error: "You must enter a valid email address."
            };
        },
        message: function ($field, valid, message) {
            $field.siblings("span.input-validation-error").remove();
            if (!valid) {
                $("<span />").text(message).addClass("input-validation-error").insertAfter($field);
            }
        }
    });

    $("#companyName").setupValidation({
        routing: function ($field) {
            return {
                valid: $.trim($field.val()).length > 0,
                error: "You must enter your company's name."
            };
        },
        message: function ($field, valid, message) {
            $field.siblings("span.input-validation-error").remove();
            if (!valid) {
                $("<span />").text(message).addClass("input-validation-error").insertAfter($field);
            }
        }
    });

    $("#contactName").setupValidation({
        routing: function ($field) {
            return {
                valid: $.trim($field.val()).length > 0,
                error: "You must enter your name."
            };
        },
        message: function ($field, valid, message) {
            $field.siblings("span.input-validation-error").remove();
            if (!valid) {
                $("<span />").text(message).addClass("input-validation-error").insertAfter($field);
            }
        }
    });
});