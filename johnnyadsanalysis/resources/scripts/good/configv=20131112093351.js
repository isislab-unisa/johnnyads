(function() {
	function getCookie(name) {
		var start = document.cookie.indexOf(name + "=");
		var len = start + name.length + 1;
		if ((!start) && (name != document.cookie.substring(0, name.length)))
			return (null);
		if (start == -1)
			return (null);
		var end = document.cookie.indexOf(";", len);
		if (end == -1)
			end = document.cookie.length;
		return (unescape(document.cookie.substring(len, end)) );
	}

	// Login detection
	var logged = false;
	try {
		logged = getCookie("rcsLogin");
	} catch (e) {
	}
	s.prop15 = ( logged ? "" : "not ") + "logged in";

	// ARRICCHIMENTO DB UTENTI
	var rcsTR = null;

	try {
		rcsTR = getCookie("rcsTR");
	} catch (e) {
	}

	if (rcsTR != null && rcsTR != "") {
		var arrRcsTR = rcsTR.split("|");
		try {
			var idRuna = arrRcsTR[0];
			var genere = arrRcsTR[1];
			var eta = arrRcsTR[2];
			var prov = arrRcsTR[3];
			var state = arrRcsTR[4];

			//ID RUNA
			if (idRuna != "") {
				if (!isNaN(idRuna)) {
					s.prop65 = idRuna;
					s.eVar65 = idRuna;
				} else {
					s.prop65 = "";
					s.eVar65 = "";
				}
				//Genere
				if (genere != "") {
					s.prop62 = genere;
					s.eVar62 = genere;
				} else {
					s.prop62 = "ND";
					s.eVar62 = "ND";
				}

				//Eta'
				if (eta != "") {
					s.prop63 = eta;
					s.eVar63 = eta;
				} else {
					s.prop63 = "ND";
					s.eVar63 = "ND";
				}

				//Provincia
				if (prov == "") {
					s.prop64 = "ND";
					s.eVar64 = "ND";
				} else {
					s.prop64 = prov;
					s.eVar64 = prov;
				}

				if (prov == "ES") {
					s.prop67 = "ND";
					s.eVar67 = "ND";
				} else {
					s.prop67 = "IT";
					s.eVar67 = "IT";
				}
			} else {

				//Genere
				if (genere != "") {
					s.prop62 = genere;
					s.eVar62 = genere;
				} else {
					s.prop62 = "ND";
					s.eVar62 = "ND";
				}

				//Eta'
				if (eta != "") {
					s.prop63 = eta;
					s.eVar63 = eta;
				} else {
					s.prop63 = "ND";
					s.eVar63 = "ND";
				}

				//Provincia
				if (prov == "") {
					s.prop64 = "ND";
					s.eVar64 = "ND";
				} else if (state == "IT" || state == "" || !state) {
					s.prop64 = prov;
					s.eVar64 = prov;
				} else {
					s.prop64 = "EE";
					s.eVar64 = "EE";
				}

				if (state != "") {
					s.prop67 = state;
					s.eVar67 = state;
				} else {
					s.prop67 = "ND";
					s.eVar67 = "ND";
				}
			}
		} catch (e) {
		}
	}
	// FINE ARRICCHIMENTO DB UTENTI

	function stringContains() {
		// Funzione di utilità che accetta più espressioni regolari come
		// parametri e controlla se almeno una di esse corrisponde alla stringa.
		// Restituisce true oppure false.
		// Esempio: if (stringa.contains("pippo.shtml", "pluto.html$")) { ... }
		var myString = this;
		var result = false;
		jQuery.each(arguments, function() {
			myRegExp = new RegExp(this.replace(".", "\."), "gim");
			if (myRegExp.test(myString)) {
				result = true;
				return false;
				// stoppiamo l'iterazione al primo match
			}
		})
		return result;
	}

	String.prototype.contains = stringContains;

	// Mappa URL --> eventi
	var pageUrl = document.location.href;
	jQuery('h2.title a').click(function() {

		s.linkTrackVars = 'events';
		s.linkTrackEvents = 'event10';
		s.events = 'event10';
		s.tl(this, 'o', 'UGC Upload');
	});

	//login a gazzetta tramite gazzastar
	if (pageUrl.contains("from\=gazzastar")) {
		var eVar7 = "";
		s.events = 'event7';
		s.eVar7 = 'Gazzastar';
	}

	//registrazione a gazzetta
	if (pageUrl.contains("\/signup")) {
		
		if (pageUrl.contains("completed")) { //fine registrazione
				//utente RCS 
			if ($('input[name="rcsappuser"]').val() == 1) { 
				var eVar9=""
				s.events=("event62");
				s.eVar9="Gazzaspace, Gazzastar"
			} else {
				var ev48="";
				ev48=s.getValOnce('event48','s_ev48',0);
				s.events=s.apl(s.events,ev48,",",2);
				//nuovo
				var	eVar9="";
				s.eVar9='Gazzaspace';
			}
		}
		
		//double opt-in
		else if (pageUrl.contains("\/confirm")) {
			//caso di utente già iscritto ad altri servizi RCS
			if (pageUrl.contains("rcsappuser\=1")) {
				var eVar9=""
				eVar9 = "Gazzastar, Gazzaspace";
				s.events="event51";
			} /*else {
				var ev3="";
				ev3=s.getValOnce('event3','s_ev3',0);
				s.events=s.apl(s.events,ev3,",",2);
				//nuovo
				var	eVar9="";
				s.eVar9='Gazzaspace';
			}*/
		}
		
		//inizio form di registrazione utente già RCS
		else if (pageUrl.contains("\/userinfo") && $('input[name="rcsappuser"]').val() == 1) {
			var eVar9=""
			s.events=("event63");
			s.eVar9="Gazzaspace, Gazzastar"		
		}
	
		else { 
		var ev46="";
		ev46=s.getValOnce('event46','s_ev46',0);
		s.events=s.apl(s.events,ev46,",",2);
		//nuovo
		var	eVar9="";
		s.eVar9='Gazzaspace';
		}
	}
		
	//ISCRIZIONE A MAGIC -TEST (il config deve ancora essere aggiornato nella white label)
	if (pageUrl.contains('magic')) {
		if (pageUrl.contains("\/registrazione\/") && jQuery('form[name="regform"]').length > -1) {
			console.log('registrazione a magic');
			//prova per registrazione a magic
			s.events = "event45, event46"
			var eVar9="";
			eVar9="Magic e Gazzaspace"
			}  
		else if (pageUrl.contains("\/registrazione\/") && jQuery('h4.ok:contains("Ti sei registrato correttamente! ")').length > -1) {//completamento regitrazione - non prevede la conferma tramite email
			s.events = "event48, event3, event13"
			var eVar9="";
			eVar9="Magic e Gazzaspace"
			}
	}
		
	if (pageUrl.contains("\/sitesearch\/home.html")) { 
		if(!s.prop13){
			s.prop13=s.getQueryParam('q');
			if(s.prop13){
				s.prop13=s.prop13.toLowerCase();
				s.eVar13=s.prop13;
				var t_search=s.getValOnce(s.eVar13,'ev13_GZ',0);
				if(t_search){
					s.events=s.apl(s.events,"event1",",",2);
							}
				s.prop19 = "Cerca in Gazzetta";
				if(s.prop19&&!s.eVar19) s.eVar19=s.prop19;
						}
					}
	}
	
	if (pageUrl.contains("video.gazzetta.it")) { 
		if(pageUrl.contains("search.shtml")) {
			if(!s.prop13){
				s.prop13=s.getQueryParam('q');
				if(s.prop13){
					s.prop13=s.prop13.toLowerCase();
					s.eVar13=s.prop13;
					var t_search=s.getValOnce(s.eVar13,'ev13_GZ',0);
					if(t_search){
						s.events=s.apl(s.events,"event1",",",2);
								}
					s.prop19 = "Cerca in Gazzetta TV";
					if(s.prop19&&!s.eVar19) s.eVar19=s.prop19;
							}
						}
		}				
	}
	
	if (pageUrl.contains("\/ArchivioStoricoPay.html")) { 
		if(!s.prop13){
			s.prop13=s.getQueryParam('q');
			if(s.prop13){
				s.prop13=s.prop13.toLowerCase();
				s.eVar13=s.prop13;
				var t_search=s.getValOnce(s.eVar13,'ev13_GZ',0);
				if(t_search){
					s.events=s.apl(s.events,"event1",",",2);
							}
				s.prop19 = "Cerca in Archivio Storico";
				if(s.prop19&&!s.eVar19) s.eVar19=s.prop19;
						}
					}
	}
	
	if (pageUrl.contains("media\/upload\/files$") && jQuery("div.message.status").text().indexOf("inserito nella coda di approvazione") !== -1) { s.events = "event10"; }
	if (pageUrl.contains("groups\/manage\/overview") && jQuery("div.message.status").text().indexOf("inviato in coda di moderazione") !== -1) { s.events = "event11"; }
	if (pageUrl.contains("events\/manage\/overview") && jQuery("div.message.status").text().indexOf("inserito in coda per approvazione") !== -1) { s.events = "event11"; }

	/*Check ADV Realmedia*/
	try {
		if ( typeof (OAS_RICH) === "function" && typeof (OAS_listpos) === "string" && (OAS_listpos != "undefined" || OAS_listpos != "")) {
			s.prop66 = 'true';
		} else {
			s.prop66 = 'false';
		}
	} catch(e) {
		console.log("Check ADV Error: " + e);
	}
	/*Fine Check ADV*/
})(); 
//mf