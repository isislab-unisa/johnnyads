/*!
* TrackFunctions.js
* v. 1.0:		funzione checkNielsenImg()		Cerca e nel caso appende l'immagine per l'invio della chiamata Nielsen
* 				funzione TrackNielsen			Gestione tracciamento Nielsen sfoglie e refresh
* 												ex#1: TrackNielsen("refresh-cens");
*	 											ex#2: TrackNielsen("refresh_ce-awe");
* v. 1.1:		vscroll							Traccia automatizzato max % di scroll dell'HP
* v. 1.2:		firma							prop38
* v. 1.3:		firma							escluso "(none)"
* v. 1.4:		Membership track				freetrial
* v. 1.5:		Membership track				Var pagetype, VAS & usertype
* v. 1.6:		Membership track				fix usertype + fnc moved to config.js
* v. 1.7:		Membership track				Aggiunta gestione sottoscrizione con cookie
* v. 1.8:		Sezioni Expo					Aggiunta gestione speciale Expo (prop29)
* v. 1.9:		Sezioni Sottosezione Eventi		Aggiunta gestione sotto sezioni (prop29)
* v. 2.0:		Gestione "citazioni"			Aggiunta gestione citazioni (prop55)
* v. 2.1:		tracciamento Xaxis				Automazione tracciamento perimetro RPM (Mobile)
* v. 2.2:		tracciamento Xaxis				Automazione tracciamento perimetro RPM
* v. 2.3:		TempoReale corriere				Automazione tracciamento TR corriere
* 				Funzione ClearURL				Pulisce url di tracciamento da parametri prop71
* 				Variabile TrackPage				contiene il nome della pagina (file)
* v. 2.4:		Interventi vari					No Scroll, cookie policy, abbonati mobile, richiami ADV RMP
* v. 2.5:		Coupon Fnc						Fnc for Coupon - Kauppa: TrackCoupon(source_name, coupon)
* v. 2.6:		Fix Gallery						Gallery Veneto e Bologna
* v. 2.6b:		Temporeale Fix
* v. 2.7:		Membership track
* v. 2.8:		Membership version prop.
* v. 2.9:		Membership credit by cookie	
*/

/******************************************************************************/
//General FNC
/******************************************************************************/
var TrackPage = (window.location.pathname).substr((window.location.pathname).lastIndexOf("/") + 1);

function readCookie(CookieName) {
	if (document.cookie.length > 0) {
		var inizio = document.cookie.indexOf(CookieName + "=");
		if (inizio != -1) {
			inizio = inizio + CookieName.length + 1;
			var fine = document.cookie.indexOf(";", inizio);
			if (fine == -1)
				fine = document.cookie.length;
			return unescape(document.cookie.substring(inizio, fine));
		} else {
			return "";
		}
	}
	return "";
}

function writeCookie(CookieName, val, exp) {
	var scadenza = new Date();
	var adesso = new Date();
	scadenza.setTime(adesso.getTime() + (parseInt(exp) * 60000));
	document.cookie = CookieName + '=' + escape(val) + '; expires=' + exp + '; path=/';
}

function ClearURL() {
	s.prop71 = "";
	trackURL = document.location.href;
	trackURL = trackURL.replace("&refresh_cens", "");
	trackURL = trackURL.replace("&refresh_ce", "");
	trackURL = trackURL.replace("&refresh_ce-awe", "");
	trackURL = trackURL.replace("&refresh_ce-cp", "");
	return trackURL;
}

/******************************************************************************/

/******************************************************************************/
//cerca se esiste immagine Nielsen
/******************************************************************************/
function checkNielsenImg() {
	if (!jQuery("#nielsen_img").length) {
		jQuery("body").append("<img id='nielsen_chk_img' src='http://images.corriereobjects.it/images/static/common/nib.gif' style='display:none' />");
	}
}

/******************************************************************************/
//Tracciamento jquery nielsen
/******************************************************************************/
function TrackNielsen(refresh_type) {
	checkNielsenImg();

	rnd_number = Math.floor((Math.random()) * 10000000000000);
	url = escape(document.URL);
	jQuery("#nielsen_chk_img").attr("src", "http://secure-it.imrworldwide.com/cgi-bin/m?rnd=" + rnd_number + "&ci=rcs-it&cg=0&si=" + url + "%26" + refresh_type);
}

