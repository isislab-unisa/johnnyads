function adViz(e,t){function C(e){return e.replace(/\b(enc|ai|cookie|ra|pa|ct|ep|correlator|publisher_blob|xuid|page_slots|id|ms)=[^&$]+/g,"$1=ns_cut")}var n="comScore=",r=document,i=r.cookie,s="",o="indexOf",u="substring",a="length",f=700,l=1200,c,h=4096,p,e=e.replace("?&","?"),d="&ns_",v=0,m="&",g=e[o]("?")+1,y=e[o]("c2=")-1,b,w,E,S,x=window,T=x.encodeURIComponent||escape,N="";e[e[a]-1]==m&&(e=e[u](0,e[a]-1));if(i[o](n)+1)for(E=0,w=i.split(";"),S=w[a];E<S;E++)b=w[E][o](n),b+1&&(s=m+unescape(w[E][u](b+n[a])));typeof x.ns_brt!="undefined"&&!x.ns_brtSent&&(N=d+"ad_brt="+ns_brt,ns_brtSent=!0),v=+(new Date),v.toString().search(/^9+$/)||(v=(new Date).getTime()),e=e[u](0,g)+"ns__t="+v+d+"_c="+(r.characterSet||r.defaultCharset||"")+(N.length>0?N:"")+"&"+e[u](g)+(e[o]("&c8=")<0?"&c8="+T(r.title):"")+s+(e[o]("&c7=")<0?"&c7="+T(c=C(r.URL)[u](0,f)):"")+(e[o]("&c9=")<0?"&c9="+T(C(r.referrer)[u](0,l-(c?c[a]:0))):""),e[a]>h&&e[o](m)>0&&(p=e[u](0,h-8).lastIndexOf(m),e=(e[u](0,p)+d+"cut="+T(e[u](p+1)))[u](0,h));if(r.images)return b=t?new Object:new Image,b.onload=function(){ns_brt=T(+(new Date)-v)},b.src=e,b;t||r.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">")}(function(){ns_=self.ns_||{},ns_.mvce=ns_.mvce||{};var e=document,t=e.location,n="length",r=function(){if(!i){var e=[];for(var t in e)delete e[t];i=e.slice(0)}else var e=i.slice(0);for(var r=0,s=arguments.length;r<s;r++)e[e[n]]=arguments[r];return e},i=r(),s=self.encodeURIComponent?encodeURIComponent:escape,o=s(t&&t.href?t.href:e.URL),u="http"+(o.charAt(4)=="s"?"s://s":"://"),a=u+"b",f=u+"a",l=".scorecardresearch.com",c=a+l+"/p?",h=f+l+"/rpc.flow?",p=a+l+"/rs/",d=a+l+"/rsx/",v=window,m=!1,g=!0,y="script",b="c2",w="on",E="load",S="readyState",x="src",T="indexOf",N="substring",C=ns_.mvce_m||(ns_.mvce_m=r()),k={b:"",l:"BSL_LF_SETTINGS",x:"18416366",i:"/.+/",g:"",v:"",it:"",m:"vce_st,bsl,bsl_lf",c:"18416366",w:"",n:"",s:0,d:0,y:1,cvt:"",cvq:""},L=ns_._mD||(ns_._mD={}),A=k.m,O=r(),M=ns_._rS||(ns_._rS={}),_=ns_.tP||(ns_.tP=[]),D=/^\/(.*)\/([gim]*)$/,P=navigator.userAgent.toLowerCase(),H=navigator.platform.toLowerCase(),B=/ applewebkit\//.test(P)&&/ip(?:ad|od|hone)/.test(P+H),j=/android/.test(P)||/linux armv7/.test(H);typeof ns_.mvce.K=="undefined"&&(ns_.mvce.K=function(e,t,n){M[e]=r(0,t,n,+(new Date))}),typeof ns_.mvce.A=="undefined"&&(ns_.mvce.A=function(e){M[e]=r(1,+(new Date))}),typeof ns_.mvce.G=="undefined"&&(ns_.mvce.G=function(e){ns_.mym.rsurl=e}),ns_.mym=function(){var t=function(t,n){var r,n=n&&document.getElementById?document.getElementById(n):e;return n.getElementsByTagName?r=n.getElementsByTagName(t):t.toLowerCase()==y&&document.scripts?r=document.scripts:n.all&&n.all.tags&&(r=n.all.tags(t)),r||[]},i=function(t,n,r,i){var s=e.createElement(y);s.type="text/javascript",s[x]=t,k.y&&(s.async=!0),i&&(s.id=i),n.parentNode.insertBefore(s,n)},s=function(e){if(e[T]("#")!=-1){var t={},r=e[N](e[T]("#")+1).replace(/&amp;/gi,"&").replace(/amp;/gi,"").split("&");for(var i=0,s=r[n];i<s;i++){var o=r[i].split("=");o[n]==2?t[o[0]]=o[1]:o[n]==1&&(t[o[0]]="")}return t.c1||(t.c1="3"),t}return m},o=function(e){var t=e[N](0,e[T]("#")),n=t[T]("/c2/");return n!=-1?(n=t[N](n+4),n[N](0,n[T]("/"))):m},u=function(e,t){for(var n in e)if(n!=b&&t[n]!=e[n])return m;return g},a=function(e){e.ax_iframe=0;if(v!=v.top)try{v.top.location.href?e.ax_iframe=1:e.ax_iframe=2}catch(t){e.ax_iframe=2}var s=c;for(var o in e)"__nax_iax_gax_itax_a"[T](o)==-1&&(s+="&"+o+"="+e[o]);ns_.mym_G&&(s+="&ns__m="+ns_.mym_G),s+="&ns_ce_sv=4.1507.31";if(A){var u=A.split(",").sort(function(e,t){return e.substr(e.charAt(0)=="-"?1:0).localeCompare(t.substr(t.charAt(0)=="-"?1:0))});A="";var a={bsl:function(e,t){return t&&(t.b.indexOf(e.c3)!=-1||e.bsl_sf)},bsl_lf:function(e,t){return 3==Number(e.c1)&&e.c12||t&&t.l&&(new RegExp("\\b"+e.c3+"(,|$)")).test(t.l)},vce_st:function(e,t){var r=e.ax_cid||t.x;if(!r)return!1;var i=t.i.split(","),s;for(var o=0,u=i[n];o<u;o++){s=i[o];if(D.test(s)){var a=s.match(D),f=new RegExp(a[1],a[2]);if(f.test(e.c3))return!0}else if(e.c3==s)return!0}return!1}};for(var f=0,l=u[n];f<l;f++){var m=u[f],g=m.charAt(0)=="-";a[m]&&a[m](e,k)&&(A+=(A==""?"":",")+m,O[O[n]]=r(m,g))}s+="&ns_ce_mod="+(e.ns_ce_mod=A)}A[T]("vce_st")>=0&&(s+="&ns_ad_event=load"),e.__p=adViz(s);var y=e.__p[x],b=y[T]("ns__t"),w=/ns__t=([^&]+)/;w.test(y)&&(e.ns__p=y.match(w)[1]);var E=e.ax_it||k.it;if(E){var S=unescape(E).indexOf("[CS_ID]");S>1&&(E=encodeURIComponent(unescape(E).replace("[CS_ID]",+(e.c2||"")+"|"+(e.c3||"")+"|"+(e.c4||"")+"|"+(e.c5||"")+"|"+(e.ns__p||"")))),adViz(unescape(E))}ns_.mym_G||b!=-1&&(b=y[N](b+6),ns_.mym_G=b[N](0,b[T]("&"))),A[T]("vce_st")>=0&&i(h+"uid="+(e.__n.__uid="uid"+ +(new Date))+"&ns_mod_ns=mvce&ns__p="+e.ns__p+"&"+y[N](y[T]("?")+1),e.__n);for(var f=0,l=O[n];f<l;f++){var M=O[f][0],_="_"+M;if(M!="bsl"||A[T]("vce_st")<0)C[_]?C[_](e,k):(L[_]||(L[_]=[]),L[_].push([e,k,+(new Date)]),(B||j)&&M=="vce_st"&&(M="mobile/"+M),i((O[f][1]?d:p)+M+".js",e.__n))}},f=function(e){if(!e)return m;var t=m;for(var r=0,i=_[n];r<i;r++)u(_[r],e)&&(t=g);return t?m:(_[_[n]]=e,a(e),g)},l=function(e){if(!e||!e[x]||e[x][T]("#")==-1)return m;var t=e.src.indexOf("#"),n=e.src.indexOf("?");if(!e||!e.src||t==-1||n>=0&&n<t)return m;var r=s(e[x]);if(r.c2=o(e[x]))return r.__n=e,r},w=function(e,t){var r=0;for(var i=0,s=t[n],o=t[0];i<s;++i&&(o=t[i]))u(e,o)&&r++;return r},E=function(){var e=t(y),r=[];for(var i=0,s=e[n];i<s;i++){var o=l(e[i]);o&&(r[r[n]]=o)}for(var i=0,s=r[n],o=r[0];i<s;++i&&(o=r[i])){var u=w(o,_),a=w(o,r);if(o.c2==k.c&&a>u&&f(o))return g}},S=function(e){for(var t=0,r=L[e][n];t<r;t++)C[e].apply(self,L[e][t])};return{ml:S,tag:f,fire:E,a:i,rs:M}}(),ns_.mym.fire()||setTimeout(ns_.mym.fire,0)})();