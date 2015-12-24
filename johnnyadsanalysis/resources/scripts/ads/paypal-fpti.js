function getCookie(name) {
 var re = new RegExp(name + "=([^;]+)");
 var value = re.exec(document.cookie);
 return (value != null) ? unescape(value[1]) : null;
}
(function() {    
var ppb = document.createElement("img");
var mplx_svid=getCookie("svid");
var pat = /\d+\-\d+\-\d+\-\d+/; //define pattern to match placement id 
var rot_id = ad_url.match(pat); //extract placement id from mpck 
var pgrp = escape("main:mktg:display:mplx:" + rot_id);
var page = escape("main:mktg:display:mplx:" + rot_id + ":::" + rot_id);
ppb.src = 'https://t.paypal.com/ts?v=0.1&t=' + tepochtime + '&e=mplx_im&pgrp=' + pgrp + '&page=' + page + '&mchn=dp&s=ci&spid=' + escape(mplx_svid) + "&g=" + toffset;
ppb.border = "0";
document.documentElement.firstChild.appendChild(ppb);
})();