/******************************************************************************/
//indexOf for ie8 / ie7
/******************************************************************************/
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(elt /*, from*/) {
		var len = this.length >>> 0;

		var from = Number(arguments[1]) || 0;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0)
			from += len;

		for (; from < len; from++) {
			if ( from in this && this[from] === elt)
				return from;
		}
		return -1;
	};
}

/******************************************************************************/
//inizio vscoll DISABILITATO
/******************************************************************************/
/*var vscroll = true;

function vscroll_track(Scrollmax) {
//s.un = 'rcscorriereproddef';
s.linkTrackVars = '';
s.prop70 = Scrollmax + "%";
s.tl('corriere.it', 'o', 'Max scrolling');
}

function VistaVerticale() {
Scrollpos = jQuery(window).scrollTop();
WinHeight = jQuery(window).height();
if (window.innerHeight && window.scrollMaxY) {
TotHeight = window.innerHeight + window.scrollMaxY;
} else if (document.body.scrollHeight > document.body.offsetHeight) {
TotHeight = document.body.scrollHeight;
} else {
TotHeight = document.body.offsetHeight;
}
Vista = Scrollpos + WinHeight;
Perc = (Vista * 100) / TotHeight;
if (Perc > 100) {
Perc = 100;
}
return Math.ceil(Perc);
}

//Script limitato alla sola HP
if ( typeof sezione != 'undefined') {
if (sezione == "home") {
jQuery(window).load(function() {
if (vscroll) {
var ScrollNow = 0;
var Scrollmax = VistaVerticale();

jQuery(window).scroll(function() {
ScrollNow = VistaVerticale();
if (ScrollNow > Scrollmax) {
Scrollmax = ScrollNow;
}
});

jQuery(window).unload(function() {
if (s.pageURL.indexOf('refresh_ce') > -1) {
if (ScrollNow != 0) {
vscroll_track(Scrollmax);
} else {
//console.log("ce presente e no scroll");
}
} else {
vscroll_track(Scrollmax);
}
});
}
});
}
}*/
//fine vscroll

/******************************************************************************/
//se valorizzata firma assegna prop
/******************************************************************************/
if ( typeof (firma) != "undefined") {
	if (firma != "(none)") {
		s.prop38 = firma;
	}
}
//fine firma

/******************************************************************************/
//Membership
/******************************************************************************/

//Overlay
if ( typeof (paywall) != 'undefined') {
	if (paywall.trackoverlay()) {
		s.trackPaywallOverlay();
	}

	//verifico la possibilità che appaia la manina allo scroll
	if (paywall.renderView == "manina") {
		s.events = "event29";
	}
}

//Free trial
if ( typeof (_Freetrial) != 'undefined') {
	if (_Freetrial.tracking() == 2) {
		//Tracciamento Form
		s.pageName = "PAYWALL.COR/trial/subscription_form";
		s.channel = "Paywall";
		s.prop1 = "Trial";
		s.prop2 = "Subscription Form";
		s.eVar9 = "paywall subscription";
		s.events = "event2,event46";
		trackFormAnalysis("trial");
	} else if (_Freetrial.tracking() == 1) {
		//Tracciamento thankyou page attivazione free trial
		s.pageName = "PAYWALL.COR/trial/trial_activation";
		s.channel = "Paywall";
		s.prop1 = "Trial";
		s.prop2 = "Trial Activation";
		s.events = "event2,event3,event35,event48";
	}
}

//Var pagetype, VAS & usertype...
if ( typeof (_apw) != 'undefined') {
	try {
		omn_category = _apw.modules.access.get().category;
		switch(omn_category) {
		case 0:
			s.prop21 = "free";
			break;
		case 1:
			s.prop21 = "freemium";
			break;
		case 2:
			s.prop21 = "postwall";
			break;
		case 3:
			s.prop21 = "premium";
			break;
		case 4:
			s.prop21 = "VAS";
			break;
		}
	} catch(err) {
	}

	try {
		s.prop33 = _apw.modules.access.get().content.toString();
	} catch(err) {
	}

	/*try {
		s.eVar36 = _apw.modules.anonymous_ac.get().used.toString();
	} catch(err) {
	}*/
} else {
	s.prop21 = "free";
}

