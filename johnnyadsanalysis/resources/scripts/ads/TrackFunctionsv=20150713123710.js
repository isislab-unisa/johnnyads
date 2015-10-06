/*
* TrackFunctions.js
*
* Note:
* Script per il tracciamento Nielsen & Omniture.
*
* v. 1.0:		funzione checkNielsenImg()		Cerca e nel caso appende l'immagine per l'invio della chiamata Nielsen
* 				funzione TrackNielsen			Gestione tracciamento Nielsen sfoglie e refresh
* 												ex#1: TrackNielsen("refresh-cens");
*	 											ex#2: TrackNielsen("refresh_ce-awe");
*
* v. 1.1:		vscroll							Tracciamento % di scroll verticale
* v. 1.2		vscroll							Corretti conflitti con script tracciamento menu
* v. 1.3		fnc registrazione				Aggiunta funzione conferma registrazione da overlay e restvars();
* v. 1.4		fix refresh_ce-awe
* v. 1.5		funzione AjaxPageTrackPV()		Aggiunta funzione che permette il tracciamento di pagine senza refresh come PV (no custom link)
* v. 1.6		Cookie policy prop37
* v. 1.7:		Coupon Fnc						Fnc for Coupon - Kauppa: TrackCoupon(source_name, coupon)
* v. 1.8:		tracciamento Xaxis				Automazione tracciamento perimetro RPM
* 				disattivazione vscroll
* v. 1.8b:		Temporeale Fix
*/

/******************************************************************************/
//funzione di reset variabili Omniture
/******************************************************************************/

function resetVars() {
	s.eVar9 = "";
	s.eVar45 = "";
	s.eVar46 = "";
	s.eVar47 = "";
	s.eVar48 = "";
	s.eVar49 = "";
	s.eVar68 = "";
	s.prop50 = "";
	s.events = "event2";
	s.eVar31 = "";
	s.purchaseID = "";
	s.products = "";
}

/******************************************************************************/
//funzione tracciamento overlay conferma registrazione
/******************************************************************************/

function omn_registrazione(regsource) {
	//tracciamento overlay di conferma registrazione
	resetVars();
	s.events = "event2, event48";
	s.eVar9 = "Gazzaspace";
	s.eVar68 = regsource;
	//"Gazzetta", "Google+" oppure "Facebook"
	void (s.t());
}

if ( typeof (reg_pageName) !== "undefined") {
	s.pageName = reg_pageName;
}
if ( typeof (reg_events) !== "undefined") {
	s.events = reg_events;
}
if ( typeof (reg_eVar9) !== "undefined") {
	s.eVar9 = reg_eVar9;
}
if ( typeof (reg_eVar68) !== "undefined") {
	s.eVar68 = reg_eVar68;
}

/******************************************************************************/
//Tracciamento jquery Omniture
/******************************************************************************/
function AjaxPageTrack(pagename) {
	resetVars();
	s.linkTrackVars = "";
	s.linkTrackEvents = "";
	s.pageName = pagename;
	s.referrer = s.pageURL;
	track_URL = decodeURI(document.location.href + "&refresh_ce-awe");
	s.pageURL = track_URL;
	s.prop71 = "refresh_ce-awe";
	s.usePlugins = false;
	s.tl('corriere.it', 'o', 'AjaxPageTrack');
	s.usePlugins = true;
}

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
//inizio vscoll
/******************************************************************************/
/*var vscroll = true;

function vscroll_track(Scrollmax) {
	//s.un = 'rcsgazzettaproddef';
	s.linkTrackVars = '';
	s.prop70 = Scrollmax + "%";
	s.usePlugins = false;
	s.tl('gazzetta.it', 'o', 'Max scrolling');
	s.usePlugins = true;
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

	jQuery(window).load(function() {
		if (sezione == "home") {
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
		}
	});
}*/
//fine vscroll

/******************************************************************************/
//TempoReale tennis
/******************************************************************************/
if (( typeof (sezione) != "undefined") && ( typeof (competizione) != "undefined")) {
	if ((sezione == "temporeale") && (competizione == "tennis")) {
		s.pageName = "GAZ/Live/";
		s.channel = "Live";
		s.events = "event2";
		s.prop1 = "Tennis";
		s.eVar1 = "Tennis";
		s.prop2 = torneo;
		s.eVar2 = torneo;
		s.prop8 = "Gazzetta Temporeale";
		s.hier1 = "gazzetta.it,Live,Tennis,partita";
		s.hier2 = "Live,Tennis,partita";
	}
}

function track_TR_light() {
	if (s.pageURL.indexOf("&refresh_cens") < 0)
		s.pageURL = s.pageURL + "&refresh_cens";
	s.pageName = "GAZ/Live/";
	s.channel = "Live";
	s.events = "event2";
	s.prop1 = "Tennis";
	s.eVar1 = "Tennis";
	s.prop2 = torneo;
	s.eVar2 = torneo;
	s.prop8 = "Gazzetta Temporeale";
	s.hier1 = "gazzetta.it,Live,Tennis,partita";
	s.hier2 = "Live,Tennis,partita";
	s.t();
}

/******************************************************************************/

/******************************************************************************/
//Tracciamento PV sfogli | reset var custom e pagina vista
/******************************************************************************/
function AjaxPageTrackPV() {
	s.clearVars();
	s.t();
}

/******************************************************************************/

/******************************************************************************/
//Cookie Policy
/******************************************************************************/
if ( typeof (cpmt_trk) == 'string') {
	s.prop37 = cpmt_trk;
}
//fine Cookie Policy

/******************************************************************************/
//Coupon FNC
/******************************************************************************/
var TrackCoupon = function(source_name, coupon_code) {
	var s = s_gi('rcsglobal,rcsgazzettaproddef');
	s.linkTrackVars = 'eVar5,events';
	s.linkTrackEvents = 'event6';
	s.eVar5 = source_name + '|' + coupon_code;
	s.events = 'event6';
	s.tl(this, 'o', source_name);
};
//End Coupon FNC

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