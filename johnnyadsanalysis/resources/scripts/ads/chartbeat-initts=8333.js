/*** [CHILI] get section - START ***/
var _section_val = "";
var _section_elem = $('.breadcrumb-container .breadcrumb .last');

if (_section_elem.length > 0)
	_section_val = _section_elem.html().trim();
if (_section_elem.find('a').length > 0)
	_section_val = _section_elem.find('a').html().trim();

if (_section_val != "")
	_section_val = "video," + _section_val
else
	_section_val = "video"
	/*** [CHILI] get section - END ***/

// config chartbeat video tracking vars
try { // chartbeat strategy is defined only in leaf pages (prevents exceptions in other pages) 
	window['_cbv_strategies'] = window['_cbv_strategies'] || [];
	window['_cbv_strategies'].push(it.chili.RcsCBStrategy);
	var _cbv = window._cbv || (window._cbv = []);
	_cbv.push(it.chili.player);	
} catch (e) {}
//end config chartbeat video tracking vars

var _sf_async_config = {};
/** CONFIGURATION START **/
_sf_async_config.uid = 48229;
_sf_async_config.domain = 'gazzetta.it';
_sf_async_config.useCanonical = true;
_sf_async_config.sections = _section_val;
_sf_async_config.authors = '';
/** CONFIGURATION END **/

// cookie privacy check
(function() {
	var __ricIsPresent = $.cookie("__ric");
	var cpmt_xaIsPresent = $.cookie("cpmt_xa") === "5295";
	var _rcsCookiePolicyAccepted = !navigator.cookieEnabled || __ricIsPresent || cpmt_xaIsPresent;
	
	if(_rcsCookiePolicyAccepted) {
		function loadChartbeat() {
			window._sf_endpt = (new Date()).getTime();
			var e = document.createElement('script');
			e.setAttribute('language', 'javascript');
			e.setAttribute('type', 'text/javascript');
			e.setAttribute('src', '//static.chartbeat.com/js/chartbeat_video.js');
			document.body.appendChild(e);
		}
		var oldonload = window.onload;
		window.onload = (typeof window.onload != 'function') ? loadChartbeat
				: function() {
					oldonload();
					loadChartbeat();
				};
	}
})();