
	        CQ_Analytics.registerAfterCallback(function(options) {
	            if(!options.compatibility && $CQ.inArray( options.componentPath, CQ_Analytics.Sitecatalyst.frameworkComponents) < 0 )
	                return false;    // component not in framework, skip SC callback
	            CQ_Analytics.Sitecatalyst.saveEvars();
	            CQ_Analytics.Sitecatalyst.updateEvars(options);
	            CQ_Analytics.Sitecatalyst.updateLinkTrackVars();
	            return false;
	        }, 10);
	
	        CQ_Analytics.registerAfterCallback(function(options) {
	            if(!options.compatibility && $CQ.inArray( options.componentPath, CQ_Analytics.Sitecatalyst.frameworkComponents) < 0 )
	                return false;    // component not in framework, skip SC callback
	            s = s_gi("omniturecmocomprod");
	            if (s.linkTrackVars == "None") {
	                s.linkTrackVars = "events";
	            } else {
	                s.linkTrackVars = s.linkTrackVars + ",events";
	            }
	            CQ_Analytics.Sitecatalyst.trackLink(options);
	            return false;
	        }, 100);
	
	
	        CQ_Analytics.registerAfterCallback(function(options) {
	            if(!options.compatibility && $CQ.inArray( options.componentPath, CQ_Analytics.Sitecatalyst.frameworkComponents) < 0 )
	                return false;    // component not in framework, skip SC callback
	            CQ_Analytics.Sitecatalyst.restoreEvars();
	            return false;
	        }, 200);
	
	        CQ_Analytics.adhocLinkTracking = "false";
	        
	
	
	        var s_account = "omniturecmocomprod";
	        var s = s_gi(s_account);
	        s.fpCookieDomainPeriods = "2";
	        s.currencyCode= 'USD';
        s.trackInlineStats= true;
        s.linkTrackVars= 'None';
        s.charSet= 'UTF-8';
        s.linkLeaveQueryString= false;
        s.linkExternalFilters= '';
        s.linkTrackEvents= 'None';
        s.trackExternalLinks= true;
        s.linkDownloadFileTypes= 'exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls';
        s.linkInternalFilters= 'javascript:,'+window.location.hostname;
        s.trackDownloadLinks= true;
        
        s.visitorNamespace = "cmocom";
        s.trackingServer = "cmocom.112.2o7.net";
        s.trackingServerSecure = "cmocom.112.2o7.net";
        
        /* Array of US DST dates */
s._tpDST = {
2013:'3/10,11/3',
2014:'3/9,11/2',
2015:'3/8,11/1',
2016:'3/13,11/6',
2017:'3/12,11/5',
2018:'3/11,11/4',
2019:'3/10,11/3',
2020:'3/8,11/1',
2021:'3/14,11/7',
2022:'3/13,11/6',
2023:'3/12,11/5'}


/* Form Analysis Config*/
s.formList = "registration-form";
s.trackFormList = true;
s.trackPageName = true;
s.useCommerce = true;
s.varUsed = "eVar19";
s.eventList = "event11"; /* Abandon,Success,Error */ /* Channel Manager Plug-In Configuration */

/* Channel Manager Config */
s._channelDomain = "Omniture|omniture.com>Facebook|facebook.com>Twitter|twitter.com>YouTube|youtube.com>LinkedIn|linkedin.com>MySpace|myspace.com>Other Social Media|digg.com,flickr.com,stumbleupon.com,del.icio.us,reddit.com,metacafe.com,technorati.com";

