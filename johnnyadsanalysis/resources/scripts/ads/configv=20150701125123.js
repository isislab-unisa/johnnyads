/****** BitBang tracking Configuration main site Gazzetta

V 0.1  - 19-12-2013: configurazione e lancio plugin responsive
V 0.2  - 08-01-2014: modificato filtro su ID articoli e su formato date
V 0.3  - 10-01-2014: aggiunta lettura id articoli e data di rilascio
V 0.4  - 13-01-2014: fattorizzazione funzione di lettura path
					 inserita funzione di tracciamento delle foto gallery ajax
					 fix tracciamento idarticoli
V 0.5  - 13-01-2014: fix errore su pagine senza estensione
V 0.6  - 20-01-2014: spento tracciamento del resize 
V 0.7  - 29-01-2014: corretta gestione tipo di refresh
V 0.8  - 07-02-2014: aggiunto tracciamento login, condivisioni social
					 fix tracciamento nomi pagina delle fotogallery
V 0.9  - 14-02-2014: aggiunto tracciamento fonti login e registrazioni
					 aggiunto tracciamento commenti e interazioni MIO
V 0.10 - 21-02-2014: fix tracciamento azioni su community
V 0.11 - 26-02-2014: customlink di tracciamento delle condivisioni social e community inviati direttamente a gazzettaproddef
V 0.12 - 12-03-2014: tracciamento automatico dei menu di navigazione
V 0.13 - 01-04-2014: tracciamento tasto entra in gazzetta - deduplica login per visita
V 0.14 - 03-04-2014: modificato nome bottone entra in gazzetta tv
V 0.15 - 16-04-2014: modificato selettore entra in gazzetta tv
V 0.16 - 05-05-2014: modificato selettore squadre top menu
V 0.17 - 01-07-2014: tracciamento infografiche
V 0.18 - 05-12-2014: aggiunto tracciamento widget condivisione whatsapp
V 0.19 - 29-01-2015: eliminazione event10 come da richiesta
V 0.20 - 25-02-2015: aggiunto tracciamento versione
V 0.21 - 29-06-2015: aggiunta gestione nuovi bottoni menu

******/

/* Provide code version change notes detail number */   
var cfg_ver_bb = "0.21";

/* Production Environment */
s.customLink_account = "rcsgazzettaproddef";

// Staging Enviroment
// s.customLink_account = "rcsvistatest";

/* Responsive Web Design Plugin (rwd) Configuration */
s._rwdBreakpoints = {
	'Mobile': [0, 599],
	'Tablet': [600, 1023],
	'Desktop': [1024, 1439],
	'Wide': [1440, 9999]
};

s._rwdUseContextData = true;
s._rwdNamespace = "gaz";
s.smartResizeAdded = true;

/* Responsive Web Design Plugin (rwd) Launch */
s.rwdSetupSmartresize();
s.rwdSetupTrack();

/* Setup URL processing */
s._siteName = "gazzetta.it";
s._siteNameSpace = "gaz";

