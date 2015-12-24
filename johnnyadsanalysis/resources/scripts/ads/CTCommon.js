var track_URL = "://sftrack.searchforce.net/SFConversionTracking/img.jpg?";
var sf_cookie_name = "sf_conv_info";
var jIncludeCustomParams = false;
var jtrackOrganic = false;
var jtrackDirect = false;
var jSEOPubName = 'SEO';
var jDirectCampName = 'Direct Traffic';
var jFlIncluded = false;
var jLandEvtRec = false;
var sfcookData;
var jexecLngCode = false;
var jexecConvCode = false;
var SFCookie = {
	movie_id : 'sfFlsPix',
	swfSrc : '://sftrack.searchforce.net/SFConversionTracking/SFCookie.swf',
	flashIsInstalled : null,
	defaultFlashVersion : 9,
	swf_ready : false,
	flash_cookie : null,
	include : function() {
		jFlIncluded = false;
		var a = "http";
		if (window.location.protocol == "https:") {
			a = "https"
		}
		var b = a + this.swfSrc;
		var c = document.getElementById('sf_fl_content');
		this.flashIsInstalled = this.checkForFlash(this.defaultFlashVersion);
		if (c && this.flashIsInstalled) {
			if (navigator.appName.indexOf("Microsoft") != -1) {
				var d = '<object id="'
						+ this.movie_id
						+ '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1">';
				var e = '<param name="allowScriptAccess" value="always"/>';
				e += '<param name="movie" value="' + b + '"/>';
				var f = '</object>';
				c.innerHTML = d + e + f
			} else {
				var g = '<embed id="'
						+ this.movie_id
						+ '" src="'
						+ b
						+ '" type="application/x-shockwave-flash" width="1" height="1" allowScriptAccess="always"/>';
				c.innerHTML = g
			}
			jFlIncluded = true
		}
	},
	checkForFlash : function(a) {
		this.flashIsInstalled = false;
		if (navigator.plugins != null
				&& (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]))
			this.flashIsInstalled = true;
		if (navigator.mimeTypes
				&& navigator.mimeTypes["application/x-shockwave-flash"])
			this.flashIsInstalled = true;
		if (this.flashIsInstalled == false) {
			try {
				var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				if (b)
					this.flashIsInstalled = true
			} catch (e) {
				this.flashIsInstalled = false
			}
		}
		return this.flashIsInstalled
	},
	initC : function() {
		this.swf_ready = this.get_movie()
	},
	delC : function(a, b) {
		if (this.swf_ready && this.flash_cookie != null)
			this.flash_cookie.sfDeleteCookie(a, b)
	},
	getC : function(a, b) {
		if (this.swf_ready && this.flash_cookie != null) {
			var c = this.flash_cookie.sfGetCookie(a, b);
			return ((c == 'null') ? '' : c)
		}
	},
	setC : function(a, b, c) {
		if (this.swf_ready && this.flash_cookie != null)
			this.flash_cookie.sfSetCookie(a, b, c)
	},
	get_movie : function() {
		if (navigator.appName.indexOf("Microsoft") != -1)
			this.flash_cookie = document.getElementById(this.movie_id);
		else
			this.flash_cookie = document.embeds[this.movie_id];
		return ((this.flash_cookie) ? true : false)
	}
};
function sfFlashReady() {
	SFCookie.initC();
	if (jexecLngCode == true && jLandEvtRec == false) {
		trigger_sf_landing();
		jexecLngCode = false;
		sfcookData = ''
	} else if (jexecConvCode == true) {
		ImageJSConversionProcess();
		jexecConvCode = false
	}
}
window.onunload = function() {
	if (jexecLngCode == true && jLandEvtRec == false) {
		trigger_sf_landing();
		jexecLngCode = false;
		sfcookData = ''
	}
};
function getSFQueryVariable(a, b) {
	var c = b.split("&");
	for (var i = 0; i < c.length; i++) {
		var d = c[i].split("=");
		if (d[0] == a)
			return d[1]
	}
	return ""
}
function generateGUID() {
	var a, i, j;
	a = '';
	for (j = 0; j < 32; j++) {
		if (j == 8 || j == 12 || j == 16 || j == 20)
			a = a + '-';
		i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
		a = a + i
	}
	return a
}
function juump_set_cookie(a) {
	var b = getExpiryDate(window.jcexpire);
	var c = juump_get_domain();
	if (jFlIncluded == true) {
		SFCookie.setC(getSFFLCookieName(), sf_cookie_name, a);
		SFCookie.setC(getSFFLCookieName(), 'expiry_date', b.toString())
	}
	document.cookie = sf_cookie_name + "=" + escape(a)
			+ ((b) ? ";expires=" + b.toGMTString() : "") + ";path=/"
			+ ((c) ? ";domain=" + c : "")
}
function juump_get_cookie(a) {
	var b = document.cookie;
	var c = a + "=";
	var d = b.indexOf(c);
	if (d == -1)
		return null;
	var e = document.cookie.indexOf(";", d);
	if (e == -1)
		e = b.length;
	return unescape(b.substring(d + c.length, e))
}
function getExpiryDate(a) {
	if (a == null || a == "null" || a == "")
		a = "30";
	if (a == "0" || a == 0)
		return null;
	var d = new Date();
	d.setDate(d.getDate() + parseInt(a));
	return d
}
function juump_get_domain() {
	var a = window.location.hostname;
	var b = a.split(".");
	var c = "";
	if (b[b.length - 1].length == 2
			&& (b[b.length - 2].length == 2 || b[b.length - 2].length == 3)) {
		c = "." + b[b.length - 3] + "." + b[b.length - 2] + "."
				+ b[b.length - 1]
	} else {
		c = "." + b[b.length - 2] + "." + b[b.length - 1]
	}
	return c
}
function useCustomParams() {
	jIncludeCustomParams = true
}
function trackSEO(a) {
	if (a != null && a != undefined)
		jSEOPubName = a;
	jtrackOrganic = true
}
function trackDirectTraffic(a) {
	if (a != null && a != undefined)
		jDirectCampName = a;
	jtrackDirect = true
}
function getSFFLCookieName() {
	return 'sf_conv' + juump_get_domain()
}
function ImageJSConversionProcess(a, b, c, d, e, f) {
	var g = "http";
	if (window.location.protocol == "https:") {
		g = "https"
	}
	var h = g + track_URL;
	var i = "" + juump_get_cookie(sf_cookie_name);
	var j = navigator.userAgent;
	if (i && i != null && i != "null" && i.length > 0) {
		i = i.replace("je=", "_dummy=")
	}
	if (i != null && i != "null")
		h = h + i;
	if (!a)
		a = window.jconversion_type;
	if (!b)
		b = window.jValue;
	if (!c)
		c = window.jOrderID;
	if (!d)
		d = window.jvar1;
	if (!e)
		e = window.jvar2;
	if (!f)
		f = window.jvar3;
	var k;
	if (window.jru)
		k = window.jru;
	h = h + "&joid=" + c + "&jcv=" + b + "&je=" + a + "&uag=" + j;
	if (d)
		h = h + "&jvar1=" + escape(d);
	if (e)
		h = h + "&jvar2=" + escape(e);
	if (f)
		h = h + "&jvar3=" + escape(f);
	var l = new Image();
	l.src = h + "&jru=" + k + getAddParams();
	l.onload = function() {
		jVoid()
	}
}
function jVoid() {
	return
}
function ImageJSLandingProcess() {
	var a, adOutletName, trackerType, mediaType;
	var b = '', adgName = '', kwName = '', matchType = '', adName = '';
	var c = false;
	if (jURLData.indexOf("jkId=") < 0 && jURLData.indexOf("jtid=") < 0 && jURLData.indexOf("jsid=") < 0 ) {
		trackerType = 1;
		a = window.jAccountID;
		if (jIncludeCustomParams == true && jURLData != undefined
				&& jURLData != null && jURLData != "") {
			adOutletName = window.jPub == null || window.jPub == 'undefined' ? getSFQueryVariable(
					window.jSource, jURLData)
					: window.jPub;
			b = window.jCampaign == null || window.jCampaign == 'undefined' ? getSFQueryVariable(
					window.jCampaignName, jURLData)
					: window.jCampaign;
			mediaType = getSFQueryVariable(window.jMedium, jURLData);
			adgName = window.jAdGroup == null || window.jAdGroup == 'undefined' ? getSFQueryVariable(
					window.jAdGroupName, jURLData)
					: window.jAdGroup;
			kwName = window.jkwd == null || window.jkwd == 'undefined' ? getSFQueryVariable(
					window.jKeyword, jURLData)
					: window.jkwd;
			matchType = getSFQueryVariable(window.jKeywordMatchType, jURLData);
			adName = getSFQueryVariable(window.jCreative, jURLData)
		} else if (jtrackOrganic == true) {
			var d = juump_get_domain().substr(1);
			var e = document.referrer;
			if (e != 'undefined' && e != null && e.length > 0) {
				var f = e;
				if (f.indexOf('?') > 0)
					f = e.substr(0, f.indexOf('?'));
				if (f.indexOf(d) < 0) {
					mediaType = "seo";
					b = "SEO Campaign";
					adOutletName = jSEOPubName;
					c = true
				}
			} else if (jtrackDirect == true
					&& (e == null || e.length == 0 || e == window.location)) {
				var g = juump_get_cookie(sf_cookie_name);
				if (g == null || g == '' || g == undefined) {
					mediaType = "direct";
					b = jDirectCampName;
					adOutletName = jSEOPubName;
					c = true
				}
			}
		}
		jURLData = "jt=" + trackerType + "&jaid=" + a + "&jm=" + mediaType
				+ "&jsrc=" + adOutletName + "&jcp=" + b + "&jag=" + adgName
				+ "&jk=" + kwName + "&jmt=" + matchType + "&jcr=" + adName
				+ "&isseo=" + c
	}
	if (jURLData.indexOf("jsid=") != -1 || jURLData.indexOf("jtid=") != -1 || jURLData.indexOf("jkId=") != -1 
			|| (a != null && a != undefined && adOutletName != undefined && adOutletName != '')) {
		sfcookData = jURLData;
		jexecLngCode = true;
		trigger_sf_landing()
	}
}
function trigger_sf_landing() {
	var a = escape(document.referrer);
	var b = escape(window.location);
	if (sfcookData.indexOf("jtest=") != -1)
		a = escape(window.location);
	if (jURLData.indexOf("jcid=") != -1) {
		juump_set_cookie(jURLData);
		return
	}
	var c = "";
	var d = 0;
	var e = "" + juump_get_cookie(sf_cookie_name);
	if (e && (e != null) && (e != "null") && (e.length > 0))
		c = getSFQueryVariable("jcid", e);
	if (c == "" || c == "null" || c == null) {
		c = generateGUID();
		d = 1
	}
	var f = sfcookData + "&jcid=" + c;
	juump_set_cookie(f);
	var g = "http";
	if (window.location.protocol == "https:") {
		g = "https"
	}
	var h = g + track_URL + "je=landing&" + f + "&jru=" + a + "&jlp=" + b
			+ "&jnv=" + d + getAddParams();
	var i = new Image();
	i.src = h;
	i.onload = function() {
		jVoid()
	};
	jLandEvtRec = true
}
function getAddParams() {
	var a = window.screen.width + "x" + window.screen.height + "x"
			+ window.screen.colorDepth;
	var b = [];
	var c = navigator.plugins;
	if (c && c.length > 0) {
		for (var t = 0; t < c.length; t++) {
			var N = c[t];
			if (N) {
				var x = N.filename.replace(/\.(plugin|dll)$/i, "");
				var d = N.description;
				var B = N.name;
				var f = (d.match(/\d/g) || []).join("");
				var D = (B.match(/\d/g) || []).join("");
				var Q = (f.length > D.length ? f : D);
				b.push(x + "," + Q)
			}
		}
	} else {
		var g = [ "ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF",
				"AgControl.AgControl", "wmplayer.ocx", "QuickTime.QuickTime" ];
		for (p = 0; p < g.length; p++) {
			try {
				var h = new ActiveXObject(g[p]);
				if (h) {
					var d = '';
					try {
						d = h.GetVariable('$version')
					} catch (e) {
						try {
							d = h.GetVersions()
						} catch (e) {
						}
					}
					var f = d ? (d.match(/\d/g) || []).join("") : "";
					b.push(g[p] + "," + f)
				}
			} catch (e) {
			}
		}
	}
	var i = window.jcexpire;
	var j = b.join(";");
	var k = navigator.language ? navigator.language : "";
	return "&ssc=" + a + "&splu=" + escape(j).replace(/\+/g, "%2B") + "&slg="
			+ k + "&sce=" + navigator.cookieEnabled + "&scd=" + i
}