s.usePlugins = true;
function s_doPlugins(s) { 
	
	/* Remove formatting and set all props/evars to lower case */
	var re = /[^a-z0-9\-_:,.\* ]/ig;
	for (var i = 1; i < 29; i++) {
		if (s['prop' + i]) {
			s['prop' + i] = s['prop' + i].toLowerCase().replace(re, '');
		}
	}
	for (var j = 1; j < 51; j++) {
		if (s['eVar' + j]) {
			s['eVar' + j] = s['eVar' + j].toLowerCase().replace(re, '');
		}
	}
		
	/* Page Views for Conversions */
	s.events = s.apl(s.events, 'event2', ',', 2); 
	
	/* Determine Platform */
	s.prop9 = window.location.host.match('^m\.') ? 'mobile' : 'www';
	
	/* Domain */
	s.server = window.location.host;
	
	/* External Campaign Tracking */
	if (!s.campaign) {
		s.campaign = s.getQueryParam('cmpid');
	}
	s.campaign = s.getValOnce(s.campaign, 's_campaign', 0); 
	
	/* Site Search */
	if (s.prop7) {
		s.prop7 = s.prop7.toLowerCase();
		s.eVar7 = s.prop7;
		var t_search = s.getValOnce(s.eVar7, 's_evar7', 0);
		if (t_search) {
			s.events = s.apl(s.events, 'event1', ',', 2);
		}
	}
	
	/* Enhanced Download Tracking */
	var dl = s.downloadLinkHandler()
	if (dl) {
		s.eVar18 = dl.substring(dl.lastIndexOf('/') + 1, dl.length);
		s.events = s.apl(s.events, 'event10', ',', 1);
		s.linkTrackVars = 'eVar18,events';
		s.linkTrackEvents = 'event10';
	}
	
	/* Calendar Event Tracking */
	var el = s.exitLinkHandler()
	if (el && window.location.href.match(/\/events\/?/)) {
		s.eVar31 = el;
		s.events = s.apl(s.events, 'event31', ',', 1);
		s.linkTrackVars = 'eVar31,events';
		s.linkTrackEvents = 'event31';
	}
	
	/* New vs Repeat (Set to expire after 1 year */
	s.prop24 = s.getNewRepeat(365);
	
	/* Set Time Parting Variables */
	if (!s.prop8) {
		s.prop8 = s.getTimeParting('n', '-7');
	}

	/* Authentication Status */
	s.prop15 = (s.prop11 == 'anonymous') ? 'not logged in' : 'logged in';

	/* Plugin Example: trackTNT 1.0     */ 
	s.tnt = s.trackTNT();

	/* formAnalysis 2.1  */
	s.setupFormAnalysis();
	
	/* Channel Manager */
	s.channelManager('cmp,cmpid,cid,s_kwcid', ':', 's_cm', '0', 's_cm2cm');
	if (s._channel == "Natural Search") {
		s._channel = "Organic";
		s._campaign = s._partner + "-" + s._channel + "-" + s._keywords.toLowerCase();
		s.eVar42 = s._partner + "-" + s._channel + "-" + s._keywords.toLowerCase();
	}
	if (s._channel == "Paid Search") {
		s.eVar42 = s._campaign;
	}
	if (s._channel == "Referrers") {
		s._channel = "Other Referrers";
		s._campaign = s._channel + "-" + s._referringDomain;
	}
	if (s._keywords == "n/a" || s._keywords == "Keyword Unavailable"){
		s._keywords = ''; //we don't want to stack n/a or keyword unavailable
	}
	s.eVar39 = s._referrer;
	s.eVar40 = s._referringDomain;
	s.eVar41 = s._partner; /* eVar42 is used for just SE Paid/Natural */
	s.eVar43 = s._campaignID; /* Only Paid */
	s.eVar44 = s._campaign; /* Unified Acquisition Sources */
	s.eVar45 = s._keywords;
	s.eVar46 = s._channel;
	
	
	s.clickPast(s._campaign, 'event27', 'event28');
	s.eVar47 = s.crossVisitParticipation(s._campaign, 's_cpmcvp', '30', '5', '>', '', 1);
	s.eVar48 = s.crossVisitParticipation(s._keywords, 's_kwdcvp', '30', '5', '>', '', 1); 
	
	/* manageQueryParam 1.2 */
	if (s.getQueryParam('s_kwcid')) {
		s.pageURL = s.manageQueryParam('s_kwcid', 1, 1);
	} 
	
	/* Internal Campaign Tracking */
	if (!s.eVar50) {
		s.eVar50 = s.getQueryParam('intcmp');
	}
	s.eVar50 = s.getValOnce(s.eVar50, 's_evar50', 0); 
	
	/* Previous Page Name */
	s.prop23 = s.getPreviousValue(s.pageName,'s_prop23','');
	
	/* Percent of page viewed */
	var ppvArray = s.getPercentPageViewed(s.pageName);
	if (typeof(ppvArray[1]) != 'undefined') {
		s.prop26 = ppvArray[2] + ':' + ppvArray[1] //onload : total viewed
	}
	var url = s.exitLinkHandler()
	if(url) {
		s.linkTrackVars = 'prop23,prop26';
		var ppvArray = s.getPercentPageViewed(s.pageName);
		s.prop26 = ppvArray[2] + ':' + ppvArray[1] //onload : total viewed
	}
	
	/* Version Control */
	if (!s.prop36) {
		s.prop36 = s.version;
	}
	
	/* DemandBase Variables */
	if(typeof(dbo) != 'undefined'){
		s.prop55 = dbo.audience || "no data" ;
		s.prop56 = dbo.audience_segment || "no data" ;
		s.prop57 = dbo.company_name || "no data" ;
		s.prop58 = dbo.industry || "no data" ;
		s.prop59 = dbo.sub_industry || "no data" ;
		s.prop60 = dbo.employee_range || "no data" ;
		s.prop61 = dbo.revenue_range || "no data" ;
		s.prop62 = dbo.country || "no data" ;
	}

	//Dynamically copy values
	if (s.pageName && !s.eVar11) s.eVar11 = "D=pageName";
	if (s.channel && !s.eVar12) s.eVar12 = "D=ch";
	if (s.prop1 && !s.eVar1) s.eVar1 = "D=c1";
	if (s.prop2 && !s.eVar2) s.eVar2 = "D=c2";
	if (s.prop3 && !s.eVar3) s.eVar3 = "D=c3";
	if (s.prop4 && !s.eVar4) s.eVar4 = "D=c4";
	if (s.prop5 && !s.eVar5) s.eVar5 = "D=c5";
	if (s.prop6 && !s.eVar6) s.eVar6 = "D=c6";
	if (s.prop7 && !s.eVar7) s.eVar7 = "D=c7";
	if (s.prop8 && !s.eVar8) s.eVar8 = "D=c8";
	if (s.prop9 && !s.eVar9) s.eVar9 = "D=c9";
	if (s.prop15 && !s.eVar15) s.eVar15 = "D=c15";
	if (s.prop20 && !s.eVar20) s.eVar20 = "D=c20";
	if (s.prop21 && !s.eVar21) s.eVar21 = "D=c21";
	if (s.prop22 && !s.eVar22) s.eVar22 = "D=c22";
	if (s.prop23 && !s.eVar23) s.eVar23 = "D=c23";
	if (s.prop28 && !s.eVar28) s.eVar28 = "D=c28";
	if (s.prop35 && !s.eVar35) s.eVar35 = "D=c35";
	if (s.prop36 && !s.eVar36) s.eVar36 = "D=c36";
	if (s.prop55 && !s.eVar55) s.eVar55 = "D=c55";
	if (s.prop56 && !s.eVar56) s.eVar56 = "D=c56";
	if (s.prop57 && !s.eVar57) s.eVar57 = "D=c57";
	if (s.prop58 && !s.eVar58) s.eVar58 = "D=c58";
	if (s.prop59 && !s.eVar59) s.eVar59 = "D=c59";
	if (s.prop60 && !s.eVar60) s.eVar60 = "D=c60";
	if (s.prop61 && !s.eVar61) s.eVar61 = "D=c61";
	if (s.prop62 && !s.eVar62) s.eVar62 = "D=c62";
	if (!s.eVar25 && !s.prop25) s.eVar25 = s.prop25 = "D=g";
	if (s.campaign && !s.prop16) s.prop16 = "D=v0";
	if (s.prop24 && !s.eVar24) s.eVar24 = "D=c24";
	
	/* Lowercase all variables */
    s.manageVars('lowercaseVars');
}
s.doPlugins = s_doPlugins;