s.getArticleID = function(){

	var articleid = "";

	var didMatch = window.location.pathname.match(/(-[0-9\.]*)*\.[a-z]*$/);
	try{
		if(didMatch != null){
			if(didMatch[1] != null)articleid = didMatch[1];
		}
		didMatch = window.location.pathname.match(/\/([0-9a-zA-Z])+-([0-9a-zA-Z])+-([0-9a-zA-Z])+-([0-9a-zA-Z])+-([0-9a-zA-Z])+$/);
		if(didMatch != null)articleid = didMatch[0];

		articleid = articleid.replace(/^-/ , "");
		articleid = articleid.replace(/^\// , "");
	}catch(e){}

	return articleid;

}

s.getArticleReleaseDate = function(){

	var articleDate = "";

	var didMatch = window.location.pathname.match(/\/([0-9]+_[a-z]+_[0-9]+)/);
	if(didMatch != null)articleDate = didMatch[1];

	didMatch = window.location.pathname.match(/\/([0-9]+-[0-9]+-[0-9]+)/);
	if(didMatch != null)articleDate = didMatch[1];

	return articleDate;
}

s.readURL = function(s, namespace , site){

	/* Struttura sezioni e pageName */
	var s_path = window.location.pathname.toLowerCase();
	s_path = s_path.replace("/" , "");
	s_path = s_path.replace(/\/([0-9a-zA-Z])+-([0-9a-zA-Z])+-([0-9a-zA-Z])+-([0-9a-zA-Z])+-([0-9a-zA-Z])+$/ , "");
	s_path = s_path.replace(/(-[0-9\.]*)*\.[a-z]*$/ , "");
	s_path = s_path.replace(/\.[a-z]+$/ , "");

	var s_pagename = s_path;
	s_pagename = s_pagename.replace(/\/([0-9]+_[a-z]+_[0-9]+)/ , "");
	s_pagename = s_pagename.replace(/\/([0-9]+-[0-9]+-[0-9]+)/ , "");

	s_path = s_path.replace(/([0-9]+_[a-z]+_[0-9]+.*)/ , "articoli");
	s_path = s_path.replace(/([0-9]+-[0-9]+-[0-9]+.*)/ , "articoli");

	s.contextData[namespace+'.articleid'] = s.getArticleID();
	s.contextData[namespace+'.articledate'] = s.getArticleReleaseDate();

	var a_path = s_path.split("/");

	var s_host = window.location.host;
	s_host = s_host.replace("www." , "");
	s_host = s_host.replace("staging-5." , "");

	var s_sitename = s_host.replace(site , namespace);
	s_sitename = s_sitename.toUpperCase();

	var sc_site = site;

	var a_host = s_host.split(".");

	if(a_host.length > 2){
		a_path.reverse();

		for(var l_host = a_host.length - 3 ; l_host >= 0 ; l_host--){
			a_path.push(a_host[l_host]);
		}
		a_path.reverse();
	}

	var sc_sezione = "";

	if(a_path[0] == "")sc_sezione = "homepage";
	else sc_sezione = a_path[0];

	if(typeof a_path[1] != "undefined")sc_sezione1 = a_path[1];
	if(typeof a_path[2] != "undefined")sc_sezione2 = a_path[2];

	s.contextData[namespace+'.nomePagina'] = s_sitename + "/" + s_pagename;
	s.contextData[namespace+'.site'] = sc_site;
	s.contextData[namespace+'.sezione'] = sc_sezione;
	if(typeof sc_sezione1 != "undefined")s.contextData[namespace+'.sezione1'] = sc_sezione1;
	if(typeof sc_sezione2 != "undefined")s.contextData[namespace+'.sezione2'] = sc_sezione2;

}

s.readURL(s , s._siteNameSpace , s._siteName);

if(s.Util.getQueryParam('login') == "ok"){
	var gvo_login=s.getValOnce('login','gvo_login_GZ',0);
	if(gvo_login != ""){
		s.eVar7 = "Gazzaspace";
		s.events=s.apl(s.events,'event7',',',2)
	}

}

/*Funzione per il tracciamento delle infografiche che, allo slide delle immagini, modificano l'hash*/
s.infograf = function(){
    var nomePagina = s.contextData[s._siteNameSpace +'.nomePagina'];
    var slideName = nomePagina.match(/#s\/(.)+/);
    var pageurlSlideName = s.pageURL.match(/#s\/(.)+/);
    var hashchanged = location.hash;
        
        if(pageurlSlideName){
            s.pageURL = s.pageURL.replace(pageurlSlideName[0],"");
        }

	    s.pageURL = s.pageURL + hashchanged;
		
        if(s.pageURL && s.pageURL.indexOf('&refresh_ce-awe') < 0){
            s.pageURL = s.pageURL + "&refresh_ce-awe";
        }
		
		if (slideName){
			nomePagina = nomePagina.replace(slideName[0],"");
		}
		
        s.contextData[s._siteNameSpace + '.nomePagina'] = nomePagina + hashchanged;
        s.t();

}

var patt1 = new RegExp(/infografiche\//);
var patt2 = new RegExp(/infografiche(.)+\/#s/);

if (patt1.test(window.location.href)) {
	$(window).on('hashchange', function() {
		if (patt2.test(window.location.href)) {
			s.infograf();
		};
	});
};


try{

/* Aggiunta tracking setup link track */
// side nav
$('.side-nav>li>a').attr('name' , function(){ return "&lid="+this.title.toLowerCase()+"&lpos=side-nav" })

// top bar
$('.top-bar-section>ul>li>a').attr('name' , function(){ return "&lid="+this.title.toLowerCase()+"&lpos=top-bar" })

// top bar categroy menu
$('#tutteCategorie>ul>li>a').attr('name' , function(){ return "&lid="+this.title.toLowerCase()+"&lpos=top-bar-category" })

// Menu squadre nelle home delle categorie calcio e calcio mercato
$('.squadre>li>a').attr('name' , function(){ return "&lid="+this.title.toLowerCase()+"&lpos=category-squadre" })

// Menu squadre nella top bar
$('#laTuaSquadra>ul>li>a').attr('name' , function(){ return "&lid="+this.title.toLowerCase()+"&lpos=top-bar-squadre" })

// Bottone 
$('.link-top').attr('name' , function(){ return "&lid=entra-in-gazzetta-tv&lpos=video-bar" })

// Menu Login 
$('#accessMio').attr('name' , function(){ return "&lid=accedi-pagina-mio&lpos=menu-login" })

}catch(e){}

/* Tracciamento Condivisioni Social */

s.sharebutton = new Object();

s.sharebutton.facebook = "li.facebook";
s.sharebutton.twitter = "li.twitter";
s.sharebutton.googleplus = "li.google-plus";
s.sharebutton.pinterest = "li.pinterest";
s.sharebutton.whatsapp = "li.whatsapp";

s.sharebutton.gazzetta = "li.shareGazzetta";
s.sharebutton.gazzetta_like_video = "#btn-like";
s.sharebutton.gazzetta_comment_video = "#btn-comment";
s.sharebutton.gazzettacomment_login_top = "li.comment";
s.sharebutton.gazzettacomment_login_bottom = "a.comment";
s.sharebutton.gazzettacomment_send = "button.cSubmit";
s.sharebutton.widget_like = "div.like";

s.sharebutton.seguiarticolo = "h2.segui:not(.seguiGia)";
s.sharebutton.seguimio = "div.btnMio:not(.seguiGia)";
s.sharebutton.homecustom = "a.customize";

s.sharebutton.accedi = "li.login:not(.content)";

try{

	//Tracciamento azioni sui Social Network non condizionate da login

	$('body').on('click' , s.sharebutton.facebook , function() {
	  s.trackSocialInteraction('facebook');
	});

	$('body').on('click' , s.sharebutton.twitter , function() {
	  s.trackSocialInteraction('twitter');
	});

	$('body').on('click' , s.sharebutton.googleplus , function() {
	  s.trackSocialInteraction('googleplus');
	});

	$('body').on('click' , s.sharebutton.pinterest , function() {
	  s.trackSocialInteraction('pinterest');
	});
	
	$('body').on('click' , s.sharebutton.whatsapp , function() {
	  s.trackSocialInteraction('whatsapp');

	});


s.is_logged = s.c_r('rcsLogin');
if(s.is_logged == "")s.is_logged = false;
else s.is_logged = true;

if(s.is_logged){

	$('body').on('mousedown' , s.sharebutton.gazzetta ,  function() {
		s.trackCommunityInteraction('gazzetta like');
	});

	$('body').on('mousedown' , s.sharebutton.gazzetta_like_video ,  function() {
		s.trackCommunityInteraction('gazzetta like');
	});
	
	$('body').on('mousedown' , s.sharebutton.widget_like , function() {
		s.trackCommunityInteraction('gazzetta like');
	});
	
	$('body').on('mousedown' , s.sharebutton.gazzettacomment_send , function() {
		s.trackCommunityInteraction('gazzetta comment');
	});
	
	$('body').on('mousedown' , s.sharebutton.seguiarticolo , function() {
		s.trackCommunityInteraction('gazzetta segui articolo');
	});
	
	$('body').on('mousedown', s.sharebutton.seguimio , function() {
		s.trackCommunityInteraction('gazzetta segui sezione');
	});
	
	$('body').on('mousedown' , s.sharebutton.homecustom , function() {
		s.trackCommunityInteraction('gazzetta home custom');
	});

}else{

	$('body').on('mousedown' , s.sharebutton.gazzetta , function() {
		s.trackEntryMethod('gazzetta like');
	});

	$('body').on('mousedown' , s.sharebutton.gazzetta_like_video ,  function() {
		s.trackEntryMethod('gazzetta like');
	});
	
	$('body').on('mousedown' , s.sharebutton.gazzetta_comment_video ,  function() {
		s.trackEntryMethod('gazzetta comment');
	});
	
	$('body').on('mousedown' , s.sharebutton.widget_like , function() {
		s.trackEntryMethod('gazzetta like');
	});
	
	$('body').on('mousedown' , s.sharebutton.gazzettacomment_login_top , function() {
		s.trackEntryMethod('gazzetta comment');
	});
	
	$('body').on('mousedown' , s.sharebutton.gazzettacomment_login_bottom , function() {
		s.trackEntryMethod('gazzetta comment');
	});
	
	$('body').on('mousedown' , s.sharebutton.seguiarticolo , function() {
		s.trackEntryMethod('gazzetta segui articolo');
	});
	
	$('body').on('mousedown', s.sharebutton.seguimio , function() {
		s.trackEntryMethod('gazzetta segui sezione');
	});
	
	$('body').on('mousedown' , s.sharebutton.accedi , function() {
		s.trackEntryMethod('gazzetta accedi');
	});
	
	$('body').on('mousedown' , s.sharebutton.homecustom , function() {
		s.trackCommunityInteraction('gazzetta home custom');
	});

}

}catch(e){}

s.trackCommunityInteraction = function(network){
	s.proxy_linkTrackVars = s.linkTrackVars;
	s.proxy_linkTrackEvents = s.linkTrackEvents;
	s.proxy_rs = s.account;
	s.sa(s.customLink_account);
	s.linkTrackVars="eVar36,events"
	s.linkTrackEvents="event14"
	s.eVar36 = network;
	s.events = "event14";
	s.tl(this , 'o' , 'Community Interaction');
	s.linkTrackVars = s.proxy_linkTrackVars;
	s.linkTrackEvents = s.proxy_linkTrackEvents;
	s.sa(s.proxy_rs);
	s.events = "";
	s.eVar36 = "";
}

s.trackEntryMethod = function(network){
	s.proxy_linkTrackVars = s.linkTrackVars;
	s.proxy_linkTrackEvents = s.linkTrackEvents;
	s.proxy_rs = s.account;
	s.sa(s.customLink_account);
	s.linkTrackVars="eVar36,events"
	s.linkTrackEvents="None"
	s.eVar36 = network;
	s.events = "";
	s.tl(this , 'o' , 'Entry Method');
	s.linkTrackVars = s.proxy_linkTrackVars;
	s.linkTrackEvents = s.proxy_linkTrackEvents;
	s.sa(s.proxy_rs);
	s.events = "";
	s.eVar36 = "";
}

s.trackSocialInteraction = function(network){
	s.proxy_linkTrackVars = s.linkTrackVars;
	s.proxy_linkTrackEvents = s.linkTrackEvents;
	s.proxy_rs = s.account;
	s.sa(s.customLink_account);
	s.linkTrackVars="eVar39,events"
	s.linkTrackEvents="event34"
	s.eVar39 = network;
	s.events = "event34";
	s.tl(this , 'o' , 'Social Sharing');
	s.linkTrackVars = s.proxy_linkTrackVars;
	s.linkTrackEvents = s.proxy_linkTrackEvents;
	s.sa(s.proxy_rs);
	s.events = "";
	s.eVar39 = "";
}

s.trackAjaxFotoGallery = function(numeroFoto){

	s.proxy_nomePagina = s.contextData[s._siteNameSpace+'.nomePagina']
	s.contextData[s._siteNameSpace+'.nomePagina'] = s.contextData[s._siteNameSpace+'.nomePagina'] + "/" + numeroFoto;
	if(s.pageURL.indexOf("&refresh_ce-awe") < 0)s.pageURL = s.pageURL + "&refresh_ce-awe";
	//s.prop71 = "refresh_ce-awe";
	s.t();
	s.contextData[s._siteNameSpace+'.nomePagina'] = s.proxy_nomePagina;
	s.prop71 = "";

};


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

	// Arricchimento DB utenti
	var rcsTR = null;

	try {
		rcsTR = getCookie("rcsTR");
	} catch (e) {}

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
		} catch (e) {}
	}

	// FINE ARRICCHIMENTO DB UTENTI

	function stringContains() {
		// Funzione di utilita  che accetta piu espressioni regolari come
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
			//caso di utente gia  iscritto ad altri servizi RCS
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

		//inizio form di registrazione utente gia RCS
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

	//ISCRIZIONE A MAGIC-TEST (il config deve ancora essere aggiornato nella white label)
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
			s.prop13=s.Util.getQueryParam('q');
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
				s.prop13=s.Util.getQueryParam('q');
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
			s.prop13=s.Util.getQueryParam('q');
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

	if (pageUrl.contains("groups\/manage\/overview") && jQuery("div.message.status").text().indexOf("inviato in coda di moderazione") !== -1) { s.events = "event11"; }
	if (pageUrl.contains("events\/manage\/overview") && jQuery("div.message.status").text().indexOf("inserito in coda per approvazione") !== -1) { s.events = "event11"; }

})();

//mf
