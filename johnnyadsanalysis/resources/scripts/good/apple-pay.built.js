(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;
if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")
}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)
},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){c.exports={flatten:b("./ac-array/flatten"),intersection:b("./ac-array/intersection"),toArray:b("./ac-array/toArray"),union:b("./ac-array/union"),unique:b("./ac-array/unique"),without:b("./ac-array/without")}
},{"./ac-array/flatten":2,"./ac-array/intersection":3,"./ac-array/toArray":4,"./ac-array/union":5,"./ac-array/unique":6,"./ac-array/without":7}],2:[function(b,c,a){c.exports=function d(h){var f=[];
var g=function(i){if(Array.isArray(i)){i.forEach(g)}else{f.push(i)}};h.forEach(g);
return f}},{}],3:[function(b,c,a){c.exports=function d(n){if(!n){return[]}var m=arguments.length;
var k=0;var g=n.length;var f=[];var l;for(k;k<g;k++){l=n[k];if(f.indexOf(l)>-1){continue
}for(var h=1;h<m;h++){if(arguments[h].indexOf(l)<0){break}}if(h===m){f.push(l)}}return f
}},{}],4:[function(b,d,a){d.exports=function c(f){return Array.prototype.slice.call(f)
}},{}],5:[function(b,c,a){var g=b("./flatten");var f=b("./unique");c.exports=function d(h){return f(g(Array.prototype.slice.call(arguments)))
}},{"./flatten":2,"./unique":6}],6:[function(b,c,a){c.exports=function d(g){var f=function(h,i){if(h.indexOf(i)<0){h.push(i)
}return h};return g.reduce(f,[])}},{}],7:[function(b,d,a){d.exports=function c(f,n,m){var k;
var h=f.indexOf(n);var l=f.length;if(h>=0){if(m){k=f.slice(0,l);var j,g=0;for(j=h;
j<l;j++){if(f[j]===n){k.splice(j-g,1);g++}}}else{if(h===(l-1)){k=f.slice(0,(l-1))
}else{if(h===0){k=f.slice(1)}else{k=f.slice(0,h);k=k.concat(f.slice(h+1))}}}}else{return f
}return k}},{}],8:[function(c,g,b){var f=c("./Request");var h=c("./XDomain-request");
var a=c("./URLParser");var d=function(){};d._Request=f;d.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]},_getOptions:function(i,j){return this._extend({},this._defaults,j,i)
},create:function(i){return new f(i)},cors:function(j){var i=(window.XDomainRequest&&document.documentMode<10)?h:f;
return new i(j)},_isCrossDomainRequest:function(l){var k=new a();var j=k.parse(window.location.href).origin;
var i=k.parse(l).origin;k.destroy();return(i!==j)},get:function(j){var i;j=this._getOptions({method:"get"},j);
if(this._isCrossDomainRequest(j.url)){i=this.cors(j)}else{i=this.create(j)}return i.send()
},getJSON:function(i){return this.get(i).then(function(j){return JSON.parse(j.responseText)
})},head:function(i){i=this._getOptions({method:"head"},i);return this.create(i).send()
},post:function(i){i=this._getOptions({method:"post"},i);return this.create(i).send()
}};g.exports=d},{"./Request":9,"./URLParser":10,"./XDomain-request":11}],9:[function(b,d,a){var c=function(f){this._initialize(f)
};c.create=function(){var f=function(){};f.prototype=c.prototype;return new f()
};c.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(f){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(g,f){this.resolve=g;
this.reject=f}.bind(this))},_getTransport:function(){return new XMLHttpRequest()
},_initialize:function(h){var g=this._validateConfiguration(h);if(g){throw g}this._configuration=h;
var f=this._configuration.method.toUpperCase();this.xhr=this._getTransport();this._getPromise();
this.xhr.open(f,this._configuration.url);this._setRequestHeaders(h.headers);this._addReadyStateChangeHandler()
},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(f){if(f){f.forEach(function(g){this.xhr.setRequestHeader(g.name,g.value)
},this)}},_setTimeout:function(f){if(!f){if(this._configuration&&this._configuration.timeout){f=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(f>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),f)
}},_timeout:null,_validateConfiguration:function(h){if(!h){return"Must provide a configuration object"
}var g=[];var f=h.headers;if(!h.url){g.push("Must provide a url")}if(!h.method){g.push("Must provide a method")
}if(f){if(!Array.isArray(f)){return"Must provide an array of headers"}this._validateHeaders(f,g)
}return g.join(", ")},_validateHeaders:function(h,j){for(var g=0,f=h.length;g<f;
g++){if(!h[g].hasOwnProperty("name")||!h[g].hasOwnProperty("value")){j.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],10:[function(c,d,b){var a=function(){this.parser=null
};var f=a.prototype;f.parse=function(k){var i;var l;var h;var g;var j;if(typeof k!=="string"){throw new TypeError(k+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(k);
h=this.parser.hostname;l=this.parser.protocol;g=this._normalizePort(this.parser);
i=this.parser.origin||this._constructOriginString(this.parser,g);j=this.parser.search;
return{originalPath:k,qualifiedPath:this.parser.href,protocol:l,hostname:h,origin:i,port:g,search:j}
};f.destroy=function(){this.parser=null};f._constructOriginString=function(i,g){var h=g?":"+g:"";
return i.protocol+"//"+i.hostname+h};f._normalizePort=function(g){return(g.port==="80"||g.port==="443"||g.port==="0")?"":g.port
};f._qualifyPath=function(g){this.parser.href=g;this.parser.href=this.parser.href
};d.exports=a},{}],11:[function(b,d,a){var c=b("./Request");var f=function(g){c.apply(this,arguments)
};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};d.exports=f},{"./Request":9}],12:[function(b,f,a){var d=b("./ac-ajax/Ajax");
var c=b("./ac-ajax/Request");f.exports=new d();f.exports.Ajax=d;f.exports.Request=c
},{"./ac-ajax/Ajax":8,"./ac-ajax/Request":9}],13:[function(c,f,b){var d={cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),localStorageAvailable:c("./ac-feature/localStorageAvailable")};
var a=Object.prototype.hasOwnProperty;d.threeDTransformsAvailable=function(){if(typeof this._threeDTransformsAvailable!=="undefined"){return this._threeDTransformsAvailable
}var i,g;try{this._threeDTransformsAvailable=false;if(a.call(window,"styleMedia")){this._threeDTransformsAvailable=window.styleMedia.matchMedium("(-webkit-transform-3d)")
}else{if(a.call(window,"media")){this._threeDTransformsAvailable=window.media.matchMedium("(-webkit-transform-3d)")
}}if(!this._threeDTransformsAvailable){if(!(g=document.getElementById("supportsThreeDStyle"))){g=document.createElement("style");
g.id="supportsThreeDStyle";g.textContent="@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d) { #supportsThreeD { height:3px } }";
document.querySelector("head").appendChild(g)}if(!(i=document.querySelector("#supportsThreeD"))){i=document.createElement("div");
i.id="supportsThreeD";document.body.appendChild(i)}this._threeDTransformsAvailable=(i.offsetHeight===3)||g.style.MozTransform!==undefined||g.style.WebkitTransform!==undefined
}return this._threeDTransformsAvailable}catch(h){return false}};d.canvasAvailable=function(){if(typeof this._canvasAvailable!=="undefined"){return this._canvasAvailable
}var g=document.createElement("canvas");this._canvasAvailable=!!(typeof g.getContext==="function"&&g.getContext("2d"));
return this._canvasAvailable};d.sessionStorageAvailable=function(){if(typeof this._sessionStorageAvailable!=="undefined"){return this._sessionStorageAvailable
}try{if(typeof window.sessionStorage!=="undefined"&&typeof window.sessionStorage.setItem==="function"){window.sessionStorage.setItem("ac_browser_detect","test");
this._sessionStorageAvailable=true;window.sessionStorage.removeItem("ac_browser_detect","test")
}else{this._sessionStorageAvailable=false}}catch(g){this._sessionStorageAvailable=false
}return this._sessionStorageAvailable};d.cookiesAvailable=function(){if(typeof this._cookiesAvailable!=="undefined"){return this._cookiesAvailable
}this._cookiesAvailable=(a.call(document,"cookie")&&!!navigator.cookieEnabled)?true:false;
return this._cookiesAvailable};d.__normalizedScreenWidth=function(){if(typeof window.orientation==="undefined"){return window.screen.width
}return window.screen.width<window.screen.height?window.screen.width:window.screen.height
};d.touchAvailable=function(){return !!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch)
};d.isDesktop=function(){if(!this.touchAvailable()&&!window.orientation){return true
}return false};d.isHandheld=function(){return !this.isDesktop()&&!this.isTablet()
};d.isTablet=function(){return !this.isDesktop()&&this.__normalizedScreenWidth()>480
};d.isRetina=function(){var g=["min-device-pixel-ratio:1.5","-webkit-min-device-pixel-ratio:1.5","min-resolution:1.5dppx","min-resolution:144dpi","min--moz-device-pixel-ratio:1.5"];
var h;if(window.devicePixelRatio!==undefined){if(window.devicePixelRatio>=1.5){return true
}}else{for(h=0;h<g.length;h+=1){if(window.matchMedia("("+g[h]+")").matches===true){return true
}}}return false};d.svgAvailable=function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
};f.exports=d},{"./ac-feature/cssPropertyAvailable":14,"./ac-feature/localStorageAvailable":15}],14:[function(c,f,b){var g=null;
var h=null;var a=null;var d=null;f.exports=function(s){if(g===null){g=document.createElement("browserdetect").style
}if(h===null){h=["-webkit-","-moz-","-o-","-ms-","-khtml-",""]}if(a===null){a=["Webkit","Moz","O","ms","Khtml",""]
}if(d===null){d={}}s=s.replace(/([A-Z]+)([A-Z][a-z])/g,"$1\\-$2").replace(/([a-z\d])([A-Z])/g,"$1\\-$2").replace(/^(\-*webkit|\-*moz|\-*o|\-*ms|\-*khtml)\-/,"").toLowerCase();
switch(s){case"gradient":if(d.gradient!==undefined){return d.gradient}s="background-image:";
var q="gradient(linear,left top,right bottom,from(#9f9),to(white));";var p="linear-gradient(left top,#9f9, white);";
g.cssText=(s+h.join(q+s)+h.join(p+s)).slice(0,-s.length);d.gradient=(g.backgroundImage.indexOf("gradient")!==-1);
return d.gradient;case"inset-box-shadow":if(d["inset-box-shadow"]!==undefined){return d["inset-box-shadow"]
}s="box-shadow:";var r="#fff 0 1px 1px inset;";g.cssText=h.join(s+r);d["inset-box-shadow"]=(g.cssText.indexOf("inset")!==-1);
return d["inset-box-shadow"];default:var o=s.split("-");var k=o.length;var n;var m;
var l;if(o.length>0){s=o[0];for(m=1;m<k;m+=1){s+=o[m].substr(0,1).toUpperCase()+o[m].substr(1)
}}n=s.substr(0,1).toUpperCase()+s.substr(1);if(d[s]!==undefined){return d[s]}for(l=a.length-1;
l>=0;l-=1){if(g[a[l]+s]!==undefined||g[a[l]+n]!==undefined){d[s]=true;return true
}}return false}}},{}],15:[function(d,f,b){var a=null;f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],16:[function(i,c,x){var s=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;
var b=typeof Array.prototype.indexOf==="function"?function(z,A){return z.indexOf(A)
}:function(z,B){for(var A=0;A<z.length;A++){if(z[A]===B){return A}}return -1};var k=Array.isArray||function(z){return s.call(z)=="[object Array]"
};var v=Object.keys||function(B){var z=[];for(var A in B){if(B.hasOwnProperty(A)){z.push(A)
}}return z};var u=typeof Array.prototype.forEach==="function"?function(z,A){return z.forEach(A)
}:function(z,B){for(var A=0;A<z.length;A++){B(z[A])}};var m=function(z,D,A){if(typeof z.reduce==="function"){return z.reduce(D,A)
}var C=A;for(var B=0;B<z.length;B++){C=D(C,z[B])}return C};var y=/^[0-9]+$/;function d(C,B){if(C[B].length==0){return C[B]={}
}var A={};for(var z in C[B]){if(l.call(C[B],z)){A[z]=C[B][z]}}C[B]=A;return A}function q(D,B,A,E){var z=D.shift();
if(l.call(Object.prototype,A)){return}if(!z){if(k(B[A])){B[A].push(E)}else{if("object"==typeof B[A]){B[A]=E
}else{if("undefined"==typeof B[A]){B[A]=E}else{B[A]=[B[A],E]}}}}else{var C=B[A]=B[A]||[];
if("]"==z){if(k(C)){if(""!=E){C.push(E)}}else{if("object"==typeof C){C[v(C).length]=E
}else{C=B[A]=[B[A],E]}}}else{if(~b(z,"]")){z=z.substr(0,z.length-1);if(!y.test(z)&&k(C)){C=d(B,A)
}q(D,C,z,E)}else{if(!y.test(z)&&k(C)){C=d(B,A)}q(D,C,z,E)}}}}function f(D,C,G){if(~b(C,"]")){var F=C.split("["),z=F.length,E=z-1;
q(F,D,"base",G)}else{if(!y.test(C)&&k(D.base)){var B={};for(var A in D.base){B[A]=D.base[A]
}D.base=B}n(D.base,C,G)}return D}function o(C){if("object"!=typeof C){return C}if(k(C)){var z=[];
for(var B in C){if(l.call(C,B)){z.push(C[B])}}return z}for(var A in C){C[A]=o(C[A])
}return C}function g(A){var z={base:{}};u(v(A),function(B){f(z,B,A[B])});return o(z.base)
}function h(A){var z=m(String(A).split("&"),function(B,F){var G=b(F,"="),E=t(F),C=F.substr(0,E||G),D=F.substr(E||G,F.length),D=D.substr(b(D,"=")+1,D.length);
if(""==C){C=F,D=""}if(""==C){return B}return f(B,p(C),p(D))},{base:{}}).base;return o(z)
}x.parse=function(z){if(null==z||""==z){return{}}return"object"==typeof z?g(z):h(z)
};var r=x.stringify=function(A,z){if(k(A)){return j(A,z)}else{if("[object Object]"==s.call(A)){return w(A,z)
}else{if("string"==typeof A){return a(A,z)}else{return z+"="+encodeURIComponent(String(A))
}}}};function a(A,z){if(!z){throw new TypeError("stringify expects an object")}return z+"="+encodeURIComponent(A)
}function j(z,C){var A=[];if(!C){throw new TypeError("stringify expects an object")
}for(var B=0;B<z.length;B++){A.push(r(z[B],C+"["+B+"]"))}return A.join("&")}function w(F,E){var A=[],D=v(F),C;
for(var B=0,z=D.length;B<z;++B){C=D[B];if(""==C){continue}if(null==F[C]){A.push(encodeURIComponent(C)+"=")
}else{A.push(r(F[C],E?E+"["+encodeURIComponent(C)+"]":encodeURIComponent(C)))}}return A.join("&")
}function n(B,A,C){var z=B[A];if(l.call(Object.prototype,A)){return}if(undefined===z){B[A]=C
}else{if(k(z)){z.push(C)}else{B[A]=[z,C]}}}function t(C){var z=C.length,B,D;for(var A=0;
A<z;++A){D=C[A];if("]"==D){B=false}if("["==D){B=true}if("="==D&&!B){return A}}}function p(A){try{return decodeURIComponent(A.replace(/\+/g," "))
}catch(z){return A}}},{}],17:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":18,"./ac-object/create":19,"./ac-object/defaults":20,"./ac-object/extend":21,"./ac-object/getPrototypeOf":22,"./ac-object/isDate":23,"./ac-object/isEmpty":24,"./ac-object/isRegExp":25,"./ac-object/toQueryParameters":26}],18:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":21}],19:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],20:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":21}],21:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],22:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],23:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],24:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],25:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],26:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:16}],27:[function(require,module,exports){(function(process,global){(function(){var _slice=Array.prototype.slice;
try{_slice.call(document.documentElement)}catch(e){Array.prototype.slice=function(begin,end){end=(typeof end!=="undefined")?end:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return _slice.call(this,begin,end)
}var i,cloned=[],size,len=this.length;var start=begin||0;start=(start>=0)?start:len+start;
var upTo=(end)?end:len;if(end<0){upTo=len+end}size=upTo-start;if(size>0){cloned=new Array(size);
if(this.charAt){for(i=0;i<size;i++){cloned[i]=this.charAt(start+i)}}else{for(i=0;
i<size;i++){cloned[i]=this[start+i]}}}return cloned}}}());
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if(typeof document!=="undefined"&&!("classList" in document.createElement("a"))){(function(view){if(!("HTMLElement" in view)&&!("Element" in view)){return
}var classListProp="classList",protoProp="prototype",elemCtrProto=(view.HTMLElement||view.Element)[protoProp],objCtr=Object,strTrim=String[protoProp].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},arrIndexOf=Array[protoProp].indexOf||function(item){var i=0,len=this.length;for(;
i<len;i++){if(i in this&&this[i]===item){return i}}return -1},DOMEx=function(type,message){this.name=type;
this.code=DOMException[type];this.message=message},checkTokenAndGetIndex=function(classList,token){if(token===""){throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(token)){throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character")
}return arrIndexOf.call(classList,token)},ClassList=function(elem){var trimmedClasses=strTrim.call(elem.className),classes=trimmedClasses?trimmedClasses.split(/\s+/):[],i=0,len=classes.length;
for(;i<len;i++){this.push(classes[i])}this._updateClassName=function(){elem.className=this.toString()
}},classListProto=ClassList[protoProp]=[],classListGetter=function(){return new ClassList(this)
};DOMEx[protoProp]=Error[protoProp];classListProto.item=function(i){return this[i]||null
};classListProto.contains=function(token){token+="";return checkTokenAndGetIndex(this,token)!==-1
};classListProto.add=function(){var tokens=arguments,i=0,l=tokens.length,token,updated=false;
do{token=tokens[i]+"";if(checkTokenAndGetIndex(this,token)===-1){this.push(token);
updated=true}}while(++i<l);if(updated){this._updateClassName()}};classListProto.remove=function(){var tokens=arguments,i=0,l=tokens.length,token,updated=false;
do{token=tokens[i]+"";var index=checkTokenAndGetIndex(this,token);if(index!==-1){this.splice(index,1);
updated=true}}while(++i<l);if(updated){this._updateClassName()}};classListProto.toggle=function(token,forse){token+="";
var result=this.contains(token),method=result?forse!==true&&"remove":forse!==false&&"add";
if(method){this[method](token)}return !result};classListProto.toString=function(){return this.join(" ")
};if(objCtr.defineProperty){var classListPropDesc={get:classListGetter,enumerable:true,configurable:true};
try{objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}catch(ex){if(ex.number===-2146823252){classListPropDesc.enumerable=false;
objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}}}else{if(objCtr[protoProp].__defineGetter__){elemCtrProto.__defineGetter__(classListProp,classListGetter)
}}}(self))}if(document.createEvent){try{new window.CustomEvent("click")}catch(err){window.CustomEvent=(function(){function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};
var evt=document.createEvent("CustomEvent");evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);
return evt}CustomEvent.prototype=window.Event.prototype;return CustomEvent}())}}if(!Function.prototype.bind){Function.prototype.bind=function(originalContext){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var applicableArgs=Array.prototype.slice.call(arguments,1);var functionToBind=this;
var fnOriginalPrototype=function(){};var fnBound=function(){return functionToBind.apply((this instanceof fnOriginalPrototype&&originalContext)?this:originalContext,applicableArgs.concat(Array.prototype.slice.call(arguments)))
};fnOriginalPrototype.prototype=this.prototype;fnBound.prototype=new fnOriginalPrototype();
return fnBound}}if(!Array.isArray){Array.isArray=function isArray(object){return(object&&typeof object==="object"&&"splice" in object&&"join" in object)
}}if(!Array.prototype.every){Array.prototype.every=function every(callback,thisObj){var arrayObject=Object(this);
var len=arrayObject.length>>>0;var i;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObject&&!callback.call(thisObj,arrayObject[i],i,arrayObject)){return false
}}return true}}if(!Array.prototype.filter){Array.prototype.filter=function filter(callback,thisObj){var arrayObject=Object(this);
var len=arrayObject.length>>>0;var i;var results=[];if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObject&&callback.call(thisObj,arrayObject[i],i,arrayObject)){results.push(arrayObject[i])
}}return results}}if(!Array.prototype.forEach){Array.prototype.forEach=function forEach(callback,thisObj){var arrayObject=Object(this);
var i;var currentValue;if(typeof callback!=="function"){throw new TypeError("No function object passed to forEach.")
}for(i=0;i<this.length;i+=1){currentValue=arrayObject[i];callback.call(thisObj,currentValue,i,arrayObject)
}}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function indexOf(searchElement,fromIndex){var startIndex=fromIndex||0;
var currentIndex=0;if(startIndex<0){startIndex=this.length+fromIndex-1;if(startIndex<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(currentIndex=0;currentIndex<this.length;currentIndex++){if(this[currentIndex]===searchElement){return currentIndex
}}return(-1)}}if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function lastIndexOf(value,fromIndex){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i;fromIndex=parseInt(fromIndex,10);if(len<=0){return -1
}i=(typeof fromIndex==="number")?Math.min(len-1,fromIndex):len-1;i=i>=0?i:len-Math.abs(i);
for(;i>=0;i-=1){if(i in arrayObj&&value===arrayObj[i]){return i}}return -1}}if(!Array.prototype.map){Array.prototype.map=function map(callback,thisObj){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i;var result=new Array(len);if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObj){result[i]=callback.call(thisObj,arrayObj[i],i,arrayObj)
}}return result}}if(!Array.prototype.reduce){Array.prototype.reduce=function reduce(callback,initialValue){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i=0;var result;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}if(typeof initialValue==="undefined"){if(!len){throw new TypeError("Reduce of empty array with no initial value")
}result=arrayObj[0];i=1}else{result=initialValue}while(i<len){if(i in arrayObj){result=callback.call(undefined,result,arrayObj[i],i,arrayObj);
i+=1}}return result}}if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function reduceRight(callback,initialValue){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i=len-1;var result;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}if(initialValue===undefined){if(!len){throw new TypeError("Reduce of empty array with no initial value")
}result=arrayObj[len-1];i=len-2}else{result=initialValue}while(i>=0){if(i in arrayObj){result=callback.call(undefined,result,arrayObj[i],i,arrayObj);
i-=1}}return result}}if(!Array.prototype.some){Array.prototype.some=function some(callback,thisObj){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObj&&callback.call(thisObj,arrayObj[i],i,arrayObj)===true){return true
}}return false}}if(!Date.now){Date.now=function now(){return new Date().getTime()
}}if(!Date.prototype.toISOString){Date.prototype.toISOString=function toISOString(){if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}var parts={year:this.getUTCFullYear(),month:this.getUTCMonth()+1,day:this.getUTCDate(),hours:this.getUTCHours(),minutes:this.getUTCMinutes(),seconds:this.getUTCSeconds(),mseconds:(this.getUTCMilliseconds()/1000).toFixed(3).substr(2,3)};
var prop;var prefix;for(prop in parts){if(parts.hasOwnProperty(prop)&&prop!=="year"&&prop!=="mseconds"){parts[prop]=String(parts[prop]).length===1?"0"+String(parts[prop]):String(parts[prop])
}}if(parts.year<0||parts.year>9999){prefix=parts.year<0?"-":"+";parts.year=prefix+String(Math.abs(parts.year/1000000)).substr(2,6)
}return parts.year+"-"+parts.month+"-"+parts.day+"T"+parts.hours+":"+parts.minutes+":"+parts.seconds+"."+parts.mseconds+"Z"
}}if(!Date.prototype.toJSON){Date.prototype.toJSON=function(key){var obj=Object(this);
var prim;var isPrimitive=function(input){var type=typeof input;var types=[null,"undefined","boolean","string","number"].some(function(value){return value===type
});if(types){return true}return false};var toPrimitive=function(input){var value;
if(isPrimitive(input)){return input}value=(typeof input.valueOf==="function")?input.valueOf():(typeof input.toString==="function")?input.toString():null;
if(value&&isPrimitive(value)){return value}throw new TypeError(input+" cannot be converted to a primitive")
};prim=toPrimitive(obj);if(typeof prim==="number"&&!isFinite(prim)){return null
}if(typeof obj.toISOString!=="function"){throw new TypeError("toISOString is not callable")
}return obj.toISOString.call(obj)}}if(!String.prototype.trim){String.prototype.trim=function trim(){return this.replace(/^\s+|\s+$/g,"")
}}if(!Object.keys){Object.keys=function keys(obj){var keysArray=[];var currentKey;
if((!obj)||(typeof obj.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(currentKey in obj){if(obj.hasOwnProperty(currentKey)){keysArray.push(currentKey)
}}return keysArray}}if(typeof JSON=="undefined"||!("stringify" in JSON&&"parse" in JSON)){if(!this.JSON){this.JSON={}
}(function(){function f(n){return n<10?"0"+n:n}if(typeof String.prototype.toJSON!=="function"){String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);
case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;
i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space
}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)
}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")
}}}())}window.matchMedia=window.matchMedia||(function(doc,undefined){var bool,docElem=doc.documentElement,refNode=docElem.firstElementChild||docElem.firstChild,fakeBody=doc.createElement("body"),div=doc.createElement("div");
div.id="mq-test-1";div.style.cssText="position:absolute;top:-100em";fakeBody.style.background="none";
fakeBody.appendChild(div);return function(q){div.innerHTML='&shy;<style media="'+q+'"> #mq-test-1 { width:42px; }</style>';
docElem.insertBefore(fakeBody,refNode);bool=div.offsetWidth===42;docElem.removeChild(fakeBody);
return{matches:bool,media:q}}}(document));(function(){var lastTime=0;var vendors=["ms","moz","webkit","o"];
for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"];
window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(callback,element){var currTime=Date.now();
var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)
},timeToCall);lastTime=currTime+timeToCall;return id}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(id){clearTimeout(id)
}}}());window.XMLHttpRequest=window.XMLHttpRequest||function(){var request;try{request=new ActiveXObject("Msxml2.XMLHTTP")
}catch(exception){try{request=new ActiveXObject("Microsoft.XMLHTTP")}catch(exception){request=false
}}return request};!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}
},d=c=b=function(a){function c(b){if("."!==b.charAt(0)){return b}for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;
f>e;e++){var g=c[e];if(".."===g){d.pop()}else{if("."===g){continue}d.push(g)}}return d.join("/")
}if(d._eak_seen=e,f[a]){return f[a]}if(f[a]={},!e[a]){throw new Error("Could not find module "+a)
}for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++){"exports"===i[l]?k.push(g={}):k.push(b(c(i[l])))
}var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){function c(a){var b=this;
if(!d(a)){throw new TypeError("You must pass an array to all.")}return new b(function(b,c){function d(a){return function(b){f(a,b)
}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;
j<a.length;j++){g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)}})}var d=a.isArray,e=a.isFunction;
b.all=c}),a("promise/asap",["exports"],function(a){function b(){return function(){process.nextTick(e)
}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2
}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;
a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()
}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:void 0===this?window:this,k=[];
g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f
}),a("promise/config",["exports"],function(a){function b(a,b){return 2!==arguments.length?c[a]:(c[a]=b,void 0)
}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){function d(){var a;
a="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;
var b="Promise" in a&&"resolve" in a.Promise&&"reject" in a.Promise&&"all" in a.Promise&&"race" in a.Promise&&function(){var b;
return new a.Promise(function(a){b=a}),f(b)}();b||(a.Promise=e)}var e=a.Promise,f=b.isFunction;
c.polyfill=d}),a("promise/promise",["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h){function i(a){if(!v(a)){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}if(!(this instanceof i)){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}this._subscribers=[],j(a,this)}function j(a,b){function c(a){o(b,a)}function d(a){q(b,a)
}try{a(c,d)}catch(e){d(e)}}function k(a,b,c,d){var e,f,g,h,i=v(c);if(i){try{e=c(d),g=!0
}catch(j){h=!0,f=j}}else{e=d,g=!0}n(b,e)||(i&&g?o(b,e):h?q(b,f):a===D?o(b,e):a===E&&q(b,e))
}function l(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+D]=c,e[f+E]=d}function m(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;
g<e.length;g+=3){c=e[g],d=e[g+b],k(b,c,d,f)}a._subscribers=null}function n(a,b){var c,d=null;
try{if(a===b){throw new TypeError("A promises callback cannot return that same promise.")
}if(u(b)&&(d=b.then,v(d))){return d.call(b,function(d){return c?!0:(c=!0,b!==d?o(a,d):p(a,d),void 0)
},function(b){return c?!0:(c=!0,q(a,b),void 0)}),!0}}catch(e){return c?!0:(q(a,e),!0)
}return !1}function o(a,b){a===b?p(a,b):n(a,b)||p(a,b)}function p(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(r,a))
}function q(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(s,a))}function r(a){m(a,a._state=D)
}function s(a){m(a,a._state=E)}var t=a.config,u=(a.configure,b.objectOrFunction),v=b.isFunction,w=(b.now,c.all),x=d.race,y=e.resolve,z=f.reject,A=g.asap;
t.async=A;var B=void 0,C=0,D=1,E=2;i.prototype={constructor:i,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});
if(this._state){var e=arguments;t.async(function(){k(c._state,d,e[c._state-1],c._detail)
})}else{l(this,d,a,b)}return d},"catch":function(a){return this.then(null,a)}},i.all=w,i.race=x,i.resolve=y,i.reject=z,h.Promise=i
}),a("promise/race",["./utils","exports"],function(a,b){function c(a){var b=this;
if(!d(a)){throw new TypeError("You must pass an array to race.")}return new b(function(b,c){for(var d,e=0;
e<a.length;e++){d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)}})}var d=a.isArray;
b.race=c}),a("promise/reject",["exports"],function(a){function b(a){var b=this;
return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){function b(a){if(a&&"object"==typeof a&&a.constructor===this){return a
}var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){function b(a){return c(a)||"object"==typeof a&&null!==a
}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)
}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e
}),b("promise/polyfill").polyfill()}()}).call(this,require("JkpR2F"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{JkpR2F:980}],28:[function(b,c,a){b("ac-polyfills");c.exports.Asset=b("./ac-asset-loader/AssetLoader/Asset");
c.exports.Asset.Ajax=b("./ac-asset-loader/AssetLoader/Asset/Ajax");c.exports.Asset.Ajax.JSON=b("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");
c.exports.Asset.Img=b("./ac-asset-loader/AssetLoader/Asset/Img");c.exports.Asset.Video=b("./ac-asset-loader/AssetLoader/Asset/Video");
c.exports.Asset.Video.Element=b("./ac-asset-loader/AssetLoader/Asset/Video/Element");
c.exports.Asset.Binary=b("./ac-asset-loader/AssetLoader/Asset/Binary");c.exports.Asset.Binary.Chunk=b("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
c.exports.AssetLoader=b("./ac-asset-loader/AssetLoader");c.exports.AssetLoader.Queue=b("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":29,"./ac-asset-loader/AssetLoader/Asset":30,"./ac-asset-loader/AssetLoader/Asset/Ajax":31,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":32,"./ac-asset-loader/AssetLoader/Asset/Binary":33,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":34,"./ac-asset-loader/AssetLoader/Asset/Img":35,"./ac-asset-loader/AssetLoader/Asset/Video":38,"./ac-asset-loader/AssetLoader/Asset/Video/Element":39,"./ac-asset-loader/AssetLoader/Queue":40,"ac-polyfills":27}],29:[function(b,a,h){var j;
var g=b("ac-object");var o=b("ac-event-emitter").EventEmitter;var n=b("./AssetLoader/Asset/Ajax");
var f=b("./AssetLoader/Asset/Ajax/JSON");var i=b("./AssetLoader/Asset/Img");var m=b("./AssetLoader/Asset/Video");
var l=b("../utils/destroy");var c=b("./AssetLoader/Queue");var d={};function k(r,p){this.options=g.defaults(d,p||{});
var q=this._generateAssets(r);this._queue=new c(q,this.options);this._timeoutDuration=this.options.timeout;
this._timeout=null;this._proxyListeners()}j=k.prototype=new o();j.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};j._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};j.pause=function(){this._clearTimeout();return this._queue.pause()
};j.destroy=function(){l(this,true)};j._onTimeout=function(){this._queue.abort();
this._queue.destroy();this.trigger("timeout")};j._generateAssets=function(q){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}q=[].concat(q);var p=q.map(this._boundGenerateAsset);return p};j._generateAsset=function(q,p){if(k.isValidAsset(q)){q.index=p;
return q}if(typeof q!=="string"||q===""){return null}if(!!q.match(/\.json$/)){return new f(q,p)
}if(!!q.match(/\.(xml|txt)$/)){return new n(q,p)}return new i(q,p)};j._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this);
this._queue.on("resolved",this._boundOnResolved);this._queue.on("rejected",this._boundOnRejected);
this._queue.on("progress",this._boundOnProgress)};j._onResolved=function(p){this._clearTimeout();
this.trigger("loaded",p)};j._onRejected=function(p){this.trigger("error",p)};j._onProgress=function(p){this.trigger("progress",p)
};k.isValidAsset=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.destroy==="function"))
};k.isValidAssetLoader=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.pause==="function")&&(typeof p.destroy==="function"))
};a.exports=k},{"../utils/destroy":41,"./AssetLoader/Asset/Ajax":31,"./AssetLoader/Asset/Ajax/JSON":32,"./AssetLoader/Asset/Img":35,"./AssetLoader/Asset/Video":38,"./AssetLoader/Queue":40,"ac-event-emitter":284,"ac-object":17}],30:[function(d,g,b){var i;
var c=d("ac-deferred").Deferred;var h=d("ac-event-emitter").EventEmitter;var f=d("../../utils/destroy");
function a(k,j){this.src=k;this.index=j;this.data=null;this._boundOnLoad=this._onLoad.bind(this);
this._boundOnError=this._onError.bind(this)}i=a.prototype=new h();i.load=function(){this._load()
};i.destroy=function(){f(this)};i._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};i._onLoad=function(){this.trigger("loaded",this)};i._onError=function(){this.trigger("error",this.data)
};g.exports=a},{"../../utils/destroy":41,"ac-event-emitter":284}],31:[function(d,g,b){var i;
var c=d("ac-ajax");var a=d("ac-object");var h=d("../Asset");function f(k,j){h.apply(this,arguments)
}i=f.prototype=a.create(h.prototype);i._load=function(){c.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};i._onLoad=function(j){this.data=j.response;h.prototype._onLoad.call(this)};g.exports=f
},{"../Asset":30,"ac-ajax":12,"ac-object":17}],32:[function(c,d,b){var g;var a=c("ac-object");
var f=c("../Ajax");function h(i){f.apply(this,arguments)}g=h.prototype=a.create(f.prototype);
g._onLoad=function(j){try{f.prototype._onLoad.call(this,{response:JSON.parse(j.response)})
}catch(i){this._onError(i)}};d.exports=h},{"../Ajax":31,"ac-object":17}],33:[function(b,a,f){var k=b("ac-ajax");
var d=b("ac-object");var j=b("./Binary/Chunk");var i=b("./../Asset");var c={chunkSize:1024*1024};
function g(m,l){i.apply(this,arguments);this.options=d.defaults(c,l||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var h=g.prototype=d.create(i.prototype);h.pause=function(){var l;
if(this._request!==null){this._request.xhr.abort()}for(l in this._rangeObjects){if(this._rangeObjects[l].isLoaded()===false){this._rangeObjects[l].pause()
}}};h._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};h._getOrCreateRangeObject=function(n){var m=this._rangeObjects[n.toString()];
var l;var o;if(m===undefined){l=(this.options.chunkSize-1);o=n+l;if(o>this._totalSize){l=null
}m=this._rangeObjects[n.toString()]=new j(this.src,{start:n,length:l});this._numRanges+=1
}return m};h._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};h._queueRangeRequests=function(){var p;var o=[];var q;var l;var m;for(var n=0;
n<this._totalSize;n+=this.options.chunkSize){m=this._getOrCreateRangeObject(n);
m.on("loaded",this._onRangeLoad,this);m.load()}};h._afterAllChunksLoaded=function(){var l;
var n=[];for(var m in this._rangeObjects){n.push(this._rangeObjects[m].data)}l=new Blob(n,{type:this._contentType});
this.trigger("loaded",l)};h._afterHeadRequest=function(l){this._totalSize=parseInt(l.getResponseHeader(["Content-Length"]));
this._contentType=l.getResponseHeader(["Content-Type"]);this._request=null};h._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=k.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};a.exports=g},{"./../Asset":30,"./Binary/Chunk":34,"ac-ajax":12,"ac-object":17}],34:[function(b,a,f){var g;
var j=b("ac-ajax");var d=b("ac-object");var h=b("../../Asset");var c={start:0,length:null};
function i(l,k){h.apply(this,arguments);this.options=d.defaults(c,k||{});this._request=null;
this.data=null}g=i.prototype=d.create(h.prototype);g.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};g.isLoaded=function(){return(this.data!==null)};g._load=function(){this._request=j.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};g._onLoad=function(k){this.data=k.response;this._request=null;h.prototype._onLoad.call(this,this.data)
};g._buildRangeString=function(){var k="bytes="+this.options.start+"-";if(this.options.length!==null){k+=(this.options.start+this.options.length)
}return k};g._buildQueryString=function(){var k=this.options.start.toString();if(this.options.length!==undefined){k+=(this.options.start+this.options.length)
}return k};a.exports=i},{"../../Asset":30,"ac-ajax":12,"ac-object":17}],35:[function(c,d,b){var g;
var a=c("ac-object");var f=c("../Asset");function h(j,i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._load=function(){var i=new Image();this.data=i;
this._boundOnLoad=this._onLoad.bind(this);i.onload=this._boundOnLoad;i.onerror=this._boundOnError;
i.src=this.src};d.exports=h},{"../Asset":30,"ac-object":17}],36:[function(d,a,h){var k=d("ac-ajax").Ajax,g=d("ac-object"),j=d("./SplitFile/Chunk"),b=d("../Asset");
var i;var f={splitManifestTimeout:5000,splitChunkTimeout:null};var c=function(m,l){b.apply(this,arguments);
if(m.lastIndexOf("/")!==m.length-1){m=m+"/"}this.options=g.extend(f,l||{});this._manifestPath=m+"manifest.json";
this._ajax=new k();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
i=c.prototype=g.create(b.prototype);i._load=function(){var l={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(l);this._request.send().then(this._boundOnManifestLoaded)
};i._onManifestLoaded=function(p){this._manifest=JSON.parse(p.responseText);this._chunksLen=this._manifest.files.length;
var n,o=this._manifest.files,m,l=this._chunksLen;for(n=0;n<l;n++){m=this._getOrCreateChunkObject(o[n],n);
m.once("loaded",this._onChunkLoaded,this);m.load()}this._request=null;this._ajax=null
};i._getOrCreateChunkObject=function(n,l){var o=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[l]){var q=n.path;if(!q.match(/(^http(s?))/)){q=this.src+"/"+q}else{if(!!this.src.match(/(^http(s?))/)){var p=q.indexOf("/",10);
var m=this.src.indexOf("/",10);q=this.src.substring(0,m)+q.substring(p)}}this._chunks[l]=new j(q,o)
}return this._chunks[l]};i._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var n,l=this._chunks.length,m=[];
for(n=0;n<l;n++){m.push(this._chunks[n].data);this._chunks[n].off()}this.data=new Blob(m,{type:this._manifest.mimeType});
m=this._chunks=null;this.trigger("loaded",this.data)}};i.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};a.exports=c},{"../Asset":30,"./SplitFile/Chunk":37,"ac-ajax":12,"ac-object":17}],37:[function(c,a,g){var h;
var j=c("ac-ajax");var f=c("ac-object");var b=c("../../Asset");var d={timeout:30*1000};
function i(l,k){b.apply(this,arguments);this.options=f.extend(d,k||{});this._request=null;
this.data=null}h=i.prototype=f.create(b.prototype);h.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};h.isLoaded=function(){return(this.data!==null)};h._load=function(){this._request=j.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};h._onLoad=function(k){this.data=k.response;this._request=null;b.prototype._onLoad.call(this,this.data)
};a.exports=i},{"../../Asset":30,"ac-ajax":12,"ac-object":17}],38:[function(c,a,h){var k;
var g=c("ac-feature");var f=c("ac-object");var i=c("./Binary");var l=c("../Asset");
var j=c("./Video/Element");var b=c("./SplitFile");var d={chunkSize:1024*1024,forceElementLoading:false,split:false};
function m(o,n){l.apply(this,arguments);this.options=f.defaults(d,n||{});this._binary=this.options.binary||this._createAssetType()
}k=m.prototype=f.create(l.prototype);k._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&g.isDesktop()===true)
};k._createAssetType=function(){if(this._canUseBlob()&&this.options.forceElementLoading!==true){if(this.options.split){return new b(this.src,this.options)
}return new i(this.src,this.options)}return new j(this.src,this.options)};k._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};k._onLoad=function(o){var n=o;
if(o instanceof window.Blob){n=this.options.element;if(!n){n=document.createElement("video")
}if(n.getAttribute("type")!==o.type){n.setAttribute("type",o.type)}n.src=window.URL.createObjectURL(o)
}l.prototype._onLoad.call(this,n)};k.pause=function(){this._binary.pause()};k.destroy=function(){this._binary.destroy();
l.prototype.destroy.call(this)};a.exports=m},{"../Asset":30,"./Binary":33,"./SplitFile":36,"./Video/Element":39,"ac-feature":13,"ac-object":17}],39:[function(b,a,g){var f=b("ac-feature");
var d=b("ac-object");var k=b("./../../../../utils/round");var j=b("./../../Asset");
var c={};function i(m,l){j.apply(this,arguments);this.options=d.defaults(c,l||{});
this._boundOnVideoProgress=null;this._boundOnTimeUpdate=null;this._boundOnCanPlayThrough=null;
this._videoDuration=null}var h=i.prototype=d.create(j.prototype);h._onVideoProgress=function(l){if(this.data&&this.data.buffered.length>0&&this._videoDuration&&k(this.data.buffered.end(0),4)===k(this._videoDuration,4)){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._unbindEvent("loadedmetadata",this._boundMetaDataLoaded);this._boundOnVideoProgress=null;
this.data.muted=false;this._onLoad()}};h._onTimeUpdate=function(l){this.data.pause();
this.data.currentTime=0;this.data.removeEventListener("timeupdate",this._boundOnTimeUpdate);
this._boundOnTimeUpdate=null};h._onCanPlayThrough=function(l){if(this._boundOnTimeUpdate===null){this._boundOnTimeUpdate=this._onTimeUpdate.bind(this)
}if(f.isDesktop()){this.data.addEventListener("timeupdate",this._boundOnTimeUpdate);
this.data.play()}this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._boundOnCanPlayThrough=null};h._onMetaDataLoaded=function(l){this._videoDuration=this.data.duration;
this._onVideoProgress(l)};h._load=function(){this.data=this.options.element;if(!this.data){this.data=document.createElement("video")
}this.data.muted=true;if(this.options.type){this.data.setAttribute("type",this.options.type)
}if(this._boundOnVideoProgress===null){this._boundOnVideoProgress=this._onVideoProgress.bind(this);
this._boundOnCanPlayThrough=this._onCanPlayThrough.bind(this);this._boundMetaDataLoaded=this._onMetaDataLoaded.bind(this);
this.data.addEventListener("progress",this._boundOnVideoProgress);this.data.addEventListener("canplaythrough",this._boundOnCanPlayThrough);
this.data.addEventListener("loadedmetadata",this._boundMetaDataLoaded)}this.data.setAttribute("preload","auto");
this.data.src=this.src;this.data.load()};h._unbindEvent=function(l,m){if(typeof m==="function"){this.data.removeEventListener(l,m)
}};h.pause=function(){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._unbindEvent("loadedmetadata",this._boundMetaDataLoaded);this._boundOnVideoProgress=null;
this._boundOnCanPlayThrough=null;this._boundOnTimeUpdate=null;this._boundMetaDataLoaded=null;
this.data.removeAttribute("src");this.data=undefined;this.trigger("pause")};a.exports=i
},{"./../../../../utils/round":42,"./../../Asset":30,"ac-feature":13,"ac-object":17}],40:[function(b,a,g){var h;
var f=b("ac-object");var i=b("ac-deferred").Deferred;var k=b("ac-event-emitter").EventEmitter;
var j=b("../../utils/destroy");var d={threads:4};function c(m,l){this.options=f.defaults(d,l||{});
this._queue=m;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new i();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}h=c.prototype=new k();h.start=function(){var m=this._availableThreads;var l;this.paused=false;
if(m>this._queue.length){m=this._queue.length}for(l=1;l<=m;l++){this._startNewThread()
}return this.promise};h.pause=function(){this.paused=true;var l=[];this._active.forEach(function(n,m){if(typeof n.pause==="function"){this._queue.unshift(n);
this._releaseThread();n.off("loaded");n.off("error");n.pause();l.push(m)}},this);
l.forEach(function(m){this._active.splice(m,1)},this)};h.destroy=function(){this.pause();
j(this)};h._startNewThread=function(){var m=this._queue.shift();this._occupyThread();
if(m&&typeof m.load==="function"){var l=function(o){this._onProgress(o);this._active.splice(this._active.indexOf(m),1);
m.off("error",n)};var n=function(o){this._onError();m.off("loaded",l)};m.once("loaded",l,this);
m.once("error",n,this);m.load()}else{this._onError()}this._active.push(m)};h._onResolved=function(){if(this._errored){return false
}this._deferred.resolve(this._data);this.trigger("resolved",this._data)};h._onError=function(l){if(this._errored){return false
}this._errored=true;this._deferred.reject(l);this.trigger("rejected",l)};h.abort=function(){this._deferred.reject()
};h._onProgress=function(l){if(this._errored){return false}this._releaseThread();
this._data[l.index]=l.data;this.trigger("progress",l.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};h._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};h._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};a.exports=c},{"../../utils/destroy":41,"ac-event-emitter":284,"ac-object":17}],41:[function(b,d,a){d.exports=function c(f,g){if(typeof f.off==="function"){f.off()
}function h(j){var i=true;for(var k in j){if(j.hasOwnProperty(k)){if(j[k]!==null){i=false;
break}}}return i}window.setTimeout(function(){var i;for(i in f){if(f.hasOwnProperty(i)){if(g&&f[i]&&typeof f[i].destroy==="function"&&!h(f[i])){f[i].destroy()
}f[i]=null}}})}},{}],42:[function(b,c,a){c.exports=function(d,f){return Math.round(d*Math.pow(10,f))/Math.pow(10,f)
}},{}],43:[function(b,c,a){c.exports=b(16)},{}],44:[function(b,c,a){c.exports=b(17)
},{"./ac-object/clone":45,"./ac-object/create":46,"./ac-object/defaults":47,"./ac-object/extend":48,"./ac-object/getPrototypeOf":49,"./ac-object/isDate":50,"./ac-object/isEmpty":51,"./ac-object/isRegExp":52,"./ac-object/toQueryParameters":53}],45:[function(b,c,a){c.exports=b(18)
},{"./extend":48}],46:[function(b,c,a){c.exports=b(19)},{}],47:[function(b,c,a){c.exports=b(20)
},{"./extend":48}],48:[function(b,c,a){c.exports=b(21)},{}],49:[function(b,c,a){c.exports=b(22)
},{}],50:[function(b,c,a){c.exports=b(23)},{}],51:[function(b,c,a){c.exports=b(24)
},{}],52:[function(b,c,a){c.exports=b(25)},{}],53:[function(b,c,a){c.exports=b(26)
},{qs:43}],54:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":55}],55:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],56:[function(b,c,a){c.exports={BreakpointsDelegate:b("./ac-breakpoints-delegate/BreakpointsDelegate")}
},{"./ac-breakpoints-delegate/BreakpointsDelegate":57}],57:[function(f,b,i){var d=f("ac-shared-instance").SharedInstance,g=f("ac-object"),p=f("ac-window-delegate").WindowDelegate,c=f("ac-window-delegate").WindowDelegateCustomEvent,o=f("ac-event-emitter").EventEmitter;
var l="ac-breakpoints-delegate:BreakpointsDelegate",a="1.1.0-1";var m="breakpoint",n="resize orientationchange";
var h={small:{width:0,maxDeviceWidth:768},medium:{width:736},large:{width:1025,oldIE:true},xlarge:{width:1442}};
function k(q){this.breakpoints=g.clone(h);this._customEvent=new c(m,this._onBreakpointListenerAdded.bind(this),this._onBreakpointListenerRemoved.bind(this));
this.initialize()}var j=k.prototype;j.initialize=function(){this._breakpoint=null;
this._lastBreakpoint=null;this._handleOldIE();this._handleDevices();this._breakpointOrder=this._setBreakpointOrder();
if(!this._isOldIE){this._handleResize()}};j.getCustomEvent=function(){return this._customEvent
};j.getBreakpoint=function(){if(!this._customEvent.active){this._handleResize()
}return this._breakpoint};j._handleResize=function(){var u=p.innerWidth(),v;var t,s,r,q=this._breakpointOrder.length;
for(t=0;t<q;t++){s=this._breakpointOrder[t];r=this.breakpoints[s];if(r.width>u){break
}}if(t>0){t=t-1}v=this.breakpoints[this._breakpointOrder[t]];if(!this._breakpoint){this._breakpoint=v;
return}if(v.name===this._breakpoint.name){return}this._lastBreakpoint=this._breakpoint;
this._breakpoint=v;p.trigger(m,{incoming:this._breakpoint,outgoing:this._lastBreakpoint})
};j._setBreakpointOrder=function(){var r=[],q=[],s;for(s in this.breakpoints){if(this.breakpoints.hasOwnProperty(s)){this.breakpoints[s].name=s;
r.push(this.breakpoints[s].width)}}r.sort(function(u,t){return u-t});r.forEach(function(u){var t;
for(t in this.breakpoints){if(this.breakpoints.hasOwnProperty(t)){if(this.breakpoints[t].width===u){q.push(t)
}}}}.bind(this));return q};j._handleOldIE=function(){var q=document.documentElement,r="oldie";
if(q.className.indexOf("no-"+r)>-1||q.className.indexOf(r)===-1){return}this._breakpoint=this.breakpoints.large;
this._isOldIE=true;this._replaceBreakpoints(function(s){return s.oldIE===true})
};j._handleDevices=function(){this._replaceBreakpoints(function(q){if(typeof q.maxDeviceWidth!=="number"){return true
}if(window.screen&&window.screen.width<=q.maxDeviceWidth){return true}return false
})};j._replaceBreakpoints=function(t){var r,s={},q;for(r in this.breakpoints){if(this.breakpoints.hasOwnProperty(r)){q=this.breakpoints[r];
if(t(q)){s[r]=g.clone(this.breakpoints[r])}}}this.breakpoints=s};j._onBreakpointListenerAdded=function(){p.on(n,this._handleResize,this)
};j._onBreakpointListenerRemoved=function(){p.off(n,this._handleResize,this)};b.exports=d.share(l,a,k)
},{"ac-event-emitter":284,"ac-object":44,"ac-shared-instance":54,"ac-window-delegate":962}],58:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":59,"./ac-browser/IE":60}],59:[function(b,c,a){var d=b("./data");
function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;if(!h||!i){return
}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
var l=h.indexOf(k);if(l>-1){g=parseFloat(h.substring(l+k.length+1));return true
}});return g},__getName:function(g){return this.__getIdentityStringFromArray(g)
},__getIdentity:function(g){if(g.string){return this.__matchSubString(g)}else{if(g.prop){return g.identity
}}},__getIdentityStringFromArray:function(g){for(var k=0,h=g.length,j;k<h;k++){j=this.__getIdentity(g[k]);
if(j){return j}}},__getOS:function(g){return this.__getIdentityStringFromArray(g)
},__getOSVersion:function(i,l){if(!i||!l){return}var k=d.os.filter(function(m){return m.identity===l
})[0];var g=k.versionSearch||l;var j=new RegExp(g+" ([\\d_\\.]+)","i");var h=i.match(j);
if(h!==null){return h[1].replace(/_/g,".")}},__matchSubString:function(h){var g=h.subString;
if(g){var i=g.test?!!g.test(h.string):h.string.indexOf(g)>-1;if(i){return h.identity
}}}};f.create=function(){var g=new f();var h={};h.name=g.__getName(d.browser);h.version=g.__getBrowserVersion(d.versionString,h.name);
h.os=g.__getOS(d.os);h.osVersion=g.__getOSVersion(d.versionString,h.os);return h
};c.exports=f},{"./data":61}],60:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],61:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],62:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");b("ac-polyfills/Element/prototype.classList");
var d=b("./className/add");c.exports=function f(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);
return}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":64,"ac-polyfills/Array/prototype.slice":70,"ac-polyfills/Element/prototype.classList":71}],63:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":64,"./className/contains":65,"./className/remove":67}],64:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":65}],65:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":66}],66:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],67:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":65,"./getTokenRegExp":66}],68:[function(b,d,a){b("ac-polyfills/Element/prototype.classList");
var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f(h,g)}},{"./className/contains":65,"ac-polyfills/Element/prototype.classList":71}],69:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":62,"./contains":68,"./remove":72,"./toggle":73}],70:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],71:[function(b,c,a){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if("document" in self){if(!("classList" in document.createElement("_"))){(function(n){if(!("Element" in n)){return
}var d="classList",j="prototype",q=n.Element[j],f=Object,o=String[j].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},g=Array[j].indexOf||function(u){var t=0,s=this.length;for(;t<s;t++){if(t in this&&this[t]===u){return t
}}return -1},r=function(s,t){this.name=s;this.code=DOMException[s];this.message=t
},k=function(t,s){if(s===""){throw new r("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(s)){throw new r("INVALID_CHARACTER_ERR","String contains an invalid character")
}return g.call(t,s)},h=function(w){var v=o.call(w.getAttribute("class")||""),u=v?v.split(/\s+/):[],t=0,s=u.length;
for(;t<s;t++){this.push(u[t])}this._updateClassName=function(){w.setAttribute("class",this.toString())
}},i=h[j]=[],m=function(){return new h(this)};r[j]=Error[j];i.item=function(s){return this[s]||null
};i.contains=function(s){s+="";return k(this,s)!==-1};i.add=function(){var w=arguments,v=0,t=w.length,u,s=false;
do{u=w[v]+"";if(k(this,u)===-1){this.push(u);s=true}}while(++v<t);if(s){this._updateClassName()
}};i.remove=function(){var x=arguments,w=0,t=x.length,v,s=false,u;do{v=x[w]+"";
u=k(this,v);while(u!==-1){this.splice(u,1);s=true;u=k(this,v)}}while(++w<t);if(s){this._updateClassName()
}};i.toggle=function(t,u){t+="";var s=this.contains(t),v=s?u!==true&&"remove":u!==false&&"add";
if(v){this[v](t)}if(u===true||u===false){return u}else{return !s}};i.toString=function(){return this.join(" ")
};if(f.defineProperty){var p={get:m,enumerable:true,configurable:true};try{f.defineProperty(q,d,p)
}catch(l){if(l.number===-2146823252){p.enumerable=false;f.defineProperty(q,d,p)
}}}else{if(f[j].__defineGetter__){q.__defineGetter__(d,m)}}}(self))}else{(function(){var f=document.createElement("_");
f.classList.add("c1","c2");if(!f.classList.contains("c2")){var g=function(i){var h=DOMTokenList.prototype[i];
DOMTokenList.prototype[i]=function(l){var k,j=arguments.length;for(k=0;k<j;k++){l=arguments[k];
h.call(this,l)}}};g("add");g("remove")}f.classList.toggle("c3",false);if(f.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(h,i){if(1 in arguments&&!this.contains(h)===!i){return i
}else{return d.call(this,h)}}}f=null}())}}},{}],72:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Element/prototype.classList");var b=d("./className/remove");f.exports=function a(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":67,"ac-polyfills/Array/prototype.slice":70,"ac-polyfills/Element/prototype.classList":71}],73:[function(c,d,b){c("ac-polyfills/Element/prototype.classList");
var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
}},{"./className":63,"ac-polyfills/Element/prototype.classList":71}],74:[function(b,c,a){c.exports=8
},{}],75:[function(b,c,a){c.exports=11},{}],76:[function(b,c,a){c.exports=9},{}],77:[function(b,c,a){c.exports=10
},{}],78:[function(b,c,a){c.exports=1},{}],79:[function(b,c,a){c.exports=3},{}],80:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],81:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");d("ac-polyfills/Array/prototype.filter");
var g=d("./internal/isNodeType");var a=d("./ELEMENT_NODE");f.exports=function b(i,h){h=h||a;
i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)})}},{"./ELEMENT_NODE":78,"./internal/isNodeType":88,"ac-polyfills/Array/prototype.filter":98,"ac-polyfills/Array/prototype.slice":99}],82:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],83:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),hasAttribute:b("./hasAttribute"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":74,"./DOCUMENT_FRAGMENT_NODE":75,"./DOCUMENT_NODE":76,"./DOCUMENT_TYPE_NODE":77,"./ELEMENT_NODE":78,"./TEXT_NODE":79,"./createDocumentFragment":80,"./filterByNodeType":81,"./hasAttribute":82,"./insertAfter":84,"./insertBefore":85,"./insertFirstChild":86,"./insertLastChild":87,"./isComment":90,"./isDocument":91,"./isDocumentFragment":92,"./isDocumentType":93,"./isElement":94,"./isNode":95,"./isNodeList":96,"./isTextNode":97,"./remove":100,"./replace":101}],84:[function(b,c,a){var f=b("./internal/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":89}],85:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":89}],86:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./internal/validate":89}],87:[function(b,c,a){var d=b("./internal/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./internal/validate":89}],88:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":95}],89:[function(g,d,j){var b=g("./isNodeType");
var c=g("../COMMENT_NODE");var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");
var h=g("../TEXT_NODE");var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":74,"../DOCUMENT_FRAGMENT_NODE":75,"../ELEMENT_NODE":78,"../TEXT_NODE":79,"./isNodeType":88}],90:[function(c,d,a){var g=c("./internal/isNodeType");
var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":74,"./internal/isNodeType":88}],91:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":76,"./internal/isNodeType":88}],92:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":75,"./internal/isNodeType":88}],93:[function(b,c,a){var g=b("./internal/isNodeType");
var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":77,"./internal/isNodeType":88}],94:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":78,"./internal/isNodeType":88}],95:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],96:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],97:[function(c,d,a){var g=c("./internal/isNodeType");var b=c("./TEXT_NODE");
d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":79,"./internal/isNodeType":88}],98:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],99:[function(b,c,a){c.exports=b(70)
},{}],100:[function(c,d,b){var f=c("./internal/validate");d.exports=function a(g){f.childNode(g,true,"remove");
if(!g.parentNode){return g}return g.parentNode.removeChild(g)}},{"./internal/validate":89}],101:[function(b,d,a){var f=b("./internal/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./internal/validate":89}],102:[function(b,c,a){var d={querySelector:b("./ac-dom-traversal/querySelector"),querySelectorAll:b("./ac-dom-traversal/querySelectorAll"),ancestor:b("./ac-dom-traversal/ancestor"),ancestors:b("./ac-dom-traversal/ancestors"),children:b("./ac-dom-traversal/children"),firstChild:b("./ac-dom-traversal/firstChild"),lastChild:b("./ac-dom-traversal/lastChild"),siblings:b("./ac-dom-traversal/siblings"),nextSibling:b("./ac-dom-traversal/nextSibling"),nextSiblings:b("./ac-dom-traversal/nextSiblings"),previousSibling:b("./ac-dom-traversal/previousSibling"),previousSiblings:b("./ac-dom-traversal/previousSiblings"),filterBySelector:b("./ac-dom-traversal/filterBySelector"),matchesSelector:b("./ac-dom-traversal/matchesSelector")};
b("./ac-dom-traversal/shims/ie")(d);c.exports=d},{"./ac-dom-traversal/ancestor":103,"./ac-dom-traversal/ancestors":104,"./ac-dom-traversal/children":105,"./ac-dom-traversal/filterBySelector":106,"./ac-dom-traversal/firstChild":107,"./ac-dom-traversal/lastChild":110,"./ac-dom-traversal/matchesSelector":111,"./ac-dom-traversal/nextSibling":112,"./ac-dom-traversal/nextSiblings":113,"./ac-dom-traversal/previousSibling":114,"./ac-dom-traversal/previousSiblings":115,"./ac-dom-traversal/querySelector":116,"./ac-dom-traversal/querySelectorAll":117,"./ac-dom-traversal/shims/ie":118,"./ac-dom-traversal/siblings":119}],103:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(j,i){h.childNode(j,true,"ancestors");
h.selector(i,false,"ancestors");if(j!==document.body){while((j=j.parentNode)&&a.isElement(j)){if(!i||b(j,i)){return j
}if(j===document.body){break}}}return null}},{"./helpers/validate":109,"./matchesSelector":111,"ac-dom-nodes":83}],104:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"ancestors");h.selector(i,false,"ancestors");if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!i||b(k,i)){j.push(k)
}if(k===document.body){break}}}return j}},{"./helpers/validate":109,"./matchesSelector":111,"ac-dom-nodes":83}],105:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./filterBySelector");var h=d("./helpers/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=a.filterByNodeType(j);if(i){j=b(j,i)}return j}},{"./filterBySelector":106,"./helpers/validate":109,"ac-dom-nodes":83}],106:[function(d,f,c){var b=d("./matchesSelector");
var g=d("./helpers/validate");f.exports=function a(i,h){g.selector(h,true,"filterBySelector");
i=Array.prototype.slice.call(i);return i.filter(function(j){return b(j,h)})}},{"./helpers/validate":109,"./matchesSelector":111}],107:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":105,"./helpers/validate":109}],108:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],109:[function(d,b,f){var j=d("ac-dom-nodes");var a=function(m,l){if(!j.isNode(m)){return false
}if(typeof l==="number"){return(m.nodeType===l)}return(l.indexOf(m.nodeType)!==-1)
};var h=[j.ELEMENT_NODE,j.DOCUMENT_NODE,j.DOCUMENT_FRAGMENT_NODE];var i=" must be an Element, Document, or Document Fragment";
var k=[j.ELEMENT_NODE,j.TEXT_NODE,j.COMMENT_NODE];var g=" must be an Element, TextNode, or Comment";
var c=" must be a string";b.exports={parentNode:function(l,o,n,m){m=m||"node";if((l||o)&&!a(l,h)){throw new TypeError(n+": "+m+i)
}},childNode:function(l,o,n,m){m=m||"node";if(!l&&!o){return}if(!a(l,k)){throw new TypeError(n+": "+m+g)
}},selector:function(l,o,n,m){m=m||"selector";if((l||o)&&typeof l!=="string"){throw new TypeError(n+": "+m+c)
}}}},{"ac-dom-nodes":83}],110:[function(b,d,a){var c=b("./children");var g=b("./helpers/validate");
d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");g.selector(h,false,"lastChild");
if(j.lastElementChild&&!h){return j.lastElementChild}i=c(j,h);if(i.length){return i[i.length-1]
}return null}},{"./children":105,"./helpers/validate":109}],111:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var h=f("./helpers/validate");g.exports=function c(j,i){h.selector(i,true,"matchesSelector");
return b.isElement(j)?a.call(j,i):false}},{"./helpers/nativeMatches":108,"./helpers/validate":109,"ac-dom-nodes":83}],112:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":109,"./matchesSelector":111,"ac-dom-nodes":83}],113:[function(f,g,c){var a=f("ac-dom-nodes");
var b=f("./matchesSelector");var h=f("./helpers/validate");g.exports=function d(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j}},{"./helpers/validate":109,"./matchesSelector":111,"ac-dom-nodes":83}],114:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":109,"./matchesSelector":111,"ac-dom-nodes":83}],115:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j.reverse()}},{"./helpers/validate":109,"./matchesSelector":111,"ac-dom-nodes":83}],116:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelector","context");
f.selector(g,true,"querySelector");return h.querySelector(g)}},{"./helpers/validate":109}],117:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelectorAll","context");
f.selector(g,true,"querySelectorAll");return Array.prototype.slice.call(h.querySelectorAll(g))
}},{"./helpers/validate":109}],118:[function(d,f,c){var g=d("../vendor/sizzle/sizzle");
var b=d("ac-dom-nodes");var a=d("../helpers/nativeMatches");var h=d("../helpers/validate");
f.exports=function(j,i){if(i||!("querySelectorAll" in document)){j.querySelectorAll=function(k,m){var l;
var n;m=m||document;h.parentNode(m,true,"querySelectorAll","context");h.selector(k,true,"querySelectorAll");
if(b.isDocumentFragment(m)){l=j.children(m);n=[];l.forEach(function(p){var o;if(g.matchesSelector(p,k)){n.push(p)
}o=g(k,p);if(o.length){n=n.concat(o)}});return n}return g(k,m)};j.querySelector=function(l,m){var k;
m=m||document;h.parentNode(m,true,"querySelector","context");h.selector(l,true,"querySelector");
k=j.querySelectorAll(l,m);return k.length?k[0]:null}}if(i||!a){j.matchesSelector=function(l,k){return g.matchesSelector(l,k)
}}}},{"../helpers/nativeMatches":108,"../helpers/validate":109,"../vendor/sizzle/sizzle":120,"ac-dom-nodes":83}],119:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":105,"./helpers/validate":109}],120:[function(b,c,a){
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(ad,v){var ai,D,u,h,n,l=ad.document,o=l.documentElement,L="undefined",p=false,m=true,t=0,y=[].slice,ah=[].push,al=("sizcache"+Math.random()).replace(".",""),O="[\\x20\\t\\r\\n\\f]",x="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])",w="(?:[\\w#_-]|[^\\x00-\\xa0]|\\\\.)",aq="([*^$|!~]?=)",aa="\\["+O+"*("+x+"+)"+O+"*(?:"+aq+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+w+"+)|)|)"+O+"*\\]",ar=":("+x+"+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|(.*))\\)|)",Q=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",s=O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*",r="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+aa+"|"+ar.replace(2,7)+"|[^\\\\(),])+",aj=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),U=new RegExp("^"+s),I=new RegExp(r+"?(?="+O+"*,|$)","g"),Y=new RegExp("^(?:(?!,)(?:(?:^|,)"+O+"*"+r+")*?|"+O+"*(.*?))(\\)|$)"),ao=new RegExp(r.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+s,"g"),Z=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,ae=/[\x20\t\r\n\f]*[+~]/,am=/:not\($/,E=/h\d/i,ab=/input|select|textarea|button/i,H=/\\(?!\\)/g,T={ID:new RegExp("^#("+x+"+)"),CLASS:new RegExp("^\\.("+x+"+)"),NAME:new RegExp("^\\[name=['\"]?("+x+"+)['\"]?\\]"),TAG:new RegExp("^("+x.replace("[-","[-\\*")+"+)"),ATTR:new RegExp("^"+aa),PSEUDO:new RegExp("^"+ar),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),POS:new RegExp(Q,"ig"),needsContext:new RegExp("^"+O+"*[>+~]|"+Q,"i")},ag={},F=[],A={},J=[],an=function(at){at.sizzleFilter=true;
return at},i=function(at){return function(au){return au.nodeName.toLowerCase()==="input"&&au.type===at
}},G=function(at){return function(av){var au=av.nodeName.toLowerCase();return(au==="input"||au==="button")&&av.type===at
}},W=function(at){var au=false,aw=l.createElement("div");try{au=at(aw)}catch(av){}aw=null;
return au},C=W(function(au){au.innerHTML="<select></select>";var at=typeof au.lastChild.getAttribute("multiple");
return at!=="boolean"&&at!=="string"}),f=W(function(au){au.id=al+0;au.innerHTML="<a name='"+al+"'></a><div name='"+al+"'></div>";
o.insertBefore(au,o.firstChild);var at=l.getElementsByName&&l.getElementsByName(al).length===2+l.getElementsByName(al+0).length;
n=!l.getElementById(al);o.removeChild(au);return at}),k=W(function(at){at.appendChild(l.createComment(""));
return at.getElementsByTagName("*").length===0}),S=W(function(at){at.innerHTML="<a href='#'></a>";
return at.firstChild&&typeof at.firstChild.getAttribute!==L&&at.firstChild.getAttribute("href")==="#"
}),R=W(function(at){at.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!at.getElementsByClassName||at.getElementsByClassName("e").length===0){return false
}at.lastChild.className="e";return at.getElementsByClassName("e").length!==1});
var ac=function(aw,at,ay,aB){ay=ay||[];at=at||l;var az,au,aA,av,ax=at.nodeType;
if(ax!==1&&ax!==9){return[]}if(!aw||typeof aw!=="string"){return ay}aA=z(at);if(!aA&&!aB){if((az=Z.exec(aw))){if((av=az[1])){if(ax===9){au=at.getElementById(av);
if(au&&au.parentNode){if(au.id===av){ay.push(au);return ay}}else{return ay}}else{if(at.ownerDocument&&(au=at.ownerDocument.getElementById(av))&&P(at,au)&&au.id===av){ay.push(au);
return ay}}}else{if(az[2]){ah.apply(ay,y.call(at.getElementsByTagName(aw),0));return ay
}else{if((av=az[3])&&R&&at.getElementsByClassName){ah.apply(ay,y.call(at.getElementsByClassName(av),0));
return ay}}}}}return ak(aw,at,ay,aB,aA)};var V=ac.selectors={cacheLength:50,match:T,order:["ID","TAG"],attrHandle:{},createPseudo:an,find:{ID:n?function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at&&at.parentNode?[at]:[]}}:function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at?at.id===aw||typeof at.getAttributeNode!==L&&at.getAttributeNode("id").value===aw?[at]:v:[]
}},TAG:k?function(at,au){if(typeof au.getElementsByTagName!==L){return au.getElementsByTagName(at)
}}:function(at,ax){var aw=ax.getElementsByTagName(at);if(at==="*"){var ay,av=[],au=0;
for(;(ay=aw[au]);au++){if(ay.nodeType===1){av.push(ay)}}return av}return aw}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(at){at[1]=at[1].replace(H,"");
at[3]=(at[4]||at[5]||"").replace(H,"");if(at[2]==="~="){at[3]=" "+at[3]+" "}return at.slice(0,4)
},CHILD:function(at){at[1]=at[1].toLowerCase();if(at[1]==="nth"){if(!at[2]){ac.error(at[0])
}at[3]=+(at[3]?at[4]+(at[5]||1):2*(at[2]==="even"||at[2]==="odd"));at[4]=+((at[6]+at[7])||at[2]==="odd")
}else{if(at[2]){ac.error(at[0])}}return at},PSEUDO:function(at){var au,av=at[4];
if(T.CHILD.test(at[0])){return null}if(av&&(au=Y.exec(av))&&au.pop()){at[0]=at[0].slice(0,au[0].length-av.length-1);
av=au[0].slice(0,-1)}at.splice(2,3,av||at[3]);return at}},filter:{ID:n?function(at){at=at.replace(H,"");
return function(au){return au.getAttribute("id")===at}}:function(at){at=at.replace(H,"");
return function(av){var au=typeof av.getAttributeNode!==L&&av.getAttributeNode("id");
return au&&au.value===at}},TAG:function(at){if(at==="*"){return function(){return true
}}at=at.replace(H,"").toLowerCase();return function(au){return au.nodeName&&au.nodeName.toLowerCase()===at
}},CLASS:function(at){var au=ag[at];if(!au){au=ag[at]=new RegExp("(^|"+O+")"+at+"("+O+"|$)");
F.push(at);if(F.length>V.cacheLength){delete ag[F.shift()]}}return function(av){return au.test(av.className||(typeof av.getAttribute!==L&&av.getAttribute("class"))||"")
}},ATTR:function(av,au,at){if(!au){return function(aw){return ac.attr(aw,av)!=null
}}return function(ax){var aw=ac.attr(ax,av),ay=aw+"";if(aw==null){return au==="!="
}switch(au){case"=":return ay===at;case"!=":return ay!==at;case"^=":return at&&ay.indexOf(at)===0;
case"*=":return at&&ay.indexOf(at)>-1;case"$=":return at&&ay.substr(ay.length-at.length)===at;
case"~=":return(" "+ay+" ").indexOf(at)>-1;case"|=":return ay===at||ay.substr(0,at.length+1)===at+"-"
}}},CHILD:function(au,aw,ax,av){if(au==="nth"){var at=t++;return function(aB){var ay,aC,aA=0,az=aB;
if(ax===1&&av===0){return true}ay=aB.parentNode;if(ay&&(ay[al]!==at||!aB.sizset)){for(az=ay.firstChild;
az;az=az.nextSibling){if(az.nodeType===1){az.sizset=++aA;if(az===aB){break}}}ay[al]=at
}aC=aB.sizset-av;if(ax===0){return aC===0}else{return(aC%ax===0&&aC/ax>=0)}}}return function(az){var ay=az;
switch(au){case"only":case"first":while((ay=ay.previousSibling)){if(ay.nodeType===1){return false
}}if(au==="first"){return true}ay=az;case"last":while((ay=ay.nextSibling)){if(ay.nodeType===1){return false
}}return true}}},PSEUDO:function(ax,aw,au,at){var av=V.pseudos[ax]||V.pseudos[ax.toLowerCase()];
if(!av){ac.error("unsupported pseudo: "+ax)}if(!av.sizzleFilter){return av}return av(aw,au,at)
}},pseudos:{not:an(function(at,av,au){var aw=q(at.replace(aj,"$1"),av,au);return function(ax){return !aw(ax)
}}),enabled:function(at){return at.disabled===false},disabled:function(at){return at.disabled===true
},checked:function(at){var au=at.nodeName.toLowerCase();return(au==="input"&&!!at.checked)||(au==="option"&&!!at.selected)
},selected:function(at){if(at.parentNode){at.parentNode.selectedIndex}return at.selected===true
},parent:function(at){return !!at.firstChild},empty:function(at){return !at.firstChild
},contains:an(function(at){return function(au){return(au.textContent||au.innerText||d(au)).indexOf(at)>-1
}}),has:an(function(at){return function(au){return ac(at,au).length>0}}),header:function(at){return E.test(at.nodeName)
},text:function(av){var au,at;return av.nodeName.toLowerCase()==="input"&&(au=av.type)==="text"&&((at=av.getAttribute("type"))==null||at.toLowerCase()===au)
},radio:i("radio"),checkbox:i("checkbox"),file:i("file"),password:i("password"),image:i("image"),submit:G("submit"),reset:G("reset"),button:function(au){var at=au.nodeName.toLowerCase();
return at==="input"&&au.type==="button"||at==="button"},input:function(at){return ab.test(at.nodeName)
},focus:function(at){var au=at.ownerDocument;return at===au.activeElement&&(!au.hasFocus||au.hasFocus())&&!!(at.type||at.href)
},active:function(at){return at===at.ownerDocument.activeElement}},setFilters:{first:function(av,au,at){return at?av.slice(1):[av[0]]
},last:function(aw,av,au){var at=aw.pop();return au?aw:[at]},even:function(ay,ax,aw){var av=[],au=aw?1:0,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},odd:function(ay,ax,aw){var av=[],au=aw?0:1,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},lt:function(av,au,at){return at?av.slice(+au):av.slice(0,+au)
},gt:function(av,au,at){return at?av.slice(0,+au+1):av.slice(+au+1)},eq:function(aw,av,au){var at=aw.splice(+av,1);
return au?aw:at}}};V.setFilters.nth=V.setFilters.eq;V.filters=V.pseudos;if(!S){V.attrHandle={href:function(at){return at.getAttribute("href",2)
},type:function(at){return at.getAttribute("type")}}}if(f){V.order.push("NAME");
V.find.NAME=function(at,au){if(typeof au.getElementsByName!==L){return au.getElementsByName(at)
}}}if(R){V.order.splice(1,0,"CLASS");V.find.CLASS=function(av,au,at){if(typeof au.getElementsByClassName!==L&&!at){return au.getElementsByClassName(av)
}}}try{y.call(o.childNodes,0)[0].nodeType}catch(ap){y=function(au){var av,at=[];
for(;(av=this[au]);au++){at.push(av)}return at}}var z=ac.isXML=function(at){var au=at&&(at.ownerDocument||at).documentElement;
return au?au.nodeName!=="HTML":false};var P=ac.contains=o.compareDocumentPosition?function(au,at){return !!(au.compareDocumentPosition(at)&16)
}:o.contains?function(au,at){var aw=au.nodeType===9?au.documentElement:au,av=at.parentNode;
return au===av||!!(av&&av.nodeType===1&&aw.contains&&aw.contains(av))}:function(au,at){while((at=at.parentNode)){if(at===au){return true
}}return false};var d=ac.getText=function(ax){var aw,au="",av=0,at=ax.nodeType;
if(at){if(at===1||at===9||at===11){if(typeof ax.textContent==="string"){return ax.textContent
}else{for(ax=ax.firstChild;ax;ax=ax.nextSibling){au+=d(ax)}}}else{if(at===3||at===4){return ax.nodeValue
}}}else{for(;(aw=ax[av]);av++){au+=d(aw)}}return au};ac.attr=function(aw,av){var at,au=z(aw);
if(!au){av=av.toLowerCase()}if(V.attrHandle[av]){return V.attrHandle[av](aw)}if(C||au){return aw.getAttribute(av)
}at=aw.getAttributeNode(av);return at?typeof aw[av]==="boolean"?aw[av]?av:null:at.specified?at.value:null:null
};ac.error=function(at){throw new Error("Syntax error, unrecognized expression: "+at)
};[0,0].sort(function(){return(m=0)});if(o.compareDocumentPosition){u=function(au,at){if(au===at){p=true;
return 0}return(!au.compareDocumentPosition||!at.compareDocumentPosition?au.compareDocumentPosition:au.compareDocumentPosition(at)&4)?-1:1
}}else{u=function(aB,aA){if(aB===aA){p=true;return 0}else{if(aB.sourceIndex&&aA.sourceIndex){return aB.sourceIndex-aA.sourceIndex
}}var ay,au,av=[],at=[],ax=aB.parentNode,az=aA.parentNode,aC=ax;if(ax===az){return h(aB,aA)
}else{if(!ax){return -1}else{if(!az){return 1}}}while(aC){av.unshift(aC);aC=aC.parentNode
}aC=az;while(aC){at.unshift(aC);aC=aC.parentNode}ay=av.length;au=at.length;for(var aw=0;
aw<ay&&aw<au;aw++){if(av[aw]!==at[aw]){return h(av[aw],at[aw])}}return aw===ay?h(aB,at[aw],-1):h(av[aw],aA,1)
};h=function(au,at,av){if(au===at){return av}var aw=au.nextSibling;while(aw){if(aw===at){return -1
}aw=aw.nextSibling}return 1}}ac.uniqueSort=function(au){var av,at=1;if(u){p=m;au.sort(u);
if(p){for(;(av=au[at]);at++){if(av===au[at-1]){au.splice(at--,1)}}}}return au};
function B(au,ay,ax,av){var aw=0,at=ay.length;for(;aw<at;aw++){ac(au,ay[aw],ax,av)
}}function X(at,av,az,aA,au,ay){var aw,ax=V.setFilters[av.toLowerCase()];if(!ax){ac.error(av)
}if(at||!(aw=au)){B(at||"*",aA,(aw=[]),au)}return aw.length>0?ax(aw,az,ay):[]}function af(aD,at,aB,av,aH){var ay,au,ax,aJ,aA,aI,aC,aG,aE=0,aF=aH.length,aw=T.POS,az=new RegExp("^"+aw.source+"(?!"+O+")","i"),aK=function(){var aM=1,aL=arguments.length-2;
for(;aM<aL;aM++){if(arguments[aM]===v){ay[aM]=v}}};for(;aE<aF;aE++){aw.exec("");
aD=aH[aE];aJ=[];ax=0;aA=av;while((ay=aw.exec(aD))){aG=aw.lastIndex=ay.index+ay[0].length;
if(aG>ax){aC=aD.slice(ax,ay.index);ax=aG;aI=[at];if(U.test(aC)){if(aA){aI=aA}aA=av
}if((au=am.test(aC))){aC=aC.slice(0,-5).replace(U,"$&*")}if(ay.length>1){ay[0].replace(az,aK)
}aA=X(aC,ay[1],ay[2],aI,aA,au)}}if(aA){aJ=aJ.concat(aA);if((aC=aD.slice(ax))&&aC!==")"){B(aC,aJ,aB,av)
}else{ah.apply(aB,aJ)}}else{ac(aD,at,aB,av)}}return aF===1?aB:ac.uniqueSort(aB)
}function g(az,av,aC){var aE,aD,aF,ax=[],aA=0,aB=Y.exec(az),au=!aB.pop()&&!aB.pop(),aG=au&&az.match(I)||[""],at=V.preFilter,aw=V.filter,ay=!aC&&av!==l;
for(;(aD=aG[aA])!=null&&au;aA++){ax.push(aE=[]);if(ay){aD=" "+aD}while(aD){au=false;
if((aB=U.exec(aD))){aD=aD.slice(aB[0].length);au=aE.push({part:aB.pop().replace(aj," "),captures:aB})
}for(aF in aw){if((aB=T[aF].exec(aD))&&(!at[aF]||(aB=at[aF](aB,av,aC)))){aD=aD.slice(aB.shift().length);
au=aE.push({part:aF,captures:aB})}}if(!au){break}}}if(!au){ac.error(az)}return ax
}function M(ax,aw,av){var at=aw.dir,au=t++;if(!ax){ax=function(ay){return ay===av
}}return aw.first?function(az,ay){while((az=az[at])){if(az.nodeType===1){return ax(az,ay)&&az
}}}:function(aA,az){var ay,aB=au+"."+D,aC=aB+"."+ai;while((aA=aA[at])){if(aA.nodeType===1){if((ay=aA[al])===aC){return false
}else{if(typeof ay==="string"&&ay.indexOf(aB)===0){if(aA.sizset){return aA}}else{aA[al]=aC;
if(ax(aA,az)){aA.sizset=true;return aA}aA.sizset=false}}}}}}function K(at,au){return at?function(ax,aw){var av=au(ax,aw);
return av&&at(av===true?ax:av,aw)}:au}function N(ay,aw,at){var av,ax,au=0;for(;
(av=ay[au]);au++){if(V.relative[av.part]){ax=M(ax,V.relative[av.part],aw)}else{av.captures.push(aw,at);
ax=K(ax,V.filter[av.part].apply(null,av.captures))}}return ax}function j(at){return function(aw,av){var ax,au=0;
for(;(ax=at[au]);au++){if(ax(aw,av)){return true}}return false}}var q=ac.compile=function(at,aw,au){var az,ay,av,ax=A[at];
if(ax&&ax.context===aw){ax.dirruns++;return ax}ay=g(at,aw,au);for(av=0;(az=ay[av]);
av++){ay[av]=N(az,aw,au)}ax=A[at]=j(ay);ax.context=aw;ax.runs=ax.dirruns=0;J.push(at);
if(J.length>V.cacheLength){delete A[J.shift()]}return ax};ac.matches=function(au,at){return ac(au,null,null,at)
};ac.matchesSelector=function(at,au){return ac(au,null,null,[at]).length>0};var ak=function(ax,au,az,aD,aC){ax=ax.replace(aj,"$1");
var at,aE,aA,aF,av,aw,aH,aI,ay,aB=ax.match(I),aG=ax.match(ao),aJ=au.nodeType;if(T.POS.test(ax)){return af(ax,au,az,aD,aB)
}if(aD){at=y.call(aD,0)}else{if(aB&&aB.length===1){if(aG.length>1&&aJ===9&&!aC&&(aB=T.ID.exec(aG[0]))){au=V.find.ID(aB[1],au,aC)[0];
if(!au){return az}ax=ax.slice(aG.shift().length)}aI=((aB=ae.exec(aG[0]))&&!aB.index&&au.parentNode)||au;
ay=aG.pop();aw=ay.split(":not")[0];for(aA=0,aF=V.order.length;aA<aF;aA++){aH=V.order[aA];
if((aB=T[aH].exec(aw))){at=V.find[aH]((aB[1]||"").replace(H,""),aI,aC);if(at==null){continue
}if(aw===ay){ax=ax.slice(0,ax.length-ay.length)+aw.replace(T[aH],"");if(!ax){ah.apply(az,y.call(at,0))
}}break}}}}if(ax){aE=q(ax,au,aC);D=aE.dirruns;if(at==null){at=V.find.TAG("*",(ae.test(ax)&&au.parentNode)||au)
}for(aA=0;(av=at[aA]);aA++){ai=aE.runs++;if(aE(av,au)){az.push(av)}}}return az};
if(l.querySelectorAll){(function(){var ay,az=ak,ax=/'|\\/g,av=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,au=[],at=[":active"],aw=o.matchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||o.oMatchesSelector||o.msMatchesSelector;
W(function(aA){aA.innerHTML="<select><option selected></option></select>";if(!aA.querySelectorAll("[selected]").length){au.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!aA.querySelectorAll(":checked").length){au.push(":checked")}});W(function(aA){aA.innerHTML="<p test=''></p>";
if(aA.querySelectorAll("[test^='']").length){au.push("[*^$]="+O+"*(?:\"\"|'')")
}aA.innerHTML="<input type='hidden'>";if(!aA.querySelectorAll(":enabled").length){au.push(":enabled",":disabled")
}});au=au.length&&new RegExp(au.join("|"));ak=function(aF,aB,aG,aI,aH){if(!aI&&!aH&&(!au||!au.test(aF))){if(aB.nodeType===9){try{ah.apply(aG,y.call(aB.querySelectorAll(aF),0));
return aG}catch(aE){}}else{if(aB.nodeType===1&&aB.nodeName.toLowerCase()!=="object"){var aD=aB.getAttribute("id"),aA=aD||al,aC=ae.test(aF)&&aB.parentNode||aB;
if(aD){aA=aA.replace(ax,"\\$&")}else{aB.setAttribute("id",aA)}try{ah.apply(aG,y.call(aC.querySelectorAll(aF.replace(I,"[id='"+aA+"'] $&")),0));
return aG}catch(aE){}finally{if(!aD){aB.removeAttribute("id")}}}}}return az(aF,aB,aG,aI,aH)
};if(aw){W(function(aB){ay=aw.call(aB,"div");try{aw.call(aB,"[test!='']:sizzle");
at.push(V.match.PSEUDO)}catch(aA){}});at=new RegExp(at.join("|"));ac.matchesSelector=function(aB,aD){aD=aD.replace(av,"='$1']");
if(!z(aB)&&!at.test(aD)&&(!au||!au.test(aD))){try{var aA=aw.call(aB,aD);if(aA||ay||aB.document&&aB.document.nodeType!==11){return aA
}}catch(aC){}}return ac(aD,null,null,[aB]).length>0}}})()}if(typeof c==="object"&&c.exports){c.exports=ac
}else{ad.Sizzle=ac}})(window)},{}],121:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":122}],122:[function(c,b,d){var f;var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g=c("ac-dom-events"),a=c("ac-dom-traversal");
var i="dom-emitter";function h(l){if(l===null){return}this.el=l;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new k()}f=h.prototype;f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f.has=function(l,q,p,n){var o,r;if(typeof q==="string"){o=q;r=p}else{r=q;
n=p}if(o){var m=this._getDelegateFuncBindingIdx(l,o,r,n,true);if(m>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(n,m,o,s){n=this._parseEventNames(n);n=this._cleanStringData(n);
var q,r,p,l=n.length;if(typeof m==="string"){q=this._cleanStringData(m);r=o}else{r=m;
s=o}for(p=0;p<l;p++){this._triggerDOMEvents(n[p],r,q)}return this};f.emitterTrigger=function(m,o,p){m=this._parseEventNames(m);
m=this._cleanStringData(m);o=new j(o,this);var n,l=m.length;for(n=0;n<l;n++){this._eventEmitter.trigger(m[n],o,p)
}return this};f.propagateTo=function(l,m){this._eventEmitter.propagateTo(l,m);return this
};f.stopPropagatingTo=function(l){this._eventEmitter.stopPropagatingTo(l);return this
};f.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
this.el=this._eventEmitter=this._bindings=this._delegateFuncs=null};f._parseEventNames=function(l){if(!l){return[l]
}return l.split(" ")};f._onListenerEvent=function(n,m){var l=new j(m,this);this._eventEmitter.trigger(n,l,false)
};f._setListener=function(l){this._bindings[l]=this._onListenerEvent.bind(this,l);
g.addEventListener(this.el,l,this._bindings[l])};f._removeListener=function(l){g.removeEventListener(this.el,l,this._bindings[l]);
this._bindings[l]=null};f._triggerInternalEvent=function(l,m){this.emitterTrigger(i+":"+l,m)
};f._normalizeArgumentsAndCall=function(l,n){var r={};if(l.length===0){n.call(this,r);
return}if(typeof l[0]==="string"||l[0]===null){l=this._cleanStringData(l);r.events=l[0];
if(typeof l[1]==="string"){r.delegateQuery=l[1];r.callback=l[2];r.context=l[3]}else{r.callback=l[1];
r.context=l[2]}n.call(this,r);return}var m,p,q=":",o=l[0];for(m in o){if(o.hasOwnProperty(m)){r={};
p=this._cleanStringData(m.split(q));r.events=p[0];r.delegateQuery=p[1];r.callback=o[m];
r.context=l[1];n.call(this,r)}}};f._registerDelegateFunc=function(n,p,q,l,o){var m=this._delegateFunc.bind(this,n,p,q,o);
this._delegateFuncs[p]=this._delegateFuncs[p]||{};this._delegateFuncs[p][n]=this._delegateFuncs[p][n]||[];
this._delegateFuncs[p][n].push({func:l,context:o,delegateFunc:m});return m};f._cleanStringData=function(o){var n=false;
if(typeof o==="string"){o=[o];n=true}var m=[],q,s,r,p,l=o.length;for(q=0;q<l;q++){s=o[q];
if(typeof s==="string"){if(s===""||s===" "){continue}r=s.length;while(s[0]===" "){s=s.slice(1,r);
r--}while(s[r-1]===" "){s=s.slice(0,r-1);r--}}m.push(s)}if(n){return m[0]}return m
};f._unregisterDelegateFunc=function(n,q,l,p){if(!this._delegateFuncs[q]||!this._delegateFuncs[q][n]){return
}var o=this._getDelegateFuncBindingIdx(n,q,l,p),m;if(o>-1){m=this._delegateFuncs[q][n][o].delegateFunc;
this._delegateFuncs[q][n].splice(o,1);if(this._delegateFuncs[q][n].length===0){this._delegateFuncs[q][n]=null
}}return m};f._unregisterDelegateFuncs=function(l,n){if(!this._delegateFuncs[n]){return
}if(l!==null&&!this._delegateFuncs[n][l]){return}if(l===null){var m;for(m in this._delegateFuncs[n]){if(this._delegateFuncs[n].hasOwnProperty(m)){this._unbindDelegateFunc(m,n)
}}return}this._unbindDelegateFunc(l,n)};f._unbindDelegateFunc=function(l,n){var o,p,m=0;
while(this._delegateFuncs[n][l]&&this._delegateFuncs[n][l][m]){o=this._delegateFuncs[n][l][m];
p=this._delegateFuncs[n][l][m].length;this._off({events:l,delegateQuery:n,callback:o.func,context:o.context});
if(this._delegateFuncs[n][l]&&p===this._delegateFuncs[n][l].length){m++}}o=p=null
};f._unregisterDelegateFuncsByEvent=function(l){var m;for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._unregisterDelegateFuncs(l,m)
}}};f._delegateFunc=function(l,p,r,n,q){if(this._targetHasDelegateAncestor(q.target,p)){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
n=n||window;if(typeof q.detail==="object"){o[0]=q.detail}r.apply(n,o)}};f._targetHasDelegateAncestor=function(n,m){var l=n;
while(l&&l!==this.el&&l!==document.documentElement){if(a.matchesSelector(l,m)){return true
}l=l.parentNode}return false};f._on=function(p){var m=p.events,q=p.callback,o=p.delegateQuery,n=p.context,l=p.unboundCallback||q;
m=this._parseEventNames(m);m.forEach(function(v,r,t,u,s){if(!this.has(s)){this._setListener(s)
}if(typeof u==="string"){v=this._registerDelegateFunc(s,u,v,r,t)}this._triggerInternalEvent("willon",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.on(s,v,t);this._triggerInternalEvent("didon",{evt:s,callback:v,context:t,delegateQuery:u})
}.bind(this,q,l,n,o));m=q=l=o=n=null};f._off=function(q){var m=q.events,r=q.callback,p=q.delegateQuery,o=q.context,l=q.unboundCallback||r;
if(typeof m==="undefined"){this._eventEmitter.off();var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}for(n in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(n)){this._delegateFuncs[n]=null
}}return}m=this._parseEventNames(m);m.forEach(function(w,s,u,v,t){if(typeof v==="string"&&typeof s==="function"){w=this._unregisterDelegateFunc(t,v,s,u);
if(!w){return}}if(typeof v==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncs(t,v);
return}if(typeof t==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncsByEvent(t);
if(typeof v==="string"){return}}this._triggerInternalEvent("willoff",{evt:t,callback:w,context:u,delegateQuery:v});
this._eventEmitter.off(t,w,u);this._triggerInternalEvent("didoff",{evt:t,callback:w,context:u,delegateQuery:v});
if(!this.has(t)){this._removeListener(t)}}.bind(this,r,l,o,p));m=r=l=p=o=null};
f._once=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context;l=this._parseEventNames(l);
l.forEach(function(t,r,s,q){if(typeof s==="string"){return this._handleDelegateOnce(q,t,r,s)
}if(!this.has(q)){this._setListener(q)}this._triggerInternalEvent("willonce",{evt:q,callback:t,context:r,delegateQuery:s});
this._eventEmitter.once.call(this,q,t,r);this._triggerInternalEvent("didonce",{evt:q,callback:t,context:r,delegateQuery:s})
}.bind(this,p,m,n));l=p=n=m=null};f._handleDelegateOnce=function(l,o,m,n){this._triggerInternalEvent("willonce",{evt:l,callback:o,context:m,delegateQuery:n});
this._on({events:l,context:m,delegateQuery:n,callback:this._getDelegateOnceCallback.bind(this,l,o,m,n),unboundCallback:o});
this._triggerInternalEvent("didonce",{evt:l,callback:o,context:m,delegateQuery:n});
return this};f._getDelegateOnceCallback=function(l,q,n,p){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
q.apply(n,o);this._off({events:l,delegateQuery:p,callback:q,context:n})};f._getDelegateFuncBindingIdx=function(s,p,n,l,t){var r=-1;
if(this._delegateFuncs[p]&&this._delegateFuncs[p][s]){var o,m,q=this._delegateFuncs[p][s].length;
for(o=0;o<q;o++){m=this._delegateFuncs[p][s][o];if(t&&typeof n==="undefined"){n=m.func
}if(m.func===n&&m.context===l){r=o;break}}}return r};f._triggerDOMEvents=function(n,q,p){var m=[this.el];
if(p){m=a.querySelectorAll(p,this.el)}var o,r,l=m.length;for(o=0;o<l;o++){g.dispatchEvent(m[o],n,{bubbles:true,cancelable:true,detail:q})
}};b.exports=h},{"./DOMEmitterEvent":123,"ac-dom-events":127,"ac-dom-traversal":102,"ac-event-emitter":284}],123:[function(b,c,a){var f=b("ac-dom-events");
var d;var g=function(i,h){this._domEmitter=h;this._originalTarget=f.target(i);this.originalEvent=i||{};
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
};d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
}return false};c.exports=g},{"ac-dom-events":127}],124:[function(b,c,a){var d=b("./ac-prefixer/Prefixer");
c.exports=new d();c.exports.Prefixer=d},{"./ac-prefixer/Prefixer":125}],125:[function(d,b,g){var k=d("./Prefixer/camelCasedEvents");
var n=/(\([^\)]+\))/gi;var h=/([^ ,;\(]+(\([^\)]+\))?)/gi;var j=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
var a=/^(webkit|moz|ms)/gi;var f=["-webkit-","-moz-","-ms-"];var l=["Webkit","Moz","ms"];
var m=["webkit","moz","ms"];function c(){this._supportsAvailable=("CSS" in window&&"supports" in window.CSS);
this._cssPrefixes=f;this._domPrefixes=l;this._evtPrefixes=m;this._styleProperties={};
this._styleValues={};this._eventTypes={}}var i=c.prototype;i.getEventType=function(p){var q;
var o;p=p.toLowerCase();if(p in this._eventTypes){return this._eventTypes[p]}if(this._checkEventType("on"+p)){return this._eventTypes[p]=p
}if(k[p]){for(q in k[p]){if(this._checkEventType(q)){return this._eventTypes[p]=k[p][q]
}}}for(o=0;o<this._evtPrefixes.length;o++){if(this._checkEventType("on"+this._evtPrefixes[o]+p)){this._eventTypes[p]=this._evtPrefixes[o]+p;
this._reduceAvailablePrefixes(o);return this._eventTypes[p]}}return this._eventTypes[p]=p
};i._checkEventType=function(o){return(o in window||o in document)};i.getStyleProperty=function(r){var q;
var o;var p;r+="";if(r in this._styleProperties){return this._styleProperties[r].dom
}r=this._toDOM(r);this._prepareTestElement();o=r.charAt(0).toUpperCase()+r.substr(1);
if(r==="filter"){q=["WebkitFilter","filter"]}else{q=(r+" "+this._domPrefixes.join(o+" ")+o).split(" ")
}for(p=0;p<q.length;p++){if(this._el.style[q[p]]!==undefined){if(p!==0){this._reduceAvailablePrefixes(p-1)
}this._memoizeStyleProperty(r,q[p]);return q[p]}}this._memoizeStyleProperty(r,false);
return false};i._memoizeStyleProperty=function(r,o){var p=this._toCSS(r);var q=(o===false)?false:this._toCSS(o);
this._styleProperties[r]=this._styleProperties[o]=this._styleProperties[p]=this._styleProperties[q]={dom:o,css:q}
};i.getStyleCSS=function(q,p){var o;q=this.getStyleProperty(q);if(!q){return false
}o=this._styleProperties[q].css;if(typeof p!=="undefined"){p=this.getStyleValue(q,p);
if(p===false){return false}o+=":"+p+";"}return o};i.getStyleValue=function(q,p){var o;
p+="";q=this.getStyleProperty(q);if(!q){return false}if(this._testStyleValue(q,p)){return p
}o=this._styleProperties[q].css;p=p.replace(h,function(s){var r;var v;var u;var t;
if(s[0]==="#"||!isNaN(s[0])){return s}v=s.replace(n,"");u=o+":"+v;if(u in this._styleValues){if(this._styleValues[u]===false){return""
}return s.replace(v,this._styleValues[u])}r=this._cssPrefixes.map(function(w){return w+s
});r=[s].concat(r);for(t=0;t<r.length;t++){if(this._testStyleValue(q,r[t])){if(t!==0){this._reduceAvailablePrefixes(t-1)
}this._styleValues[u]=r[t].replace(n,"");return r[t]}}this._styleValues[u]=false;
return""}.bind(this));p=p.trim();return(p==="")?false:p};i._testStyleValue=function(q,p){var o;
if(this._supportsAvailable){q=this._styleProperties[q].css;return CSS.supports(q,p)
}this._prepareTestElement();o=this._el.style[q];try{this._el.style[q]=p}catch(r){return false
}return(this._el.style[q]&&this._el.style[q]!==o)};i.stripPrefixes=function(o){o=String.prototype.replace.call(o,j,"");
return o.charAt(0).toLowerCase()+o.slice(1)};i._reduceAvailablePrefixes=function(o){if(this._cssPrefixes.length!==1){this._cssPrefixes=[this._cssPrefixes[o]];
this._domPrefixes=[this._domPrefixes[o]];this._evtPrefixes=[this._evtPrefixes[o]]
}};i._toDOM=function(p){var o;if(p.toLowerCase()==="float"){return"cssFloat"}p=p.replace(/-([a-z])/g,function(r,q){return q.toUpperCase()
});if(p.substr(0,2)==="Ms"){p="ms"+p.substr(2)}return p};i._toCSS=function(p){var o;
if(p.toLowerCase()==="cssfloat"){return"float"}if(a.test(p)){p="-"+p}return p.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
};i._prepareTestElement=function(){if(!this._el){this._el=document.createElement("_")
}else{this._el.style.cssText="";this._el.removeAttribute("style")}};b.exports=c
},{"./Prefixer/camelCasedEvents":126}],126:[function(b,c,a){c.exports={transitionend:{onwebkittransitionend:"webkitTransitionEnd",onmstransitionend:"MSTransitionEnd"},animationstart:{onwebkitanimationstart:"webkitAnimationStart",onmsanimationstart:"MSAnimationStart"},animationend:{onwebkitanimationend:"webkitAnimationEnd",onmsanimationend:"MSAnimationEnd"},animationiteration:{onwebkitanimationiteration:"webkitAnimationIteration",onmsanimationiteration:"MSAnimationIteration"},fullscreenchange:{onmsfullscreenchange:"MSFullscreenChange"},fullscreenerror:{onmsfullscreenerror:"MSFullscreenError"}}
},{}],127:[function(b,c,a){c.exports={addEventListener:b("./ac-dom-events/addEventListener"),dispatchEvent:b("./ac-dom-events/dispatchEvent"),preventDefault:b("./ac-dom-events/preventDefault"),removeEventListener:b("./ac-dom-events/removeEventListener"),stop:b("./ac-dom-events/stop"),stopPropagation:b("./ac-dom-events/stopPropagation"),target:b("./ac-dom-events/target")}
},{"./ac-dom-events/addEventListener":128,"./ac-dom-events/dispatchEvent":129,"./ac-dom-events/preventDefault":130,"./ac-dom-events/removeEventListener":131,"./ac-dom-events/stop":132,"./ac-dom-events/stopPropagation":133,"./ac-dom-events/target":134}],128:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.addEventListener){j.addEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.attachEvent(h,i)}return j}},{"ac-prefixer":124}],129:[function(b,c,a){c.exports=function d(i,h,g){var f;
h=h.toLowerCase();if(window.CustomEvent){if(g){f=new CustomEvent(h,g)}else{f=new CustomEvent(h)
}i.dispatchEvent(f)}else{f=document.createEventObject();if(g&&"detail" in g){f.detail=g.detail
}i.fireEvent("on"+h,f)}return i}},{}],130:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],131:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.removeEventListener){j.removeEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.detachEvent(h,i)}return j}},{"ac-prefixer":124}],132:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":130,"./stopPropagation":133}],133:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],134:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],135:[function(b,c,a){c.exports=b(124)
},{"./ac-prefixer/Prefixer":136}],136:[function(b,c,a){c.exports=b(125)},{"./Prefixer/camelCasedEvents":137}],137:[function(b,c,a){c.exports=b(126)
},{}],138:[function(b,c,a){c.exports={getStyle:b("./ac-dom-styles/getStyle"),setStyle:b("./ac-dom-styles/setStyle")}
},{"./ac-dom-styles/getStyle":139,"./ac-dom-styles/setStyle":142}],139:[function(d,f,c){var g=d("ac-prefixer");
var b=d("./shim/getComputedStyle");f.exports=function a(){var k=Array.prototype.slice.call(arguments);
var p=k.shift(k);var m=b(p);var l={};var o;var h;var n;var j;if(typeof k[0]!=="string"){k=k[0]
}for(j=0;j<k.length;j++){o=k[j];h=g.getStyleProperty(o);if(h){o=g.stripPrefixes(h);
n=m[h];if(!n||n==="auto"){n=null}if(n){n=g.stripPrefixes(n)}}else{n=null}l[o]=n
}return l}},{"./shim/getComputedStyle":143,"ac-prefixer":135}],140:[function(d,f,c){var b={transform:["matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"],filter:["blur","brightness","contrast","drop-shadow","grayscale","hue-rotate","invert","saturate","sepia"]};
f.exports=function a(j){var l;var k;var h;var g;for(l in b){k=j[l]?j[l]:"";for(g=0;
g<b[l].length;g++){h=b[l][g];if(h in j){k+=" "+h+"("+j[h]+")";delete j[h]}}k=k.trim();
if(k){j[l]=k}}return j}},{}],141:[function(c,d,b){d.exports=function a(h){var k;
var l;var j;var f;var g;if(typeof h==="string"){k={};l=h.split(";");f=l.length;
for(g=0;g<f;g+=1){j=l[g].indexOf(":");if(j>0){k[l[g].substr(0,j).trim()]=l[g].substr(j+1).trim()
}}}else{k=h}return k}},{}],142:[function(d,f,c){var h=d("ac-prefixer");var b=d("./helpers/cssToObject");
var a=d("./helpers/combinePartialProperties");f.exports=function g(o,l){var k;var j;
var n;var i;var m;if((typeof l!=="string"&&typeof l!=="object")||Array.isArray(l)){throw new TypeError("setStyle: styles must be an Object or String")
}l=b(l);l=a(l);k="";for(n in l){m=l[n];if(!m&&m!==0){i=h.getStyleProperty(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=h.getStyleCSS(n,m);if(j!==false){k+=" "+j}}}if(k.length){o.style.cssText+=k
}return o}},{"./helpers/combinePartialProperties":140,"./helpers/cssToObject":141,"ac-prefixer":135}],143:[function(b,c,a){c.exports=(function(){if("getComputedStyle" in window){return window.getComputedStyle
}return function(g){var d;var h;var f;d=g.currentStyle;for(h in d){if(h==="styleFloat"){f["float"]=f.cssFloat=d[h]
}else{f[h]=d[h]}}return f}}())},{}],144:[function(b,c,a){c.exports=b(74)},{}],145:[function(b,c,a){c.exports=b(75)
},{}],146:[function(b,c,a){c.exports=b(76)},{}],147:[function(b,c,a){c.exports=b(77)
},{}],148:[function(b,c,a){c.exports=b(78)},{}],149:[function(b,c,a){c.exports=b(79)
},{}],150:[function(b,c,a){c.exports=b(80)},{}],151:[function(b,c,a){c.exports=b(81)
},{"./ELEMENT_NODE":148,"./internal/isNodeType":158,"ac-polyfills/Array/prototype.filter":168,"ac-polyfills/Array/prototype.slice":169}],152:[function(b,c,a){c.exports=b(82)
},{}],153:[function(b,c,a){c.exports=b(83)},{"./COMMENT_NODE":144,"./DOCUMENT_FRAGMENT_NODE":145,"./DOCUMENT_NODE":146,"./DOCUMENT_TYPE_NODE":147,"./ELEMENT_NODE":148,"./TEXT_NODE":149,"./createDocumentFragment":150,"./filterByNodeType":151,"./hasAttribute":152,"./insertAfter":154,"./insertBefore":155,"./insertFirstChild":156,"./insertLastChild":157,"./isComment":160,"./isDocument":161,"./isDocumentFragment":162,"./isDocumentType":163,"./isElement":164,"./isNode":165,"./isNodeList":166,"./isTextNode":167,"./remove":170,"./replace":171}],154:[function(b,c,a){c.exports=b(84)
},{"./internal/validate":159}],155:[function(b,c,a){c.exports=b(85)},{"./internal/validate":159}],156:[function(b,c,a){c.exports=b(86)
},{"./internal/validate":159}],157:[function(b,c,a){c.exports=b(87)},{"./internal/validate":159}],158:[function(b,c,a){c.exports=b(88)
},{"../isNode":165}],159:[function(b,c,a){c.exports=b(89)},{"../COMMENT_NODE":144,"../DOCUMENT_FRAGMENT_NODE":145,"../ELEMENT_NODE":148,"../TEXT_NODE":149,"./isNodeType":158}],160:[function(b,c,a){c.exports=b(90)
},{"./COMMENT_NODE":144,"./internal/isNodeType":158}],161:[function(b,c,a){c.exports=b(91)
},{"./DOCUMENT_NODE":146,"./internal/isNodeType":158}],162:[function(b,c,a){c.exports=b(92)
},{"./DOCUMENT_FRAGMENT_NODE":145,"./internal/isNodeType":158}],163:[function(b,c,a){c.exports=b(93)
},{"./DOCUMENT_TYPE_NODE":147,"./internal/isNodeType":158}],164:[function(b,c,a){c.exports=b(94)
},{"./ELEMENT_NODE":148,"./internal/isNodeType":158}],165:[function(b,c,a){c.exports=b(95)
},{}],166:[function(b,c,a){c.exports=b(96)},{}],167:[function(b,c,a){c.exports=b(97)
},{"./TEXT_NODE":149,"./internal/isNodeType":158}],168:[function(b,c,a){c.exports=b(98)
},{}],169:[function(b,c,a){c.exports=b(70)},{}],170:[function(b,c,a){c.exports=b(100)
},{"./internal/validate":159}],171:[function(b,c,a){c.exports=b(101)},{"./internal/validate":159}],172:[function(b,c,a){arguments[4][102][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":173,"./ac-dom-traversal/ancestors":174,"./ac-dom-traversal/children":175,"./ac-dom-traversal/filterBySelector":176,"./ac-dom-traversal/firstChild":177,"./ac-dom-traversal/lastChild":180,"./ac-dom-traversal/matchesSelector":181,"./ac-dom-traversal/nextSibling":182,"./ac-dom-traversal/nextSiblings":183,"./ac-dom-traversal/previousSibling":184,"./ac-dom-traversal/previousSiblings":185,"./ac-dom-traversal/querySelector":186,"./ac-dom-traversal/querySelectorAll":187,"./ac-dom-traversal/shims/ie":188,"./ac-dom-traversal/siblings":189}],173:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&a.isElement(k)&&(!j||b(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!j||b(k,j)){return k
}if(k===document.body){break}}}return null}},{"./helpers/validate":179,"./matchesSelector":181,"ac-dom-nodes":153}],174:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&a.isElement(l)&&(!j||b(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&a.isElement(l)){if(!j||b(l,j)){k.push(l)
}if(l===document.body){break}}}return k}},{"./helpers/validate":179,"./matchesSelector":181,"ac-dom-nodes":153}],175:[function(b,c,a){c.exports=b(105)
},{"./filterBySelector":176,"./helpers/validate":179,"ac-dom-nodes":153}],176:[function(b,c,a){c.exports=b(106)
},{"./helpers/validate":179,"./matchesSelector":181}],177:[function(b,c,a){c.exports=b(107)
},{"./children":175,"./helpers/validate":179}],178:[function(b,c,a){c.exports=b(108)
},{}],179:[function(b,c,a){c.exports=b(109)},{"ac-dom-nodes":153}],180:[function(b,c,a){c.exports=b(110)
},{"./children":175,"./helpers/validate":179}],181:[function(b,c,a){c.exports=b(111)
},{"./helpers/nativeMatches":178,"./helpers/validate":179,"ac-dom-nodes":153}],182:[function(b,c,a){c.exports=b(112)
},{"./helpers/validate":179,"./matchesSelector":181,"ac-dom-nodes":153}],183:[function(b,c,a){c.exports=b(113)
},{"./helpers/validate":179,"./matchesSelector":181,"ac-dom-nodes":153}],184:[function(b,c,a){c.exports=b(114)
},{"./helpers/validate":179,"./matchesSelector":181,"ac-dom-nodes":153}],185:[function(b,c,a){c.exports=b(115)
},{"./helpers/validate":179,"./matchesSelector":181,"ac-dom-nodes":153}],186:[function(b,c,a){c.exports=b(116)
},{"./helpers/validate":179}],187:[function(b,c,a){c.exports=b(117)},{"./helpers/validate":179}],188:[function(b,c,a){c.exports=b(118)
},{"../helpers/nativeMatches":178,"../helpers/validate":179,"../vendor/sizzle/sizzle":190,"ac-dom-nodes":153}],189:[function(b,c,a){c.exports=b(119)
},{"./children":175,"./helpers/validate":179}],190:[function(b,c,a){c.exports=b(120)
},{}],191:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":192}],192:[function(b,c,a){var g;var f=b("ac-event-emitter").EventEmitter;
var d="dom-emitter";function h(i){if(i===null){return}this.el=i;this._bindings={};
this._eventEmitter=new f()}g=h.prototype;g._parseEventNames=function(i){if(!i){return[i]
}return i.split(" ")};g._onListenerEvent=function(j,i){this.trigger(j,i,false)};
g._setListener=function(i){this._bindings[i]=this._onListenerEvent.bind(this,i);
this._addEventListener(i,this._bindings[i])};g._removeListener=function(i){this._removeEventListener(i,this._bindings[i]);
delete this._bindings[i]};g._addEventListener=function(j,k,i){if(this.el.addEventListener){this.el.addEventListener(j,k,i)
}else{if(this.el.attachEvent){this.el.attachEvent("on"+j,k)}else{target["on"+j]=k
}}return this};g._removeEventListener=function(j,k,i){if(this.el.removeEventListener){this.el.removeEventListener(j,k,i)
}else{this.el.detachEvent("on"+j,k)}return this};g._triggerInternalEvent=function(i,j){this.trigger(d+":"+i,j)
};g.on=function(i,k,j){i=this._parseEventNames(i);i.forEach(function(n,m,l){if(!this.has(l)){this._setListener(l)
}this._triggerInternalEvent("willon",{evt:l,callback:n,context:m});this._eventEmitter.on(l,n,m);
this._triggerInternalEvent("didon",{evt:l,callback:n,context:m})}.bind(this,k,j));
return this};g.off=function(i,l,k){var j=Array.prototype.slice.call(arguments,0);
i=this._parseEventNames(i);i.forEach(function(q,p,n,m){if(n.length===0){this._eventEmitter.off();
var o;for(o in this._bindings){if(this._bindings.hasOwnProperty(o)){this._removeListener(o)
}}return}this._triggerInternalEvent("willoff",{evt:m,callback:q,context:p});this._eventEmitter.off(m,q,p);
this._triggerInternalEvent("didoff",{evt:m,callback:q,context:p});if(!this.has(m)){this._removeListener(m)
}}.bind(this,l,k,j));return this};g.once=function(i,k,j){i=this._parseEventNames(i);
i.forEach(function(n,m,l){if(!this.has(l)){this._setListener(l)}this._triggerInternalEvent("willonce",{evt:l,callback:n,context:m});
this._eventEmitter.once.call(this,l,n,m);this._triggerInternalEvent("didonce",{evt:l,callback:n,context:m})
}.bind(this,k,j));return this};g.has=function(i,k,j){if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};g.trigger=function(i,j,k){i=this._parseEventNames(i);i.forEach(function(m,n,l){this._eventEmitter.trigger(l,m,n)
}.bind(this,j,k));return this};g.destroy=function(){this._triggerInternalEvent("willdestroy");
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{"ac-event-emitter":284}],193:[function(c,d,b){var a=c("./ac-dom-styles/vendorTransformHelper");
var f={};f.setStyle=function(h,i){var g;var j;var k;if((typeof i!=="string"&&typeof i!=="object")||Array.isArray(i)){throw new TypeError("styles argument must be either an object or a string")
}g=f.setStyle.__explodeStyleStringToObject(i);for(k in g){if(g.hasOwnProperty(k)){j=k.replace(/-(\w)/g,f.setStyle.__camelCaseReplace);
f.setStyle.__setStyle(h,j,g,g[k])}}return h};f.setStyle.__explodeStyleStringToObject=function(l){var j=(typeof l==="object")?l:{};
var m;var k;var g;var h;if(typeof l==="string"){m=l.split(";");g=m.length;for(h=0;
h<g;h+=1){k=m[h].indexOf(":");if(k>0){j[m[h].substr(0,k).trim()]=m[h].substr(k+1).trim()
}}}return j};f.setStyle.__setStyle=function(i,j,h,g){if(typeof i.style[j]!=="undefined"){i.style[j]=g
}};f.setStyle.__camelCaseReplace=function(h,i,j,g){return(j===0)&&(g.substr(1,3)!=="moz")?i:i.toUpperCase()
};f.getStyle=function(h,j,g){var i;j=j.replace(/-(\w)/g,f.setStyle.__camelCaseReplace);
j=(j==="float")?"cssFloat":j;g=g||window.getComputedStyle(h,null);i=g?g[j]:null;
if(j==="opacity"){return i?parseFloat(i):1}return i==="auto"?null:i};f.setVendorPrefixStyle=function(g,j,i){if(typeof j!=="string"){throw new TypeError("ac-dom-styles.setVendorPrefixStyle: property must be a string")
}if(typeof i!=="string"&&typeof i!=="number"){throw new TypeError("ac-dom-styles.setVendorPrefixStyle: value must be a string or a number")
}var h=["","webkit","Moz","ms","O"];var l;var k;i+="";j=j.replace(/-(webkit|moz|ms|o)-/i,"");
j=j.replace(/^(webkit|Moz|ms|O)/,"");j=j.charAt(0).toLowerCase()+j.slice(1);j=j.replace(/-(\w)/,function(m,n){return n.toUpperCase()
});i=i.replace(/-(webkit|moz|ms|o)-/,"-vendor-");h.forEach(function(m){l=(m==="")?j:m+j.charAt(0).toUpperCase()+j.slice(1);
k=(m==="")?i.replace("-vendor-",""):i.replace("-vendor-","-"+m.charAt(0).toLowerCase()+m.slice(1)+"-");
if(l in g.style){f.setStyle(g,l+":"+k)}})};f.getVendorPrefixStyle=function(h,j){if(typeof j!=="string"){throw new TypeError("ac-dom-styles.getVendorPrefixStyle: property must be a string")
}var i=["","webkit","Moz","ms","O"];var g;j=j.replace(/-(webkit|moz|ms|o)-/i,"");
j=j.replace(/^(webkit|Moz|ms|O)/,"").charAt(0).toLowerCase()+j.slice(1);j=j.replace(/-(\w)/,function(k,l){return l.toUpperCase()
});i.some(function(l,k){var m=(l==="")?j:l+j.charAt(0).toUpperCase()+j.slice(1);
if(m in h.style){g=f.getStyle(h,m);return true}});return g};f.setVendorPrefixTransform=function(g,h){if((typeof h!=="string"&&typeof h!=="object")||Array.isArray(h)||h===null){throw new TypeError("ac-dom-styles.setVendorPrefixTransform: transformFunctions argument must be either an object or a string")
}f.setVendorPrefixStyle(g,"transform",a.convert2dFunctions(h))};c("./ac-dom-styles/ie")(f);
d.exports=f},{"./ac-dom-styles/ie":194,"./ac-dom-styles/vendorTransformHelper":195}],194:[function(b,c,a){c.exports=function(d){if(typeof window.getComputedStyle!=="function"){d.getStyle=function(i,h,g){var f;
var j;g=g||i.currentStyle;if(g){h=h.replace(/-(\w)/g,d.setStyle.__camelCaseReplace);
h=h==="float"?"styleFloat":h;j=g[h]||null;return j==="auto"?null:j}}}}},{}],195:[function(c,d,b){var a={__objectifiedFunctions:{},__paramMaps:{translate:"p1, p2, 0",translateX:"p1, 0, 0",translateY:"0, p1, 0",scale:"p1, p2, 1",scaleX:"p1, 1, 1",scaleY:"1, p1, 1",rotate:"0, 0, 1, p1",matrix:"p1, p2, 0, 0, p3, p4, 0, 0, 0, 0, 1, 0, p5, p6, 0, 1"},convert2dFunctions:function(g){var f;
this.__init(g);for(var h in this.__objectifiedFunctions){if(this.__objectifiedFunctions.hasOwnProperty(h)){f=this.__objectifiedFunctions[h].replace(" ","").split(",");
if(h in this.__paramMaps){for(var i in this.__paramMaps){if(h===i){this.valuesToSet.push(this.__stripFunctionAxis(h)+"3d("+this.__map2DTransformParams(f,this.__paramMaps[h])+")")
}}}else{this.valuesToSet.push(h+"("+this.__objectifiedFunctions[h]+")")}}}return this.valuesToSet.join(" ")
},__init:function(f){this.valuesToSet=[];this.__objectifiedFunctions=(typeof f==="object")?f:{};
if(typeof f==="string"){this.__objectifiedFunctions=this.__objectifyFunctionString(f)
}},__map2DTransformParams:function(f,g){f.forEach(function(j,h){g=g.replace("p"+(h+1),j)
});return g},__splitFunctionStringToArray:function(f){return f.match(/[\w]+\(.+?\)/g)
},__splitFunctionNameAndParams:function(f){return f.match(/(.*)\((.*)\)/)},__stripFunctionAxis:function(f){return f.match(/([a-z]+)(|X|Y)$/)[1]
},__objectifyFunctionString:function(f){var g=this;var h;this.__splitFunctionStringToArray(f).forEach(function(i){h=g.__splitFunctionNameAndParams(i);
g.__objectifiedFunctions[h[1]]=h[2]});return this.__objectifiedFunctions}};d.exports=a
},{}],196:[function(b,c,a){var g=b("ac-dom-styles");var h={};var f=function(){return{x:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}
};var d=function(){return{height:window.innerHeight||document.documentElement.clientHeight,width:window.innerWidth||document.documentElement.clientWidth}
};h.cumulativeOffset=function(j){var k=h.getBoundingBox(j);var i=f();var l=[k.top+i.y,k.left+i.x];
l.top=l[0];l.left=l[1];return l};h.getBoundingBox=function(k){var l=k.getBoundingClientRect();
var j=l.width||l.right-l.left;var i=l.height||l.bottom-l.top;return{top:l.top,right:l.right,bottom:l.bottom,left:l.left,width:j,height:i}
};h.getInnerDimensions=function(n){var o=h.getBoundingBox(n);var m=o.width;var i=o.height;
var l;var j;var k=window.getComputedStyle?window.getComputedStyle(n,null):null;
["padding","border"].forEach(function(p){["Top","Right","Bottom","Left"].forEach(function(q){l=p==="border"?p+q+"Width":p+q;
j=parseFloat(g.getStyle(n,l,k));j=isNaN(j)?0:j;if(q==="Right"||q==="Left"){m-=j
}if(q==="Top"||q==="Bottom"){i-=j}})});return{width:m,height:i}};h.getOuterDimensions=function(l){var n=h.getBoundingBox(l);
var k=n.width;var i=n.height;var m;var j=window.getComputedStyle?window.getComputedStyle(l,null):null;
["margin"].forEach(function(o){["Top","Right","Bottom","Left"].forEach(function(p){m=parseFloat(g.getStyle(l,o+p,j));
m=isNaN(m)?0:m;if(p==="Right"||p==="Left"){k+=m}if(p==="Top"||p==="Bottom"){i+=m
}})});return{width:k,height:i}};h.pixelsInViewport=function(k,j){var l;var m=d();
j=j||h.getBoundingBox(k);var i=j.top;if(i>=0){l=m.height-i;if(l>j.height){l=j.height
}}else{l=j.height+i}if(l<0){l=0}if(l>m.height){l=m.height}return l};h.percentInViewport=function(j){var i=h.getBoundingBox(j);
var k=h.pixelsInViewport(j,i);return k/i.height};h.isInViewport=function(k,j){var i=h.percentInViewport(k);
if(typeof j!=="number"||1<j||j<0){j=0}return(i>j||i===1)};b("./ac-dom-metrics/ie")(h);
c.exports=h},{"./ac-dom-metrics/ie":197,"ac-dom-styles":193}],197:[function(b,c,a){c.exports=function(d){if(!("getBoundingClientRect" in document.createElement("_"))){d.getBoundingBox=function(h){var j=h.offsetLeft;
var i=h.offsetTop;var g=h.offsetWidth;var f=h.offsetHeight;return{top:i,right:j+g,bottom:i+f,left:j,width:g,height:f}
}}}},{}],198:[function(b,c,a){c.exports=b(74)},{}],199:[function(b,c,a){c.exports=b(75)
},{}],200:[function(b,c,a){c.exports=b(76)},{}],201:[function(b,c,a){c.exports=b(77)
},{}],202:[function(b,c,a){c.exports=b(78)},{}],203:[function(b,c,a){c.exports=b(79)
},{}],204:[function(b,c,a){c.exports=b(80)},{}],205:[function(b,c,a){c.exports=b(81)
},{"./ELEMENT_NODE":202,"./internal/isNodeType":212,"ac-polyfills/Array/prototype.filter":222,"ac-polyfills/Array/prototype.slice":223}],206:[function(b,c,a){c.exports=b(82)
},{}],207:[function(b,c,a){c.exports=b(83)},{"./COMMENT_NODE":198,"./DOCUMENT_FRAGMENT_NODE":199,"./DOCUMENT_NODE":200,"./DOCUMENT_TYPE_NODE":201,"./ELEMENT_NODE":202,"./TEXT_NODE":203,"./createDocumentFragment":204,"./filterByNodeType":205,"./hasAttribute":206,"./insertAfter":208,"./insertBefore":209,"./insertFirstChild":210,"./insertLastChild":211,"./isComment":214,"./isDocument":215,"./isDocumentFragment":216,"./isDocumentType":217,"./isElement":218,"./isNode":219,"./isNodeList":220,"./isTextNode":221,"./remove":224,"./replace":225}],208:[function(b,c,a){c.exports=b(84)
},{"./internal/validate":213}],209:[function(b,c,a){c.exports=b(85)},{"./internal/validate":213}],210:[function(b,c,a){c.exports=b(86)
},{"./internal/validate":213}],211:[function(b,c,a){c.exports=b(87)},{"./internal/validate":213}],212:[function(b,c,a){c.exports=b(88)
},{"../isNode":219}],213:[function(b,c,a){c.exports=b(89)},{"../COMMENT_NODE":198,"../DOCUMENT_FRAGMENT_NODE":199,"../ELEMENT_NODE":202,"../TEXT_NODE":203,"./isNodeType":212}],214:[function(b,c,a){c.exports=b(90)
},{"./COMMENT_NODE":198,"./internal/isNodeType":212}],215:[function(b,c,a){c.exports=b(91)
},{"./DOCUMENT_NODE":200,"./internal/isNodeType":212}],216:[function(b,c,a){c.exports=b(92)
},{"./DOCUMENT_FRAGMENT_NODE":199,"./internal/isNodeType":212}],217:[function(b,c,a){c.exports=b(93)
},{"./DOCUMENT_TYPE_NODE":201,"./internal/isNodeType":212}],218:[function(b,c,a){c.exports=b(94)
},{"./ELEMENT_NODE":202,"./internal/isNodeType":212}],219:[function(b,c,a){c.exports=b(95)
},{}],220:[function(b,c,a){c.exports=b(96)},{}],221:[function(b,c,a){c.exports=b(97)
},{"./TEXT_NODE":203,"./internal/isNodeType":212}],222:[function(b,c,a){c.exports=b(98)
},{}],223:[function(b,c,a){c.exports=b(70)},{}],224:[function(b,c,a){c.exports=b(100)
},{"./internal/validate":213}],225:[function(b,c,a){c.exports=b(101)},{"./internal/validate":213}],226:[function(b,d,a){var c={};
c.addEventListener=function(j,h,i,g){if(j.addEventListener){j.addEventListener(h,i,g)
}else{if(j.attachEvent){j.attachEvent("on"+h,i)}else{j["on"+h]=i}}return j};c.dispatchEvent=function(h,g){if(document.createEvent){h.dispatchEvent(new CustomEvent(g))
}else{h.fireEvent("on"+g,document.createEventObject())}return h};c.removeEventListener=function(j,h,i,g){if(j.removeEventListener){j.removeEventListener(h,i,g)
}else{j.detachEvent("on"+h,i)}return j};var f=/^(webkit|moz|ms|o)/i;c.addVendorPrefixEventListener=function(j,h,i,g){if(f.test(h)){h=h.replace(f,"")
}else{h=h.charAt(0).toUpperCase()+h.slice(1)}if(/WebKit/i.test(window.navigator.userAgent)){return c.addEventListener(j,"webkit"+h,i,g)
}else{if(/Opera/i.test(window.navigator.userAgent)){return c.addEventListener(j,"O"+h,i,g)
}else{if(/Gecko/i.test(window.navigator.userAgent)){return c.addEventListener(j,h.toLowerCase(),i,g)
}else{h=h.charAt(0).toLowerCase()+h.slice(1);return c.addEventListener(j,h,i,g)
}}}};c.removeVendorPrefixEventListener=function(j,h,i,g){if(f.test(h)){h=h.replace(f,"")
}else{h=h.charAt(0).toUpperCase()+h.slice(1)}c.removeEventListener(j,"webkit"+h,i,g);
c.removeEventListener(j,"O"+h,i,g);c.removeEventListener(j,h.toLowerCase(),i,g);
h=h.charAt(0).toLowerCase()+h.slice(1);return c.removeEventListener(j,h,i,g)};c.stop=function(g){if(!g){g=window.event
}if(g.stopPropagation){g.stopPropagation()}else{g.cancelBubble=true}if(g.preventDefault){g.preventDefault()
}g.stopped=true;g.returnValue=false};c.target=function(g){return(typeof g.target!=="undefined")?g.target:g.srcElement
};d.exports=c},{}],227:[function(b,c,a){c.exports=b(102)},{"./ac-dom-traversal/ancestor":228,"./ac-dom-traversal/ancestors":229,"./ac-dom-traversal/children":230,"./ac-dom-traversal/filterBySelector":231,"./ac-dom-traversal/firstChild":232,"./ac-dom-traversal/lastChild":235,"./ac-dom-traversal/matchesSelector":236,"./ac-dom-traversal/nextSibling":237,"./ac-dom-traversal/nextSiblings":238,"./ac-dom-traversal/previousSibling":239,"./ac-dom-traversal/previousSiblings":240,"./ac-dom-traversal/querySelector":241,"./ac-dom-traversal/querySelectorAll":242,"./ac-dom-traversal/shims/ie":243,"./ac-dom-traversal/siblings":244}],228:[function(b,c,a){c.exports=b(103)
},{"./helpers/validate":234,"./matchesSelector":236,"ac-dom-nodes":207}],229:[function(b,c,a){c.exports=b(104)
},{"./helpers/validate":234,"./matchesSelector":236,"ac-dom-nodes":207}],230:[function(b,c,a){c.exports=b(105)
},{"./filterBySelector":231,"./helpers/validate":234,"ac-dom-nodes":207}],231:[function(b,c,a){c.exports=b(106)
},{"./helpers/validate":234,"./matchesSelector":236}],232:[function(b,c,a){c.exports=b(107)
},{"./children":230,"./helpers/validate":234}],233:[function(b,c,a){c.exports=b(108)
},{}],234:[function(b,c,a){c.exports=b(109)},{"ac-dom-nodes":207}],235:[function(b,c,a){c.exports=b(110)
},{"./children":230,"./helpers/validate":234}],236:[function(b,c,a){c.exports=b(111)
},{"./helpers/nativeMatches":233,"./helpers/validate":234,"ac-dom-nodes":207}],237:[function(b,c,a){c.exports=b(112)
},{"./helpers/validate":234,"./matchesSelector":236,"ac-dom-nodes":207}],238:[function(b,c,a){c.exports=b(113)
},{"./helpers/validate":234,"./matchesSelector":236,"ac-dom-nodes":207}],239:[function(b,c,a){c.exports=b(114)
},{"./helpers/validate":234,"./matchesSelector":236,"ac-dom-nodes":207}],240:[function(b,c,a){c.exports=b(115)
},{"./helpers/validate":234,"./matchesSelector":236,"ac-dom-nodes":207}],241:[function(b,c,a){c.exports=b(116)
},{"./helpers/validate":234}],242:[function(b,c,a){c.exports=b(117)},{"./helpers/validate":234}],243:[function(b,c,a){c.exports=b(118)
},{"../helpers/nativeMatches":233,"../helpers/validate":234,"../vendor/sizzle/sizzle":245,"ac-dom-nodes":207}],244:[function(b,c,a){c.exports=b(119)
},{"./children":230,"./helpers/validate":234}],245:[function(b,c,a){c.exports=b(120)
},{}],246:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":247}],247:[function(c,b,d){var f;var j=c("ac-event-emitter").EventEmitter,g=c("ac-dom-events"),a=c("ac-dom-traversal");
var i="dom-emitter";function h(k){if(k===null){return}this.el=k;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new j()}f=h.prototype;f._parseEventNames=function(k){if(!k){return[k]
}return k.split(" ")};f._onListenerEvent=function(l,k){this.trigger(l,k,false)};
f._setListener=function(k){this._bindings[k]=this._onListenerEvent.bind(this,k);
g.addEventListener(this.el,k,this._bindings[k])};f._removeListener=function(k){g.removeEventListener(this.el,k,this._bindings[k]);
this._bindings[k]=null};f._triggerInternalEvent=function(k,l){this.trigger(i+":"+k,l)
};f._normalizeArgumentsAndCall=function(k,m){var q={};if(k.length===0){m.call(this,q);
return}if(typeof k[0]==="string"||k[0]===null){k=this._cleanStringData(k);q.events=k[0];
if(typeof k[1]==="string"){q.delegateQuery=k[1];q.callback=k[2];q.context=k[3]}else{q.callback=k[1];
q.context=k[2]}m.call(this,q);return}var l,o,p=":",n=k[0];for(l in n){if(n.hasOwnProperty(l)){q={};
o=this._cleanStringData(l.split(p));q.events=o[0];q.delegateQuery=o[1];q.callback=n[l];
q.context=k[1];m.call(this,q)}}};f._registerDelegateFunc=function(m,o,p,k,n){var l=this._delegateFunc.bind(this,m,o,p,n);
this._delegateFuncs[o]=this._delegateFuncs[o]||{};this._delegateFuncs[o][m]=this._delegateFuncs[o][m]||[];
this._delegateFuncs[o][m].push({func:k,context:n,delegateFunc:l});return l};f._cleanStringData=function(n){var m=false;
if(typeof n==="string"){n=[n];m=true}var l=[],p,r,q,o,k=n.length;for(p=0;p<k;p++){r=n[p];
if(typeof r==="string"){if(r===""||r===" "){continue}q=r.length;while(r[0]===" "){r=r.slice(1,q);
q--}while(r[q-1]===" "){r=r.slice(0,q-1);q--}}l.push(r)}if(m){return l[0]}return l
};f._unregisterDelegateFunc=function(m,p,k,o){if(!this._delegateFuncs[p]||!this._delegateFuncs[p][m]){return
}var n=this._getDelegateFuncBindingIdx(m,p,k,o),l;if(n>-1){l=this._delegateFuncs[p][m][n].delegateFunc;
this._delegateFuncs[p][m].splice(n,1);if(this._delegateFuncs[p][m].length===0){this._delegateFuncs[p][m]=null
}}return l};f._unregisterDelegateFuncs=function(k,m){if(!this._delegateFuncs[m]){return
}if(k!==null&&!this._delegateFuncs[m][k]){return}if(k===null){var l;for(l in this._delegateFuncs[m]){if(this._delegateFuncs[m].hasOwnProperty(l)){this._unbindDelegateFunc(l,m)
}}return}this._unbindDelegateFunc(k,m)};f._unbindDelegateFunc=function(k,m){var n,o,l=0;
while(this._delegateFuncs[m][k]&&this._delegateFuncs[m][k][l]){n=this._delegateFuncs[m][k][l];
o=this._delegateFuncs[m][k][l].length;this._off({events:k,delegateQuery:m,callback:n.func,context:n.context});
if(this._delegateFuncs[m][k]&&o===this._delegateFuncs[m][k].length){l++}}n=o=null
};f._unregisterDelegateFuncsByEvent=function(k){var l;for(l in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(l)){this._unregisterDelegateFuncs(k,l)
}}};f._delegateFunc=function(k,o,q,m,p){if(a.matchesSelector(g.target(p),o)){var l=Array.prototype.slice.call(arguments,0),n=l.slice(4,l.length);
m=m||window;if(typeof p.detail==="object"){n[0]=p.detail}q.call(m,n)}};f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f._on=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context,k=o.unboundCallback||p;
l=this._parseEventNames(l);l.forEach(function(u,q,s,t,r){if(!this.has(r)){this._setListener(r)
}if(typeof t==="string"){u=this._registerDelegateFunc(r,t,u,q,s)}this._triggerInternalEvent("willon",{evt:r,callback:u,context:s,delegateQuery:t});
this._eventEmitter.on(r,u,s);this._triggerInternalEvent("didon",{evt:r,callback:u,context:s,delegateQuery:t})
}.bind(this,p,k,m,n));l=p=k=n=m=null};f._off=function(p){var l=p.events,q=p.callback,o=p.delegateQuery,n=p.context,k=p.unboundCallback||q;
if(typeof l==="undefined"){this._eventEmitter.off();var m;for(m in this._bindings){if(this._bindings.hasOwnProperty(m)){this._removeListener(m)
}}for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._delegateFuncs[m]=null
}}return}l=this._parseEventNames(l);l.forEach(function(v,r,t,u,s){if(typeof u==="string"&&typeof r==="function"){v=this._unregisterDelegateFunc(s,u,r,t);
if(!v){return}}if(typeof u==="string"&&typeof v==="undefined"){this._unregisterDelegateFuncs(s,u);
return}if(typeof s==="string"&&typeof v==="undefined"){this._unregisterDelegateFuncsByEvent(s);
if(typeof u==="string"){return}}this._triggerInternalEvent("willoff",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.off(s,v,t);this._triggerInternalEvent("didoff",{evt:s,callback:v,context:t,delegateQuery:u});
if(!this.has(s)){this._removeListener(s)}}.bind(this,q,k,n,o));l=q=k=o=n=null};
f._once=function(n){var k=n.events,o=n.callback,m=n.delegateQuery,l=n.context;k=this._parseEventNames(k);
k.forEach(function(s,q,r,p){if(typeof r==="string"){return this._handleDelegateOnce(p,s,q,r)
}if(!this.has(p)){this._setListener(p)}this._triggerInternalEvent("willonce",{evt:p,callback:s,context:q,delegateQuery:r});
this._eventEmitter.once.call(this,p,s,q);this._triggerInternalEvent("didonce",{evt:p,callback:s,context:q,delegateQuery:r})
}.bind(this,o,l,m));k=o=m=l=null};f._handleDelegateOnce=function(k,n,l,m){this._triggerInternalEvent("willonce",{evt:k,callback:n,context:l,delegateQuery:m});
this._on({events:k,context:l,delegateQuery:m,callback:this._getDelegateOnceCallback.bind(this,k,n,l,m),unboundCallback:n});
this._triggerInternalEvent("didonce",{evt:k,callback:n,context:l,delegateQuery:m});
return this};f._getDelegateOnceCallback=function(k,p,m,o){var l=Array.prototype.slice.call(arguments,0),n=l.slice(4,l.length);
p.apply(m,n);this._off({events:k,delegateQuery:o,callback:p,context:m})};f._getDelegateFuncBindingIdx=function(r,o,m,k,s){var q=-1;
if(this._delegateFuncs[o]&&this._delegateFuncs[o][r]){var n,l,p=this._delegateFuncs[o][r].length;
for(n=0;n<p;n++){l=this._delegateFuncs[o][r][n];if(s&&typeof m==="undefined"){m=l.func
}if(l.func===m&&l.context===k){q=n;break}}}return q};f._triggerDelegateEvents=function(n,p,q){var m=a.querySelectorAll(p,this.el);
var o,r,k=m.length;for(o=0;o<k;o++){r=m[o];if(document.createEvent){r.dispatchEvent(new CustomEvent(n,{bubbles:true,cancelable:false,detail:q}))
}else{var l=document.createEventObject();l.detail=q;r.fireEvent("on"+n,l)}return r
}};f.has=function(k,p,o,m){var n,q;if(typeof p==="string"){n=p;q=o}else{q=p;m=o
}if(n){var l=this._getDelegateFuncBindingIdx(k,n,q,m,true);if(l>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(l,k,m,p){l=this._parseEventNames(l);var n,o;if(typeof k==="string"){n=this._cleanStringData(k);
o=m}else{o=k;p=m}l=this._cleanStringData(l);l.forEach(function(r,s,t,q){if(r){this._triggerDelegateEvents(q,r,s);
return}this._eventEmitter.trigger(q,s,t)}.bind(this,n,o,p));return this};f.propagateTo=function(k,l){this._eventEmitter.propagateTo(k,l);
return this};f.stopPropagatingTo=function(k){this._eventEmitter.stopPropagatingTo(k);
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
this.el=this._eventEmitter=this._bindings=this._delegateFuncs=null};b.exports=h
},{"ac-dom-events":226,"ac-dom-traversal":227,"ac-event-emitter":284}],248:[function(b,c,a){c.exports=b(54)
},{"./ac-shared-instance/SharedInstance":249}],249:[function(b,c,a){c.exports=b(55)
},{}],250:[function(b,c,a){c.exports={WindowDelegate:b("./ac-window-delegate/WindowDelegate"),WindowDelegateOptimizer:b("./ac-window-delegate/WindowDelegateOptimizer"),WindowDelegateCustomEvent:b("./ac-window-delegate/WindowDelegateCustomEvent")}
},{"./ac-window-delegate/WindowDelegate":253,"./ac-window-delegate/WindowDelegateCustomEvent":254,"./ac-window-delegate/WindowDelegateOptimizer":255}],251:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
var g=function(){this._emitter=new f();this._customEvents={}};var d=g.prototype;
d.on=function(h,j,i){this._activateCustomEvents(h);this._emitterOn.apply(this,arguments);
return this};d.once=function(h,j,i){this._emitterOnce.apply(this,arguments);return this
};d.off=function(h,j,i){this._emitterOff.apply(this,arguments);this._deactivateCustomEvents(h);
return this};d.has=function(h,j,i){return this._emitter.has.apply(this._emitter,arguments)
};d.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};d.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};d.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};d.add=function(h){this._customEvents[h.name]=h};d.canHandleCustomEvent=function(h){return this._customEvents.hasOwnProperty(h)
};d.isHandlingCustomEvent=function(h){if(this._customEvents[h]&&this._customEvents[h].active){return true
}return false};d._activateCustomEvents=function(l){var j=l.split(" "),k,m,h=j.length;
for(m=0;m<h;m++){k=j[m];if(this._customEvents[k]&&!this._customEvents[k].active){this._customEvents[k].initialize();
this._customEvents[k].active=true}}};d._deactivateCustomEvents=function(k){var l;
if(!k||k.length===0){for(l in this._customEvents){if(this._customEvents.hasOwnProperty(l)){this._deactivateCustomEvent(l)
}}return}var j=k.split(" "),h=j.length;for(l=0;l<h;l++){this._deactivateCustomEvent(j[l])
}};d._deactivateCustomEvent=function(h){if(!this.has(h)&&this._customEvents[h]&&this._customEvents[h].active){this._customEvents[h].deinitialize();
this._customEvents[h].active=false}};d._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)
};d._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)};
d._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};c.exports=g
},{"ac-event-emitter":284}],252:[function(b,c,a){var g=b("ac-event-emitter").EventEmitter;
var f;var d=function(h){g.call(this);this.optimizers=h;this._events={};this._properties={};
this._initialize()};f=d.prototype=new g(null);f.canOptimizeEvent=function(h){return this._events.hasOwnProperty(h)
};f.canOptimizeProperty=function(h){return this._properties.hasOwnProperty(h)};
f.isOptimizingEvent=function(h){if(this._events[h]&&this._events[h].active){return true
}return false};f.isOptimizingProperty=function(h){if(this._properties[h]&&this._properties[h].active){return true
}return false};f.add=function(h){this._setOptimizerEvents(h);this._setOptimizerProperties(h);
h.on("update",this._onUpdate,this);h.on("activate",this._onActivate,this);h.on("deactivate",this._onDeactivate,this)
};f.get=function(h){if(this.isOptimizingProperty(h)){return this._properties[h].value
}return null};f.set=function(i,h){if(!this._properties[i]){return false}this._properties[i].value=h;
return this};f.getOptimizerByEvent=function(h){if(this._events[h]){return this._events[h]
}return null};f._initialize=function(){var j,h;for(j in this.optimizers){if(this.optimizers.hasOwnProperty(j)){this.add(this.optimizers[j])
}}};f._onUpdate=function(h){this.set(h.prop,h.val)};f._onActivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=true}};f._onDeactivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=false}};f._setOptimizerEvents=function(j){var l,k=j.eventNames,h=k.length;
for(l=0;l<h;l++){this._setOptimizerEvent(k[l],j)}};f._setOptimizerEvent=function(i,h){if(this._events[i]){return
}this._events[i]=h};f._setOptimizerProperties=function(k){var l,j=k.propertyNames,h=j.length;
for(l=0;l<h;l++){this._setOptimizerProperty(j[l])}};f._setOptimizerProperty=function(h){if(this._properties.hasOwnProperty(h)){return
}this._properties[h]={};this._properties[h].active=false;this._properties[h].value=null
};c.exports=d},{"ac-event-emitter":284}],253:[function(d,b,g){var i;var c=d("ac-shared-instance").SharedInstance,l=d("ac-dom-emitter").DOMEmitter,j=d("./OptimizerController"),f=d("./CustomEventController"),h=d("./queries/queries"),m=d("./optimizers/optimizers");
var k="ac-window-delegate:WindowDelegate",a="2.0.1";function n(){this._emitter=new l(window);
this._controllers={optimizer:new j(m),customEvent:new f()};var o;for(o in h){if(h.hasOwnProperty(o)){this[o]=this._getProperty.bind(this,o);
h[o]=h[o].bind(this)}}this._bindEvents()}i=n.prototype;i.on=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOn(q.customEvents,r,p);
this._emitterOn.apply(this,arguments);return this};i.once=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOnce(q.customEvents,r,p);
this._emitterOnce.apply(this,arguments);return this};i.off=function(p,u,q){var t=this._seperateCustomEvents(p),r=false;
if(!p){r=true}this._customEventOff(t.customEvents,u,q,r);this._emitterOff.apply(this,arguments);
if(r){try{var o;for(o in this._controllers.optimizer._events){if(this._controllers.optimizer._events.hasOwnProperty(o)&&this._shouldDeoptimizeEvent(o,true)){this._deoptimizeEvent(o)
}}this._bindEvents()}catch(s){}}return this};i.has=function(o,q,p){return this._emitter.has.apply(this._emitter,arguments)
};i.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};i.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};i.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};i.addOptimizer=function(o){this._controllers.optimizer.add(o);return this
};i.addCustomEvent=function(o){this._controllers.customEvent.add(o);return this
};i._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)};i._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)
};i._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};i._onEventUnbound=function(p){var o=p.evt;
if(this._shouldDeoptimizeEvent(o)){this._deoptimizeEvent(o)}};i._customEventOn=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.on(o.join(" "),q,p)};i._customEventOnce=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.once(o.join(" "),q,p)};i._customEventOff=function(o,r,p,q){if(!q&&o.length===0){return
}if(q&&o.length===0){this._controllers.customEvent.off();return}this._controllers.customEvent.off(o.join(" "),r,p)
};i._getProperty=function(q,o){var p=null;if(!o){p=this._getOptimizedValue(q)}if(p===null){p=h[q].call(this,o)
}return p};i._optimizeEvents=function(q){var p,r,o=q.length;for(r=0;r<o;r++){p=q[r];
if(this._shouldOptimizeEvent(p)){this._optimizeEvent(p)}}};i._shouldOptimizeEvent=function(o){if(this._controllers.optimizer.canOptimizeEvent(o)&&!this._controllers.optimizer.isOptimizingEvent(o)){return true
}return false};i._shouldDeoptimizeEvent=function(o,p){if(this._controllers.optimizer.isOptimizingEvent(o)&&(p||this._emitter._eventEmitter._events[o].length<=1)){return true
}return false};i._optimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.activate();this._emitterOn(p,o.callback,o)};i._deoptimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.deactivate();this._emitterOff(p,o.callback,o)};i._getOptimizedValue=function(o){return this._controllers.optimizer.get(o)
};i._seperateCustomEvents=function(s){var p={customEvents:[],standardEvents:[]};
if(typeof s==="string"){var t=s.split(" "),q,r,o=t.length;for(r=0;r<o;r++){q=t[r];
if(this._controllers.customEvent.canHandleCustomEvent(q)){p.customEvents.push(q)
}else{p.standardEvents.push(q)}}}return p};i._bindEvents=function(){this._emitter.on("dom-emitter:didoff",this._onEventUnbound,this)
};b.exports=c.share(k,a,n)},{"./CustomEventController":251,"./OptimizerController":252,"./optimizers/optimizers":258,"./queries/queries":267,"ac-dom-emitter":246,"ac-shared-instance":248}],254:[function(c,d,a){var g=c("ac-event-emitter").EventEmitter;
function b(h,j,i){g.call(this);this.name=h;this.active=false;this._initializeFunc=j;
this._deinitializeFunc=i}var f=b.prototype=new g(null);f.initialize=function(){if(this._initializeFunc){this._initializeFunc()
}return this};f.deinitialize=function(){if(this._deinitializeFunc){this._deinitializeFunc()
}return this};d.exports=b},{"ac-event-emitter":284}],255:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
function a(h,i){g.call(this);this.active=false;this.eventNames=h.eventNames;this.propertyNames=h.propertyNames;
this.options=h.options||{};this.callback=i}var f=a.prototype=new g(null);f.update=function(i,h){this.trigger("update",{prop:i,val:h})
};f.activate=function(){this.active=true;this.trigger("activate",this)};f.deactivate=function(){this.active=false;
this.trigger("deactivate",this)};d.exports=a},{"ac-event-emitter":284}],256:[function(f,g,b){var a=f("../../WindowDelegateOptimizer"),d=f("../../queries/queries");
var c={eventNames:["resize"],propertyNames:["clientWidth","clientHeight","innerWidth","innerHeight"]};
var h=new a(c,function(m){var l,k=c.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],d[k[l]](true))
}});g.exports=h},{"../../WindowDelegateOptimizer":255,"../../queries/queries":267}],257:[function(g,h,b){var a=g("../../WindowDelegateOptimizer"),f=g("../../queries/queries");
var d={eventNames:["scroll"],propertyNames:["scrollX","scrollY","maxScrollX","maxScrollY"]};
var c=new a(d,function(m){var l,k=d.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],f[k[l]](true))
}});h.exports=c},{"../../WindowDelegateOptimizer":255,"../../queries/queries":267}],258:[function(d,f,b){var c=d("./events/resize"),a=d("./events/scroll");
f.exports=[c,a]},{"./events/resize":256,"./events/scroll":257}],259:[function(b,c,a){var d=function(f){return document.documentElement.clientHeight
};c.exports=d},{}],260:[function(b,c,a){var d=function(f){return document.documentElement.clientWidth
};c.exports=d},{}],261:[function(b,d,a){var c=function(f){return window.innerHeight||this.clientHeight(f)
};d.exports=c},{}],262:[function(b,c,a){var d=function(f){return window.innerWidth||this.clientWidth(f)
};c.exports=d},{}],263:[function(c,d,a){var b=function(f){return document.body.scrollWidth-this.innerWidth()
};d.exports=b},{}],264:[function(c,d,b){var a=function(f){return document.body.scrollHeight-this.innerHeight()
};d.exports=a},{}],265:[function(b,c,a){var d=function(f){var h=window.pageXOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollLeft}return h};c.exports=d},{}],266:[function(b,c,a){var d=function(f){var h=window.pageYOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollTop}return h};c.exports=d},{}],267:[function(i,g,k){var b=i("./methods/innerWidth"),j=i("./methods/innerHeight"),d=i("./methods/clientWidth"),l=i("./methods/clientHeight"),c=i("./methods/scrollX"),a=i("./methods/scrollY"),h=i("./methods/maxScrollX"),f=i("./methods/maxScrollY");
g.exports={innerWidth:b,innerHeight:j,clientWidth:d,clientHeight:l,scrollX:c,scrollY:a,maxScrollX:h,maxScrollY:f}
},{"./methods/clientHeight":259,"./methods/clientWidth":260,"./methods/innerHeight":261,"./methods/innerWidth":262,"./methods/maxScrollX":263,"./methods/maxScrollY":264,"./methods/scrollX":265,"./methods/scrollY":266}],268:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":269}],269:[function(d,c,h){var i;
var g=d("ac-object");var k=d("ac-dom-nodes");var a=d("ac-dom-metrics");var l=d("ac-array");
var n=d("ac-window-delegate").WindowDelegate;var j=d("./TrackedElement");var o=d("ac-event-emitter").EventEmitter;
var f={autoStart:false};function b(q,p){this.options=g.clone(f);this.options=typeof p==="object"?g.extend(this.options,p):this.options;
this.windowDelegate=n;this.tracking=false;this.elements=[];if(q&&(Array.isArray(q)||k.isNodeList(q)||k.isElement(q))){this.addElements(q)
}if(this.options.autoStart){this.start()}}i=b.prototype=g.create(o.prototype);var m=/^\[object (HTMLCollection|NodeList|Object)\]$/;
i._registerElements=function(p){p=[].concat(p);p.forEach(function(r){if(this._elementInDOM(r)){var q=new j(r);
q.offsetTop=q.element.offsetTop;this.elements.push(q)}},this)};i._registerTrackedElements=function(p){var q=[].concat(p);
q.forEach(function(r){if(this._elementInDOM(r.element)){r.offsetTop=r.element.offsetTop;
this.elements.push(r)}},this)};i._elementInDOM=function(r){var q=false;var p=document.getElementsByTagName("body")[0];
if(k.isElement(r)&&p.contains(r)){q=true}return q};i._onVPChange=function(){this.elements.forEach(function(p){this.refreshElementState(p)
},this)};i._elementPercentInView=function(p){return p.pixelsInView/p.height};i._elementPixelsInView=function(q){var t=0;
var s=q.top;var r=q.bottom;var p=this.windowDelegate.innerHeight();if(s<=0&&r>=p){t=p
}else{if(s>=0&&s<p&&r>p){t=p-s}else{if(s<0&&(r<p&&r>=0)){t=q.bottom}else{if(s>=0&&r<=p){t=q.height
}}}}return t};i._ifInView=function(p,q){if(!q){p.trigger("enterview",p)}};i._ifAlreadyInView=function(p){if(!p.inView){p.trigger("exitview",p)
}};i.addElements=function(p){p=k.isNodeList(p)?l.toArray(p):[].concat(p);p.forEach(function(q){this.addElement(q)
},this)};i.addElement=function(q){var p;if(k.isElement(q)){p=new j(q);this._registerTrackedElements(p)
}return p};i.removeElement=function(r){var q=[];var p;this.elements.forEach(function(s,t){if(s===r||s.element===r){q.push(t)
}});p=this.elements.filter(function(t,s){return q.indexOf(s)<0?true:false});this.elements=p
};i.stop=function(){if(this.tracking===true){this.tracking=false;this.windowDelegate.off("scroll resize orientationchange",this._onVPChange)
}};i.start=function(){if(this.tracking===false){this.tracking=true;this.windowDelegate.on("scroll resize orientationchange",this._onVPChange,this);
this.refreshAllElementStates()}};i.refreshAllElementStates=function(){this.elements.forEach(function(p){this.refreshElementState(p)
},this)};i.refreshElementState=function(p){var q=a.getBoundingBox(p.element);var r=p.inView;
p=g.extend(p,q);p.pixelsInView=this._elementPixelsInView(p);p.percentInView=this._elementPercentInView(p);
p.inView=p.pixelsInView>0;if(p.inView){this._ifInView(p,r)}if(r){this._ifAlreadyInView(p)
}return p};c.exports=b},{"./TrackedElement":270,"ac-array":1,"ac-dom-metrics":196,"ac-dom-nodes":207,"ac-event-emitter":284,"ac-object":272,"ac-window-delegate":250}],270:[function(d,f,c){var g;
var i=d("ac-dom-emitter").DOMEmitter;var a=d("ac-dom-nodes");var b=d("ac-object");
function h(j){if(a.isElement(j)){this.element=j}else{throw new TypeError("TrackedElement: "+j+" is not a valid DOM element")
}this.inView=false;this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;
this.right=0;this.bottom=0;this.left=0;this.width=0;this.height=0;i.call(this,j)
}g=h.prototype=b.create(i.prototype);f.exports=h},{"ac-dom-emitter":191,"ac-dom-nodes":207,"ac-object":272}],271:[function(b,c,a){c.exports=b(16)
},{}],272:[function(b,c,a){c.exports=b(17)},{"./ac-object/clone":273,"./ac-object/create":274,"./ac-object/defaults":275,"./ac-object/extend":276,"./ac-object/getPrototypeOf":277,"./ac-object/isDate":278,"./ac-object/isEmpty":279,"./ac-object/isRegExp":280,"./ac-object/toQueryParameters":281}],273:[function(b,c,a){c.exports=b(18)
},{"./extend":276}],274:[function(b,c,a){c.exports=b(19)},{}],275:[function(b,c,a){c.exports=b(20)
},{"./extend":276}],276:[function(b,c,a){c.exports=b(21)},{}],277:[function(b,c,a){c.exports=b(22)
},{}],278:[function(b,c,a){c.exports=b(23)},{}],279:[function(b,c,a){c.exports=b(24)
},{}],280:[function(b,c,a){c.exports=b(25)},{}],281:[function(b,c,a){c.exports=b(26)
},{qs:271}],282:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":283}],283:[function(c,b,f){var g;
var d=c("ac-object");var h=c("ac-element-tracker").ElementTracker;var j={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var i={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var a=function(){h.call(this)};g=a.prototype=d.create(h.prototype);g._decorateTrackedElement=function(l,k){var m;
m=d.defaults(j,k||{});d.extend(l,m);d.extend(l,i)};g._attachElementListeners=function(k){k.on("thresholdenter",this._thresholdEnter,this);
k.on("thresholdexit",this._thresholdExit,this);k.on("enterview",this._enterView,this);
k.on("exitview",this._exitView,this)};g._removeElementListeners=function(k){k.off("thresholdenter",this._thresholdEnter);
k.off("thresholdexit",this._thresholdExit);k.off("enterview",this._enterView);k.off("exitview",this._exitView)
};g._attachAllElementListeners=function(){this.elements.forEach(function(k){if(!k.stopOnEngaged){this._attachElementListeners(k)
}else{if(!k.engaged){this._attachElementListeners(k)}}},this)};g._removeAllElementListeners=function(){this.elements.forEach(function(k){this._removeElementListeners(k)
},this)};g._elementInViewPastThreshold=function(m){var k=this.windowDelegate.innerHeight();
var l=false;if(m.pixelsInView===k){l=true}else{l=(m.percentInView>m.inViewThreshold)
}return l};g._ifInView=function(k,m){var l=k.inThreshold;h.prototype._ifInView.apply(this,arguments);
if(!l&&this._elementInViewPastThreshold(k)){k.inThreshold=true;k.trigger("thresholdenter",k);
if(typeof k.timeToEngage==="number"&&k.timeToEngage>=0){k.engagedTimeout=window.setTimeout(this._engaged.bind(this,k),k.timeToEngage)
}}};g._ifAlreadyInView=function(k){var l=k.inThreshold;h.prototype._ifAlreadyInView.apply(this,arguments);
if(l&&!this._elementInViewPastThreshold(k)){k.inThreshold=false;k.trigger("thresholdexit",k);
if(k.engagedTimeout){window.clearTimeout(k.engagedTimeout);k.engagedTimeout=null
}}};g._engaged=function(k){k.engagedTimeout=null;this._elementEngaged(k);k.trigger("engaged",k);
this.trigger("engaged",k)};g._thresholdEnter=function(k){k.thresholdEnterTime=Date.now();
k.thresholdExitTime=0;this.trigger("thresholdenter",k)};g._thresholdExit=function(k){k.thresholdExitTime=Date.now();
this.trigger("thresholdexit",k)};g._enterView=function(k){this.trigger("enterview",k)
};g._exitView=function(k){this.trigger("exitview",k)};g._elementEngaged=function(k){k.engaged=true;
if(k.stopOnEngaged){this.stop(k)}};g.stop=function(k){if(this.tracking&&!k){this._removeAllElementListeners();
h.prototype.stop.call(this)}if(k&&k.tracking){k.tracking=false;this._removeElementListeners(k)
}};g.start=function(k){if(!k){this._attachAllElementListeners()}if(k&&!k.tracking){if(!k.stopOnEngaged){k.tracking=true;
this._attachElementListeners(k)}else{if(!k.engaged){k.tracking=true;this._attachElementListeners(k)
}}}if(!this.tracking){h.prototype.start.call(this)}else{this.refreshAllElementStates()
}};g.addElement=function(m,k){var l=h.prototype.addElement.call(this,m);this._decorateTrackedElement(l,k);
return l};g.addElements=function(l,k){[].forEach.call(l,function(m){this.addElement(m,k)
},this)};b.exports=a},{"ac-element-tracker":268,"ac-object":272}],284:[function(b,c,a){c.exports.EventEmitter=b("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":285}],285:[function(d,c,f){var h="EventEmitter:propagation";
var k=function(l){if(l){this.context=l}};var g=k.prototype;var i=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var a=function(m,o){var p=m[0];var q=m[1];var n=m[2];if((typeof p!=="string"&&typeof p!=="object")||p===null||Array.isArray(p)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof p==="string")&&!q){throw new Error("Expecting a callback function to be provided.")
}if(q&&(typeof q!=="function")){if(typeof p==="object"&&typeof q==="object"){n=q
}else{throw new TypeError("Expecting callback to be a function.")}}if(typeof p==="object"){for(var l in p){o.call(this,l,p[l],n)
}}if(typeof p==="string"){p=p.split(" ");p.forEach(function(r){o.call(this,r,q,n)
},this)}};var j=function(o,p){var l;var m;var n;l=i.call(this)[o];if(!l||l.length===0){return
}l=l.slice();this._stoppedImmediatePropagation=false;for(m=0,n=l.length;m<n;m++){if(this._stoppedImmediatePropagation||p(l[m],m)){break
}}};var b=function(m,n,o){var l=-1;j.call(this,n,function(q,p){if(q.callback===o){l=p;
return true}});if(l===-1){return}m[n].splice(l,1)};g.on=function(){var l=i.call(this);
a.call(this,arguments,function(n,o,m){l[n]=l[n]||(l[n]=[]);l[n].push({callback:o,context:m})
});return this};g.once=function(){a.call(this,arguments,function(m,o,l){var n=function(p){o.call(l||this,p);
this.off(m,n)};this.on(m,n,this)});return this};g.off=function(n,p){var m=i.call(this);
if(arguments.length===0){this._events={}}else{if(!n||(typeof n!=="string"&&typeof n!=="object")||Array.isArray(n)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof n==="object"){for(var o in n){b.call(this,m,o,n[o])}}if(typeof n==="string"){var l=n.split(" ");
if(l.length===1){if(p){b.call(this,m,n,p)}else{m[n]=[]}}else{l.forEach(function(q){m[q]=[]
})}}return this};g.trigger=function(m,n,l){if(!m){throw new Error("trigger method requires an event name")
}if(typeof m!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(l&&typeof l!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}m=m.split(" ");m.forEach(function(o){j.call(this,o,function(p){p.callback.call(p.context||this.context||this,n)
}.bind(this));if(!l){j.call(this,h,function(q){var p=o;if(q.prefix){p=q.prefix+p
}q.emitter.trigger(p,n)})}},this);return this};g.propagateTo=function(m,n){var l=i.call(this);
if(!l[h]){this._events[h]=[]}l[h].push({emitter:m,prefix:n})};g.stopPropagatingTo=function(o){var m=i.call(this);
if(!o){m[h]=[];return}var p=m[h];var n=p.length;var l;for(l=0;l<n;l++){if(p[l].emitter===o){p.splice(l,1);
break}}};g.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};g.has=function(l,s,p){var o=i.call(this);var m=o[l];if(arguments.length===0){return Object.keys(o)
}if(!m){return false}if(!s){return(m.length>0)?true:false}for(var n=0,q=m.length;
n<q;n++){var r=m[n];if(p&&s&&r.context===p&&r.callback===s){return true}else{if(s&&!p&&r.callback===s){return true
}}}return false};c.exports=k},{}],286:[function(b,c,a){c.exports=b(124)},{"./ac-prefixer/Prefixer":287}],287:[function(b,c,a){c.exports=b(125)
},{"./Prefixer/camelCasedEvents":288}],288:[function(b,c,a){c.exports=b(126)},{}],289:[function(c,d,b){var h=c("./ac-feature/helpers/memoize");
var f=["cssPropertyAvailable","isRetina"];var g;var a={canvasAvailable:c("./ac-feature/canvasAvailable"),continuousScrollEventsAvailable:c("./ac-feature/continuousScrollEventsAvailable"),cookiesAvailable:c("./ac-feature/cookiesAvailable"),cssLinearGradientAvailable:c("./ac-feature/cssLinearGradientAvailable"),cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),isDesktop:c("./ac-feature/isDesktop"),isHandheld:c("./ac-feature/isHandheld"),isRetina:c("./ac-feature/isRetina"),isTablet:c("./ac-feature/isTablet"),localStorageAvailable:c("./ac-feature/localStorageAvailable"),sessionStorageAvailable:c("./ac-feature/sessionStorageAvailable"),svgAvailable:c("./ac-feature/svgAvailable"),threeDTransformsAvailable:c("./ac-feature/threeDTransformsAvailable"),touchAvailable:c("./ac-feature/touchAvailable"),webGLAvailable:c("./ac-feature/webGLAvailable")};
for(g in a){if(f.indexOf(g)===-1){a[g]=h(a[g])}}d.exports=a},{"./ac-feature/canvasAvailable":290,"./ac-feature/continuousScrollEventsAvailable":291,"./ac-feature/cookiesAvailable":292,"./ac-feature/cssLinearGradientAvailable":293,"./ac-feature/cssPropertyAvailable":294,"./ac-feature/helpers/memoize":296,"./ac-feature/isDesktop":297,"./ac-feature/isHandheld":298,"./ac-feature/isRetina":299,"./ac-feature/isTablet":300,"./ac-feature/localStorageAvailable":301,"./ac-feature/sessionStorageAvailable":302,"./ac-feature/svgAvailable":303,"./ac-feature/threeDTransformsAvailable":304,"./ac-feature/touchAvailable":305,"./ac-feature/webGLAvailable":306}],290:[function(b,c,a){var f=b("./helpers/globals");
c.exports=function d(){var g=f.getDocument();var h=g.createElement("canvas");return !!(typeof h.getContext==="function"&&h.getContext("2d"))
}},{"./helpers/globals":295}],291:[function(c,d,b){var g=c("ac-browser");var a=c("./touchAvailable");
d.exports=function f(){return(!a()||(g.os==="iOS"&&g.version>=8)||g.name==="Chrome")
}},{"./touchAvailable":305,"ac-browser":58}],292:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var j=false;var g=f.getDocument();var i=f.getNavigator();
try{if("cookie" in g&&!!i.cookieEnabled){g.cookie="ac_feature_cookie=1";j=(g.cookie.indexOf("ac_feature_cookie")!==-1);
g.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}catch(h){}return j
}},{"./helpers/globals":295}],293:[function(d,f,c){var a=d("./cssPropertyAvailable");
f.exports=function b(){var g=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return g.some(function(h){return a("background-image",h)})}},{"./cssPropertyAvailable":294}],294:[function(c,d,b){var f=c("ac-prefixer");
d.exports=function a(h,g){if(typeof g!=="undefined"){return !!f.getStyleValue(h,g)
}else{return !!f.getStyleProperty(h)}}},{"ac-prefixer":286}],295:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],296:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f!=="undefined"){return f
}else{return f=g()}}}},{}],297:[function(d,f,b){var a=d("./touchAvailable");var g=d("./helpers/globals");
f.exports=function c(){var h=g.getWindow();return(!a()&&!h.orientation)}},{"./helpers/globals":295,"./touchAvailable":305}],298:[function(f,g,c){var d=f("./isDesktop");
var a=f("./isTablet");g.exports=function b(){return(!d()&&!a())}},{"./isDesktop":297,"./isTablet":300}],299:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":295}],300:[function(d,f,b){var c=d("./isDesktop");var g=d("./helpers/globals");
f.exports=function a(){var i=g.getWindow();var h=i.screen.width;if(i.orientation&&i.screen.height<h){h=i.screen.height
}return(!c()&&h>=600)}},{"./helpers/globals":295,"./isDesktop":297}],301:[function(c,d,a){var f=c("./helpers/globals");
d.exports=function b(){var i=f.getWindow();var h=false;try{h=!!(i.localStorage&&i.localStorage.non_existent!==null)
}catch(g){}return h}},{"./helpers/globals":295}],302:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var i=f.getWindow();var g=false;try{if("sessionStorage" in i&&typeof i.sessionStorage.setItem==="function"){i.sessionStorage.setItem("ac_feature","test");
g=true;i.sessionStorage.removeItem("ac_feature","test")}}catch(h){}return g}},{"./helpers/globals":295}],303:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var g=f.getDocument();return g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}},{"./helpers/globals":295}],304:[function(c,d,b){var a=c("./cssPropertyAvailable");
d.exports=function f(){return(a("perspective","1px")&&a("transform","translateZ(0)"))
}},{"./cssPropertyAvailable":294}],305:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var h=f.getWindow();var g=f.getDocument();return !!(("ontouchstart" in h)||h.DocumentTouch&&g instanceof h.DocumentTouch)
}},{"./helpers/globals":295}],306:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var g=f.getDocument();var h=g.createElement("canvas");return !!(typeof h.getContext==="function"&&h.getContext("webgl"))
}},{"./helpers/globals":295}],307:[function(b,c,a){c.exports=b(124)},{"./ac-prefixer/Prefixer":308}],308:[function(b,c,a){c.exports=b(125)
},{"./Prefixer/camelCasedEvents":309}],309:[function(b,c,a){c.exports=b(126)},{}],310:[function(c,d,b){var h=c("./ac-feature/helpers/memoize");
var f=["cssPropertyAvailable","isRetina"];var g;var a={canvasAvailable:c("./ac-feature/canvasAvailable"),continuousScrollEventsAvailable:c("./ac-feature/continuousScrollEventsAvailable"),cookiesAvailable:c("./ac-feature/cookiesAvailable"),cssLinearGradientAvailable:c("./ac-feature/cssLinearGradientAvailable"),cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),isDesktop:c("./ac-feature/isDesktop"),isHandheld:c("./ac-feature/isHandheld"),isRetina:c("./ac-feature/isRetina"),isTablet:c("./ac-feature/isTablet"),localStorageAvailable:c("./ac-feature/localStorageAvailable"),mediaElementsAvailable:c("./ac-feature/mediaElementsAvailable"),sessionStorageAvailable:c("./ac-feature/sessionStorageAvailable"),svgAvailable:c("./ac-feature/svgAvailable"),threeDTransformsAvailable:c("./ac-feature/threeDTransformsAvailable"),touchAvailable:c("./ac-feature/touchAvailable"),webGLAvailable:c("./ac-feature/webGLAvailable")};
for(g in a){if(f.indexOf(g)===-1){a[g]=h(a[g])}}d.exports=a},{"./ac-feature/canvasAvailable":311,"./ac-feature/continuousScrollEventsAvailable":312,"./ac-feature/cookiesAvailable":313,"./ac-feature/cssLinearGradientAvailable":314,"./ac-feature/cssPropertyAvailable":315,"./ac-feature/helpers/memoize":317,"./ac-feature/isDesktop":318,"./ac-feature/isHandheld":319,"./ac-feature/isRetina":320,"./ac-feature/isTablet":321,"./ac-feature/localStorageAvailable":322,"./ac-feature/mediaElementsAvailable":323,"./ac-feature/sessionStorageAvailable":324,"./ac-feature/svgAvailable":325,"./ac-feature/threeDTransformsAvailable":326,"./ac-feature/touchAvailable":327,"./ac-feature/webGLAvailable":328}],311:[function(b,c,a){c.exports=b(290)
},{"./helpers/globals":316}],312:[function(b,c,a){c.exports=b(291)},{"./touchAvailable":327,"ac-browser":58}],313:[function(b,c,a){c.exports=b(292)
},{"./helpers/globals":316}],314:[function(b,c,a){c.exports=b(293)},{"./cssPropertyAvailable":315}],315:[function(b,c,a){c.exports=b(294)
},{"ac-prefixer":307}],316:[function(b,c,a){c.exports=b(295)},{}],317:[function(b,c,a){c.exports=b(296)
},{}],318:[function(b,c,a){c.exports=b(297)},{"./helpers/globals":316,"./touchAvailable":327}],319:[function(b,c,a){c.exports=b(298)
},{"./isDesktop":318,"./isTablet":321}],320:[function(b,c,a){c.exports=b(299)},{"./helpers/globals":316}],321:[function(b,c,a){c.exports=b(300)
},{"./helpers/globals":316,"./isDesktop":318}],322:[function(b,c,a){c.exports=b(301)
},{"./helpers/globals":316}],323:[function(b,c,a){var f=b("./helpers/globals");
c.exports=function d(){var g=f.getWindow();return("HTMLMediaElement" in g)}},{"./helpers/globals":316}],324:[function(b,c,a){c.exports=b(302)
},{"./helpers/globals":316}],325:[function(b,c,a){c.exports=b(303)},{"./helpers/globals":316}],326:[function(b,c,a){c.exports=b(304)
},{"./cssPropertyAvailable":315}],327:[function(b,c,a){c.exports=b(305)},{"./helpers/globals":316}],328:[function(b,c,a){c.exports=b(306)
},{"./helpers/globals":316}],329:[function(c,d,b){var g=c("./utils/addEventListener");
var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
}},{"./shared/getEventType":334,"./utils/addEventListener":335}],330:[function(g,i,d){var h=g("./utils/eventTypeAvailable");
var b=g("./shared/camelCasedEventTypes");var f=g("./shared/prefixHelper");var c={};
i.exports=function a(l,k){var m;var n;var j;k=k||"div";l=l.toLowerCase();if(!(k in c)){c[k]={}
}n=c[k];if(l in n){return n[l]}if(h(l,k)){return n[l]=l}if(l in b){for(j=0;j<b[l].length;
j++){m=b[l][j];if(h(m.toLowerCase(),k)){return n[l]=m}}}for(j=0;j<f.evt.length;
j++){m=f.evt[j]+l;if(h(m,k)){f.reduce(j);return n[l]=m}}return n[l]=false}},{"./shared/camelCasedEventTypes":331,"./shared/prefixHelper":332,"./utils/eventTypeAvailable":333}],331:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],332:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],333:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],334:[function(c,f,b){var d=c("ac-prefixer/getEventType");f.exports=function a(j,i){var h;
var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"}else{h="document"
}}g=d(i,h);if(g){return g}return i}},{"ac-prefixer/getEventType":330}],335:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],336:[function(b,c,a){c.exports=b("./ac-fullscreen/fullscreen")
},{"./ac-fullscreen/fullscreen":342}],337:[function(b,c,a){c.exports={STANDARD:"standard",IOS:"ios"}
},{}],338:[function(f,c,i){var h=f("ac-dom-events/addEventListener");var m=f("ac-event-emitter").EventEmitter;
var a=f("./../events/types");var b=f("./../consts/modes");var d=new m();function k(n){d.trigger(a.ENTERFULLSCREEN,n)
}function l(n){d.trigger(a.EXITFULLSCREEN,n)}function g(n){if(d.fullscreenElement()){k(n)
}else{l(n)}}function j(){h(document,"fullscreenchange",g)}j();d.fullscreenEnabled=function(n){var o=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||("webkitCancelFullScreen" in document);
return !!(o)};d.fullscreenElement=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.webkitCurrentFullScreenElement
};d.exitFullscreen=function(n){var o;if(typeof document.exitFullscreen==="function"){o="exitFullscreen"
}else{if(typeof document.webkitExitFullscreen==="function"){o="webkitExitFullscreen"
}else{if(typeof document.webkitCancelFullScreen==="function"){o="webkitCancelFullScreen"
}else{if(typeof document.mozCancelFullScreen==="function"){o="mozCancelFullScreen"
}}}}if(typeof document[o]==="function"){document[o].call(document)}};d.requestFullscreen=function(n){var o;
if(typeof n.requestFullscreen==="function"){o="requestFullscreen"}else{if(typeof n.webkitRequestFullscreen==="function"){o="webkitRequestFullscreen"
}else{if(typeof n.webkitRequestFullScreen==="function"){o="webkitRequestFullScreen"
}else{if(typeof n.mozRequestFullScreen==="function"){o="mozRequestFullScreen"}}}}if(typeof n[o]==="function"){n[o].call(n)
}};d.mode=b.STANDARD;c.exports=d},{"./../consts/modes":337,"./../events/types":341,"ac-dom-events/addEventListener":329,"ac-event-emitter":284}],339:[function(c,d,a){var b=c("./ios");
var f=c("./desktop");d.exports={create:function(){var g=f;if("webkitEnterFullscreen" in document.createElement("video")&&!("webkitRequestFullScreen" in document.createElement("div"))){g=b
}return g}}},{"./desktop":338,"./ios":340}],340:[function(f,d,h){var g=f("ac-dom-events/addEventListener");
var m=f("ac-event-emitter").EventEmitter;var a=f("./../events/types");var c=f("./../consts/modes");
var l;b();function b(){g(document,"webkitbeginfullscreen",k,true);g(document,"webkitendfullscreen",j,true)
}function k(n){i.trigger(a.ENTERFULLSCREEN,n)}function j(n){l=undefined;i.trigger(a.EXITFULLSCREEN,n)
}var i=new m();i.fullscreenEnabled=function(n){return !!(n.webkitSupportsFullscreen)
};i.fullscreenElement=function(){return l};i.exitFullscreen=function(n){if(n&&typeof n.webkitExitFullscreen==="function"){n.webkitExitFullscreen()
}};i.requestFullscreen=function(n){if(typeof n.webkitEnterFullscreen==="function"){n.webkitEnterFullscreen()
}};i.mode=c.IOS;d.exports=i},{"./../consts/modes":337,"./../events/types":341,"ac-dom-events/addEventListener":329,"ac-event-emitter":284}],341:[function(b,c,a){c.exports={ENTERFULLSCREEN:"enterfullscreen",EXITFULLSCREEN:"exitfullscreen"}
},{}],342:[function(c,b,d){var j=c("ac-event-emitter").EventEmitter;var h=c("./delegate/factory");
var a="Error: Element missing. ac-fullscreen requires an element to be specified";
var g=new j();var f=h.create();f.propagateTo(g);function i(){throw new Error(a)
}g.requestFullscreen=function(k){if(!k){i()}return f.requestFullscreen(k)};g.fullscreenEnabled=function(k){if(!k){i()
}return f.fullscreenEnabled(k)};g.fullscreenElement=function(){return f.fullscreenElement()
};g.exitFullscreen=function(k){if(!k){i()}return f.exitFullscreen(k)};g.getMode=function(){return f.mode
};b.exports=g},{"./delegate/factory":339,"ac-event-emitter":284}],343:[function(b,c,a){c.exports={TouchClick:b("./ac-gesture-touchclick/TouchClick")}
},{"./ac-gesture-touchclick/TouchClick":344}],344:[function(c,b,d){var g=c("ac-dom-events");
var j=c("ac-event-emitter").EventEmitter;var a=c("ac-object");var h=c("ac-feature");
function i(k){k=k||{};this.el=k.el;this._onTouchStart=this._onTouchStart.bind(this);
this._onTouchMove=this._onTouchMove.bind(this);this._onTouchEnd=this._onTouchEnd.bind(this);
this._onClick=this._onClick.bind(this);this._touchStart=false;this.activate()}var f=i.prototype=a.create(j.prototype);
f._broadcastClick=function(k){this.trigger("click",{originalEvent:k})};f._onClick=function(k){g.stop(k);
if(!this._touchAvailable()){this._broadcastClick(k)}};f._onTouchStart=function(){this._touchStart=true
};f._onTouchEnd=function(k){if(this._touchStart===true){g.stop(k);this._broadcastClick(k)
}this._touchStart=false};f._onTouchMove=function(){this._touchStart=false};f._touchAvailable=function(){return h.touchAvailable()
};f.activate=function(){if(this._touchAvailable()){g.addEventListener(this.el,"touchstart",this._onTouchStart);
g.addEventListener(this.el,"touchmove",this._onTouchMove);g.addEventListener(this.el,"touchend",this._onTouchEnd)
}g.addEventListener(this.el,"click",this._onClick)};f.deactivate=function(){g.removeEventListener(this.el,"touchstart",this._onTouchStart);
g.removeEventListener(this.el,"touchmove",this._onTouchMove);g.removeEventListener(this.el,"touchend",this._onTouchEnd);
g.removeEventListener(this.el,"click",this._onClick)};i.create=function(l,k){k=k||{};
return new i({el:l})};b.exports=i},{"ac-dom-events":127,"ac-event-emitter":284,"ac-feature":310,"ac-object":906}],345:[function(b,c,a){c.exports=b(124)
},{"./ac-prefixer/Prefixer":346}],346:[function(b,c,a){c.exports=b(125)},{"./Prefixer/camelCasedEvents":347}],347:[function(b,c,a){c.exports=b(126)
},{}],348:[function(b,c,a){c.exports={addEventListener:b("./ac-dom-events/addEventListener"),dispatchEvent:b("./ac-dom-events/dispatchEvent"),removeEventListener:b("./ac-dom-events/removeEventListener"),stop:b("./ac-dom-events/stop"),target:b("./ac-dom-events/target")}
},{"./ac-dom-events/addEventListener":349,"./ac-dom-events/dispatchEvent":350,"./ac-dom-events/removeEventListener":351,"./ac-dom-events/stop":352,"./ac-dom-events/target":353}],349:[function(b,c,a){c.exports=b(128)
},{"ac-prefixer":345}],350:[function(b,c,a){c.exports=b(129)},{}],351:[function(b,c,a){c.exports=b(131)
},{"ac-prefixer":345}],352:[function(b,d,a){d.exports=function c(f){if(!f){f=window.event
}if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}if(f.preventDefault){f.preventDefault()
}f.stopped=true;f.returnValue=false}},{}],353:[function(b,c,a){c.exports=function d(f){return(typeof f.target!=="undefined")?f.target:f.srcElement
}},{}],354:[function(c,d,b){var a=c("./ac-keyboard/Keyboard");d.exports=new a();
d.exports.Keyboard=a;d.exports.keys=c("./ac-keyboard/keymap")},{"./ac-keyboard/Keyboard":356,"./ac-keyboard/keymap":357}],355:[function(c,d,b){var a=["keyLocation"];
function f(g){this.originalEvent=g;var h;for(h in g){if(typeof g[h]!=="function"&&a.indexOf(h)===-1){this[h]=g[h]
}}this.location=(this.originalEvent.keyLocation===undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}f.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};d.exports=f},{}],356:[function(f,c,h){var j=f("ac-dom-events");var n=f("ac-event-emitter").EventEmitter;
var g=f("./KeyEvent");var k=f("./keymap");var l=0;var d=1;var a=2;var m=3;var i;
function b(){this._keysDown=[];this._keyDownEmitter=new n();this._keyUpEmitter=new n();
j.addEventListener(document,"keydown",this._DOMKeyDown.bind(this),true);j.addEventListener(document,"keyup",this._DOMKeyUp.bind(this),true);
this._listening=[]}i=b.prototype;i._castEventNameNumberToString=function(o){if(typeof o==="number"){return o.toString()
}return o};i._DOMKeyDown=function(p){var o=this._normalizeKeyboardEvent(p);var q=o.keyCode;
this._trackKeyDown(q);this._keyDownEmitter.trigger(q.toString(),o)};i._DOMKeyUp=function(p){var o=this._normalizeKeyboardEvent(p);
var q=o.keyCode;this._trackKeyUp(q);this._keyUpEmitter.trigger(q.toString(),o)};
i.addKeyDown=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
if(p===undefined){throw new TypeError('Could not listen for keyup event on "'+p+'"')
}p=this._castEventNameNumberToString(p);return this._keyDownEmitter.on.apply(this._keyDownEmitter,[p].concat(o))
};i.addKeyUp=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
if(p===undefined){throw new TypeError('Could not listen for keyup event on "'+p+'"')
}p=this._castEventNameNumberToString(p);return this._keyUpEmitter.on.apply(this._keyUpEmitter,[p].concat(o))
};i.removeKeyDown=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
p=this._castEventNameNumberToString(p);return this._keyDownEmitter.off.apply(this._keyDownEmitter,[p].concat(o))
};i.removeKeyUp=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
p=this._castEventNameNumberToString(p);return this._keyUpEmitter.off.apply(this._keyUpEmitter,[p].concat(o))
};i.isDown=function(o){return(this._keysDown.indexOf(o)!==-1)};i.isUp=function(o){return !this.isDown(o)
};i._trackKeyUp=function(p){var o=this._keysDown.indexOf(p);if(o!==-1){this._keysDown.splice(o,1)
}};i._trackKeyDown=function(o){if(this._keysDown.indexOf(o)===-1){this._keysDown.push(o)
}};i._normalizeKeyboardEvent=function(o){return new g(o)};c.exports=b},{"./KeyEvent":355,"./keymap":357,"ac-dom-events":348,"ac-event-emitter":284}],357:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],358:[function(b,c,a){c.exports={add:b("./ac-classlist/add"),contains:b("./ac-classlist/contains"),remove:b("./ac-classlist/remove"),toggle:b("./ac-classlist/toggle")}
},{"./ac-classlist/add":359,"./ac-classlist/contains":360,"./ac-classlist/remove":362,"./ac-classlist/toggle":363}],359:[function(b,c,a){var d=b("./helpers/className");
c.exports=function f(){var h=Array.prototype.slice.call(arguments);var g=h.shift(h);
if(g.classList&&g.classList.add){g.classList.add.apply(g.classList,h)}else{h.forEach(d.add.bind(this,g))
}}},{"./helpers/className":361}],360:[function(b,d,a){var f=b("./helpers/className");
d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f.contains(h,g)}},{"./helpers/className":361}],361:[function(c,d,a){var h=function(i){return new RegExp("(\\s|^)"+i+"(\\s|$)")
};var g=function(j,i){return h(i).test(j.className)};var f=function(j,i){if(!g(j,i)){j.className+=" "+i
}};var b=function(j,i){if(g(j,i)){j.className=j.className.replace(h(i),"$1").trim()
}};d.exports={contains:g,add:f,remove:b}},{}],362:[function(c,d,b){var f=c("./helpers/className");
d.exports=function a(){var h=Array.prototype.slice.call(arguments);var g=h.shift(h);
if(g.classList&&g.classList.remove){g.classList.remove.apply(g.classList,h)}else{h.forEach(f.remove.bind(this,g))
}}},{"./helpers/className":361}],363:[function(c,d,b){var f=c("./helpers/className");
d.exports=function a(j,i,k){var h=(typeof k!=="undefined");var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)
}return j.classList.toggle(i)}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)
}else{f.remove(j,i)}return g}},{"./helpers/className":361}],364:[function(b,c,a){arguments[4][102][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":365,"./ac-dom-traversal/ancestors":366,"./ac-dom-traversal/children":367,"./ac-dom-traversal/filterBySelector":368,"./ac-dom-traversal/firstChild":369,"./ac-dom-traversal/lastChild":372,"./ac-dom-traversal/matchesSelector":373,"./ac-dom-traversal/nextSibling":374,"./ac-dom-traversal/nextSiblings":375,"./ac-dom-traversal/previousSibling":376,"./ac-dom-traversal/previousSiblings":377,"./ac-dom-traversal/querySelector":378,"./ac-dom-traversal/querySelectorAll":379,"./ac-dom-traversal/shims/ie":380,"./ac-dom-traversal/siblings":381}],365:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{"./helpers/validate":371,"./matchesSelector":373,"ac-dom-nodes":386}],366:[function(b,c,a){arguments[4][104][0].apply(a,arguments)
},{"./helpers/validate":371,"./matchesSelector":373,"ac-dom-nodes":386}],367:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{"./filterBySelector":368,"./helpers/validate":371,"ac-dom-nodes":386}],368:[function(b,c,a){arguments[4][106][0].apply(a,arguments)
},{"./helpers/validate":371,"./matchesSelector":373}],369:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{"./children":367,"./helpers/validate":371}],370:[function(b,c,a){c.exports=b(108)
},{}],371:[function(b,c,a){arguments[4][109][0].apply(a,arguments)},{"ac-dom-nodes":386}],372:[function(b,c,a){arguments[4][110][0].apply(a,arguments)
},{"./children":367,"./helpers/validate":371}],373:[function(b,c,a){arguments[4][111][0].apply(a,arguments)
},{"./helpers/nativeMatches":370,"./helpers/validate":371,"ac-dom-nodes":386}],374:[function(b,c,a){arguments[4][112][0].apply(a,arguments)
},{"./helpers/validate":371,"./matchesSelector":373,"ac-dom-nodes":386}],375:[function(b,c,a){arguments[4][113][0].apply(a,arguments)
},{"./helpers/validate":371,"./matchesSelector":373,"ac-dom-nodes":386}],376:[function(b,c,a){arguments[4][114][0].apply(a,arguments)
},{"./helpers/validate":371,"./matchesSelector":373,"ac-dom-nodes":386}],377:[function(b,c,a){arguments[4][115][0].apply(a,arguments)
},{"./helpers/validate":371,"./matchesSelector":373,"ac-dom-nodes":386}],378:[function(b,c,a){arguments[4][116][0].apply(a,arguments)
},{"./helpers/validate":371}],379:[function(b,c,a){arguments[4][117][0].apply(a,arguments)
},{"./helpers/validate":371}],380:[function(b,c,a){arguments[4][118][0].apply(a,arguments)
},{"../helpers/nativeMatches":370,"../helpers/validate":371,"../vendor/sizzle/sizzle":382,"ac-dom-nodes":386}],381:[function(b,c,a){arguments[4][119][0].apply(a,arguments)
},{"./children":367,"./helpers/validate":371}],382:[function(b,c,a){c.exports=b(120)
},{}],383:[function(b,c,a){arguments[4][121][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":384}],384:[function(c,b,d){var f;
var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g=c("ac-dom-events"),a=c("ac-dom-traversal");
var i="dom-emitter";function h(l){if(l===null){return}this.el=l;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new k()}f=h.prototype;f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f.has=function(l,q,p,n){var o,r;if(typeof q==="string"){o=q;r=p}else{r=q;
n=p}if(o){var m=this._getDelegateFuncBindingIdx(l,o,r,n,true);if(m>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(n,m,o,s){n=this._parseEventNames(n);n=this._cleanStringData(n);
var q,r,p,l=n.length;if(typeof m==="string"){q=this._cleanStringData(m);r=o}else{r=m;
s=o}for(p=0;p<l;p++){this._triggerDOMEvents(n[p],r,q)}return this};f.emitterTrigger=function(m,o,p){m=this._parseEventNames(m);
m=this._cleanStringData(m);o=new j(o,this);var n,l=m.length;for(n=0;n<l;n++){this._eventEmitter.trigger(m[n],o,p)
}return this};f.propagateTo=function(l,m){this._eventEmitter.propagateTo(l,m);return this
};f.stopPropagatingTo=function(l){this._eventEmitter.stopPropagatingTo(l);return this
};f.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
this.el=this._eventEmitter=this._bindings=this._delegateFuncs=null};f._parseEventNames=function(l){if(!l){return[l]
}return l.split(" ")};f._onListenerEvent=function(m,l){this.emitterTrigger(m,l,false)
};f._setListener=function(l){this._bindings[l]=this._onListenerEvent.bind(this,l);
g.addEventListener(this.el,l,this._bindings[l])};f._removeListener=function(l){g.removeEventListener(this.el,l,this._bindings[l]);
this._bindings[l]=null};f._triggerInternalEvent=function(l,m){this.emitterTrigger(i+":"+l,m)
};f._normalizeArgumentsAndCall=function(l,n){var r={};if(l.length===0){n.call(this,r);
return}if(typeof l[0]==="string"||l[0]===null){l=this._cleanStringData(l);r.events=l[0];
if(typeof l[1]==="string"){r.delegateQuery=l[1];r.callback=l[2];r.context=l[3]}else{r.callback=l[1];
r.context=l[2]}n.call(this,r);return}var m,p,q=":",o=l[0];for(m in o){if(o.hasOwnProperty(m)){r={};
p=this._cleanStringData(m.split(q));r.events=p[0];r.delegateQuery=p[1];r.callback=o[m];
r.context=l[1];n.call(this,r)}}};f._registerDelegateFunc=function(n,p,q,l,o){var m=this._delegateFunc.bind(this,n,p,q,o);
this._delegateFuncs[p]=this._delegateFuncs[p]||{};this._delegateFuncs[p][n]=this._delegateFuncs[p][n]||[];
this._delegateFuncs[p][n].push({func:l,context:o,delegateFunc:m});return m};f._cleanStringData=function(o){var n=false;
if(typeof o==="string"){o=[o];n=true}var m=[],q,s,r,p,l=o.length;for(q=0;q<l;q++){s=o[q];
if(typeof s==="string"){if(s===""||s===" "){continue}r=s.length;while(s[0]===" "){s=s.slice(1,r);
r--}while(s[r-1]===" "){s=s.slice(0,r-1);r--}}m.push(s)}if(n){return m[0]}return m
};f._unregisterDelegateFunc=function(n,q,l,p){if(!this._delegateFuncs[q]||!this._delegateFuncs[q][n]){return
}var o=this._getDelegateFuncBindingIdx(n,q,l,p),m;if(o>-1){m=this._delegateFuncs[q][n][o].delegateFunc;
this._delegateFuncs[q][n].splice(o,1);if(this._delegateFuncs[q][n].length===0){this._delegateFuncs[q][n]=null
}}return m};f._unregisterDelegateFuncs=function(l,n){if(!this._delegateFuncs[n]){return
}if(l!==null&&!this._delegateFuncs[n][l]){return}if(l===null){var m;for(m in this._delegateFuncs[n]){if(this._delegateFuncs[n].hasOwnProperty(m)){this._unbindDelegateFunc(m,n)
}}return}this._unbindDelegateFunc(l,n)};f._unbindDelegateFunc=function(l,n){var o,p,m=0;
while(this._delegateFuncs[n][l]&&this._delegateFuncs[n][l][m]){o=this._delegateFuncs[n][l][m];
p=this._delegateFuncs[n][l][m].length;this._off({events:l,delegateQuery:n,callback:o.func,context:o.context});
if(this._delegateFuncs[n][l]&&p===this._delegateFuncs[n][l].length){m++}}o=p=null
};f._unregisterDelegateFuncsByEvent=function(l){var m;for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._unregisterDelegateFuncs(l,m)
}}};f._delegateFunc=function(l,p,r,n,q){if(this._targetHasDelegateAncestor(q.target,p)){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
n=n||window;if(typeof q.detail==="object"){o[0]=q.detail}r.apply(n,o)}};f._targetHasDelegateAncestor=function(n,m){var l=n;
while(l&&l!==this.el&&l!==document.documentElement){if(a.matchesSelector(l,m)){return true
}l=l.parentNode}return false};f._on=function(p){var m=p.events,q=p.callback,o=p.delegateQuery,n=p.context,l=p.unboundCallback||q;
m=this._parseEventNames(m);m.forEach(function(v,r,t,u,s){if(!this.has(s)){this._setListener(s)
}if(typeof u==="string"){v=this._registerDelegateFunc(s,u,v,r,t)}this._triggerInternalEvent("willon",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.on(s,v,t);this._triggerInternalEvent("didon",{evt:s,callback:v,context:t,delegateQuery:u})
}.bind(this,q,l,n,o));m=q=l=o=n=null};f._off=function(q){var m=q.events,r=q.callback,p=q.delegateQuery,o=q.context,l=q.unboundCallback||r;
if(typeof m==="undefined"){this._eventEmitter.off();var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}for(n in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(n)){this._delegateFuncs[n]=null
}}return}m=this._parseEventNames(m);m.forEach(function(w,s,u,v,t){if(typeof v==="string"&&typeof s==="function"){w=this._unregisterDelegateFunc(t,v,s,u);
if(!w){return}}if(typeof v==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncs(t,v);
return}if(typeof t==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncsByEvent(t);
if(typeof v==="string"){return}}this._triggerInternalEvent("willoff",{evt:t,callback:w,context:u,delegateQuery:v});
this._eventEmitter.off(t,w,u);this._triggerInternalEvent("didoff",{evt:t,callback:w,context:u,delegateQuery:v});
if(!this.has(t)){this._removeListener(t)}}.bind(this,r,l,o,p));m=r=l=p=o=null};
f._once=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context;l=this._parseEventNames(l);
l.forEach(function(t,r,s,q){if(typeof s==="string"){return this._handleDelegateOnce(q,t,r,s)
}if(!this.has(q)){this._setListener(q)}this._triggerInternalEvent("willonce",{evt:q,callback:t,context:r,delegateQuery:s});
this._eventEmitter.once.call(this,q,t,r);this._triggerInternalEvent("didonce",{evt:q,callback:t,context:r,delegateQuery:s})
}.bind(this,p,m,n));l=p=n=m=null};f._handleDelegateOnce=function(l,o,m,n){this._triggerInternalEvent("willonce",{evt:l,callback:o,context:m,delegateQuery:n});
this._on({events:l,context:m,delegateQuery:n,callback:this._getDelegateOnceCallback.bind(this,l,o,m,n),unboundCallback:o});
this._triggerInternalEvent("didonce",{evt:l,callback:o,context:m,delegateQuery:n});
return this};f._getDelegateOnceCallback=function(l,q,n,p){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
q.apply(n,o);this._off({events:l,delegateQuery:p,callback:q,context:n})};f._getDelegateFuncBindingIdx=function(s,p,n,l,t){var r=-1;
if(this._delegateFuncs[p]&&this._delegateFuncs[p][s]){var o,m,q=this._delegateFuncs[p][s].length;
for(o=0;o<q;o++){m=this._delegateFuncs[p][s][o];if(t&&typeof n==="undefined"){n=m.func
}if(m.func===n&&m.context===l){r=o;break}}}return r};f._triggerDOMEvents=function(n,q,p){var m=[this.el];
if(p){m=a.querySelectorAll(p,this.el)}var o,r,l=m.length;for(o=0;o<l;o++){g.dispatchEvent(m[o],n,{bubbles:true,cancelable:true,detail:q})
}};b.exports=h},{"./DOMEmitterEvent":385,"ac-dom-events":127,"ac-dom-traversal":364,"ac-event-emitter":284}],385:[function(b,c,a){c.exports=b(123)
},{"ac-dom-events":127}],386:[function(d,f,c){var b=d("./ac-dom-nodes/helpers/nodeTypes");
var g;var a={createDocumentFragment:d("./ac-dom-nodes/createDocumentFragment"),filterByNodeType:d("./ac-dom-nodes/filterByNodeType"),insertAfter:d("./ac-dom-nodes/insertAfter"),insertBefore:d("./ac-dom-nodes/insertBefore"),insertFirstChild:d("./ac-dom-nodes/insertFirstChild"),insertLastChild:d("./ac-dom-nodes/insertLastChild"),isComment:d("./ac-dom-nodes/isComment"),isDocument:d("./ac-dom-nodes/isDocument"),isDocumentFragment:d("./ac-dom-nodes/isDocumentFragment"),isDocumentType:d("./ac-dom-nodes/isDocumentType"),isElement:d("./ac-dom-nodes/isElement"),isNode:d("./ac-dom-nodes/isNode"),isNodeList:d("./ac-dom-nodes/isNodeList"),isTextNode:d("./ac-dom-nodes/isTextNode"),remove:d("./ac-dom-nodes/remove"),replace:d("./ac-dom-nodes/replace")};
for(g in b){a[g]=b[g]}f.exports=a},{"./ac-dom-nodes/createDocumentFragment":387,"./ac-dom-nodes/filterByNodeType":388,"./ac-dom-nodes/helpers/nodeTypes":390,"./ac-dom-nodes/insertAfter":392,"./ac-dom-nodes/insertBefore":393,"./ac-dom-nodes/insertFirstChild":394,"./ac-dom-nodes/insertLastChild":395,"./ac-dom-nodes/isComment":396,"./ac-dom-nodes/isDocument":397,"./ac-dom-nodes/isDocumentFragment":398,"./ac-dom-nodes/isDocumentType":399,"./ac-dom-nodes/isElement":400,"./ac-dom-nodes/isNode":401,"./ac-dom-nodes/isNodeList":402,"./ac-dom-nodes/isTextNode":403,"./ac-dom-nodes/remove":404,"./ac-dom-nodes/replace":405}],387:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],388:[function(d,f,c){var g=d("./helpers/isNodeType");var a=d("./helpers/nodeTypes").ELEMENT_NODE;
f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)
})}},{"./helpers/isNodeType":389,"./helpers/nodeTypes":390}],389:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":401}],390:[function(b,c,a){c.exports={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11}
},{}],391:[function(f,c,h){var g=f("./nodeTypes");var b=f("./isNodeType");var j=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var d=" must be an Element, TextNode, Comment, or Document Fragment";var m=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE];
var i=" must be an Element, TextNode, or Comment";var k=[g.ELEMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var l=" must be an Element, or Document Fragment";var a=" must have a parentNode";
c.exports={parentNode:function(n,q,p,o){o=o||"target";if((n||q)&&!b(n,k)){throw new TypeError(p+": "+o+l)
}},childNode:function(n,q,p,o){o=o||"target";if(!n&&!q){return}if(!b(n,m)){throw new TypeError(p+": "+o+i)
}},insertNode:function(n,q,p,o){o=o||"node";if(!n&&!q){return}if(!b(n,j)){throw new TypeError(p+": "+o+d)
}},hasParentNode:function(n,p,o){o=o||"target";if(!n.parentNode){throw new TypeError(p+": "+o+a)
}}}},{"./isNodeType":389,"./nodeTypes":390}],392:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./helpers/validate":391}],393:[function(c,d,a){var f=c("./helpers/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./helpers/validate":391}],394:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./helpers/validate":391}],395:[function(b,c,a){var d=b("./helpers/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./helpers/validate":391}],396:[function(c,d,a){var g=c("./helpers/isNodeType");
var f=c("./helpers/nodeTypes").COMMENT_NODE;d.exports=function b(h){return g(h,f)
}},{"./helpers/isNodeType":389,"./helpers/nodeTypes":390}],397:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":389,"./helpers/nodeTypes":390}],398:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_FRAGMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":389,"./helpers/nodeTypes":390}],399:[function(b,c,a){var g=b("./helpers/isNodeType");
var f=b("./helpers/nodeTypes").DOCUMENT_TYPE_NODE;c.exports=function d(h){return g(h,f)
}},{"./helpers/isNodeType":389,"./helpers/nodeTypes":390}],400:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").ELEMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":389,"./helpers/nodeTypes":390}],401:[function(b,c,a){c.exports=b(95)
},{}],402:[function(b,c,a){c.exports=b(96)},{}],403:[function(c,d,a){var g=c("./helpers/isNodeType");
var b=c("./helpers/nodeTypes").TEXT_NODE;d.exports=function f(h){return g(h,b)}
},{"./helpers/isNodeType":389,"./helpers/nodeTypes":390}],404:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g){f.childNode(g,true,"remove");if(!g.parentNode){return g
}return g.parentNode.removeChild(g)}},{"./helpers/validate":391}],405:[function(b,d,a){var f=b("./helpers/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./helpers/validate":391}],406:[function(b,c,a){c.exports=b(124)},{"./ac-prefixer/Prefixer":407}],407:[function(b,c,a){c.exports=b(125)
},{"./Prefixer/camelCasedEvents":408}],408:[function(b,c,a){c.exports=b(126)},{}],409:[function(b,c,a){c.exports={canvasAvailable:b("./ac-feature/canvasAvailable"),continuousScrollEventsAvailable:b("./ac-feature/continuousScrollEventsAvailable"),cookiesAvailable:b("./ac-feature/cookiesAvailable"),cssLinearGradientAvailable:b("./ac-feature/cssLinearGradientAvailable"),cssPropertyAvailable:b("./ac-feature/cssPropertyAvailable"),isDesktop:b("./ac-feature/isDesktop"),isHandheld:b("./ac-feature/isHandheld"),isRetina:b("./ac-feature/isRetina"),isTablet:b("./ac-feature/isTablet"),localStorageAvailable:b("./ac-feature/localStorageAvailable"),sessionStorageAvailable:b("./ac-feature/sessionStorageAvailable"),svgAvailable:b("./ac-feature/svgAvailable"),threeDTransformsAvailable:b("./ac-feature/threeDTransformsAvailable"),touchAvailable:b("./ac-feature/touchAvailable")}
},{"./ac-feature/canvasAvailable":410,"./ac-feature/continuousScrollEventsAvailable":411,"./ac-feature/cookiesAvailable":412,"./ac-feature/cssLinearGradientAvailable":413,"./ac-feature/cssPropertyAvailable":414,"./ac-feature/isDesktop":415,"./ac-feature/isHandheld":416,"./ac-feature/isRetina":417,"./ac-feature/isTablet":418,"./ac-feature/localStorageAvailable":419,"./ac-feature/sessionStorageAvailable":420,"./ac-feature/svgAvailable":421,"./ac-feature/threeDTransformsAvailable":422,"./ac-feature/touchAvailable":423}],410:[function(b,c,a){var f=null;
c.exports=function d(){var g;if(f===null){g=document.createElement("canvas");f=!!(typeof g.getContext==="function"&&g.getContext("2d"))
}return f}},{}],411:[function(c,d,b){var h=c("ac-browser");var a=c("./touchAvailable");
var f=null;d.exports=function g(){if(f===null){f=(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}return f}},{"./touchAvailable":423,"ac-browser":58}],412:[function(d,f,c){var a=Object.prototype.hasOwnProperty;
var g=null;f.exports=function b(){if(g===null){g=false;try{if("cookie" in document&&!!navigator.cookieEnabled){document.cookie="ac_feature_cookie=1";
g=(document.cookie.indexOf("ac_feature_cookie")!==-1);document.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(h){}}return g}},{}],413:[function(d,f,c){var a=d("./cssPropertyAvailable");
var g=null;f.exports=function b(){var h;if(g===null){h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
g=h.some(function(i){return a("background-image",i)})}return g}},{"./cssPropertyAvailable":414}],414:[function(c,d,b){var f=c("ac-prefixer");
d.exports=function a(h,g){if(g){return !!f.getStyleValue(h,g)}else{return !!f.getStyleProperty(h)
}}},{"ac-prefixer":406}],415:[function(f,g,c){var b=f("./touchAvailable");var a=null;
g.exports=function d(){if(a===null){a=(!b()&&!window.orientation)}return a}},{"./touchAvailable":423}],416:[function(g,h,d){var f=g("./isDesktop");
var b=g("./isTablet");var a=null;h.exports=function c(){if(a===null){a=(!f()&&!b())
}return a}},{"./isDesktop":415,"./isTablet":418}],417:[function(b,c,a){c.exports=function d(){var f=["min-device-pixel-ratio:1.5","-webkit-min-device-pixel-ratio:1.5","min-resolution:1.5dppx","min-resolution:144dpi","min--moz-device-pixel-ratio:1.5"];
var g;if(window.devicePixelRatio!==undefined){if(window.devicePixelRatio>=1.5){return true
}}else{for(g=0;g<f.length;g+=1){if(window.matchMedia("("+f[g]+")").matches===true){return true
}}}return false}},{}],418:[function(f,g,c){var d=f("./isDesktop");var b=null;var h=function(){if(typeof window.orientation==="undefined"){return window.screen.width
}return window.screen.width<window.screen.height?window.screen.width:window.screen.height
};g.exports=function a(){if(b===null){b=(!d()&&h()>=600)}return b}},{"./isDesktop":415}],419:[function(c,d,a){var f=null;
d.exports=function b(){if(f===null){f=false;try{f=!!(window.localStorage&&window.localStorage.non_existent!==null)
}catch(g){}}return f}},{}],420:[function(c,d,b){var f=null;d.exports=function a(){if(f===null){try{if(typeof window.sessionStorage!=="undefined"&&typeof window.sessionStorage.setItem==="function"){window.sessionStorage.setItem("ac_browser_detect","test");
f=true;window.sessionStorage.removeItem("ac_browser_detect","test")}else{f=false
}}catch(g){f=false}}return f}},{}],421:[function(c,d,b){var f=null;d.exports=function a(){if(f===null){f=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}return f}},{}],422:[function(c,d,b){var a=c("./cssPropertyAvailable");var g=null;
d.exports=function f(){if(g===null){g=(a("perspective","1px")&&a("transform","translateZ(0)"))
}return g}},{"./cssPropertyAvailable":414}],423:[function(c,d,b){var f=null;d.exports=function a(){if(f===null){f=!!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch)
}return f}},{}],424:[function(b,c,a){c.exports=b(16)},{}],425:[function(b,c,a){c.exports=b(17)
},{"./ac-object/clone":426,"./ac-object/create":427,"./ac-object/defaults":428,"./ac-object/extend":429,"./ac-object/getPrototypeOf":430,"./ac-object/isDate":431,"./ac-object/isEmpty":432,"./ac-object/isRegExp":433,"./ac-object/toQueryParameters":434}],426:[function(b,c,a){c.exports=b(18)
},{"./extend":429}],427:[function(b,c,a){c.exports=b(19)},{}],428:[function(b,c,a){c.exports=b(20)
},{"./extend":429}],429:[function(b,c,a){c.exports=b(21)},{}],430:[function(b,c,a){c.exports=b(22)
},{}],431:[function(b,c,a){c.exports=b(23)},{}],432:[function(b,c,a){c.exports=b(24)
},{}],433:[function(b,c,a){c.exports=b(25)},{}],434:[function(b,c,a){c.exports=b(26)
},{qs:424}],435:[function(b,c,a){var d=b("./ac-modal-video/ModalVideo");d.create=b("./ac-modal-video/factory/create");
c.exports={ModalVideo:d}},{"./ac-modal-video/ModalVideo":436,"./ac-modal-video/factory/create":439}],436:[function(f,c,i){var d=f("ac-modal");
var a=f("ac-object");var n=f("ac-classlist");var o=f("ac-event-emitter").EventEmitter;
var b=f("./featureDetect/featureDetect");var h=f("./delegate/Default");var m=f("./delegate/Mobile");
var k=h;var l;var g={deepLink:false,playOnOpen:false,closeOnEnded:false,autoAppend:true};
var j=function(q,p){this.options=a.defaults(g,p||{});this.modal=this.options.modal||new d.Modal();
this._delegate=this._createDelegate();this.setPlayer(q);if(this.options.autoAppend){this.appendPlayer(q)
}n.add(this.modal.modalEl,"ac-modal-video");this.modal.propagateTo(this);this.modal.on("willclose",this._willClose,this)
};l=j.prototype=a.create(o.prototype);l._createDelegate=function(){var q;var p=h;
if(b.shouldPlayInModal()===false){p=m}return new p(this.player,this.modal,this.options)
};l.appendPlayer=function(p){var q=document.createElement("div");p.appendTo(q);
this.modal.appendContent(q)};l.getPlayer=function(){return this._delegate.getPlayer()
};l.setPlayer=function(p){return this._delegate.setPlayer(p)};l.open=function(){this._delegate.open()
};l.close=function(){this._delegate.close()};l._willClose=function(){this._delegate.willClose()
};l._pause=function(){this._delegate.pause()};c.exports=j},{"./delegate/Default":437,"./delegate/Mobile":438,"./featureDetect/featureDetect":441,"ac-classlist":358,"ac-event-emitter":284,"ac-modal":485,"ac-object":425}],437:[function(c,d,a){function b(h,i,g){this.player=h;
this.modal=i;this.options=g}var f=b.prototype;f.pause=function(){if(this.player&&this.player.getReadyState()>0){this.player.pause()
}};f.play=function(){if(this.player&&this.player.getReadyState()>0){this.player.play()
}else{this.player.once("loadedmetadata",this.player.play,this.player)}};f._bindPlayerEvents=function(){this.player.on("ended",this._onEnded,this)
};f._unbindPlayerEvents=function(){this.player.off("ended",this._onEnded,this);
this.player.off("loadedmetadata",this.player.play,this.player);this.player.off("timeupdate",this.pause,this);
this.player.off("play",this.pause,this)};f.open=function(){if(this.player&&this.player.has("timeupdate",this._onTimeUpdateOnce)){this.player.off("timeupdate",this._onTimeUpdateOnce)
}this.modal.open();if(this.player&&this.player.getPaused()){this.player.off("play",this.pause);
if(this.options.playOnOpen){this.play()}}};f.getPlayer=function(){return this.player
};f.setPlayer=function(g){if(this.player){this._unbindPlayerEvents()}this.player=g;
this._bindPlayerEvents()};f.close=function(){this.modal.close()};f.willClose=function(){if(this.player&&this.player.isFullscreen()){this.player.exitFullscreen()
}if(this.player&&this.player.getReadyState()>0){if(this.player.getEnded()===false){this.pause()
}}else{if(this.player){this.player.on("play",this.pause,this)}}if(this.player&&this.player.getEnded()===false){this.player.on("timeupdate",this._onTimeUpdateOnce,this)
}};f._onEnded=function(){if(this.options.closeOnEnded){this.close()}};f._onTimeUpdateOnce=function(){this.pause();
this.player.off("timeupdate",this._onTimeUpdateOnce)};d.exports=b},{}],438:[function(c,f,a){var b=c("ac-object");
var h=c("./Default");function d(){h.apply(this,arguments)}var g=d.prototype=b.create(h.prototype);
g.open=function(){this.player.play()};f.exports=d},{"./Default":437,"ac-object":425}],439:[function(d,f,b){var h=d("./../ModalVideo");
var g=d("ac-dom-emitter").DOMEmitter;var a=d("./router");f.exports=function c(l,k){k=k||{};
var j=new h(l,k);var i;if(k.deepLink){i=a.createOrGet();i.createRoute(k.deepLink,j.open,j);
i.start()}if(k.triggerSelector){var m=new g(document);m.on("click",k.triggerSelector,function(n){n.preventDefault();
j.open()},j)}return j}},{"./../ModalVideo":436,"./router":440,"ac-dom-emitter":383}],440:[function(d,f,c){var b=d("ac-router");
var a=null;f.exports={create:function(){a=new b.Router({hashChange:true,pushState:false})
},get:function(){return a},destroy:function(){a=null},createOrGet:function(){if(a===null){this.create()
}return this.get()}}},{"ac-router":490}],441:[function(c,d,b){var a=c("ac-feature");
d.exports={shouldPlayInModal:function(){return(a.isTablet()||a.isDesktop())}}},{"ac-feature":409}],442:[function(b,c,a){c.exports=b(358)
},{"./ac-classlist/add":443,"./ac-classlist/contains":444,"./ac-classlist/remove":446,"./ac-classlist/toggle":447}],443:[function(b,c,a){c.exports=b(359)
},{"./helpers/className":445}],444:[function(b,c,a){c.exports=b(360)},{"./helpers/className":445}],445:[function(b,c,a){c.exports=b(361)
},{}],446:[function(b,c,a){c.exports=b(362)},{"./helpers/className":445}],447:[function(b,c,a){c.exports=b(363)
},{"./helpers/className":445}],448:[function(b,c,a){c.exports=b(124)},{"./ac-prefixer/Prefixer":449}],449:[function(b,c,a){c.exports=b(125)
},{"./Prefixer/camelCasedEvents":450}],450:[function(b,c,a){c.exports=b(126)},{}],451:[function(b,c,a){c.exports=b(348)
},{"./ac-dom-events/addEventListener":452,"./ac-dom-events/dispatchEvent":453,"./ac-dom-events/removeEventListener":454,"./ac-dom-events/stop":455,"./ac-dom-events/target":456}],452:[function(b,c,a){c.exports=b(128)
},{"ac-prefixer":448}],453:[function(b,c,a){c.exports=b(129)},{}],454:[function(b,c,a){c.exports=b(131)
},{"ac-prefixer":448}],455:[function(b,c,a){c.exports=b(352)},{}],456:[function(b,c,a){c.exports=b(353)
},{}],457:[function(b,c,a){c.exports=b(74)},{}],458:[function(b,c,a){c.exports=b(75)
},{}],459:[function(b,c,a){c.exports=b(76)},{}],460:[function(b,c,a){c.exports=b(77)
},{}],461:[function(b,c,a){c.exports=b(78)},{}],462:[function(b,c,a){c.exports=b(79)
},{}],463:[function(b,c,a){c.exports=b(80)},{}],464:[function(b,c,a){c.exports=b(81)
},{"./ELEMENT_NODE":461,"./internal/isNodeType":471,"ac-polyfills/Array/prototype.filter":481,"ac-polyfills/Array/prototype.slice":482}],465:[function(b,c,a){c.exports=b(82)
},{}],466:[function(b,c,a){c.exports=b(83)},{"./COMMENT_NODE":457,"./DOCUMENT_FRAGMENT_NODE":458,"./DOCUMENT_NODE":459,"./DOCUMENT_TYPE_NODE":460,"./ELEMENT_NODE":461,"./TEXT_NODE":462,"./createDocumentFragment":463,"./filterByNodeType":464,"./hasAttribute":465,"./insertAfter":467,"./insertBefore":468,"./insertFirstChild":469,"./insertLastChild":470,"./isComment":473,"./isDocument":474,"./isDocumentFragment":475,"./isDocumentType":476,"./isElement":477,"./isNode":478,"./isNodeList":479,"./isTextNode":480,"./remove":483,"./replace":484}],467:[function(b,c,a){c.exports=b(84)
},{"./internal/validate":472}],468:[function(b,c,a){c.exports=b(85)},{"./internal/validate":472}],469:[function(b,c,a){c.exports=b(86)
},{"./internal/validate":472}],470:[function(b,c,a){c.exports=b(87)},{"./internal/validate":472}],471:[function(b,c,a){c.exports=b(88)
},{"../isNode":478}],472:[function(b,c,a){c.exports=b(89)},{"../COMMENT_NODE":457,"../DOCUMENT_FRAGMENT_NODE":458,"../ELEMENT_NODE":461,"../TEXT_NODE":462,"./isNodeType":471}],473:[function(b,c,a){c.exports=b(90)
},{"./COMMENT_NODE":457,"./internal/isNodeType":471}],474:[function(b,c,a){c.exports=b(91)
},{"./DOCUMENT_NODE":459,"./internal/isNodeType":471}],475:[function(b,c,a){c.exports=b(92)
},{"./DOCUMENT_FRAGMENT_NODE":458,"./internal/isNodeType":471}],476:[function(b,c,a){c.exports=b(93)
},{"./DOCUMENT_TYPE_NODE":460,"./internal/isNodeType":471}],477:[function(b,c,a){c.exports=b(94)
},{"./ELEMENT_NODE":461,"./internal/isNodeType":471}],478:[function(b,c,a){c.exports=b(95)
},{}],479:[function(b,c,a){c.exports=b(96)},{}],480:[function(b,c,a){c.exports=b(97)
},{"./TEXT_NODE":462,"./internal/isNodeType":471}],481:[function(b,c,a){c.exports=b(98)
},{}],482:[function(b,c,a){c.exports=b(70)},{}],483:[function(b,c,a){c.exports=b(100)
},{"./internal/validate":472}],484:[function(b,c,a){c.exports=b(101)},{"./internal/validate":472}],485:[function(b,c,a){c.exports={Modal:b("./ac-modal/Modal")}
},{"./ac-modal/Modal":486}],486:[function(d,c,g){var b=d("ac-classlist");var l=d("ac-dom-styles");
var n=d("ac-dom-events");var m=d("ac-dom-nodes");var k=d("ac-dom-traversal");var f=d("ac-object");
var i=d("ac-keyboard");var o=i.keys;var p=d("ac-event-emitter").EventEmitter;var a=document.documentElement;
var h;function j(q){this.opened=false;this.closeButton=null;this.modalEl=null;this.contentEl=null;
this._keysToClose=[o.ESCAPE];this._keysToOpen=[];this._boundClose=this.close.bind(this);
this._generateElements();if(q){this.appendContent(q)}}var h=j.prototype=f.create(p.prototype);
h._getScrollX=function(){var r=window.pageXOffset;if(!r){var q=document.documentElement||document.body.parentNode||document.body;
r=q.scrollLeft}return r};h._getScrollY=function(){var r=window.pageYOffset;if(!r){var q=document.documentElement||document.body.parentNode||document.body;
r=q.scrollTop}return r};h.open=function(){this._scrollX=this._getScrollX();this._scrollY=this._getScrollY();
if(!this.opened){this._attachEvents();this.trigger("willopen");b.add(a,"modal-open");
this.opened=true;this.trigger("open")}};h.close=function(){this.trigger("willclose");
this._removeEvents();b.remove(a,"modal-open");this._returnToScrollPosition();this.opened=false;
this.trigger("close")};h.appendContent=function(q){if(q&&m.isElement(q)){this.contentEl.appendChild(q)
}else{throw new TypeError(q+" is not an Element")}};h.removeContent=function(q){if(this.contentEl.contains(q)){m.remove(q)
}};h.emptyContent=function(){var q=k.children(this.contentEl);q.forEach(m.remove)
};h.destroy=function(){};h.addKeyToClose=function(q){this._keysToClose.push(q);
i.addKeyUp(q,this.close,this)};h.removeKeyToClose=function(r){var q=this._keysToClose.indexOf(r);
if(q!==-1){this._keysToClose.splice(q,1)}i.removeKeyUp(r,this.close,this)};h._removeEvents=function(){n.removeEventListener(this.closeButton,"click",this._boundClose);
this._keysToClose.forEach(this.removeKeyToClose,this)};h._attachEvents=function(){n.addEventListener(this.closeButton,"click",this._boundClose);
this._keysToClose.forEach(this.addKeyToClose,this)};h._generateCloseButton=function(){var q=document.createElement("button");
b.add(q,"modal-close","icon","icon-closealt");return q};h._generateModalEl=function(){var q=document.createElement("div");
b.add(q,"modal");return q};h._createContentElement=function(){var q=document.createElement("div");
b.add(q,"modal-content");return q};h._generateElements=function(){this.closeButton=this._closeButton||this._generateCloseButton();
this.contentEl=this._createContentElement();this.modalEl=this._modalEl||this._generateModalEl();
this.modalEl.appendChild(this.closeButton);this.modalEl.appendChild(this.contentEl);
document.body.appendChild(this.modalEl);b.add(a,"has-modal")};h._returnToScrollPosition=function(){window.scrollTo(this._scrollX||0,this._scrollY||0)
};c.exports=j},{"ac-classlist":442,"ac-dom-events":451,"ac-dom-nodes":466,"ac-dom-styles":138,"ac-dom-traversal":172,"ac-event-emitter":284,"ac-keyboard":354,"ac-object":906}],487:[function(b,c,a){c.exports={Routes:b("./ac-routes/Routes"),Route:b("./ac-routes/Route")}
},{"./ac-routes/Route":488,"./ac-routes/Routes":489}],488:[function(b,c,a){function f(i,k,h,j,g){this.path=i;
this.callback=k;this.context=h;this.greedy=j||false;this.priority=g||0;if(typeof this.priority!=="number"){throw new Error("Priority must be a Number.")
}this.identifierPattern="([a-zA-Z0-9\\-\\_]+)";this.tokensRe=new RegExp(":"+this.identifierPattern,"g");
this.matcher=this._createRouteMatcher(i)}var d=f.prototype;d._createRouteMatcher=function(h){if(h&&h.exec){return{pattern:h}
}else{if(h==="/"){return{pattern:/^\/$/}}else{if(typeof h!=="string"){throw new Error("path must be either a string or regex")
}}}var g=this._extractRouteTokens(h);var j=h.replace(this.tokensRe,this.identifierPattern);
var i=new RegExp(j,"g");return{pattern:i,routeTokens:g}};d._extractRouteTokens=function(j){var g=j.replace(this.tokensRe,":"+this.identifierPattern);
var i=new RegExp(g,"g");var h=i.exec(j);if(h&&h.length>1){h=h.slice(1)}else{h=null
}return h};d.match=function(h){this.matcher.pattern.lastIndex=0;var g=this.matcher.pattern.exec(h);
if(g){var i=(g.length)?g.slice(1):[];var j=this.callback;if(j&&typeof j==="function"){j.apply(this.context||this,i);
return true}}return false};c.exports=f},{}],489:[function(c,d,b){var g=c("./Route");
function a(h){this._routes={};if(h){this.addRoutes(h)}}var f=a.prototype;f._getIndex=function(k,l,j){if(this._routes[k]!==undefined){var h=this._routes[k].length;
while(--h>-1){if(this._routes[k][h].callback===l&&this._routes[k][h].context===j){return h
}}}return -1};f.match=function(k){var j,h;for(j in this._routes){h=this._routes[j].length;
while(--h>-1){if(this._routes[j][h].match(k)&&this._routes[j][h].greedy){break}}}};
f.add=function(j){if(this._routes[j.path]===undefined){this._routes[j.path]=[j]
}else{if(!this.get(j.path,j.callback,j.context)){var k,h=this._routes[j.path].length;
if(h>0){for(k=0;k<h;++k){if(this._routes[j.path][k].priority>j.priority){this._routes[j.path].splice(k,0,j);
return j}}}this._routes[j.path].push(j)}}return j};f.remove=function(h){var j=this._getIndex(h.path,h.callback,h.context);
if(j>-1){this._routes[h.path].splice(j,1);return h}return false};f.get=function(k,l,j){var h=this._getIndex(k,l,j);
if(h>-1){return this._routes[k][h]}return false};f.createRoute=function(k,m,j,l,i){var h=new g(k,m,j,l,i);
this.add(h);return h};f.addRoutes=function(j){if(j instanceof Array){var l,k,h=j.length;
for(l=0;l<h;++l){k=j[l];if(k&&typeof k==="object"){this.add(k)}}}else{throw new Error("routes must be an Array.")
}};f.removeRoutes=function(j){if(j instanceof Array){var l,k,h=j.length;for(l=0;
l<h;++l){k=j[l];if(k&&typeof k==="object"){this.remove(k)}}}else{throw new Error("routes must be an Array.")
}};f.getRoutes=function(h){if(this._routes[h]===undefined){return[]}return this._routes[h]
};d.exports=a},{"./Route":488}],490:[function(b,c,a){c.exports={Router:b("./ac-router/Router"),History:b("./ac-router/History"),Routes:b("ac-routes").Routes,Route:b("ac-routes").Route}
},{"./ac-router/History":491,"./ac-router/Router":492,"ac-routes":487}],491:[function(b,c,a){var d=b("ac-base").Element;
var h=b("ac-event-emitter").EventEmitter;function g(j){j=j||{};this.history=window.history;
this.rootStripper=/^\/+|\/+$/g;this.root=j.root||"/";this.root=("/"+this.root+"/").replace(this.rootStripper,"/");
var i=j.resolveInitialHash===undefined?true:j.resolveInitialHash;this._pushState=j.pushState===undefined?true:this._pushState;
this._hashChange=j.hashChange||false;this._setUpdateVars(i);if(j.autoStart){this.start()
}}var f=g.prototype=new h();f._isRoot=function(i){return("/"+i+"/").replace(this.rootStripper,"/")===this.root
};f._isPushStateSupported=function(){return(this.history&&this.history.pushState)
};f._isHashChangeSupported=function(){return("onhashchange" in window)};f._setUpdateVars=function(j){if(this._pushState&&this._isPushStateSupported()){if(j&&this._hashChange&&window.location.href.indexOf("#")){this.history.pushState({},document.title,window.location.href.replace("#",""))
}this._hashChange=false}else{if(j&&this._pushState&&this._hashChange&&window.location.href.indexOf("#")<0){if(!window.location.origin){window.location.origin=window.location.protocol+"//"+window.location.hostname;
window.location.origin+=(window.location.port?":"+window.location.port:"")}var i=window.location.href.substr(window.location.origin.length+this.root.length);
if(i.length){window.location=window.location.origin+this.root+"#"+i;return}}if(this._hashChange&&!this._isHashChangeSupported()){this._interval=50;
this._iframe=document.createElement('<iframe src="javascript:0" tabindex="-1" style="display:none;">');
this._iframe=document.body.appendChild(this._iframe).contentWindow;this._iframe.document.open().close()
}this._pushState=false}};f._checkUrl=function(){var i=this._iframe.location.hash.substr(1);
if(i.length===0){i="/"}if(this.fragment()!==i){window.location.hash="#"+(i==="/"?"":i);
this._ignoreHashChange=false;this._handleHashChange()}};f._handlePopState=function(i){this.trigger("popstate",{fragment:this.fragment()})
};f._handleHashChange=function(i){if(this._ignoreHashChange){this._ignoreHashChange=false;
return}this.trigger("popstate",{fragment:this.fragment()})};f.canUpdate=function(){return this._pushState||this._hashChange
};f.start=function(){if(!this.started&&(this._pushState||this._hashChange)){this.started=true;
if(this._pushState){this._handlePopState=this._handlePopState.bind(this);d.addEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){this._handleHashChange=this._handleHashChange.bind(this);
d.addEventListener(window,"hashchange",this._handleHashChange)}else{this._iframe.location.hash=this.fragment();
this._checkUrl=this._checkUrl.bind(this);this._checkUrlInterval=setInterval(this._checkUrl,this._interval)
}}}}return this.started||false};f.stop=function(){if(this.started){this.started=false;
if(this._pushState){d.removeEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){d.removeEventListener(window,"hashchange",this._handleHashChange)
}else{if(this._checkUrlInterval){clearInterval(this._checkUrlInterval);this._checkUrlInterval=null
}}}}}};f.navigate=function(k,j){if(!this.started||!this.canUpdate()){return false
}j=j||{};k=(k==="/"&&this.root!=="/")?"":k;var i=((this._isRoot(k)?"":this.root)+k).replace("//","/");
if(this._pushState){this.history.pushState(j,document.title,i)}else{if(this._hashChange){this._ignoreHashChange=true;
window.location.hash="#"+k;if(!this._isHashChangeSupported()){this._iframe.document.open().close();
this._iframe.location.hash="#"+k}}}return true};f.fragment=function(){var i="";
if(this._pushState){i=(window.location.pathname).substr(this.root.length)}else{if(this._hashChange){i=window.location.hash.substr(1)
}}return i===""?"/":i};c.exports=g},{"ac-base":false,"ac-event-emitter":284}],492:[function(d,b,g){var i=d("ac-base").Element;
var f=d("./History");var j=d("ac-routes").Route;var a=d("ac-routes").Routes;function c(k){k=k||{};
this._intercept=k.intercept||"[data-route]";this._interceptAttribute=k.attribute||"href";
this._handleTrigger=this._handleTrigger.bind(this);this.intercept(this._intercept);
this.history=k.history||new f({root:k.root,autoStart:k.autoStart,pushState:k.pushState,hashChange:k.hashChange,resolveInitialHash:k.resolveInitialHash});
a.call(this,k.routes);if(k.autoStart){if(!this.history.started){this.history.start()
}this.start()}}var h=c.prototype=new a();h._handleTrigger=function(m){if(!this.started){return
}var n=m.currentTarget;var l=n.getAttribute(this._interceptAttribute);if(l){if(/^(http|https):\/\/+/.exec(l)&&this._interceptAttribute==="href"){l=l.substr(l.indexOf(this.history.root)+this.history.root.length)||"/"
}var k=m.originalEvent;if(this.navigate(l)&&k){if(k.preventDefault){k.preventDefault()
}else{k.returnValue=false}}}};h._handlePopstate=function(k){this.navigate(k.fragment,true)
};h.start=function(){if(!this.started){this.started=true;this.history.start();this._handlePopstate=this._handlePopstate.bind(this);
this.history.on("popstate",this._handlePopstate);this.navigate(this.history.fragment(),true)
}};h.stop=function(){if(this.started){this.started=false;this.history.stop();this.history.off("popstate",this._handlePopstate)
}};h.navigate=function(l,k){if(this.history.fragment()===l&&!k){return this.history.canUpdate()
}if(l&&!k){if(!this.history.navigate(l)){return false}}this.match(l);return true
};h.intercept=function(l){var k=document.body;i.addEventDelegate(k,"click",l,this._handleTrigger)
};b.exports=c},{"./History":491,"ac-base":false,"ac-routes":487}],493:[function(c,g,b){var f=c("./Request");
var h=c("./XDomain-request");var a=c("./URLParser");var d=function(){};d._Request=f;
d.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]},_getOptions:function(i,j){return this._extend({},this._defaults,j,i)
},_isCrossDomainRequest:function(l){var k=new a();var j=k.parse(window.location.href).origin;
var i=k.parse(l).origin;k.destroy();return(i!==j)},create:function(i){return new f(i)
},cors:function(j){var i=(window.XDomainRequest&&document.documentMode<10)?h:f;
return new i(j)},get:function(j){var i;j=this._getOptions({method:"get"},j);if(this._isCrossDomainRequest(j.url)){i=this.cors(j)
}else{i=this.create(j)}return i.send()},getJSON:function(i){return this.get(i).then(function(j){return JSON.parse(j.responseText)
})},head:function(i){i=this._getOptions({method:"head"},i);return this.create(i).send()
},isCrossDomainRequest:function(i){return this._isCrossDomainRequest(i)},post:function(i){i=this._getOptions({method:"post"},i);
return this.create(i).send()}};g.exports=d},{"./Request":494,"./URLParser":495,"./XDomain-request":496}],494:[function(b,c,a){c.exports=b(9)
},{}],495:[function(b,c,a){c.exports=b(10)},{}],496:[function(b,d,a){var c=b("./Request");
var f=function(g){c.apply(this,arguments)};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};f.prototype._sendXHR=function(){setTimeout(function(){c.prototype._sendXHR.call(this)
}.bind(this),0)};d.exports=f},{"./Request":494}],497:[function(b,c,a){arguments[4][12][0].apply(a,arguments)
},{"./ac-ajax/Ajax":493,"./ac-ajax/Request":494}],498:[function(b,c,a){c.exports=b(16)
},{}],499:[function(b,c,a){c.exports={isString:b("./ac-string/isString"),toCamelCase:b("./ac-string/toCamelCase"),queryStringToObject:b("./ac-string/queryStringToObject"),toQueryPair:b("./ac-string/toQueryPair"),queryParameters:b("./ac-string/queryParameters"),supplant:b("./ac-string/supplant")}
},{"./ac-string/isString":500,"./ac-string/queryParameters":501,"./ac-string/queryStringToObject":502,"./ac-string/supplant":503,"./ac-string/toCamelCase":504,"./ac-string/toQueryPair":505}],500:[function(c,d,b){d.exports=function a(f){return(typeof f==="string")
}},{}],501:[function(d,f,c){var a=d("./queryStringToObject");f.exports=function b(){var g={};
var h=window.location.toString().split("?")[1];if(typeof h==="string"){g=a(h)}return g
}},{"./queryStringToObject":502}],502:[function(d,f,c){var a=d("qs");f.exports=function b(g){if(typeof g!=="string"){throw new TypeError("QueryStringToObject error: argument must be a string")
}return a.parse(g)}},{qs:498}],503:[function(b,c,a){c.exports=function d(h,g,f){if(!g){return h
}f=f||/{([^{}]*)}/g;return h.replace(f,function(j,i){var k=g[i];return typeof k==="string"||typeof k==="number"?k:j
})}},{}],504:[function(b,c,a){c.exports=function d(f){if(typeof f!=="string"){throw new TypeError("Argument must be of type String.")
}return f.replace(/-+(.)?/g,function(g,h){return h?h.toUpperCase():""})}},{}],505:[function(b,c,a){c.exports=function d(f,g){if(typeof f!=="string"||typeof g!=="string"){throw new TypeError("toQueryPair error: argument must be a string")
}return encodeURIComponent(f)+"="+encodeURIComponent(g)}},{}],506:[function(c,d,b){var a=c("./ac-vatman/vat-client");
var f=c("./ac-vatman/vat-resource");var g={createPlayer:c("./ac-vatman/factory/createPlayer"),vatClient:a,vatResource:f};
d.exports=g},{"./ac-vatman/factory/createPlayer":507,"./ac-vatman/vat-client":512,"./ac-vatman/vat-resource":513}],507:[function(c,a,g){var l=c("./../featureDetection/canPlayType");
var d=c("./../featureDetection/canPlayTypeNatively");var j=c("./../featureDetection/canPlayTypeQuicktime");
var k=c("ac-browser");function h(n,m){m.type="quicktime";return n.create(m)}function i(n,m){return n.create(m)
}function f(){var m=this.getTextTracks();var p=m.models.length;var o=this.getTextTracks().at(p-1);
var n=this.getEnabledTextTracks();n.forEach(function(q){if(o!==q){q.disable()}});
if(o.get("mode")==="disabled"){o.hide()}}function b(p,o){o=o||{};var n="video/quicktime";
var m="video/mp4";var s=(k.name==="Firefox");var r=(k.name==="IE");var q;if(d(n)||d(m)&&(!r&&!s)){q=i(p,o)
}else{if(j(n)){o.type="quicktime";q=h(p,o)}}if(q){q.on("addtrack",f,q)}return q
}a.exports=b},{"./../featureDetection/canPlayType":508,"./../featureDetection/canPlayTypeNatively":509,"./../featureDetection/canPlayTypeQuicktime":510,"ac-browser":58}],508:[function(b,d,a){var f=b("./canPlayTypeNatively");
var c=b("./canPlayTypeQuicktime");function g(h){var i=f(h);if(!i){i=c(h)}return i
}d.exports=g},{"./canPlayTypeNatively":509,"./canPlayTypeQuicktime":510}],509:[function(c,d,b){var f;
function a(){return document.createElement("video")}d.exports=function g(i){var j="";
var h=a();if(typeof h.canPlayType==="function"){j=h.canPlayType(i)}return j}},{}],510:[function(c,f,b){var a=c("./quicktime");
f.exports=function d(g){var h="";if(g==="video/quicktime"&&a.getPluginVersion()!==undefined){h="maybe"
}return h}},{"./quicktime":511}],511:[function(b,c,a){c.exports={getPlugins:function(){return navigator.plugins
},getPluginVersion:function(){var j;var k=/(\d+\.){2}(\d+){1}$/;var d=this.getPlugins();
if(d&&d[0]){for(var h=0;h<d.length;h++){var f=(/QuickTime/i.test(d[h].name)&&typeof j==="undefined");
if(f){if(d[h].version){j=d[h].version}else{if(k.test(d[h].name)){j=d[h].name.match(k);
j=j[0]||undefined}}}}}else{var g=["QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1"];
g.forEach(function(l){var m;var i;try{m=new ActiveXObject(l);i=(typeof m==="object"&&typeof m.QuickTimeVersion!=="undefined"&&typeof j==="undefined");
if(i){j=m.QuickTimeVersion}}catch(n){}})}return j}}},{}],512:[function(d,b,g){var j=d("ac-ajax");
var h=d("ac-string");var k=/(-[a-z]{2}-([a-z]{2}-){0,})[0-9]{8}_r[0-9].+\.mov$/;
var a=/_r[0-9].+\.mov$/;var i=/((-([a-z]{2}))*)-[0-9]+/;var n=/((-([a-z]{2}))*)-/;
var c="m";var f="_{width}x{height}{suffix}."+c+"p4";var l=[{width:416,height:234,type:"baseline-high",suffix:"h"},{width:416,height:234,type:"small",suffix:"h"},{width:416,height:234,type:"baseline-low",suffix:"l"},{width:416,height:234,type:"baseline-medium",suffix:"m"},{width:640,height:360,type:"medium",suffix:"h"},{width:848,height:480,type:"large",suffix:""}];
var o={create:function(){var m=function(){};m.prototype=this;return new m()},getSource:function(m,q,p){var s=l;
if(!m){throw"Must provide a vatRefMovie"}if(!q){throw"Must provide a width"}if(p){s=s.filter(function(t){return t.type===p
})}var r=s.reduce(function(t,u){return Math.abs(u.width-q)<Math.abs(t.width-q)?u:t
});return m.replace(a,h.supplant(f,r))},getConfigPath:function(m){return m.replace(k,"-current.json")
},getConfig:function(m){return j.getJSON({url:this.getConfigPath(m)})},getVTTSource:function(m){return m.replace(a,"_cc.vtt")
}};b.exports=o},{"ac-ajax":497,"ac-string":499}],513:[function(c,d,b){var a=c("./vat-client");
var h=c("ac-browser");var g=(h.name==="Chrome");var f={create:function(j){if(!j){throw"Must provide a vatRefMovie."
}var k=function(){};k.prototype=this;var i=new k();i.vatRefMovie=j;return i},getSource:function(j,i){return a.getSource(this.vatRefMovie,j,i)
},getConfig:function(){return a.getConfig(this.vatRefMovie)},getVTTSource:function(){return a.getVTTSource(this.vatRefMovie)
},_handleCaptions:function(i){var j;this.getConfig().then(function(k){if(!k.metadata.captions){return
}if(g){j=this.getVTTSource()}if(j){i.addTextTrackFromRemoteVTT({src:j,mode:"hidden"})
}}.bind(this))},setPlayerSrc:function(i,k){var j=this.vatRefMovie;if(g){j=this.getSource(k)
}i.setSrc(j);this._handleCaptions(i)}};d.exports=f},{"./vat-client":512,"ac-browser":58}],514:[function(b,c,a){c.exports={localization:b("./ac-video-localization/localization")}
},{"./ac-video-localization/localization":515}],515:[function(b,c,a){var h=b("./translations");
var g="/global/ac_media_player/scripts/ac_media_languages/";var f=document.getElementsByTagName("html")[0];
var d=b("ac-mvc-model").Model;var i={create:function(k){k=k||this.getLang();var j=this.getRequestPath(k);
return this.sendRequest(j)},getRequestPath:function(j){return g+this.getTranslationFileName(j)
},getLang:function(){var j=f.getAttribute("lang");var k;if(!j){k="en-us"}else{switch(j.toLowerCase()){case"es-418":k="es-LA";
break;case"pt":k="pt-BR";break;default:k=j;break}}return k},getTranslationFileName:function(j){var l=j.toLowerCase().split("-")[0];
var k=h[j]||false;if(!k){k=h[l]||h.en}return k},sendRequest:function(j){return new Promise(function(m,l){var k=new XMLHttpRequest();
k.onreadystatechange=function(){if(k.readyState===4){if(k.status>=200&&k.status<300){try{var n=JSON.parse(k.responseText);
for(var p in n){n[p].replace(/<br\s{0,}\/>/g,"")}m(new d(n))}catch(o){l(o)}}else{l(k)
}}};k.open("GET",j);k.send()})}};c.exports=i},{"./translations":516,"ac-mvc-model":903}],516:[function(b,c,a){c.exports={"bg-BG":"bg-BG.json","cs-CZ":"cs-CZ.json","el-GR":"el-GR.json","de-AT":"de-AT.json","de-CH":"de-CH.json","de-DE":"de-DE.json","de-LI":"de-LI.json","da-DK":"da-DK.json",en:"en.json","en-US":"en-US.json","en-AP":"en-AP.json","en-CA":"en-CA.json","en-GB":"en-GB.json","en-HK":"en-HK.json","en-IE":"en-IE.json","en-IN":"en-IN.json","en-KR":"en-KR.json","en-AU":"en-AU.json","en-NZ":"en-NZ.json","en-SG":"en-SG.json","en-ZA":"en-ZA.json",es:"es.json","es-LA":"es-LA.json","es-MX":"es-MX.json","es-ES":"es-ES.json","et-EE":"et-EE.json","fi-FI":"fi-FI.json",fr:"fr.json","fr-BE":"fr-BE.json","fr-CA":"fr-CA.json","fr-CH":"fr-CH.json","fr-FR":"fr-FR.json","hr-HR":"hr-HR.json","hu-HU":"hu-HU.json","it-IT":"it-IT.json",ja:"ja.json","ja-JP":"ja-JP.json","ko-KR":"ko-KR.json","lt-LT":"lt-LT.json","lv-LV":"lv-LV.json","nl-BE":"nl-BE.json","nl-NL":"nl-NL.json","no-NO":"no-NO.json","pl-PL":"pl-PL.json",pt:"pt.json","pt-BR":"pt-BR.json","pt-PT":"pt-PT.json","ro-RO":"ro-RO.json","ru-RU":"ru-RU.json","sk-SK":"sk-SK.json","sv-SE":"sv-SE.json","tr-TR":"tr-TR.json",zh:"zh.json","zh-CN":"zh-CN.json","zh-HK":"zh-HK.json","zh-TW":"zh-TW.json"}
},{}],517:[function(b,c,a){c.exports=b(358)},{"./ac-classlist/add":518,"./ac-classlist/contains":519,"./ac-classlist/remove":521,"./ac-classlist/toggle":522}],518:[function(b,c,a){c.exports=b(359)
},{"./helpers/className":520}],519:[function(b,c,a){c.exports=b(360)},{"./helpers/className":520}],520:[function(b,c,a){c.exports=b(361)
},{}],521:[function(b,c,a){c.exports=b(362)},{"./helpers/className":520}],522:[function(b,c,a){c.exports=b(363)
},{"./helpers/className":520}],523:[function(d,f,c){var b=d("./ac-dom-nodes/helpers/nodeTypes");
var g;var a={createDocumentFragment:d("./ac-dom-nodes/createDocumentFragment"),filterByNodeType:d("./ac-dom-nodes/filterByNodeType"),insertAfter:d("./ac-dom-nodes/insertAfter"),insertBefore:d("./ac-dom-nodes/insertBefore"),insertFirstChild:d("./ac-dom-nodes/insertFirstChild"),insertLastChild:d("./ac-dom-nodes/insertLastChild"),isComment:d("./ac-dom-nodes/isComment"),isDocument:d("./ac-dom-nodes/isDocument"),isDocumentFragment:d("./ac-dom-nodes/isDocumentFragment"),isDocumentType:d("./ac-dom-nodes/isDocumentType"),isElement:d("./ac-dom-nodes/isElement"),isNode:d("./ac-dom-nodes/isNode"),isTextNode:d("./ac-dom-nodes/isTextNode"),remove:d("./ac-dom-nodes/remove"),replace:d("./ac-dom-nodes/replace")};
for(g in b){a[g]=b[g]}f.exports=a},{"./ac-dom-nodes/createDocumentFragment":524,"./ac-dom-nodes/filterByNodeType":525,"./ac-dom-nodes/helpers/nodeTypes":527,"./ac-dom-nodes/insertAfter":529,"./ac-dom-nodes/insertBefore":530,"./ac-dom-nodes/insertFirstChild":531,"./ac-dom-nodes/insertLastChild":532,"./ac-dom-nodes/isComment":533,"./ac-dom-nodes/isDocument":534,"./ac-dom-nodes/isDocumentFragment":535,"./ac-dom-nodes/isDocumentType":536,"./ac-dom-nodes/isElement":537,"./ac-dom-nodes/isNode":538,"./ac-dom-nodes/isTextNode":539,"./ac-dom-nodes/remove":540,"./ac-dom-nodes/replace":541}],524:[function(b,c,a){c.exports=b(387)
},{}],525:[function(b,c,a){arguments[4][388][0].apply(a,arguments)},{"./helpers/isNodeType":526,"./helpers/nodeTypes":527}],526:[function(b,c,a){arguments[4][389][0].apply(a,arguments)
},{"../isNode":538}],527:[function(b,c,a){c.exports=b(390)},{}],528:[function(b,c,a){arguments[4][391][0].apply(a,arguments)
},{"./isNodeType":526,"./nodeTypes":527}],529:[function(b,c,a){c.exports=b(392)
},{"./helpers/validate":528}],530:[function(b,c,a){c.exports=b(393)},{"./helpers/validate":528}],531:[function(b,c,a){c.exports=b(394)
},{"./helpers/validate":528}],532:[function(b,c,a){c.exports=b(395)},{"./helpers/validate":528}],533:[function(c,d,a){var g=c("./helpers/isNodeType");
var f=c("./helpers/nodeTypes").COMMENT_NODE;d.exports=function b(h){return g(h,f)
}},{"./helpers/isNodeType":526,"./helpers/nodeTypes":527}],534:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":526,"./helpers/nodeTypes":527}],535:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_FRAGMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":526,"./helpers/nodeTypes":527}],536:[function(b,c,a){var g=b("./helpers/isNodeType");
var f=b("./helpers/nodeTypes").DOCUMENT_TYPE_NODE;c.exports=function d(h){return g(h,f)
}},{"./helpers/isNodeType":526,"./helpers/nodeTypes":527}],537:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").ELEMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":526,"./helpers/nodeTypes":527}],538:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],539:[function(c,d,a){var g=c("./helpers/isNodeType");var b=c("./helpers/nodeTypes").TEXT_NODE;
d.exports=function f(h){return g(h,b)}},{"./helpers/isNodeType":526,"./helpers/nodeTypes":527}],540:[function(b,c,a){c.exports=b(404)
},{"./helpers/validate":528}],541:[function(b,c,a){c.exports=b(405)},{"./helpers/validate":528}],542:[function(b,c,a){c.exports=b(54)
},{"./ac-shared-instance/SharedInstance":543}],543:[function(b,c,a){c.exports=b(55)
},{}],544:[function(b,c,a){c.exports={CID:b("./ac-mvc-cid/CID")}},{"./ac-mvc-cid/CID":545}],545:[function(c,f,b){var a=c("ac-shared-instance").SharedInstance;
var g="ac-mvc-cid:CID",d="1.0.0";function i(){this._idCount=0}var h=i.prototype;
h._cidPrefix="cid";h.getNewCID=function(){var j=this._cidPrefix+"-"+this._idCount;
this._idCount++;return j};f.exports=a.share(g,d,i)},{"ac-shared-instance":542}],546:[function(b,c,a){c.exports=b(16)
},{}],547:[function(b,c,a){c.exports=b(17)},{"./ac-object/clone":548,"./ac-object/create":549,"./ac-object/defaults":550,"./ac-object/extend":551,"./ac-object/getPrototypeOf":552,"./ac-object/isDate":553,"./ac-object/isEmpty":554,"./ac-object/isRegExp":555,"./ac-object/toQueryParameters":556}],548:[function(b,c,a){c.exports=b(18)
},{"./extend":551}],549:[function(b,c,a){c.exports=b(19)},{}],550:[function(b,c,a){c.exports=b(20)
},{"./extend":551}],551:[function(b,c,a){c.exports=b(21)},{}],552:[function(b,c,a){c.exports=b(22)
},{}],553:[function(b,c,a){c.exports=b(23)},{}],554:[function(b,c,a){c.exports=b(24)
},{}],555:[function(b,c,a){c.exports=b(25)},{}],556:[function(b,c,a){c.exports=b(26)
},{qs:546}],557:[function(b,c,a){c.exports={View:b("./ac-mvc-view/View")}},{"./ac-mvc-view/View":558}],558:[function(d,b,g){var j=d("ac-dom-emitter").DOMEmitter;
var c=d("ac-mvc-cid").CID;var f=d("ac-object");var i=d("ac-dom-nodes");var k=d("ac-classlist");
function a(l){var n;var m;var o;this.options=f.defaults(this.defaultOptions,l||{});
this.cid=c.getNewCID();this.model=this.options.model;if(this.options.template){this.template=this.options.template
}n=this.options.tagName||this.tagName;m=this.options.element;o=this.options.className||this.className;
if(!m){m=document.createElement(n)}j.call(this,m);if(o){this.addClassName(o)}if(this.options.events){this.delegateEvents(this.options.events)
}}var h=a.prototype=f.create(j.prototype);h.tagName="div";h.defaultOptions={};h.getTagName=function(){return this.el.tagName.toLowerCase()
};h.appendTo=function(l){i.insertLastChild(this.el,l);return this};h.render=function(){};
h.addClassName=function(l){return this._manipulateClassName(l,"add")};h.removeClassName=function(l){return this._manipulateClassName(l,"remove")
};h._manipulateClassName=function(m,n){var l;if(typeof m==="string"){l=m.split(" ")
}else{if(typeof m==="object"&&Array.isArray(m)){l=m.slice()}else{return this}}l.unshift(this.el);
k[n].apply(this.el,l);return this};h.destroy=function(){this.emitterTrigger("destroy");
this.off();i.remove(this.el);var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null
}}};h.delegateEvents=function(m,n){n=n||this;var l,o;for(l in m){if(m.hasOwnProperty(l)){o=m[l];
if(typeof o==="string"){m[l]=this[m[l]]}}}this.on(m,n);return this};b.exports=a
},{"ac-classlist":517,"ac-dom-emitter":121,"ac-dom-nodes":523,"ac-mvc-cid":544,"ac-object":547}],559:[function(b,c,a){c.exports=b(16)
},{}],560:[function(b,c,a){c.exports=b(499)},{"./ac-string/isString":561,"./ac-string/queryParameters":562,"./ac-string/queryStringToObject":563,"./ac-string/supplant":564,"./ac-string/toCamelCase":565,"./ac-string/toQueryPair":566}],561:[function(b,c,a){c.exports=b(500)
},{}],562:[function(b,c,a){c.exports=b(501)},{"./queryStringToObject":563}],563:[function(b,c,a){c.exports=b(502)
},{qs:559}],564:[function(b,c,a){c.exports=b(503)},{}],565:[function(b,c,a){c.exports=b(504)
},{}],566:[function(b,c,a){c.exports=b(505)},{}],567:[function(b,c,a){c.exports={View:b("./ac-video-nosupportview/NoSupportView")}
},{"./ac-video-nosupportview/NoSupportView":568}],568:[function(d,f,a){var i=d("ac-mvc-view").View;
var c=d("ac-object");var b=d("ac-string");function h(){i.apply(this,arguments)}var g=h.prototype=c.create(i.prototype);
g.className=["ac-video-nosupport"];g.defaultOptions={template:'<a onclick="s_objectID=&quot;http://www.apple.com/quicktime/download/_1&quot;;return this.s_oc?this.s_oc(e):true" href="{downloadquicktimeurl}" class="ac-video-quicktime-download"><span class="ac-video-quicktime-download-title">{downloadquicktimetitle}</span><span class="ac-video-quicktime-download-text">{downloadquicktimetext}</span><span class="ac-video-quicktime-download-button">{downloadquicktimebutton}</span></a>'};
g.render=function(){this.el.innerHTML=b.supplant(this.options.template,this.model.attributes)
};f.exports=h},{"ac-mvc-view":557,"ac-object":906,"ac-string":560}],569:[function(b,c,a){c.exports=b(124)
},{"./ac-prefixer/Prefixer":570}],570:[function(b,c,a){c.exports=b(125)},{"./Prefixer/camelCasedEvents":571}],571:[function(b,c,a){c.exports=b(126)
},{}],572:[function(b,c,a){c.exports=b(127)},{"./ac-dom-events/addEventListener":573,"./ac-dom-events/dispatchEvent":574,"./ac-dom-events/preventDefault":575,"./ac-dom-events/removeEventListener":576,"./ac-dom-events/stop":577,"./ac-dom-events/stopPropagation":578,"./ac-dom-events/target":579}],573:[function(b,c,a){c.exports=b(128)
},{"ac-prefixer":569}],574:[function(b,c,a){c.exports=b(129)},{}],575:[function(b,c,a){c.exports=b(130)
},{}],576:[function(b,c,a){c.exports=b(131)},{"ac-prefixer":569}],577:[function(b,c,a){c.exports=b(132)
},{"./preventDefault":575,"./stopPropagation":578}],578:[function(b,c,a){c.exports=b(133)
},{}],579:[function(b,c,a){c.exports=b(134)},{}],580:[function(b,c,a){arguments[4][121][0].apply(a,arguments)
},{"./ac-dom-emitter/DOMEmitter":581}],581:[function(b,c,a){c.exports=b(384)},{"./DOMEmitterEvent":582,"ac-dom-events":572,"ac-dom-traversal":620,"ac-event-emitter":284}],582:[function(b,c,a){c.exports=b(123)
},{"ac-dom-events":572}],583:[function(b,c,a){c.exports=b(329)},{"./shared/getEventType":593,"./utils/addEventListener":597}],584:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":593,"./utils/dispatchEvent":598}],585:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":583,"./dispatchEvent":584,"./preventDefault":591,"./removeEventListener":592,"./stop":594,"./stopPropagation":595,"./target":596}],586:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],587:[function(b,c,a){c.exports=b(330)
},{"./shared/camelCasedEventTypes":588,"./shared/prefixHelper":589,"./utils/eventTypeAvailable":590}],588:[function(b,c,a){c.exports=b(331)
},{}],589:[function(b,c,a){c.exports=b(332)},{}],590:[function(b,c,a){c.exports=b(333)
},{}],591:[function(b,c,a){c.exports=b(130)},{}],592:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":593,"./utils/removeEventListener":599}],593:[function(b,c,a){c.exports=b(334)
},{"ac-prefixer/getEventType":587}],594:[function(b,c,a){c.exports=b(132)},{"./preventDefault":591,"./stopPropagation":595}],595:[function(b,c,a){c.exports=b(133)
},{}],596:[function(b,c,a){c.exports=function d(f){f=f||window.event;return(typeof f.target!=="undefined")?f.target:f.srcElement
}},{}],597:[function(b,c,a){c.exports=b(335)},{}],598:[function(b,c,a){b("ac-polyfills/CustomEvent");
c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
}else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"ac-polyfills/CustomEvent":586}],599:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],600:[function(b,c,a){c.exports=b(386)
},{"./ac-dom-nodes/createDocumentFragment":601,"./ac-dom-nodes/filterByNodeType":602,"./ac-dom-nodes/helpers/nodeTypes":604,"./ac-dom-nodes/insertAfter":606,"./ac-dom-nodes/insertBefore":607,"./ac-dom-nodes/insertFirstChild":608,"./ac-dom-nodes/insertLastChild":609,"./ac-dom-nodes/isComment":610,"./ac-dom-nodes/isDocument":611,"./ac-dom-nodes/isDocumentFragment":612,"./ac-dom-nodes/isDocumentType":613,"./ac-dom-nodes/isElement":614,"./ac-dom-nodes/isNode":615,"./ac-dom-nodes/isNodeList":616,"./ac-dom-nodes/isTextNode":617,"./ac-dom-nodes/remove":618,"./ac-dom-nodes/replace":619}],601:[function(b,c,a){c.exports=b(387)
},{}],602:[function(b,c,a){c.exports=b(388)},{"./helpers/isNodeType":603,"./helpers/nodeTypes":604}],603:[function(b,c,a){c.exports=b(389)
},{"../isNode":615}],604:[function(b,c,a){c.exports=b(390)},{}],605:[function(b,c,a){c.exports=b(391)
},{"./isNodeType":603,"./nodeTypes":604}],606:[function(b,c,a){c.exports=b(392)
},{"./helpers/validate":605}],607:[function(b,c,a){c.exports=b(393)},{"./helpers/validate":605}],608:[function(b,c,a){c.exports=b(394)
},{"./helpers/validate":605}],609:[function(b,c,a){c.exports=b(395)},{"./helpers/validate":605}],610:[function(b,c,a){c.exports=b(396)
},{"./helpers/isNodeType":603,"./helpers/nodeTypes":604}],611:[function(b,c,a){c.exports=b(397)
},{"./helpers/isNodeType":603,"./helpers/nodeTypes":604}],612:[function(b,c,a){c.exports=b(398)
},{"./helpers/isNodeType":603,"./helpers/nodeTypes":604}],613:[function(b,c,a){c.exports=b(399)
},{"./helpers/isNodeType":603,"./helpers/nodeTypes":604}],614:[function(b,c,a){c.exports=b(400)
},{"./helpers/isNodeType":603,"./helpers/nodeTypes":604}],615:[function(b,c,a){c.exports=b(95)
},{}],616:[function(b,c,a){c.exports=b(96)},{}],617:[function(b,c,a){c.exports=b(403)
},{"./helpers/isNodeType":603,"./helpers/nodeTypes":604}],618:[function(b,c,a){c.exports=b(404)
},{"./helpers/validate":605}],619:[function(b,c,a){c.exports=b(405)},{"./helpers/validate":605}],620:[function(b,c,a){arguments[4][102][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":621,"./ac-dom-traversal/ancestors":622,"./ac-dom-traversal/children":623,"./ac-dom-traversal/filterBySelector":624,"./ac-dom-traversal/firstChild":625,"./ac-dom-traversal/lastChild":628,"./ac-dom-traversal/matchesSelector":629,"./ac-dom-traversal/nextSibling":630,"./ac-dom-traversal/nextSiblings":631,"./ac-dom-traversal/previousSibling":632,"./ac-dom-traversal/previousSiblings":633,"./ac-dom-traversal/querySelector":634,"./ac-dom-traversal/querySelectorAll":635,"./ac-dom-traversal/shims/ie":636,"./ac-dom-traversal/siblings":637}],621:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{"./helpers/validate":627,"./matchesSelector":629,"ac-dom-nodes":600}],622:[function(b,c,a){arguments[4][104][0].apply(a,arguments)
},{"./helpers/validate":627,"./matchesSelector":629,"ac-dom-nodes":600}],623:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{"./filterBySelector":624,"./helpers/validate":627,"ac-dom-nodes":600}],624:[function(b,c,a){arguments[4][106][0].apply(a,arguments)
},{"./helpers/validate":627,"./matchesSelector":629}],625:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{"./children":623,"./helpers/validate":627}],626:[function(b,c,a){c.exports=b(108)
},{}],627:[function(b,c,a){arguments[4][109][0].apply(a,arguments)},{"ac-dom-nodes":600}],628:[function(b,c,a){arguments[4][110][0].apply(a,arguments)
},{"./children":623,"./helpers/validate":627}],629:[function(b,c,a){arguments[4][111][0].apply(a,arguments)
},{"./helpers/nativeMatches":626,"./helpers/validate":627,"ac-dom-nodes":600}],630:[function(b,c,a){arguments[4][112][0].apply(a,arguments)
},{"./helpers/validate":627,"./matchesSelector":629,"ac-dom-nodes":600}],631:[function(b,c,a){arguments[4][113][0].apply(a,arguments)
},{"./helpers/validate":627,"./matchesSelector":629,"ac-dom-nodes":600}],632:[function(b,c,a){arguments[4][114][0].apply(a,arguments)
},{"./helpers/validate":627,"./matchesSelector":629,"ac-dom-nodes":600}],633:[function(b,c,a){arguments[4][115][0].apply(a,arguments)
},{"./helpers/validate":627,"./matchesSelector":629,"ac-dom-nodes":600}],634:[function(b,c,a){arguments[4][116][0].apply(a,arguments)
},{"./helpers/validate":627}],635:[function(b,c,a){arguments[4][117][0].apply(a,arguments)
},{"./helpers/validate":627}],636:[function(b,c,a){arguments[4][118][0].apply(a,arguments)
},{"../helpers/nativeMatches":626,"../helpers/validate":627,"../vendor/sizzle/sizzle":638,"ac-dom-nodes":600}],637:[function(b,c,a){arguments[4][119][0].apply(a,arguments)
},{"./children":623,"./helpers/validate":627}],638:[function(b,c,a){c.exports=b(120)
},{}],639:[function(b,c,a){c.exports=b(13)},{"./ac-feature/cssPropertyAvailable":640,"./ac-feature/localStorageAvailable":641}],640:[function(b,c,a){c.exports=b(14)
},{}],641:[function(b,c,a){c.exports=b(15)},{}],642:[function(b,c,a){c.exports=b(54)
},{"./ac-shared-instance/SharedInstance":643}],643:[function(b,c,a){c.exports=b(55)
},{}],644:[function(b,c,a){c.exports=b(544)},{"./ac-mvc-cid/CID":645}],645:[function(b,c,a){c.exports=b(545)
},{"ac-shared-instance":642}],646:[function(b,c,a){c.exports={Collection:b("./ac-mvc-collection/Collection")}
},{"./ac-mvc-collection/Collection":647}],647:[function(d,b,j){var g=d("ac-object"),m=d("ac-array"),c=d("ac-mvc-cid").CID,n=d("ac-event-emitter").EventEmitter;
var i=["every","filter","forEach","map","reduce","reduceRight","some","slice","sort","reverse","indexOf","lastIndexOf"];
var l=["intersection","union","unique","without"];var a={add:"add",remove:"remove",set:"set",reset:"reset",empty:"empty",destroy:"destroy"};
function f(r,o,p,q){if(typeof r[o]!=="undefined"){return}r[o]=(function(s,t){return function(){var v=m.toArray(arguments),u=t.concat(v);
return s.apply(this,u)}}(p,q))}function h(o){n.call(this);this.options=g.defaults(this.defaultOptions,o||{});
this.models=[];this.cid=c.getNewCID();if(this.options.ModelType){this.ModelType=this.options.ModelType
}if(this.ModelType){this._modelsObject={}}this.on(a.add,this._addToModelsObject,this);
this.on(a.remove,this._removeFromModelsObject,this);if(this.options.models){this.add(this.options.models)
}}var k=h.prototype=g.create(n.prototype);k.defaultOptions={};k.count=function(){if(!this.models){return null
}return this.models.length};k.add=function(p,o){o=o||{};if(typeof p==="undefined"){p=[]
}p=this._returnAsArray(p);p=this._createModels(p);if(this.models.length===0){this.models=p
}else{this.models=this.models.concat(p)}this._trigger(a.add,{models:p},o);return this
};k.remove=function(t,r){r=r||{};if(!t){return[]}t=this._returnAsArray(t);var q=[],s,p,o=t.length;
for(s=0;s<o;s++){p=this.indexOf(t[s]);if(p>-1){q.push(t[s]);this.spliceWithOptions([p,1],{silent:true})
}}if(q.length>0){this._trigger(a.remove,{models:q},r)}return q};k.reset=function(p,o){o=o||{};
this.empty(o);this.add(p,o);this._trigger(a.reset,{models:this.models},o);return this
};k.empty=function(p){p=p||{};var o=this.slice(0);this.models=[];if(this._modelsObject){this._modelsObject={}
}if(o.length>0){this._trigger(a.remove,{models:o},p);this._trigger(a.empty,{models:o},p)
}return o};k.destroy=function(o){o=o||{};var q=this.empty(o);this._trigger(a.destroy,{models:q},o);
this.off();var p;for(p in this){if(this.hasOwnProperty(p)){this[p]=null}}};k.get=function(r){var p=this._getModelByID(r);
if(p){return p}var q,o=this.models.length;for(q=0;q<o;q++){if((typeof this.models[q].id!=="undefined"&&this.models[q].id===r)||(typeof this.models[q].cid!=="undefined"&&this.models[q].cid===r)){p=this.models[q];
break}}return p};k.set=function(s,A){A=A||{};if(typeof s==="undefined"){s=[]}s=this._returnAsArray(s);
var t,o="id",x=s.length,y=[],B=[],r={},z;if(this.ModelType&&this.ModelType.prototype.idAttribute){o=this.ModelType.prototype.idAttribute
}if(A.matchParameter){o=A.matchParameter}for(t=0;t<x;t++){z=null;if(typeof s[t]==="object"){z=this.get(s[t][o])
}if(z){if(this.ModelType){z.set(s[t]);r[z.cid]=true}else{z=s[t]}B.push(z);continue
}if(this.ModelType){s[t]=this._createModel(s[t])}if(this.ModelType||this.indexOf(s[t])===-1){y.push(s[t])
}B.push(s[t])}var q,v=B.length,w=[],p,u;x=this.models.length;for(t=0;t<x;t++){u=this.models[t];
if(this.ModelType){p=true;if(r[u.cid]){p=false}}else{p=true;for(q=0;q<v;q++){if(u===B[q]){p=false;
break}}}if(p){w.push(u)}}this.models=B;if(y.length>0){this._trigger(a.add,{models:y},A)
}if(w.length>0){this._trigger(a.remove,{models:w},A)}this._trigger(a.set,{models:B},A);
return w};k.at=function(o){if(!this.models){return}return this.models[o]};k.find=function(v,x){if(typeof v!=="object"){console.warn("Collection.protoype.find query needs to be an object");
return[]}x=x||{};var y=[],u=false,s=0,r,q,o=null,w=0,t=this.models.length,p=t;if(x.reverse){w=t-1;
p=-1;u=true}if(x.limit){o=x.limit}for(q=w;(u?q>p:q<p);(u?q--:q++)){r=this.models[q];
if(this._modelMatchesProperties(r,v)){if(u){y.unshift(r)}else{y.push(r)}s++;if(o&&s>=o){break
}}}return y};k.push=function(){return this.pushWithOptions(m.toArray(arguments))
};k.pop=function(){return this.popWithOptions(m.toArray(arguments))};k.shift=function(){return this.shiftWithOptions(m.toArray(arguments))
};k.unshift=function(){return this.unshiftWithOptions(m.toArray(arguments))};k.splice=function(){return this.spliceWithOptions(m.toArray(arguments))
};k.pushWithOptions=function(q,p){p=p||{};var r=this._createModels(q),o=Array.prototype.push.apply(this.models,r);
if(r.length>0){this._trigger(a.add,{models:r},p)}return o};k.popWithOptions=function(p,o){o=o||{};
var q=Array.prototype.pop.call(this.models);if(q){this._trigger(a.remove,{models:[q]},o)
}return q};k.shiftWithOptions=function(p,o){o=o||{};var q=Array.prototype.shift.call(this.models);
if(q){this._trigger(a.remove,{models:[q]},o)}return q};k.unshiftWithOptions=function(q,p){p=p||{};
var r=this._createModels(q),o=Array.prototype.unshift.apply(this.models,r);if(r.length>0){this._trigger(a.add,{models:r},p)
}return o};k.spliceWithOptions=function(q,p){p=p||{};var r=[q[0],q[1]],o,t,s;if(q.length>2){o=q.slice(2,q.length);
t=this._createModels(o);r=r.concat(t)}s=Array.prototype.splice.apply(this.models,r);
if(s.length>0){this._trigger(a.remove,{models:s},p)}if(t){this._trigger(a.add,{models:t},p)
}return s};k._trigger=function(o,q,p){p=p||{};if(!p.silent){this.trigger(o,q)}};
k._getModelByID=function(o){if(this.ModelType&&this._modelsObject&&this._modelsObject[o]){return this._modelsObject[o]
}return null};k._createModel=function(o){if(o instanceof this.ModelType||o instanceof h){return o
}return new this.ModelType(o)};k._createModels=function(q){if(!this.ModelType){return Array.prototype.slice.call(q,0)
}var p=[],r,s,o=q.length;for(s=0;s<o;s++){r=q[s];if(!(r instanceof this.ModelType)){r=this._createModel(r)
}p.push(r)}return p};k._modelMatchesProperties=function(o,q){var p;for(p in q){if(q.hasOwnProperty(p)){if(this._getPropFromModel(o,p)!==q[p]){return false
}}}return true};k._getPropFromModel=function(o,p){if(this.ModelType){return o.get(p)
}return o[p]};k._addToModelsObject=function(o){if(!this._modelsObject||!o.models){this._modelsObject={}
}o.models.forEach(function(p){this._modelsObject[p.id]=p;this._modelsObject[p.cid]=p
},this)};k._removeFromModelsObject=function(o){if(!this._modelsObject||!o.models){this._modelsObject={}
}o.models.forEach(function(p){this._modelsObject[p.id]=null;this._modelsObject[p.cid]=null
},this)};k._returnAsArray=function(o){if(!Array.isArray(o)){o=[o]}return o};k._acArrayProxy=function(p){var o=m.toArray(arguments);
o[0]=this.models;return m[p].apply(m,o)};k._arrayPrototypeProxy=function(p){var o=m.toArray(arguments);
o.shift();return Array.prototype[p].apply(this.models,o)};i.forEach(function(o){if(typeof Array.prototype[o]==="function"){f(this,o,this._arrayPrototypeProxy,[o])
}},k);l.forEach(function(o){if(typeof m[o]==="function"){f(this,o,this._acArrayProxy,[o])
}},k);b.exports=h},{"ac-array":1,"ac-event-emitter":284,"ac-mvc-cid":644,"ac-object":680}],648:[function(b,c,a){c.exports=b(358)
},{"./ac-classlist/add":649,"./ac-classlist/contains":650,"./ac-classlist/remove":652,"./ac-classlist/toggle":653}],649:[function(b,c,a){c.exports=b(359)
},{"./helpers/className":651}],650:[function(b,c,a){c.exports=b(360)},{"./helpers/className":651}],651:[function(b,c,a){c.exports=b(361)
},{}],652:[function(b,c,a){c.exports=b(362)},{"./helpers/className":651}],653:[function(b,c,a){c.exports=b(363)
},{"./helpers/className":651}],654:[function(b,c,a){c.exports=b(523)},{"./ac-dom-nodes/createDocumentFragment":655,"./ac-dom-nodes/filterByNodeType":656,"./ac-dom-nodes/helpers/nodeTypes":658,"./ac-dom-nodes/insertAfter":660,"./ac-dom-nodes/insertBefore":661,"./ac-dom-nodes/insertFirstChild":662,"./ac-dom-nodes/insertLastChild":663,"./ac-dom-nodes/isComment":664,"./ac-dom-nodes/isDocument":665,"./ac-dom-nodes/isDocumentFragment":666,"./ac-dom-nodes/isDocumentType":667,"./ac-dom-nodes/isElement":668,"./ac-dom-nodes/isNode":669,"./ac-dom-nodes/isTextNode":670,"./ac-dom-nodes/remove":671,"./ac-dom-nodes/replace":672}],655:[function(b,c,a){c.exports=b(387)
},{}],656:[function(b,c,a){arguments[4][388][0].apply(a,arguments)},{"./helpers/isNodeType":657,"./helpers/nodeTypes":658}],657:[function(b,c,a){arguments[4][389][0].apply(a,arguments)
},{"../isNode":669}],658:[function(b,c,a){c.exports=b(390)},{}],659:[function(b,c,a){arguments[4][391][0].apply(a,arguments)
},{"./isNodeType":657,"./nodeTypes":658}],660:[function(b,c,a){c.exports=b(392)
},{"./helpers/validate":659}],661:[function(b,c,a){c.exports=b(393)},{"./helpers/validate":659}],662:[function(b,c,a){c.exports=b(394)
},{"./helpers/validate":659}],663:[function(b,c,a){c.exports=b(395)},{"./helpers/validate":659}],664:[function(b,c,a){c.exports=b(533)
},{"./helpers/isNodeType":657,"./helpers/nodeTypes":658}],665:[function(b,c,a){c.exports=b(534)
},{"./helpers/isNodeType":657,"./helpers/nodeTypes":658}],666:[function(b,c,a){c.exports=b(535)
},{"./helpers/isNodeType":657,"./helpers/nodeTypes":658}],667:[function(b,c,a){c.exports=b(536)
},{"./helpers/isNodeType":657,"./helpers/nodeTypes":658}],668:[function(b,c,a){c.exports=b(537)
},{"./helpers/isNodeType":657,"./helpers/nodeTypes":658}],669:[function(b,c,a){c.exports=b(538)
},{}],670:[function(b,c,a){c.exports=b(539)},{"./helpers/isNodeType":657,"./helpers/nodeTypes":658}],671:[function(b,c,a){c.exports=b(404)
},{"./helpers/validate":659}],672:[function(b,c,a){c.exports=b(405)},{"./helpers/validate":659}],673:[function(b,c,a){c.exports=b(54)
},{"./ac-shared-instance/SharedInstance":674}],674:[function(b,c,a){c.exports=b(55)
},{}],675:[function(b,c,a){c.exports=b(544)},{"./ac-mvc-cid/CID":676}],676:[function(b,c,a){c.exports=b(545)
},{"ac-shared-instance":673}],677:[function(b,c,a){c.exports=b(557)},{"./ac-mvc-view/View":678}],678:[function(b,c,a){arguments[4][558][0].apply(a,arguments)
},{"ac-classlist":648,"ac-dom-emitter":580,"ac-dom-nodes":654,"ac-mvc-cid":675,"ac-object":680}],679:[function(b,c,a){c.exports=b(16)
},{}],680:[function(b,c,a){c.exports=b(17)},{"./ac-object/clone":681,"./ac-object/create":682,"./ac-object/defaults":683,"./ac-object/extend":684,"./ac-object/getPrototypeOf":685,"./ac-object/isDate":686,"./ac-object/isEmpty":687,"./ac-object/isRegExp":688,"./ac-object/toQueryParameters":689}],681:[function(b,c,a){c.exports=b(18)
},{"./extend":684}],682:[function(b,c,a){c.exports=b(19)},{}],683:[function(b,c,a){c.exports=b(20)
},{"./extend":684}],684:[function(b,c,a){c.exports=b(21)},{}],685:[function(b,c,a){c.exports=b(22)
},{}],686:[function(b,c,a){c.exports=b(23)},{}],687:[function(b,c,a){c.exports=b(24)
},{}],688:[function(b,c,a){c.exports=b(25)},{}],689:[function(b,c,a){c.exports=b(26)
},{qs:679}],690:[function(b,c,a){c.exports=b(124)},{"./ac-prefixer/Prefixer":691}],691:[function(b,c,a){c.exports=b(125)
},{"./Prefixer/camelCasedEvents":692}],692:[function(b,c,a){c.exports=b(126)},{}],693:[function(b,c,a){c.exports=b(310)
},{"./ac-feature/canvasAvailable":694,"./ac-feature/continuousScrollEventsAvailable":695,"./ac-feature/cookiesAvailable":696,"./ac-feature/cssLinearGradientAvailable":697,"./ac-feature/cssPropertyAvailable":698,"./ac-feature/helpers/memoize":700,"./ac-feature/isDesktop":701,"./ac-feature/isHandheld":702,"./ac-feature/isRetina":703,"./ac-feature/isTablet":704,"./ac-feature/localStorageAvailable":705,"./ac-feature/mediaElementsAvailable":706,"./ac-feature/sessionStorageAvailable":707,"./ac-feature/svgAvailable":708,"./ac-feature/threeDTransformsAvailable":709,"./ac-feature/touchAvailable":710,"./ac-feature/webGLAvailable":711}],694:[function(b,c,a){c.exports=b(290)
},{"./helpers/globals":699}],695:[function(b,c,a){c.exports=b(291)},{"./touchAvailable":710,"ac-browser":58}],696:[function(b,c,a){c.exports=b(292)
},{"./helpers/globals":699}],697:[function(b,c,a){c.exports=b(293)},{"./cssPropertyAvailable":698}],698:[function(b,c,a){c.exports=b(294)
},{"ac-prefixer":690}],699:[function(b,c,a){c.exports=b(295)},{}],700:[function(b,c,a){c.exports=b(296)
},{}],701:[function(b,c,a){c.exports=b(297)},{"./helpers/globals":699,"./touchAvailable":710}],702:[function(b,c,a){c.exports=b(298)
},{"./isDesktop":701,"./isTablet":704}],703:[function(b,c,a){c.exports=b(299)},{"./helpers/globals":699}],704:[function(b,c,a){c.exports=b(300)
},{"./helpers/globals":699,"./isDesktop":701}],705:[function(b,c,a){c.exports=b(301)
},{"./helpers/globals":699}],706:[function(b,c,a){c.exports=b(323)},{"./helpers/globals":699}],707:[function(b,c,a){c.exports=b(302)
},{"./helpers/globals":699}],708:[function(b,c,a){c.exports=b(303)},{"./helpers/globals":699}],709:[function(b,c,a){c.exports=b(304)
},{"./cssPropertyAvailable":698}],710:[function(b,c,a){c.exports=b(305)},{"./helpers/globals":699}],711:[function(b,c,a){c.exports=b(306)
},{"./helpers/globals":699}],712:[function(b,c,a){c.exports=b(226)},{}],713:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h=1;if(i){h=b(g).width/g.offsetWidth}return{width:g.scrollWidth*h,height:g.scrollHeight*h}
}},{"./utils/getBoundingClientRect":724}],714:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
}return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":724}],715:[function(g,h,f){var c=g("./getDimensions");
var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
h.exports=function i(j,p){var l;var o;var m;var k;var n;if(p){l=d(j);o=b();m=a();
return{top:l.top+m,right:l.right+o,bottom:l.bottom+m,left:l.left+o}}k=c(j,p);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};
while(j=j.offsetParent){l.top+=j.offsetTop;l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
}},{"./getDimensions":714,"./getScrollX":719,"./getScrollY":720,"./utils/getBoundingClientRect":724}],716:[function(c,f,b){var a=c("./getDimensions");
var g=c("./getPixelsInViewport");f.exports=function d(j,k){var i=g(j,k);var h=a(j,k).height;
return(i/h)}},{"./getDimensions":714,"./getPixelsInViewport":717}],717:[function(c,d,b){var a=c("./getViewportPosition");
d.exports=function f(h,k){var j=document.documentElement.clientHeight;var g=a(h,k);
var i;if(g.top>=j||g.bottom<=0){return 0}i=(g.bottom-g.top);if(g.top<0){i+=g.top
}if(g.bottom>j){i-=g.bottom-j}return i}},{"./getViewportPosition":721}],718:[function(d,f,c){var a=d("./getDimensions");
var b=d("./utils/getBoundingClientRect");f.exports=function g(i,l){var k;var h;
var j;if(l){k=b(i);if(i.offsetParent){h=b(i.offsetParent);k.top-=h.top;k.left-=h.left
}}else{j=a(i,l);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height}
}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}}},{"./getDimensions":714,"./utils/getBoundingClientRect":724}],719:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageXOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollLeft}},{}],720:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],721:[function(g,h,f){var i=g("./getPagePosition");
var d=g("./utils/getBoundingClientRect");var c=g("./getScrollX");var b=g("./getScrollY");
h.exports=function a(k,n){var j;var m;var l;if(n){j=d(k);return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}
}j=i(k);m=c();l=b();return{top:j.top-l,right:j.right-m,bottom:j.bottom-l,left:j.left-m}
}},{"./getPagePosition":715,"./getScrollX":719,"./getScrollY":720,"./utils/getBoundingClientRect":724}],722:[function(b,c,a){c.exports={getContentDimensions:b("./getContentDimensions"),getDimensions:b("./getDimensions"),getPagePosition:b("./getPagePosition"),getPercentInViewport:b("./getPercentInViewport"),getPixelsInViewport:b("./getPixelsInViewport"),getPosition:b("./getPosition"),getScrollX:b("./getScrollX"),getScrollY:b("./getScrollY"),getViewportPosition:b("./getViewportPosition"),isInViewport:b("./isInViewport")}
},{"./getContentDimensions":713,"./getDimensions":714,"./getPagePosition":715,"./getPercentInViewport":716,"./getPixelsInViewport":717,"./getPosition":718,"./getScrollX":719,"./getScrollY":720,"./getViewportPosition":721,"./isInViewport":723}],723:[function(b,d,a){var g=b("./getPixelsInViewport");
var c=b("./getPercentInViewport");d.exports=function f(j,k,h){var i;h=h||0;if(typeof h==="string"&&h.slice(-2)==="px"){h=parseInt(h,10);
i=g(j,k)}else{i=c(j,k)}return(i>0&&i>=h)}},{"./getPercentInViewport":716,"./getPixelsInViewport":717}],724:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],725:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./ac-dom-traversal/ancestor":726,"./ac-dom-traversal/ancestors":727,"./ac-dom-traversal/children":728,"./ac-dom-traversal/filterBySelector":729,"./ac-dom-traversal/firstChild":730,"./ac-dom-traversal/lastChild":733,"./ac-dom-traversal/matchesSelector":734,"./ac-dom-traversal/nextSibling":735,"./ac-dom-traversal/nextSiblings":736,"./ac-dom-traversal/previousSibling":737,"./ac-dom-traversal/previousSiblings":738,"./ac-dom-traversal/querySelector":739,"./ac-dom-traversal/querySelectorAll":740,"./ac-dom-traversal/shims/ie":741,"./ac-dom-traversal/siblings":742}],726:[function(b,c,a){arguments[4][173][0].apply(a,arguments)
},{"./helpers/validate":732,"./matchesSelector":734,"ac-dom-nodes":600}],727:[function(b,c,a){arguments[4][174][0].apply(a,arguments)
},{"./helpers/validate":732,"./matchesSelector":734,"ac-dom-nodes":600}],728:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{"./filterBySelector":729,"./helpers/validate":732,"ac-dom-nodes":600}],729:[function(b,c,a){arguments[4][106][0].apply(a,arguments)
},{"./helpers/validate":732,"./matchesSelector":734}],730:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{"./children":728,"./helpers/validate":732}],731:[function(b,c,a){c.exports=b(108)
},{}],732:[function(b,c,a){arguments[4][109][0].apply(a,arguments)},{"ac-dom-nodes":600}],733:[function(b,c,a){arguments[4][110][0].apply(a,arguments)
},{"./children":728,"./helpers/validate":732}],734:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var i=f("./helpers/validate");var h=f("./vendor/sizzle/sizzle");
g.exports=function c(k,j){i.selector(j,true,"matchesSelector");if(!b.isElement(k)){return false
}if(!a){return h.matchesSelector(k,j)}return a.call(k,j)}},{"./helpers/nativeMatches":731,"./helpers/validate":732,"./vendor/sizzle/sizzle":743,"ac-dom-nodes":600}],735:[function(b,c,a){arguments[4][112][0].apply(a,arguments)
},{"./helpers/validate":732,"./matchesSelector":734,"ac-dom-nodes":600}],736:[function(b,c,a){arguments[4][113][0].apply(a,arguments)
},{"./helpers/validate":732,"./matchesSelector":734,"ac-dom-nodes":600}],737:[function(b,c,a){arguments[4][114][0].apply(a,arguments)
},{"./helpers/validate":732,"./matchesSelector":734,"ac-dom-nodes":600}],738:[function(b,c,a){arguments[4][115][0].apply(a,arguments)
},{"./helpers/validate":732,"./matchesSelector":734,"ac-dom-nodes":600}],739:[function(b,c,a){arguments[4][116][0].apply(a,arguments)
},{"./helpers/validate":732}],740:[function(b,c,a){arguments[4][117][0].apply(a,arguments)
},{"./helpers/validate":732}],741:[function(c,d,b){var f=c("../vendor/sizzle/sizzle");
var a=c("ac-dom-nodes");var g=c("../helpers/validate");d.exports=function(i,h){if(h||!("querySelectorAll" in document)){i.querySelectorAll=function(j,l){var k;
var m;l=l||document;g.parentNode(l,true,"querySelectorAll","context");g.selector(j,true,"querySelectorAll");
if(a.isDocumentFragment(l)){k=i.children(l);m=[];k.forEach(function(o){var n;if(f.matchesSelector(o,j)){m.push(o)
}n=f(j,o);if(n.length){m=m.concat(n)}});return m}return f(j,l)};i.querySelector=function(k,l){var j;
l=l||document;g.parentNode(l,true,"querySelector","context");g.selector(k,true,"querySelector");
j=i.querySelectorAll(k,l);return j.length?j[0]:null}}}},{"../helpers/validate":732,"../vendor/sizzle/sizzle":743,"ac-dom-nodes":600}],742:[function(b,c,a){arguments[4][119][0].apply(a,arguments)
},{"./children":728,"./helpers/validate":732}],743:[function(b,c,a){c.exports=b(120)
},{}],744:[function(b,c,a){c.exports.Slider=b("./ac-slider/Slider")},{"./ac-slider/Slider":745}],745:[function(f,d,h){var a=f("ac-dom-traversal");
var k=f("ac-dom-events");var j=f("ac-event-emitter");var b=f("ac-dom-metrics");
var c={min:0,max:1,step:1,value:0,orientation:"horizontal",template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb"></div>\n</div>'};
var l=Object.keys(c);var g=function(n,m){this.options=Object.assign({},c,m);this.model=Object.create(this.options);
this.el=n;n.className+=" ac-slider-container";n.innerHTML=this.model.template;this.initialize()
};g.prototype=Object.create(j.EventEmitter.prototype);var i=g.prototype;i.addEventListeners=function(){this.addEventListener(this.el,"mousedown",this.onMouseDown);
this.addEventListener(this.el,"touchstart",this.onTouchStart);this.addEventListener(this.el,"mouseover",this.onMouseOver);
this.addEventListener(this.el,"mouseleave",this.onMouseLeave);this.addEventListener(this.el,"touchend",this.onTouchEnd);
this.addEventListener(document,"touchend",this.onMouseUp)};i.addEventListener=k.addEventListener;
i.bindMethods=function(){this.onMouseDown=this.bindMethod(this.onMouseDown,this);
this.onTouchStart=this.bindMethod(this.onTouchStart,this);this.onMouseOver=this.bindMethod(this.onMouseOver,this);
this.onMouseLeave=this.bindMethod(this.onMouseLeave,this);this.onTouchEnd=this.bindMethod(this.onTouchEnd,this);
this.onMouseUp=this.bindMethod(this.onMouseUp,this);this.onMouseMove=this.bindMethod(this.onMouseMove,this);
this.onTouchMove=this.bindMethod(this.onTouchMove,this)};i.bindMethod=function(n,m){return n.bind(m)
};i.correctValueMinMax=function(o,n,m){if(o>m){o=m}if(o<n){o=n}return o};i.calculateStepsToValue=function(n,m){return Math.abs(n-m)
};i.calculateMaxSteps=function(n,m){return Math.abs(m-n)};i.calculateStepsEqualToPercentage=function(n,m){return(n/100)*m
};i.calculateNextStepInRange=function(s,n,m,r){var p=this.calculateMaxSteps(n,m);
var q=this.calculateStepsToValue(s,n);var o=n+(Math.floor(p/r)*r);s=Math.min(o,n+Math.round(q/r)*r);
return s};i.dispatchEvent=k.dispatchEvent;i.disableUserControls=function(){this.removeEventListeners()
};i.enableUserControls=function(){this.addEventListeners()};i.getNextValue=function(p,n,m,o){p=this.correctValueMinMax(p,n,m);
if(o!=="auto"){p=this.calculateNextStepInRange(p,n,m,o)}return p};i.getOrientation=function(){return this.model.orientation
};i.getValue=function(){return this.model.value};i.getMin=function(){return this.model.min
};i.getMax=function(){return this.model.max};i.getStep=function(){return this.model.step
};i.getClientXValue=function(u){var n=this.getClientXFromEvent(u);var v=b.getDimensions(this.thumbElement,true);
var o=b.getViewportPosition(this.thumbElement);var w=b.getDimensions(this.runnableTrackElement,true);
var m=b.getViewportPosition(this.runnableTrackElement);var q=n-this.runnableTrackElement.getBoundingClientRect().left-(v.width/2);
var t=w.width-v.width;var p=q/(t)*100;var r=this.calculateMaxSteps(this.getMin(),this.getMax());
var s=this.calculateStepsEqualToPercentage(p,r);return this.getMin()+s};i.getClientYValue=function(t){var m=this.getClientYFromEvent(t);
var v=b.getDimensions(this.thumbElement,true);var o=b.getViewportPosition(this.thumbElement);
var w=b.getDimensions(this.runnableTrackElement,true);var n=b.getViewportPosition(this.runnableTrackElement);
var s=w.height-v.height;var u=s-(m-this.runnableTrackElement.getBoundingClientRect().top-(v.height/2));
var p=u/(w.height-v.height)*100;var q=this.calculateMaxSteps(this.model.min,this.model.max);
var r=this.calculateStepsEqualToPercentage(p,q);return this.model.min+r};i.getClientValue=function(n){n=n.originalEvent||n;
var m;if(this.model.orientation==="horizontal"){m=this.getClientXValue(n)}else{m=this.getClientYValue(n)
}return m};i.getClientXFromEvent=function(m){return m.touches?m.touches[0].clientX:m.clientX
};i.getClientYFromEvent=function(m){return m.touches?m.touches[0].clientY:m.clientY
};i.initialize=function(){this.setNodeReferences();this.setValue(this.model.value);
this.bindMethods();this.addEventListeners()};i.onMouseLeave=function(){this.preventDocumentMouseUpDispatch=false
};i.onMouseDown=function(n){var m=this.getClientValue(n);this.addEventListener(document,"mouseup",this.onMouseUp);
this.addEventListener(document,"mousemove",this.onMouseMove);this.trigger("grab",this.getValue());
this.setValue(m)};i.onMouseUp=function(){this.removeEventListener(document,"mouseup",this.onMouseUp);
this.removeEventListener(document,"mousemove",this.onMouseMove);this.trigger("release",this.getValue());
if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"mouseup")}};
i.onMouseOver=function(){this.preventDocumentMouseUpDispatch=true};i.onTouchEnd=function(){this.removeEventListener(document,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchmove",this.onTouchMove);this.trigger("release",this.getValue());
if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"touchend")
}};i.onTouchStart=function(n){var m=this.getClientValue(n);this.addEventListener(document,"touchend",this.onMouseUp);
this.addEventListener(document,"touchmove",this.onTouchMove);this.trigger("grab",this.getValue());
this.setValue(m)};i.onMouseMove=function(n){var m=this.getClientValue(n);this.setValue(m)
};i.onTouchMove=function(n){if(n.preventDefault){n.preventDefault()}var m=this.getClientValue(n);
this.setValue(m)};i.getElementOrientationOffsetValue=function(n,m){if(m==="horizontal"){return b.getDimensions(n).width
}return b.getDimensions(n).height};i.getAvailableRunnableTrack=function(o,m){var n=this.getElementOrientationOffsetValue(this.thumbElement,m);
return o-n};i.getPercentageByValue=function(n,m){n=this.calculateStepsToValue(n,this.getMin());
m=this.calculateMaxSteps(this.getMin(),this.getMax());return(n/m)*100};i.getPercentageOfRunnableTrack=function(q){var n=this.getOrientation();
var r=this.getElementOrientationOffsetValue(this.runnableTrackElement,n);var m=this.getAvailableRunnableTrack(r,n);
var p=this.getPercentageByValue(q,this.getMax());var o=(p/100)*m;return(o/r)*100
};i.onChange=function(n){var m=this.getPercentageOfRunnableTrack(n);if(this.getOrientation()==="horizontal"){if(!isNaN(m)){this.thumbElement.style.left=m+"%"
}}else{if(!isNaN(m)){this.thumbElement.style.bottom=m+"%"}}this.trigger("change",this.getValue())
};i.removeEventListeners=function(){this.removeEventListener(this.el,"mousedown",this.onMouseDown);
this.removeEventListener(this.el,"touchstart",this.onTouchStart);this.removeEventListener(this.el,"mouseover",this.onMouseOver);
this.removeEventListener(this.el,"mouseleave",this.onMouseLeave);this.removeEventListener(this.el,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchend",this.onMouseUp)};i.removeEventListener=k.removeEventListener;
i.setNodeReferences=function(){this.runnableTrackElement=a.querySelector(".ac-slider-runnable-track",this.el);
this.thumbElement=a.querySelector(".ac-slider-thumb",this.el)};i.setOrientation=function(m){this.set("orientation",m)
};i.setValue=function(m){m=this.getNextValue(m,this.getMin(),this.getMax(),this.getStep());
this.set("value",m);this.onChange(m)};i.setMin=function(m){this.set("min",m)};i.setMax=function(m){this.set("max",m)
};i.setStep=function(m){this.set("step",m)};i.set=function(m,o){if(l.indexOf(m)>-1&&this.model[m]!==o){var n=this.model[m];
this.model[m]=o;this.trigger("change:model:"+m,{previous:n,current:o})}};d.exports=g
},{"ac-dom-events":712,"ac-dom-metrics":722,"ac-dom-traversal":725,"ac-event-emitter":284}],746:[function(b,c,a){c.exports=b(16)
},{}],747:[function(b,c,a){c.exports=b(499)},{"./ac-string/isString":748,"./ac-string/queryParameters":749,"./ac-string/queryStringToObject":750,"./ac-string/supplant":751,"./ac-string/toCamelCase":752,"./ac-string/toQueryPair":753}],748:[function(b,c,a){c.exports=b(500)
},{}],749:[function(b,c,a){c.exports=b(501)},{"./queryStringToObject":750}],750:[function(b,c,a){c.exports=b(502)
},{qs:746}],751:[function(b,c,a){c.exports=b(503)},{}],752:[function(b,c,a){c.exports=b(504)
},{}],753:[function(b,c,a){c.exports=b(505)},{}],754:[function(c,f,b){var h=c("./view");
var g=c("./model");var d=c("./elements/element");var a={create:function(j,l){j=j||{};
l=l||{};j.elementClassPrefix=j.elementClassPrefix||"controls";l.elementClassPrefix=j.elementClassPrefix;
var k=this.Model(l);var i=this.View(Object.assign({},j,{model:k}));i.initialize();
return i},Model:g,View:h,element:d};f.exports=a},{"./elements/element":757,"./model":775,"./view":777}],755:[function(d,g,b){var c=d("ac-classlist");
var f=d("./element");var a=f.newType({className:"thirty-seconds-back-button",events:[{type:"click",callback:"thirySecondsBack"}],thirySecondsBack:function(){var i=this.player.getCurrentTime();
var h=i-30;this.player.setCurrentTime((h<0)?0:h)}});g.exports=a},{"./element":757,"ac-classlist":69}],756:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"elapsed-time",_initialize:function(){this.options.model.on("change:elapsedTime",this._setElapsedTime,this)
},_setElapsedTime:function(g){this.el.innerHTML=g.value||g}});f.exports=a},{"./element":757}],757:[function(b,d,a){var c={className:"",create:function(h,g){var f=Object.create(this);
f.el=h;f.options=g;f.player=g.player;f._initialize();return f},events:[],newType:function(f){var g=Object.assign({},this,f);
return g},setElementAttributes:function(){this.elementAttributeString.forEach(function(f){var g;
if(typeof f==="string"){g=this._getLocalizationAttribute(f);this._setAttributeText(g)
}else{if(this[f.condition]()){g=this._getLocalizationAttribute(f.string);this._setAttributeText(g)
}}},this)},_getLocalizationAttribute:function(f){return this.options.model.get(f)
},_initialize:function(){this.elementAttributeString=this.elementAttributeString||[];
this.setElementAttributes()},_setAttributeText:function(f){["value","aria-label"].forEach(function(g){this.el.setAttribute(g,f)
},this)}};d.exports=c},{}],758:[function(b,a,d){var c=b("ac-classlist");var g=b("ac-fullscreen");
var i=b("ac-feature");var f=b("./element");var j=!i.isDesktop();var h=f.newType({className:"full-screen-button",events:[{type:"click",callback:"_toggleFullscreen"}],_exitFullscreen:function(k){g.exitFullscreen(k)
},_getFullScreenElement:function(){var k=false;if(this._isNotDesktop()){k=this.options.player.getMediaElement()
}return k||this.options.fullScreenElement||this.options.player.getMediaElement()
},_isFullScreen:function(k){return this._supportsFullscreen(k)},_initialize:function(){this.isFullScreen=false;
if(this._supportsFullscreen(this._getFullScreenElement())){this._removeFullscreenUnsupportedClass();
this._listenForFullscreenChange()}},_isNotDesktop:function(){return j},_listenForFullscreenChange:function(){g.on("enterfullscreen",this._onEnterFullScreen,this);
g.on("exitfullscreen",this._onExitFullScreen,this)},_onEnterFullScreen:function(){this.isFullScreen=true;
c.add(this.el,"is-fullscreen")},_onExitFullScreen:function(){this.isFullScreen=false;
c.remove(this.el,"is-fullscreen")},_requestFullscreen:function(k){g.requestFullscreen(k)
},_removeFullscreenUnsupportedClass:function(){c.remove(this.el,"fullscreen-unsupported")
},_supportsFullscreen:function(k){return g.fullscreenEnabled(k)},_toggleFullscreen:function(){var k=this._getFullScreenElement();
if(this.isFullScreen){this._exitFullscreen(k)}else{this._requestFullscreen(k)}}});
a.exports=h},{"./element":757,"ac-classlist":69,"ac-feature":693,"ac-fullscreen":336}],759:[function(b,d,a){var c=b("./element");
var f=c.newType({className:"max-volume-button",events:[{type:"click",callback:"maxVolume"}],maxVolume:function(){this.options.player.setMuted(false);
this.options.player.setVolume(1)}});d.exports=f},{"./element":757}],760:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"min-volume-button",events:[{type:"click",callback:"minVolume"}],minVolume:function(){this.options.player.setMuted(false);
this.options.player.setVolume(0)}});f.exports=a},{"./element":757}],761:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"mute-volume-button",events:[{type:"click",callback:"mute"}],mute:function(){this.options.player.setMuted(true)
}});f.exports=a},{"./element":757}],762:[function(b,d,a){var c=b("./element");var f=c.newType({className:"toggle-mute-volume-button",events:[{type:"click",callback:"toggleMutedVolume"}],toggleMutedVolume:function(){var g=this.options.player.getMuted()?false:true;
this.options.player.setMuted(g)}});d.exports=f},{"./element":757}],763:[function(b,d,a){var c=b("./element");
var f=c.newType({className:"pause-button",events:[{type:"click",callback:"pause"}],pause:function(){this.options.player.pause()
}});d.exports=f},{"./element":757}],764:[function(b,d,a){var c=b("./element");var f=c.newType({className:"play-button",events:[{type:"click",callback:"play"}],play:function(){this.options.player.play()
}});d.exports=f},{"./element":757}],765:[function(c,f,a){var b=c("ac-classlist");
var d=c("./element");var g=d.newType({className:"play-pause-button",events:[{type:"click",callback:"playPauseToggle"}],elementAttributeString:[{condition:"playerIsPlaying",string:"pause"},{condition:"playerIsPaused",string:"play"}],playerIsPlaying:function(){return !this.player.getPaused()
},playerIsPaused:function(){return this.player.getPaused()},playPauseToggle:function(){if(this.player.getPaused()){this.player.play()
}else{this.player.pause()}},_addEventListeners:function(){this.player.on("play pause",this._handleStateChange,this)
},_handleStateChange:function(){this._toggleIsPlayingClass();this.setElementAttributes()
},_initialize:function(){d._initialize.call(this);this._addEventListeners();this._handleStateChange()
},_toggleIsPlayingClass:function(){var h=this.player.getPaused()?"remove":"add";
b[h](this.el,"is-playing")}});f.exports=g},{"./element":757,"ac-classlist":69}],766:[function(f,d,i){var j=f("./element");
var h=f("ac-classlist");var a=f("ac-dom-traversal");var k=f("ac-dom-events");var l=f("ac-slider");
var b=f("../mixins/get-model-attribute");var c=f("../mixins/cursor-pointer");var g=j.newType(Object.assign({className:"progress-indicator",_bindSetupElement:function(){return this._setupElement.bind(this)
},_getCurrentTime:function(m){return(m&&m.value)?m.value:this.polyfilledEl.getValue()
},_getSliderInstance:function(){return new l.Slider(this.el,{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-thumb">\n\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t\t<div class="ac-slider-scrubbed"></div>\n\t\t</div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',min:0,max:+this.options.model.get("duration"),step:isNaN(+this.el.getAttribute("step"))?this.el.getAttribute("step"):+this.el.getAttribute("step"),value:+this.el.getAttribute("value")})
},_handleProgressIndicatorChange:function(m){this.options.model.set({timeupdate:this._getCurrentTime(m)})
},_initialize:function(){j._initialize.call(this);this._setupElement=this._bindSetupElement();
this.getModelAttribute("duration").then(this._setupElement)},_onGrab:function(){this.options.model.set({ignoreTimeupdate:true});
this.options.player.off("timeupdate",this._setIndicatorValue);this.polyfilledEl.on("change",this._setModelValue,this);
this.forceCursorPointer()},_onRelease:function(){this._setPlayerValue();this.options.model.set({ignoreTimeupdate:false});
this.options.player.on("timeupdate",this._setIndicatorValue,this);this.polyfilledEl.off("change",this._setModelValue);
this.disableForcedCursorPointer()},_onPlayerDurationChange:function(){if(!isNaN(this.options.player.getDuration())){this.polyfilledEl.setMax(this.options.player.getDuration())
}},_polyfillRangeInput:function(){this.polyfilledEl=this._getSliderInstance();this.thumbEl=a.querySelector(".ac-slider-thumb",this.el);
this.scrubbedEl=a.querySelector(".ac-slider-scrubbed",this.el)},_setIndicatorValue:function(){var m=this.options.player.getCurrentTime();
this.polyfilledEl.setValue(m)},_setPlayerValue:function(){var m=this.polyfilledEl.getValue();
this.options.player.setCurrentTime(m)},_setModelValue:function(){var m=this.polyfilledEl.getValue();
this.options.model.set({timeupdate:m})},_setupElement:function(m){this.el.setAttribute("max",m);
this._polyfillRangeInput();this.el.setAttribute("aria-valuemax",this.polyfilledEl.getMax());
this.polyfilledEl.on("change:model:max",function(){this.el.setAttribute("aria-valuemax",this.polyfilledEl.getMax())
},this);this.polyfilledEl.on("change:model:value",function(){this.el.setAttribute("aria-valuenow",this.polyfilledEl.getValue())
},this);this.el.setAttribute("aria-valuemin",this.polyfilledEl.getMin());this.polyfilledEl.on("change:model:min",function(){this.el.setAttribute("aria-valuemin",this.polyfilledEl.getMin())
},this);this.options.player.on("timeupdate",this._setIndicatorValue,this);this.polyfilledEl.on("grab",this._onGrab,this);
this.polyfilledEl.on("release",this._onRelease,this);this.options.player.on("durationchange",this._onPlayerDurationChange,this)
}},b,c));d.exports=g},{"../mixins/cursor-pointer":773,"../mixins/get-model-attribute":774,"./element":757,"ac-classlist":69,"ac-dom-events":585,"ac-dom-traversal":620,"ac-slider":744}],767:[function(c,g,a){var f=c("./element");
var b=c("../mixins/get-model-attribute");var d=f.newType(Object.assign({},{className:"remaining-time",_bindUpdateRemainingTimeIndicator:function(){return this._updateRemainingTimeIndicator.bind(this)
},_initialize:function(){this._updateRemainingTimeIndicator=this._bindUpdateRemainingTimeIndicator();
this.options.model.on("change:remainingTime",this._updateRemainingTimeIndicator,this);
this.getModelAttribute("remainingTime").then(this._updateRemainingTimeIndicator)
},_updateRemainingTimeIndicator:function(h){this.el.innerHTML=h.value||h}},b));
g.exports=d},{"../mixins/get-model-attribute":774,"./element":757}],768:[function(c,d,b){var a=c("./text-tracks");
var f=a.newType({className:"text-tracks-off-button",events:[{type:"click",callback:"textTracksOff"}],elementAttributeString:["captionsturnedoff"]});
d.exports=f},{"./text-tracks":771}],769:[function(d,f,b){var a=d("./text-tracks");
var c=a.newType({className:"text-tracks-on-button",events:[{type:"click",callback:"textTracksOn"}],elementAttributeString:["captionsturnedon"]});
f.exports=c},{"./text-tracks":771}],770:[function(d,f,b){var c=d("ac-classlist");
var a=d("./text-tracks");var g=a.newType({className:"text-tracks-toggle-button",events:[{type:"click",callback:"textTracksToggle"}],textTracksToggle:function(){var h=this._getTextTrackModeAndIndex();
var i=h.get("mode");if(i==="showing"){this.textTracksOff()}else{this.textTracksOn()
}},elementAttributeString:[{condition:"textTracksAreShowing",string:"captionsturnedoff"},{condition:"textTracksAreDisabled",string:"captionsturnedon"}],textTracksAreShowing:function(){return this.player.getVisibleTextTracks().models.length>0
},textTracksAreDisabled:function(){return this.player.getVisibleTextTracks().models.length===0
},_addEventListeners:function(){a._addEventListeners.call(this);this.player.on("texttrackshow texttrackhide",this.setElementAttributes,this)
}});f.exports=g},{"./text-tracks":771,"ac-classlist":69}],771:[function(f,h,c){var d=f("ac-classlist");
var g=f("./element");var a={on:"showing",off:"disabled"};var i={visible:"text-tracks-visible",none:"no-text-tracks"};
var b=g.newType({onTextTracksVisible:function(){d.add(this.el,i.visible)},onTextTracksHidden:function(){d.remove(this.el,i.visible)
},textTracksOn:function(){var j=this._getTextTrackModeAndIndex();j.show()},textTracksOff:function(){var j=this._getTextTrackModeAndIndex();
j.hide()},_addEventListeners:function(){var j=this._getTextTrackModeAndIndex();
this.player.on("texttrackshow",this.onTextTracksVisible,this);this.player.on("texttrackhide",this.onTextTracksHidden,this);
this.options.model.on("change:localization",this.setElementAttributes,this)},_addTextTrackClass:function(){var j=this.player.getEnabledTextTracks().models;
if(j.length){this._removeNoTextTracksClass();if(this.player.getVisibleTextTracks().models.length){this.onTextTracksVisible()
}else{this.onTextTracksHidden()}}else{this._addNoTextTracksClass()}},_addNoTextTracksClass:function(){d.add(this.el,i.none)
},_getTextTrackModeAndIndex:function(){var j=this.player.getVisibleTextTracks().at(0);
if(!j){j=this.player.getEnabledTextTracks().at(0)}return j},_initialize:function(){g._initialize.call(this);
this._addTextTrackClass();this._addEventListeners()},_removeNoTextTracksClass:function(){d.remove(this.el,i.none)
},_toggleTextTracksVisibleClass:function(j){var k=j?"onTextTracksHidden":"onTextTracksVisible";
this[k]()},_toggleNoTextTracksClass:function(j){var k=j?"_removeNoTextTracksClass":"_addNoTextTracksClass";
this[k]()}});h.exports=b},{"./element":757,"ac-classlist":69}],772:[function(f,d,h){var i=f("./element");
var g=f("ac-classlist");var j=f("ac-dom-events");var k=f("ac-slider");var a=f("ac-dom-traversal");
var b=f("../mixins/get-model-attribute");var c=f("../mixins/cursor-pointer");var l=i.newType(Object.assign({className:"volume-level-indicator",events:[{type:"change",callback:"handleVolumeIndicatorChange"}],handleVolumeIndicatorChange:function(n){this._unmute();
var m=this._getVolume(n);this._setVolume(m)},ignoreVolumechange:function(m){this.options.model.set({ignoreVolumechange:true});
this._stopListeningForVolumechange();this.forceCursorPointer()},setVolumeOnMove:function(){this._setVolume(this._getVolume())
},_bindResumeVolumechange:function(){return this._resumeVolumechange.bind(this)
},_bindSetupElement:function(){return this._setupElement.bind(this)},_bindHandleVolumeIndicatorChange:function(){return this.handleVolumeIndicatorChange.bind(this)
},_getVolume:function(m){return(m&&m.value)?m.value:this.polyfilledEl.getValue()
},_getSliderInstance:function(){var m=this.options.player.getVolume();if(this.options.player.getMuted()===true){m=0
}return new k.Slider(this.el,{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb">\n\t\t<div class="ac-slider-thumb-background"></div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',min:0,max:1,step:+this.el.getAttribute("step"),value:m})
},_initialize:function(){i._initialize.call(this);this.handleVolumeIndicatorChange=this._bindHandleVolumeIndicatorChange();
this._resumeVolumechange=this._bindResumeVolumechange();this._setupElement=this._bindSetupElement();
this.getModelAttribute("volume").then(this._setupElement)},_listenForVolumechange:function(m){this.options.model.on("change:volume",this._updateVolumeIndicator,this);
this.polyfilledEl.off("release",this._resumeVolumechange);this.polyfilledEl.off("change",this.handleVolumeIndicatorChange);
this.polyfilledEl.on("grab",this.ignoreVolumechange,this)},_polyfillRangeInput:function(){this.polyfilledEl=this._getSliderInstance();
this.scrubbed=a.querySelector(".ac-slider-scrubbed",this.el);this.thumb=a.querySelector(".ac-slider-thumb",this.el);
this.polyfilledEl.on("change",function(){this.scrubbed.style.marginLeft=parseInt(this.thumb.style.left,10)+(((this.thumb.offsetWidth/2)/this.el.offsetWidth)*100)+"%"
},this);this.polyfilledEl.trigger("change",this.polyfilledEl.getValue())},_resumeVolumechange:function(m){this.options.model.set({ignoreVolumechange:false});
this._listenForVolumechange();this._setVolume(this._getVolume());this.disableForcedCursorPointer()
},_setVolume:function(m){this._unmute();this.options.player.setVolume(m)},_setupElement:function(m){this.el.setAttribute("value",m);
this._polyfillRangeInput();this._listenForVolumechange()},_stopListeningForVolumechange:function(){this.options.model.off("change:volume",this._updateVolumeIndicator,this);
this.polyfilledEl.on("release",this._resumeVolumechange,this);this.polyfilledEl.on("change",this.handleVolumeIndicatorChange,this);
this.polyfilledEl.off("grab",this.ignoreVolumechange)},_toggleVolumeLevelIndicator:function(m){g.toggle(this.el,"is-visible")
},_updateVolumeIndicator:function(n){var m=(n&&n.value!==null)?n.value:this.options.player.getVolume();
this.polyfilledEl.setValue(m)},_unmute:function(){if(this.options.player.getMuted()){this.options.player.setMuted(false)
}}},b,c));d.exports=l},{"../mixins/cursor-pointer":773,"../mixins/get-model-attribute":774,"./element":757,"ac-classlist":69,"ac-dom-events":585,"ac-dom-traversal":620,"ac-slider":744}],773:[function(c,d,a){var b=c("ac-classlist");
var f=c("ac-dom-events");var g="cursor-pointer";d.exports={disableForcedCursorPointer:function(){b.remove(document.body,g);
this.onSelectStartResumeDefault()},forceCursorPointer:function(){b.add(document.body,g);
this.onSelectStartPreventDefault()},onSelectStartResumeDefault:function(){f.removeEventListener(document,"selectstart",this.preventDefault)
},onSelectStartPreventDefault:function(){f.addEventListener(document,"selectstart",this.preventDefault)
},preventDefault:function(h){f.preventDefault(h)}}},{"ac-classlist":69,"ac-dom-events":585}],774:[function(b,c,a){c.exports={getModelAttribute:function(d){return new Promise(function(g,f){if(this.options.model.has(d)){g(this.options.model.get(d))
}else{this.options.model.once("change:"+d,function(h){g(h.value)},this)}}.bind(this))
}}},{}],775:[function(c,d,a){var b=c("ac-mvc-model").Model;var h=c("ac-video-localization").localization;
var g=function(i){if(!(this instanceof g)){return new g(i)}b.apply(this,arguments);
this.initialize()};g.prototype=Object.create(b.prototype);var f=g.prototype;Object.assign(f,{defaultAttributes:{backthirtyseconds:"Back 30 Seconds",playpause:"Play/Pause",play:"Play",pause:"Pause",togglemutevolume:"Toggle Mute Volume",mutevolume:"Mute Volume",minvolume:"Min Volume",adjustvolume:"Adjust Volume",fastreverse:"Fast Reverse",fastforward:"Fast Forward",fullvolume:"Full Volume",fullscreen:"Full Screen",captionscontrol:"Closed Captions",captionsturnedon:"Closed Captions On",captionsturnedoff:"Closed Captions Off",subtitlescontrol:"Subtitles",subtitlesturnedon:"Subtitles On",subtitlesturnedoff:"Subtitles Off",sizescontrol:"Video Size",downloadcontrol:"Download Video",small:"Small",medium:"Medium",large:"Large",hd:"HD",ipod:"iPod/iPhone",mb:"MB",gb:"GB",tb:"TB",downloadquicktimetitle:"Get QuickTime.",downloadquicktimetext:"Download QuickTime to view this video. QuickTime is free for Mac + PC.",downloadquicktimebutton:"Download",downloadquicktimeurl:"http://www.apple.com/quicktime/download/",elapsed:"elapsed",remaining:"remaining"},getLocalizationPromise:function(){return h.create()
},initialize:function(){this.localize=this._bindLocalize();this.getLocalizationPromise().then(this.localize)
},localize:function(i){this.set(i.attributes);this.trigger("change:localization")
},_bindLocalize:function(){return this.localize.bind(this)}});d.exports=g},{"ac-mvc-model":903,"ac-video-localization":514}],776:[function(c,d,a){var b=c("ac-string");
var f={addLeadingZero:function(h,g){g=g||2;if(h<10||g>2){h=String(h);while(h.length<g){h="0"+h
}}return h},formatTime:function(j,g){if(isNaN(j)){return"00:00"}j=this.splitTime(Math.floor(j),function(k){return this.addLeadingZero(k,g)
}.bind(this));var h="{PN}{minutes}:{seconds}";var i=b.supplant(h,{PN:j.negativeModifier,minutes:j.minutes,seconds:j.seconds});
return i},splitTime:function(j,g){g=g||function(k){return k};var i={negativeModifier:"",minutes:0,seconds:0};
if(isNaN(j)){return i}i.negativeModifier=(j<0)?"-":"";j=Math.abs(j);i.minutes=Math.floor(j/60);
i.seconds=(j%60);for(var h in i){if(typeof i[h]!=="number"){continue}i[h]=g(i[h])
}return i}};d.exports=f},{"ac-string":747}],777:[function(g,d,j){var a={"back-30-seconds-button":g("./elements/back-30-seconds-button.js"),"elapsed-time-indicator":g("./elements/elapsed-time-indicator.js"),element:g("./elements/element.js"),"full-screen-button":g("./elements/full-screen-button.js"),"max-volume-button":g("./elements/max-volume-button.js"),"min-volume-button":g("./elements/min-volume-button.js"),"mute-button":g("./elements/mute-button.js"),"mute-toggle-button":g("./elements/mute-toggle-button.js"),"pause-button":g("./elements/pause-button.js"),"play-button":g("./elements/play-button.js"),"play-pause-button":g("./elements/play-pause-button.js"),"progress-indicator":g("./elements/progress-indicator.js"),"remaining-time-indicator":g("./elements/remaining-time-indicator.js"),"text-tracks-off-button":g("./elements/text-tracks-off-button.js"),"text-tracks-on-button":g("./elements/text-tracks-on-button.js"),"text-tracks-toggle-button":g("./elements/text-tracks-toggle-button.js"),"text-tracks":g("./elements/text-tracks.js"),"volume-level-indicator":g("./elements/volume-level-indicator.js")};
var b=g("ac-dom-traversal");var h=g("ac-string");var i=g("ac-classlist");var l=g("ac-mvc-view").View;
var f=g("./time");var c=function(m){if(!(this instanceof c)){return new c(m)}l.apply(this,arguments);
this.elements=[]};c.prototype=Object.create(l.prototype);var k=c.prototype;Object.assign(k,{className:"ac-video-controls",initialize:function(){this._addInactiveClasses();
if(this.options.player){this._onPlayerReady=this._bindOnPlayerReady();this.playerIsReady(this.options.player).then(this._onPlayerReady)
}this.options.model.once("change:localization",this.render,this);this.options.model.on("change:timeupdate",this._onModelTimeUpdate,this)
},playerIsReady:function(o){var m=o.getReadyState();var n=o.getPreload();return new Promise(function(q,p){if(m===4){q()
}else{if(n==="metadata"){if(m===3){q()}else{o.on("loadedmetadata",q)}}else{o.on("canplay",q)
}}})},render:function(){this.el.innerHTML=this._getParsedTemplate(this.model.attributes);
i.add(this.el,this.className);i.add(this.el,this._getSkin());if(this._getSkin()===this._defaultSkin){this.el.setAttribute("data-hires","false")
}this._onRender().resolve()},_addInactiveClasses:function(){i.add(this.el,"inactive")
},_bindSetupElements:function(){return this._setupElements.bind(this)},_bindOnPlayerReady:function(){return this._onPlayerReady.bind(this)
},_currentTimeIsWholeNumber:function(m){m=Math.floor(m);if(m===0){return true}if(m!==this._previousCurrentTime){this._previousCurrentTime=m;
return true}},_defaultTemplate:'<div class="left row-1">\n\t<input type="button" class="{elementClassPrefix}-min-volume-button {elementClassPrefix}-button" value="{minvolume}" aria-label="{minvolume}" role="button" tabindex="0">\n\t<div class="{elementClassPrefix}-volume-level-indicator" max="1" step="0.09090909090909091"></div>\n\t<input type="button" class="{elementClassPrefix}-max-volume-button {elementClassPrefix}-button" value="{fullvolume}" aria-label="{fullvolume}" role="button" tabindex="0">\n</div>\n\n<div class="center row-1">\n\t<input type="button" class="{elementClassPrefix}-play-pause-button {elementClassPrefix}-button" value="{playpause}" aria-label="{playpause}" role="button" tabindex="0">\n</div>\n\n<div class="right row-1">\n\t<input type="button" class="{elementClassPrefix}-text-tracks-toggle-button {elementClassPrefix}-button no-text-tracks" value="{textTrackscontrol}" aria-label="{textTrackscontrol}" role="button" tabindex="0">\n\t<input type="button" class="{elementClassPrefix}-full-screen-button {elementClassPrefix}-button fullscreen-unsupported" value="{fullscreen}" aria-label="{fullscreen}" role="button" tabindex="0">\n</div>\n\n<div class="left row-2">\n\t<div class="{elementClassPrefix}-elapsed-time-indicator">\n\t\t<span class="label">{elapsed}</span>\n\t\t<span class="{elementClassPrefix}-elapsed-time" aria-label="{elapsed}" tabindex="0" role="timer" aria-value="00:00">00:00</span>\n\t</div>\n</div>\n\n<div class="center row-2">\n\t<div class="{elementClassPrefix}-buffered-indicator"></div>\n\t<div class="{elementClassPrefix}-progress-indicator" aria-label="progress-indicator" role="progressbar" precision="float" min="0" max="{max}" step="auto" value="0" tabindex="0" aria-valuemax="{max}" aria-valuemin="{min}" aria-valuenow="{value}"></div>\n</div>\n\n<div class="right row-2">\n\t<div class="{elementClassPrefix}-remaining-time-indicator">\n\t<span class="label">{remaining}</span>\n\t<span class="{elementClassPrefix}-remaining-time" aria-label="{remaining}" tabindex="0" role="timer" aria-value="-00:00">-00:00</span>\n</div>\n</div>\n\n<div class="{elementClassPrefix}-inactive-container"></div>',_defaultSkin:"control-bar-skin-default",_getPromise:function(){var n;
var m;var o;o=new Promise(function(q,p){n=q;m=p});o.resolve=n;o.reject=m;return o
},_getSkin:function(){return this.options.skin||this._defaultSkin},_getCurrentTime:function(m){return(m&&m.value)?m.value:this.options.player.getCurrentTime()
},_getParsedTemplate:function(n){var m=this.options.template||this._defaultTemplate;
return h.supplant(m,n)},_listenToModelVolumechange:function(){this.options.player.off("volumechange",this._onVolumeChange);
this.options.model.on("change:volume",this._onVolumeChange,this)},_listenToPlayerForVolumechange:function(){this.options.player.on("volumechange",this._onVolumeChange,this);
this.options.model.off("change:volume",this._onVolumeChange);this.options.player.setVolume(this.options.model.get("volume"))
},_onRender:function(){if(!this._onRenderPromise){this._onRenderPromise=this._getPromise()
}return this._onRenderPromise},_onModelTimeUpdate:function(m){if(this._currentTimeIsWholeNumber(m.value)){this._setModelRemainingAndElapsedTime(m.value)
}},_onPlayerTimeUpdate:function(){if(!this.options.model.get("ignoreTimeupdate")){var m=this.options.player.getCurrentTime();
this.options.model.set({timeupdate:m})}},_onPlayerReady:function(){this._setupElements=this._bindSetupElements();
this._onRender().then(this._setupElements);this.options.player.on("durationchange",this._onPlayerDurationChange,this);
this._onVolumeChange();this._onTimeupdate();this._removeInactiveClasses();this._onPlayerDurationChange();
this.options.player.on("timeupdate",this._onPlayerTimeUpdate,this);this._onVolumeChangeEvents()
},_onVolumeChangeEvents:function(){this.options.model.on("change:ignoreVolumechange",this._onModelIgnoreVolumechange,this);
this.options.player.on("volumechange loadedmetadata",this._onVolumeChange,this)
},_onVolumeChange:function(n){n=n||{};var m=n.value||this.options.player.getVolume();
this.options.model.set({volume:m})},_onTimeupdate:function(n){var m=this._getCurrentTime(n);
if(this._currentTimeIsWholeNumber(m)){this._setModelRemainingAndElapsedTime(m)}},_onModelIgnoreVolumechange:function(m){if(m.value){this._listenToModelVolumechange()
}else{this._listenToPlayerForVolumechange()}},_onPlayerDurationChange:function(){this.options.model.set({duration:this.options.player.getDuration()});
this._onTimeupdate()},_removeInactiveClasses:function(){i.remove(this.el,"inactive")
},_setupElements:function(){var m;for(var o in a){try{if(o.match(/^element$|^time$|^text-tracks$/)){continue
}m=b.querySelector("."+this.options.elementClassPrefix+"-"+a[o].className,this.el);
if(m){m=a[o].create(m,this.options);this.elements.push(m);if(m.events){this._setupElementEvents(m)
}}}catch(n){console.log("ERROR: ",o,n)}}},_setModelRemainingAndElapsedTime:function(o){var p=this.options.player.getDuration();
var n=f.formatTime(o-Math.floor(p));var m=f.formatTime(o);this.options.model.set({remainingTime:n,elapsedTime:m})
},_setupElementEvents:function(p){for(var o=0,m=p.events.length,n,r,q;o<m;o++){n=p.events[o];
r=p[n.callback];q=n.delegate||"."+this.options.elementClassPrefix+"-"+p.className;
this.on(n.type,q,r,p)}}});d.exports=c},{"./elements/back-30-seconds-button.js":755,"./elements/elapsed-time-indicator.js":756,"./elements/element.js":757,"./elements/full-screen-button.js":758,"./elements/max-volume-button.js":759,"./elements/min-volume-button.js":760,"./elements/mute-button.js":761,"./elements/mute-toggle-button.js":762,"./elements/pause-button.js":763,"./elements/play-button.js":764,"./elements/play-pause-button.js":765,"./elements/progress-indicator.js":766,"./elements/remaining-time-indicator.js":767,"./elements/text-tracks-off-button.js":768,"./elements/text-tracks-on-button.js":769,"./elements/text-tracks-toggle-button.js":770,"./elements/text-tracks.js":771,"./elements/volume-level-indicator.js":772,"./time":776,"ac-classlist":69,"ac-dom-traversal":620,"ac-mvc-view":677,"ac-string":747}],778:[function(b,c,a){c.exports={path:b("./ac-path/path")}
},{"./ac-path/path":779}],779:[function(b,c,a){function d(f){return d.parse(f)}d.basename=function(g,f){d._assertStr(g);
var i;var h=g.match(/[^/]*$/)[0];if(f){i=h.match(new RegExp("(.*)"+f+"$"));if(i){h=i[1]
}}return h};d.dirname=function(g){d._assertStr(g);var f=g.match(/^(.*)\b\/|.*/);
return f[1]||g};d.extname=function(f){d._assertStr(f);var g=f.match(/\.[^.]*$/);
return g?g[0]:""};d.filename=function(f){d._assertStr(f);return d.basename(f,d.extname(f))
};d.format=function(g,h){d._assertObj(g);var f=(g.dirname)?g.dirname+"/":"";if(g.basename){f+=g.basename
}else{if(g.filename){f+=g.filename;if(g.extname){f+=g.extname}}}if(h){if(typeof h==="string"){f+="?"+h
}else{if(Object.prototype.toString.call(h)===Object.prototype.toString.call([])){f+="?"+h.join("&")
}}}return f};d.isAbsolute=function(f){d._assertStr(f);return(!!f.match(/(^http(s?))/))
};d.isRootRelative=function(f){d._assertStr(f);return !!f.match(/^\/(?!\/)/)};d.parse=function(f){d._assertStr(f);
return{dirname:d.dirname(f),basename:d.basename(f),filename:d.filename(f),extname:d.extname(f)}
};d._assertStr=function(f){d._assertType(f,"string")};d._assertObj=function(f){d._assertType(f,"object")
};d._assertType=function(h,f){var g=typeof h;if(g==="undefined"||g!==f){throw new TypeError("path param must be of type "+f)
}};c.exports=d},{}],780:[function(b,c,a){c.exports={cname:b("./ac-cname/cname")}
},{"./ac-cname/cname":781}],781:[function(c,d,a){var f=c("ac-path").path;function b(g){return b.addPrefix(g)
}b._prefix=(function(){var g="http://images.apple.com/global/elements/blank.gif";return g.replace(/global\/.*/,"")
}());b.addPrefix=function(g){if(f.isAbsolute(g)){return g}b._assertRootRelative(g);
g=b._prefix+g.replace(/^\//,"");g=g.replace(/(^.+)(\/105\/)/,"$1/");return g};b.formatUrl=function(j,g,l,k){var i=f.format({dirname:j,filename:g,extname:l},k);
if(f.isAbsolute(i)){return i}b._assertRootRelative(j);var h=b.addPrefix(i);return h
};b._assertRootRelative=function(g){if(!f.isRootRelative(g)){throw new URIError("Only root-relative paths are currently supported")
}};d.exports=b},{"ac-path":778}],782:[function(b,c,a){var g=b("./helpers/globals");
var f=b("ac-function/once");var d=function(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("2d"))};c.exports=f(d);
c.exports.original=d},{"./helpers/globals":790,"ac-function/once":799}],783:[function(c,d,b){var h=c("ac-browser");
var a=c("./touchAvailable").original;var f=c("ac-function/once");function g(){return(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}d.exports=f(g);d.exports.original=g},{"./touchAvailable":814,"ac-browser":58,"ac-function/once":799}],784:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var k=false;var h=g.getDocument();var j=g.getNavigator();
try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";k=(h.cookie.indexOf("ac_feature_cookie")!==-1);
h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}catch(i){}return k
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":790,"ac-function/once":799}],785:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"ac-function/once":799,"ac-prefixer/getStyleValue":802}],786:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-prefixer/getStyleProperty");var h=c("ac-function/memoize");function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)
}else{return !!f(j)}}d.exports=h(a);d.exports.original=a},{"ac-function/memoize":798,"ac-prefixer/getStyleProperty":801,"ac-prefixer/getStyleValue":802}],787:[function(b,c,a){var f=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function g(){return !!f("margin","1vw 1vh")}c.exports=d(g);
c.exports.original=g},{"ac-function/once":799,"ac-prefixer/getStyleValue":802}],788:[function(b,d,a){var f=b("./helpers/globals");
var g=b("ac-function/memoize");function c(h,j){var i=f.getDocument();var k;j=j||"div";
k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c},{"./helpers/globals":790,"ac-function/memoize":798}],789:[function(c,f,b){var a=c("ac-prefixer/getEventType");
var g=c("ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);f.exports.original=d
},{"ac-function/memoize":798,"ac-prefixer/getEventType":800}],790:[function(b,c,a){c.exports=b(295)
},{}],791:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":782,"./continuousScrollEventsAvailable":783,"./cookiesAvailable":784,"./cssLinearGradientAvailable":785,"./cssPropertyAvailable":786,"./cssViewportUnitsAvailable":787,"./elementAttributeAvailable":788,"./eventTypeAvailable":789,"./isDesktop":792,"./isHandheld":793,"./isRetina":794,"./isTablet":795,"./localStorageAvailable":796,"./mediaElementsAvailable":797,"./sessionStorageAvailable":811,"./svgAvailable":812,"./threeDTransformsAvailable":813,"./touchAvailable":814,"./webGLAvailable":815}],792:[function(d,f,b){var a=d("./touchAvailable").original;
var h=d("./helpers/globals");var g=d("ac-function/once");function c(){var i=h.getWindow();
return(!a()&&!i.orientation)}f.exports=g(c);f.exports.original=c},{"./helpers/globals":790,"./touchAvailable":814,"ac-function/once":799}],793:[function(f,g,c){var d=f("./isDesktop").original;
var a=f("./isTablet").original;var h=f("ac-function/once");function b(){return(!d()&&!a())
}g.exports=h(b);g.exports.original=b},{"./isDesktop":792,"./isTablet":795,"ac-function/once":799}],794:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":790}],795:[function(d,f,b){var c=d("./isDesktop").original;
var h=d("./helpers/globals");var g=d("ac-function/once");function a(){var j=h.getWindow();
var i=j.screen.width;if(j.orientation&&j.screen.height<i){i=j.screen.height}return(!c()&&i>=600)
}f.exports=g(a);f.exports.original=a},{"./helpers/globals":790,"./isDesktop":792,"ac-function/once":799}],796:[function(c,d,a){var g=c("./helpers/globals");
var f=c("ac-function/once");function b(){var j=g.getWindow();var i=false;try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)
}catch(h){}return i}d.exports=f(b);d.exports.original=b},{"./helpers/globals":790,"ac-function/once":799}],797:[function(b,c,a){var g=b("./helpers/globals");
var d=b("ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
}c.exports=d(f);c.exports.original=f},{"./helpers/globals":790,"ac-function/once":799}],798:[function(c,d,b){var a=function(){var h="";
var g;for(g=0;g<arguments.length;g++){if(g>0){h+=","}h+=arguments[g]}return h};
d.exports=function f(i,h){h=h||a;var g=function(){var j=arguments;var k=h.apply(this,j);
if(!(k in g.cache)){g.cache[k]=i.apply(this,j)}return g.cache[k]};g.cache={};return g
}},{}],799:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)
}return f}}},{}],800:[function(b,c,a){c.exports=b(330)},{"./shared/camelCasedEventTypes":803,"./shared/prefixHelper":805,"./utils/eventTypeAvailable":808}],801:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":804,"./shared/prefixHelper":805,"./shared/stylePropertyCache":806,"./utils/toCSS":809,"./utils/toDOM":810}],802:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":801,"./shared/prefixHelper":805,"./shared/stylePropertyCache":806,"./shared/styleValueAvailable":807}],803:[function(b,c,a){c.exports=b(331)
},{}],804:[function(c,d,b){var f;d.exports=function a(){if(!f){f=document.createElement("_")
}else{f.style.cssText="";f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null
}},{}],805:[function(b,c,a){c.exports=b(332)},{}],806:[function(b,c,a){c.exports={}
},{}],807:[function(c,b,d){var a=c("./stylePropertyCache");var f=c("./getStyleTestElement");
var i=false;var k;var j;var g=function(){var l;if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);
j=false;l=f();try{l.style.width="invalid"}catch(m){j=true}}};b.exports=function h(o,n){var m;
var l;g();if(k){o=a[o].css;return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n
}catch(p){return false}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":804,"./stylePropertyCache":806}],808:[function(b,c,a){c.exports=b(333)
},{}],809:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],810:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],811:[function(c,d,b){var g=c("./helpers/globals");var f=c("ac-function/once");
function a(){var j=g.getWindow();var h=false;try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":790,"ac-function/once":799}],812:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":790,"ac-function/once":799}],813:[function(b,c,a){var g=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
}c.exports=d(f);c.exports.original=f},{"ac-function/once":799,"ac-prefixer/getStyleValue":802}],814:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":790,"ac-function/once":799}],815:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("webgl"))}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":790,"ac-function/once":799}],816:[function(c,d,b){c("ac-polyfills/Array/isArray");
var h=c("./extend");var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;
for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
f(i[k],j[k])}else{i[k]=j[k]}}}}return i};d.exports=function g(j,i){if(i){return f({},j)
}return h({},j)}},{"./extend":819,"ac-polyfills/Array/isArray":825}],817:[function(b,c,a){c.exports=b(19)
},{}],818:[function(b,c,a){arguments[4][20][0].apply(a,arguments)},{"./extend":819}],819:[function(c,d,b){c("ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"ac-polyfills/Array/prototype.forEach":826}],820:[function(b,c,a){c.exports=b(22)
},{}],821:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":816,"./create":817,"./defaults":818,"./extend":819,"./getPrototypeOf":820,"./isDate":822,"./isEmpty":823,"./isRegExp":824,"./toQueryParameters":828}],822:[function(b,c,a){c.exports=b(23)
},{}],823:[function(b,c,a){c.exports=b(24)},{}],824:[function(b,c,a){c.exports=b(25)
},{}],825:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],826:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],827:[function(b,c,a){c.exports=b(16)
},{}],828:[function(b,c,a){c.exports=b(26)},{qs:827}],829:[function(c,d,b){var a=c("./ac-video-posterframe/factory");
d.exports={create:a.create,AttributePoster:c("./ac-video-posterframe/PosterAttribute"),ImageTagPoster:c("./ac-video-posterframe/PosterImageTag"),defaultPosterPath:c("./ac-video-posterframe/defaultPosterPath")}
},{"./ac-video-posterframe/PosterAttribute":830,"./ac-video-posterframe/PosterImageTag":831,"./ac-video-posterframe/defaultPosterPath":832,"./ac-video-posterframe/factory":833}],830:[function(d,f,b){var h=d("ac-mvc-view").View;
var c=d("ac-object");var i="ac-video-poster-hide";function a(){h.apply(this,arguments)
}var g=a.prototype=c.create(h.prototype);g._renderPoster=function(){if(this.model.hasPoster()){this.el.setAttribute("poster",this.model.getPoster())
}else{this.el.removeAttribute("poster")}};g.render=function(){this._renderPoster();
this.model.on("posterchange",this._renderPoster,this)};f.exports=a},{"ac-mvc-view":677,"ac-object":821}],831:[function(c,f,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");var i="ac-video-poster-hide";function d(){h.apply(this,arguments);
this._img=null}var g=d.prototype=b.create(h.prototype);g.tagName="div";g.className=["ac-video-poster"];
g._renderSrc=function(){if(this.model.hasPoster()){if(!this._img){this._img=document.createElement("img");
this.el.appendChild(this._img)}this._img.setAttribute("src",this.model.getPoster())
}else{if(this._img&&this._img.parentNode===this.el){this.el.removeChild(this._img);
this._img=null}}};g._hide=function(){this.addClassName(i)};g._show=function(){this.removeClassName(i)
};g._onPlay=function(){var j=this.model.getCurrentTime();if(j===0){this._show();
this.model.once("timeupdate",this._hide,this)}};g._onReadyStateChange=function(j){if(j.readyState===0){this._show()
}};g.render=function(){this._renderSrc();this.model.on("readystatechange",this._onReadyStateChange,this);
this.model.on("posterchange",this._renderSrc,this);this.model.on("play",this._onPlay,this);
this.model.on("ended",this._show,this)};f.exports=d},{"ac-mvc-view":677,"ac-object":821}],832:[function(c,d,a){var b=c("ac-cname").cname;
d.exports=function f(){return b.formatUrl("/ac/ac-video-posterframe/1.0/images","poster848x480",".jpg")
}},{"ac-cname":780}],833:[function(g,i,d){var h=g("./PosterAttribute");var c=g("./PosterImageTag");
var b=g("ac-feature");function a(){return b.isHandheld()}i.exports={create:function f(j){var k=null;
if(a()){k=new h({model:j,element:j.getMediaElement()})}else{k=new c({model:j})}return k
}}},{"./PosterAttribute":830,"./PosterImageTag":831,"ac-feature":791}],834:[function(f,g,c){var d=f("./ac-video/player/Player");
d.create=f("./ac-video/player/factory/create");d.createFromElement=f("./ac-video/player/factory/createFromElement");
d.createFromAnchorTag=f("./ac-video/player/factory/createFromAnchorTag");var a=f("./ac-video/models/Video");
a.createFromVideoTag=f("./ac-video/models/video/factory/createFromVideoTag");var b=f("ac-video-controls");
g.exports={Player:d,Video:a}},{"./ac-video/models/Video":855,"./ac-video/models/video/factory/createFromVideoTag":857,"./ac-video/player/Player":858,"./ac-video/player/factory/create":859,"./ac-video/player/factory/createFromAnchorTag":860,"./ac-video/player/factory/createFromElement":861,"ac-video-controls":754}],835:[function(b,c,a){function f(g){this.el=g
}var d=f.prototype;d.setEl=function(g){this.el=g};d.play=function(){this.el.play()
};d.pause=function(){this.el.pause()};d.setCurrentTime=function(g){this.el.currentTime=g
};d.getCurrentTime=function(){return this.el.currentTime};d.setPreload=function(g){this.el.preload=g
};d.getWidth=function(){return this.el.videoWidth};d.getHeight=function(){return this.el.videoHeight
};d.setControls=function(g){this.el.controls=g};d.setSrc=function(g){this.el.src=g
};d.getSrc=function(){return this.el.src};d.getControls=function(){return this.el.controls
};d.setMuted=function(g){this.el.muted=g};d.setVolume=function(g){this.el.volume=g
};d.getVolume=function(){return this.el.volume};d.getDuration=function(){return this.el.duration
};d.setPlaybackRate=function(g){this.el.playbackRate=g};d.getPlaybackRate=function(){return this.el.playbackRate
};d.getDefaultPlaybackRate=function(){return this.el.defaultPlaybackRate};d.setLoop=function(g){this.el.loop=g
};d.getLoop=function(){return this.el.loop};d.getCurrentSrc=function(){return this.el.currentSrc
};d.getPlayed=function(){return this.el.played};d.addTextTrack=function(h,g,i){return this.el.addTextTrack(h,g,i)
};d.getTextTracks=function(){var g=this.el.textTracks||[];return Array.prototype.map.call(g,function(i,h){i.index=h;
return i})};d.getBuffered=function(){return this.el.buffered};c.exports=f},{}],836:[function(c,d,b){var a=c("ac-object");
function g(h){this.el=h;this._boundChangeSrc=this._changeSrc.bind(this);this._incomingSrc
}var f=g.prototype;f.setEl=function(h){this.el=h};f.play=function(){this.el.Play()
};f.pause=function(){this.el.Stop()};f.setCurrentTime=function(h){this.el.SetTime(h*this.el.GetTimeScale())
};f.setPreload=function(h){};f.getCurrentTime=function(){var i=0;if(this._incomingSrc){return i
}try{i=this.el.GetTime()/this.el.GetTimeScale()}catch(h){}return i};f.getWidth=function(){var j=undefined;
try{var k=this.el.GetRectangle();var i=this.el.GetMatrix();var j=+k.split(",")[2];
var h=parseFloat(i.split(",")[0]);j=Math.round(j/h)}catch(l){}return j};f.getHeight=function(){var h=undefined;
try{var k=this.el.GetRectangle();var j=this.el.GetMatrix();var h=+k.split(",")[3];
var i=parseFloat(j.split(",")[3]);h=Math.round(h/i)}catch(l){}return h};f.setMuted=function(h){this.el.SetMute(h)
};f.setVolume=function(h){this.el.SetVolume(h*256)};f.getVolume=function(){return this.el.GetVolume()/256
};f.getDuration=function(){var i=NaN;if(this._incomingSrc){return NaN}try{i=this.el.GetDuration()/this.el.GetTimeScale()
}catch(h){}return i};f.setLoop=function(h){this.el.SetIsLooping(h)};f.getLoop=function(){return this.el.GetIsLooping()
};f.setPlaybackRate=function(h){this.el.SetRate(h)};f.getPlaybackRate=function(){var h=1;
try{h=this.el.GetRate()}catch(i){}return h};f._changeSrc=function(){try{this.el.SetResetPropertiesOnReload(false);
this.el.SetURL(this._incomingSrc)}catch(h){}this._incomingSrc=null};f.setSrc=function(h){this._incomingSrc=h;
window.requestAnimationFrame(this._boundChangeSrc)};f.getSrc=function(){return this.el.GetURL()
};f.getCurrentSrc=function(){return this.el.GetURL()};f.getDefaultPlaybackRate=function(){return 1
};f.getPlayed=function(){};f.getBuffered=function(){return[[0,this.element.GetMaxTimeLoaded()/this.element.GetTimeScale()]]
};f.showTextTrack=function(h){this.el.SetTrackEnabled(h,true)};f.hideTextTrack=function(h){this.el.SetTrackEnabled(h,false)
};f.setControls=function(h){this.el.SetControllerVisible(h)};f.getControls=function(){return this.el.GetControllerVisible()
};f.getTextTracks=function(){var j=[];var h=this.el.GetTrackCount();for(var k=1;
k<=h;k++){var l=this.el.GetTrackType(k);if(l==="Subtitle"||l==="Closed Caption"){j.push({kind:l,label:this.el.GetTrackName(k),mode:(this.el.GetTrackEnabled(k))?"showing":"hidden",index:k})
}}return j};d.exports=g},{"ac-object":680}],837:[function(f,g,d){var c=f("./HTML5VideoAPI");
var b=f("./QuickTimeAPI");var a={create:function(h,i){if(i==="video"){return new c(h)
}else{return new b(h)}}};g.exports=a},{"./HTML5VideoAPI":835,"./QuickTimeAPI":836}],838:[function(c,g,b){var h=c("ac-mvc-collection").Collection;
var f=c("./../models/MediaSource");var a=c("ac-object");var d=function(){h.apply(this,arguments)
};var i=d.prototype=a.create(h.prototype);i.ModelType=f;g.exports=d},{"./../models/MediaSource":853,"ac-mvc-collection":646,"ac-object":680}],839:[function(c,d,b){var f=c("ac-mvc-collection").Collection;
var i=c("./../models/TextTrackModel");var a=c("ac-object");var h=function(){f.apply(this,arguments)
};var g=h.prototype=a.create(f.prototype);g.ModelType=i;g.createTextTrackFromNativeTrack=function(k){var j=new i(k);
j.setNativeTextTrack(k);this.add(j);return j};g.count=function(){return this.models.length
};g.findTextTrackModelFromNativeTrack=function(k){var j=this.filter(function(l){if(l.getNativeTextTrack()===k){return l
}return false})[0];return j||null};g.getEnabledTextTracks=function(){var j=this.filter(function(k){if(k.get("mode")!=="disabled"){return k
}return false});return new h({models:j})};g._findTextTrack=function(k){var j;if(this.indexOf(k)>-1){j=k
}else{if(typeof k==="number"){j=this.at(k)}else{if(typeof k==="string"){j=this.get(k)
}else{j=this.find(k,{limit:1})[0]}}}return j};g.getVisibleTextTracks=function(){var j=this.find({mode:"showing"});
return new h({models:j})};g.findTextTrack=function(j){return this._findTextTrack(j)
};d.exports=h},{"./../models/TextTrackModel":854,"ac-mvc-collection":646,"ac-object":680}],840:[function(b,c,a){function f(){this._boundEventListeners=[];
this._collection=[]}var d=f.prototype;d.add=function(j){j=Array.prototype.slice.call(arguments,0);
var g=j.length;var k;var h;for(h=0;h<g;h++){if(this._collection.indexOf(j[h])<0){k=j[h];
this._setup(k);this._collection.push(k)}}};d.remove=function(j){j=Array.prototype.slice.call(arguments,0);
var g=j.length;var h;var k;for(h=0;h<g;h++){k=this._collection.indexOf(j[h]);if(k>-1){this._teardown(j[h]);
this._collection.splice(k,1)}}};d._setup=function(i){var g=this._pauseOtherVideos.bind(this,i);
var j=this.remove.bind(this,i);var h={video:i,eventListeners:{playListener:g,destroyListener:j}};
this._boundEventListeners.push(h);i.on("play",g);i.on("acv-destroy",j)};d._teardown=function(i){var h=this._boundEventListeners.filter(function(j){return j.video===i
},this);if(h.length){h=h.pop();i.off("play",h.eventListeners.playListener);i.off("acv-destroy",h.eventListeners.destroyListener);
var g=this._boundEventListeners.indexOf(h);this._boundEventListeners.splice(g,1)
}};d._getOtherVideos=function(g){return this._collection.filter(function(h){return h!==g
},this)};d._pauseOtherVideos=function(g){var h=this._getOtherVideos(g);h.forEach(function(i){i.pause()
})};c.exports=new f()},{}],841:[function(d,c,h){var f=d("ac-object");var l=d("ac-dom-traversal");
var k=d("ac-browser");var m=d("ac-deferred").Deferred;var n="v";var b=function(o,p){var q=o.getAttribute(p);
if(q===null){return false}else{if(q===""){return false}}return true};var a=(function(){function o(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)
}return function(){return o()+o()+"-"+o()+"-"+o()+"-"+o()+"-"+o()+o()+o()}}());
function g(){return/^(iOS|Android)$/.test(k.os)}function i(){this._possibleTemplateKeys=["autoplay","buffered","endframe","controls","height","loop","muted","poster","preload","suffix","width","controlbar","controlbarwidth","controlbarskinning","disablecaptionscontrol"];
this._defaultTemplateValues={autoplay:false,muted:false,loop:false,controls:false,preload:"metadata",controlbarwidth:"450",controlbarskinning:"ac-video-controlbar",disablecaptionscontrol:false}
}var j=i.prototype;j.getSource=function(q){var r=/[^/]*.[^\.]*$/;var p=null;var s={};
if(b(q,"data-src")){p=q.getAttribute("data-src")}else{if(b(q,"href")){p=q.getAttribute("href")
}else{if(b(q,"src")){p=q.getAttribute("src")}else{var o=l.querySelector("source",q);
if(o&&b(o,"src")){p=o.getAttribute("src")}}}}if(p){s.defaultSource=p;s.videoSource=p.match(r)[0];
s.directory=p.replace(s.videoSource,"");s.videoFileName=s.videoSource.split(".")[0]
}return s};j.getConfig=function(r,q,t){var s=new m();var p={};var o=this.getSource(r);
this.isAppleMobileDevice=(k.os==="iOS");p=this._getValues(r,t);this._videoRecommendation=q;
p.videoTemplate=q.videoTemplate;s.resolve();return s.promise().then(function(){p.usesFullScreen=(p.usesFullScreen&&p.videoTemplate==="elementVideo");
p.source=o.defaultSource;return p})};j._buildFileSuffix=function(p){var r="";if(p.suffix){r="_"+p.suffix
}else{if(p.height&&p.width){var o=p.height.replace("px","").replace("em","").replace("rem","");
var q=p.width.replace("px","").replace("em","").replace("rem","");r="_"+q+"x"+o
}}return r};j._getRecommendedCaptionsPaths=function(p,o){var q=[];q.push(p+o+"-captions."+n+"tt");
return q};j._generateRecommendedVideoPaths=function(p,o){var r=this._buildFileSuffix(o);
var q=[];this._videoRecommendation.supportedProfiles.forEach(function(s){if(s.sizeRelevant){p=p+r
}q.push(p+"."+s.fileExtension)});return q};j._getValues=function(p,r){var q="ac-video-"+a();
var o=this._defaultTemplateValues;f.extend(o,this._getMarkupValues(p));if(r){f.extend(o,r)
}if(g()){o["native"]=true;o.controls="true"}o.targetId=p.id;o.domId=q;o.eventId=q+"-quicktime-event";
o.wrapperId=q+"-wrapper";return o};j._getMarkupValues=function(o){var p={};this._possibleTemplateKeys.forEach(function(q){if(b(o,q)){p[q]=o.getAttribute(q)
}else{if(b(o,"data-acv-"+q)){p[q]=o.getAttribute("data-acv-"+q)}}if((q==="autoplay"||q==="controls"||q==="muted"||q==="loop")&&p[q]&&p[q].length>0){p[q]=true
}if(typeof(p[q])==="string"&&/^(true|false)$/.test(p[q])){p[q]=(p[q]==="true")?true:false
}});return p};j.addPossibleTemplateKeys=function(o){o.forEach(function(p){if(!this._possibleTemplateKeys.indexOf(p)){this._possibleTemplateKeys.push(p)
}},this)};c.exports=i},{"ac-browser":58,"ac-dom-traversal":620,"ac-object":680}],842:[function(b,c,a){c.exports={LOADEDMETADATA:1,LOADEDDATA:2,CANPLAY:3,CANPLAYTHROUGH:4}
},{}],843:[function(c,b,d){var h=c("./TextTracksController");var i=c("./../../views/textTracks/TextTracksCollectionView");
var j=c("./../../views/textTracks/TextTrackRender");var g=c("./../../models/TextTrackModel");
var a=c("ac-object");function k(){h.apply(this,arguments);this.view=this.options.view||new i({element:this.mediaElement.el});
this._textTrackRenderViews=[];this._addViewEvents()}var f=k.prototype=a.create(h.prototype);
f._holdingTextTrackModels={};f._addViewEvents=function(){this.view.on("addtrack",this._respondToAddTrackEvent,this);
this.view.on("change",this._respondToChangeTrackEvent,this);this.view.on("removetrack",this._respondToRemoveTrackEvent,this)
};f._respondToAddTrackEvent=function(m){var l=this.mediaElement.el.textTracks;var n;
var s=[];var p=m.data.track;var r=this.model.findTextTrackModelFromNativeTrack(p);
if(!r&&p&&p.id&&this._holdingTextTrackModels[p.id]){r=this._holdingTextTrackModels[p.id];
r.setNativeTextTrack(p);this.model.add(r);this._holdingTextTrackModels[p.id]=undefined;
var q=this._createTextTrackRenderView(p,r);q.renderMode()}if(r===null){this._createTextTrackFromNativeTrack(p)
}else{r.set({mode:p.mode})}if(r){r.on("change:mode",function(){if("webkitClosedCaptionsVisible" in this.mediaElement.el&&r.get("mode")==="showing"){this.mediaElement.el.webkitClosedCaptionsVisible=true
}},this)}if(l){for(var o=0;o<l.length;o+=1){n=this.model.findTextTrackModelFromNativeTrack(l[o]);
n.set({mode:l[o].mode});s.push(n)}this.model.reset(s)}this.trigger("addtrack",m)
};f._createTextTrackRenderView=function(o,m){var l=this.mediaElement.el;var n=new j({element:o,model:m});
m.on("change:mode",this._onTextTrackModeChange,this);n.render();return n};f._createTextTrackFromNativeTrack=function(m){var l=this.model.createTextTrackFromNativeTrack(m);
this._createTextTrackRenderView(m,l);return l};f._onTextTrackModeChange=function(l){if(l.value==="showing"){this.trigger("texttrackshow")
}else{this.trigger("texttrackhide")}};f._respondToChangeTrackEvent=function(l){this.trigger("changetrack",l)
};f._respondToRemoveTrackEvent=function(l){this.trigger("removetrack",l)};f.addTextTrackFromRemoteVTT=function(m){var l=new g(m);
this._holdingTextTrackModels[l.cid]=l;this.view.addTextTrackTag(l)};f.addTextTrack=function(n,l,o){var m=this.mediaElement.addTextTrack(n,l,o);
return this._createTextTrackFromNativeTrack(m)};f.populateTextTracks=function(){var l=this.mediaElement.getTextTracks();
if(l){l.forEach(function(m){if(this.model.findTextTrackModelFromNativeTrack(m)===null){this._createTextTrackFromNativeTrack(m)
}},this)}};b.exports=k},{"./../../models/TextTrackModel":854,"./../../views/textTracks/TextTrackRender":872,"./../../views/textTracks/TextTracksCollectionView":874,"./TextTracksController":845,"ac-object":680}],844:[function(c,b,f){var j=c("ac-event-emitter").EventEmitter;
var h=c("./TextTracksController");var i=c("./../../views/textTracks/QuickTimeTextTrackDisplay");
var a=c("ac-object");function d(k,l){h.apply(this,arguments)}var g=d.prototype=a.create(h.prototype);
g._createTextTrackFromNativeTrack=function(m){var l=this.model.createTextTrackFromNativeTrack(m);
var k=new i({element:this.mediaElement,model:l,index:m.index});l.on("change:mode",this._onTrackModeChange,this);
k.render();this.trigger("addtrack")};g._onTrackModeChange=function(k){this.trigger("changetrack");
if(k.value==="showing"){this.trigger("texttrackshow")}else{this.trigger("texttrackhide")
}};g.populateTextTracks=function(){var k=this.mediaElement.getTextTracks();if(k){k.forEach(function(l){if(this.model.findTextTrackModelFromNativeTrack(l)===null){this._createTextTrackFromNativeTrack(l)
}},this)}};b.exports=d},{"./../../views/textTracks/QuickTimeTextTrackDisplay":871,"./TextTracksController":845,"ac-event-emitter":284,"ac-object":680}],845:[function(d,f,b){var h=d("ac-event-emitter").EventEmitter;
var i=d("./../../collection/TextTrackCollection");var c=d("ac-object");function a(j,k){this.options=k||{};
this.mediaElement=j;this.model=this.options.model||new i()}var g=a.prototype=c.create(h.prototype);
g.addTextTrackFromRemoteVTT=function(j){};g.addTextTrack=function(){};g.removeTextTrack=function(){};
g.getEnabledTextTracks=function(){return this.model.getEnabledTextTracks.apply(this.model,arguments)
};g.getTextTracks=function(){return this.model};g.getTextTracksCount=function(){return this.model.count()
};g.getVisibleTextTracks=function(){return this.model.getVisibleTextTracks()};g.findTextTrack=function(j){return this.model.findTextTrack(j)
};g.addTextTrack=function(l,j,m){var k=this.mediaElement.addTextTrack(l,j,m)};g.populateTextTracks=function(){};
f.exports=a},{"./../../collection/TextTrackCollection":839,"ac-event-emitter":284,"ac-object":680}],846:[function(c,b,d){var h=c("./TextTracksController");
var g=c("./../../models/TextTrackModel");var i=c("./../../views/textTracks/WebkitClosedCaptionsView");
var a=c("ac-object");var k=c("ac-browser");function j(){h.apply(this,arguments)
}var f=j.prototype=a.create(h.prototype);f._onTextTrackModeChange=function(l){if(l.value==="showing"){this.trigger("texttrackshow")
}else{this.trigger("texttrackhide")}};f.populateTextTracks=function(){var m=this.mediaElement.el;
var l;var n=m.webkitHasClosedCaptions;if(n===true){if(!this.view){this.view=new i({element:m})
}l=new g({mode:"hidden"});this.view.setModel(l);l.on("change:mode",this._onTextTrackModeChange,this);
this.model.reset([l]);this.trigger("addtrack",{textTrack:l});if(k.name==="Safari Mobile"&&k.version<7){l.once("change:mode",this.view.render,this.view)
}else{this.view.render()}}};b.exports=j},{"./../../models/TextTrackModel":854,"./../../views/textTracks/WebkitClosedCaptionsView":875,"./TextTracksController":845,"ac-browser":58,"ac-object":680}],847:[function(c,d,b){function a(g){this.options=g||{};
this.player=this.options.player;this.player.setControls(true)}var f=a.prototype;
a.create=function(g){return new a(g)};d.exports=a},{}],848:[function(f,d,i){var n=f("./../models/Video");
var o=f("ac-event-emitter").EventEmitter;var a=f("ac-mvc-view").View;var c=f("./../views/mediaView/MediaView");
var h=f("ac-object");var m=f("./../controller/textTracks/NativeTextTracksController");
var k=f("ac-fullscreen");var l=f("ac-feature");var b=f("./../const/readyState");
function g(q,p){this.playableObject=q;this.options=p||{};this.model=this._getOrCreateVideo();
this.view=this._getOrCreateView();this.textTracks=this._getOrCreateTextTracksController();
this._sourceReadyBinding=false;o.call(this);this._bindTextTrackEvents();this._bindModelEvents();
this._checkToRenderView()}var j=g.prototype=h.create(o.prototype);j._bindTextTrackEvents=function(){this.textTracks.on("addtrack",this._onAddTrack,this);
this.textTracks.on("change",this._onTrackChange,this);this.textTracks.on("removetrack",this._onRemoveTrack,this);
this.textTracks.on("texttrackshow",this._onTextTrackShow,this);this.textTracks.on("texttrackhide",this._onTextTrackHide,this)
};j._onTextTrackHide=function(){this.trigger("texttrackhide")};j._onTextTrackShow=function(){this.trigger("texttrackshow")
};j._onAddTrack=function(){this.trigger("addtrack")};j._onTrackChange=function(){this.trigger("change")
};j._onRemoveTrack=function(){this.trigger("removetrack")};j._onAddTrack=function(){this.trigger("addtrack")
};j._checkToRenderView=function(){if(this.model.getCurrentSrc()){this._onSourceReady()
}else{if(!this._sourceReadyBinding){this.model.once("change:currentSrc",this._onSourceReady,this);
this._sourceReadyBinding=true}}};j._onSourceReady=function(){if(this.model.getPreload()!=="none"){this.view.render();
this.playableObject.setEl(this.view.getMediaElement());this._bindViewEvents()}this._sourceReadyBinding=false
};j._getOrCreateView=function(){var p=this.options.view;if(!p){p=new c({model:this.model})
}p.on("mediaelementchange",this._onMediaElementChange,this);return p};j._onMediaElementChange=function(){this.playableObject.setEl(this.view.getMediaElement())
};j._getOrCreateTextTracksController=function(){var p=this.options.textTracks;if(p===undefined){p=new m(this.playableObject)
}return p};j._getOrCreateVideo=function(){var p=this.options.model;if(p===undefined){p=new n()
}else{if(!(p instanceof n)){p=new n(p)}}return p};j._bindModelEvents=function(){this.model.on("change:muted",this._onMutedChange,this);
this.model.on("change:seeking",this._onModelSeekingChange,this);this.model.on("change:paused",this._onPausedChange,this);
this.model.on("change:playbackRate",this._onPlaybackRateChange,this);this.model.on("change:duration",this._onDurationChange,this);
this.model.on("change:volume",this._onVolumeChange,this);this.model.on("change:readyState",this._onReadyStateChange,this);
this.model.on("change:poster",this._onPosterChange,this)};j._bindViewEvents=function(){this.view.on("play",this._respondToPlay,this);
this.view.on("pause",this._respondToPause,this);this.view.on("timeupdate",this._respondToTimeUpdate,this);
this.view.on("ended",this._respondToEnded,this);this.view.on("ratechange",this._respondToRateChange,this);
this.view.on("durationchange",this._respondToDurationChange,this);this.view.on("loadedmetadata",this._respondToLoadedMetaData,this);
this.view.on("loadeddata",this._respondToLoadedData,this);this.view.on("canplay",this._respondToCanPlay,this);
this.view.on("canplaythrough",this._respondToCanPlayThrough,this)};j._populateTextTracks=function(){this.textTracks.populateTextTracks()
};j._respondToLoadedMetaData=function(){this._populateTextTracks();this._setReadyState(1)
};j._onPosterChange=function(){this.trigger("posterchange")};j._respondToLoadedData=function(){this._setReadyState(2)
};j._respondToCanPlay=function(){this._setReadyState(3)};j._respondToCanPlayThrough=function(){this._setReadyState(4)
};j._respondToDurationChange=function(){this.model.set({duration:this.playableObject.getDuration()})
};j._respondToRateChange=function(){if(this.playableObject.getPlaybackRate){this.model.set({playbackRate:this.playableObject.getPlaybackRate()})
}};j._respondToEnded=function(){this.model.set({ended:true});this.trigger("ended")
};j._respondToPlay=function(){var p=this.getMediaElement();if(k.fullscreenElement()!==p&&k.getMode()==="ios"&&l.isHandheld()){try{k.requestFullscreen(this.getMediaElement())
}catch(q){}}this.model.set({paused:false,ended:false})};j._respondToPause=function(){this.model.set({paused:true})
};j._triggerTimeUpdate=function(){this.trigger("timeupdate",{currentTime:this.getCurrentTime()})
};j._respondToTimeUpdate=function(){if(this.model.getCurrentTime()!==this.playableObject.getCurrentTime()){this.model.setCurrentTime(this.playableObject.getCurrentTime());
this._triggerTimeUpdate()}if(this.model.getSeeking()===true){this.model.set({seeking:false})
}};j._onReadyStateChange=function(p){if(p.value===b.LOADEDMETADATA){this.trigger("loadedmetadata")
}else{if(p.value===b.LOADEDDATA){this.trigger("loadeddata")}else{if(p.value===b.CANPLAY){this.trigger("canplay")
}else{if(p.value===b.CANPLAYTHROUGH){this.trigger("canplaythrough")}}}}this.trigger("readystatechange",{readyState:p.value})
};j._setReadyState=function(p){this.model.set({readyState:p})};j._onMutedChange=function(){this.trigger("volumechange");
if(this.model.getMuted()===false){this._setElementVolume(this.model.getVolume())
}};j._onVolumeChange=function(){this.trigger("volumechange")};j._onDurationChange=function(p){if(isNaN(p.previous)&&isNaN(p.value)){return
}this.trigger("durationchange")};j._onPlaybackRateChange=function(){this.trigger("ratechange")
};j._onPausedChange=function(p){if(p.value===true){this.trigger("pause")}else{this.trigger("play")
}};j._onModelSeekingChange=function(p){if(p.value===true){this.trigger("seeking")
}else{this.trigger("seeked")}};j.findTextTrack=function(p){return this.textTracks.findTextTrack(p)
};j.getTextTracks=function(){return this.textTracks.getTextTracks()};j.getTextTracksCount=function(){return this.textTracks.getTextTracksCount()
};j.addTextTrackFromRemoteVTT=function(){this.textTracks.addTextTrackFromRemoteVTT.apply(this.textTracks,arguments)
};j.addTextTrack=function(q,p,r){return this.textTracks.addTextTrack(q,p,r)};j.getEnabledTextTracks=function(){return this.textTracks.getEnabledTextTracks.apply(this.textTracks,arguments)
};j.getVisibleTextTracks=function(){return this.textTracks.getVisibleTextTracks()
};j.play=function(){if(this.getPaused()===false){return}this.playableObject.play()
};j.pause=function(){if(this.getPaused()===true){return}this.playableObject.pause()
};j.getVideo=function(){return this.model};j.getPaused=function(){return this.model.getPaused()
};j.setMuted=function(p){this.model.setMuted(p);this.playableObject.setMuted(p)
};j.getMuted=function(){return this.model.getMuted()};j.getEnded=function(){return this.model.getEnded()
};j._setElementVolume=function(p){this.playableObject.setVolume(p)};j.setVolume=function(p){this.model.setVolume(p,{silent:true});
if(this.getMuted()===false){this._setElementVolume(p)}};j.getVolume=function(){return this.model.getVolume()
};j.setCurrentTime=function(q){var p=this.getCurrentTime();this.model.set({seeking:true});
this.playableObject.setCurrentTime(q);if(p===q){this.model.set({seeking:false})
}};j.getWidth=function(){return this.playableObject.getWidth()};j.getHeight=function(){return this.playableObject.getHeight()
};j.getCurrentTime=function(){return this.model.getCurrentTime()};j.setPlaybackRate=function(q){var p=this.model.getPlaybackRate();
if(p!==q){this.playableObject.setPlaybackRate(q)}};j.getPlaybackRate=function(){return this.model.getPlaybackRate()
};j.getDuration=function(){return this.model.getDuration()};j.setAutoplay=function(p){this.playableObject.SetAutoPlay(p)
};j.getAutoplay=function(){return this.playableObject.GetAutoPlay()};j.getCaptionsTracks=function(){return this.playableObject.getCaptionsTracks()
};j.setLoop=function(p){this.model.setLoop(p);this.playableObject.setLoop(p)};j.getLoop=function(){return this.model.getLoop()
};j.getError=function(){};j.getVideoWidth=function(){};j.getVideoHeight=function(){};
j.getPoster=function(){return this.model.getPoster()};j.setPoster=function(p){this.model.setPoster(p)
};j.hasPoster=function(){return !!(this.model.getPoster())};j._resetModelPlaybackAttributes=function(){this.model.set({duration:this.playableObject.getDuration(),currentTime:this.playableObject.getCurrentTime(),playbackRate:this.playableObject.getPlaybackRate(),readyState:0,paused:true,ended:false,seeking:false});
this._triggerTimeUpdate()};j.setSrc=function(q){var r=this.model.findSources(q)[0];
var p=this.model.getCurrentSrc();if(p){p=p.get("src")}if(r===undefined){r=this.model.addSource(q)
}if(p!==r.get("src")){this.model.setCurrentSrc(r);this.playableObject.setSrc(r.get("src"));
this._resetModelPlaybackAttributes()}return r};j.getPreload=function(){return this.model.getPreload()
};j.setPreload=function(p){this.model.setPreload(p);this.playableObject.setPreload(p);
this._checkToRenderView()};j.getCurrentSrc=function(){return this.model.getCurrentSrc()
};j.getSources=function(){return this.model.getSources()};j.getNetworkState=function(){return this.model.get("networkState")
};j.getReadyState=function(){return this.model.get("readyState")};j.getControls=function(){return this.model.get("controls")
};j.setControls=function(p){this.model.set({controls:p});this.playableObject.setControls(p)
};j.getDefaultPlaybackRate=function(){return this.model.getDefaultPlaybackRate()
};j.getSeekable=function(){return this.getBuffered()};j.getDefaultMuted=function(){return this.model.get("defaultMuted")
};j.getSeeking=function(){return this.model.get("seeking")};j.getPlayed=function(){return this.playableObject.getPlayed()
};j.getBuffered=function(){return this.playableObject.getBuffered()};j.getMediaElement=function(){return this.view.getMediaElement()
};j.appendTo=function(){return this.view.appendTo.apply(this.view,arguments)};j.getViewElement=function(){return this.view.el
};d.exports=g},{"./../const/readyState":842,"./../controller/textTracks/NativeTextTracksController":843,"./../models/Video":855,"./../views/mediaView/MediaView":865,"ac-event-emitter":284,"ac-feature":639,"ac-fullscreen":336,"ac-mvc-view":677,"ac-object":680}],849:[function(b,f,a){var g=b("./../../recommendation/vat");
var d=b("./createQuickTime");var h=b("./createHTML5Video");function c(l,i){i=i||{};
var j=i.type||g.get();var k;if(j==="quicktime"){k=d(l,i)}else{k=h(l,i)}return k
}f.exports=c},{"./../../recommendation/vat":862,"./createHTML5Video":851,"./createQuickTime":852}],850:[function(c,d,b){var h=c("./create");
var a=c("./../../models/video/factory/createFromVideoTag");var f=c("./../../recommendation/vat");
function g(m,k){k=k||{};k.element=m;var l=k.type=f.get();var o=a(m,k);var j=o.getSources();
var n;var i=j.find({src:m.currentSrc})[0];if(l==="quicktime"){i=j.find({type:"video/quicktime"})[0];
if(!i&&j.models.length===1){i=j.at(0)}}if(i){o.setSrc(i)}n=h(o,k);if(n.getViewElement()!==m){m.parentNode.replaceChild(n.getViewElement(),m)
}return n}d.exports=g},{"./../../models/video/factory/createFromVideoTag":857,"./../../recommendation/vat":862,"./create":849}],851:[function(f,b,i){var d=f("./../../views/mediaView/HTML5Video");
var h=f("./../MediaController");var a=f("./../../adapter/element-adapter");var c=f("./../../controller/textTracks/NativeTextTracksController");
var g=f("./../../controller/textTracks/WebkitClosedCaptions");var j=f("./../../models/Video");
var k=function(r,o){o=o||{};if(!(r instanceof j)){r=new j(r)}var n=o.view||new d({model:r,element:o.element,template:"elementVideo"});
var m=n.getMediaElement();var p=a.create(m,"video");var l;if(!("textTracks" in m)&&"webkitClosedCaptionsVisible" in m){l=new g(p)
}else{l=new c(p)}if(o.textTracks){o.textTracks.forEach(function(s){var t=s;if(typeof s==="string"){t={src:s}
}l.addTextTrackFromRemoteVTT(t)})}var q=new h(p,{model:r,view:n,textTracks:l});
return q};b.exports=k},{"./../../adapter/element-adapter":837,"./../../controller/textTracks/NativeTextTracksController":843,"./../../controller/textTracks/WebkitClosedCaptions":846,"./../../models/Video":855,"./../../views/mediaView/HTML5Video":864,"./../MediaController":848}],852:[function(c,b,f){var h=c("./../../views/mediaView/QuickTime");
var a=c("./../../adapter/element-adapter");var d=c("./../MediaController");var g=c("./../../controller/textTracks/QuickTimeTextTrackController");
var j=c("./../../models/Video");var i=function(p,m){var q;var o;var k;var l;var n;
m=m||{};if(!(p instanceof j)){p=new j(p)}l=new h({model:p});k=l.getMediaElement();
q=a.create(k,"quicktime");n=new g(q);o=new d(q,{model:p,view:l,textTracks:n});return o
};b.exports=i},{"./../../adapter/element-adapter":837,"./../../controller/textTracks/QuickTimeTextTrackController":844,"./../../models/Video":855,"./../../views/mediaView/QuickTime":866,"./../MediaController":848}],853:[function(c,f,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function d(){h.apply(this,arguments)}var g=d.prototype=a.create(h.prototype);
g.defaultAttributes={};g.getFullyQualifiedURL=function(){var k=this.get("src");
var j;var i=window.location.origin||window.location.protocol+"//"+window.location.hostname;
if(/http(s)?/.test(k)){return k}else{if(k.slice(0,2)==="//"){return window.location.protocol+k
}else{if(k[0]!=="/"){j=window.location.pathname;j=j.substring(0,j.lastIndexOf("/")+1);
return i+j+k}}}return i+k};f.exports=d},{"ac-mvc-model":903,"ac-object":680}],854:[function(c,d,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function g(i){h.apply(this,arguments)}var f=g.prototype=a.create(h.prototype);
f.defaultAttributes={mode:"disabled"};f.setNativeTextTrack=function(i){this._nativeTextTrack=i
};f.getNativeTextTrack=function(){return this._nativeTextTrack};f.getCues=function(){return this._nativeTextTrack.cues
};f.removeCue=function(i){this._nativeTextTrack.removeCue(i)};f.addCue=function(l,j,k){var i=new VTTCue(l,j,k);
this.addVTTCue(i)};f.addVTTCue=function(i){this._nativeTextTrack.addCue(i)};f.show=function(){this.set({mode:"showing"})
};f.hide=function(){this.set({mode:"hidden"})};f.disable=function(){this.set({mode:"disabled"})
};d.exports=g},{"ac-mvc-model":903,"ac-object":680}],855:[function(f,c,h){var d=f("ac-mvc-model").Model;
var g=f("ac-object");var m=f("./../collection/MediaSourceCollection");var k=f("./../collection/TextTrackCollection");
var j=f("./MediaSource");var b=f("ac-video-posterframe");var a=b.defaultPosterPath();
function l(){d.apply(this,arguments);this._sources=new m();if(this.has("src")){this._addInitSources()
}}var i=l.prototype=g.create(d.prototype);i.defaultAttributes={duration:"NaN",readyState:0,currentTime:0,paused:true,playbackRate:1,ended:false,seeking:false,controls:false,muted:false,volume:1,looping:false,poster:a,defaultPlaybackRate:1,defaultMuted:false,currentSrc:null,preload:"auto"};
i._addInitSources=function(){var n=this.get("src");if(!Array.isArray(n)){n=[n]}n.forEach(this.addSource,this)
};i.findSourcesByFullyQualifiedURL=function(n){return this._sources.filter(function(o){return(o.getFullyQualifiedURL()===n)
})};i.getPoster=function(){return this.get("poster")};i.setAutoplay=function(n){this.set({autoplay:n})
};i.setPoster=function(n){this.set({poster:n})};i.setPreload=function(n){this.set({preload:n})
};i.addSource=function(o){var n=this.createSource(o);this._sources.add(n);this.trigger("source:add",{source:n});
if(this._sources.models.length===1){this.setCurrentSrc(n)}return n};i._coerceMediaSourceData=function(n){if(typeof n==="string"){return{src:n}
}return n};i.createSource=function(n){if((n instanceof j)){return n}return new j(this._coerceMediaSourceData(n))
};i.findSources=function(o,n){if(typeof o==="string"){o={src:o}}return this._sources.find(o,n)
};i.getSources=function(){return this._sources};i.getAutoplay=function(){return this.get("autoplay")
};i.setCurrentTime=function(n){this.set({currentTime:n})};i.getPreload=function(){return this.get("preload")
};i.setSrc=function(n){this.set({currentSrc:n.cid})};i.setCurrentSrc=function(n){this.set({currentSrc:n.cid})
};i.getCurrentSrc=function(){return this._sources.get(this.get("currentSrc"))};
i.setReadyState=function(n){this.set({readyState:n})};i.getDefaultMuted=function(){return this.get("defaultMuted")
};i.getDefaultPlaybackRate=function(){return this.get("defaultPlaybackRate")};i.setLoop=function(n){this.set({loop:n})
};i.getLoop=function(){return this.get("loop")};i.getSeeking=function(){return this.get("seeking")
};i.getReadyState=function(){return this.get("readyState")};i.getDuration=function(){return this.get("duration")
};i.getCurrentTime=function(){return this.get("currentTime")};i.setVolume=function(n){this.set({volume:n})
};i.getVolume=function(){return this.get("volume")};i.getPaused=function(){return this.get("paused")
};i.getPlaybackRate=function(){return this.get("playbackRate")};i.setEnded=function(n){this.set({ended:n})
};i.getEnded=function(){return this.get("ended")};i.getMuted=function(){return this.get("muted")
};i.setPlaybackRate=function(n){this.set({playbackRate:n})};i.setMuted=function(o,n){this.set({muted:o},n)
};c.exports=l},{"./../collection/MediaSourceCollection":838,"./../collection/TextTrackCollection":839,"./MediaSource":853,"ac-mvc-model":903,"ac-object":680,"ac-video-posterframe":829}],856:[function(b,d,a){var c=b("./../../MediaSource");
function f(g){var i=g.getAttribute("src");var h={src:i};if(g.getAttribute("type")){h.type=g.getAttribute("type")
}return new c(h)}d.exports=f},{"./../../MediaSource":853}],857:[function(b,a,f){var j=b("./../../Video");
var g=b("ac-dom-traversal");var c=b("ac-object");var i=b("./../../mediaSource/factory/createFromSourceTag");
function h(k,l){if(l.getAttribute("preload")){k.preload=l.getAttribute("preload")
}}function d(l,m){var k;l.src=[];if(m.getAttribute("src")){l.src.push(i(m))}k=g.querySelectorAll("source",m);
if(k.length){k=k.map(function(n){return i(n)});l.src=l.src.concat(k)}}a.exports=function(m,o){o=o||{};
var n;var l;var k={paused:m.paused,currentTime:m.currentTime,duration:m.duration,muted:m.muted,volume:m.volume,playbackRate:m.playbackRate,ended:m.ended,readyState:m.readyState,seeking:m.seeking,poster:m.poster,defaultPlaybackRate:m.defaultPlaybackRate,defaultMuted:m.defaultMuted,currentSrc:m.currentSrc,autoplay:m.autoplay};
h(k,m);d(k,m);k=c.extend(k,o);n=new j(k);if(m.currentSrc){l=n.findSourcesByFullyQualifiedURL(m.currentSrc);
if(l&&l[0]){n.setCurrentSrc(l[0])}}return n}},{"./../../Video":855,"./../../mediaSource/factory/createFromSourceTag":856,"ac-dom-traversal":620,"ac-object":680}],858:[function(h,a,q){var o=h("ac-mvc-view").View;
var c=h("ac-video-controls");var p=h("./../controls/Native");var r=h("ac-object");
var d=h("ac-fullscreen");var j=h("ac-feature");var f=h("./../const/readyState");
var i=h("ac-video-posterframe");var k=h("ac-dom-events/addEventListener");var b=h("ac-classlist/add");
var g=h("ac-classlist/remove");var n=h("ac-classlist/contains");var s="user-hover";
function m(){o.apply(this,arguments);if(this.options.mediaController){this.setMediaController(this.options.mediaController)
}this.poster=null;this._initPoster();this._initControls();this._listenForFullscreenEvents();
if(j.isDesktop()){this._appendBlockade()}}m.LOADEDMETADATA=f.LOADEDMETADATA;m.LOADEDDATA=f.LOADEDDATA;
m.CANPLAY=f.CANPLAY;m.CANPLAYTHROUGH=f.CANPLAYTHROUGH;var l=m.prototype=r.create(o.prototype);
l.defaultOptions={controlsTimeoutDuration:5000};l.className="ac-video-player";l._appendBlockade=function(){var t=new o({className:"ac-video-blockade"});
t.appendTo(this.el);this._blockade=t};l._onEnterFullscreen=function(t){if(t.target===this.getFullscreenTargetElement()){this.trigger("enterfullscreen",t)
}};l._onExitFullscreen=function(t){if(t.target===this.getFullscreenTargetElement()){this.trigger("exitfullscreen",t)
}};l._listenForFullscreenEvents=function(){d.on("enterfullscreen",this._onEnterFullscreen,this);
d.on("exitfullscreen",this._onExitFullscreen,this)};l._unbindFullscreenEvents=function(){d.off("enterfullscreen",this._onEnterFullscreen,this);
d.off("exitfullscreen",this._onExitFullscreen,this)};l.destroy=function(){o.prototype.destroy.call(this);
this._unbindFullscreenEvents()};l._initPoster=function(){var t=null;if(this.mediaController.hasPoster()&&this.poster===null){t=i.create(this.mediaController);
t.render();if(t.el.parentNode!==this.el){t.appendTo(this.el)}this.poster=t}};l._destroyPoster=function(){if(this.poster&&this.poster.el.parentNode===this.el){this.el.removeChild(this.poster.el)
}this.poster=null};l.getFullscreenTargetElement=function(){return(d.getMode()==="ios"?this.getMediaElement():this.el)
};l.toggleFullscreen=function(){if(this.isFullscreen()){this.exitFullscreen()}else{this.requestFullscreen()
}};l.isFullscreen=function(){return(d.fullscreenElement()===this.getFullscreenTargetElement())
};l.requestFullscreen=function(){var t=this.getFullscreenTargetElement();if(d.fullscreenEnabled(t)){d.requestFullscreen(t)
}};l.exitFullscreen=function(){d.exitFullscreen(this.getFullscreenTargetElement())
};l._instantiateDefaultCustomUIControls=function(){var v=this._instantiateControls(c);
if(v.el.parentNode!==this.el&&typeof v.appendTo==="function"){v.appendTo(this.el)
}var x;var w={};var t=function(y){if(y.pageX!==undefined&&(w.x===y.pageX&&w.y===y.pageY)){return
}if(!n(this.el,s)){b(this.el,s)}window.clearTimeout(x);x=window.setTimeout(function(){g(this.el,s)
}.bind(this),this.options.controlsTimeoutDuration);w={x:y.pageX,y:y.pageY}}.bind(this);
k(this.el,"mouseenter",t);k(this.el,"mousemove",t);var u=function(){window.clearTimeout(x);
g(this.el,s);w={}};if("onmouseleave" in this.el){k(this.el,"mouseleave",u.bind(this))
}else{k(this.el,"mouseout",function(y){if(!v.el.contains(y.target)&&y.target!==v.el){u.call(this)
}}.bind(this),true)}return v};l._instantiateControls=function(t){if(typeof t.create!=="function"){return t
}return t.create({player:this.mediaController,fullScreenElement:this.getFullscreenTargetElement()})
};l._instantiateNonHandheldControls=function(){var u=this.options.controls;var t;
if(u===false||u===null){t=null}else{if(u!==undefined){t=this._instantiateControls(u)
}else{if(j.isDesktop()){t=this._instantiateDefaultCustomUIControls()}else{t=this._instantiateControls(p)
}}}return t};l._instantiateHandheldControls=function(){return this._instantiateControls(p)
};l._initControls=function(){var t;if(!j.isHandheld()){t=this._instantiateNonHandheldControls()
}else{t=this._instantiateHandheldControls()}this.controls=t};l.setMediaController=function(t){if(this.mediaController){this.mediaController.stopPropagatingTo(this)
}this.mediaController=t;this.mediaController.propagateTo(this._eventEmitter)};l.getVideo=function(){return this.mediaController.getVideo()
};l.play=function(){return this.mediaController.play()};l.pause=function(){return this.mediaController.pause()
};l.getPaused=function(){return this.mediaController.getPaused()};l.setMuted=function(t){return this.mediaController.setMuted(t)
};l.getMuted=function(){return this.mediaController.getMuted()};l.getEnded=function(){return this.mediaController.getEnded()
};l.setVolume=function(t){return this.mediaController.setVolume(t)};l.getVolume=function(){return this.mediaController.getVolume()
};l.setCurrentTime=function(t){return this.mediaController.setCurrentTime(t)};l.getCurrentTime=function(){return this.mediaController.getCurrentTime()
};l.getPreload=function(){return this.mediaController.getPreload()};l.setPreload=function(t){return this.mediaController.setPreload(t)
};l.setPlaybackRate=function(t){return this.mediaController.setPlaybackRate(t)};
l.getPlaybackRate=function(){return this.mediaController.getPlaybackRate()};l.getDuration=function(){return this.mediaController.getDuration()
};l.setLoop=function(t){return this.mediaController.setLoop(t)};l.getLoop=function(){return this.mediaController.getLoop()
};l.getError=function(){return this.mediaController.getError()};l.getPoster=function(){return this.mediaController.getPoster()
};l.getMediaWidth=function(){return this.mediaController.getWidth()};l.getMediaHeight=function(){return this.mediaController.getHeight()
};l.setPoster=function(){this.mediaController.setPoster.apply(this.mediaController,arguments);
if(this.mediaController.hasPoster()){this._initPoster()}else{this._destroyPoster()
}};l.setSrc=function(){return this.mediaController.setSrc.apply(this.mediaController,arguments)
};l.getCurrentSrc=function(){return this.mediaController.getCurrentSrc()};l.getSources=function(){return this.mediaController.getSources()
};l.getNetworkState=function(){return this.mediaController.getNetworkState()};l.getReadyState=function(){return this.mediaController.getReadyState()
};l.getDefaultPlaybackRate=function(){return this.mediaController.getDefaultPlaybackRate()
};l.getSeekable=function(){return this.mediaController.getSeekable()};l.getDefaultMuted=function(){return this.mediaController.getDefaultMuted()
};l.getSeeking=function(){return this.mediaController.getSeeking()};l.getStartDate=function(){return this.mediaController.getStartDate()
};l.getPlayed=function(){return this.mediaController.getPlayed()};l.getBuffered=function(){return this.mediaController.getBuffered()
};l.getTextTracks=function(){return this.mediaController.getTextTracks()};l.getTextTracksCount=function(){return this.mediaController.getTextTracksCount()
};l.addTextTrackFromRemoteVTT=function(){return this.mediaController.addTextTrackFromRemoteVTT.apply(this.mediaController,arguments)
};l.addTextTrack=function(){return this.mediaController.addTextTrack.apply(this.mediaController,arguments)
};l.getEnabledTextTracks=function(){return this.mediaController.getEnabledTextTracks.apply(this.mediaController,arguments)
};l.getVisibleTextTracks=function(){return this.mediaController.getVisibleTextTracks.apply(this.mediaController,arguments)
};l.getMediaElement=function(){return this.mediaController.getMediaElement()};a.exports=m
},{"./../const/readyState":842,"./../controls/Native":847,"ac-classlist/add":62,"ac-classlist/contains":68,"ac-classlist/remove":72,"ac-dom-events/addEventListener":583,"ac-feature":639,"ac-fullscreen":336,"ac-mvc-view":677,"ac-object":680,"ac-video-controls":754,"ac-video-posterframe":829}],859:[function(f,g,c){var d=f("./../Player");
var h=f("./../../mediaController/factory/create");var a=f("ac-dom-nodes");var b=f("./../../collection/playerCollection");
g.exports=function(k,i){i=i||{};var j;if(!i.mediaController){i.mediaController=h(k,i)
}j=new d(i);if(i.mediaController.getViewElement().parentNode!==j.el){a.insertFirstChild(i.mediaController.getViewElement(),j.el)
}if(!i.preventCollection){b.add(j)}return j}},{"./../../collection/playerCollection":840,"./../../mediaController/factory/create":849,"./../Player":858,"ac-dom-nodes":600}],860:[function(d,g,c){var h=d("./../../config/VideoConfig");
var a=d("./../../models/Video");var b=d("./create");var f=function(i){var j=new h();
var l;var m;j.getConfig(i,{},{}).then(function(n){n.id=i.id;l=n;m=n.source});var k=new a({src:m});
return b(k)};g.exports=f},{"./../../config/VideoConfig":841,"./../../models/Video":855,"./create":859}],861:[function(d,g,b){var c=d("./create");
var i=d("./../../mediaController/factory/createFromVideoTag");var a=d("ac-dom-traversal");
function f(l){var j=a.querySelectorAll("source",l);var k=0;for(k;k<j.length;k+=1){j[k].parentNode.removeChild(j[k])
}}var h=function(k,j){j=j||{};var l=a.querySelector("video",k);if(l===null){l=document.createElement("video");
k.appendChild(l)}if(typeof j.src!=="undefined"&&j.src!==null){f(l)}j.mediaController=i(l,j);
j.element=k;return c(null,j)};g.exports=h},{"./../../mediaController/factory/createFromVideoTag":850,"./create":859,"ac-dom-traversal":620}],862:[function(b,d,a){var c=b("ac-browser");
d.exports={get:function(){var f="html5";if(c.name==="Firefox"){f="quicktime"}else{if(c.name==="IE"){f="quicktime"
}}return f}}},{"ac-browser":58}],863:[function(b,c,a){var f=b("ac-mvc-view").View;
function g(){f.apply(this,arguments)}var d=g.prototype=new f();d.tagName="source";
d.render=function(){this.el.setAttribute("src",this.model.get("src"));if(this.model.has("type")){this.el.setAttribute("type",this.model.get("type"))
}};c.exports=g},{"ac-mvc-view":677}],864:[function(c,b,f){var a=c("./MediaView");
var i=c("./../MediaSourceTag");var d=c("ac-object");var j=c("ac-dom-traversal");
function h(){a.apply(this,arguments)}var g=h.prototype=d.create(a.prototype);g.tagName="video";
g._renderBooleanAttribute=function(k,m){var l=this.getMediaElement();if(m===true){l.setAttribute(k,"")
}else{l.removeAttribute(k)}};g._findExistingSourceOrTrackElement=function(m){var k;
var l;if(m.has("src")){l='[src="'+m.get("src")+'"]';k=j.querySelector(l,this.el)
}return k};g._appendSource=function(n){var l=this.getMediaElement();var m=this._findExistingSourceOrTrackElement(n);
var k=new i({model:n,element:m});k.render();if(!m){k.appendTo(l)}};g._onSourceAdd=function(k){this._appendSource(k.source)
};g._renderPreload=function(){var k=this.getMediaElement();k.setAttribute("preload",this.model.getPreload())
};g._renderAutoplay=function(){this._renderBooleanAttribute("autoplay",this.model.getAutoplay())
};g._renderMuted=function(){this._renderBooleanAttribute("muted",this.model.getMuted())
};g._renderAirplay=function(){this._renderBooleanAttribute("x-webkit-airplay",true)
};g._renderCrossOrigin=function(){var k=this.getMediaElement();if(this.model.has("crossorigin")){k.setAttribute("crossorigin",this.model.get("crossorigin"))
}};g._renderCurrentSrc=function(){var k=this.model.getCurrentSrc();if(k){this.el.setAttribute("src",k.get("src"))
}};g._renderLoop=function(){var k=this.model.getLoop();this._renderBooleanAttribute("loop",k)
};g._respondToAddTrackEvent=function(k){this.emitterTrigger("addtrack",k.data)};
g.getSourceAttribute=function(){return this.getMediaElement().getAttribute("src")
};g.render=function(){var k=this.getMediaElement();this.model.on("source:add",this._onSourceAdd,this);
this.model.on("change:autoplay",this._renderAutoplay,this);this.model.on("change:muted",this._renderMuted,this);
this.model.on("change:preload",this._renderPreload,this);this.model.on("change:currentSrc",this._renderCurrentSrc,this);
this.model.on("change:crossorigin",this._renderCrossOrigin,this);this.model.getSources().forEach(this._appendSource,this);
this._renderAutoplay();this._renderPreload();this._renderMuted();this._renderAirplay();
this._renderCrossOrigin();this._renderCurrentSrc();this._renderLoop();if(this.model.id){k.setAttribute("id",this.model.id)
}};b.exports=h},{"./../MediaSourceTag":863,"./MediaView":865,"ac-dom-traversal":620,"ac-object":680}],865:[function(c,b,f){var i=c("ac-dom-traversal");
var h=c("ac-browser");var j=c("ac-mvc-view").View;var d=c("ac-object");function a(){this._mediaElement=null;
j.apply(this,arguments)}var g=a.prototype=d.create(j.prototype);g.className="ac-video-media-controller";
g._findMediaElementByTagName=function(k){if(this.getTagName()===k){return this.el
}return i.querySelector(k,this.el)};g.renderTextTrack=function(){};g._findMediaElement=function(){if(this._findMediaElementByTagName("video")){return this._findMediaElementByTagName("video")
}else{if(h.name!=="IE"){return this._findMediaElementByTagName("embed")}}return this._findMediaElementByTagName("object")
};g.getMediaElement=function(){return this._findMediaElement()};b.exports=a},{"ac-browser":58,"ac-dom-traversal":620,"ac-mvc-view":677,"ac-object":680}],866:[function(f,c,i){var b=f("./MediaView");
var d=f("./eventAdapters/QuickTime");var m=f("./eventAdapters/quicktimeEventsElement");
var h=f("ac-object");var l=f("ac-browser");var g=(l.os.toLowerCase()==="windows");
var a=f("ac-dom-traversal");function k(){b.apply(this,arguments);this._hasRendered=false;
this.model.on("change:currentSrc",this._renderString,this)}var j=k.prototype=h.create(b.prototype);
j._renderID=function(){this._objectStr+=' id="quicktime-movie-'+Date.now()+'"'};
j._renderClsidAttr=function(){this._objectStr+=' classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"'
};j._renderCodebaseAttr=function(){this._objectStr+=' codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"'
};j._renderWModeAttr=function(){this._renderParamAttr("wmode","transparent");this._renderEmbedAttr("wmode","transparent")
};j._renderPostDomEventsAttr=function(){this._objectStr+=' postdomevents="true"'
};j._renderBehaviorAttr=function(){var n=m.getID();if(n){this._objectStyles.push("behavior:url('#"+n+"')")
}};j._renderAutoplay=function(){var n=(this.model.getAutoplay()===true)?"True":"False";
this._renderAttr("autoplay",n)};j._renderVolume=function(){var n=this.model.getMuted();
var o=this.model.getVolume()*256;if(n){o=0}this._renderAttr("volume",o)};j._renderLoop=function(){var n=(this.model.getLoop()===true)?"True":"False";
this._renderAttr("loop",n)};j._renderAttr=function(o,n){this._renderParamAttr(o,n);
this._renderEmbedAttr(o,n)};j._closeOpeningObjectTag=function(){this._objectStr+=">"
};j._renderParamAttr=function(o,n){this._objectStr+='<param name="'+o+'" value="'+n+'" />'
};j._renderEmbedAttr=function(o,n){this._embedStr+=" "+o+'="'+n+'"'};j._closeEmbedTag=function(){this._embedStr+=" />"
};j._closeObjectTag=function(){this._objectStr+="</object>"};j._renderSrc=function(){var n=this.model.getCurrentSrc();
if(n){this._renderAttr("src",n.get("src"))}};j._renderStyleAttr=function(){this._objectStr+=' style="'+this._objectStyles.join(";")+';"';
this._embedStr+=' style="'+this._embedStyles.join(";")+';"'};j.getSourceAttribute=function(){return this.getMediaElement().getAttribute("src")
};j._renderOffscreen=function(){var s=window.screen.width+10;var n=window.screen.height+10;
var q=Math.max(s,n);var p="width:"+q+"px";var r="height:"+q+"px";var t="position:fixed";
var o="left:"+s+"px";this._embedStyles.push(p);this._embedStyles.push(r);this._embedStyles.push(t);
this._embedStyles.push(o);this._objectStyles.push(p);this._objectStyles.push(r);
this._objectStyles.push(t);this._objectStyles.push(o);this._renderStyleAttr()};
j._doneRenderOffscreen=function(){var p=a.querySelector("embed",this.el);var n=a.querySelector("object",this.el);
var o=n.style.cssText.toLowerCase().match(/behavior\((.)+\)/);if(o){n.setAttribute("style",o)
}else{n.removeAttribute("style")}if(p){p.removeAttribute("style")}};j._renderString=function(){var n=(l.name.toLowerCase()==="ie"&&l.version<9);
this._objectStr="<object";this._embedStr="<embed";this._objectStyles=[];this._embedStyles=[];
this._renderClsidAttr();this._renderCodebaseAttr();this._renderID();this._renderPostDomEventsAttr();
this._renderBehaviorAttr();if(g){if(!n){this._renderOffscreen()}else{this._renderStyleAttr()
}}this._closeOpeningObjectTag();this._renderWModeAttr();this._renderAutoplay();
this._renderSrc();this._renderVolume();this._renderLoop();this._renderAttr("enablejavascript","true");
this._renderAttr("postdomevents","true");this._renderAttr("scale","tofit");this._renderAttr("controller","false");
this._renderEmbedAttr("pluginspage","www.apple.com/quicktime/download");this._renderParamAttr("kioskmode","true");
this._renderParamAttr("pluginspace","http://www.apple.com/qtactivex/qtplugin.cab");
this._closeEmbedTag();this._objectStr+=this._embedStr;this._closeObjectTag();this.el.innerHTML=this._objectStr;
this._quickTimeEvents=new d(this.getMediaElement(),this);this.emitterTrigger("mediaelementchange",{});
if(g&&!n){window.requestAnimationFrame(function(){this._doneRenderOffscreen()}.bind(this))
}};j.render=function(){if(this._hasRendered===true){return}this._hasRendered=true;
this._renderString()};c.exports=k},{"./MediaView":865,"./eventAdapters/QuickTime":867,"./eventAdapters/quicktimeEventsElement":870,"ac-browser":58,"ac-dom-traversal":620,"ac-object":680}],867:[function(b,a,f){var j=b("ac-dom-emitter").DOMEmitter;
var h=b("./QuickTimeTimeUpdate");var i=b("./QuickTimePluginReady");var c=b("ac-object");
function d(k,l){j.call(this,k);if(this._isObjectTag()===false){this._aliasEvents()
}else{this._plugin=new i(k);this._plugin.once("ready",function(){this._plugin=undefined;
this._aliasEvents()},this);this._plugin.poll()}this._propagationTarget=l}var g=d.prototype=c.create(j.prototype);
g._bubble=function(k){this._propagationTarget.emitterTrigger(k,{target:this.el})
};g._onTimeupdateObserverTimeUpdate=function(){this._bubble("timeupdate")};g._onQTPlay=function(){this._timeupdateObserver.listenForTimeUpdate();
this._bubble("play")};g._onQTPause=function(){this._timeupdateObserver.stopListenForTimeUpdate();
this._bubble("pause")};g._onQTEnded=function(){this._timeupdateObserver.stopListenForTimeUpdate();
this._bubble("ended")};g._onQTBegin=function(){this._bubble("loadstart")};g._onQTVolumeChange=function(){this._bubble("volumechange")
};g._onQTProgressChange=function(){this._bubble("progress")};g._onQTError=function(){this._bubble("error")
};g._onQTStalled=function(){this._bubble("stalled")};g._onQTCanPlay=function(){this._bubble("canplay")
};g._onQTCanPlayThrough=function(){this._bubble("canplaythrough")};g._onQTDurationChange=function(){this._bubble("durationchange")
};g._onQTLoadedMetaData=function(){this._bubble("loadedmetadata")};g._onQTloadedFirstFrame=function(){this._bubble("loadeddata")
};g._onQTWaiting=function(){this._bubble("waiting")};g._onQTTimeChanged=function(){this._bubbleTimeUpdate()
};g._bubbleTimeUpdate=function(){this._bubble("timeupdate")};g._isObjectTag=function(){return(this.el.tagName.toLowerCase()==="object")
};g._getEventName=function(k){if(this._isObjectTag()){return"on"+k}return k};g._bindEvents=function(n,m,l){var k=this._getEventName(n);
if(typeof this.el.attachEvent==="function"){this.el.attachEvent(k,function(o){m.call(l,o)
})}else{this.on(n,m,l)}};g._aliasEvents=function(){this._bindEvents("qt_play",this._onQTPlay,this);
this._bindEvents("qt_pause",this._onQTPause,this);this._bindEvents("qt_begin",this._onQTBegin,this);
this._bindEvents("qt_volumechange",this._onQTVolumeChange,this);this._bindEvents("qt_progress",this._onQTProgressChange,this);
this._bindEvents("qt_error",this._onQTError,this);this._bindEvents("qt_stalled",this._onQTStalled,this);
this._bindEvents("qt_canplay",this._onQTCanPlay,this);this._bindEvents("qt_canplaythrough",this._onQTCanPlayThrough,this);
this._bindEvents("qt_durationchange",this._onQTDurationChange,this);this._bindEvents("qt_ended",this._onQTEnded,this);
this._bindEvents("qt_loadedmetadata",this._onQTLoadedMetaData,this);this._bindEvents("qt_loadedfirstframe",this._onQTloadedFirstFrame,this);
this._bindEvents("qt_waiting",this._onQTWaiting,this);this._bindEvents("qt_timechanged",this._onQTTimeChanged,this);
this._timeupdateObserver=new h(this.el);this._timeupdateObserver.on("timeupdate",this._onTimeupdateObserverTimeUpdate,this)
};a.exports=d},{"./QuickTimePluginReady":868,"./QuickTimeTimeUpdate":869,"ac-dom-emitter":580,"ac-object":680}],868:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");function h(i){g.call(this);this._movie=i;this._pollInterval=5;
this._boundPoll=this.poll.bind(this)}var f=h.prototype=a.create(g.prototype);f._resetMovieUrl=function(){var i=this._movie;
var j;i.SetResetPropertiesOnReload(false);j=i.GetURL();i.autoplay=true;j+=(j.indexOf("?")!==-1)?"&rnd="+Math.random():"?rnd="+Math.random();
i.SetURL(j)};f.getPluginStatus=function(){var i="";try{i=this._movie.GetPluginStatus()
}catch(j){}return i};f.isAPIAvailable=function(){var i;try{this._movie.GetVolume();
i=true}catch(j){i=false}return i};f.isReady=function(){return/(Complete)/i.test(this.getPluginStatus())
};f._triggerReady=function(){this.trigger("ready")};f.poll=function(){if(this.isReady()){this._resetMovieUrl();
this._triggerReady()}else{setTimeout(this._boundPoll,this._pollInterval)}};d.exports=h
},{"ac-event-emitter":284,"ac-object":680}],869:[function(c,f,b){var h=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");var d=300;function i(j){this.mediaElement=j;this._isListeningForTimeUpdate=false;
this._boundTick=null;this._lastTimeCheck=0;this._timeout=null}var g=i.prototype=a.create(h.prototype);
g.listenForTimeUpdate=function(){this._isListeningForTimeUpdate=true;this._boundTick=this._tick.bind(this);
window.setTimeout(this._boundTick,d)};g.stopListenForTimeUpdate=function(){window.clearTimeout(this._timeout);
this._isListeningForTimeUpdate=false;this._boundTick=null;this._timeout=null};g.getCurrentTime=function(){return this.mediaElement.GetTime()/this.mediaElement.GetTimeScale()
};g._tick=function(){var j=this.getCurrentTime();if(j!==this._lastTimeCheck){this.trigger("timeupdate")
}this._lastTimeCheck=j;if(this._isListeningForTimeUpdate&&this._boundTick){this._timeout=window.setTimeout(this._boundTick,d)
}};f.exports=i},{"ac-event-emitter":284,"ac-object":680}],870:[function(b,d,a){var c=b("ac-browser");
var g=function(j,i){if(j!=="IE"){return}this.id="quicktime-events-element-"+Date.now();
this.el=document.createElement("object");this._setAttributes({id:this.getID(),wmode:"transparent",classid:"clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598",codebase:"http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"});
this.appendToBody()};var f=g.prototype;f.appendToBody=function(){document.write(this.el.outerHTML)
};f.getID=function(){return this.id};f._setAttributes=function(j){for(var i in j){this.el.setAttribute(i,j[i])
}};var h=new g(c.name,c.version);d.exports=h;d.exports.C=g},{"ac-browser":58}],871:[function(c,d,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");function f(){h.apply(this,arguments)}var g=f.prototype=b.create(h.prototype);
g._onModeChange=function(i){this._renderMode()};g._renderMode=function(){var i=this.model.get("mode");
if(i==="showing"){this.el.showTextTrack(this.options.index)}else{if(i==="hidden"){this.el.hideTextTrack(this.options.index)
}}};g.render=function(){this._renderMode();this.model.on("change:mode",this._onModeChange,this)
};d.exports=f},{"ac-mvc-view":677,"ac-object":680}],872:[function(c,f,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");function d(){h.apply(this,arguments)}var g=d.prototype=b.create(h.prototype);
g._onModeChange=function(i){this.renderMode()};g.renderMode=function(){var i=this.model.get("mode");
this.el.mode=i};g.render=function(){this.model.on("change:mode",this._onModeChange,this)
};f.exports=d},{"ac-mvc-view":677,"ac-object":680}],873:[function(d,f,b){var h=d("ac-mvc-view").View;
var c=d("ac-object");function a(){h.apply(this,arguments)}var g=a.prototype=c.create(h.prototype);
g.tagName="track";g.render=function(){["src","type","label","kind","srclang"].forEach(function(i){if(this.model.has(i)){this.el.setAttribute(i,this.model.get(i))
}},this);this.el.setAttribute("id",this.model.cid)};f.exports=a},{"ac-mvc-view":677,"ac-object":680}],874:[function(d,f,b){var h=d("ac-mvc-view").View;
var i=d("./TextTrackTag");var c=d("ac-object");function a(){h.apply(this,arguments);
this._textTracks=this.el.textTracks;if(this._textTracks){this._boundRespondToAddTrackEvent=this._respondToAddTrackEvent.bind(this);
this._boundRespondToChangeEvent=this._respondToChangeEvent.bind(this);this._boundRespondToRemoveTrackEvent=this._respondToRemoveTrackEvent.bind(this);
this._textTracks.addEventListener("addtrack",this._boundRespondToAddTrackEvent);
this._textTracks.addEventListener("change",this._boundRespondToChangeEvent);this._textTracks.addEventListener("removetrack",this._boundRespondToRemoveTrackEvent)
}}var g=a.prototype=c.create(h.prototype);g._unbindTextTrackEvents=function(){this._boundRespondToAddTrackEvent=null;
this._boundRespondToChangeEvent=null;this._boundRespondToRemoveTrackEvent=null;
this._textTracks.removeEventListener("addtrack",this._boundRespondToAddTrackEvent);
this._textTracks.removeEventListener("change",this._boundRespondToChangeEvent);
this._textTracks.removeEventListener("removetrack",this._boundRespondToRemoveTrackEvent)
};g._respondToAddTrackEvent=function(j){this.emitterTrigger("addtrack",{track:j.track})
};g._respondToChangeEvent=function(j){this.emitterTrigger("change",j)};g._respondToRemoveTrackEvent=function(j){this.emitterTrigger("removetrack",{track:j.track})
};g._createTextTrackTag=function(j){var k=new i({model:j});k.render();k.appendTo(this.el)
};g.addTextTrackTag=function(j){this._createTextTrackTag(j)};f.exports=a},{"./TextTrackTag":873,"ac-mvc-view":677,"ac-object":680}],875:[function(c,d,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");function f(){h.apply(this,arguments)}var g=f.prototype=b.create(h.prototype);
g._onModeChange=function(i){this._renderMode()};g._renderMode=function(){var i=this.model.get("mode");
if(i==="showing"){this.el.webkitClosedCaptionsVisible=true}else{this.el.webkitClosedCaptionsVisible=false
}};g.setModel=function(i){if(this.model){this.model.off("change:mode",this._onModeChange,this)
}this.model=i;this.listen()};g.listen=function(){this.model.on("change:mode",this._onModeChange,this)
};g.render=function(){this._renderMode();this.listen()};d.exports=f},{"ac-mvc-view":677,"ac-object":680}],876:[function(b,c,a){c.exports=b("ac-video-player")
},{"ac-video-player":834}],877:[function(b,c,a){c.exports={create:b("./ac-films/factory/films")}
},{"./ac-films/factory/films":883}],878:[function(h,a,k){var o=h("ac-video-localization").localization;
var c=h("ac-video-nosupportview").View;var j=h("ac-feature");var i=h("./LegacyAnalyticsTranslator");
var g=h("ac-classlist");var p=h("ac-event-emitter").EventEmitter;var f=h("ac-object");
var m=h("./VideoSourceCollection");var b=h("./factory/player");var n=h("ac-fullscreen");
function d(q){p.call(this);this._currentVideo=null;this.videoSrcCollection=new m();
this.analyticsTranslator=null;this.player=null;this.localization=null;this.noSupportView=null;
this.options=f.defaults(d.defaults,q)}var l=d.prototype=f.create(p.prototype);d.defaults={analytics:true,playerOptions:{crossorigin:"anonymous",preload:"none"}};
l.play=function(r){var q=null;if(!this.player){this.createPlayer()}if(r){q=this.videoSrcCollection.getSource(r);
if(q===this.getCurrentVideo()){this.player.addClassName("player-fullscreen");this.player.play();
return}}else{if(!this.player.getCurrentSrc()){q=this.videoSrcCollection.getSourceByIndex(0)
}else{q=this.getCurrentVideo()}}if(q){if(q.poster){this.setPoster(q.poster)}if(this.localization===null){this.ensureLocalization().then(this.play.bind(this,r))
}else{this._playVideoBySrcObj(q)}}};l._bindPlayerEvents=function(){this.player.on("enterfullscreen",this._onEnterFullscreen,this);
this.player.on("ended",this._onEnded,this);this.player.on("exitfullscreen",this._onExitFullscreen,this)
};l._onEnterFullscreen=function(){g.add(this.player.el,"player-fullscreen")};l._onExitFullscreen=function(){g.remove(this.player.el,"player-fullscreen")
};l._onEnded=function(){};l.pause=function(){this.player.pause()};l.setSrc=function(q){return this._setNewPlayerSrc(q)
};l.getCurrentSrc=function(){return this.player.getCurrentSrc().attributes.src};
l.getCurrentVideo=function(){return this._currentVideo};l.createVideoResource=function(r,q){return this.videoSrcCollection.addSource(r,q)
};l.createPlayer=function(){this.on("novideosupport",this._onNoVideoSupport,this);
if(this.options.poster){this.options.playerOptions.poster=this.options.poster}this.player=b(this.options.playerOptions);
if(this.player){this._bindPlayerEvents();this.defaultPosterFrame=this.player.getPoster();
if(!this.analyticsTranslator&&this.options.analytics===true){this.analyticsTranslator=new i(this.player);
this.analyticsTranslator.activate()}this._applyDocumentClassnames()}return this.player
};l.loadLocalization=function(){return o.create().then(function(q){this.localization=q
}.bind(this))};l.ensureLocalization=function(){var q;if(this.localization===null){q=this.loadLocalization()
}else{q=Promise.resolve()}return q};l.createNoSupportView=function(){this.ensureLocalization().then(function(){var q=new c({model:this.localization});
q.render();this.noSupportView=q;this.trigger("novideosupport");this._onNoVideoSupport()
}.bind(this))};l.setPoster=function(q){if(q!==this.player.getPoster()){this.player.setPoster(q)
}};l._playVideoBySrcObj=function(r){var q=this.player.getCurrentSrc();if(!q||(q.attributes.src&&q.attributes.src!==r.src)){if(j.isDesktop()){this.player.once("canplaythrough",this.player.play,this.player);
this._setNewPlayerSrc(r)}else{this.player.addClassName("player-fullscreen");this._setNewPlayerSrc(r);
this.player.play()}}else{this.player.play()}};l._setNewPlayerSrc=function(r){var q=this._setPlayerSrcFromSourceObject(r,this.player);
if(q){this._currentVideo=r;if(this.options.analytics===true){this.analyticsTranslator.addSourceObject(r.id,r.cid)
}if(r.poster){this.setPoster(r.poster)}}return q};l._setPlayerSrcFromSourceObject=function(q,r){var s=null;
if(r&&q.vatResource&&typeof q.vatResource.setPlayerSrc==="function"){q.vatResource.setPlayerSrc(this.player,window.innerWidth);
this.player.once("readystatechange",function(){var v=this.player.el;var u=this.player.getMediaWidth();
var t=this.player.getMediaHeight();if(u&&u!==848&&t&&t!==480){v.style.paddingBottom=(t/u*100)+"%"
}},this);q.cid=r.getCurrentSrc().cid;s=r.getCurrentSrc().attributes.src}return s
};l._applyDocumentClassnames=function(){var q;if(j.isHandheld()){q="ac-player-handheld"
}if(j.isTablet()){q="ac-player-tablet"}if(j.isDesktop()){q="ac-player-desktop"}g.add(document.documentElement,q)
};l._onNoVideoSupport=function(){};a.exports=d},{"./LegacyAnalyticsTranslator":879,"./VideoSourceCollection":881,"./factory/player":884,"ac-classlist":69,"ac-event-emitter":284,"ac-feature":310,"ac-fullscreen":336,"ac-object":906,"ac-video-localization":514,"ac-video-nosupportview":567}],879:[function(b,c,a){var h=b("ac-analytics");
var g=b("ac-event-emitter").EventEmitter;var d=b("ac-dom-traversal");function i(j){this.player=j;
this.sources={};this.currentStubPlayer=null}var f=i.prototype;f.activate=function(){this.player.on("play",function(){this.setCurrentStubPlayer();
this._proxyEvent("play")},this);this.player.on("ended",function(){this._proxyEvent("ended")
},this);this.player.on("timeupdate",function(){this._proxyEvent("timeupdate")},this,this);
this.player.on("texttrackshow",function(){this._proxyEvent("captions-enabled")},this);
this.player.on("durationchange",this.setCurrentStubPlayer,this)};f.getEventData=function(){var k=false;
var j=this.player.getVisibleTextTracks();if(j&&j.models&&j.models.length>0){k=true
}return{closeCaptionsEnabled:k,currentTime:this.player.getCurrentTime(),duration:this.player.getDuration(),playerType:null,videoType:null}
};f._createObserver=function(k){var j;if(h&&h.observer&&h.observer.Video){j=new h.observer.Video(k,{mediaEventPrefix:""})
}return j};f._proxyEvent=function(j){if(this.currentStubPlayer){this.currentStubPlayer.trigger(j,this.getEventData())
}};f.setCurrentStubPlayer=function(){var j=this.getCurrentSourceObject();if(j&&j.stubPlayer){this.currentStubPlayer=j.stubPlayer
}};f.getSourceObjectByCID=function(l){var j;for(var k in this.sources){if(this.sources.hasOwnProperty(k)){if(this.sources[k].cid===l){j=this.sources[k];
break}}}return j};f.getCurrentSourceObject=function(){var j=this.player.getCurrentSrc();
var k;if(j){k=this.getSourceObjectByCID(j.cid)}return k};f.addSourceObject=function(o,q){var k;
var n;var m="data-analytics-id";var j="";var l="";var p;if(!this.sources[o]){k=d.querySelector("#"+o);
if(k){if(k.getAttribute(m)){n=k;j=k.getAttribute(m);l=o}else{n=d.querySelector("["+m+"]",k);
if(n){j=n.getAttribute(m);l=n.getAttribute("id")||""}}if(n){p=this._createStubPlayer(n,j,l);
this.sources[o]={stubPlayer:p,observer:this._createObserver(p),cid:q}}}}};f._createStubPlayer=function(l,j,k){var m=new g();
m.element=l;m.targetId=j||k||"";return m};c.exports=i},{"ac-dom-traversal":172,"ac-event-emitter":284}],880:[function(d,b,h){var m=d("ac-modal").Modal;
var i=d("ac-modal-video").ModalVideo;var f=d("ac-object");var k=d("./FilmsController");
var g=d("ac-feature");var n=d("ac-fullscreen");var l=d("ac-browser");var c=d("ac-classlist");
var o=d("ac-keyboard");var p=o.keys;function a(q){k.apply(this,arguments);this.options=f.extend(a.defaults,this.options);
this.modalVideo=null}var j=a.prototype=f.create(k.prototype);a.defaults=f.extend(k.defaults,{modalOptions:{playOnOpen:true,closeOnEnded:true}});
j.play=function(q){k.prototype.play.call(this,q);if(!this.modalVideo.modal.opened){this.openModal()
}};j.openModal=function(){this.modalVideo.open()};j.createPlayer=function(){k.prototype.createPlayer.call(this);
this._createModalVideo()};j._handleFullscreen=function(){var r=false;var s=this.modalVideo.modal;
s.removeKeyToClose(p.ESCAPE);var q=function(u){r=true};var t=function(u){if(r===true){s.close()
}r=false};o.addKeyDown(p.ESCAPE,q);o.addKeyUp(p.ESCAPE,t)};j._createModalVideo=function(){var q={playOnOpen:false,closeOnEnded:false};
if(this.player){this.modalVideo=i.create(this.player,q);this._handleFullscreen();
this._bindModalEvents()}else{this.modalVideo=new m()}this.trigger("modalready",{modal:this.modalVideo})
};j._onEnded=function(){if(this.options.modalOptions.closeOnEnded===true){this.modalVideo.close()
}};j._guaranteeVolume=function(){if(this.player&&this.player.getReadyState()>0){this.player.setVolume(1)
}else{if(this.player){this.player.once("readystatechange",function(){this.player.setVolume(1)
},this)}}};j._bindModalEvents=function(){this.modalVideo.on("close",this._onModalClose,this);
this.modalVideo.on("open",this._onModalOpen,this)};j._bindPlayerEvents=function(){if(this.player){this.player.on("ended",this._onEnded,this)
}};j._onModalClose=function(){this.player.setCurrentTime(0);this.player.getVisibleTextTracks().forEach(function(q){q.hide()
});this.pause();if(g.isTablet()){n.exitFullscreen(this.player.getMediaElement())
}};j._onModalOpen=function(){this._guaranteeVolume();if(this.options.modalOptions.playOnOpen===true){if(g.isTablet()){this.player.play()
}}};j._onEnded=function(){if(this.options.modalOptions.closeOnEnded===true){this.modalVideo.close()
}};j._onNoVideoSupport=function(){if(this.noSupportView&&this.modalVideo){this.modalVideo.appendContent(this.noSupportView.el)
}};b.exports=a},{"./FilmsController":878,"ac-browser":58,"ac-classlist":69,"ac-feature":310,"ac-fullscreen":336,"ac-keyboard":354,"ac-modal":485,"ac-modal-video":435,"ac-object":906}],881:[function(c,d,b){var a=c("./VideoSourceObject").create;
function g(){this.sources=[]}var f=g.prototype;f.addSource=function(j,i){var h=a(j,i);
if(h){this.sources.push(h);h.index=this.sources.length-1}return h};f.getSource=function(h){var i=null;
if(typeof h==="number"){i=this.getSourceByIndex(h)}else{if(typeof h==="string"){if(/^cid/.test(h)){i=this.getSourceByCid(h)
}else{i=this.getSourceById(h)}}}return i};f.getSourceByIndex=function(h){return this.sources[h]
};f.getSourceById=function(h){return this.getSourceByPropertyValue("id",h)};f.getSourceByCid=function(h){return this.getSourceByPropertyValue("cid",h)
};f.getSourceByPropertyValue=function(j,h){var i=null;this.sources.some(function(l){var k=false;
if(l[j]===h){i=l;k=true}return k});return i};d.exports=g},{"./VideoSourceObject":882}],882:[function(b,d,a){var g=b("ac-vatman");
var h=g.vatResource;var f="data-acv-poster";function c(l,i){if(typeof l!=="string"){throw new TypeError(l+" must be a string")
}var j=i.element||null;var n=null;var m=null;var k=i.posterAttribute||f;if(j){m=j.getAttribute(k);
n=j.id}return{vatResource:h.create(l),element:j,src:l,poster:m,id:n,cid:null}}d.exports={create:c}
},{"ac-vatman":506}],883:[function(c,b,i){var f=c("../FilmsController");var a=c("../ModalFilmsController");
var d=c("ac-object");var m=c("./sources");var h=c("ac-feature");var l=c("../posters");
var k=c("ac-dom-events");var g={poster:null,modal:false,deepLink:true,playOnClick:true};
function j(p,n){n=d.defaults(g,n||{});var o;if(n.modal===true&&!h.isHandheld()){o=new a(n)
}else{o=new f(n)}o.loadLocalization();o.createPlayer();if(o.player){m(p,o,n)}else{o.createNoSupportView();
p.forEach(function(q){k.addEventListener(q,"click",function(r){k.preventDefault(r);
o.modalVideo.open()})})}return o}b.exports=j},{"../FilmsController":878,"../ModalFilmsController":880,"../posters":886,"./sources":885,"ac-dom-events":127,"ac-feature":310,"ac-object":906}],884:[function(f,d,i){var k=f("ac-vatman");
var c=f("ac-video").Player;var h=f("ac-feature");var l=f("ac-fullscreen");var g=f("ac-dom-events");
function b(m){m.on("ended",function(){l.exitFullscreen(m.getMediaElement())});m.on("exitfullscreen",function(){m.setCurrentTime(0)
})}function a(m){m.on("enterfullscreen",function(){var n=m.getMediaElement();var o;
if(n.tagName.toLowerCase()!=="video"){o=m.getMediaHeight()/m.getMediaWidth();n.style.height=n.offsetWidth*o+"px"
}});m.on("exitfullscreen",function(){var n=m.getMediaElement();if(n.tagName.toLowerCase()!=="video"){n.style.height=null
}})}function j(m){m=m||{};var n=k.createPlayer(c,m);if(n){if(h.isHandheld()){b(n);
n.appendTo(document.body)}else{a(n)}}return n}d.exports=j},{"ac-dom-events":127,"ac-feature":310,"ac-fullscreen":336,"ac-vatman":506,"ac-video":876}],885:[function(d,c,g){var m=d("ac-router");
var o=d("ac-gesture-touchclick").TouchClick;var k=d("../windowLoad");var l=d("../posters.js");
var f=d("ac-vatman");var h=d("ac-dom-traversal").querySelector;var n=d("ac-browser");
var j=d("ac-feature");var a=(n.name==="Chrome");var b=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
function i(s,r,q){var t;var p;if(q.deepLink===true){p=new m.Router({hashChange:true,pushState:false})
}s.forEach(function(x){var u;var A=x.getAttribute("href");var z=x.getAttribute("data-film-id")||x.getAttribute("id");
var y={element:x};var w;var v=A;if(a){v=f.vatClient.getSource(A,b)}if(v!==A){x.setAttribute("href",v)
}if(!r.player){r.createPlayer()}if(A){w=r.createVideoResource(A,y);if(!w.poster){w.poster=r.defaultPosterFrame
}if(w.poster){l.loadPoster(w.poster)}if(q.deepLink===true&&w.id){p.createRoute(w.id,function(){k(function(){if(j.isTablet()){var C=r.player;
var E=C.poster;var D=C.getPoster();var B=C.getMediaElement();if(E){B.setAttribute("poster",D);
E._hide()}}r.player.setPreload("auto");r.play(w.id)})})}if(q.playOnClick===true){u=o.create(x);
u.on("click",function(){if(r.player&&r.player.getPreload()==="none"){r.player.setPreload("auto")
}r.play(z)})}}});if(q.deepLink===true){if(j.isTablet()){k(function(){window.requestAnimationFrame(function(){p.start()
})})}else{p.start()}}}c.exports=i},{"../posters.js":886,"../windowLoad":887,"ac-browser":58,"ac-dom-traversal":172,"ac-feature":310,"ac-gesture-touchclick":343,"ac-router":490,"ac-vatman":506}],886:[function(c,d,b){function a(f){new Image().src=f
}d.exports={loadPoster:a}},{}],887:[function(c,d,b){var a=false;var g=c("ac-dom-events");
g.addEventListener(window,"load",function(){a=true});function f(h){if(a){h()}else{g.addEventListener(window,"load",h)
}}d.exports=f},{"ac-dom-events":127}],888:[function(b,c,a){c.exports=b(54)},{"./ac-shared-instance/SharedInstance":889}],889:[function(b,c,a){c.exports=b(55)
},{}],890:[function(b,c,a){c.exports=b(544)},{"./ac-mvc-cid/CID":891}],891:[function(b,c,a){c.exports=b(545)
},{"ac-shared-instance":888}],892:[function(b,c,a){c.exports=b(16)},{}],893:[function(b,c,a){c.exports=b(17)
},{"./ac-object/clone":894,"./ac-object/create":895,"./ac-object/defaults":896,"./ac-object/extend":897,"./ac-object/getPrototypeOf":898,"./ac-object/isDate":899,"./ac-object/isEmpty":900,"./ac-object/isRegExp":901,"./ac-object/toQueryParameters":902}],894:[function(b,c,a){c.exports=b(18)
},{"./extend":897}],895:[function(b,c,a){c.exports=b(19)},{}],896:[function(b,c,a){c.exports=b(20)
},{"./extend":897}],897:[function(b,c,a){c.exports=b(21)},{}],898:[function(b,c,a){c.exports=b(22)
},{}],899:[function(b,c,a){c.exports=b(23)},{}],900:[function(b,c,a){c.exports=b(24)
},{}],901:[function(b,c,a){c.exports=b(25)},{}],902:[function(b,c,a){c.exports=b(26)
},{qs:892}],903:[function(b,c,a){c.exports={Model:b("./ac-mvc-model/Model")}},{"./ac-mvc-model/Model":904}],904:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");var h=c("ac-mvc-cid").CID;var i=function(j){this.attributes=a.defaults(this.defaultAttributes,j||{});
this.cid=h.getNewCID();if(this.attributes[this.idAttribute]){this.id=this.attributes[this.idAttribute]
}};var f=i.prototype=a.create(g.prototype);f.defaultAttributes={};f.idAttribute="id";
f._trigger=function(l,k,j){j=j||{};if(j.silent!==true){this.trigger(l,k)}};f._triggerChange=function(l,k,j){return this._trigger("change:"+l,k,j)
};f.get=function(j){if(!this.attributes){return}return this.attributes[j]};f.set=function(k,j){if(!this.attributes){return
}var o;var n;var m;var l={};var p=false;for(o in k){if(k.hasOwnProperty(o)){m=this.get(o);
if((typeof m==="object"&&typeof k[o]==="object"&&JSON.stringify(m)===JSON.stringify(k[o]))||(m===k[o])){continue
}p=true;this.attributes[o]=k[o];n={value:k[o],previous:m};l[o]=n;this._triggerChange(o,n,j)
}}if(p){this._trigger("change",l,j)}};f.has=function(j){if(!this.attributes){return false
}return(this.attributes[j]!==undefined)};f.eachAttribute=function(k,j){if(!this.attributes){return
}var l;for(l in this.attributes){if(this.attributes.hasOwnProperty(l)){k.call(j,{attribute:l,value:this.attributes[l]})
}}};f.destroy=function(){this.trigger("destroy");this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null
}}};d.exports=i},{"ac-event-emitter":284,"ac-mvc-cid":890,"ac-object":893}],905:[function(b,c,a){c.exports=b(16)
},{}],906:[function(b,c,a){arguments[4][17][0].apply(a,arguments)},{"./ac-object/clone":907,"./ac-object/create":908,"./ac-object/defaults":909,"./ac-object/extend":910,"./ac-object/getPrototypeOf":911,"./ac-object/isDate":912,"./ac-object/isEmpty":913,"./ac-object/isRegExp":914,"./ac-object/toQueryParameters":915}],907:[function(c,d,b){var h=c("./extend");
var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;for(k in j){if(a.call(j,k)){if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
f(i[k],j[k])}else{i[k]=j[k]}}}return i};d.exports=function g(j,i){if(i){return f({},j)
}return h({},j)}},{"./extend":910}],908:[function(b,c,a){c.exports=b(19)},{}],909:[function(b,c,a){c.exports=b(20)
},{"./extend":910}],910:[function(b,c,a){c.exports=b(21)},{}],911:[function(b,c,a){c.exports=b(22)
},{}],912:[function(b,c,a){c.exports=b(23)},{}],913:[function(b,c,a){c.exports=b(24)
},{}],914:[function(b,c,a){c.exports=b(25)},{}],915:[function(b,c,a){c.exports=b(26)
},{qs:905}],916:[function(b,c,a){c.exports["Array.isArray"]=b("./ac-polyfills/Array/isArray");
c.exports["Array.prototype.every"]=b("./ac-polyfills/Array/prototype.every");c.exports["Array.prototype.filter"]=b("./ac-polyfills/Array/prototype.filter");
c.exports["Array.prototype.forEach"]=b("./ac-polyfills/Array/prototype.forEach");
c.exports["Array.prototype.indexOf"]=b("./ac-polyfills/Array/prototype.indexOf");
c.exports["Array.prototype.lastIndexOf"]=b("./ac-polyfills/Array/prototype.lastIndexOf");
c.exports["Array.prototype.map"]=b("./ac-polyfills/Array/prototype.map");c.exports["Array.prototype.reduce"]=b("./ac-polyfills/Array/prototype.reduce");
c.exports["Array.prototype.reduceRight"]=b("./ac-polyfills/Array/prototype.reduceRight");
c.exports["Array.prototype.slice"]=b("./ac-polyfills/Array/prototype.slice");c.exports["Array.prototype.some"]=b("./ac-polyfills/Array/prototype.some");
c.exports.CustomEvent=b("./ac-polyfills/CustomEvent");c.exports["Date.now"]=b("./ac-polyfills/Date/now");
c.exports["Date.prototype.toISOString"]=b("./ac-polyfills/Date/prototype.toISOString");
c.exports["Date.prototype.toJSON"]=b("./ac-polyfills/Date/prototype.toJSON");c.exports["Element-HTMLElement.prototype.classList"]=b("./ac-polyfills/Element-HTMLElement/prototype.classList");
c.exports["Function.prototype.bind"]=b("./ac-polyfills/Function/prototype.bind");
c.exports.JSON=b("./ac-polyfills/JSON");c.exports["Object.assign"]=b("./ac-polyfills/Object/assign");
c.exports["Object.create"]=b("./ac-polyfills/Object/create");c.exports["Object.is"]=b("./ac-polyfills/Object/is");
c.exports["Object.keys"]=b("./ac-polyfills/Object/keys");c.exports.Promise=b("./ac-polyfills/Promise");
c.exports["String.prototype.trim"]=b("./ac-polyfills/String/prototype.trim");c.exports.XMLHttpRequest=b("./ac-polyfills/XMLHttpRequest");
c.exports["console.log"]=b("./ac-polyfills/console.log");c.exports.getComputedStyle=b("./ac-polyfills/getComputedStyle");
c.exports.matchMedia=b("./ac-polyfills/matchMedia");c.exports.requestAnimationFrame=b("./ac-polyfills/requestAnimationFrame");
c.exports.all={polyfill:function(){b("./ac-polyfills/Array/isArray").polyfill();
b("./ac-polyfills/Array/prototype.every").polyfill();b("./ac-polyfills/Array/prototype.filter").polyfill();
b("./ac-polyfills/Array/prototype.forEach").polyfill();b("./ac-polyfills/Array/prototype.indexOf").polyfill();
b("./ac-polyfills/Array/prototype.lastIndexOf").polyfill();b("./ac-polyfills/Array/prototype.map").polyfill();
b("./ac-polyfills/Array/prototype.reduce").polyfill();b("./ac-polyfills/Array/prototype.reduceRight").polyfill();
b("./ac-polyfills/Array/prototype.slice").polyfill();b("./ac-polyfills/Array/prototype.some").polyfill();
b("./ac-polyfills/CustomEvent").polyfill();b("./ac-polyfills/Date/now").polyfill();
b("./ac-polyfills/Date/prototype.toISOString").polyfill();b("./ac-polyfills/Date/prototype.toJSON").polyfill();
b("./ac-polyfills/Element-HTMLElement/prototype.classList").polyfill();b("./ac-polyfills/Function/prototype.bind").polyfill();
b("./ac-polyfills/JSON").polyfill();b("./ac-polyfills/Object/assign").polyfill();
b("./ac-polyfills/Object/create").polyfill();b("./ac-polyfills/Object/is").polyfill();
b("./ac-polyfills/Object/keys").polyfill();b("./ac-polyfills/Promise").polyfill();
b("./ac-polyfills/String/prototype.trim").polyfill();b("./ac-polyfills/XMLHttpRequest").polyfill();
b("./ac-polyfills/console.log").polyfill();b("./ac-polyfills/getComputedStyle").polyfill();
b("./ac-polyfills/matchMedia").polyfill();b("./ac-polyfills/requestAnimationFrame").polyfill()
}}},{"./ac-polyfills/Array/isArray":917,"./ac-polyfills/Array/prototype.every":918,"./ac-polyfills/Array/prototype.filter":919,"./ac-polyfills/Array/prototype.forEach":920,"./ac-polyfills/Array/prototype.indexOf":921,"./ac-polyfills/Array/prototype.lastIndexOf":922,"./ac-polyfills/Array/prototype.map":923,"./ac-polyfills/Array/prototype.reduce":924,"./ac-polyfills/Array/prototype.reduceRight":925,"./ac-polyfills/Array/prototype.slice":926,"./ac-polyfills/Array/prototype.some":927,"./ac-polyfills/CustomEvent":928,"./ac-polyfills/Date/now":929,"./ac-polyfills/Date/prototype.toISOString":930,"./ac-polyfills/Date/prototype.toJSON":931,"./ac-polyfills/Element-HTMLElement/prototype.classList":932,"./ac-polyfills/Function/prototype.bind":933,"./ac-polyfills/JSON":934,"./ac-polyfills/Object/assign":935,"./ac-polyfills/Object/create":936,"./ac-polyfills/Object/is":937,"./ac-polyfills/Object/keys":938,"./ac-polyfills/Promise":939,"./ac-polyfills/String/prototype.trim":940,"./ac-polyfills/XMLHttpRequest":941,"./ac-polyfills/console.log":942,"./ac-polyfills/getComputedStyle":943,"./ac-polyfills/matchMedia":944,"./ac-polyfills/requestAnimationFrame":945}],917:[function(b,c,a){c.exports={polyfill:function(){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}}}},{}],918:[function(b,c,a){c.exports={polyfill:function(){if(!Array.prototype.every){Array.prototype.every=function d(k,j){var h=Object(this);
var f=h.length>>>0;var g;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(g=0;g<f;g+=1){if(g in h&&!k.call(j,h[g],g,h)){return false}}return true}}}}
},{}],919:[function(b,c,a){c.exports={polyfill:function(){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}}}},{}],920:[function(b,c,a){c.exports={polyfill:function(){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}}}},{}],921:[function(b,c,a){c.exports={polyfill:function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}}}},{}],922:[function(b,c,a){c.exports={polyfill:function(){if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;j=parseInt(j,10);if(f<=0){return -1}h=(typeof j==="number")?Math.min(f-1,j):f-1;
h=h>=0?h:f-Math.abs(h);for(;h>=0;h-=1){if(h in g&&k===g[h]){return h}}return -1
}}}}},{}],923:[function(b,c,a){c.exports={polyfill:function(){if(!Array.prototype.map){Array.prototype.map=function d(l,k){var h=Object(this);
var g=h.length>>>0;var j;var f=new Array(g);if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(j=0;j<g;j+=1){if(j in h){f[j]=l.call(k,h[j],j,h)}}return f}}}}},{}],924:[function(b,c,a){c.exports={polyfill:function(){if(!Array.prototype.reduce){Array.prototype.reduce=function d(l,h){var j=Object(this);
var g=j.length>>>0;var k=0;var f;if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}if(typeof h==="undefined"){if(!g){throw new TypeError("Reduce of empty array with no initial value")
}f=j[0];k=1}else{f=h}while(k<g){if(k in j){f=l.call(undefined,f,j[k],k,j);k+=1}}return f
}}}}},{}],925:[function(b,c,a){c.exports={polyfill:function(){if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function d(l,h){var j=Object(this);
var g=j.length>>>0;var k=g-1;var f;if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}if(h===undefined){if(!g){throw new TypeError("Reduce of empty array with no initial value")
}f=j[g-1];k=g-2}else{f=h}while(k>=0){if(k in j){f=l.call(undefined,f,j[k],k,j);
k-=1}}return f}}}}},{}],926:[function(b,c,a){c.exports={polyfill:function(){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())}}},{}],927:[function(b,c,a){c.exports={polyfill:function(){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}}}},{}],928:[function(b,c,a){c.exports={polyfill:function(){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}}}},{}],929:[function(b,c,a){c.exports={polyfill:function(){if(!Date.now){Date.now=function d(){return new Date().getTime()
}}}}},{}],930:[function(b,c,a){c.exports={polyfill:function(){if(!Date.prototype.toISOString){Date.prototype.toISOString=function d(){if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}var g={year:this.getUTCFullYear(),month:this.getUTCMonth()+1,day:this.getUTCDate(),hours:this.getUTCHours(),minutes:this.getUTCMinutes(),seconds:this.getUTCSeconds(),mseconds:(this.getUTCMilliseconds()/1000).toFixed(3).substr(2,3)};
var h;var f;for(h in g){if(g.hasOwnProperty(h)&&h!=="year"&&h!=="mseconds"){g[h]=String(g[h]).length===1?"0"+String(g[h]):String(g[h])
}}if(g.year<0||g.year>9999){f=g.year<0?"-":"+";g.year=f+String(Math.abs(g.year/1000000)).substr(2,6)
}return g.year+"-"+g.month+"-"+g.day+"T"+g.hours+":"+g.minutes+":"+g.seconds+"."+g.mseconds+"Z"
}}}}},{}],931:[function(b,c,a){c.exports={polyfill:function(){if(!Date.prototype.toJSON){Date.prototype.toJSON=function(h){var i=Object(this);
var d;var g=function(j){var l=typeof j;var k=[null,"undefined","boolean","string","number"].some(function(m){return m===l
});if(k){return true}return false};var f=function(j){var k;if(g(j)){return j}k=(typeof j.valueOf==="function")?j.valueOf():(typeof j.toString==="function")?j.toString():null;
if(k&&g(k)){return k}throw new TypeError(j+" cannot be converted to a primitive")
};d=f(i);if(typeof d==="number"&&!isFinite(d)){return null}if(typeof i.toISOString!=="function"){throw new TypeError("toISOString is not callable")
}return i.toISOString.call(i)}}}}},{}],932:[function(b,c,a){c.exports={polyfill:function(){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if("document" in self){if(!("classList" in document.createElement("_"))){(function(n){if(!("Element" in n)){return
}var d="classList",j="prototype",q=n.Element[j],f=Object,o=String[j].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},g=Array[j].indexOf||function(u){var t=0,s=this.length;for(;t<s;t++){if(t in this&&this[t]===u){return t
}}return -1},r=function(s,t){this.name=s;this.code=DOMException[s];this.message=t
},k=function(t,s){if(s===""){throw new r("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(s)){throw new r("INVALID_CHARACTER_ERR","String contains an invalid character")
}return g.call(t,s)},h=function(w){var v=o.call(w.getAttribute("class")||""),u=v?v.split(/\s+/):[],t=0,s=u.length;
for(;t<s;t++){this.push(u[t])}this._updateClassName=function(){w.setAttribute("class",this.toString())
}},i=h[j]=[],m=function(){return new h(this)};r[j]=Error[j];i.item=function(s){return this[s]||null
};i.contains=function(s){s+="";return k(this,s)!==-1};i.add=function(){var w=arguments,v=0,t=w.length,u,s=false;
do{u=w[v]+"";if(k(this,u)===-1){this.push(u);s=true}}while(++v<t);if(s){this._updateClassName()
}};i.remove=function(){var x=arguments,w=0,t=x.length,v,s=false,u;do{v=x[w]+"";
u=k(this,v);while(u!==-1){this.splice(u,1);s=true;u=k(this,v)}}while(++w<t);if(s){this._updateClassName()
}};i.toggle=function(t,u){t+="";var s=this.contains(t),v=s?u!==true&&"remove":u!==false&&"add";
if(v){this[v](t)}if(u===true||u===false){return u}else{return !s}};i.toString=function(){return this.join(" ")
};if(f.defineProperty){var p={get:m,enumerable:true,configurable:true};try{f.defineProperty(q,d,p)
}catch(l){if(l.number===-2146823252){p.enumerable=false;f.defineProperty(q,d,p)
}}}else{if(f[j].__defineGetter__){q.__defineGetter__(d,m)}}}(self))}else{(function(){var f=document.createElement("_");
f.classList.add("c1","c2");if(!f.classList.contains("c2")){var g=function(i){var h=DOMTokenList.prototype[i];
DOMTokenList.prototype[i]=function(l){var k,j=arguments.length;for(k=0;k<j;k++){l=arguments[k];
h.call(this,l)}}};g("add");g("remove")}f.classList.toggle("c3",false);if(f.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(h,i){if(1 in arguments&&!this.contains(h)===!i){return i
}else{return d.call(this,h)}}}f=null}())}}}}},{}],933:[function(b,c,a){c.exports={polyfill:function(){if(!Function.prototype.bind){Function.prototype.bind=function(d){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var i=Array.prototype.slice.call(arguments,1);var h=this;var f=function(){};var g=function(){return h.apply((this instanceof f&&d)?this:d,i.concat(Array.prototype.slice.call(arguments)))
};f.prototype=this.prototype;g.prototype=new f();return g}}}}},{}],934:[function(require,module,exports){module.exports={polyfill:function(){if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);
case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v}}if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;
i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)
}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")
}}}())}}},{}],935:[function(b,c,a){c.exports={polyfill:function(){if(!Object.assign){if(!Object.keys){Object.keys=function d(g){var f=[];
var h;if((!g)||(typeof g.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(h in g){if(g.hasOwnProperty(h)){f.push(h)}}return f}}if(Object.defineProperty){if(!Object.assign){Object.defineProperty(Object,"assign",{enumerable:false,configurable:true,writable:true,value:function(q,f){if(q===undefined||q===null){throw new TypeError("Cannot convert first argument to object")
}var s=Object(q);var o=false;var g;for(var h=1;h<arguments.length;h++){var l=arguments[h];
if(l===undefined||l===null){continue}var k=Object.keys(Object(l));for(var j=0,n=k.length;
j<n;j++){var r=k[j];try{var m=Object.getOwnPropertyDescriptor(l,r);if(m!==undefined&&m.enumerable){s[r]=l[r]
}}catch(p){if(!o){o=true;g=p}}}if(o){throw g}}return s}})}}else{Object.assign=function(){for(var g=1;
g<arguments.length;g++){for(var f in arguments[g]){if(arguments[g].hasOwnProperty(f)){arguments[0][f]=arguments[g][f]
}}}return arguments[0]}}}}}},{}],936:[function(b,c,a){c.exports={polyfill:function(){if(!Object.create){var d=function(){};
Object.create=function(f){if(arguments.length>1){throw new Error("Second argument not supported")
}if(f===null||typeof f!=="object"){throw new TypeError("Object prototype may only be an Object.")
}d.prototype=f;return new d()}}}}},{}],937:[function(b,c,a){c.exports={polyfill:function(){if(!Object.is){Object.is=function(f,d){if(f===0&&d===0){return 1/f===1/d
}if(f!==f){return d!==d}return f===d}}}}},{}],938:[function(b,c,a){c.exports={polyfill:function(){if(!Object.keys){Object.keys=function d(g){var f=[];
var h;if((!g)||(typeof g.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(h in g){if(g.hasOwnProperty(h)){f.push(h)}}return f}}}}},{}],939:[function(b,c,a){c.exports=b("es6-promise")
},{"es6-promise":946}],940:[function(b,c,a){c.exports={polyfill:function(){if(!String.prototype.trim){String.prototype.trim=function d(){return this.replace(/^\s+|\s+$/g,"")
}}}}},{}],941:[function(b,c,a){c.exports={polyfill:function(){window.XMLHttpRequest=window.XMLHttpRequest||function(){var f;
try{f=new ActiveXObject("Msxml2.XMLHTTP")}catch(d){try{f=new ActiveXObject("Microsoft.XMLHTTP")
}catch(d){f=false}}return f}}}},{}],942:[function(b,c,a){c.exports={polyfill:function(){(function(d){var k,j;
var h={};var i=function(){};var g="memory".split(",");var f=("assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn").split(",");
while(k=g.pop()){d[k]=d[k]||h}while(j=f.pop()){d[j]=d[j]||i}})(this.console=this.console||{})
}}},{}],943:[function(b,c,a){c.exports={polyfill:function(){if(!window.getComputedStyle){function g(j,m,l){j.document;
var k=j.currentStyle[m].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],i=k[1],n=k[2],h;
l=!l?l:/%|em/.test(n)&&j.parentElement?g(j.parentElement,"fontSize",null):16;h=m=="fontSize"?l:/width/i.test(m)?j.clientWidth:j.clientHeight;
return n=="%"?i/100*h:n=="cm"?i*0.3937*96:n=="em"?i*l:n=="in"?i*96:n=="mm"?i*0.3937*96/10:n=="pc"?i*12*96/72:n=="pt"?i*96/72:i
}function f(k,n){var o=n=="border"?"Width":"",j=n+"Top"+o,m=n+"Right"+o,h=n+"Bottom"+o,i=n+"Left"+o;
k[n]=(k[j]==k[m]&&k[j]==k[h]&&k[j]==k[i]?[k[j]]:k[j]==k[h]&&k[i]==k[m]?[k[j],k[m]]:k[i]==k[m]?[k[j],k[m],k[h]]:[k[j],k[m],k[h],k[i]]).join(" ")
}function d(k){var l=this,j=k.currentStyle,n=g(k,"fontSize"),h=function(o){return"-"+o.toLowerCase()
},m;for(m in j){Array.prototype.push.call(l,m=="styleFloat"?"float":m.replace(/[A-Z]/,h));
if(m=="width"){l[m]=k.offsetWidth+"px"}else{if(m=="height"){l[m]=k.offsetHeight+"px"
}else{if(m=="styleFloat"){l["float"]=j[m];l.cssFloat=j[m]}else{if(/margin.|padding.|border.+W/.test(m)&&l[m]!="auto"){l[m]=Math.round(g(k,m,n))+"px"
}else{if(/^outline/.test(m)){try{l[m]=j[m]}catch(i){l.outlineColor=j.color;l.outlineStyle=l.outlineStyle||"none";
l.outlineWidth=l.outlineWidth||"0px";l.outline=[l.outlineColor,l.outlineWidth,l.outlineStyle].join(" ")
}}else{l[m]=j[m]}}}}}}f(l,"margin");f(l,"padding");f(l,"border");l.fontSize=Math.round(n)+"px"
}d.prototype={constructor:d,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")
},getPropertyValue:function(h){return this[h.replace(/-\w/g,function(i){return i[1].toUpperCase()
})]},item:function(h){return this[h]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")
}};window.getComputedStyle=function(h){return new d(h)}}}}},{}],944:[function(b,c,a){c.exports={polyfill:function(){window.matchMedia=window.matchMedia||(function(i,j){var g,d=i.documentElement,f=d.firstElementChild||d.firstChild,h=i.createElement("body"),k=i.createElement("div");
k.id="mq-test-1";k.style.cssText="position:absolute;top:-100em";h.style.background="none";
h.appendChild(k);return function(l){k.innerHTML='&shy;<style media="'+l+'"> #mq-test-1 { width:42px; }</style>';
d.insertBefore(h,f);g=k.offsetWidth===42;d.removeChild(h);return{matches:g,media:l}
}}(document))}}},{}],945:[function(b,c,a){c.exports={polyfill:function(){(function(){var f=0;
var g=["ms","moz","webkit","o"];for(var d=0;d<g.length&&!window.requestAnimationFrame;
++d){window.requestAnimationFrame=window[g[d]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[g[d]+"CancelAnimationFrame"]||window[g[d]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(l,i){var h=Date.now();
var j=Math.max(0,16-(h-f));var k=window.setTimeout(function(){l(h+j)},j);f=h+j;
return k}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(h){clearTimeout(h)
}}}())}}},{}],946:[function(b,c,a){var d=b("./promise/promise").Promise;var f=b("./promise/polyfill").polyfill;
a.Promise=d;a.polyfill=f},{"./promise/polyfill":950,"./promise/promise":951}],947:[function(c,d,b){var a=c("./utils").isArray;
var g=c("./utils").isFunction;function f(h){var i=this;if(!a(h)){throw new TypeError("You must pass an array to all.")
}return new i(function(o,n){var l=[],m=h.length,q;if(m===0){o([])}function p(r){return function(s){j(r,s)
}}function j(r,s){l[r]=s;if(--m===0){o(l)}}for(var k=0;k<h.length;k++){q=h[k];if(q&&g(q.then)){q.then(p(k),n)
}else{j(k,q)}}})}b.all=f},{"./utils":955}],948:[function(b,c,a){(function(f,g){var o=(typeof window!=="undefined")?window:{};
var l=o.MutationObserver||o.WebKitMutationObserver;var n=(typeof g!=="undefined")?g:(this===undefined?window:this);
function m(){return function(){f.nextTick(p)}}function i(){var s=0;var q=new l(p);
var r=document.createTextNode("");q.observe(r,{characterData:true});return function(){r.data=(s=++s%2)
}}function k(){return function(){n.setTimeout(p,1)}}var j=[];function p(){for(var s=0;
s<j.length;s++){var r=j[s];var t=r[0],q=r[1];t(q)}j=[]}var h;if(typeof f!=="undefined"&&{}.toString.call(f)==="[object process]"){h=m()
}else{if(l){h=i()}else{h=k()}}function d(s,q){var r=j.push([s,q]);if(r===1){h()
}}a.asap=d}).call(this,b("JkpR2F"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{JkpR2F:980}],949:[function(d,f,a){var c={instrument:false};function b(g,h){if(arguments.length===2){c[g]=h
}else{return c[g]}}a.config=c;a.configure=b},{}],950:[function(b,c,a){(function(f){var d=b("./promise").Promise;
var h=b("./utils").isFunction;function g(){var j;if(typeof f!=="undefined"){j=f
}else{if(typeof window!=="undefined"&&window.document){j=window}else{j=self}}var i="Promise" in j&&"resolve" in j.Promise&&"reject" in j.Promise&&"all" in j.Promise&&"race" in j.Promise&&(function(){var k;
new j.Promise(function(l){k=l});return h(k)}());if(!i){j.Promise=d}}a.polyfill=g
}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./promise":951,"./utils":955}],951:[function(q,d,D){var B=q("./config").config;
var A=q("./config").configure;var s=q("./utils").objectOrFunction;var a=q("./utils").isFunction;
var f=q("./utils").now;var g=q("./all").all;var j=q("./race").race;var l=q("./resolve").resolve;
var c=q("./reject").reject;var u=q("./asap").asap;var r=0;B.async=u;function h(E){if(!a(E)){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}if(!(this instanceof h)){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}this._subscribers=[];z(E,this)}function z(I,H){function E(J){v(H,J)}function G(J){k(H,J)
}try{I(E,G)}catch(F){G(F)}}function x(L,N,K,G){var E=a(K),J,I,M,F;if(E){try{J=K(G);
M=true}catch(H){F=true;I=H}}else{J=G;M=true}if(t(N,J)){return}else{if(E&&M){v(N,J)
}else{if(F){k(N,I)}else{if(L===b){v(N,J)}else{if(L===C){k(N,J)}}}}}}var m=void 0;
var p=0;var b=1;var C=2;function o(E,J,I,H){var G=E._subscribers;var F=G.length;
G[F]=J;G[F+b]=I;G[F+C]=H}function w(I,E){var K,J,H=I._subscribers,G=I._detail;for(var F=0;
F<H.length;F+=3){K=H[F];J=H[F+E];x(E,K,J,G)}I._subscribers=null}h.prototype={constructor:h,_state:undefined,_detail:undefined,_subscribers:undefined,then:function(J,H){var I=this;
var F=new this.constructor(function(){});if(this._state){var G=arguments;B.async(function E(){x(I._state,F,G[I._state-1],I._detail)
})}else{o(this,F,J,H)}return F},"catch":function(E){return this.then(null,E)}};
h.all=g;h.race=j;h.resolve=l;h.reject=c;function t(I,G){var H=null,E;try{if(I===G){throw new TypeError("A promises callback cannot return that same promise.")
}if(s(G)){H=G.then;if(a(H)){H.call(G,function(J){if(E){return true}E=true;if(G!==J){v(I,J)
}else{i(I,J)}},function(J){if(E){return true}E=true;k(I,J)});return true}}}catch(F){if(E){return true
}k(I,F);return true}return false}function v(F,E){if(F===E){i(F,E)}else{if(!t(F,E)){i(F,E)
}}}function i(F,E){if(F._state!==m){return}F._state=p;F._detail=E;B.async(y,F)}function k(F,E){if(F._state!==m){return
}F._state=p;F._detail=E;B.async(n,F)}function y(E){w(E,E._state=b)}function n(E){w(E,E._state=C)
}D.Promise=h},{"./all":947,"./asap":948,"./config":949,"./race":952,"./reject":953,"./resolve":954,"./utils":955}],952:[function(c,f,b){var a=c("./utils").isArray;
function d(g){var h=this;if(!a(g)){throw new TypeError("You must pass an array to race.")
}return new h(function(m,l){var k=[],n;for(var j=0;j<g.length;j++){n=g[j];if(n&&typeof n.then==="function"){n.then(m,l)
}else{m(n)}}})}b.race=d},{"./utils":955}],953:[function(b,c,a){function d(g){var f=this;
return new f(function(i,h){h(g)})}a.reject=d},{}],954:[function(b,c,a){function d(g){if(g&&typeof g==="object"&&g.constructor===this){return g
}var f=this;return new f(function(h){h(g)})}a.resolve=d},{}],955:[function(d,f,b){function g(i){return h(i)||(typeof i==="object"&&i!==null)
}function h(i){return typeof i==="function"}function a(i){return Object.prototype.toString.call(i)==="[object Array]"
}var c=Date.now||function(){return new Date().getTime()};b.objectOrFunction=g;b.isFunction=h;
b.isArray=a;b.now=c},{}],956:[function(b,c,a){c.exports=b(54)},{"./ac-shared-instance/SharedInstance":957}],957:[function(b,c,a){c.exports=b(55)
},{}],958:[function(b,c,a){c.exports={Viewport:b("./ac-viewport/Viewport")}},{"./ac-viewport/Viewport":959}],959:[function(d,b,g){var c=d("ac-shared-instance").SharedInstance,k=d("ac-window-delegate").WindowDelegate,i=d("ac-breakpoints-delegate").BreakpointsDelegate;
var j="ac-viewport:Viewport",a="2.0.0-1";var h;function f(m){var n,l=k;for(n in l){if(l.hasOwnProperty(n)){this[n]=l[n]
}else{h[n]=l[n]}}this.addCustomEvent(i.getCustomEvent())}h=f.prototype;h.getBreakpoint=function(){return i.getBreakpoint()
};b.exports=c.share(j,a,f)},{"ac-breakpoints-delegate":56,"ac-shared-instance":956,"ac-window-delegate":962}],960:[function(b,c,a){c.exports=b(54)
},{"./ac-shared-instance/SharedInstance":961}],961:[function(b,c,a){c.exports=b(55)
},{}],962:[function(b,c,a){arguments[4][250][0].apply(a,arguments)},{"./ac-window-delegate/WindowDelegate":965,"./ac-window-delegate/WindowDelegateCustomEvent":966,"./ac-window-delegate/WindowDelegateOptimizer":967}],963:[function(b,c,a){c.exports=b(251)
},{"ac-event-emitter":284}],964:[function(b,c,a){c.exports=b(252)},{"ac-event-emitter":284}],965:[function(d,b,g){var i;
var c=d("ac-shared-instance").SharedInstance,l=d("ac-dom-emitter").DOMEmitter,j=d("./OptimizerController"),f=d("./CustomEventController"),h=d("./queries/queries"),m=d("./optimizers/optimizers");
var k="ac-window-delegate:WindowDelegate",a="3.0.0-4";function n(){this._emitter=new l(window);
this._controllers={optimizer:new j(m),customEvent:new f()};var o;for(o in h){if(h.hasOwnProperty(o)){this[o]=this._getProperty.bind(this,o);
h[o]=h[o].bind(this)}}this._bindEvents()}i=n.prototype;i.on=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOn(q.customEvents,r,p);
this._emitterOn.apply(this,arguments);return this};i.once=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOnce(q.customEvents,r,p);
this._emitterOnce.apply(this,arguments);return this};i.off=function(p,u,q){var t=this._seperateCustomEvents(p),r=false;
if(!p){r=true}this._customEventOff(t.customEvents,u,q,r);this._emitterOff.apply(this,arguments);
if(r){try{var o;for(o in this._controllers.optimizer._events){if(this._controllers.optimizer._events.hasOwnProperty(o)&&this._shouldDeoptimizeEvent(o,true)){this._deoptimizeEvent(o)
}}this._bindEvents()}catch(s){}}return this};i.has=function(o,q,p){return this._emitter.has.apply(this._emitter,arguments)
};i.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};i.emitterTrigger=function(){this._emitter.emitterTrigger.apply(this._emitter,arguments);
return this};i.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};i.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};i.addOptimizer=function(o){this._controllers.optimizer.add(o);return this
};i.addCustomEvent=function(o){this._controllers.customEvent.add(o);return this
};i._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)};i._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)
};i._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};i._onEventUnbound=function(p){var o=p.data.evt;
if(this._shouldDeoptimizeEvent(o)){this._deoptimizeEvent(o)}};i._customEventOn=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.on(o.join(" "),q,p)};i._customEventOnce=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.once(o.join(" "),q,p)};i._customEventOff=function(o,r,p,q){if(!q&&o.length===0){return
}if(q&&o.length===0){this._controllers.customEvent.off();return}this._controllers.customEvent.off(o.join(" "),r,p)
};i._getProperty=function(q,o){var p=null;if(!o){p=this._getOptimizedValue(q)}if(p===null){p=h[q].call(this,o)
}return p};i._optimizeEvents=function(q){var p,r,o=q.length;for(r=0;r<o;r++){p=q[r];
if(this._shouldOptimizeEvent(p)){this._optimizeEvent(p)}}};i._shouldOptimizeEvent=function(o){if(this._controllers.optimizer.canOptimizeEvent(o)&&!this._controllers.optimizer.isOptimizingEvent(o)){return true
}return false};i._shouldDeoptimizeEvent=function(o,p){if(this._controllers.optimizer.isOptimizingEvent(o)&&(p||this._emitter._eventEmitter._events[o].length<=1)){return true
}return false};i._optimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.activate();this._emitterOn(p,o.callback,o)};i._deoptimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.deactivate();this._emitterOff(p,o.callback,o)};i._getOptimizedValue=function(o){return this._controllers.optimizer.get(o)
};i._seperateCustomEvents=function(s){var p={customEvents:[],standardEvents:[]};
if(typeof s==="string"){var t=s.split(" "),q,r,o=t.length;for(r=0;r<o;r++){q=t[r];
if(this._controllers.customEvent.canHandleCustomEvent(q)){p.customEvents.push(q)
}else{p.standardEvents.push(q)}}}return p};i._bindEvents=function(){this._emitter.on("dom-emitter:didoff",this._onEventUnbound,this)
};b.exports=c.share(k,a,n)},{"./CustomEventController":963,"./OptimizerController":964,"./optimizers/optimizers":970,"./queries/queries":979,"ac-dom-emitter":121,"ac-shared-instance":960}],966:[function(b,c,a){c.exports=b(254)
},{"ac-event-emitter":284}],967:[function(b,c,a){c.exports=b(255)},{"ac-event-emitter":284}],968:[function(b,c,a){c.exports=b(256)
},{"../../WindowDelegateOptimizer":967,"../../queries/queries":979}],969:[function(b,c,a){c.exports=b(257)
},{"../../WindowDelegateOptimizer":967,"../../queries/queries":979}],970:[function(b,c,a){c.exports=b(258)
},{"./events/resize":968,"./events/scroll":969}],971:[function(b,c,a){c.exports=b(259)
},{}],972:[function(b,c,a){c.exports=b(260)},{}],973:[function(b,c,a){c.exports=b(261)
},{}],974:[function(b,c,a){c.exports=b(262)},{}],975:[function(b,c,a){c.exports=b(263)
},{}],976:[function(b,c,a){c.exports=b(264)},{}],977:[function(b,c,a){c.exports=b(265)
},{}],978:[function(b,c,a){c.exports=b(266)},{}],979:[function(b,c,a){c.exports=b(267)
},{"./methods/clientHeight":971,"./methods/clientWidth":972,"./methods/innerHeight":973,"./methods/innerWidth":974,"./methods/maxScrollX":975,"./methods/maxScrollY":976,"./methods/scrollX":977,"./methods/scrollY":978}],980:[function(b,c,a){var f=c.exports={};
f.nextTick=(function(){var h=typeof window!=="undefined"&&window.setImmediate;var j=typeof window!=="undefined"&&window.postMessage&&window.addEventListener;
if(h){return function(k){return window.setImmediate(k)}}if(j){var g=[];window.addEventListener("message",function(l){var m=l.source;
if((m===window||m===null)&&l.data==="process-tick"){l.stopPropagation();if(g.length>0){var k=g.shift();
k()}}},true);return function i(k){g.push(k);window.postMessage("process-tick","*")
}}return function i(k){setTimeout(k,0)}})();f.title="browser";f.browser=true;f.env={};
f.argv=[];function d(){}f.on=d;f.addListener=d;f.once=d;f.off=d;f.removeListener=d;
f.removeAllListeners=d;f.emit=d;f.binding=function(g){throw new Error("process.binding is not supported")
};f.cwd=function(){return"/"};f.chdir=function(g){throw new Error("process.chdir is not supported")
}},{}],981:[function(d,c,f){d("../shared/acFilmsPolyfills");d("../shared/LocalNav").initialize();
var n=d("../shared/SectionVideo/SectionVideoGroupController");var o=d("../shared/SectionVideo/SectionVideoControls");
var p=d("../shared/sectionVideoFactory").create;var a=d("../shared/videoUtils").canPlayVideoType();
var b=d("ac-dom-traversal");var l=d("ac-feature");var h=d("ac-browser");var g=d("ac-base").Element;
var i=d("ac-films");var k=d("../shared/AnalyticsVideoTranslator");var j=h.os.toLowerCase()==="android"||false;
var m=(function(){return{initialize:function(){var r=g.selectAll("#film-watch-applepay");
r.forEach(function(w){if(!w.getAttribute("data-analytics-id")){w.setAttribute("data-analytics-id",w.id)
}});i.create(r,{modal:true});if(l.isTablet()){g.addClassName(document.documentElement,"tablet")
}var s=a("video/mp4");var v=b.querySelectorAll("[data-section-video]");var u=[];
var q;q=new n();if(l.isHandheld()||j){g.addClassName(document.documentElement,"handheld");
var t=g.selectAll("#film-easier");t.forEach(function(w){if(!w.getAttribute("data-analytics-id")){w.setAttribute("data-analytics-id",w.id)
}});i.create(t,{modal:true})}else{if(s&&!h.IE){v.forEach(function(z){var w=p(z);
var y=b.querySelector("[data-section-video-controls]",z);var x="";var A;if(y){new o(y,w,q)
}u.push(w);if(z.getAttribute("data-analytics-id")){x=z.getAttribute("data-analytics-id")
}else{A=b.querySelector("[data-analytics-id]",z);if(A){x=A.getAttribute("data-analytics-id")
}else{x=w.video.id||w.src||""}}if(l.isDesktop()&&x){x+="-ambient"}new k(w.video,x).activate()
});q.addVideos(u);q.loadAllVideos()}}return this}}}());c.exports=m.initialize()
},{"../shared/AnalyticsVideoTranslator":982,"../shared/LocalNav":983,"../shared/SectionVideo/SectionVideoControls":985,"../shared/SectionVideo/SectionVideoGroupController":986,"../shared/acFilmsPolyfills":988,"../shared/sectionVideoFactory":990,"../shared/videoUtils":991,"ac-base":false,"ac-browser":58,"ac-dom-traversal":172,"ac-feature":289,"ac-films":877}],982:[function(c,b,f){var i=c("ac-analytics");
var k=c("ac-event-emitter").EventEmitter;var a=c("ac-dom-traversal");var d=c("ac-object");
var j=c("ac-dom-events");var g=function(l,m){this.video=l;this.stubPlayer=this._createStubPlayer(l,m);
this.observer=null};var h=g.prototype;h.activate=function(){this.observder=this._createObserver();
j.addEventListener(this.video,"play",function(){this._proxyEvent("play")}.bind(this));
j.addEventListener(this.video,"ended",function(){this._proxyEvent("ended")}.bind(this));
j.addEventListener(this.video,"timeupdate",function(){this._proxyEvent("timeupdate")
}.bind(this))};h.getEventData=function(){return{closeCaptionsEnabled:false,currentTime:this.video.currentTime,duration:this.video.duration,playerType:null,videoType:null}
};h._proxyEvent=function(l){this.stubPlayer.trigger(l,this.getEventData())};h._createObserver=function(){var l;
if(i&&i.observer&&i.observer.Video){l=new i.observer.Video(this.stubPlayer,{mediaEventPrefix:""})
}return l};h._createStubPlayer=function(l,n){var m=new k();m.element=l;m.targetId=n||"";
return m};b.exports=g},{"ac-dom-events":127,"ac-dom-traversal":172,"ac-event-emitter":284,"ac-object":906}],983:[function(c,b,f){var k=c("ac-event-emitter").EventEmitter;
var i=c("ac-dom-emitter").DOMEmitter;var g=c("ac-base").Element;var j=c("ac-analytics");
var a=c("ac-dom-events");var h=c("ac-viewport").Viewport;var d=(function(){return{opened:false,closeThreshold:0,initialize:function(){if(g.getElementById("ac-globalnav")){this.globalheaderHeight=g.getElementById("ac-globalnav").offsetHeight
}else{this.globalheaderHeight=g.getElementById("globalheader").offsetHeight}this.localNav=g.getElementById("localnav");
this.menu=g.getElementById("menu");this.curtain=g.getElementById("curtain");this.main=g.getElementById("main");
if(g.getElementById("ac-globalfooter")){this.footer=g.getElementById("ac-globalfooter")
}else{this.footer=g.select(".footer-wrapper")}this.footer=g.select(".footer-wrapper");
var l=g.getElementById("explore-btn");this.menuEmitter=new i(this.menu);this.analyticsEmitter=null;
h.on("scroll load",this.navTrackPosition.bind(this));g.addEventListener(l,"click",this.toggle.bind(this));
g.addEventListener(this.curtain,"click",this.onCurtainTouch.bind(this));g.addEventListener(document,"touchstart",this.onDocumentTouch.bind(this));
this.menuEmitter.on("transitionend",this.onTransitionEnd,this);if(typeof j==="object"){this.analyticsEmitter=new k();
new j.observer.Event(this.analyticsEmitter,{interactionEvents:["localnav-open"]})
}return this},onTransitionEnd:function(){g.removeClassName(this.menu,"translating");
g.addClassName(this.menu,"translate-ended")},translate:function(){g.removeClassName(this.menu,"translate-ended");
g.addClassName(this.menu,"translating")},open:function(){g.addClassName(this.localNav,"open");
g.addClassName(this.curtain,"open");this.translate();this.opened=true;this.openedAt=h.scrollY();
var l="";if(g.hasClassName(this.localNav,"lock")){l=" - locked";this.localNav.setAttribute("data-analytics-region","product nav locked");
if(typeof j==="object"){j.regions.refreshRegion(this.localNav)}}else{l=" - unlocked";
this.localNav.setAttribute("data-analytics-region","product nav");if(typeof j==="object"){j.regions.refreshRegion(this.localNav)
}}if(this.analyticsEmitter){this.analyticsEmitter.trigger("localnav-open",{prop3:"{PAGE_NAME_NO_LOCALE} - explore"+l,title:"{PAGE_NAME_NO_LOCALE} - explore"+l})
}},close:function(){g.removeClassName(this.localNav,"open");g.removeClassName(this.curtain,"open");
this.translate();this.opened=false},closeImmediately:function(){this.menuEmitter.off("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd);
g.addClassName(this.localNav,"immediate-hide");window.requestAnimationFrame(function(){g.removeClassName(this.localNav,"open");
g.removeClassName(this.curtain,"open");g.removeClassName(this.menu,"translate-ended");
window.requestAnimationFrame(function(){g.removeClassName(this.localNav,"immediate-hide");
g.addClassName(this.menu,"translate-ended");this.menuEmitter.on("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd,this)
}.bind(this))}.bind(this));this.opened=false},toggle:function(l){if(this.opened){this.close()
}else{this.open()}a.stop(l)},onDocumentTouch:function(l){if(this.opened&&!this.localNav.contains(l.srcElement)){this.closeImmediately()
}},onCurtainTouch:function(l){if(this.opened){this.close()}},withinThreshold:function(l){return(l>this.openedAt+this.closeThreshold)||(l<this.openedAt-this.closeThreshold)
},navTrackPosition:function(l){var m=h.scrollY();if(m>=this.globalheaderHeight){g.addClassName(this.localNav,"lock")
}else{g.removeClassName(this.localNav,"lock")}if(this.opened&&this.withinThreshold(m)){this.close()
}}}}());b.exports=d},{"ac-base":false,"ac-dom-emitter":121,"ac-dom-events":127,"ac-event-emitter":284,"ac-viewport":958}],984:[function(f,d,h){var j=f("ac-dom-emitter").DOMEmitter;
var c=f("ac-event-emitter").EventEmitter;var g=f("ac-object");var m=f("ac-asset-loader").AssetLoader;
var n=f("ac-asset-loader").Asset.Video;var b=f("ac-dom-traversal");var k=f("ac-classlist");
var l=f("ac-dom-events");var i;var p={loading:"loading",loaded:"loaded",ready:"ready",error:"error",play:"play",pause:"pause",ended:"ended",abort:"abort",reset:"reset",coverElementTransitionEnd:"coverElementTransitionEnd"};
var a={loading:"loading",loaded:"loaded",play:"playing",ended:"ended",reset:"reset"};
var o=function(r,s,q){this.section=r;this.useSplitFileLoading=q;this.video=b.querySelector("video",this.section);
this.videoEmitter=new j(this.video);this.assetLoader=null;this.basePath=s;this.splitFilePath=s+"/split";
this.ended=false;this.hasEnded=false;this.poster=b.querySelector(".poster",this.section);
this.startframe=b.querySelector(".startframe",this.section);this.endframe=b.querySelector(".endframe",this.section)
};i=o.prototype=g.create(c.prototype);i.load=function(){var r,q;if(this.useSplitFileLoading){q=new n(this.splitFilePath,{element:this.video,split:true})
}else{q=new n(this.basePath,{element:this.video,split:false})}this.assetLoader=new m(q,{timeout:1000*40});
this.assetLoader.once("error",this._onLoadError,this);this.assetLoader.once("loaded",this._onLoaded,this);
this.assetLoader.once("timeout",this._onLoadTimeout,this);k.add(this.section,a.loading);
this.assetLoader.load()};i.abort=function(){for(var q in a){k.remove(this.section,q)
}if(this.assetLoader){this.assetLoader.off("error",this._onLoadError);this.assetLoader.off("loaded",this._onLoaded);
this.assetLoader.off("timeout",this._onTimeout)}this.trigger(p.abort,this)};i._onLoadError=function(){k.remove(this.section,a.loading);
this.trigger(p.error,this)};i._onLoadTimeout=function(){k.remove(this.section,a.loading);
this.trigger(p.error,this)};i._onLoaded=function(){this.videoEmitter.once("canplaythrough",this._onCanplaythrough,this);
this.videoEmitter.on("pause",this._onPause,this);k.remove(this.section,a.loading);
k.add(this.section,a.loaded);this.trigger(p.loaded,this)};i._onEnded=function(){this.ended=true;
this.hasEnded=true;k.remove(this.section,a.play);k.add(this.section,a.ended)};i._onCanplaythrough=function(){this.videoEmitter.on("ended",this._onEnded,this);
this.trigger(p.ready,this)};i._onPause=function(){this.end();this._onEnded()};i.play=function(){if(this.video&&this.video.readyState>0){this.ended=false;
k.add(this.section,a.play);k.remove(this.section,a.ended);k.remove(this.section,a.reset);
this.trigger(p.play,this);if(this.video.paused){this.video.play()}}};i.end=function(){if(!this.ended){this.pause();
this.video.currentTime=this.video.duration}};i.pause=function(){if(!this.video.paused&&this.video.readyState===4){this.video.pause();
k.remove(this.section,a.play)}};i.reset=function(s,q){var r;if(this.video&&this.video.readyState>0){this.pause();
this.video.currentTime=0;this.ended=false}if(s&&q){r=this._onCoverElementTransitionEnd.bind(this,q);
l.addEventListener(q,"transitionend",r);window.requestAnimationFrame(function(){k.add(this.section,a.reset)
}.bind(this))}};i._onCoverElementTransitionEnd=function(q){l.removeEventListener(q,"transitionend",this._onCoverElementTransitionEnd);
this.trigger(p.coverElementTransitionEnd,q)};d.exports=o},{"ac-asset-loader":28,"ac-classlist":69,"ac-dom-emitter":121,"ac-dom-events":127,"ac-dom-traversal":172,"ac-event-emitter":284,"ac-object":906}],985:[function(c,b,d){var a=c("ac-dom-traversal");
var g=c("ac-dom-emitter").DOMEmitter;var k=c("ac-dom-events");var j=c("./SectionVideoTrigger");
var h="data-section-video-trigger";var f;var i=function(m,l,n){this.sectionVideo=l;
this.groupController=n;this.container=m;this.triggers=[];this._createTriggers()
};f=i.prototype;f._createTriggers=function(){var l=a.querySelectorAll("["+h+"]",this.container);
if(l&&l.length>0){l.forEach(function(m,n){var p=this._deriveMethodFromString(m.getAttribute(h));
var o=new j(m,p,this);this.triggers.push(o)},this)}};f._deriveMethodFromString=function(l){var m;
if(l){if(l==="play"){m=this._play}if(l==="pause"){m=this._pause}}return m};f._play=function(l){k.stop(l);
if(this.groupController){this.groupController.playVideo(this.sectionVideo)}else{this.sectionVideo.play()
}};f._pause=function(l){k.stop(l);if(this.gropController){this.groupController.pauseVideo(this.sectionVideo)
}else{this.sectionVideo.pause()}};f.enable=function(){this.triggers.forEach(function(l){l.enable()
})};f.disable=function(){this.triggers.forEach(function(l){l.disable()})};f=i.prototype;
b.exports=i},{"./SectionVideoTrigger":987,"ac-dom-emitter":121,"ac-dom-events":127,"ac-dom-traversal":172}],986:[function(c,b,f){var k=c("ac-element-engagement").ElementEngagement;
var a=new k();var j=c("ac-array");var i=c("ac-feature");var d=i.isTablet()||i.isHandheld();
var h;var g=function(l){this.videos=l||[];this.loadingQueue=[];this.loadingVideo=null;
this.playingVideo=null;this.queueRunning=false;if(this.videos.length>0){this._bindEventCallbacks()
}};h=g.prototype;h._bindEventCallbacks=function(){this.videos.forEach(function(l){l.once("error",this._onVideoError,this);
l.once("ready",this._onVideoReady,this);l.once("loaded",this._onVideoLoaded,this)
},this)};h.addVideos=function(l){l.forEach(function(m){if(this.videos.indexOf(m)===-1){this.videos.push(m)
}},this);if(this.videos.length>0){this._bindEventCallbacks()}};h.loadAllVideos=function(){this.videos.forEach(function(l){this.loadVideo(l)
},this)};h.loadVideo=function(l){if(this.loadingQueue.indexOf(l)===-1){this.loadingQueue.push(l);
if(!this.queueRunning){this._loadFromQueue()}}};h._loadFromQueue=function(){if(this.loadingQueue.length>0){this.queueRunning=true;
this.loadingVideo=this.loadingQueue.shift();this.loadingVideo.load()}else{this.queueRunning=false
}};h._onVideoReady=function(l){var m=a.addElement(l.section,{stopOnEngaged:false});
m.on("exitview",function(){if(!l.paused&&!l.hasEnded){var n=l.video.currentTime/l.video.duration;
if(n>=0.5){l.end()}else{l.reset()}}if(this.playingVideo===l){this.playingVideo=null
}},this);m.on("engaged",function(){if(!l.ended&&l.video.paused&&!d){this.playVideo(l)
}},this);a.start(m)};h._onVideoError=function(l){l.abort();this._loadFromQueue()
};h._onVideoLoaded=function(){this._loadFromQueue()};h.playVideo=function(l){if(this.playingVideo&&!this.playingVideo.paused){this.playingVideo.end()
}if(l.ended){l.once("coverElementTransitionEnd",l.play,l);l.reset(true,l.endframe)
}else{l.play()}this.playingVideo=l};h.pauseVideo=function(l){l.pause();if(this.playingVideo===l){this.playingVideo=null
}};h.pauseAllVideos=function(){this.videos.forEach(function(l){l.pause();this.playingVideo=null
},this)};b.exports=g},{"ac-array":1,"ac-element-engagement":282,"ac-feature":289}],987:[function(d,f,b){var a=d("ac-object");
var i=d("ac-dom-emitter").DOMEmitter;var c=d("ac-dom-events");var g;function h(k,l,j){i.call(this,k);
this.element=k;this.callback=l;this.context=j||null;this.enable()}g=h.prototype=a.create(i.prototype);
g.enable=function(){this.on("click",this._onClick,this)};g.disable=function(){this.off("click",this._onClick)
};g._onClick=function(j){j.preventDefault();j.stopPropagation();this.callback.call(this.context,j)
};f.exports=h},{"ac-dom-emitter":121,"ac-dom-events":127,"ac-object":906}],988:[function(b,c,a){c.exports=(function(){b("ac-polyfills")["Object.assign"].polyfill();
b("ac-polyfills")["Object.create"].polyfill()}())},{"ac-polyfills":916}],989:[function(c,d,a){var f=(function(){var g="http://images.apple.com/global/elements/blank.gif";
return g.replace(/global\/.*/,"")}());d.exports=function b(g){if(!!g.match(/(^http(s?))/)){return g
}if(g.match(/^\/(?!\/)/)){g=f+g.replace(/^\//,"");g=g.replace(/(^.+)(\/105\/)/,"$1/")
}return g}},{}],990:[function(b,a,c){var g=b("./cname");var i=b("ac-feature");var j=b("./SectionVideo/SectionVideo");
var h="data-section-video";var f;function d(o){var s,r,l,m,q,p,k,n;var t={};n=o.getAttribute(h+"-locale")||"us";
p=o.getAttribute(h);k=o.getAttribute(h)+"http://images.apple.com/tablet.mp4";s="/105/media/"+n+"/watch/2015/a718f271_b19c_47d8_928d_d108fc5d702a/";
r=g(s);m=r+p;q=r+k;if(i.isTablet()&&k){l=new j(o,q,false)}else{if(p){l=new j(o,m,true)
}}return l}a.exports={create:d}},{"./SectionVideo/SectionVideo":984,"./cname":989,"ac-feature":289}],991:[function(b,c,a){function d(){var f={};
return function(g){if(g in f){return f[g]}else{try{var h=document.createElement("VIDEO");
if(h.canPlayType&&h.canPlayType(g).replace(/no/," ")){return f[g]=true}}catch(i){}return f[g]=false
}}}c.exports={canPlayVideoType:d}},{}]},{},[981]);