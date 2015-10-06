/*!
 * TrackFunctions.js
 * Date: 03.06.2014
 *
 * Note:
 * Script per il tracciamento Custom Nielsen & Omniture.
 *
 * v. 1.0:		multi-rs				rcsglobal, rcsgazzettapartnerproddef
 * v. 1.1:		vanillamagazine.it		tracciamento gallery automatico
 */

s.un = "rcsglobal,rcsgazzettapartnerproddef";

//estraggo host
host = window.location.href;
var m = host.match(/^http:\/\/[^/]+/);
host = m ? m[0] : null;

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

/******************************************************************************/
//Tracciamento jquery Omniture
/******************************************************************************/
function AjaxPageTrack(pagename) {
	resetVars();
	s.linkTrackVars = "";
	s.linkTrackEvents = "";
	s.pageName = pagename;
	s.prop71 = "refresh_ce-awe";
	s.usePlugins = false;
	s.tl('corriere.it', 'o', 'AjaxPageTrack');
	s.usePlugins = true;
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

/******************************************************************************/
//Tracciamento jquery nielsen
/******************************************************************************/
function TrackNielsen(refesh_type) {
	checkNielsenImg();

	rnd_number = Math.floor((Math.random()) * 10000000000000);
	url = escape(document.URL);
	jQuery("#nielsen_chk_img").attr("src", "http://secure-it.imrworldwide.com/cgi-bin/m?rnd=" + rnd_number + "&ci=rcs-it&cg=0&si=" + url + "%26" + refesh_type);
}

/******************************************************************************/

/******************************************************************************/
//Cookie Policy
/******************************************************************************/
if ( typeof (cpmt_trk) == 'string') {
	s.prop37 = cpmt_trk;
}
//fine Cookie Policy