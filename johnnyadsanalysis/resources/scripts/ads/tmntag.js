tmntag.pubtargets = [];
tmntag.pubtargets.push(['TUUID', '557CDC9BF510457D939FFBA7A25D7910']);
tmntag.pubtargets.push(['mcat', ['i328','i346']]);
tmntag.pubtargets.push(['_pgid', '2402528']);
tmntag.pubtargets.push(['scat', ['p28']]);
tmntag.adtargets = [];
tmntag.markups=[];
tmntag.markupsInfo=[];
tmntag.adtargets['ad_skin']=[];
tmntag.adtargets['div-gpt-ad-1342044737928-1']=[];
tmntag.markups['div-gpt-ad-1342044737928-1']='<script type=\"text\/javascript\" src=\"http:\/\/a377.casalemedia.com\/pcreative?au=4&c=1CED26&pcid=B07A004F0400&pr=50&r=B07A004F&s=2676A&t=55FA654B&u=X2MxY2RhMjQwLU1BQ19fX19fX19fX19f&m=8873d4cd0c211a0a18cd95146921967a&wp=F&cp=0.06&aid=C6994160BCD65D87&tid=3859&dm=5F&n=www.howtogeek.com\"><\/script>\n<script type=\'text\/javascript\'>\n!(function() {\n\nvar rnd = Math.floor(Math.random() * 11000);\nvar e   = document.createElement(\'script\');\ne.type  = \'text\/javascript\';\ne.src = \'http:\/\/ads.servebom.com\/event.js?t=CP&id=3534939197999944&bid=10&cp=0.06&z=300x250&bdrid=2&crid=1895718&ad=groupon.it&e=&r=\'+rnd+\'&l=http://www.howtogeek.com/115483/htg-explains-learn-how-websites-are-tracking-you-online/\';\nvar scripts = document.getElementsByTagName(\'script\')[0];\nscripts.parentNode.insertBefore(e, scripts);\n\ne = document.createElement(\'script\');\ne.type = \'text\/javascript\';\ne.src = \'http:\/\/pixelus.alephd.com\/post_purch?GAa8=aG93dG9nZWVrLmNvbV9kaXYtZ3B0LWFkLTEzNDIwNDQ3Mzc5MjgtMV8zMDB4MjUw&e9iH=557CDC9BF510457D939FFBA7A25D7910&2jSB=0.12&-Z06=0.06&b6lE=&vKcZ=1442473292041&Dsph=0&L4DK=www.howtogeek.com&0ZGY=0&wziz=0&DH5k=193.205.162.64&7Z7R=0&PASL=0&9VuX=0&Fsrl=0&aNVl=2&rZzC=http%3A%2F%2Fwww.howtogeek.com%2F115483%2Fhtg-explains-learn-how-websites-are-tracking-you-online%2F\';\nvar scripts = document.getElementsByTagName(\'script\')[0];\nscripts.parentNode.insertBefore(e, scripts);\n\n})();\n<\/script>';
tmntag.markupsInfo['div-gpt-ad-1342044737928-1']={};
tmntag.markupsInfo['div-gpt-ad-1342044737928-1']['width']=300;
tmntag.markupsInfo['div-gpt-ad-1342044737928-1']['height']=250;
tmntag.adtargets['div-gpt-ad-1342044737928-1'].push(['adunit', 'div-gpt-ad-1342044737928-1']);
tmntag.adtargets['div-gpt-ad-1342044737928-1'].push(['_bd', 'bid']);
tmntag.adtargets['div-gpt-ad-1342044737928-1'].push(['_pr', '0.06']);
tmntag.adtargets['div-gpt-ad-1342044737928-1'].push(['_pl', '0.06']);
tmntag.adtargets['div-gpt-ad-1342044737928-1'].push(['_br', '15108529']);
tmntag.adtargets['div-gpt-ad-1342044737928-1'].push(['_sz', '2']);
tmntag.adtargets['div-gpt-ad-1342044737928-2']=[];
tmntag.adtargets['div-1342-3']=[];
tmntag.adtargets['div-1342-3'].push(['adsense3', 'adsense3']);
tmntag.adtargets['div-gpt-ad-1342044737928-12']=[];
tmntag.adtargets['div-gpt-ad-1342044737928-14']=[];
/*Purch Ad Tag V1.1*/
top.window.requestid='3534939197999944';
var tmntag_defineSlots = function () {
	if(typeof tmntag!='undefined' && typeof tmntag.a!='undefined') {
	   for (var i=0; i<tmntag.a.length; i++) {
	      var slot;
	      var unit = tmntag.a[i];
	
	      if (unit.z) {
	         slot = googletag.defineSlot(unit.s, unit.z, unit.d).addService(googletag.pubads());
	      } else {
	         var e = document.getElementById(unit.d);
	         if (e) { e.style.height="0px"; }
	         slot = googletag.defineOutOfPageSlot(unit.s, unit.d).addService(googletag.pubads());
	      }
	      if (unit.c) {
	    	  slot.addService(googletag.companionAds().setRefreshUnfilledSlots(unit.c));
	      }
	      tmntag.slots[unit.d]=slot;
	      if(typeof tmntag.adtargets!='undefined') {
	         var targetData = tmntag.adtargets[unit.d];
	         for (var j=0; typeof targetData!='undefined' && j<targetData.length; j++) {
	            if(targetData[j][0]==='_bd' && targetData[j][1]==='deal') targetData[j][1]='bid';
	            slot.setTargeting(targetData[j][0], targetData[j][1]);
	         }
	      }
	
	      if(tmntagCache && typeof tmntagCache[i].sizeMapping!='undefined') {
	        slot.defineSizeMapping(tmntagCache[i].sizeMapping);
	      }
	   }
	}
}
tmntag.isAb = false;
googletag.cmd.push(function() {

   if(typeof tmntag_defineSlot === "function" && typeof tmntag!='undefined' && typeof tmntag.a!='undefined') {
      for (var i=0; i<tmntag.a.length; i++) {
         var unit = tmntag_getAdunitFromCache(tmntag.a[i].d);
         if (typeof unit.adunitRule == 'undefined') {
            tmntag_defineSlot(tmntag.a[i].d);
         } else {
            tmntag.enableSingleRequest();
            tmntag.disableInitialLoad();
         }
      }
   } else {
      tmntag_defineSlots();
   }
	
	if(typeof tmntag!='undefined' && typeof tmntag.pubtargets!='undefined') {
		for (var i=0; i<tmntag.pubtargets.length; i++) {
			googletag.pubads().setTargeting(tmntag.pubtargets[i][0], tmntag.pubtargets[i][1]);
		}
	}

	if(typeof tmntag!='undefined' && typeof tmntag.su!='undefined' && tmntag.su===1 && typeof tmntag.l!='undefined') {
		googletag.pubads().set("page_url", decodeURIComponent(tmntag.l));
	}

	if(typeof tmntag!='undefined' && typeof tmntag.sr!='undefined' && tmntag.sr==true) {
		 googletag.pubads().enableSingleRequest();
	}
	
	if(typeof tmntag!='undefined' && typeof tmntag_il!='undefined' && tmntag_il==false) {
		googletag.pubads().disableInitialLoad();
	}
	
	if(typeof tmntag!='undefined' && typeof tmntag.ced!='undefined' && tmntag.ced==true) {
		 googletag.pubads().collapseEmptyDivs();
	}

	googletag.enableServices();
	tmntag_setGptLoaded();
	tmntag_callbacks.executeCallbacks();
});
for (divid in tmntag.slots) {
	var e = document.getElementById(divid);
	if (e && typeof e !='undefined' && tmntagDisplayed && tmntagDisplayed[divid]==1) {
		googletag.cmd.push(function() { googletag.display(divid); });
	}
}

