var webtrekkMediaTracking=webtrekkMediaTracking||{},wt_init_media=function(a,b,c){webtrekkMediaTracking.mediaStVersion=321;webtrekkMediaTracking.trackDomain=a;webtrekkMediaTracking.trackId=b;webtrekkMediaTracking.pixelSampling=c?c:0;webtrekkMediaTracking.deactivatePixel=!1;webtrekkMediaTracking.posInterval={};webtrekkMediaTracking.time={};Math&&(Math.random&&0!==parseInt(Math.random()*parseInt(webtrekkMediaTracking.pixelSampling)))&&(webtrekkMediaTracking.deactivatePixel=!0)},wt_sendinfo_media=function(a,
b,c,d,h,f,g,m){var l="",e="",k="undefined"!==typeof wt_mediaInterval?parseInt(wt_mediaInterval):60,e=e+("&bw="+(f?f:""))+("&vol="+(g?g:"")),e=e+("&mut="+(m?m:""));if(h)for(h=h.split(";"),f=0;f<h.length;f++)if(g=h[f].split("="),"init"===b||"play"===b||-1===g[0].indexOf("mg"))l+="&"+g[0]+"="+wt_stEscape(g[1]);"init"!==b&&"play"!==b||"undefined"!==typeof webtrekkMediaTracking.posInterval[a]&&""!==webtrekkMediaTracking.posInterval[a]||(webtrekkMediaTracking.posInterval[a]="",webtrekkMediaTracking.time[a]=
"");if("undefined"===typeof webtrekkMediaTracking.trackId&&"object"===typeof webtrekk&&webtrekk.trackDomain&&webtrekk.trackId)wt_init_media(webtrekk.trackDomain,webtrekk.trackId);else if("undefined"===typeof webtrekkMediaTracking.trackId&&"undefined"===typeof webtrekk)return;webtrekkMediaTracking.trackId&&"undefined"===typeof webtrekkMediaTracking.instance&&(webtrekkMediaTracking.instance=wt_getPixelInstance(),webtrekkMediaTracking.eid=wt_getEid(webtrekkMediaTracking.instance),webtrekkMediaTracking.pixelDeactivate=
wt_getSampling(webtrekkMediaTracking.instance));"undefined"==typeof d||""==d||!d||"undefined"!=typeof webtrekkMediaTracking.posInterval[a]&&""!=webtrekkMediaTracking.posInterval[a]?"undefined"!==typeof d&&""!==d&&null!==d||"undefined"!=typeof webtrekkMediaTracking.posInterval[a]&&""!=webtrekkMediaTracking.posInterval[a]||(webtrekkMediaTracking.posInterval[a]=6E4):webtrekkMediaTracking.posInterval[a]=10<=parseInt(d)/k?1E3*(parseInt(d)/k):1E4;if("pos"==b)if(""===webtrekkMediaTracking.time[a])webtrekkMediaTracking.time[a]=
(new Date).getTime();else{k=(new Date).getTime();if(k-webtrekkMediaTracking.time[a]<webtrekkMediaTracking.posInterval[a])return;webtrekkMediaTracking.time[a]=k}"undefined"!==typeof webtrekkMediaTracking.eid&&webtrekkMediaTracking.eid&&(e+="&eid="+webtrekkMediaTracking.eid);"undefined"!==typeof webtrekkMediaTracking.pixelDeactivate&&webtrekkMediaTracking.pixelDeactivate||wt_stQuicksend(webtrekkMediaTracking.trackId,"st,1,"+wt_baseparams()+"&mi="+wt_stEscape(a)+"&mk="+b+"&mt1="+c+"&mt2="+d+l+e)},wt_stQuicksend=
function(a,b,c){if(webtrekkMediaTracking.trackDomain&&webtrekkMediaTracking.trackId&&("undefined"===typeof webtrekkMediaTracking.deactivatePixel||!webtrekkMediaTracking.deactivatePixel))if(c||(c="wt.pl"),b+="&x="+(new Date).getTime(),a=("https:"==location.protocol?"https:":"http:")+"//"+webtrekkMediaTracking.trackDomain+"/"+a+"/"+c+"?p="+webtrekkMediaTracking.mediaStVersion+","+b,document.images){if("undefined"==typeof d)var d=[];b=d.length;d[b]=new Image;d[b].src=a;d[b].onload=function(){}}else document.write("<img src='"+
a+"' height='1' width='1'>")},wt_getBrowserHeight=function(){var a=0;try{a=window.innerHeight}catch(b){}if(!a)try{a=document.documentElement.clientHeight}catch(c){}if(!a)try{a=document.body.clientHeight}catch(d){}"undefined"===typeof a&&(a=-1);return a},wt_getBrowserWidth=function(){var a=0;try{a=window.innerWidth}catch(b){}if(!a)try{a=document.documentElement.clientWidth}catch(c){}if(!a)try{a=document.body.clientWidth}catch(d){}"undefined"===typeof a&&(a=-1);return a},wt_baseparams=function(){var a=
screen.width+"x"+screen.height+","+("Netscape"!=navigator.appName?screen.colorDepth:screen.pixelDepth)+",",a=a+(!0==navigator.cookieEnabled?"1,":!1==navigator.cookieEnabled?"0,":-1!=document.cookie.indexOf("=")?"1,":"0,"),a=a+((new Date).getTime()+","),a=a+1,b=wt_getBrowserHeight(),c=wt_getBrowserWidth();b&&b>screen.height&&(b=screen.height);c&&c>screen.width&&(c=screen.width);return a=a+(","+c+"x"+b)+(","+(navigator.javaEnabled()?"1":"0"))},wt_stEscape=function(a){return"function"===typeof encodeURIComponent?
encodeURIComponent(a):escape(a)},wt_getPixelInstance=function(){if("undefined"!==typeof webtrekk&&webtrekk.trackId&&webtrekk.trackDomain)return webtrekk.eid="undefined"!==typeof wt_cookie_eid?wt_cookie_eid:!1,webtrekk.deactivatePixel="undefined"!==typeof wt_deactivatePixel?wt_deactivatePixel:!1,webtrekk;if("undefined"!==typeof webtrekkUnloadObjects)for(var a=0,b=webtrekkUnloadObjects.length;a<b;a++){var c=webtrekkUnloadObjects[a],d=webtrekkMediaTracking.trackId;if(c.trackId&&(c.trackId==d||-1!==c.trackId.indexOf(d)))return c}return null},
wt_getEid=function(a){return a&&null!==a?a.eid:!1},wt_getSampling=function(a){return a&&null!==a?a.deactivatePixel:!1};
