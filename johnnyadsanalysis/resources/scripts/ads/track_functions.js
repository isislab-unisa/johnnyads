function resetVars() {
	s.eVar45 = "";
	s.eVar46 = "";
	s.eVar47 = "";
	s.eVar48 = "";
	s.eVar49 = "";
	s.eVar68 = "";
	s.prop50 = "";
	s.events = "event2";
	s.products = "";
	s.eVar31 = "";
	s.purchaseID = "";
}

function omn_login(source) {
	resetVars();
	s.referrer = s.pageURL;
	s.pageURL = decodeURI(document.location.href + "&refresh_ce-awe");
	s.pageName = "BPT.COR/Login";
	s.eVar68 = source;
	s.events = "event7";
	void (s.t());
}

function omn_inizioregistrazione() {
	resetVars();
	s.referrer = s.pageURL;
	s.pageURL = decodeURI(document.location.href + "&refresh_ce-awe");
	s.pageName = "BPT.COR/InizioRegistrazione";
	s.events = "event2, event46";
	void (s.t());
}

function omn_fineregistrazione() {
	resetVars();
	s.referrer = s.pageURL;
	s.pageURL = decodeURI(document.location.href + "&refresh_ce-awe");
	s.pageName = "BPT.COR/FineRegistrazione";
	s.events = "event2, event48";
	void (s.t());
}

function omn_doubleoptin() {
	resetVars();
	s.referrer = s.pageURL;
	s.pageURL = decodeURI(document.location.href + "&refresh_ce-awe");
	s.pageName = "BPT.COR/DoubleOptIn";
	s.events = "event2, event3";
	void (s.t());
}

/******************************************************************************/
//Cookie Policy
/******************************************************************************/
if ( typeof (cpmt_trk) == 'string') {
	s.prop37 = cpmt_trk;
}
//fine Cookie Policy