//Tipologia utente (sottoscrizione)
function readAPW() {
	if ( typeof (_apw) != 'undefined') {
		try {
			if (_apw.modules.subscribers_ac.is_subscribed() == true) {
				s.prop32 = "sottoscritto";
			} else {
				s.prop32 = "non sottoscritto";
			}
			tsnow = new Date().getTime();
			//86400000 = 1 giorno
			writeCookie("OMN_membership", tsnow + ";" + s.prop32, 86400000);
		} catch(err) {
		}
	}
}

if (s.prop15 == "logged in") {
	OMN_membership = readCookie("OMN_membership");
	if ((OMN_membership != "") && (OMN_membership != null)) {
		//verifico data cookie
		OMN_membership = OMN_membership.split(";");
		OMN_membership_created = OMN_membership[0];
		//3600000 = 1h
		if ((Date.now() - OMN_membership_created) <= 3600000) {
			//cookie valido
			s.prop32 = OMN_membership[1];
		} else {
			//cookie scaduto
			readAPW();
		}

	} else {
		//verifico presenza oggetto per estrazione
		readAPW();
	}
}

//tracciamento versione Membership
rcsddfglr = readCookie("rcsddfglr");
if (rcsddfglr!="") {
	rcsddfglr = rcsddfglr.split(".");
	s.prop28 = rcsddfglr[1];
	s.eVar36 = rcsddfglr[2];
} else {
	s.prop28 = "no_cookie";
	s.eVar36 = "0";
}

//tracciamento liste
if ( typeof (tipologia) != 'undefined') {
	if (tipologia == "lista") {
		s.prop55 = tipologia;
	}
}
//fine Membership

//tracciamento citazioni
if ( typeof sezione != 'undefined') {
	if ( typeof (presenza_citazione) != 'undefined') {
		if ((presenza_citazione == "true") || (sezione == "citazioni")) {
			s.prop55 = "citazioni";
		}
	}
}
//fine citazioni

/******************************************************************************/
//Sezioni Expo & sottosezione eventi
/******************************************************************************/
if ( typeof (corriere_expo) != "undefined") {
	s.prop29 = "Expo";
}
if ( typeof (corriere_evento) != "undefined") {
	s.prop29 = corriere_evento;
}
//fine Sezioni Expo

/******************************************************************************/
//Automazione tracciamento perimetro RPM - Sincrono
/******************************************************************************/
try {
	s.prop40 = (document.getElementById("device").innerHTML).toLowerCase();
} catch(e) {
	if ( typeof (corriereDevice) == 'string') {
		s.prop40 = (corriereDevice).toLowerCase();
	} else {
		s.prop40 = "Not Defined";
	}
}

if ( typeof (OAS_sitepage) == 'string') {
	s.prop69 = OAS_sitepage;
}