if(typeof tmntag!='undefined' && typeof tmntag_il!='undefined' && tmntag_il==false){
	googletag.cmd.push(function() { googletag.pubads().refresh(); });
}
/* Bluekai*/
(function(){
var _bkID = '19483';
if (_bkID=='' || _bkID.indexOf('$')==0) {
	_bkID='20915';
}
window.bk_async = function() {
var _visitorID = '557CDC9BF510457D939FFBA7A25D7910';
if (_visitorID!='' && _visitorID.indexOf('$')!=0) {
    bk_addPageCtx('pid', '557CDC9BF510457D939FFBA7A25D7910');
}
BKTAG.doTag(_bkID, 4); };
(function() {
   var scripts = document.getElementsByTagName('script')[0];
   var s = document.createElement('script');
   s.async = true;
   s.src = 'http://tags.bkrtx.com/js/bk-coretag.js';
   scripts.parentNode.insertBefore(s, scripts);
}());
})();
/* /Bluekai*/

/* Comscore */
var _comscoreID = '${PAGE_DOMAIN:COMSCORE_ID}';
if (_comscoreID!='' && _comscoreID.indexOf('$')!=0
   && (tmntag_IEVersion()==-1 || tmntag_IEVersion()>8)) {
    var scripts = document.getElementsByTagName('script')[0];
	var s = document.createElement('script');
	s.src = (document.location.protocol=="https:"?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";
	scripts.parentNode.insertBefore(s, scripts);
   
	s = document.createElement('script');
	s.innerHTML = "setTimeout('COMSCORE.beacon({"+
		   "c1:2," +
		   "c2:\""+_comscoreID+"\"," +
           "c3:\""+_comscoreID+"\"," +
           "c4:\"http://www.howtogeek.com/115483/htg-explains-learn-how-websites-are-tracking-you-online/\"," +
           "c5:\"Technology - News\"," +
           "c6:\"\"," +
           "c15:\"\"" +
		   "});', 3000);";
   scripts.parentNode.insertBefore(s, scripts);
}
/* /Comscore */

/* Exelate */
(function(){
	var _exelateIDg = '${PAGE_DOMAIN:EXELATE_IDG}';
	var _exelateIDc = '${PAGE_DOMAIN:EXELATE_IDC}';
	if (_exelateIDc.indexOf('$')==0) {
		_exelateIDc = '';
	}
	if (_exelateIDg!='' && _exelateIDg.indexOf('$')!=0) {
		var xl8_script = document.createElement("script");		xl8_script.src = "http://loadus.exelator.com/load/?p=274&g="+_exelateIDg+"&c="+_exelateIDc+"&ctg=&subctg=&age=&gd=&j=d";		xl8_script.type = "text/javascript"; 
		xl8_script.async = true; 
		if (document.body) document.body.appendChild(xl8_script);
		var scripts = document.getElementsByTagName('script')[0];
		scripts.parentNode.insertBefore(xl8_script, scripts);
	}
})();
/* /Exelate*/

/* CAX Sync */
function _tmnSyncCAX() {
try {
   if (document.body) {
      var s = document.createElement('iframe');
      var r = Math.floor(Math.random() * 11000);
      s.style.display = 'none';
      s.src = "http://ip.casalemedia.com/usermatch?r="+r+"&s=181869&cb=http%3A%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+r+"%26svc%3Dus%26id%3D2%26uid%3D";
      document.body.appendChild(s);
   } else {
      setTimeout(_tmnSyncCAX, 1000);
   }
} catch(e) {
   console.error(e);
}
}
_tmnSyncCAX();
/* /CAX Sync */

/* Pubmatic User Sync */
(function(){
try{
var s = document.createElement("span");
var r = Math.floor(Math.random() * 11000);
s.style.display='none';
s.innerHTML = "<iframe style=\"display:none\" src=\"http:\/\/ads.pubmatic.com\/AdServer\/js\/user_sync.html?r="+r+"&p=46338&predirect=http%3A%2F%2Fads.servebom.com%2Fpartner%3Fcd%3D"+r+"%26svc%3Dus%26id%3D5%26uid%3D\"><\/iframe>";
document.body.appendChild(s);
}catch(e){
	console.error(e)
}
})();
/* /Pubmatic User Sync */

/* Bombora CCM Pixel */
(function(){
  //ccm informer
  (function(f,i,c){var a=decodeURIComponent,e="",l="",o="||",g=";;",h="split",b="length",j="indexOf",k=0,n="localStorage",m="_ccmdt";f[c]=f[c]||{};function d(q){var p;if(f[n]){return f[n][q]||""}else{p=i.cookie.match(q+"=([^;]*)");return(p&&p[1])||""}}f[c].us={};e=a(d(m))[h](o);k=e[b];if(k>0){while(k--){l=e[k][h]("=");if(l[b]>1){if(l[1][j](g)>-1){f[c].us[l[0]]=l[1][h](g);f[c].us[l[0]].pop()}else{f[c].us[l[0]]=l[1]}}}}})(window,document,"_ml");

  //ccm tag
  (function () {
    _ml = window._ml || {};
    _ml.eid = '50109';
    _ml.ef = ['#email','#Email','#email_address','#emailAddress','#uid','#ftemtxt','#new-account-email','#login-account-name','*ml_email','*email','*username'];
    _ml.redirect = 'http://tags.bluekai.com/site/20486?limit=0&id=[PersonID]';
    _ml.informer = {
      enable: true
                   };
    var s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');
    mltag.type = 'text/javascript'; mltag.async = true;
    mltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();
    s.parentNode.insertBefore(mltag, s);
  })();

})();
/* /Bombora CCM Pixel */

/* Cross Pixel */
try {
   (function() {
      var _xID = '2123';
      if (_xID=='' || _xID.indexOf('$')==0) return;
      var cb = new Date().getTime();
      var s = document.createElement("script");
      s.defer = true;
      s.src = "//tag.crsspxl.com/s1.js?d="+_xID+"&cb="+cb;
      var s0 = document.getElementsByTagName('script')[0];
      s0.parentNode.insertBefore(s, s0);
   })();
} catch (e) {console.log(e);}
/* /Cross Pixel */

/* Magnetic */
var _mag = _mag || {};
(function(_mag){
  try{
    var pubtarget = '';
    _mag.kw = '';

    for (var i = tmntag.pubtargets.length - 1; i >= 0; i--) {
      pubtarget = tmntag.pubtargets[i]
      if (pubtarget[0] === "kw" ) {
        _mag.kw = pubtarget[1].toString().replace(/-/g , " ").replace(/_/g , " ");   
      }
    };
    _mag.kw_encoded = 0;

    _mag.shortName = 'purch-electronics';
    _mag.default_protocol = ('https:' == document.location.protocol ? 'https:' : 'http:');
    _mag.startTime = (new Date()).getTime();
    if (_mag.kw !== '') {
      (function(d,t) {
        var mag = d.createElement('script'); mag.type = 'text/javascript'; mag.async = true; mag.src = t;
        var head = d.getElementsByTagName('head')[0] || d.documentElement; head.insertBefore(mag, head.firstChild);
      }) (document,  _mag.default_protocol + '//d3ezl4ajpp2zy8.cloudfront.net/purch-electronics_tag.js');      
    };
  } catch (e) {
    console.log(e);
  }

})(_mag);
/* /Magnetic */

/* Yellowhammer User Sync */
(function(){
try{
if (!document.body) return;
var rnd = Math.floor(Math.random() * 11000);
var s = document.createElement('span');
s.style.display='none';
s.innerHTML = "<iframe style=\"display:none\" src=\"http:\/\/dmp.springserve.com\/getuuid?rnd="+rnd+"&returl=http%3A%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+rnd+"%26svc%3Dus%26id%3D10%26uid%3DYH_UUID\"><\/iframe>";
document.body.appendChild(s);
}catch(e){
	console.error(e)
}
})();
/* /Yellowhammer User Sync */

/* Sonobi User Sync */
var sonobiUserPixel = function(){
    try {
console.log("*** Sonobi User Sync 1 ***");
    var s = document.createElement('iframe');
    var r = Math.floor(Math.random() * 11000);
    s.style.display='none';
    s.src="http://purch.sync.go.sonobi.com/us?http://ads.servebom.com/partner?cb="+r+"&svc=us&id=9&uid=[UID]";
    document.body.appendChild(s);
console.log("*** Sonobi User Sync 2 ***");
    } catch(e) {
      console.error(e)
    }
};
window.tmntag_ready(sonobiUserPixel);
/* /Sonobi User Sync */
