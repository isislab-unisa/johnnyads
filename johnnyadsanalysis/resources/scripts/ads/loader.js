/**
 * @fileOverview Questo file si occupa di caricare i widget hotel e voli ed eventuali nuovi widget
 * fornisce inoltre supporto per la funzionalitÃ  comune del passio dei dati via JSONP e per la gestione dei tab
 * @author Nicola Rizzo
 * 
 * */

/**
 * @namespace namespace generale
 */
var ch = ch || {};

/**
 * @namespace Contiene eventuali altri oggetti e classi di utilitÃ 
 */
ch.exm = ch.exm || {};
if(typeof ch.exm.Loader === "undefined"){
	/**
	 * @public
	 * @namespace Namespace principale per il Loader
	 * @description L'oggetto principale, Loader
	 */
    ch.exm.Loader = {
	    /**
	     * @type Number
	     * @description Contiene il numero totale di widget per questo loader, utilizzato per testare che in un dato
	     * momento siano tutti caricati
	     */
	    wgtNum: 0,
	    /**
	     * @type Array
	     * @description Array contenente i widget di questo loader. E' possibile utilizzare questa struttura quando
	     * non si conosce l'id del widget a cui si Ã¨ interessati; diversamente Ã¨ possibile usare { @link getWgtById }
	     */
	    storedWidgets: [],
	    /**
	     * @type Object
	     * @description Riferimento allo script contenente il risultato di una chiamata JSONP. Se il singolo widget
	     * necessita di uno script proprio come trasporto (per esempio per non entrare in conflitto con le necessitÃ 
	     * di altri widget caricati), sarÃ  opportuno usare il parametro ownTransport: true nella { @link getData }
	     */
	    transport: null,
	    /**
	     * @type Number
	     * @description Numero di widget caricati correttamente; quando raggiunge {@link ch.exm.Loader.wgtNum}, scattano
	     * le funzioni di notifica del caricamento avvenuto
	     */
	    readyWgt: 0,
	    /**
	     * @type Number
	     * @description Indica il progressivo del tab corrente, parte da 0
	     */
	    currentTab: 0,
	    /**
	     * @private
	     * @type Number
	     * @description Indice interno per avere riferimento del widget che sta per essere caricato
	     */
	    _wcount: 0,
	    /**
	     * @private
	     * @type Array
	     * @description Array che contiene le funzioni da eseguire quando scatta Ã¨ tutto caricato.
	     * Utilizzato soltanto se le funzioni vengono registrate prima che il caricamento sia avvenuto.
	     * Nell'altro caso, le callback vengono eseguite immediatamente
	     */
	    _onloadAry: [],
	    /**
	     * @type Array
	     * @description Registro interno che tiene traccia di tutti gli script caricati, siano widget o dipendenze
	     */
	    loadedSources: [],
	    
	    /**
	     * @static
	     * @private
	     * @description Si occupa di caricare il widget successivo, incrementa i contatori interni. Se Ã¨ giÃ  registrato
	     * un widget con lo stesso id, il caricamento non viene eseguito
	     */
        _loadNext: function(){
            var p = this.parameters,
                wgtsToLoad = p["widgets"],
                w = wgtsToLoad[this._wcount]
            ;
            if(!w || this.isLoaded(w["name"] + w["version"])){ return; }
	        document.write("<script "   +
                   "type='text/javascript' " +
                   "src='"                   +
                   p["wgtBaseUrl"]           +
                   "/"                       +
                   w["name"]                 +
                   w["version"]              +
                   ".js"                     +
                   "'></script>"
            );
        },
	    /**
	     * @param {String} src sorgente dello script da verificare
	     * @returns {Boolean} true se lo script in questione Ã¨ caricato
	     * @description Restituisce true se lo script la cui url Ã¨ passata come parametro risulta caricato
	     */
	    isLoaded: function(src){
		    var ret = false;
			for(var i = 0, l = this.loadedSources.length; i < l; i++){
				this.loadedSources[i] === src && (ret = true);
			}
		    return ret;
	    },
	    /**
	     * @description Invoca il metodo hide di tutti i widget (i widget <b>devono</b> avere un metodo hide)
	     */
	    hideAll: function(){
			for(var i = 0, l = this.storedWidgets.length; i < l; i++){
				this.storedWidgets[i].hide();
			}
	    },
	    /**
	     * @description Si occupa di caricare le dipendenze: invocata prima del caricamento dei widget
	     */
        _loadDeps: function(){
            var p = this.parameters,
                d = p.dependencies
            ;
            for(var i = 0, l = d.length; i < l; i++){
	            if(!this.isLoaded(d[i]["name"])){
		            document.write("<scr" + "ipt "   +
		                   "type='text/javascript' " +
		                   "src='"                   +
		                   p["wgtBaseUrl"]           +
		                   "/"                       +
		                   d[i]["name"]                 +
		                   ".js"                     +
		                   "'><\/script>"
		            );
		            this.loadedSources.push(d[i]["name"]);
	            }
            }
            document.write("<scr" + "ipt "   +
                   "type='text/javascript' " +
                   ">ch.exm.Loader.startup()<\/scr" + "ipt>"
            );
        },
	    /**
	     * @private
	     * @description Metodo invocato inizialmente per fare partire caricare le dipendenze e i parametri dello script
	     */
        _init: function(){
            this.getParameters();
            this._loadDeps();
        },
	    /**
	     * @description Metodo principale del Loader, invocato automaticamente alla partenza
	     */
        startup: function(){
            var w = "";
            this.wgtNum = this.parameters.widgets.length;
            for (var i=0; i < this.wgtNum; i++){
                this._loadNext();
                this._wcount++;
                w = this.parameters.widgets[i];
                this.loadedSources.push(w["name"] + w["version"]);                
            }
        },
	    /**
	     * @returns {Object} il widget con l'id passato
	     * @param {String} wId L'id del widget da restituire
	     */
        getWgtById: function(/** String */ wId){
            var wgt = null;
            for(var i = 0, l = this.storedWidgets.length; i < l; i++){
                (this.storedWidgets[i].wgtId === wId) && (wgt = this.storedWidgets[i]);
            }
            return wgt;
        },
	    /**
	     * @description Metodo che registra il singolo widget e ne invoca il metodo startup, che ogni widget
	     * <b>deve</b> avere
	     * @param {String} wgt Id del widget da restituire, cosÃ¬ come specificato nei parametri del Loader
	     */
        register: function(/** Widget */ wgt){
            var wpos = this.storedWidgets.push(wgt) - 1;
            wgt.parameters = this.parameters["widgets"][wpos]["params"];
            wgt.wgtId = this.parameters["widgets"][wpos]["id"];
            wgt.startup.call(wgt);
            return wpos;

            this[wgt.wgtId] = wgt;
        },
	    /**
	     * @description Si occupa di eseguire la callback specificata all'arrivo del dato in formato JSONP, invocando
	     * il metodo sul widget corretto
	     * @param {Object} args contiene l'id del widget a cui appartiene la callback e il nome della callback
	     */
        cback: function(/** Object */ args){
            var id = args.id,
                method  = args.method
            ;
            // aggiungere un livello di complessitÃ  nella servlet, l'envelop
            this.getWgtById(id)[method](args);
        },
	    /**
	     * @description Si occupa della gestione dei tab e della inizializzazione dell'evento click su ciascuno
	     */
        _setupTabs: function(){
            var p = this.parameters,
                tabs = p.tabs
	        ;
            if(!tabs){ return; }
            var tl = tabs.length,
                self = this,
                m = self.fnMap,
                t,
                ct,
                tx,
	            /**
	             * @private
	             * @description Gestore di click sui tab, in una variabile per comoditÃ 
	             */
                clickHandler = function(x){
                    return function(){
                        for(var j = 0; j < tl; j++){
                            ct = document.getElementById(tabs[j]["id"]);
                            ct.className = ct.className.replace(/selected/g, "");
                        }
                        tx = document.getElementById(tabs[x]["id"]);
                        tx.className = tx.className + " selected";
                        if(self.currentTab != x){
                            self.currentTab = x;
                            var wgt = self.getWgtById(tabs[x].wgt);
                            wgt.execute(tabs[x].action, wgt);
                        }
                    };
                }
	        ;
	        /**
	         * @default 0
	         */
            this._defaultTab = p["defaultTab"] || 0;
            for(var i = 0; i < tl; i++){
                t = document.getElementById(tabs[i]["id"]);
                t.onclick = clickHandler(i);
            }
	        this.hideAll();
	        this.storedWidgets[this._defaultTab].show();
            tabs.length && clickHandler(this._defaultTab)();
        },
	    /**
	     * @description Metodo invocato dal singolo widget per notificare al Loader che Ã¨ stato caricato ed Ã¨
	     * pronto per essere utilizzato
	     * @param {Object} args Oggetto contenente l'id del widget e lo stato (di solito "ready")
	     */
        notify: function(/** Object */ args){
            var status = args.status;
            switch(status){
                case "ready":
                    this.readyWgt++;
                break;
                default:
                break;
            }
            (this.readyWgt === this.wgtNum) && this._onLoad();
        },
	    /**
	     * @description Metodo che esegue le funzioni che sono state accodate per l'esecuzione differita, dopo la
	     * onLoad; si occupa inoltre
	     */
        _onLoad: function(){
            this._setupTabs();
	          for(var i = 0, ary = this._onloadAry, l = ary.length; i < l; i++){
				        var func = ary[i];
				        if (typeof func == "function"){
					          func();
				        }
	          }
	          this.onLoad = function(fn){
		            fn();
	          };
        },
	    /**
	     * @description Metodo che accoda l'esecuzione della funzione passata in modo che venga eseguita quando i
	     * widget e le dipendenze sono caricati e funzionanti. <b>Nota</b>: dopo il caricamento le funzioni vengono
	     * semplicemente eseguite
	     * @param {function} fn Funzione che dovrÃ  essere eseguita quando i widget saranno tutti caricati e funzionanti
	     */
        onLoad: function(fn){
	        this._onloadAry.push(fn);
        },
	    /**
	     * @description recupera i dati utilizzando il JSONP fornito dal loader
	     * @param {Object} args L'oggetto Ã¨ cosÃ¬ composto:
	     * <i>id</i>: id del widget a cui appartiene la callback, come specificato nei parametri iniziali del
	     * tag script<br />
	     * <i>cback</i>: funzione che dovrÃ  essere eseguita al ritorno del dato JSONP<br />
	     * <i>url</i>: indirizzo del servizio da interrogare<br />
	     * <i>envelop</i>: specifica sotto forma di oggetto i parametri che devono essere aggiunti alla chiamata
	     * della funzione di callback<br />
	     */
        getData: function(/** Object */ args){
            var id = args.id,
                cback = args.cback,
                url = args.url,
                envelop = args.envelop,
                t = args.ownTransport ? null : this.transport
            ;
            var paramString = "";
            for(var i in envelop){
                paramString += i + ":\"" + envelop[i] + "\"" + ",";
            }
            if(paramString.length){
                paramString = paramString.substring(0, paramString.length - 1) + ",";
            }

            t && t.parentNode.removeChild(t);
            t = document.createElement("script");
            t.type = "text/javascript";
            t.src = url + "&jsonp=ch.exm.Loader.cback({id:'" + id + "',method:'" + cback + "'," + paramString + "data:\"";
            document.getElementsByTagName("head")[0].appendChild(t);
        },

        getDataFromService: function(/** Object */ args){
            if (!args.url) { return; }
            var  t = this.transport;

            t && t.parentNode.removeChild(t);
            t = document.createElement("script");
            t.type = "text/javascript";
            t.src = args.url;
            document.getElementsByTagName("head")[0].appendChild(t);
        },
	    /**
	     * @description Recupera i parametri passati all'interno del tag script e li assegna alla proprietÃ  parameters
	     */
        getParameters: function(){
            var scripts = document.getElementsByTagName("script"),
                cs = null,
                src = "",
                pattern = "/loader/loader.js",
                p = ""
            ;
            for(var i = 0, l = scripts.length; i < l; i++){
                cs = scripts[i];
                src = cs.src;
                if(src.lastIndexOf(pattern) == (src.length - pattern.length)){
                    p = cs.getAttribute("params");
                    this.parameters = p ? eval("(" + p + ")") : {};
                }
            }
        }
    };
    ch.exm.Loader._init();
}