if ( typeof (OAS_listpos) == 'string') {
	trk_body = document.body.innerHTML;
	var trk_adv_tag = /OAS_AD\(['"](\w+)['"]\);/g;
	var trk_adv_pos = [];
	while (( result = trk_adv_tag.exec(trk_body)) !== null) {
		trk_adv_pos.push(result[1]);
		trk_adv_tag.lastIndex++;
	}
	trk_adv_pos.sort();
	var trk_adv_pos_cln = [];
	$.each(trk_adv_pos, function(i, el) {
		if ($.inArray(el, trk_adv_pos_cln) === -1)
			trk_adv_pos_cln.push(el);
	});

	var trk_adv_pos_str = trk_adv_pos_cln.toString();

	var OAS_list = OAS_listpos.split(",");
	OAS_list.sort();

	s.prop61 = OAS_list.toString() + ";" + trk_adv_pos_str;
}
/*
if ( typeof (listPosDx) == 'string') {
s.prop61 = s.prop61 + "," + listPosDx;
}
*/
//fine Automazione tracciamento perimetro RPM

/******************************************************************************/
//Automazione TR corriere
/******************************************************************************/
if ( typeof (sottolivello1) != "undefined") {
	if (sottolivello1 == "temporeale") {
		//console.log("Tracciamento Temporeale");
		s.channel = "Corriere Sport";
		s.pageName = "Cor/" + s.channel + "/";
		s.prop1 = "Temporeale Calcio";
		s.eVar1 = s.prop1;
		s.prop8 = "Corriere Tempo Reale";
		s.hier1 = "corriere.it," + s.channel + "," + s.prop1;
		s.hier2 = s.channel + "," + s.prop1;
		s.prop2 = $('.list_altre a.title').text();
		s.eVar2 = s.prop2;
		s.prop3 = $.getUrlVar('day');
		s.pageURL = ClearURL();
		s.t();
	}

	var AsyncTrack = function() {
		AjaxPageTrack();
		TrackNielsen("refresh_ce-awe");
	};

	var TrackReload45 = function() {
		//console.log("Tracciamento Temporeale 45");
		s.channel = "Corriere Sport";
		s.pageName = "Cor/" + s.channel + "/";
		s.prop1 = "Temporeale Calcio";
		s.eVar1 = s.prop1;
		s.prop8 = "Corriere Tempo Reale";
		s.hier1 = "corriere.it," + s.channel + "," + s.prop1;
		s.hier2 = s.channel + "," + s.prop1;
		s.prop2 = $('.list_altre a.title').text();
		s.eVar2 = s.prop2;
		s.prop3 = $.getUrlVar('day');

		track_URL = ClearURL() + "&refresh_cens";
		s.pageURL = track_URL;
		s.prop71 = "refresh_cens";
		s.t();
		TrackNielsen("refresh_cens");
	};

	if ((TrackPage == "Gara.shtml") || (TrackPage == "Live.shtml") || (TrackPage == "Postgara.shtml") || (TrackPage == "LiveCompetizione.shtml") || (TrackPage == "LiveCompetizioneSerieA.shtml")) {
		//Tracciamento reload GARA 45"
		//console.log("Avvio Timer");
		setInterval(function() {
			TrackReload45();
		}, 45000);
	}
}
//fine automazione TR corriere

/******************************************************************************/
//Cookie Policy
/******************************************************************************/
if ( typeof (cpmt_trk) == 'string') {
	s.prop37 = cpmt_trk;
}
//fine Cookie Policy

/******************************************************************************/
//Stato abbonamento mobile
/******************************************************************************/
if (readCookie("mobilelogintoken") != "") {
	s.prop30 = "Abbonato";
}
//fine Stato abbonamento mobile

/******************************************************************************/
//Coupon FNC
/******************************************************************************/
var TrackCoupon = function(source_name, coupon_code) {
	var s = s_gi('rcsglobal,rcscorriereproddef');
	s.linkTrackVars = 'eVar5,events';
	s.linkTrackEvents = 'event6';
	s.eVar5 = source_name + '|' + coupon_code;
	s.events = 'event6';
	s.tl(this, 'o', source_name);
}; 
//End Coupon FNC

/******************************************************************************/
// Fix sfoglio Veneto e Bologna
/******************************************************************************/
if ( typeof (resetVars) != "function") {
	function resetVars() {
		//reset variabili motori di ricerca
		s.eVar45 = "";
		s.eVar46 = "";
		s.eVar47 = "";
		s.eVar48 = "";
		s.eVar49 = "";
		s.prop50 = "";
	}
}

if ( typeof (AjaxPageTrack) != "function") {
	function AjaxPageTrack(pagename) {
		resetVars();
		s.prop71 = "";
		if ( typeof pagename != "undefined") {
			if (pagename == "adv_infragallery" || pagename == "adv_slider" || pagename == "adv_refresh") {
				s.prop71 = pagename;
			} else {
				s.pageName = pagename;
			}
		}

		// settaggio variabili
		s.referrer = s.pageURL;

		var ref = document.location.href;
		track_URL = decodeURI(ref + "&refresh_ce-awe");
		s.pageURL = track_URL;

		// chiamata a metrics
		void (s.t());

		// chiamata Nielsen
		if (jQuery("#nielsen_chk_img").length == 0) {
			jQuery("body").append("<img id='nielsen_chk_img'>");
		}

		randomnumber_nielsen = Math.floor((Math.random()) * 10000000000000);
		track_URL = decodeURI(ref) + "%26refresh_ce-awe";
		jQuery("#nielsen_chk_img").attr("src", "http://secure-it.imrworldwide.com/cgi-bin/m?rnd=" + randomnumber_nielsen + "&ci=rcs-it&cg=0&si=" + track_URL);
	}
}