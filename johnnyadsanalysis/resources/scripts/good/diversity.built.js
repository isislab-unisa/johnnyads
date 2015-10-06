(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");
throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];
return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");
b("ac-polyfills/Element/prototype.classList");var d=b("./className/add");c.exports=function f(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);
return}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":3,"ac-polyfills/Array/prototype.slice":1498,"ac-polyfills/Element/prototype.classList":1501}],2:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":3,"./className/contains":4,"./className/remove":6}],3:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":4}],4:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":5}],5:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],6:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":4,"./getTokenRegExp":5}],7:[function(b,d,a){b("ac-polyfills/Element/prototype.classList");
var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f(h,g)}},{"./className/contains":4,"ac-polyfills/Element/prototype.classList":1501}],8:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":1,"./contains":7,"./remove":9,"./toggle":10}],9:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Element/prototype.classList");var b=d("./className/remove");f.exports=function a(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":6,"ac-polyfills/Array/prototype.slice":1498,"ac-polyfills/Element/prototype.classList":1501}],10:[function(c,d,b){c("ac-polyfills/Element/prototype.classList");
var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
}},{"./className":2,"ac-polyfills/Element/prototype.classList":1501}],11:[function(b,c,a){c.exports.EventEmitter=b("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":12}],12:[function(d,c,f){var h="EventEmitter:propagation";
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
}}}return false};c.exports=k},{}],13:[function(b,c,a){c.exports={Clip:b("./ac-clip/Clip")}
},{"./ac-clip/Clip":14}],14:[function(c,b,d){var g=c("ac-object/create");var k=c("ac-easing").createPredefined;
var a=c("ac-clock");var j=c("ac-easing").Ease;var l=c("ac-event-emitter").EventEmitter;
var i="ease";function h(o,n,q,m){m=m||{};this._options=m;this._target=o;this._duration=n*1000;
this._delay=(m.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=m.clock||a;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._isYoyo=m.yoyo;this._direction=1;this._loop=m.loop||0;this._loopCount=0;
this._propsTo=q||{};this._propsFrom=m.propsFrom||{};this._onStart=m.onStart||null;
this._onUpdate=m.onUpdate||null;this._onDraw=m.onDraw||null;this._onComplete=m.onComplete||null;
var p=m.ease||i;this._ease=(typeof p==="function")?new j(p):k(p);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
h._add(this)}var f=h.prototype=g(l.prototype);h.COMPLETE="complete";h.PAUSE="pause";
h.PLAY="play";f.play=function(){if(!this._playing){this._playing=true;if(this._delay===0||this._remainingDelay===0){this._start()
}else{if(!this._isPrepared){this._setDiff();this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay);
this._delayStart=this._getTime()}}return this};f.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(h.PAUSE,this._getDetails())
}return this};f.destroy=function(){this.pause();this._options=null;this._target=null;
this._storeTarget=null;this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;
this._storePropsTo=null;this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;
this._onStart=null;this._onUpdate=null;this._onDraw=null;this._onComplete=null;
h._remove(this);return this};f.reset=function(){if(!this._isPrepared){return}this._stop();
this._resetLoop(this._target,this._storeTarget);this._direction=1;this._loop=this._options.loop||0;
this._loopCount=0;this._propsFrom=this._storePropsFrom;this._propsTo=this._storePropsTo;
this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this._getDetails())
}if(this._onDraw){this._onDraw.call(this,this._getDetails())}return this};f.isPlaying=function(){return this._playing
};f.getTarget=function(){return this._target};f.setCurrentTime=function(m){this.setProgress(m*1000/this._duration);
return this.getCurrentTime()};f.getCurrentTime=function(){return(this.getProgress()*this._duration)/1000
};f.setProgress=function(m){this._progress=Math.min(1,Math.max(0,m));this._setStartTime();
if(!this._isPrepared){this._setDiff()}if(this._playing&&m===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this._getDetails())}if(this._onDraw){this._onDraw.call(this,this._getDetails())
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this._getDetails())
}if(this._onDraw){this._onDraw.call(this,this._getDetails())}}return this.getProgress()
};f.getProgress=function(){return this._progress};f._resetLoop=function(n,m){var o;
for(o in m){if(m.hasOwnProperty(o)){if(m[o]!==null){if(typeof m[o]==="object"){this._resetLoop(n[o],m[o])
}else{n[o]=m[o]}}}}};f._addPropsFrom=function(){var m;for(m in this._propsFrom){if(this._propsFrom.hasOwnProperty(m)&&this._propsTo[m]===undefined&&this._target[m]!==undefined){this._propsTo[m]=this._target[m]
}}};f._cloneTarget=function(){var m={};this._cloneTargetLoop(this._propsTo,this._target,m);
return m};f._cloneTargetLoop=function(q,o,m){var n;var p;for(p in q){if(o.hasOwnProperty(p)){n=typeof o[p];
if(o[p]!==null&&n==="object"){m[p]={};this._cloneTargetLoop(q[p],o[p],m[p])}else{if(q[p]&&n==="number"){m[p]=o[p]
}}}}};f._prepareProperties=function(){if(!this._isPrepared){this._addPropsFrom();
this._storeTarget=this._cloneTarget();this._storePropsTo=this._propsTo;this._storePropsFrom=this._propsFrom;
this._isPrepared=true}};f._setStartTime=function(){this._startTime=this._getTime()-(this.getProgress()*this._duration)
};f._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
f._setDiffLoop=function(r,q,o,n){var m;var p;for(p in r){if(r.hasOwnProperty(p)){m=typeof r[p];
if(r[p]!==null&&m==="object"){q[p]=q[p]||{};n[p]=n[p]||{};this._setDiffLoop(r[p],q[p],o[p],n[p])
}else{if(m==="number"&&o[p]!==undefined){if(q[p]!==undefined){o[p]=q[p]}else{q[p]=o[p]
}n[p]=r[p]-o[p]}else{r[p]=null;q[p]=null}}}}};f._getDetails=function(){return{target:this.getTarget(),progress:this.getProgress(),clip:this}
};f._start=function(){this._startTimeout=null;this._remainingDelay=0;this._setStartTime();
this._clock.on("update",this._update);this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this._getDetails())
}this.trigger(h.PLAY,this._getDetails())};f._stop=function(){this._playing=false;
this._running=false;this._clock.off("update",this._update);this._clock.off("draw",this._draw)
};f._updateProps=function(){var m;if(this._direction===1){m=this._ease.getValue(this._progress)
}else{m=1-this._ease.getValue(1-this._progress)}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,m)
};f._updatePropsLoop=function(r,q,o,n,m){var p;for(p in r){if(r.hasOwnProperty(p)&&r[p]!==null){if(typeof r[p]!=="number"){this._updatePropsLoop(r[p],q[p],o[p],n[p],m)
}else{o[p]=q[p]+(n[p]*m)}}}};f._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};f._completePropsLoop=function(o,m){var n;for(n in o){if(o.hasOwnProperty(n)&&o[n]!==null){if(typeof o[n]!=="number"){this._completePropsLoop(o[n],m[n])
}else{m[n]=o[n]}}}};f._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.setProgress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.setProgress(0);this._start()}else{if(this._onComplete){this._onComplete.call(this,this._getDetails())
}this.trigger(h.COMPLETE,this._getDetails());if(this._options&&this._options.destroyOnComplete){this.destroy()
}}}};f._update=function(m){if(this._running){this._progress=(m.timeNow-this._startTime)/this._duration;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this._getDetails())
}}};f._draw=function(m){if(this._onDraw){this._onDraw.call(this,this._getDetails())
}if(!this._running){this._stop();if(this._progress===1){this._complete()}}};h._instantiate=function(){this._clips=[];
return this};h._add=function(m){this._clips.push(m)};h._remove=function(n){var m=this._clips.indexOf(n);
if(m>-1){this._clips.splice(m,1)}};h.getAll=function(o){if(o!==undefined){var m=[];
var n=this._clips.length;while(n--){if(this._clips[n].getTarget()===o){m.push(this._clips[n])
}}return m}return Array.prototype.slice.call(this._clips)};h.destroyAll=function(o){var m=this.getAll(o);
if(this._clips.length===m.length){this._clips=[]}var n=m.length;while(n--){m[n].destroy()
}return m};h.to=function(o,n,p,m){m=m||{};if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
}return new h(o,n,p,m).play()};h.from=function(p,o,m,n){n=n||{};n.propsFrom=m;if(n.destroyOnComplete===undefined){n.destroyOnComplete=true
}return new h(p,o,n.propsTo,n).play()};b.exports=h._instantiate()},{"ac-clock":17,"ac-easing":110,"ac-event-emitter":11,"ac-object/create":1484}],15:[function(b,c,a){arguments[4][11][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":16,dup:11}],16:[function(b,c,a){arguments[4][12][0].apply(a,arguments)
},{dup:12}],17:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":18,"./ac-clock/ThrottledClock":19,"./ac-clock/sharedClockInstance":20}],18:[function(c,d,b){var g;
var f=c("ac-event-emitter").EventEmitter;var a=new Date().getTime();function h(){f.call(this);
this.lastFrameTime=null;this._animationFrame=null;this._active=false;this._startTime=null;
this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);this._getTime=Date.now||function(){return new Date().getTime()
}}g=h.prototype=new f(null);g.start=function(){if(this._active){return}this._tick()
};g.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};g.destroy=function(){this.stop();
this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null}}};g.isRunning=function(){return this._active
};g._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};g._onAnimationFrame=function(l){var m=0;var i=this._getTime();if(this.lastFrameTime===null){this.lastFrameTime=i-a
}else{m=l-this.lastFrameTime}var k=0,j;if(m!==0){k=1000/m}j={time:l,delta:m,fps:k,naturalFps:k,timeNow:i};
this.trigger("update",j);this.trigger("draw",j);this._animationFrame=null;this.lastFrameTime=l;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};d.exports=h
},{"ac-event-emitter":15}],19:[function(c,d,b){var g;var a=c("./sharedClockInstance"),f=c("ac-event-emitter").EventEmitter;
function h(j,i){if(j===null){return}f.call(this);i=i||{};this._fps=j||null;this._clock=i.clock||a;
this._lastThrottledTime=null;this._clockEvent=null;this._clock.on("update",this._onClockUpdate,this)
}g=h.prototype=new f(null);g.setFps=function(i){this._fps=i;return this};g.getFps=function(){return this._fps
};g.start=function(){this._clock.start();return this};g.stop=function(){this._clock.stop();
return this};g.isRunning=function(){return this._clock.isRunning()};g.destroy=function(){this._clock.off("update",this._onClockUpdate,this);
this._clock.destroy.call(this)};g._onClockUpdate=function(i){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var j=i.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(j<(1000/this._fps)){return}this._clockEvent=i;this._clockEvent.delta=j;this._clockEvent.fps=1000/j;
this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._onClockDraw,this);
this.trigger("update",this._clockEvent)};g._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};d.exports=h},{"./sharedClockInstance":20,"ac-event-emitter":15}],20:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":18}],21:[function(c,d,b){var g=c("./utils/addEventListener");
var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
}},{"./shared/getEventType":30,"./utils/addEventListener":34}],22:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":30,"./utils/dispatchEvent":35}],23:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":21,"./dispatchEvent":22,"./preventDefault":28,"./removeEventListener":29,"./stop":31,"./stopPropagation":32,"./target":33}],24:[function(g,i,d){var h=g("./utils/eventTypeAvailable");
var b=g("./shared/camelCasedEventTypes");var f=g("./shared/prefixHelper");var c={};
i.exports=function a(l,k){var m;var n;var j;k=k||"div";l=l.toLowerCase();if(!(k in c)){c[k]={}
}n=c[k];if(l in n){return n[l]}if(h(l,k)){return n[l]=l}if(l in b){for(j=0;j<b[l].length;
j++){m=b[l][j];if(h(m.toLowerCase(),k)){return n[l]=m}}}for(j=0;j<f.evt.length;
j++){m=f.evt[j]+l;if(h(m,k)){f.reduce(j);return n[l]=m}}return n[l]=false}},{"./shared/camelCasedEventTypes":25,"./shared/prefixHelper":26,"./utils/eventTypeAvailable":27}],25:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],26:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],27:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],28:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],29:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":30,"./utils/removeEventListener":36}],30:[function(c,f,b){var d=c("ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);if(g){return g}return i}},{"ac-prefixer/getEventType":24}],31:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":28,"./stopPropagation":32}],32:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],33:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],34:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],35:[function(b,c,a){b("ac-polyfills/CustomEvent");
c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
}else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"ac-polyfills/CustomEvent":1500}],36:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],37:[function(c,d,b){var a=c("./ac-dom-styles/vendorTransformHelper");
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
d.exports=f},{"./ac-dom-styles/ie":38,"./ac-dom-styles/vendorTransformHelper":39}],38:[function(b,c,a){c.exports=function(d){if(typeof window.getComputedStyle!=="function"){d.getStyle=function(i,h,g){var f;
var j;g=g||i.currentStyle;if(g){h=h.replace(/-(\w)/g,d.setStyle.__camelCaseReplace);
h=h==="float"?"styleFloat":h;j=g[h]||null;return j==="auto"?null:j}}}}},{}],39:[function(c,d,b){var a={__objectifiedFunctions:{},__paramMaps:{translate:"p1, p2, 0",translateX:"p1, 0, 0",translateY:"0, p1, 0",scale:"p1, p2, 1",scaleX:"p1, 1, 1",scaleY:"1, p1, 1",rotate:"0, 0, 1, p1",matrix:"p1, p2, 0, 0, p3, p4, 0, 0, 0, 0, 1, 0, p5, p6, 0, 1"},convert2dFunctions:function(g){var f;
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
},{}],40:[function(b,c,a){var g=b("ac-dom-styles");var h={};var f=function(){return{x:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}
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
c.exports=h},{"./ac-dom-metrics/ie":41,"ac-dom-styles":37}],41:[function(b,c,a){c.exports=function(d){if(!("getBoundingClientRect" in document.createElement("_"))){d.getBoundingBox=function(h){var j=h.offsetLeft;
var i=h.offsetTop;var g=h.offsetWidth;var f=h.offsetHeight;return{top:i,right:j+g,bottom:i+f,left:j,width:g,height:f}
}}}},{}],42:[function(b,c,a){c.exports=8},{}],43:[function(b,c,a){c.exports=11},{}],44:[function(b,c,a){c.exports=9
},{}],45:[function(b,c,a){c.exports=10},{}],46:[function(b,c,a){c.exports=1},{}],47:[function(b,c,a){c.exports=3
},{}],48:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],49:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");d("ac-polyfills/Array/prototype.filter");
var g=d("./internal/isNodeType");var a=d("./ELEMENT_NODE");f.exports=function b(i,h){h=h||a;
i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)})}},{"./ELEMENT_NODE":46,"./internal/isNodeType":57,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498}],50:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],51:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),hasAttribute:b("./hasAttribute"),indexOf:b("./indexOf"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":42,"./DOCUMENT_FRAGMENT_NODE":43,"./DOCUMENT_NODE":44,"./DOCUMENT_TYPE_NODE":45,"./ELEMENT_NODE":46,"./TEXT_NODE":47,"./createDocumentFragment":48,"./filterByNodeType":49,"./hasAttribute":50,"./indexOf":52,"./insertAfter":53,"./insertBefore":54,"./insertFirstChild":55,"./insertLastChild":56,"./isComment":59,"./isDocument":60,"./isDocumentFragment":61,"./isDocumentType":62,"./isElement":63,"./isNode":64,"./isNodeList":65,"./isTextNode":66,"./remove":67,"./replace":68}],52:[function(c,d,b){c("ac-polyfills/Array/prototype.indexOf");
c("ac-polyfills/Array/prototype.slice");var g=c("./internal/validate");var a=c("./filterByNodeType");
d.exports=function f(k,i){var h=k.parentNode;var j;if(!h){return 0}j=h.childNodes;
if(i!==false){j=a(j,i)}else{j=Array.prototype.slice.call(j)}return j.indexOf(k)
}},{"./filterByNodeType":49,"./internal/validate":58,"ac-polyfills/Array/prototype.indexOf":1497,"ac-polyfills/Array/prototype.slice":1498}],53:[function(b,c,a){var f=b("./internal/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":58}],54:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":58}],55:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./internal/validate":58}],56:[function(b,c,a){var d=b("./internal/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./internal/validate":58}],57:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":64}],58:[function(g,d,j){var b=g("./isNodeType");
var c=g("../COMMENT_NODE");var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");
var h=g("../TEXT_NODE");var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":42,"../DOCUMENT_FRAGMENT_NODE":43,"../ELEMENT_NODE":46,"../TEXT_NODE":47,"./isNodeType":57}],59:[function(c,d,a){var g=c("./internal/isNodeType");
var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":42,"./internal/isNodeType":57}],60:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":44,"./internal/isNodeType":57}],61:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":43,"./internal/isNodeType":57}],62:[function(b,c,a){var g=b("./internal/isNodeType");
var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":45,"./internal/isNodeType":57}],63:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":46,"./internal/isNodeType":57}],64:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],65:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],66:[function(c,d,a){var g=c("./internal/isNodeType");var b=c("./TEXT_NODE");
d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":47,"./internal/isNodeType":57}],67:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g){f.childNode(g,true,"remove");if(!g.parentNode){return g
}return g.parentNode.removeChild(g)}},{"./internal/validate":58}],68:[function(b,d,a){var f=b("./internal/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./internal/validate":58}],69:[function(b,c,a){var d=b("./ac-prefixer/Prefixer");
c.exports=new d();c.exports.Prefixer=d},{"./ac-prefixer/Prefixer":70}],70:[function(d,b,g){var k=d("./Prefixer/camelCasedEvents");
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
},{"./Prefixer/camelCasedEvents":71}],71:[function(b,c,a){c.exports={transitionend:{onwebkittransitionend:"webkitTransitionEnd",onmstransitionend:"MSTransitionEnd"},animationstart:{onwebkitanimationstart:"webkitAnimationStart",onmsanimationstart:"MSAnimationStart"},animationend:{onwebkitanimationend:"webkitAnimationEnd",onmsanimationend:"MSAnimationEnd"},animationiteration:{onwebkitanimationiteration:"webkitAnimationIteration",onmsanimationiteration:"MSAnimationIteration"},fullscreenchange:{onmsfullscreenchange:"MSFullscreenChange"},fullscreenerror:{onmsfullscreenerror:"MSFullscreenError"}}
},{}],72:[function(b,c,a){c.exports={getStyle:b("./ac-dom-styles/getStyle"),setStyle:b("./ac-dom-styles/setStyle")}
},{"./ac-dom-styles/getStyle":73,"./ac-dom-styles/setStyle":76}],73:[function(d,f,c){var g=d("ac-prefixer");
var b=d("./shim/getComputedStyle");f.exports=function a(){var k=Array.prototype.slice.call(arguments);
var p=k.shift(k);var m=b(p);var l={};var o;var h;var n;var j;if(typeof k[0]!=="string"){k=k[0]
}for(j=0;j<k.length;j++){o=k[j];h=g.getStyleProperty(o);if(h){o=g.stripPrefixes(h);
n=m[h];if(!n||n==="auto"){n=null}if(n){n=g.stripPrefixes(n)}}else{n=null}l[o]=n
}return l}},{"./shim/getComputedStyle":77,"ac-prefixer":69}],74:[function(d,f,c){var b={transform:["matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"],filter:["blur","brightness","contrast","drop-shadow","grayscale","hue-rotate","invert","saturate","sepia"]};
f.exports=function a(j){var l;var k;var h;var g;for(l in b){k=j[l]?j[l]:"";for(g=0;
g<b[l].length;g++){h=b[l][g];if(h in j){k+=" "+h+"("+j[h]+")";delete j[h]}}k=k.trim();
if(k){j[l]=k}}return j}},{}],75:[function(c,d,b){d.exports=function a(h){var k;
var l;var j;var f;var g;if(typeof h==="string"){k={};l=h.split(";");f=l.length;
for(g=0;g<f;g+=1){j=l[g].indexOf(":");if(j>0){k[l[g].substr(0,j).trim()]=l[g].substr(j+1).trim()
}}}else{k=h}return k}},{}],76:[function(d,f,c){var h=d("ac-prefixer");var b=d("./helpers/cssToObject");
var a=d("./helpers/combinePartialProperties");f.exports=function g(o,l){var k;var j;
var n;var i;var m;if((typeof l!=="string"&&typeof l!=="object")||Array.isArray(l)){throw new TypeError("setStyle: styles must be an Object or String")
}l=b(l);l=a(l);k="";for(n in l){m=l[n];if(!m&&m!==0){i=h.getStyleProperty(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=h.getStyleCSS(n,m);if(j!==false){k+=" "+j}}}if(k.length){o.style.cssText+=k
}return o}},{"./helpers/combinePartialProperties":74,"./helpers/cssToObject":75,"ac-prefixer":69}],77:[function(b,c,a){c.exports=(function(){if("getComputedStyle" in window){return window.getComputedStyle
}return function(g){var d;var h;var f;d=g.currentStyle;for(h in d){if(h==="styleFloat"){f["float"]=f.cssFloat=d[h]
}else{f[h]=d[h]}}return f}}())},{}],78:[function(c,f,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");f.exports=function d(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&g(k)&&(!j||a(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&g(k)){if(!j||a(k,j)){return k
}if(k===document.body){break}}}return null}},{"./internal/validate":85,"./matchesSelector":87,"ac-dom-nodes/isElement":63}],79:[function(c,d,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&g(l)&&(!j||a(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&g(l)){if(!j||a(l,j)){k.push(l)}if(l===document.body){break
}}}return k}},{"./internal/validate":85,"./matchesSelector":87,"ac-dom-nodes/isElement":63}],80:[function(d,g,c){var b=d("ac-dom-nodes/filterByNodeType");
var a=d("./filterBySelector");var h=d("./internal/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=b(j);if(i){j=a(j,i)}return j}},{"./filterBySelector":81,"./internal/validate":85,"ac-dom-nodes/filterByNodeType":49}],81:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Array/prototype.filter");var b=d("./matchesSelector");var g=d("./internal/validate");
f.exports=function a(i,h){g.selector(h,true,"filterBySelector");i=Array.prototype.slice.call(i);
return i.filter(function(j){return b(j,h)})}},{"./internal/validate":85,"./matchesSelector":87,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498}],82:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":80,"./internal/validate":85}],83:[function(b,c,a){c.exports={ancestor:b("./ancestor"),ancestors:b("./ancestors"),children:b("./children"),filterBySelector:b("./filterBySelector"),firstChild:b("./firstChild"),lastChild:b("./lastChild"),matchesSelector:b("./matchesSelector"),nextSibling:b("./nextSibling"),nextSiblings:b("./nextSiblings"),previousSibling:b("./previousSibling"),previousSiblings:b("./previousSiblings"),querySelector:b("./querySelector"),querySelectorAll:b("./querySelectorAll"),siblings:b("./siblings")}
},{"./ancestor":78,"./ancestors":79,"./children":80,"./filterBySelector":81,"./firstChild":82,"./lastChild":86,"./matchesSelector":87,"./nextSibling":88,"./nextSiblings":89,"./previousSibling":90,"./previousSiblings":91,"./querySelector":92,"./querySelectorAll":93,"./siblings":96}],84:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],85:[function(g,c,i){g("ac-polyfills/Array/prototype.indexOf");
var o=g("ac-dom-nodes/isNode");var b=g("ac-dom-nodes/COMMENT_NODE");var k=g("ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");
var j=g("ac-dom-nodes/DOCUMENT_NODE");var h=g("ac-dom-nodes/ELEMENT_NODE");var f=g("ac-dom-nodes/TEXT_NODE");
var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
}return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
}},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
}},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
}}}},{"ac-dom-nodes/COMMENT_NODE":42,"ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":43,"ac-dom-nodes/DOCUMENT_NODE":44,"ac-dom-nodes/ELEMENT_NODE":46,"ac-dom-nodes/TEXT_NODE":47,"ac-dom-nodes/isNode":64,"ac-polyfills/Array/prototype.indexOf":1497}],86:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");
g.selector(h,false,"lastChild");if(j.lastElementChild&&!h){return j.lastElementChild
}i=c(j,h);if(i.length){return i[i.length-1]}return null}},{"./children":80,"./internal/validate":85}],87:[function(d,f,c){var g=d("ac-dom-nodes/isElement");
var a=d("./internal/nativeMatches");var i=d("./internal/validate");var h=d("./vendor/sizzle/sizzle");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h.matchesSelector(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":84,"./internal/validate":85,"./vendor/sizzle/sizzle":97,"ac-dom-nodes/isElement":63}],88:[function(c,d,b){var f=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(f(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":85,"./matchesSelector":87,"ac-dom-nodes/isElement":63}],89:[function(d,f,b){var g=d("ac-dom-nodes/isElement");
var a=d("./matchesSelector");var h=d("./internal/validate");f.exports=function c(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(g(k)){if(!i||a(k,i)){j.push(k)
}}}return j}},{"./internal/validate":85,"./matchesSelector":87,"ac-dom-nodes/isElement":63}],90:[function(c,d,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(g(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":85,"./matchesSelector":87,"ac-dom-nodes/isElement":63}],91:[function(c,d,b){var f=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(f(k)){if(!i||a(k,i)){j.push(k)
}}}return j.reverse()}},{"./internal/validate":85,"./matchesSelector":87,"ac-dom-nodes/isElement":63}],92:[function(c,d,a){var g=c("./internal/validate");
var b=c("./shims/querySelector");d.exports=function f(h,i){i=i||document;g.parentNode(i,true,"querySelector","context");
g.selector(h,true,"querySelector");if(!i.querySelector){return b(h,i)}return i.querySelector(h)
}},{"./internal/validate":85,"./shims/querySelector":94}],93:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");
var g=b("./internal/validate");var f=b("./shims/querySelectorAll");c.exports=function d(h,i){i=i||document;
g.parentNode(i,true,"querySelectorAll","context");g.selector(h,true,"querySelectorAll");
if(!i.querySelectorAll){return f(h,i)}return Array.prototype.slice.call(i.querySelectorAll(h))
}},{"./internal/validate":85,"./shims/querySelectorAll":95,"ac-polyfills/Array/prototype.slice":1498}],94:[function(b,c,a){var d=b("./querySelectorAll");
c.exports=function f(h,i){var g=d(h,i);return g.length?g[0]:null}},{"./querySelectorAll":95}],95:[function(b,c,a){b("ac-polyfills/Array/prototype.forEach");
var g=b("../vendor/sizzle/sizzle");var h=b("../children");var f=b("ac-dom-nodes/isDocumentFragment");
c.exports=function d(i,k){var j;var l;if(f(k)){j=h(k);l=[];j.forEach(function(n){var m;
if(g.matchesSelector(n,i)){l.push(n)}m=g(i,n);if(m.length){l=l.concat(m)}});return l
}return g(i,k)}},{"../children":80,"../vendor/sizzle/sizzle":97,"ac-dom-nodes/isDocumentFragment":61,"ac-polyfills/Array/prototype.forEach":1496}],96:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":80,"./internal/validate":85}],97:[function(b,c,a){
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
}else{ad.Sizzle=ac}})(window)},{}],98:[function(i,c,x){var s=Object.prototype.toString;
var l=Object.prototype.hasOwnProperty;var b=typeof Array.prototype.indexOf==="function"?function(z,A){return z.indexOf(A)
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
}catch(z){return A}}},{}],99:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":100,"./ac-object/create":101,"./ac-object/defaults":102,"./ac-object/extend":103,"./ac-object/getPrototypeOf":104,"./ac-object/isDate":105,"./ac-object/isEmpty":106,"./ac-object/isRegExp":107,"./ac-object/toQueryParameters":108}],100:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":103}],101:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],102:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":103}],103:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],104:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],105:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],106:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],107:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],108:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:98}],109:[function(c,d,a){var b=c("ac-object");d.exports=b.extend({},c("ac-dom-events"),c("ac-dom-metrics"),c("ac-dom-nodes"),c("ac-dom-styles"),c("ac-dom-traversal"))
},{"ac-dom-events":23,"ac-dom-metrics":40,"ac-dom-nodes":51,"ac-dom-styles":72,"ac-dom-traversal":83,"ac-object":99}],110:[function(b,c,a){c.exports={createBezier:b("./ac-easing/createBezier"),createPredefined:b("./ac-easing/createPredefined"),createStep:b("./ac-easing/createStep"),Ease:b("./ac-easing/Ease")}
},{"./ac-easing/Ease":111,"./ac-easing/createBezier":112,"./ac-easing/createPredefined":113,"./ac-easing/createStep":114}],111:[function(b,c,a){var g="Ease expects an easing function.";
function f(i,h){if(typeof i!=="function"){throw new TypeError(g)}this.easingFunction=i;
this.cssString=h||null}var d=f.prototype;d.getValue=function(h){return this.easingFunction(h,0,1,1)
};c.exports=f},{}],112:[function(b,c,a){var f=b("./Ease");var h=b("./helpers/KeySpline");
var d="Bezier curve expects exactly four (4) numbers. Given: ";c.exports=function g(j,p,i,o){var q=Array.prototype.slice.call(arguments);
var m=q.every(function(r){return(typeof r==="number")});if(q.length!==4||!m){throw new TypeError(d+q)
}var n=new h(j,p,i,o);var k=function(t,r,u,s){return n.get(t/s)*u+r};var l="cubic-bezier("+q.join(", ")+")";
return new f(k,l)}},{"./Ease":111,"./helpers/KeySpline":115}],113:[function(c,a,d){var i=c("./createStep");
var f=c("./helpers/cssAliases");var b=c("./helpers/easingFunctions");var h=c("./Ease");
var g='Easing function "%TYPE%" not recognized among the following: '+Object.keys(b).join(", ");
a.exports=function j(k){var l;if(k==="step-start"){return i(1,"start")}else{if(k==="step-end"){return i(1,"end")
}else{l=b[k]}}if(!l){throw new Error(g.replace("%TYPE%",k))}return new h(l,f[k])
}},{"./Ease":111,"./createStep":114,"./helpers/cssAliases":116,"./helpers/easingFunctions":117}],114:[function(d,f,c){var g=d("./Ease");
var b="Step function expects a numeric value greater than zero. Given: ";var a='Step function direction must be either "start" or "end" (default). Given: ';
f.exports=function h(i,l){l=l||"end";if(typeof i!=="number"||i<1){throw new TypeError(b+i)
}if(l!=="start"&&l!=="end"){throw new TypeError(a+l)}var k=function(q,m,r,p){var o=r/i;
var n=Math[(l==="start")?"floor":"ceil"](q/p*i);return m+o*n};var j="steps("+i+", "+l+")";
return new g(k,j)}},{"./Ease":111}],115:[function(b,c,a){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
function d(o,l,n,j){this.get=function(p){if(o===l&&n===j){return p
}return g(k(p),l,j)};function i(p,q){return 1-3*q+3*p}function h(p,q){return 3*q-6*p
}function f(p){return 3*p}function g(r,p,q){return((i(p,q)*r+h(p,q))*r+f(p))*r}function m(r,p,q){return 3*i(p,q)*r*r+2*h(p,q)*r+f(p)
}function k(s){var q=s;for(var r=0;r<4;++r){var t=m(q,o,n);if(t===0){return q}var p=g(q,o,n)-s;
q-=p/t}return q}}c.exports=d},{}],116:[function(c,d,b){var a={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
a.easeIn=a["ease-in"];a.easeOut=a["ease-out"];a.easeInOut=a["ease-in-out"];a.easeInCubic=a["ease-in-cubic"];
a.easeOutCubic=a["ease-out-cubic"];a.easeInOutCubic=a["ease-in-out-cubic"];a.easeInQuad=a["ease-in-quad"];
a.easeOutQuad=a["ease-out-quad"];a.easeInOutQuad=a["ease-in-out-quad"];a.easeInQuart=a["ease-in-quart"];
a.easeOutQuart=a["ease-out-quart"];a.easeInOutQuart=a["ease-in-out-quart"];a.easeInQuint=a["ease-in-quint"];
a.easeOutQuint=a["ease-out-quint"];a.easeInOutQuint=a["ease-in-out-quint"];a.easeInSine=a["ease-in-sine"];
a.easeOutSine=a["ease-out-sine"];a.easeInOutSine=a["ease-in-out-sine"];a.easeInExpo=a["ease-in-expo"];
a.easeOutExpo=a["ease-out-expo"];a.easeInOutExpo=a["ease-in-out-expo"];a.easeInCirc=a["ease-in-circ"];
a.easeOutCirc=a["ease-out-circ"];a.easeInOutCirc=a["ease-in-out-circ"];a.easeInBack=a["ease-in-back"];
a.easeOutBack=a["ease-out-back"];a.easeInOutBack=a["ease-in-out-back"];d.exports=a
},{}],117:[function(d,b,F){var J=d("../createBezier");var w=J(0.25,0.1,0.25,1).easingFunction;
var g=J(0.42,0,1,1).easingFunction;var C=J(0,0,0.58,1).easingFunction;var x=J(0.42,0,0.58,1).easingFunction;
var u=function(Q,O,R,P){return R*Q/P+O};var h=function(Q,O,R,P){return R*(Q/=P)*Q+O
};var N=function(Q,O,R,P){return -R*(Q/=P)*(Q-2)+O};var D=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q+O
}return -R/2*((--Q)*(Q-2)-1)+O};var i=function(Q,O,R,P){return R*(Q/=P)*Q*Q+O};
var a=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q+1)+O};var j=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q+2)+O};var o=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q+O};
var m=function(Q,O,R,P){return -R*((Q=Q/P-1)*Q*Q*Q-1)+O};var p=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q+O
}return -R/2*((Q-=2)*Q*Q*Q-2)+O};var y=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q*Q+O
};var v=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q*Q*Q+1)+O};var z=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q*Q*Q+2)+O};var c=function(Q,O,R,P){return -R*Math.cos(Q/P*(Math.PI/2))+R+O
};var L=function(Q,O,R,P){return R*Math.sin(Q/P*(Math.PI/2))+O};var B=function(Q,O,R,P){return -R/2*(Math.cos(Math.PI*Q/P)-1)+O
};var G=function(Q,O,R,P){return(Q===0)?O:R*Math.pow(2,10*(Q/P-1))+O};var A=function(Q,O,R,P){return(Q===P)?O+R:R*(-Math.pow(2,-10*Q/P)+1)+O
};var r=function(Q,O,R,P){if(Q===0){return O}else{if(Q===P){return O+R}else{if((Q/=P/2)<1){return R/2*Math.pow(2,10*(Q-1))+O
}}}return R/2*(-Math.pow(2,-10*--Q)+2)+O};var l=function(Q,O,R,P){return -R*(Math.sqrt(1-(Q/=P)*Q)-1)+O
};var f=function(Q,O,R,P){return R*Math.sqrt(1-(Q=Q/P-1)*Q)+O};var I=function(Q,O,R,P){if((Q/=P/2)<1){return -R/2*(Math.sqrt(1-Q*Q)-1)+O
}return R/2*(Math.sqrt(1-(Q-=2)*Q)+1)+O};var E=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U}}if(!T){T=R*0.3
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}return -(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
};var H=function(S,Q,U,R){var O=1.70158;var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U
}}if(!T){T=R*0.3}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)
}return P*Math.pow(2,-10*S)*Math.sin((S*R-O)*(2*Math.PI)/T)+U+Q};var t=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R/2)===2){return Q+U}}if(!T){T=R*(0.3*1.5)
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}if(S<1){return -0.5*(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
}return P*Math.pow(2,-10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T)*0.5+U+Q};var s=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*(R/=Q)*R*((O+1)*R-O)+P};var q=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*((R=R/Q-1)*R*((O+1)*R+O)+1)+P};var k=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}if((R/=Q/2)<1){return S/2*(R*R*(((O*=(1.525))+1)*R-O))+P}return S/2*((R-=2)*R*(((O*=(1.525))+1)*R+O)+2)+P
};var K=function(Q,O,R,P){if((Q/=P)<(1/2.75)){return R*(7.5625*Q*Q)+O}else{if(Q<(2/2.75)){return R*(7.5625*(Q-=(1.5/2.75))*Q+0.75)+O
}else{if(Q<(2.5/2.75)){return R*(7.5625*(Q-=(2.25/2.75))*Q+0.9375)+O}}}return R*(7.5625*(Q-=(2.625/2.75))*Q+0.984375)+O
};var n=function(Q,O,R,P){return R-K(P-Q,0,R,P)+O};var M=function(Q,O,R,P){if(Q<P/2){return n(Q*2,0,R,P)*0.5+O
}return K(Q*2-P,0,R,P)*0.5+R*0.5+O};b.exports={linear:u,ease:w,easeIn:g,"ease-in":g,easeOut:C,"ease-out":C,easeInOut:x,"ease-in-out":x,easeInCubic:i,"ease-in-cubic":i,easeOutCubic:a,"ease-out-cubic":a,easeInOutCubic:j,"ease-in-out-cubic":j,easeInQuad:h,"ease-in-quad":h,easeOutQuad:N,"ease-out-quad":N,easeInOutQuad:D,"ease-in-out-quad":D,easeInQuart:o,"ease-in-quart":o,easeOutQuart:m,"ease-out-quart":m,easeInOutQuart:p,"ease-in-out-quart":p,easeInQuint:y,"ease-in-quint":y,easeOutQuint:v,"ease-out-quint":v,easeInOutQuint:z,"ease-in-out-quint":z,easeInSine:c,"ease-in-sine":c,easeOutSine:L,"ease-out-sine":L,easeInOutSine:B,"ease-in-out-sine":B,easeInExpo:G,"ease-in-expo":G,easeOutExpo:A,"ease-out-expo":A,easeInOutExpo:r,"ease-in-out-expo":r,easeInCirc:l,"ease-in-circ":l,easeOutCirc:f,"ease-out-circ":f,easeInOutCirc:I,"ease-in-out-circ":I,easeInBack:s,"ease-in-back":s,easeOutBack:q,"ease-out-back":q,easeInOutBack:k,"ease-in-out-back":k,easeInElastic:E,"ease-in-elastic":E,easeOutElastic:H,"ease-out-elastic":H,easeInOutElastic:t,"ease-in-out-elastic":t,easeInBounce:n,"ease-in-bounce":n,easeOutBounce:K,"ease-out-bounce":K,easeInOutBounce:M,"ease-in-out-bounce":M}
},{"../createBezier":112}],118:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],119:[function(b,c,a){var f=b("./ac-base/globals");var h=f.window.AC=f.window.AC||{};
var d=b("./ac-base/Environment");var g=b("./ac-base/Element/onDOMReady");if(d.Browser.IE){if(d.Browser.IE.documentMode<9){b("./ac-base/shims/html5.js")()
}if(d.Browser.IE.documentMode<8){g(b("./ac-base/shims/ie/nonClickableImageBooster"))
}}if(typeof define!=="undefined"){h.define=define;h.require=b}h.adler32=b("./ac-base/adler32");
h.Ajax=b("./ac-base/Ajax");h.Array=b("./ac-base/Array");h.bindEventListeners=b("./ac-base/bindEventListeners");
h.Canvas=b("./ac-base/Canvas");h.Class=b("./ac-base/Class");h.Date=b("./ac-base/Date");
h.DeferredQueue=b("./ac-base/DeferredQueue");h.EasingFunctions=b("./ac-base/EasingFunctions");
h.Element=b("./ac-base/Element");h.Environment=d;h.Event=b("./ac-base/Event");h.Function=b("./ac-base/Function");
h.History=b("./ac-base/History");h.log=b("./ac-base/log");h.namespace=b("./ac-base/namespace");
h.NotificationCenter=b("./ac-base/NotificationCenter");h.Object=b("./ac-base/Object");
h.onDOMReady=g;h.onWindowLoad=b("./ac-base/Element/onWindowLoad");h.queryParameters=b("./ac-base/queryParameters");
h.RegExp=b("./ac-base/RegExp");h.Registry=b("./ac-base/Registry");h.String=b("./ac-base/String");
h.Synthesize=b("./ac-base/Synthesize");h.uid=b("./ac-base/uid");h.Viewport=b("./ac-base/Viewport");
h.windowHasLoaded=false;h.Element.addEventListener(f.window,"load",function(){h.windowHasLoaded=true
});c.exports=h},{"./ac-base/Ajax":120,"./ac-base/Array":124,"./ac-base/Canvas":125,"./ac-base/Class":126,"./ac-base/Date":127,"./ac-base/DeferredQueue":128,"./ac-base/EasingFunctions":129,"./ac-base/Element":130,"./ac-base/Element/onDOMReady":133,"./ac-base/Element/onWindowLoad":134,"./ac-base/Environment":136,"./ac-base/Event":142,"./ac-base/Function":143,"./ac-base/History":144,"./ac-base/NotificationCenter":145,"./ac-base/Object":146,"./ac-base/RegExp":147,"./ac-base/Registry":148,"./ac-base/String":150,"./ac-base/Synthesize":151,"./ac-base/Viewport":152,"./ac-base/adler32":153,"./ac-base/bindEventListeners":154,"./ac-base/globals":155,"./ac-base/log":156,"./ac-base/namespace":157,"./ac-base/queryParameters":158,"./ac-base/shims/html5.js":159,"./ac-base/shims/ie/nonClickableImageBooster":163,"./ac-base/uid":164}],120:[function(c,d,a){var b={};
c("./Ajax/ajax-tracker")(b);c("./Ajax/ajax-response")(b);c("./Ajax/ajax-request")(b);
b.getTransport=function(){return new XMLHttpRequest()};b.checkURL=function(g,i){var f=b.__validateArguments(g,i);
if(f){throw f}var h=b.getTransport();this.__handleReadyStateChange(h,i);h.open("HEAD",g,true);
h.send(null)};b.__handleReadyStateChange=function(g,f){g.onreadystatechange=function(){if(this.readyState===4){if(typeof f==="function"){f(this.status===200)
}}}};b.__validateArguments=function(f,h){var g;if(!f){g="Must provide a url"}if(!h){g="Must provide a callback"
}if(!f&&!h){g="Must provide a url and callback"}return g};d.exports=b},{"./Ajax/ajax-request":121,"./Ajax/ajax-response":122,"./Ajax/ajax-tracker":123}],121:[function(c,d,b){var f=c("../Class");
var a=c("../Object");d.exports=function(g){var h=f();h.prototype={__defaultOptions:{method:"get"},initialize:function(j,i){this._transport=g.getTransport();
this._mimeTypeOverride=null;this._options=null;a.synthesize(this);this.setOptions(a.extend(a.clone(this.__defaultOptions),i||{}));
g.AjaxTracker.sharedInstance().addResponder(this);this.__configureTransport(j)},__configureTransport:function(i){this.transport().onreadystatechange=this.__handleTransportStateChange.bind(this);
this.transport().open(this.options().method,i,true);this.transport().setRequestHeader("Content-Type",this.options().contentType);
this.transport().send(null)},__handleTransportStateChange:function(){if(this.transport().readyState===4){var i=new g.AjaxResponse(this)
}},overrideMimeType:function(i){this._mimeTypeOverride=i;if(this.transport().overrideMimeType){this.transport().overrideMimeType(i)
}},_overrideMimeType:null};g.AjaxRequest=h}},{"../Class":126,"../Object":146}],122:[function(b,c,a){var d=b("../Class");
c.exports=function(f){var g=d();g.prototype={_request:null,_transport:null,initialize:function(i){this._transport=i.transport();
this._request=i;var j=false;var h=this._transport.readyState===4;if(h){this.__triggerCallbacks();
j=true}if(j){if(this._request.options().onComplete){this._request.options().onComplete(this)
}f.AjaxTracker.sharedInstance().removeResponder(i)}},__triggerCallbacks:function(){var k=this._transport.status;
var j=k>=200&&k<300;var i=k>=400&&k<500;var h=k>=500&&k<600||k===0;if(j&&this._request.options().onSuccess){this._request.options().onSuccess(this)
}if(i&&this._request.options().onFailure){this._request.options().onFailure(this)
}if(h&&this._request.options().onError){this._request.options().onError(this)}},responseText:function(){return this._transport.responseText
},responseXML:function(){return this._transport.responseXML},responseJSON:function(){return JSON.parse(this._transport.responseText)
}};f.AjaxResponse=g}},{"../Class":126}],123:[function(b,c,a){var d=b("../Class");
c.exports=function(f){var g=d();g.prototype={__responders:[],initialize:function(){},addResponder:function(h){this.__responders.push(h);
return this.__responders},removeResponder:function(i){var h=this.__responders.length;
this.__responders=this.__responders.filter(function(k){return k!==i});var j=this.__responders.length;
if(h>j){return true}return false}};f.AjaxTracker=g}},{"../Class":126}],124:[function(c,d,b){var f=c("./Environment/Browser");
var a={};a.toArray=function(g){return Array.prototype.slice.call(g)};a.flatten=function(i){var g=[];
var h=function(j){if(Array.isArray(j)){j.forEach(h)}else{g.push(j)}};i.forEach(h);
return g};a.without=function(g,k){var i;var h=g.indexOf(k);var j=g.length;if(h>=0){if(h===(j-1)){i=g.slice(0,(j-1))
}else{if(h===0){i=g.slice(1)}else{i=g.slice(0,h);i=i.concat(g.slice(h+1))}}}else{return g
}return i};if(f.name==="IE"){c("./shims/ie/Array")(a,f)}d.exports=a},{"./Environment/Browser":137,"./shims/ie/Array":160}],125:[function(c,d,b){var f=c("./Element");
var a={};a.imageDataFromFile=function(h,i){if(typeof i!=="function"){throw new TypeError("Need callback method to call when imageData is retrieved.")
}if(typeof h!=="string"||h===""){throw new TypeError("Src for imageData must be an Image Node with a src attribute or a string.")
}var g=new Image();g.onload=function(){i(a.imageDataFromNode(g))};g.src=h};a.imageDataFromNode=function(g){if(!f.isElement(g)||g.getAttribute("src")==="null"||g.width===0){throw new TypeError("Source node must be an IMG tag and must have already loaded.")
}var j;var h=document.createElement("canvas");var i=h.getContext("2d");h.width=g.width;
h.height=g.height;i.drawImage(g,0,0);j=i.getImageData(0,0,g.width,g.height);return j
};d.exports=a},{"./Element":130}],126:[function(d,f,c){var b=d("./Object");var a=d("./Array");
var i=d("./Function");var g=d("./Element/onDOMReady");function h(){var j=a.toArray(arguments);
var n=(typeof j[0]==="function")?j.shift():null;var m=j.shift()||{};var l;var k=function(){var o;
var p;o=((typeof this.initialize==="function"&&k.__shouldInitialize!==false)?this.initialize.apply(this,arguments):false);
if(o===h.Invalidate){p=function(){try{if(this&&this._parentClass&&this._parentClass._sharedInstance===this){this._parentClass._sharedInstance=null
}}catch(q){throw q}};window.setTimeout(p.bind(this),200)}};k.__superclass=n;if(n){if(n.__superclass){l=h(n.__superclass,n.prototype)
}else{l=h(n.prototype)}l.__shouldInitialize=false;k.prototype=new l();b.extend(k.prototype,m);
h.__wrapSuperMethods(k)}else{k.prototype=m}k.sharedInstance=function(){if(!k._sharedInstance){k._sharedInstance=new k();
k._sharedInstance._parentClass=k}return k._sharedInstance};b.synthesize(k.prototype);
k.autocreate=m.__instantiateOnDOMReady||false;delete m.__instantiateOnDOMReady;
if(k.autocreate){g(function(){if(k.autocreate){k.sharedInstance()}})}return k}h.__wrapSuperMethods=function(m){var l=m.prototype;
var k=m.__superclass.prototype;var n;for(n in l){if(l.hasOwnProperty(n)){if(typeof l[n]==="function"){var j=l[n];
var o=i.getParamNames(j);if(o[0]==="$super"){l[n]=(function(q,p){var r=k[q];return function s(){var t=a.toArray(arguments);
return p.apply(this,[r.bind(this)].concat(t))}}(n,j))}}}}return this};h.Invalidate=function(){return false
};f.exports=h},{"./Array":124,"./Element/onDOMReady":133,"./Function":143,"./Object":146}],127:[function(b,c,a){var d={};
d.isDate=function(f){return !!(f&&typeof f.getTime==="function")};c.exports=d},{}],128:[function(c,a,i){var j=c("./Array");
var h=c("./Class");var f=c("./Object");var g={autoplay:false,asynchronous:false};
var d=h({initialize:function(k){if(typeof k!=="object"){k={}}this._options=f.extend(f.clone(g),k);
this._isPlaying=false;this._isRunningAction=false;this._queue=[];this.didFinish=this.__didFinish.bind(this);
this.synthesize()},add:function(m,l){var k={};var n;if(l>0){k.delay=l}n=new d.Action(m,k);
this.queue().push(n);if(!this.isPlaying()&&this._options.autoplay===true){this.start()
}},remove:function(k){this.setQueue(j.without(this.queue(),k))},start:function(){if(this.isPlaying()){return false
}this.setIsPlaying(true);this.__runNextAction()},stop:function(){if(!this.isPlaying()){return false
}this.setIsPlaying(false)},clear:function(){this.setQueue([]);this.stop()},__didFinish:function(){this.setIsRunningAction(false);
this.__runNextAction()},__runNextAction:function(){if(!this.isPlaying()){return false
}if(this.queue().length&&!this.isRunningAction()){var k=this.queue().shift();k.run();
if(this._options.asynchronous===true){this.setIsRunningAction(true);return}this.__runNextAction()
}}});var b={delay:0};d.Action=h({initialize:function(l,k){if(typeof l!=="function"){throw new TypeError("Deferred Queue func must be a function.")
}if(typeof k!=="object"){k={}}this._options=f.extend(f.clone(b),k);this.__func=l;
this.synthesize()},run:function(){var k=this.__func;if(typeof this._options.delay==="number"&&this._options.delay>0){window.setTimeout(function(){k()
},this._options.delay*1000)}else{k()}}});a.exports=d},{"./Array":124,"./Class":126,"./Object":146}],129:[function(b,c,a){var d={linear:function(h,f,i,g){return i*h/g+f
},easeInQuad:function(h,f,i,g){return i*(h/=g)*h+f},easeOutQuad:function(h,f,i,g){return -i*(h/=g)*(h-2)+f
},easeInOutQuad:function(h,f,i,g){if((h/=g/2)<1){return i/2*h*h+f}return -i/2*((--h)*(h-2)-1)+f
},easeInCubic:function(h,f,i,g){return i*(h/=g)*h*h+f},easeOutCubic:function(h,f,i,g){return i*((h=h/g-1)*h*h+1)+f
},easeInOutCubic:function(h,f,i,g){if((h/=g/2)<1){return i/2*h*h*h+f}return i/2*((h-=2)*h*h+2)+f
},easeInQuart:function(h,f,i,g){return i*(h/=g)*h*h*h+f},easeOutQuart:function(h,f,i,g){return -i*((h=h/g-1)*h*h*h-1)+f
},easeInOutQuart:function(h,f,i,g){if((h/=g/2)<1){return i/2*h*h*h*h+f}return -i/2*((h-=2)*h*h*h-2)+f
},easeInQuint:function(h,f,i,g){return i*(h/=g)*h*h*h*h+f},easeOutQuint:function(h,f,i,g){return i*((h=h/g-1)*h*h*h*h+1)+f
},easeInOutQuint:function(h,f,i,g){if((h/=g/2)<1){return i/2*h*h*h*h*h+f}return i/2*((h-=2)*h*h*h*h+2)+f
},easeInSine:function(h,f,i,g){return -i*Math.cos(h/g*(Math.PI/2))+i+f},easeOutSine:function(h,f,i,g){return i*Math.sin(h/g*(Math.PI/2))+f
},easeInOutSine:function(h,f,i,g){return -i/2*(Math.cos(Math.PI*h/g)-1)+f},easeInExpo:function(h,f,i,g){return(h==0)?f:i*Math.pow(2,10*(h/g-1))+f
},easeOutExpo:function(h,f,i,g){return(h==g)?f+i:i*(-Math.pow(2,-10*h/g)+1)+f},easeInOutExpo:function(h,f,i,g){if(h==0){return f
}if(h==g){return f+i}if((h/=g/2)<1){return i/2*Math.pow(2,10*(h-1))+f}return i/2*(-Math.pow(2,-10*--h)+2)+f
},easeInCirc:function(h,f,i,g){return -i*(Math.sqrt(1-(h/=g)*h)-1)+f},easeOutCirc:function(h,f,i,g){return i*Math.sqrt(1-(h=h/g-1)*h)+f
},easeInOutCirc:function(h,f,i,g){if((h/=g/2)<1){return -i/2*(Math.sqrt(1-h*h)-1)+f
}return i/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(j,h,l,i){var f=1.70158;
var k=0;var g=l;if(j==0){return h}if((j/=i)==1){return h+l}if(!k){k=i*0.3}if(g<Math.abs(l)){g=l;
f=k/4}else{f=k/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(j-=1))*Math.sin((j*i-f)*(2*Math.PI)/k))+h
},easeOutElastic:function(j,h,l,i){var f=1.70158;var k=0;var g=l;if(j==0){return h
}if((j/=i)==1){return h+l}if(!k){k=i*0.3}if(g<Math.abs(l)){g=l;f=k/4}else{f=k/(2*Math.PI)*Math.asin(l/g)
}return g*Math.pow(2,-10*j)*Math.sin((j*i-f)*(2*Math.PI)/k)+l+h},easeInOutElastic:function(j,h,l,i){var f=1.70158;
var k=0;var g=l;if(j==0){return h}if((j/=i/2)==2){return h+l}if(!k){k=i*(0.3*1.5)
}if(g<Math.abs(l)){g=l;f=k/4}else{f=k/(2*Math.PI)*Math.asin(l/g)}if(j<1){return -0.5*(g*Math.pow(2,10*(j-=1))*Math.sin((j*i-f)*(2*Math.PI)/k))+h
}return g*Math.pow(2,-10*(j-=1))*Math.sin((j*i-f)*(2*Math.PI)/k)*0.5+l+h},easeInBack:function(i,g,j,h,f){if(f==undefined){f=1.70158
}return j*(i/=h)*i*((f+1)*i-f)+g},easeOutBack:function(i,g,j,h,f){if(f==undefined){f=1.70158
}return j*((i=i/h-1)*i*((f+1)*i+f)+1)+g},easeInOutBack:function(i,g,j,h,f){if(f==undefined){f=1.70158
}if((i/=h/2)<1){return j/2*(i*i*(((f*=(1.525))+1)*i-f))+g}return j/2*((i-=2)*i*(((f*=(1.525))+1)*i+f)+2)+g
},easeInBounce:function(h,f,i,g){return i-d.easeOutBounce(g-h,0,i,g)+f},easeOutBounce:function(h,f,i,g){if((h/=g)<(1/2.75)){return i*(7.5625*h*h)+f
}else{if(h<(2/2.75)){return i*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return i*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f
}else{return i*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(h,f,i,g){if(h<g/2){return d.easeInBounce(h*2,0,i,g)*0.5+f
}return d.easeOutBounce(h*2-g,0,i,g)*0.5+i*0.5+f}};d.ease=function(h,g){if(g==="ease"){g="easeInOutSine"
}else{if(g==="ease-in"){g="easeInCubic"}else{if(g==="ease-out"){g="easeOutCubic"
}else{if(g==="ease-in-out"){g="easeInOutCubic"}else{if(g==="linear"){g="linear"
}else{if(g==="step-start"){return(h===0)?0:1}else{if(g==="step-end"){return(h===1)?1:0
}else{if(typeof g==="string"&&/^steps\(\d+\,\s*(start|end)\)$/.test(g)){var f=parseInt(g.match(/\d+/)[0]);
var i=g.match(/(start|end)/)[0];var j=(1/f);return Math[(i==="start")?"floor":"ceil"]((h/j))*j
}}}}}}}}if(typeof g==="string"){if(typeof d[g]==="function"&&g!=="ease"){g=d[g]
}else{throw new TypeError('"'+g+'" is not a valid easing type')}}return g(h,0,1,1)
};c.exports=d},{}],130:[function(c,a,d){var h=c("./Viewport");var i=c("./log");
var k=c("./Element/events");var l=c("./Element/vendorTransformHelper");var b=c("./Environment/Browser");
var g={addEventListener:k.addEventListener,removeEventListener:k.removeEventListener,addVendorPrefixEventListener:k.addVendorPrefixEventListener,removeVendorPrefixEventListener:k.removeVendorPrefixEventListener,addVendorEventListener:function(n,o,p,m){i("ac-base.Element.addVendorEventListener is deprecated. Please use ac-base.Element.addVendorPrefixEventListener.");
return this.addVendorPrefixEventListener(n,o,p,m)},removeVendorEventListener:function(n,o,p,m){i("ac-base.Element.removeVendorEventListener is deprecated. Please use ac-base.Element.removeVendorPrefixEventListener.");
return this.removeVendorPrefixEventListener(n,o,p,m)}};c("./Element/EventDelegate")(g);
g.getElementById=function(m){if(typeof m==="string"){m=document.getElementById(m)
}if(g.isElement(m)){return m}else{return null}};g.selectAll=function(m,n){if(typeof n==="undefined"){n=document
}else{if(!g.isElement(n)&&n.nodeType!==9&&n.nodeType!==11){throw new TypeError("ac-base.Element.selectAll: Invalid context nodeType")
}}if(typeof m!=="string"){throw new TypeError("ac-base.Element.selectAll: Selector must be a string")
}return Array.prototype.slice.call(n.querySelectorAll(m))};g.select=function(m,n){if(typeof n==="undefined"){n=document
}else{if(!g.isElement(n)&&n.nodeType!==9&&n.nodeType!==11){throw new TypeError("ac-base.Element.select: Invalid context nodeType")
}}if(typeof m!=="string"){throw new TypeError("ac-base.Element.select: Selector must be a string")
}return n.querySelector(m)};var f=window.Element?(function(m){return m.matches||m.matchesSelector||m.webkitMatchesSelector||m.mozMatchesSelector||m.msMatchesSelector||m.oMatchesSelector
}(Element.prototype)):null;g.matchesSelector=function(n,m){return g.isElement(n)?f.call(n,m):false
};g.matches=function(n,m){i("ac-base.Element.matches is deprecated. Use ac-base.Element.filterBySelector instead.");
return g.filterBySelector(m,n)};g.filterBySelector=function(q,n){var m=[];for(var p=0,o=q.length;
p<o;p++){if(g.isElement(q[p])&&f.call(q[p],n)){m[m.length]=q[p]}}return m};g.setOpacity=function(m,n){i("ac-base.Element.setOpacity is deprecated. Use ac-base.Element.setStyle instead.");
return g.setStyle(m,{opacity:n})};g.setStyle=function(n,o){if((typeof o!=="string"&&typeof o!=="object")||Array.isArray(o)){throw new TypeError("styles argument must be either an object or a string")
}n=g.getElementById(n);var m;var p;var q;m=g.setStyle.__explodeStyleStringToObject(o);
for(q in m){if(m.hasOwnProperty(q)){p=q.replace(/-(\w)/g,g.setStyle.__camelCaseReplace);
g.setStyle.__setStyle(n,p,m,m[q])}}return n};g.setStyle.__explodeStyleStringToObject=function(q){var o=(typeof q==="object")?q:{};
var r;var p;var m;var n;if(typeof q==="string"){r=q.split(";");m=r.length;for(n=0;
n<m;n+=1){p=r[n].indexOf(":");if(p>0){o[r[n].substr(0,p).trim()]=r[n].substr(p+1).trim()
}}}return o};g.setStyle.__setStyle=function(o,p,n,m){if(typeof o.style[p]!=="undefined"){o.style[p]=m
}};g.setStyle.__camelCaseReplace=function(n,o,p,m){return(p===0)&&(m.substr(1,3)!=="moz")?o:o.toUpperCase()
};g.getStyle=function(n,o,m){var p;o=o.replace(/-(\w)/g,g.setStyle.__camelCaseReplace);
n=g.getElementById(n);o=(o==="float")?"cssFloat":o;m=m||window.getComputedStyle(n,null);
p=m?m[o]:null;if(o==="opacity"){return p?parseFloat(p):1}return p==="auto"?null:p
};g.cumulativeOffset=function(n){var o=g.getBoundingBox(n);var m=h.scrollOffsets();
var p=[o.top+m.y,o.left+m.x];p.top=p[0];p.left=p[1];return p};g.getBoundingBox=function(n){n=g.getElementById(n);
var p=n.getBoundingClientRect();var m=p.width||p.right-p.left;var o=p.height||p.bottom-p.top;
return{top:p.top,right:p.right,bottom:p.bottom,left:p.left,width:m,height:o}};g.getInnerDimensions=function(p){var s=g.getBoundingBox(p);
var m=s.width;var r=s.height;var q;var n;var o=window.getComputedStyle?window.getComputedStyle(p,null):null;
["padding","border"].forEach(function(t){["Top","Right","Bottom","Left"].forEach(function(u){q=t==="border"?t+u+"Width":t+u;
n=parseFloat(g.getStyle(p,q,o));n=isNaN(n)?0:n;if(u==="Right"||u==="Left"){m-=n
}if(u==="Top"||u==="Bottom"){r-=n}})});return{width:m,height:r}};g.getOuterDimensions=function(o){var r=g.getBoundingBox(o);
var m=r.width;var p=r.height;var q;var n=window.getComputedStyle?window.getComputedStyle(o,null):null;
["margin"].forEach(function(s){["Top","Right","Bottom","Left"].forEach(function(t){q=parseFloat(g.getStyle(o,s+t,n));
q=isNaN(q)?0:q;if(t==="Right"||t==="Left"){m+=q}if(t==="Top"||t==="Bottom"){p+=q
}})});return{width:m,height:p}};g.hasClassName=function(o,n){var m=g.getElementById(o);
if(m&&m.className!==""){return new RegExp("(\\s|^)"+n+"(\\s|$)").test(m.className)
}else{return false}};g.addClassName=function(o,n){var m=g.getElementById(o);if(m.classList){m.classList.add(n)
}else{if(!g.hasClassName(m,n)){m.className+=" "+n}}};g.removeClassName=function(o,n){var m=g.getElementById(o);
if(g.hasClassName(m,n)){var p=new RegExp("(\\s|^)"+n+"(\\s|$)");m.className=m.className.replace(p,"$1").trim()
}};g.toggleClassName=function(o,n){var m=g.getElementById(o);if(m.classList){m.classList.toggle(n)
}else{if(g.hasClassName(m,n)){g.removeClassName(m,n)}else{g.addClassName(m,n)}}};
g.isElement=function(m){return !!(m&&m.nodeType===1)};g.setVendorPrefixStyle=function(m,p,o){if(typeof p!=="string"){throw new TypeError("ac-base.Element.setVendorPrefixStyle: property must be a string")
}if(typeof o!=="string"&&typeof o!=="number"){throw new TypeError("ac-base.Element.setVendorPrefixStyle: value must be a string or a number")
}o+="";m=g.getElementById(m);var n=["","webkit","Moz","ms","O"];var r;var q;p=p.replace(/-(webkit|moz|ms|o)-/i,"");
p=p.replace(/^(webkit|Moz|ms|O)/,"");p=p.charAt(0).toLowerCase()+p.slice(1);p=p.replace(/-(\w)/,function(s,t){return t.toUpperCase()
});o=o.replace(/-(webkit|moz|ms|o)-/,"-vendor-");n.forEach(function(s){r=(s==="")?p:s+p.charAt(0).toUpperCase()+p.slice(1);
q=(s==="")?o.replace("-vendor-",""):o.replace("-vendor-","-"+s.charAt(0).toLowerCase()+s.slice(1)+"-");
if(r in m.style){g.setStyle(m,r+":"+q)}})};g.getVendorPrefixStyle=function(m,p){if(typeof p!=="string"){throw new TypeError("ac-base.Element.getVendorPrefixStyle: property must be a string")
}m=g.getElementById(m);var o=["","webkit","Moz","ms","O"];var n;p=p.replace(/-(webkit|moz|ms|o)-/i,"");
p=p.replace(/^(webkit|Moz|ms|O)/,"").charAt(0).toLowerCase()+p.slice(1);p=p.replace(/-(\w)/,function(q,r){return r.toUpperCase()
});o.some(function(r,q){var s=(r==="")?p:r+p.charAt(0).toUpperCase()+p.slice(1);
if(s in m.style){n=g.getStyle(m,s);return true}});return n};g.insert=function(n,o,m){if(!n||!(n.nodeType===1||n.nodeType===3||n.nodeType===11)){throw new TypeError("ac-base.Element.insert: element must be a valid node of type element, text, or document fragment")
}if(!o||!(o.nodeType===1||o.nodeType===11)){throw new TypeError("ac-base.Element.insert: target must be a valid node of type element or document fragment")
}switch(m){case"before":if(o.nodeType===11){throw new TypeError("ac-base.Element.insert: target cannot be nodeType of documentFragment when using placement ‘before’")
}o.parentNode.insertBefore(n,o);break;case"after":if(o.nodeType===11){throw new TypeError("ac-base.Element.insert: target cannot be nodeType of documentFragment when using placement ‘after’")
}o.parentNode.insertBefore(n,o.nextSibling);break;case"first":o.insertBefore(n,o.firstChild);
break;default:o.appendChild(n)}};g.insertAt=function(q,r,n){var p;var m;var o;q=g.getElementById(q);
r=g.getElementById(r);if(!g.isElement(q)||!g.isElement(r)){throw new TypeError("ac-base.Element.insertAt: element must be a valid DOM element")
}p=g.children(r);if(n<0&&p.length){n+=p.length}if(r.contains(q)&&n>p.indexOf(q)){n++
}if(p&&n<=p.length-1){for(o=0,m=p.length;o<m;o++){if(o===n){r.insertBefore(q,p[o]);
break}}}else{r.appendChild(q)}};g.children=function(o){var p,q;o=g.getElementById(o);
if(!g.isElement(o)){throw new TypeError("ac-base.Element.children: element must be a valid DOM element")
}if(o.children){p=[];for(var n=0,m=o.children.length;n<m;n++){q=o.children[n];if(q&&q.nodeType===1){p.push(q)
}}}return p.length?p:null};g.remove=function(m,o){if(!g.isElement(m)){throw new TypeError("ac-base.Element.remove: element must be a valid DOM element")
}if(o===true){var n=m.parentNode.removeChild(m);return n}else{m.parentNode.removeChild(m)
}};g.viewportOffset=function(m){var n=g.getBoundingBox(m);return{x:n.left,y:n.top}
};g.pixelsInViewport=function(o,n){var p;if(!g.isElement(o)){throw new TypeError("ac-base.Element.pixelsInViewport : element must be a valid DOM element")
}var q=h.dimensions();n=n||g.getBoundingBox(o);var m=n.top;if(m>=0){p=q.height-m;
if(p>n.height){p=n.height}}else{p=n.height+m}if(p<0){p=0}if(p>q.height){p=q.height
}return p};g.percentInViewport=function(n){var m=g.getBoundingBox(n);var o=g.pixelsInViewport(n,m);
return o/m.height};g.isInViewport=function(n,o){if(typeof o!=="number"||1<o||o<0){o=0
}var m=g.percentInViewport(n);return(m>o||m===1)};var j=function(n,o){n=g.getElementById(n);
var m=n.parentNode;while(m&&g.isElement(m)){if(typeof o==="function"){if(o(m)===false){break
}}if(m!==document.body){m=m.parentNode}else{m=null}}};g.ancestors=function(m,n){var o=[];
j(m,function(p){if(n===undefined||g.matchesSelector(p,n)){o.push(p)}});return o
};g.ancestor=function(n,o){n=g.getElementById(n);var m=null;if(n!==null&&o===undefined){return n.parentNode
}j(n,function(p){if(g.matchesSelector(p,o)){m=p;return false}});return m};g.setVendorPrefixTransform=function(m,n){if((typeof n!=="string"&&typeof n!=="object")||Array.isArray(n)||n===null){throw new TypeError("ac-base.Element.setVendorPrefixTransform: transformFunctions argument must be either an object or a string")
}g.setVendorPrefixStyle(m,"transform",l.convert2dFunctions(n))};if(b.name==="IE"){c("./shims/ie/Element")(g,b)
}a.exports=g},{"./Element/EventDelegate":131,"./Element/events":132,"./Element/vendorTransformHelper":135,"./Environment/Browser":137,"./Viewport":152,"./log":156,"./shims/ie/Element":161}],131:[function(b,c,a){c.exports=function(f){function d(h,g){this.element=h;
this.options=g||{}}d.prototype={__findMatchingTarget:function(h){var g=null;if(f.matchesSelector(h,this.options.selector)){g=h
}else{g=f.ancestor(h,this.options.selector)}return g},__generateDelegateMethod:function(){var g=this;
var h=g.options.handler;return function(i){var l=i.target||i.srcElement;var k=g.__findMatchingTarget(l);
var j;if(k!==null){j=new d.Event(i);j.setTarget(k);h(j)}}},attachEventListener:function(){this.__delegateMethod=this.__generateDelegateMethod();
f.addEventListener(this.element,this.options.eventType,this.__delegateMethod);return this.__delegateMethod
},unbind:function(){f.removeEventListener(this.element,this.options.eventType,this.__delegateMethod);
this.__delegateMethod=undefined}};d.instances=[];d.filterInstances=function(g){var h=[];
d.instances.forEach(function(i){if(g(i)===true){h.push(i)}});return h};d.Event=function(g){this.originalEvent=g
};d.Event.prototype.setTarget=function(g){this.target=g;this.currentTarget=g};f.addEventDelegate=function(j,i,h,k){var g=new f.__EventDelegate(j,{eventType:i,selector:h,handler:k});
d.instances.push(g);return g.attachEventListener()};f.removeEventDelegate=function(j,i,h,k){var g=f.__EventDelegate.filterInstances(function(l){var m=l.options;
return l.element===j&&m.selector===h&&m.eventType===i&&m.handler===k});g.forEach(function(l){l.unbind()
})};f.__EventDelegate=d}},{}],132:[function(b,d,a){var c={};c.addEventListener=function(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,f)
}else{if(i.attachEvent){i.attachEvent("on"+g,h)}else{i["on"+g]=h}}return i};c.dispatchEvent=function(g,f){if(document.createEvent){g.dispatchEvent(new CustomEvent(f))
}else{g.fireEvent("on"+f,document.createEventObject())}return g};c.removeEventListener=function(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,f)
}else{i.detachEvent("on"+g,h)}return i};c.addVendorPrefixEventListener=function(g,h,i,f){if(h.match(/^webkit/i)){h=h.replace(/^webkit/i,"")
}else{if(h.match(/^moz/i)){h=h.replace(/^moz/i,"")}else{if(h.match(/^ms/i)){h=h.replace(/^ms/i,"")
}else{if(h.match(/^o/i)){h=h.replace(/^o/i,"")}else{h=h.charAt(0).toUpperCase()+h.slice(1)
}}}}if(/WebKit/i.test(window.navigator.userAgent)){return c.addEventListener(g,"webkit"+h,i,f)
}else{if(/Opera/i.test(window.navigator.userAgent)){return c.addEventListener(g,"O"+h,i,f)
}else{if(/Gecko/i.test(window.navigator.userAgent)||/Trident/i.test(window.navigator.userAgent)){return c.addEventListener(g,h.toLowerCase(),i,f)
}else{h=h.charAt(0).toLowerCase()+h.slice(1);return c.addEventListener(g,h,i,f)
}}}};c.removeVendorPrefixEventListener=function(g,h,i,f){if(h.match(/^webkit/i)){h=h.replace(/^webkit/i,"")
}else{if(h.match(/^moz/i)){h=h.replace(/^moz/i,"")}else{if(h.match(/^ms/i)){h=h.replace(/^ms/i,"")
}else{if(h.match(/^o/i)){h=h.replace(/^o/i,"")}else{h=h.charAt(0).toUpperCase()+h.slice(1)
}}}}c.removeEventListener(g,"webkit"+h,i,f);c.removeEventListener(g,"O"+h,i,f);
c.removeEventListener(g,h.toLowerCase(),i,f);h=h.charAt(0).toLowerCase()+h.slice(1);
return c.removeEventListener(g,h,i,f)};d.exports=c},{}],133:[function(c,a,d){var f=c("../globals");
var k=c("./events");var b;var g;function h(m){var o=f.document;var n=f.window;if(m.type==="readystatechange"&&o.readyState!=="complete"){return
}var l=g.length;while(l--){g.shift().call(n,m.type||m)}k.removeEventListener(o,"DOMContentLoaded",h,false);
k.removeEventListener(o,"readystatechange",h,false);k.removeEventListener(n,"load",h,false);
clearTimeout(b)}function i(){try{f.document.documentElement.doScroll("left")}catch(l){b=setTimeout(i,50);
return}h("poll")}a.exports=function j(o){var n=f.document;var m=f.window;if(n.readyState==="complete"){o.call(m,"lazy")
}else{if(!g||!g.length){g=[];k.addEventListener(n,"DOMContentLoaded",h,false);k.addEventListener(n,"readystatechange",h,false);
k.addEventListener(m,"load",h,false);if(n.createEventObject&&n.documentElement.doScroll){try{if(!m.frameElement){i()
}}catch(l){}}}g.push(o)}}},{"../globals":155,"./events":132}],134:[function(d,g,b){var i=d("../globals");
var f=d("./events");var a;function h(){var j=a.length;while(j--){a.shift()()}f.removeEventListener(i.window,"load",h)
}g.exports=function c(j){if(i.document.readyState==="complete"){j()}else{if(!a){a=[];
f.addEventListener(i.window,"load",h)}a.push(j)}}},{"../globals":155,"./events":132}],135:[function(c,d,b){var a={__objectifiedFunctions:{},__paramMaps:{translate:"p1, p2, 0",translateX:"p1, 0, 0",translateY:"0, p1, 0",scale:"p1, p2, 1",scaleX:"p1, 1, 1",scaleY:"1, p1, 1",rotate:"0, 0, 1, p1",matrix:"p1, p2, 0, 0, p3, p4, 0, 0, 0, 0, 1, 0, p5, p6, 0, 1"},convert2dFunctions:function(g){var f;
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
},{}],136:[function(b,c,a){var d={Browser:b("./Environment/Browser"),Feature:b("./Environment/Feature")};
c.exports=d},{"./Environment/Browser":137,"./Environment/Feature":140}],137:[function(b,c,a){var d=b("./Browser/BrowserData");
var f=d.create();f.isWebKit=function(g){var h=g||window.navigator.userAgent;return h?!!h.match(/applewebkit/i):false
};f.lowerCaseUserAgent=navigator.userAgent.toLowerCase();if(f.name==="IE"){b("../shims/ie/Environment/Browser")(f)
}c.exports=f},{"../shims/ie/Environment/Browser":162,"./Browser/BrowserData":138}],138:[function(c,d,b){var f=c("./data");
var a=c("../../RegExp");function g(){}g.prototype={__getBrowserVersion:function(i,j){if(!i||!j){return
}var l=f.browser.filter(function(m){return m.identity===j})[0];var h=l.versionSearch||j;
var k=i.indexOf(h);if(k>-1){return parseFloat(i.substring(k+h.length+1))}},__getName:function(h){return this.__getIdentityStringFromArray(h)
},__getIdentity:function(h){if(h.string){return this.__matchSubString(h)}else{if(h.prop){return h.identity
}}},__getIdentityStringFromArray:function(h){for(var m=0,j=h.length,k;m<j;m++){k=this.__getIdentity(h[m]);
if(k){return k}}},__getOS:function(h){return this.__getIdentityStringFromArray(h)
},__getOSVersion:function(j,m){if(!j||!m){return}var l=f.os.filter(function(n){return n.identity===m
})[0];var h=l.versionSearch||m;var k=new RegExp(h+" ([\\d_\\.]+)","i");var i=j.match(k);
if(i!==null){return i[1].replace(/_/g,".")}},__matchSubString:function(i){var h=i.subString;
var j;if(h){j=a.isRegExp(h)&&!!i.string.match(h);if(j||i.string.indexOf(h)>-1){return i.identity
}}}};g.create=function(){var h=new g();var i={};i.name=h.__getName(f.browser);i.version=h.__getBrowserVersion(f.versionString,i.name);
i.os=h.__getOS(f.os);i.osVersion=h.__getOSVersion(f.versionString,i.os);return i
};d.exports=g},{"../../RegExp":147,"./data":139}],139:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],140:[function(d,f,c){var g=d("../log");var b={localStorageAvailable:d("./Feature/localStorageAvailable")};
var a=Object.prototype.hasOwnProperty;(function(){var j=null;var k=null;var h=null;
var i=null;b.isCSSAvailable=function(l){g("ac-base.Environment.Feature.isCSSAvailable is deprecated. Please use ac-base.Environment.Feature.cssPropertyAvailable instead.");
return this.cssPropertyAvailable(l)};b.cssPropertyAvailable=function(t){if(j===null){j=document.createElement("browserdetect").style
}if(k===null){k=["-webkit-","-moz-","-o-","-ms-","-khtml-",""]}if(h===null){h=["Webkit","Moz","O","ms","Khtml",""]
}if(i===null){i={}}t=t.replace(/([A-Z]+)([A-Z][a-z])/g,"$1\\-$2").replace(/([a-z\d])([A-Z])/g,"$1\\-$2").replace(/^(\-*webkit|\-*moz|\-*o|\-*ms|\-*khtml)\-/,"").toLowerCase();
switch(t){case"gradient":if(i.gradient!==undefined){return i.gradient}t="background-image:";
var r="gradient(linear,left top,right bottom,from(#9f9),to(white));";var q="linear-gradient(left top,#9f9, white);";
j.cssText=(t+k.join(r+t)+k.join(q+t)).slice(0,-t.length);i.gradient=(j.backgroundImage.indexOf("gradient")!==-1);
return i.gradient;case"inset-box-shadow":if(i["inset-box-shadow"]!==undefined){return i["inset-box-shadow"]
}t="box-shadow:";var s="#fff 0 1px 1px inset;";j.cssText=k.join(t+s);i["inset-box-shadow"]=(j.cssText.indexOf("inset")!==-1);
return i["inset-box-shadow"];default:var p=t.split("-");var l=p.length;var o;var n;
var m;if(p.length>0){t=p[0];for(n=1;n<l;n+=1){t+=p[n].substr(0,1).toUpperCase()+p[n].substr(1)
}}o=t.substr(0,1).toUpperCase()+t.substr(1);if(i[t]!==undefined){return i[t]}for(m=h.length-1;
m>=0;m-=1){if(j[h[m]+t]!==undefined||j[h[m]+o]!==undefined){i[t]=true;return true
}}return false}}}());b.supportsThreeD=function(){g("ac-base.Environment.Feature.supportsThreeD is deprecated. Please use ac-base.Environment.Feature.threeDTransformsAvailable instead.");
return this.threeDTransformsAvailable()};b.threeDTransformsAvailable=function(){if(typeof this._threeDTransformsAvailable!=="undefined"){return this._threeDTransformsAvailable
}var j,h;try{this._threeDTransformsAvailable=false;if(a.call(window,"styleMedia")){this._threeDTransformsAvailable=window.styleMedia.matchMedium("(-webkit-transform-3d)")
}else{if(a.call(window,"media")){this._threeDTransformsAvailable=window.media.matchMedium("(-webkit-transform-3d)")
}}if(!this._threeDTransformsAvailable){if(!(h=document.getElementById("supportsThreeDStyle"))){h=document.createElement("style");
h.id="supportsThreeDStyle";h.textContent="@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d) { #supportsThreeD { height:3px } }";
document.querySelector("head").appendChild(h)}if(!(j=document.querySelector("#supportsThreeD"))){j=document.createElement("div");
j.id="supportsThreeD";document.body.appendChild(j)}this._threeDTransformsAvailable=(j.offsetHeight===3)||h.style.MozTransform!==undefined||h.style.WebkitTransform!==undefined
}return this._threeDTransformsAvailable}catch(i){return false}};b.supportsCanvas=function(){g("ac-base.Environment.Feature.supportsCanvas is deprecated. Please use ac-base.Environment.Feature.canvasAvailable instead.");
return this.canvasAvailable()};b.canvasAvailable=function(){if(typeof this._canvasAvailable!=="undefined"){return this._canvasAvailable
}var h=document.createElement("canvas");this._canvasAvailable=!!(typeof h.getContext==="function"&&h.getContext("2d"));
return this._canvasAvailable};b.sessionStorageAvailable=function(){if(typeof this._sessionStorageAvailable!=="undefined"){return this._sessionStorageAvailable
}try{if(typeof window.sessionStorage!=="undefined"&&typeof window.sessionStorage.setItem==="function"){window.sessionStorage.setItem("ac_browser_detect","test");
this._sessionStorageAvailable=true;window.sessionStorage.removeItem("ac_browser_detect","test")
}else{this._sessionStorageAvailable=false}}catch(h){this._sessionStorageAvailable=false
}return this._sessionStorageAvailable};b.cookiesAvailable=function(){if(typeof this._cookiesAvailable!=="undefined"){return this._cookiesAvailable
}this._cookiesAvailable=(a.call(document,"cookie")&&!!navigator.cookieEnabled)?true:false;
return this._cookiesAvailable};b.__normalizedScreenWidth=function(){if(typeof window.orientation==="undefined"){return window.screen.width
}return window.screen.width<window.screen.height?window.screen.width:window.screen.height
};b.touchAvailable=function(){return !!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch)
};b.isDesktop=function(){if(!this.touchAvailable()&&!window.orientation){return true
}return false};b.isHandheld=function(){return !this.isDesktop()&&!this.isTablet()
};b.isTablet=function(){return !this.isDesktop()&&this.__normalizedScreenWidth()>480
};b.isRetina=function(){var h=["min-device-pixel-ratio:1.5","-webkit-min-device-pixel-ratio:1.5","min-resolution:1.5dppx","min-resolution:144dpi","min--moz-device-pixel-ratio:1.5"];
var j;if(window.devicePixelRatio!==undefined){if(window.devicePixelRatio>=1.5){return true
}}else{for(j=0;j<h.length;j+=1){if(window.matchMedia("("+h[j]+")").matches===true){return true
}}}return false};b.svgAvailable=function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
};f.exports=b},{"../log":156,"./Feature/localStorageAvailable":141}],141:[function(d,f,b){var a=null;
f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],142:[function(b,c,a){var d={};d.stop=function(f){if(!f){f=window.event
}if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}if(f.preventDefault){f.preventDefault()
}f.stopped=true;f.returnValue=false};d.target=function(f){return(typeof f.target!=="undefined")?f.target:f.srcElement
};d.Keys={UP:38,DOWN:40,LEFT:37,RIGHT:39,ESC:27,SPACE:32,BACKSPACE:8,DELETE:46,END:35,HOME:36,PAGEDOWN:34,PAGEUP:33,RETURN:13,TAB:9};
c.exports=d},{}],143:[function(c,d,b){var a=c("./Array");var f={};f.emptyFunction=function(){};
f.bindAsEventListener=function(g,i){var h=a.toArray(arguments).slice(2);return function(j){return g.apply(i,[j||window.event].concat(h))
}};f.getParamNames=function(h){var g=h.toString();return g.slice(g.indexOf("(")+1,g.indexOf(")")).match(/([^\s,]+)/g)||[]
};f.iterateFramesOverAnimationDuration=function(m,l,j){var k=0;var g;var h;var i;
l=l*1000;h=function(n){i=i||n;k=l?Math.min(Math.max(0,(n-i)/l),1):1;m(k);if(k<1){g=window.requestAnimationFrame(h)
}else{window.cancelAnimationFrame(g);if(typeof j==="function"){j()}}};g=window.requestAnimationFrame(h)
};d.exports=f},{"./Array":124}],144:[function(c,f,b){var h=c("./NotificationCenter");
var g=c("./Class");var a=c("./Object");var i=c("./Element");var d={};d.HashChange=g({initialize:function(j){this._boundEventHandler=null;
this._notificationString=j||"ac-history-hashchange";this.synthesize()},__eventHandler:function(j){var k=new d.HashChange.Event(j);
h.publish(this.notificationString(),{data:k},false)},__bindWindowEvent:function(){this.setBoundEventHandler(this.__eventHandler.bind(this));
i.addEventListener(window,"hashchange",this.boundEventHandler())},__unbindWindowEvent:function(){i.removeEventListener(window,"hashchange",this.boundEventHandler());
this.setBoundEventHandler(null)},subscribe:function(j){if(this.boundEventHandler()===null){this.__bindWindowEvent()
}h.subscribe(this.notificationString(),j)},unsubscribe:function(j){h.unsubscribe(this.notificationString(),j);
if(!h.hasSubscribers(this.notificationString())){this.__unbindWindowEvent()}}});
d.HashChange.Event=g({initialize:function(j){this.event=j;a.extend(this,j);if(this.hasOwnProperty("oldURL")&&this.oldURL.match("#")){this.oldHash=this.oldURL.split("#")[1]
}if(this.hasOwnProperty("newURL")&&this.newURL.match("#")){this.newHash=this.newURL.split("#")[1]
}}});f.exports=d},{"./Class":126,"./Element":130,"./NotificationCenter":145,"./Object":146}],145:[function(b,c,a){var d={};
c.exports={publish:function(i,g,f){g=g||{};var h=function(){if((!d[i])||d[i].length<1){return
}d[i].forEach(function(j){if(typeof j!=="undefined"){if(j.target&&g.target){if(j.target===g.target){j.callback(g.data)
}}else{j.callback(g.data)}}})};if(f===true){window.setTimeout(h,10)}else{h()}},subscribe:function(f,h,g){if(!d[f]){d[f]=[]
}d[f].push({callback:h,target:g})},unsubscribe:function(g,i,h){var f=d[g].slice(0);
d[g].forEach(function(k,j){if(typeof k!=="undefined"){if(h){if(i===k.callback&&k.target===h){f.splice(j,1)
}}else{if(i===k.callback){f.splice(j,1)}}}});d[g]=f},hasSubscribers:function(h,j){if((!d[h])||d[h].length<1){return false
}if(!j){return true}var f=d[h].length;var g;while(f--){g=d[h][f];if(g.target&&j){if(g.target===j){return true
}}}return false}}},{}],146:[function(b,a,f){var g=b("./Synthesize");var j=b("qs");
var d={};var c=Object.prototype.hasOwnProperty;d.extend=function h(){var m;var l;
if(arguments.length<2){m=[{},arguments[0]]}else{m=[].slice.call(arguments)}l=m.shift();
m.forEach(function(o){for(var n in o){if(c.call(o,n)){l[n]=o[n]}}});return l};d.clone=function i(l){return d.extend({},l)
};if(Object.getPrototypeOf){d.getPrototypeOf=Object.getPrototypeOf}else{if(typeof this.__proto__==="object"){d.getPrototypeOf=function k(l){return l.__proto__
}}else{d.getPrototypeOf=function k(n){var l=n.constructor;var m;if(c.call(n,"constructor")){m=l;
if(!(delete n.constructor)){return null}l=n.constructor;n.constructor=m}return l?l.prototype:null
}}}d.toQueryParameters=function(l){if(typeof l!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return j.stringify(l)};d.isEmpty=function(l){var m;if(typeof l!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(m in l){if(c.call(l,m)){return false}}return true};d.synthesize=function(l){if(typeof l==="object"){d.extend(l,d.clone(g));
l.synthesize();return l}else{throw new TypeError("Argument supplied was not a valid object.")
}};a.exports=d},{"./Synthesize":151,qs:118}],147:[function(c,d,b){var a={};a.isRegExp=function(f){return window.RegExp?f instanceof RegExp:false
};d.exports=a},{}],148:[function(d,f,c){var g=d("./Class");var b=d("./Object");
var h=d("./Element");var a=g();a.Component=d("./Registry/Component");a.prototype={__defaultOptions:{contextInherits:[],matchCatchAll:false},initialize:function(j,i){if(typeof j!=="string"){throw new Error("Prefix not defined for Component Registry")
}if(typeof i!=="object"){i={}}this._options=b.extend(b.clone(this.__defaultOptions),i);
this._prefix=j;this._reservedNames=[];this.__model=[];this.__lookup={};b.synthesize(this)
},addComponent:function(j,l,n,o,k){var m=null;var i;if(!this.__isReserved(j)){if(typeof j==="string"){if(typeof o==="string"){m=this.lookup(o)
}if(!m&&j!=="_base"){m=this.lookup("_base")||this.addComponent("_base")}if(this.lookup(j)){throw new Error("Cannot overwrite existing Component: "+j)
}if(typeof k!=="object"){k={}}if(typeof k.inherits==="undefined"&&Array.isArray(this._options.contextInherits)){k.inherits=this._options.contextInherits
}i=this.__lookup[j]=new a.Component(j,l,n,m,k);this.__addToModel(i);return i}}return null
},match:function(j){var i;if(i=this.__matchName(j)){return i}if(i=this.__matchQualifier(j)){return i
}if(this.options().matchCatchAll===true){if(typeof this.__model[1]!=="undefined"){if(typeof this.__model[1][0]!=="undefined"){return this.__model[1][0]
}else{throw new Error("Catchall Type not defined")}}else{throw new Error("No non-_base types defined at index 1.")
}}return null},__matchName:function(k){if(!h.isElement(k)){return null}var j,l;
for(j=this.__model.length-1;j>=0;j--){if(Array.isArray(this.__model[j])){for(l=this.__model[j].length-1;
l>=0;l--){if(h.hasClassName(k,this._prefix+this.__model[j][l].name())){return this.__model[j][l]
}}}}return null},__matchQualifier:function(k){if(!h.isElement(k)){return null}var j,l;
for(j=this.__model.length-1;j>=0;j--){if(Array.isArray(this.__model[j])){for(l=this.__model[j].length-1;
l>=0;l--){if(typeof this.__model[j][l].qualifier==="function"){if(this.__model[j][l].qualifier.apply(this.__model[j][l],[k,this._prefix])===true){return this.__model[j][l]
}}}}}return null},__addToModel:function(i){if(a.Component.isComponent(i)){if(typeof this.__model[i.level()]==="undefined"){this.__model[i.level()]=[]
}this.__model[i.level()].push(i)}},lookup:function(i){if(typeof i==="string"){if(typeof this.__lookup[i]!=="undefined"){return this.__lookup[i]
}}return null},hasComponent:function(i){var j;if(typeof i==="object"&&typeof i.name==="function"){if(j=this.lookup(i.name())){return j===i
}}return false},reserveName:function(i){if(typeof i==="string"){if(this.lookup(i)!==null){throw new Error("Cannot reserve name: Component with name already exists.")
}else{if(!this.__isReserved(i)){this._reservedNames.push(i)}}}else{throw new Error("Cannot reserve name: Name must be a string")
}},__isReserved:function(i){if(typeof i==="string"){return(this._reservedNames.indexOf(i)!==-1)
}else{throw new Error("Cannot check if this name is reserved because it is not a String.")
}}};f.exports=a},{"./Class":126,"./Element":130,"./Object":146,"./Registry/Component":149}],149:[function(c,f,b){var g=c("../Class");
var h=c("../Function");var a=c("../Object");var d=g();d.prototype={initialize:function(i,k,m,l,j){if(typeof i!=="string"){throw new Error("Cannot create Component without a name")
}this._name=i;this._properties=k||{};this.qualifier=typeof m==="function"?m:h.emptyFunction;
this._parent=l;this._context=j||{};a.synthesize(this)},properties:function(){var i=(typeof this._parent==="undefined"||this._parent===null)?{}:this._parent.properties();
return a.extend(i,this._properties)},context:function(i){if(this._context[i]){return this._context[i]
}else{if(Array.isArray(this._context.inherits)&&this._context.inherits.indexOf[i]!==-1){return(this.parent())?this.parent().context(i):null
}}return null},level:function(){if(typeof this._level!=="undefined"){return this._level
}if(this._name==="_base"){return 0}else{if(typeof this._parent==="undefined"||this._parent.name()==="_base"){return 1
}else{return this._parent.level()+1}}}};d.isComponent=function(i){return(i instanceof d)
};f.exports=d},{"../Class":126,"../Function":143,"../Object":146}],150:[function(d,f,c){var a=d("qs");
var b={};b.isString=function(g){return(typeof g==="string")};b.toCamelCase=function(g){if(!b.isString(g)){throw new TypeError("Argument must be of type String.")
}return g.replace(/-+(.)?/g,function(h,i){return i?i.toUpperCase():""})};b.queryStringToObject=function(g){if(!b.isString(g)){throw new TypeError("QueryStringToObject error: argument must be a string")
}return a.parse(g)};b.toQueryPair=function(g,h){if(!b.isString(g)||!b.isString(h)){throw new TypeError("toQueryPair error: argument must be a string")
}return encodeURIComponent(g)+"="+encodeURIComponent(h)};f.exports=b},{qs:118}],151:[function(d,g,b){var a={};
function f(h,i){var j=h.slice(1,h.length);if(typeof i[j]==="undefined"){i[j]=function(){return i[h]
}}}function c(h,i){var j=h.slice(1,h.length);j="set"+j.slice(0,1).toUpperCase()+j.slice(1,j.length);
if(typeof i[j]==="undefined"){i[j]=function(k){i[h]=k}}}a.synthesize=function(i){if(typeof i!=="object"){i=this
}var h;for(h in i){if(i.hasOwnProperty(h)){if(h.charAt(0)==="_"&&h.charAt(1)!=="_"){if(typeof i[h]!=="function"){f(h,i);
c(h,i)}}}}};g.exports=a},{}],152:[function(b,c,a){var d={};d.scrollOffsets=function(){return{x:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}
};d.dimensions=function(){return{height:window.innerHeight||document.documentElement.clientHeight,width:window.innerWidth||document.documentElement.clientWidth}
};c.exports=d},{}],153:[function(b,d,a){d.exports=function c(h){var f=65521;var k=1;
var g=0;var l;var j;for(j=0;j<h.length;j+=1){l=h.charCodeAt(j);k=(k+l)%f;g=(g+k)%f
}return(g<<16)|k}},{}],154:[function(b,c,a){var f=b("./Element");var g=b("./Function");
c.exports=function d(j,k,i){var l;k=f.getElementById(k);if(!f.isElement(k)){throw"Invalid or non-existent element passed to bindEventListeners."
}for(l in i){if(i.hasOwnProperty(l)){var h=i[l];if(typeof h==="function"){f.addEventListener(k,l,g.bindAsEventListener(h,j))
}else{if(typeof h==="string"){f.addEventListener(k,l,g.bindAsEventListener(j[h],j))
}}}}}},{"./Element":130,"./Function":143}],155:[function(b,c,a){c.exports={console:window.console,document:document,window:window}
},{}],156:[function(f,g,b){var d=f("./Environment/Feature/localStorageAvailable");
var a="f7c9180f-5c45-47b4-8de4-428015f096c0";var c=(d()&&!!window.localStorage.getItem(a));
g.exports=function h(i){if(window.console&&typeof console.log==="function"&&c){console.log(i)
}}},{"./Environment/Feature/localStorageAvailable":141}],157:[function(b,c,a){c.exports=function d(h){var f;
if(!(h&&h.match&&h.match(/\S/))){throw"Attempt to create namespace with no name."
}var g=h.split(/\./);var j=window;for(f=0;f<g.length;f++){j[g[f]]=j[g[f]]||{};j=j[g[f]]
}}},{}],158:[function(d,f,c){var b=d("./String");f.exports=function a(){var g={};
var h=window.location.toString().split("?")[1];if(b.isString(h)){g=b.queryStringToObject(h)
}return g}},{"./String":150}],159:[function(b,c,a){c.exports=function(){var d=["abbr","article","aside","command","details","figcaption","figure","footer","header","hgroup","mark","meter","nav","output","picture","progress","section","source","summary","time","video"];
d.forEach(function(f){document.createElement(f)})}},{}],160:[function(b,c,a){c.exports=function(d,f){if(f.IE.documentMode<=8){d.toArray=function(h){var k=[];
var g=h.length;var j;if(g>0){for(j=0;j<g;j+=1){k.push(h[j])}}return k}}}},{}],161:[function(c,d,b){var a=c("../../Array");
var f=c("../../vendor/Sizzle");d.exports=function(j,i,h){var g=i.IE.documentMode;
h=h||f;if(g<8){j.selectAll=function(k,l){if(typeof l==="undefined"){l=document}else{if(!j.isElement(l)&&l.nodeType!==9&&l.nodeType!==11){throw new TypeError("ac-base.Element.selectAll: Invalid context nodeType")
}}if(typeof k!=="string"){throw new TypeError("ac-base.Element.selectAll: Selector must be a string")
}if(l.nodeType===11){var n=[];var m;a.toArray(l.childNodes).forEach(function(o){if(h.matchesSelector(o,k)){n.push(o)
}if(m=h(k,o).length>0){n.concat(m)}});return n}return h(k,l)}}else{if(g<9){j.selectAll=function(k,l){if(typeof l==="undefined"){l=document
}else{if(!j.isElement(l)&&l.nodeType!==9&&l.nodeType!==11){throw new TypeError("ac-base.Element.selectAll: Invalid context nodeType")
}}if(typeof k!=="string"){throw new TypeError("ac-base.Element.selectAll: Selector must be a string")
}return a.toArray(l.querySelectorAll(k))}}}if(g<8){j.select=function(k,m){if(typeof m==="undefined"){m=document
}else{if(!j.isElement(m)&&m.nodeType!==9&&m.nodeType!==11){throw new TypeError("ac-base.Element.select: Invalid context nodeType")
}}if(typeof k!=="string"){throw new TypeError("ac-base.Element.select: Selector must be a string")
}if(m.nodeType===11){var l=[];var n;a.toArray(m.childNodes).some(function(o){if(h.matchesSelector(o,k)){l=o;
return true}else{if(n=h(k,o).length>0){l=n[0];return true}}});return l}return h(k,m)[0]
}}if(g<9){j.matchesSelector=function(l,k){return h.matchesSelector(l,k)};j.filterBySelector=function(l,k){return h.matches(k,l)
}}if(g<9&&typeof window.getComputedStyle!=="function"){j.getStyle=function(m,n,l){m=j.getElementById(m);
var k;var o;l=l||m.currentStyle;if(l){n=n.replace(/-(\w)/g,j.setStyle.__camelCaseReplace);
n=n==="float"?"styleFloat":n;if(n==="opacity"){k=m.filters["DXImageTransform.Microsoft.Alpha"]||m.filters.Alpha;
if(k){return parseFloat(k.Opacity/100)}return 1}o=l[n]||null;return o==="auto"?null:o
}}}if(g<=8){j.setStyle.__superSetStyle=j.setStyle.__setStyle;j.setStyle.__setStyle=function(m,n,l,k){if(n==="opacity"){j.setStyle.__setOpacity(m,k)
}else{j.setStyle.__superSetStyle(m,n,l,k)}};j.setStyle.__setOpacity=function(l,m){m=(m>1)?1:((m<0.00001)?0:m)*100;
var k=l.filters["DXImageTransform.Microsoft.Alpha"]||l.filters.Alpha;if(k){k.Opacity=m
}else{l.style.filter+=" progid:DXImageTransform.Microsoft.Alpha(Opacity="+m+")"
}}}if(i.version<8){j.getBoundingBox=function(l){l=j.getElementById(l);var o=l.offsetLeft;
var n=l.offsetTop;var k=l.offsetWidth;var m=l.offsetHeight;return{top:n,right:o+k,bottom:n+m,left:o,width:k,height:m}
}}}},{"../../Array":124,"../../vendor/Sizzle":165}],162:[function(b,c,a){c.exports=function(f){function d(){var g;
if(document.documentMode){g=parseInt(document.documentMode,10)}else{g=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){g=7
}}}return g}f.IE={documentMode:d()}}},{}],163:[function(c,d,b){var f=c("../../Element");
function a(i,j){var g=false;var h=i.parentNode;while(h!==j){if(h){if(h.currentStyle.hasLayout){g=true;
break}h=h.parentNode}}return g}d.exports=function(){var o;var j;var p;var i;var l=[];
var h;var m=(location.protocol==="https:"?"https://ssl":"http://images")+".apple.com";
var k="g";var n="url("+m+"/global/elements/blank."+k+"if)";f.selectAll("a > * img").forEach(function(g){o=g.parentNode;
j=f.ancestor(g,"a");if(a(g,j)&&g.height>0&&g.width>0){if(!f.select("ieclickbooster",j)){p=document.createElement("ieclickbooster");
i=f.getStyle(j,"position");if(i==="static"){f.setStyle(j,{position:"relative"})
}f.selectAll("> *",j).forEach(function(q){var r=parseInt(q.currentStyle.zIndex,10);
if(r>0){l.push(r)}});l.sort(function(r,q){return q-r});h=l[0]?l[0].toString():"1";
f.insert(p,j);f.setStyle(p,{display:"block",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",background:n,cursor:"pointer",zIndex:h})
}}})}},{"../../Element":130}],164:[function(b,d,a){var c=0;d.exports=function f(){return c++
}},{}],165:[function(b,c,a){
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
}else{ad.Sizzle=ac}})(window)},{}],166:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":167}],167:[function(b,c,a){var g;var f=b("ac-event-emitter").EventEmitter;
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
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{"ac-event-emitter":168}],168:[function(b,c,a){arguments[4][11][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":169,dup:11}],169:[function(b,c,a){arguments[4][12][0].apply(a,arguments)
},{dup:12}],170:[function(b,c,a){c.exports.WindowDelegate=b("./window-delegate/WindowDelegate");
c.exports.windowEmitter=b("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":171,"./window-delegate/windowEmitter":172}],171:[function(c,f,a){var g;
var b=c("./windowEmitter");function d(){this._emitter=b;this._setWindowDimensionValues();
this._setScrollValues();this.on("resize",this._setWindowDimensionValues.bind(this));
this.on("scroll",this._setScrollValues.bind(this));this.on("touchstart",this._touchScrollStart.bind(this));
this.on("touchend",this._setZoomValues.bind(this))}g=d.prototype;g.on=function(){this._emitter.on.apply(this._emitter,arguments);
return this};g.once=function(){this._emitter.once.apply(this._emitter,arguments);
return this};g.off=function(){this._emitter.off.apply(this._emitter,arguments);
return this};g.has=function(){return this._emitter.has.apply(this._emitter,arguments)
};g.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};g.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};g.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};g.isZoomed=function(){return this.clientWidth>this.innerWidth};g._setWindowDimensionValues=function(){this.clientWidth=document.documentElement.clientWidth;
this.clientHeight=document.documentElement.clientHeight;this.innerWidth=window.innerWidth||this.clientWidth;
this.innerHeight=window.innerHeight||this.clientHeight};g._setZoomValues=function(){var h=this.innerWidth;
this.innerWidth=window.innerWidth;if(h!==this.innerWidth){this.innerHeight=window.innerHeight;
this.trigger("zoom");if(h<this.innerWidth){this.trigger("zoomIn")}else{this.trigger("zoomOut")
}}else{setTimeout(this._setZoomValues.bind(this),500)}};g._updateScrollX=function(){this.scrollX=(window.pageXOffset!==undefined)?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft;
this.maxScrollX=document.body.scrollWidth-this.innerWidth;return this.scrollX};
g._updateScrollY=function(){this.scrollY=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;
this.maxScrollY=document.body.scrollHeight-this.innerHeight;return this.scrollY
};g._setScrollValues=function(){var i=this.scrollX,h=this.scrollY;this._updateScrollX();
this._updateScrollY();if(this.scrollX!==i){this.trigger("scrollX")}if(this.scrollY!==h){this.trigger("scrollY")
}this._scrollStop()};g._scrollStop=function(){if(typeof window.ontouchstart==="undefined"){if(this._scrollStopTimer){clearTimeout(this._scrollStopTimer)
}this._scrollStopTimer=setTimeout(function(){clearTimeout(this._scrollStopTimer);
this.trigger("scrollStop")}.bind(this),300)}};g._touchScrollStart=function(){this._updateScrollX();
this._updateScrollY();this.once("touchend",this._touchScrollStop.bind(this,this.scrollX,this.scrollY))
};g._touchScrollStop=function(i,h,j){this._updateScrollX();this._updateScrollY();
if(i!==this.scrollX||h!==this.scrollY){setTimeout(this._touchScrollStop.bind(this,this.scrollX,this.scrollY,true),300)
}else{if(j){this.trigger("scrollStop")}}};f.exports=new d()},{"./windowEmitter":172}],172:[function(b,c,a){var d=b("ac-dom-emitter").DOMEmitter;
c.exports=new d(window)},{"ac-dom-emitter":166}],173:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":174}],174:[function(c,b,g){var h;
var f=c("ac-object");var i=c("ac-base").Element;var k=c("ac-base").Array;var m=c("window-delegate").WindowDelegate;
var j=c("./TrackedElement");var n=c("ac-event-emitter").EventEmitter;var d={autoStart:false};
function a(p,o){this.options=f.clone(d);this.options=typeof o==="object"?f.extend(this.options,o):this.options;
this.windowDelegate=m;this.tracking=false;this.elements=[];if(p&&(Array.isArray(p)||this._isNodeList(p)||i.isElement(p))){this.addElements(p)
}if(this.options.autoStart){this.start()}}h=a.prototype=new n();var l=/^\[object (HTMLCollection|NodeList|Object)\]$/;
h._isNodeList=function(o){if(!o){return false}if(typeof o.length!=="number"){return false
}if(typeof o[0]==="object"&&(!o[0]||!o[0].nodeType)){return false}return l.test(Object.prototype.toString.call(o))
};h._registerElements=function(o){o=[].concat(o);o.forEach(function(q){if(this._elementInDOM(q)){var p=new j(q);
p.offsetTop=p.element.offsetTop;this.elements.push(p)}},this)};h._registerTrackedElements=function(o){var p=[].concat(o);
p.forEach(function(q){if(this._elementInDOM(q.element)){q.offsetTop=q.element.offsetTop;
this.elements.push(q)}},this)};h._elementInDOM=function(q){var p=false;var o=document.getElementsByTagName("body")[0];
if(i.isElement(q)&&o.contains(q)){p=true}return p};h._onVPChange=function(){this.elements.forEach(function(o){this.refreshElementState(o)
},this)};h._elementPercentInView=function(o){return o.pixelsInView/o.height};h._elementPixelsInView=function(p){var s=0;
var r=p.top;var q=p.bottom;var o=this.windowDelegate.innerHeight;if(r<=0&&q>=o){s=o
}else{if(r>=0&&r<o&&q>o){s=o-r}else{if(r<0&&(q<o&&q>=0)){s=p.bottom}else{if(r>=0&&q<=o){s=p.height
}}}}return s};h._ifInView=function(o,p){if(!p){o.trigger("enterview",o)}};h._ifAlreadyInView=function(o){if(!o.inView){o.trigger("exitview",o)
}};h.addElements=function(o){o=this._isNodeList(o)?k.toArray(o):[].concat(o);o.forEach(function(p){this.addElement(p)
},this)};h.addElement=function(p){var o;if(i.isElement(p)){o=new j(p);this._registerTrackedElements(o)
}return o};h.removeElement=function(q){var p=[];var o;this.elements.forEach(function(r,s){if(r===q||r.element===q){p.push(s)
}});o=this.elements.filter(function(s,r){return p.indexOf(r)<0?true:false});this.elements=o
};h.stop=function(){if(this.tracking===true){this.tracking=false;this.windowDelegate.off("scroll resize orientationchange",this._onVPChange)
}};h.start=function(){if(this.tracking===false){this.tracking=true;this.windowDelegate.on("scroll resize orientationchange",this._onVPChange,this);
this.refreshAllElementStates()}};h.refreshAllElementStates=function(){this.elements.forEach(function(o){this.refreshElementState(o)
},this)};h.refreshElementState=function(o){var p=i.getBoundingBox(o.element);var q=o.inView;
o=f.extend(o,p);o.pixelsInView=this._elementPixelsInView(o);o.percentInView=this._elementPercentInView(o);
o.inView=o.pixelsInView>0;if(o.inView){this._ifInView(o,q)}if(q){this._ifAlreadyInView(o)
}return o};b.exports=a},{"./TrackedElement":175,"ac-base":119,"ac-event-emitter":168,"ac-object":177,"window-delegate":170}],175:[function(b,c,a){var d;
var g=b("ac-dom-emitter").DOMEmitter;function f(h){if(h.nodeType&&h.nodeType>0){this.element=h
}else{throw new TypeError("TrackedElement: "+h+" is not a valid DOM element")}this.inView=false;
this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;
this.bottom=0;this.left=0;this.width=0;this.height=0;g.call(this,h)}d=f.prototype=new g(null);
c.exports=f},{"ac-dom-emitter":166}],176:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],177:[function(b,c,a){arguments[4][99][0].apply(a,arguments)},{"./ac-object/clone":178,"./ac-object/create":179,"./ac-object/defaults":180,"./ac-object/extend":181,"./ac-object/getPrototypeOf":182,"./ac-object/isDate":183,"./ac-object/isEmpty":184,"./ac-object/isRegExp":185,"./ac-object/toQueryParameters":186,dup:99}],178:[function(b,c,a){arguments[4][100][0].apply(a,arguments)
},{"./extend":181,dup:100}],179:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],180:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":181,dup:102}],181:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{dup:103}],182:[function(b,c,a){arguments[4][104][0].apply(a,arguments)},{dup:104}],183:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],184:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],185:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],186:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108,qs:176}],187:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":188}],188:[function(c,b,f){var g;
var d=c("ac-object");var h=c("ac-base").Element;var i=c("ac-element-tracker").ElementTracker;
var k={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};var j={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var a=function(){i.call(this)};g=a.prototype=new i();g._decorateTrackedElement=function(m,l){var n;
n=d.defaults(k,l||{});d.extend(m,n);d.extend(m,j)};g._attachElementListeners=function(l){l.on("thresholdenter",this._thresholdEnter,this);
l.on("thresholdexit",this._thresholdExit,this);l.on("enterview",this._enterView,this);
l.on("exitview",this._exitView,this)};g._removeElementListeners=function(l){l.off("thresholdenter",this._thresholdEnter);
l.off("thresholdexit",this._thresholdExit);l.off("enterview",this._enterView);l.off("exitview",this._exitView)
};g._attachAllElementListeners=function(){this.elements.forEach(function(l){if(!l.stopOnEngaged){this._attachElementListeners(l)
}else{if(!l.engaged){this._attachElementListeners(l)}}},this)};g._removeAllElementListeners=function(){this.elements.forEach(function(l){this._removeElementListeners(l)
},this)};g._elementInViewPastThreshold=function(n){var l=this.windowDelegate.innerHeight;
var m=false;if(n.pixelsInView===l){m=true}else{m=(n.percentInView>n.inViewThreshold)
}return m};g._ifInView=function(l,n){var m=l.inThreshold;i.prototype._ifInView.apply(this,arguments);
if(!m&&this._elementInViewPastThreshold(l)){l.inThreshold=true;l.trigger("thresholdenter",l);
if(typeof l.timeToEngage==="number"&&l.timeToEngage>=0){l.engagedTimeout=window.setTimeout(this._engaged.bind(this,l),l.timeToEngage)
}}};g._ifAlreadyInView=function(l){var m=l.inThreshold;i.prototype._ifAlreadyInView.apply(this,arguments);
if(m&&!this._elementInViewPastThreshold(l)){l.inThreshold=false;l.trigger("thresholdexit",l);
if(l.engagedTimeout){window.clearTimeout(l.engagedTimeout);l.engagedTimeout=null
}}};g._engaged=function(l){l.engagedTimeout=null;this._elementEngaged(l);l.trigger("engaged",l);
this.trigger("engaged",l)};g._thresholdEnter=function(l){l.thresholdEnterTime=Date.now();
l.thresholdExitTime=0;this.trigger("thresholdenter",l)};g._thresholdExit=function(l){l.thresholdExitTime=Date.now();
this.trigger("thresholdexit",l)};g._enterView=function(l){this.trigger("enterview",l)
};g._exitView=function(l){this.trigger("exitview",l)};g._elementEngaged=function(l){l.engaged=true;
if(l.stopOnEngaged){this.stop(l)}};g.stop=function(l){if(this.tracking&&!l){this._removeAllElementListeners();
i.prototype.stop.call(this)}if(l&&l.tracking){l.tracking=false;this._removeElementListeners(l)
}};g.start=function(l){if(!l){this._attachAllElementListeners();i.prototype.start.call(this)
}if(l&&!l.tracking){if(!l.stopOnEngaged){l.tracking=true;this._attachElementListeners(l)
}else{if(!l.engaged){l.tracking=true;this._attachElementListeners(l)}}}};g.addElement=function(n,l){var m=i.prototype.addElement.call(this,n);
this._decorateTrackedElement(m,l);return m};g.addElements=function(m,l){[].forEach.call(m,function(n){this.addElement(n,l)
},this)};b.exports=a},{"ac-base":119,"ac-element-tracker":173,"ac-object":177}],189:[function(b,c,a){var g=b("./helpers/globals");
var f=b("ac-function/once");var d=function(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("2d"))};c.exports=f(d);
c.exports.original=d},{"./helpers/globals":197,"ac-function/once":211}],190:[function(c,d,b){var h=c("ac-browser");
var a=c("./touchAvailable").original;var f=c("ac-function/once");function g(){return(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}d.exports=f(g);d.exports.original=g},{"./touchAvailable":226,"ac-browser":206,"ac-function/once":211}],191:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var k=false;var h=g.getDocument();var j=g.getNavigator();
try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";k=(h.cookie.indexOf("ac_feature_cookie")!==-1);
h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}catch(i){}return k
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":197,"ac-function/once":211}],192:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"ac-function/once":211,"ac-prefixer/getStyleValue":214}],193:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-prefixer/getStyleProperty");var h=c("ac-function/memoize");function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)
}else{return !!f(j)}}d.exports=h(a);d.exports.original=a},{"ac-function/memoize":210,"ac-prefixer/getStyleProperty":213,"ac-prefixer/getStyleValue":214}],194:[function(b,c,a){var f=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function g(){return !!f("margin","1vw 1vh")}c.exports=d(g);
c.exports.original=g},{"ac-function/once":211,"ac-prefixer/getStyleValue":214}],195:[function(b,d,a){var f=b("./helpers/globals");
var g=b("ac-function/memoize");function c(h,j){var i=f.getDocument();var k;j=j||"div";
k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c},{"./helpers/globals":197,"ac-function/memoize":210}],196:[function(c,f,b){var a=c("ac-prefixer/getEventType");
var g=c("ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);f.exports.original=d
},{"ac-function/memoize":210,"ac-prefixer/getEventType":212}],197:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],198:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),mediaQueriesAvailable:b("./mediaQueriesAvailable"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":189,"./continuousScrollEventsAvailable":190,"./cookiesAvailable":191,"./cssLinearGradientAvailable":192,"./cssPropertyAvailable":193,"./cssViewportUnitsAvailable":194,"./elementAttributeAvailable":195,"./eventTypeAvailable":196,"./isDesktop":199,"./isHandheld":200,"./isRetina":201,"./isTablet":202,"./localStorageAvailable":203,"./mediaElementsAvailable":204,"./mediaQueriesAvailable":205,"./sessionStorageAvailable":223,"./svgAvailable":224,"./threeDTransformsAvailable":225,"./touchAvailable":226,"./webGLAvailable":227}],199:[function(d,f,b){var a=d("./touchAvailable").original;
var h=d("./helpers/globals");var g=d("ac-function/once");function c(){var i=h.getWindow();
return(!a()&&!i.orientation)}f.exports=g(c);f.exports.original=c},{"./helpers/globals":197,"./touchAvailable":226,"ac-function/once":211}],200:[function(f,g,c){var d=f("./isDesktop").original;
var a=f("./isTablet").original;var h=f("ac-function/once");function b(){return(!d()&&!a())
}g.exports=h(b);g.exports.original=b},{"./isDesktop":199,"./isTablet":202,"ac-function/once":211}],201:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":197}],202:[function(f,g,c){var d=f("./isDesktop").original;
var i=f("./helpers/globals");var h=f("ac-function/once");var b=600;function a(){var k=i.getWindow();
var j=k.screen.width;if(k.orientation&&k.screen.height<j){j=k.screen.height}return(!d()&&j>=b)
}g.exports=h(a);g.exports.original=a},{"./helpers/globals":197,"./isDesktop":199,"ac-function/once":211}],203:[function(c,d,a){var g=c("./helpers/globals");
var f=c("ac-function/once");function b(){var j=g.getWindow();var i=false;try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)
}catch(h){}return i}d.exports=f(b);d.exports.original=b},{"./helpers/globals":197,"ac-function/once":211}],204:[function(b,c,a){var g=b("./helpers/globals");
var d=b("ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
}c.exports=d(f);c.exports.original=f},{"./helpers/globals":197,"ac-function/once":211}],205:[function(c,d,b){c("ac-polyfills/matchMedia");
var g=c("./helpers/globals");var f=c("ac-function/once");function a(){var i=g.getWindow();
var h=i.matchMedia("only all");return !!(h&&h.matches)}d.exports=f(a);d.exports.original=a
},{"./helpers/globals":197,"ac-function/once":211,"ac-polyfills/matchMedia":1503}],206:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":207,"./ac-browser/IE":208}],207:[function(b,c,a){var d=b("./data");
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
};c.exports=f},{"./data":209}],208:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],209:[function(b,c,a){arguments[4][139][0].apply(a,arguments)
},{dup:139}],210:[function(c,d,b){var a=function(){var h="";var g;for(g=0;g<arguments.length;
g++){if(g>0){h+=","}h+=arguments[g]}return h};d.exports=function f(i,h){h=h||a;
var g=function(){var j=arguments;var k=h.apply(this,j);if(!(k in g.cache)){g.cache[k]=i.apply(this,j)
}return g.cache[k]};g.cache={};return g}},{}],211:[function(b,c,a){c.exports=function d(g){var f;
return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)}return f
}}},{}],212:[function(b,c,a){arguments[4][24][0].apply(a,arguments)},{"./shared/camelCasedEventTypes":215,"./shared/prefixHelper":217,"./utils/eventTypeAvailable":220,dup:24}],213:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":216,"./shared/prefixHelper":217,"./shared/stylePropertyCache":218,"./utils/toCSS":221,"./utils/toDOM":222}],214:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":213,"./shared/prefixHelper":217,"./shared/stylePropertyCache":218,"./shared/styleValueAvailable":219}],215:[function(b,c,a){arguments[4][25][0].apply(a,arguments)
},{dup:25}],216:[function(c,d,b){var f;d.exports=function a(){if(!f){f=document.createElement("_")
}else{f.style.cssText="";f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null
}},{}],217:[function(b,c,a){arguments[4][26][0].apply(a,arguments)},{dup:26}],218:[function(b,c,a){c.exports={}
},{}],219:[function(c,b,d){var a=c("./stylePropertyCache");var f=c("./getStyleTestElement");
var i=false;var k;var j;var g=function(){var l;if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);
j=false;l=f();try{l.style.width="invalid"}catch(m){j=true}}};b.exports=function h(o,n){var m;
var l;g();if(k){o=a[o].css;return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n
}catch(p){return false}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":216,"./stylePropertyCache":218}],220:[function(b,c,a){arguments[4][27][0].apply(a,arguments)
},{dup:27}],221:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],222:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],223:[function(c,d,b){var g=c("./helpers/globals");var f=c("ac-function/once");
function a(){var j=g.getWindow();var h=false;try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":197,"ac-function/once":211}],224:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":197,"ac-function/once":211}],225:[function(b,c,a){var g=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
}c.exports=d(f);c.exports.original=f},{"ac-function/once":211,"ac-prefixer/getStyleValue":214}],226:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":197,"ac-function/once":211}],227:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
if(typeof i.getContext==="function"){return !!(i.getContext("webgl")||i.getContext("experimental-webgl"))
}return false}d.exports=f(a);d.exports.original=a},{"./helpers/globals":197,"ac-function/once":211}],228:[function(b,c,a){arguments[4][206][0].apply(a,arguments)
},{"./ac-browser/BrowserData":229,"./ac-browser/IE":230,dup:206}],229:[function(b,c,a){b("ac-polyfills/Array/prototype.filter");
b("ac-polyfills/Array/prototype.some");var d=b("./data");function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;
if(!h||!i){return}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
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
};c.exports=f},{"./data":231,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.some":1499}],230:[function(b,c,a){arguments[4][208][0].apply(a,arguments)
},{dup:208}],231:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],232:[function(b,c,a){arguments[4][21][0].apply(a,arguments)},{"./shared/getEventType":241,"./utils/addEventListener":245,dup:21}],233:[function(b,c,a){arguments[4][22][0].apply(a,arguments)
},{"./shared/getEventType":241,"./utils/dispatchEvent":246,dup:22}],234:[function(b,c,a){arguments[4][23][0].apply(a,arguments)
},{"./addEventListener":232,"./dispatchEvent":233,"./preventDefault":239,"./removeEventListener":240,"./stop":242,"./stopPropagation":243,"./target":244,dup:23}],235:[function(b,c,a){arguments[4][24][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":236,"./shared/prefixHelper":237,"./utils/eventTypeAvailable":238,dup:24}],236:[function(b,c,a){arguments[4][25][0].apply(a,arguments)
},{dup:25}],237:[function(b,c,a){arguments[4][26][0].apply(a,arguments)},{dup:26}],238:[function(b,c,a){arguments[4][27][0].apply(a,arguments)
},{dup:27}],239:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],240:[function(b,c,a){arguments[4][29][0].apply(a,arguments)
},{"./shared/getEventType":241,"./utils/removeEventListener":247,dup:29}],241:[function(b,c,a){arguments[4][30][0].apply(a,arguments)
},{"ac-prefixer/getEventType":235,dup:30}],242:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{"./preventDefault":239,"./stopPropagation":243,dup:31}],243:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{dup:32}],244:[function(b,c,a){arguments[4][33][0].apply(a,arguments)},{dup:33}],245:[function(b,c,a){arguments[4][34][0].apply(a,arguments)
},{dup:34}],246:[function(b,c,a){arguments[4][35][0].apply(a,arguments)},{"ac-polyfills/CustomEvent":1500,dup:35}],247:[function(b,c,a){arguments[4][36][0].apply(a,arguments)
},{dup:36}],248:[function(b,c,a){arguments[4][78][0].apply(a,arguments)},{"./internal/validate":255,"./matchesSelector":257,"ac-dom-nodes/isElement":268,dup:78}],249:[function(b,c,a){arguments[4][79][0].apply(a,arguments)
},{"./internal/validate":255,"./matchesSelector":257,"ac-dom-nodes/isElement":268,dup:79}],250:[function(b,c,a){arguments[4][80][0].apply(a,arguments)
},{"./filterBySelector":251,"./internal/validate":255,"ac-dom-nodes/filterByNodeType":265,dup:80}],251:[function(b,c,a){arguments[4][81][0].apply(a,arguments)
},{"./internal/validate":255,"./matchesSelector":257,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:81}],252:[function(b,c,a){arguments[4][82][0].apply(a,arguments)
},{"./children":250,"./internal/validate":255,dup:82}],253:[function(b,c,a){arguments[4][83][0].apply(a,arguments)
},{"./ancestor":248,"./ancestors":249,"./children":250,"./filterBySelector":251,"./firstChild":252,"./lastChild":256,"./matchesSelector":257,"./nextSibling":258,"./nextSiblings":259,"./previousSibling":270,"./previousSiblings":271,"./querySelector":272,"./querySelectorAll":273,"./siblings":276,dup:83}],254:[function(b,c,a){arguments[4][84][0].apply(a,arguments)
},{dup:84}],255:[function(b,c,a){arguments[4][85][0].apply(a,arguments)},{"ac-dom-nodes/COMMENT_NODE":260,"ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":261,"ac-dom-nodes/DOCUMENT_NODE":262,"ac-dom-nodes/ELEMENT_NODE":263,"ac-dom-nodes/TEXT_NODE":264,"ac-dom-nodes/isNode":269,"ac-polyfills/Array/prototype.indexOf":1497,dup:85}],256:[function(b,c,a){arguments[4][86][0].apply(a,arguments)
},{"./children":250,"./internal/validate":255,dup:86}],257:[function(b,c,a){arguments[4][87][0].apply(a,arguments)
},{"./internal/nativeMatches":254,"./internal/validate":255,"./vendor/sizzle/sizzle":277,"ac-dom-nodes/isElement":268,dup:87}],258:[function(b,c,a){arguments[4][88][0].apply(a,arguments)
},{"./internal/validate":255,"./matchesSelector":257,"ac-dom-nodes/isElement":268,dup:88}],259:[function(b,c,a){arguments[4][89][0].apply(a,arguments)
},{"./internal/validate":255,"./matchesSelector":257,"ac-dom-nodes/isElement":268,dup:89}],260:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{dup:42}],261:[function(b,c,a){arguments[4][43][0].apply(a,arguments)},{dup:43}],262:[function(b,c,a){arguments[4][44][0].apply(a,arguments)
},{dup:44}],263:[function(b,c,a){arguments[4][46][0].apply(a,arguments)},{dup:46}],264:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],265:[function(b,c,a){arguments[4][49][0].apply(a,arguments)},{"./ELEMENT_NODE":263,"./internal/isNodeType":266,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:49}],266:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"../isNode":269,dup:57}],267:[function(b,c,a){arguments[4][61][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":261,"./internal/isNodeType":266,dup:61}],268:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{"./ELEMENT_NODE":263,"./internal/isNodeType":266,dup:63}],269:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],270:[function(b,c,a){arguments[4][90][0].apply(a,arguments)},{"./internal/validate":255,"./matchesSelector":257,"ac-dom-nodes/isElement":268,dup:90}],271:[function(b,c,a){arguments[4][91][0].apply(a,arguments)
},{"./internal/validate":255,"./matchesSelector":257,"ac-dom-nodes/isElement":268,dup:91}],272:[function(b,c,a){arguments[4][92][0].apply(a,arguments)
},{"./internal/validate":255,"./shims/querySelector":274,dup:92}],273:[function(b,c,a){arguments[4][93][0].apply(a,arguments)
},{"./internal/validate":255,"./shims/querySelectorAll":275,"ac-polyfills/Array/prototype.slice":1498,dup:93}],274:[function(b,c,a){arguments[4][94][0].apply(a,arguments)
},{"./querySelectorAll":275,dup:94}],275:[function(b,c,a){arguments[4][95][0].apply(a,arguments)
},{"../children":250,"../vendor/sizzle/sizzle":277,"ac-dom-nodes/isDocumentFragment":267,"ac-polyfills/Array/prototype.forEach":1496,dup:95}],276:[function(b,c,a){arguments[4][96][0].apply(a,arguments)
},{"./children":250,"./internal/validate":255,dup:96}],277:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],278:[function(b,c,a){arguments[4][11][0].apply(a,arguments)},{"./ac-event-emitter/EventEmitter":279,dup:11}],279:[function(b,c,a){arguments[4][12][0].apply(a,arguments)
},{dup:12}],280:[function(b,c,a){arguments[4][206][0].apply(a,arguments)},{"./ac-browser/BrowserData":281,"./ac-browser/IE":282,dup:206}],281:[function(b,c,a){arguments[4][207][0].apply(a,arguments)
},{"./data":283,dup:207}],282:[function(b,c,a){arguments[4][208][0].apply(a,arguments)
},{dup:208}],283:[function(b,c,a){arguments[4][139][0].apply(a,arguments)},{dup:139}],284:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":285,dup:69}],285:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":286,dup:70}],286:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],287:[function(c,d,b){var h=c("./ac-feature/helpers/memoize");var f=["cssPropertyAvailable","isRetina"];
var g;var a={canvasAvailable:c("./ac-feature/canvasAvailable"),continuousScrollEventsAvailable:c("./ac-feature/continuousScrollEventsAvailable"),cookiesAvailable:c("./ac-feature/cookiesAvailable"),cssLinearGradientAvailable:c("./ac-feature/cssLinearGradientAvailable"),cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),isDesktop:c("./ac-feature/isDesktop"),isHandheld:c("./ac-feature/isHandheld"),isRetina:c("./ac-feature/isRetina"),isTablet:c("./ac-feature/isTablet"),localStorageAvailable:c("./ac-feature/localStorageAvailable"),mediaElementsAvailable:c("./ac-feature/mediaElementsAvailable"),sessionStorageAvailable:c("./ac-feature/sessionStorageAvailable"),svgAvailable:c("./ac-feature/svgAvailable"),threeDTransformsAvailable:c("./ac-feature/threeDTransformsAvailable"),touchAvailable:c("./ac-feature/touchAvailable"),webGLAvailable:c("./ac-feature/webGLAvailable")};
for(g in a){if(f.indexOf(g)===-1){a[g]=h(a[g])}}d.exports=a},{"./ac-feature/canvasAvailable":288,"./ac-feature/continuousScrollEventsAvailable":289,"./ac-feature/cookiesAvailable":290,"./ac-feature/cssLinearGradientAvailable":291,"./ac-feature/cssPropertyAvailable":292,"./ac-feature/helpers/memoize":294,"./ac-feature/isDesktop":295,"./ac-feature/isHandheld":296,"./ac-feature/isRetina":297,"./ac-feature/isTablet":298,"./ac-feature/localStorageAvailable":299,"./ac-feature/mediaElementsAvailable":300,"./ac-feature/sessionStorageAvailable":301,"./ac-feature/svgAvailable":302,"./ac-feature/threeDTransformsAvailable":303,"./ac-feature/touchAvailable":304,"./ac-feature/webGLAvailable":305}],288:[function(b,c,a){var f=b("./helpers/globals");
c.exports=function d(){var g=f.getDocument();var h=g.createElement("canvas");return !!(typeof h.getContext==="function"&&h.getContext("2d"))
}},{"./helpers/globals":293}],289:[function(c,d,b){var g=c("ac-browser");var a=c("./touchAvailable");
d.exports=function f(){return(!a()||(g.os==="iOS"&&g.version>=8)||g.name==="Chrome")
}},{"./touchAvailable":304,"ac-browser":280}],290:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var j=false;var g=f.getDocument();var i=f.getNavigator();
try{if("cookie" in g&&!!i.cookieEnabled){g.cookie="ac_feature_cookie=1";j=(g.cookie.indexOf("ac_feature_cookie")!==-1);
g.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}catch(h){}return j
}},{"./helpers/globals":293}],291:[function(d,f,c){var a=d("./cssPropertyAvailable");
f.exports=function b(){var g=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return g.some(function(h){return a("background-image",h)})}},{"./cssPropertyAvailable":292}],292:[function(c,d,b){var f=c("ac-prefixer");
d.exports=function a(h,g){if(typeof g!=="undefined"){return !!f.getStyleValue(h,g)
}else{return !!f.getStyleProperty(h)}}},{"ac-prefixer":284}],293:[function(b,c,a){arguments[4][197][0].apply(a,arguments)
},{dup:197}],294:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f!=="undefined"){return f
}else{return f=g()}}}},{}],295:[function(d,f,b){var a=d("./touchAvailable");var g=d("./helpers/globals");
f.exports=function c(){var h=g.getWindow();return(!a()&&!h.orientation)}},{"./helpers/globals":293,"./touchAvailable":304}],296:[function(f,g,c){var d=f("./isDesktop");
var a=f("./isTablet");g.exports=function b(){return(!d()&&!a())}},{"./isDesktop":295,"./isTablet":298}],297:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":293}],298:[function(d,f,b){var c=d("./isDesktop");var g=d("./helpers/globals");
f.exports=function a(){var i=g.getWindow();var h=i.screen.width;if(i.orientation&&i.screen.height<h){h=i.screen.height
}return(!c()&&h>=600)}},{"./helpers/globals":293,"./isDesktop":295}],299:[function(c,d,a){var f=c("./helpers/globals");
d.exports=function b(){var i=f.getWindow();var h=false;try{h=!!(i.localStorage&&i.localStorage.non_existent!==null)
}catch(g){}return h}},{"./helpers/globals":293}],300:[function(b,c,a){var f=b("./helpers/globals");
c.exports=function d(){var g=f.getWindow();return("HTMLMediaElement" in g)}},{"./helpers/globals":293}],301:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var i=f.getWindow();var g=false;try{if("sessionStorage" in i&&typeof i.sessionStorage.setItem==="function"){i.sessionStorage.setItem("ac_feature","test");
g=true;i.sessionStorage.removeItem("ac_feature","test")}}catch(h){}return g}},{"./helpers/globals":293}],302:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var g=f.getDocument();return g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}},{"./helpers/globals":293}],303:[function(c,d,b){var a=c("./cssPropertyAvailable");
d.exports=function f(){return(a("perspective","1px")&&a("transform","translateZ(0)"))
}},{"./cssPropertyAvailable":292}],304:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var h=f.getWindow();var g=f.getDocument();return !!(("ontouchstart" in h)||h.DocumentTouch&&g instanceof h.DocumentTouch)
}},{"./helpers/globals":293}],305:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var g=f.getDocument();var h=g.createElement("canvas");return !!(typeof h.getContext==="function"&&h.getContext("webgl"))
}},{"./helpers/globals":293}],306:[function(b,c,a){c.exports=b("./ac-fullscreen/fullscreen")
},{"./ac-fullscreen/fullscreen":312}],307:[function(b,c,a){c.exports={STANDARD:"standard",IOS:"ios"}
},{}],308:[function(f,c,i){var h=f("ac-dom-events/addEventListener");var m=f("ac-event-emitter").EventEmitter;
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
}};d.mode=b.STANDARD;c.exports=d},{"./../consts/modes":307,"./../events/types":311,"ac-dom-events/addEventListener":232,"ac-event-emitter":278}],309:[function(c,d,a){var b=c("./ios");
var f=c("./desktop");d.exports={create:function(){var g=f;if("webkitEnterFullscreen" in document.createElement("video")&&!("webkitRequestFullScreen" in document.createElement("div"))){g=b
}return g}}},{"./desktop":308,"./ios":310}],310:[function(f,d,h){var g=f("ac-dom-events/addEventListener");
var m=f("ac-event-emitter").EventEmitter;var a=f("./../events/types");var c=f("./../consts/modes");
var l;b();function b(){g(document,"webkitbeginfullscreen",k,true);g(document,"webkitendfullscreen",j,true)
}function k(n){i.trigger(a.ENTERFULLSCREEN,n)}function j(n){l=undefined;i.trigger(a.EXITFULLSCREEN,n)
}var i=new m();i.fullscreenEnabled=function(n){return !!(n.webkitSupportsFullscreen)
};i.fullscreenElement=function(){return l};i.exitFullscreen=function(n){if(n&&typeof n.webkitExitFullscreen==="function"){n.webkitExitFullscreen()
}};i.requestFullscreen=function(n){if(typeof n.webkitEnterFullscreen==="function"){n.webkitEnterFullscreen()
}};i.mode=c.IOS;d.exports=i},{"./../consts/modes":307,"./../events/types":311,"ac-dom-events/addEventListener":232,"ac-event-emitter":278}],311:[function(b,c,a){c.exports={ENTERFULLSCREEN:"enterfullscreen",EXITFULLSCREEN:"exitfullscreen"}
},{}],312:[function(c,b,d){var j=c("ac-event-emitter").EventEmitter;var h=c("./delegate/factory");
var a="Error: Element missing. ac-fullscreen requires an element to be specified";
var g=new j();var f=h.create();f.propagateTo(g);function i(){throw new Error(a)
}g.requestFullscreen=function(k){if(!k){i()}return f.requestFullscreen(k)};g.fullscreenEnabled=function(k){if(!k){i()
}return f.fullscreenEnabled(k)};g.fullscreenElement=function(){return f.fullscreenElement()
};g.exitFullscreen=function(k){if(!k){i()}return f.exitFullscreen(k)};g.getMode=function(){return f.mode
};b.exports=g},{"./delegate/factory":309,"ac-event-emitter":278}],313:[function(b,c,a){c.exports={TouchClick:b("./ac-gesture-touchclick/TouchClick")}
},{"./ac-gesture-touchclick/TouchClick":314}],314:[function(c,b,d){var g=c("ac-dom-events");
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
return new i({el:l})};b.exports=i},{"ac-dom-events":234,"ac-event-emitter":278,"ac-feature":287,"ac-object":1488}],315:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":316,dup:69}],316:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":317,dup:70}],317:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],318:[function(b,c,a){c.exports={addEventListener:b("./ac-dom-events/addEventListener"),dispatchEvent:b("./ac-dom-events/dispatchEvent"),removeEventListener:b("./ac-dom-events/removeEventListener"),stop:b("./ac-dom-events/stop"),target:b("./ac-dom-events/target")}
},{"./ac-dom-events/addEventListener":319,"./ac-dom-events/dispatchEvent":320,"./ac-dom-events/removeEventListener":321,"./ac-dom-events/stop":322,"./ac-dom-events/target":323}],319:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.addEventListener){j.addEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.attachEvent(h,i)}return j}},{"ac-prefixer":315}],320:[function(b,c,a){c.exports=function d(i,h,g){var f;
h=h.toLowerCase();if(window.CustomEvent){if(g){f=new CustomEvent(h,g)}else{f=new CustomEvent(h)
}i.dispatchEvent(f)}else{f=document.createEventObject();if(g&&"detail" in g){f.detail=g.detail
}i.fireEvent("on"+h,f)}return i}},{}],321:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.removeEventListener){j.removeEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.detachEvent(h,i)}return j}},{"ac-prefixer":315}],322:[function(b,d,a){d.exports=function c(f){if(!f){f=window.event
}if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}if(f.preventDefault){f.preventDefault()
}f.stopped=true;f.returnValue=false}},{}],323:[function(b,c,a){c.exports=function d(f){return(typeof f.target!=="undefined")?f.target:f.srcElement
}},{}],324:[function(c,d,b){var a=c("./ac-keyboard/Keyboard");d.exports=new a();
d.exports.Keyboard=a;d.exports.keys=c("./ac-keyboard/keymap")},{"./ac-keyboard/Keyboard":326,"./ac-keyboard/keymap":327}],325:[function(c,d,b){var a=["keyLocation"];
function f(g){this.originalEvent=g;var h;for(h in g){if(typeof g[h]!=="function"&&a.indexOf(h)===-1){this[h]=g[h]
}}this.location=(this.originalEvent.keyLocation===undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}f.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};d.exports=f},{}],326:[function(f,c,h){var j=f("ac-dom-events");var n=f("ac-event-emitter").EventEmitter;
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
}};i._normalizeKeyboardEvent=function(o){return new g(o)};c.exports=b},{"./KeyEvent":325,"./keymap":327,"ac-dom-events":318,"ac-event-emitter":278}],327:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],328:[function(b,c,a){arguments[4][206][0].apply(a,arguments)},{"./ac-browser/BrowserData":329,"./ac-browser/IE":330,dup:206}],329:[function(b,c,a){arguments[4][207][0].apply(a,arguments)
},{"./data":331,dup:207}],330:[function(b,c,a){arguments[4][208][0].apply(a,arguments)
},{dup:208}],331:[function(b,c,a){arguments[4][139][0].apply(a,arguments)},{dup:139}],332:[function(b,c,a){c.exports={add:b("./ac-classlist/add"),contains:b("./ac-classlist/contains"),remove:b("./ac-classlist/remove"),toggle:b("./ac-classlist/toggle")}
},{"./ac-classlist/add":333,"./ac-classlist/contains":334,"./ac-classlist/remove":336,"./ac-classlist/toggle":337}],333:[function(b,c,a){var d=b("./helpers/className");
c.exports=function f(){var h=Array.prototype.slice.call(arguments);var g=h.shift(h);
if(g.classList&&g.classList.add){g.classList.add.apply(g.classList,h)}else{h.forEach(d.add.bind(this,g))
}}},{"./helpers/className":335}],334:[function(b,d,a){var f=b("./helpers/className");
d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f.contains(h,g)}},{"./helpers/className":335}],335:[function(c,d,a){var h=function(i){return new RegExp("(\\s|^)"+i+"(\\s|$)")
};var g=function(j,i){return h(i).test(j.className)};var f=function(j,i){if(!g(j,i)){j.className+=" "+i
}};var b=function(j,i){if(g(j,i)){j.className=j.className.replace(h(i),"$1").trim()
}};d.exports={contains:g,add:f,remove:b}},{}],336:[function(c,d,b){var f=c("./helpers/className");
d.exports=function a(){var h=Array.prototype.slice.call(arguments);var g=h.shift(h);
if(g.classList&&g.classList.remove){g.classList.remove.apply(g.classList,h)}else{h.forEach(f.remove.bind(this,g))
}}},{"./helpers/className":335}],337:[function(c,d,b){var f=c("./helpers/className");
d.exports=function a(j,i,k){var h=(typeof k!=="undefined");var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)
}return j.classList.toggle(i)}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)
}else{f.remove(j,i)}return g}},{"./helpers/className":335}],338:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":339,dup:69}],339:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":340,dup:70}],340:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],341:[function(b,c,a){c.exports={addEventListener:b("./ac-dom-events/addEventListener"),dispatchEvent:b("./ac-dom-events/dispatchEvent"),preventDefault:b("./ac-dom-events/preventDefault"),removeEventListener:b("./ac-dom-events/removeEventListener"),stop:b("./ac-dom-events/stop"),stopPropagation:b("./ac-dom-events/stopPropagation"),target:b("./ac-dom-events/target")}
},{"./ac-dom-events/addEventListener":342,"./ac-dom-events/dispatchEvent":343,"./ac-dom-events/preventDefault":344,"./ac-dom-events/removeEventListener":345,"./ac-dom-events/stop":346,"./ac-dom-events/stopPropagation":347,"./ac-dom-events/target":348}],342:[function(b,c,a){arguments[4][319][0].apply(a,arguments)
},{"ac-prefixer":338,dup:319}],343:[function(b,c,a){arguments[4][320][0].apply(a,arguments)
},{dup:320}],344:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],345:[function(b,c,a){arguments[4][321][0].apply(a,arguments)
},{"ac-prefixer":338,dup:321}],346:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{"./preventDefault":344,"./stopPropagation":347,dup:31}],347:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{dup:32}],348:[function(b,c,a){c.exports=function d(f){f=f||window.event;return(typeof f.target!=="undefined")?f.target:f.srcElement
}},{}],349:[function(b,c,a){var d={querySelector:b("./ac-dom-traversal/querySelector"),querySelectorAll:b("./ac-dom-traversal/querySelectorAll"),ancestor:b("./ac-dom-traversal/ancestor"),ancestors:b("./ac-dom-traversal/ancestors"),children:b("./ac-dom-traversal/children"),firstChild:b("./ac-dom-traversal/firstChild"),lastChild:b("./ac-dom-traversal/lastChild"),siblings:b("./ac-dom-traversal/siblings"),nextSibling:b("./ac-dom-traversal/nextSibling"),nextSiblings:b("./ac-dom-traversal/nextSiblings"),previousSibling:b("./ac-dom-traversal/previousSibling"),previousSiblings:b("./ac-dom-traversal/previousSiblings"),filterBySelector:b("./ac-dom-traversal/filterBySelector"),matchesSelector:b("./ac-dom-traversal/matchesSelector")};
b("./ac-dom-traversal/shims/ie")(d);c.exports=d},{"./ac-dom-traversal/ancestor":350,"./ac-dom-traversal/ancestors":351,"./ac-dom-traversal/children":352,"./ac-dom-traversal/filterBySelector":353,"./ac-dom-traversal/firstChild":354,"./ac-dom-traversal/lastChild":357,"./ac-dom-traversal/matchesSelector":358,"./ac-dom-traversal/nextSibling":359,"./ac-dom-traversal/nextSiblings":360,"./ac-dom-traversal/previousSibling":361,"./ac-dom-traversal/previousSiblings":362,"./ac-dom-traversal/querySelector":363,"./ac-dom-traversal/querySelectorAll":364,"./ac-dom-traversal/shims/ie":365,"./ac-dom-traversal/siblings":366}],350:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(j,i){h.childNode(j,true,"ancestors");
h.selector(i,false,"ancestors");if(j!==document.body){while((j=j.parentNode)&&a.isElement(j)){if(!i||b(j,i)){return j
}if(j===document.body){break}}}return null}},{"./helpers/validate":356,"./matchesSelector":358,"ac-dom-nodes":371}],351:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"ancestors");h.selector(i,false,"ancestors");if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!i||b(k,i)){j.push(k)
}if(k===document.body){break}}}return j}},{"./helpers/validate":356,"./matchesSelector":358,"ac-dom-nodes":371}],352:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./filterBySelector");var h=d("./helpers/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=a.filterByNodeType(j);if(i){j=b(j,i)}return j}},{"./filterBySelector":353,"./helpers/validate":356,"ac-dom-nodes":371}],353:[function(d,f,c){var b=d("./matchesSelector");
var g=d("./helpers/validate");f.exports=function a(i,h){g.selector(h,true,"filterBySelector");
i=Array.prototype.slice.call(i);return i.filter(function(j){return b(j,h)})}},{"./helpers/validate":356,"./matchesSelector":358}],354:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":352,"./helpers/validate":356}],355:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],356:[function(d,b,f){var j=d("ac-dom-nodes");var a=function(m,l){if(!j.isNode(m)){return false
}if(typeof l==="number"){return(m.nodeType===l)}return(l.indexOf(m.nodeType)!==-1)
};var h=[j.ELEMENT_NODE,j.DOCUMENT_NODE,j.DOCUMENT_FRAGMENT_NODE];var i=" must be an Element, Document, or Document Fragment";
var k=[j.ELEMENT_NODE,j.TEXT_NODE,j.COMMENT_NODE];var g=" must be an Element, TextNode, or Comment";
var c=" must be a string";b.exports={parentNode:function(l,o,n,m){m=m||"node";if((l||o)&&!a(l,h)){throw new TypeError(n+": "+m+i)
}},childNode:function(l,o,n,m){m=m||"node";if(!l&&!o){return}if(!a(l,k)){throw new TypeError(n+": "+m+g)
}},selector:function(l,o,n,m){m=m||"selector";if((l||o)&&typeof l!=="string"){throw new TypeError(n+": "+m+c)
}}}},{"ac-dom-nodes":371}],357:[function(b,d,a){var c=b("./children");var g=b("./helpers/validate");
d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");g.selector(h,false,"lastChild");
if(j.lastElementChild&&!h){return j.lastElementChild}i=c(j,h);if(i.length){return i[i.length-1]
}return null}},{"./children":352,"./helpers/validate":356}],358:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var h=f("./helpers/validate");g.exports=function c(j,i){h.selector(i,true,"matchesSelector");
return b.isElement(j)?a.call(j,i):false}},{"./helpers/nativeMatches":355,"./helpers/validate":356,"ac-dom-nodes":371}],359:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":356,"./matchesSelector":358,"ac-dom-nodes":371}],360:[function(f,g,c){var a=f("ac-dom-nodes");
var b=f("./matchesSelector");var h=f("./helpers/validate");g.exports=function d(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j}},{"./helpers/validate":356,"./matchesSelector":358,"ac-dom-nodes":371}],361:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":356,"./matchesSelector":358,"ac-dom-nodes":371}],362:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j.reverse()}},{"./helpers/validate":356,"./matchesSelector":358,"ac-dom-nodes":371}],363:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelector","context");
f.selector(g,true,"querySelector");return h.querySelector(g)}},{"./helpers/validate":356}],364:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelectorAll","context");
f.selector(g,true,"querySelectorAll");return Array.prototype.slice.call(h.querySelectorAll(g))
}},{"./helpers/validate":356}],365:[function(d,f,c){var g=d("../vendor/sizzle/sizzle");
var b=d("ac-dom-nodes");var a=d("../helpers/nativeMatches");var h=d("../helpers/validate");
f.exports=function(j,i){if(i||!("querySelectorAll" in document)){j.querySelectorAll=function(k,m){var l;
var n;m=m||document;h.parentNode(m,true,"querySelectorAll","context");h.selector(k,true,"querySelectorAll");
if(b.isDocumentFragment(m)){l=j.children(m);n=[];l.forEach(function(p){var o;if(g.matchesSelector(p,k)){n.push(p)
}o=g(k,p);if(o.length){n=n.concat(o)}});return n}return g(k,m)};j.querySelector=function(l,m){var k;
m=m||document;h.parentNode(m,true,"querySelector","context");h.selector(l,true,"querySelector");
k=j.querySelectorAll(l,m);return k.length?k[0]:null}}if(i||!a){j.matchesSelector=function(l,k){return g.matchesSelector(l,k)
}}}},{"../helpers/nativeMatches":355,"../helpers/validate":356,"../vendor/sizzle/sizzle":367,"ac-dom-nodes":371}],366:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":352,"./helpers/validate":356}],367:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],368:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":369}],369:[function(c,b,d){var f;var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g=c("ac-dom-events"),a=c("ac-dom-traversal");
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
}};b.exports=h},{"./DOMEmitterEvent":370,"ac-dom-events":341,"ac-dom-traversal":349,"ac-event-emitter":278}],370:[function(b,c,a){var f=b("ac-dom-events");
var d;var g=function(i,h){this._domEmitter=h;this._originalTarget=f.target(i);this.originalEvent=i||{};
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
};d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
}return false};c.exports=g},{"ac-dom-events":341}],371:[function(d,f,c){var b=d("./ac-dom-nodes/helpers/nodeTypes");
var g;var a={createDocumentFragment:d("./ac-dom-nodes/createDocumentFragment"),filterByNodeType:d("./ac-dom-nodes/filterByNodeType"),insertAfter:d("./ac-dom-nodes/insertAfter"),insertBefore:d("./ac-dom-nodes/insertBefore"),insertFirstChild:d("./ac-dom-nodes/insertFirstChild"),insertLastChild:d("./ac-dom-nodes/insertLastChild"),isComment:d("./ac-dom-nodes/isComment"),isDocument:d("./ac-dom-nodes/isDocument"),isDocumentFragment:d("./ac-dom-nodes/isDocumentFragment"),isDocumentType:d("./ac-dom-nodes/isDocumentType"),isElement:d("./ac-dom-nodes/isElement"),isNode:d("./ac-dom-nodes/isNode"),isNodeList:d("./ac-dom-nodes/isNodeList"),isTextNode:d("./ac-dom-nodes/isTextNode"),remove:d("./ac-dom-nodes/remove"),replace:d("./ac-dom-nodes/replace")};
for(g in b){a[g]=b[g]}f.exports=a},{"./ac-dom-nodes/createDocumentFragment":372,"./ac-dom-nodes/filterByNodeType":373,"./ac-dom-nodes/helpers/nodeTypes":375,"./ac-dom-nodes/insertAfter":377,"./ac-dom-nodes/insertBefore":378,"./ac-dom-nodes/insertFirstChild":379,"./ac-dom-nodes/insertLastChild":380,"./ac-dom-nodes/isComment":381,"./ac-dom-nodes/isDocument":382,"./ac-dom-nodes/isDocumentFragment":383,"./ac-dom-nodes/isDocumentType":384,"./ac-dom-nodes/isElement":385,"./ac-dom-nodes/isNode":386,"./ac-dom-nodes/isNodeList":387,"./ac-dom-nodes/isTextNode":388,"./ac-dom-nodes/remove":389,"./ac-dom-nodes/replace":390}],372:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],373:[function(d,f,c){var g=d("./helpers/isNodeType");var a=d("./helpers/nodeTypes").ELEMENT_NODE;
f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)
})}},{"./helpers/isNodeType":374,"./helpers/nodeTypes":375}],374:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":386}],375:[function(b,c,a){c.exports={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11}
},{}],376:[function(f,c,h){var g=f("./nodeTypes");var b=f("./isNodeType");var j=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var d=" must be an Element, TextNode, Comment, or Document Fragment";var m=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE];
var i=" must be an Element, TextNode, or Comment";var k=[g.ELEMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var l=" must be an Element, or Document Fragment";var a=" must have a parentNode";
c.exports={parentNode:function(n,q,p,o){o=o||"target";if((n||q)&&!b(n,k)){throw new TypeError(p+": "+o+l)
}},childNode:function(n,q,p,o){o=o||"target";if(!n&&!q){return}if(!b(n,m)){throw new TypeError(p+": "+o+i)
}},insertNode:function(n,q,p,o){o=o||"node";if(!n&&!q){return}if(!b(n,j)){throw new TypeError(p+": "+o+d)
}},hasParentNode:function(n,p,o){o=o||"target";if(!n.parentNode){throw new TypeError(p+": "+o+a)
}}}},{"./isNodeType":374,"./nodeTypes":375}],377:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./helpers/validate":376}],378:[function(c,d,a){var f=c("./helpers/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./helpers/validate":376}],379:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./helpers/validate":376}],380:[function(b,c,a){var d=b("./helpers/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./helpers/validate":376}],381:[function(c,d,a){var g=c("./helpers/isNodeType");
var f=c("./helpers/nodeTypes").COMMENT_NODE;d.exports=function b(h){return g(h,f)
}},{"./helpers/isNodeType":374,"./helpers/nodeTypes":375}],382:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":374,"./helpers/nodeTypes":375}],383:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_FRAGMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":374,"./helpers/nodeTypes":375}],384:[function(b,c,a){var g=b("./helpers/isNodeType");
var f=b("./helpers/nodeTypes").DOCUMENT_TYPE_NODE;c.exports=function d(h){return g(h,f)
}},{"./helpers/isNodeType":374,"./helpers/nodeTypes":375}],385:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").ELEMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":374,"./helpers/nodeTypes":375}],386:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],387:[function(b,c,a){arguments[4][65][0].apply(a,arguments)},{dup:65}],388:[function(c,d,a){var g=c("./helpers/isNodeType");
var b=c("./helpers/nodeTypes").TEXT_NODE;d.exports=function f(h){return g(h,b)}
},{"./helpers/isNodeType":374,"./helpers/nodeTypes":375}],389:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g){f.childNode(g,true,"remove");if(!g.parentNode){return g
}return g.parentNode.removeChild(g)}},{"./helpers/validate":376}],390:[function(b,d,a){var f=b("./helpers/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./helpers/validate":376}],391:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":392,dup:69}],392:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":393,dup:70}],393:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],394:[function(b,c,a){c.exports={canvasAvailable:b("./ac-feature/canvasAvailable"),continuousScrollEventsAvailable:b("./ac-feature/continuousScrollEventsAvailable"),cookiesAvailable:b("./ac-feature/cookiesAvailable"),cssLinearGradientAvailable:b("./ac-feature/cssLinearGradientAvailable"),cssPropertyAvailable:b("./ac-feature/cssPropertyAvailable"),isDesktop:b("./ac-feature/isDesktop"),isHandheld:b("./ac-feature/isHandheld"),isRetina:b("./ac-feature/isRetina"),isTablet:b("./ac-feature/isTablet"),localStorageAvailable:b("./ac-feature/localStorageAvailable"),sessionStorageAvailable:b("./ac-feature/sessionStorageAvailable"),svgAvailable:b("./ac-feature/svgAvailable"),threeDTransformsAvailable:b("./ac-feature/threeDTransformsAvailable"),touchAvailable:b("./ac-feature/touchAvailable")}
},{"./ac-feature/canvasAvailable":395,"./ac-feature/continuousScrollEventsAvailable":396,"./ac-feature/cookiesAvailable":397,"./ac-feature/cssLinearGradientAvailable":398,"./ac-feature/cssPropertyAvailable":399,"./ac-feature/isDesktop":400,"./ac-feature/isHandheld":401,"./ac-feature/isRetina":402,"./ac-feature/isTablet":403,"./ac-feature/localStorageAvailable":404,"./ac-feature/sessionStorageAvailable":405,"./ac-feature/svgAvailable":406,"./ac-feature/threeDTransformsAvailable":407,"./ac-feature/touchAvailable":408}],395:[function(b,c,a){var f=null;
c.exports=function d(){var g;if(f===null){g=document.createElement("canvas");f=!!(typeof g.getContext==="function"&&g.getContext("2d"))
}return f}},{}],396:[function(c,d,b){var h=c("ac-browser");var a=c("./touchAvailable");
var f=null;d.exports=function g(){if(f===null){f=(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}return f}},{"./touchAvailable":408,"ac-browser":328}],397:[function(d,f,c){var a=Object.prototype.hasOwnProperty;
var g=null;f.exports=function b(){if(g===null){g=false;try{if("cookie" in document&&!!navigator.cookieEnabled){document.cookie="ac_feature_cookie=1";
g=(document.cookie.indexOf("ac_feature_cookie")!==-1);document.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(h){}}return g}},{}],398:[function(d,f,c){var a=d("./cssPropertyAvailable");
var g=null;f.exports=function b(){var h;if(g===null){h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
g=h.some(function(i){return a("background-image",i)})}return g}},{"./cssPropertyAvailable":399}],399:[function(c,d,b){var f=c("ac-prefixer");
d.exports=function a(h,g){if(g){return !!f.getStyleValue(h,g)}else{return !!f.getStyleProperty(h)
}}},{"ac-prefixer":391}],400:[function(f,g,c){var b=f("./touchAvailable");var a=null;
g.exports=function d(){if(a===null){a=(!b()&&!window.orientation)}return a}},{"./touchAvailable":408}],401:[function(g,h,d){var f=g("./isDesktop");
var b=g("./isTablet");var a=null;h.exports=function c(){if(a===null){a=(!f()&&!b())
}return a}},{"./isDesktop":400,"./isTablet":403}],402:[function(b,c,a){c.exports=function d(){var f=["min-device-pixel-ratio:1.5","-webkit-min-device-pixel-ratio:1.5","min-resolution:1.5dppx","min-resolution:144dpi","min--moz-device-pixel-ratio:1.5"];
var g;if(window.devicePixelRatio!==undefined){if(window.devicePixelRatio>=1.5){return true
}}else{for(g=0;g<f.length;g+=1){if(window.matchMedia("("+f[g]+")").matches===true){return true
}}}return false}},{}],403:[function(f,g,c){var d=f("./isDesktop");var b=null;var h=function(){if(typeof window.orientation==="undefined"){return window.screen.width
}return window.screen.width<window.screen.height?window.screen.width:window.screen.height
};g.exports=function a(){if(b===null){b=(!d()&&h()>=600)}return b}},{"./isDesktop":400}],404:[function(c,d,a){var f=null;
d.exports=function b(){if(f===null){f=false;try{f=!!(window.localStorage&&window.localStorage.non_existent!==null)
}catch(g){}}return f}},{}],405:[function(c,d,b){var f=null;d.exports=function a(){if(f===null){try{if(typeof window.sessionStorage!=="undefined"&&typeof window.sessionStorage.setItem==="function"){window.sessionStorage.setItem("ac_browser_detect","test");
f=true;window.sessionStorage.removeItem("ac_browser_detect","test")}else{f=false
}}catch(g){f=false}}return f}},{}],406:[function(c,d,b){var f=null;d.exports=function a(){if(f===null){f=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}return f}},{}],407:[function(c,d,b){var a=c("./cssPropertyAvailable");var g=null;
d.exports=function f(){if(g===null){g=(a("perspective","1px")&&a("transform","translateZ(0)"))
}return g}},{"./cssPropertyAvailable":399}],408:[function(c,d,b){var f=null;d.exports=function a(){if(f===null){f=!!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch)
}return f}},{}],409:[function(b,c,a){arguments[4][98][0].apply(a,arguments)},{dup:98}],410:[function(b,c,a){arguments[4][99][0].apply(a,arguments)
},{"./ac-object/clone":411,"./ac-object/create":412,"./ac-object/defaults":413,"./ac-object/extend":414,"./ac-object/getPrototypeOf":415,"./ac-object/isDate":416,"./ac-object/isEmpty":417,"./ac-object/isRegExp":418,"./ac-object/toQueryParameters":419,dup:99}],411:[function(b,c,a){arguments[4][100][0].apply(a,arguments)
},{"./extend":414,dup:100}],412:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],413:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":414,dup:102}],414:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{dup:103}],415:[function(b,c,a){arguments[4][104][0].apply(a,arguments)},{dup:104}],416:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],417:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],418:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],419:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108,qs:409}],420:[function(b,c,a){var d=b("./ac-modal-video/ModalVideo");
d.create=b("./ac-modal-video/factory/create");c.exports={ModalVideo:d}},{"./ac-modal-video/ModalVideo":421,"./ac-modal-video/factory/create":424}],421:[function(f,c,i){var d=f("ac-modal");
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
};l._pause=function(){this._delegate.pause()};c.exports=j},{"./delegate/Default":422,"./delegate/Mobile":423,"./featureDetect/featureDetect":426,"ac-classlist":332,"ac-event-emitter":278,"ac-modal":478,"ac-object":410}],422:[function(c,d,a){function b(h,i,g){this.player=h;
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
this.player.off("timeupdate",this._onTimeUpdateOnce)};d.exports=b},{}],423:[function(c,f,a){var b=c("ac-object");
var h=c("./Default");function d(){h.apply(this,arguments)}var g=d.prototype=b.create(h.prototype);
g.open=function(){this.player.play()};f.exports=d},{"./Default":422,"ac-object":410}],424:[function(d,f,b){var h=d("./../ModalVideo");
var g=d("ac-dom-emitter").DOMEmitter;var a=d("./router");f.exports=function c(l,k){k=k||{};
var j=new h(l,k);var i;if(k.deepLink){i=a.createOrGet();i.createRoute(k.deepLink,j.open,j);
i.start()}if(k.triggerSelector){var m=new g(document);m.on("click",k.triggerSelector,function(n){n.preventDefault();
j.open()},j)}return j}},{"./../ModalVideo":421,"./router":425,"ac-dom-emitter":368}],425:[function(d,f,c){var b=d("ac-router");
var a=null;f.exports={create:function(){a=new b.Router({hashChange:true,pushState:false})
},get:function(){return a},destroy:function(){a=null},createOrGet:function(){if(a===null){this.create()
}return this.get()}}},{"ac-router":543}],426:[function(c,d,b){var f=c("ac-browser");
var a=c("ac-feature");d.exports={shouldPlayInModal:function(){return !(a.isHandheld()&&f.os.toLowerCase()==="ios")
}}},{"ac-browser":328,"ac-feature":394}],427:[function(b,c,a){arguments[4][332][0].apply(a,arguments)
},{"./ac-classlist/add":428,"./ac-classlist/contains":429,"./ac-classlist/remove":431,"./ac-classlist/toggle":432,dup:332}],428:[function(b,c,a){arguments[4][333][0].apply(a,arguments)
},{"./helpers/className":430,dup:333}],429:[function(b,c,a){arguments[4][334][0].apply(a,arguments)
},{"./helpers/className":430,dup:334}],430:[function(b,c,a){arguments[4][335][0].apply(a,arguments)
},{dup:335}],431:[function(b,c,a){arguments[4][336][0].apply(a,arguments)},{"./helpers/className":430,dup:336}],432:[function(b,c,a){arguments[4][337][0].apply(a,arguments)
},{"./helpers/className":430,dup:337}],433:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":434,dup:69}],434:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":435,dup:70}],435:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],436:[function(b,c,a){arguments[4][318][0].apply(a,arguments)},{"./ac-dom-events/addEventListener":437,"./ac-dom-events/dispatchEvent":438,"./ac-dom-events/removeEventListener":439,"./ac-dom-events/stop":440,"./ac-dom-events/target":441,dup:318}],437:[function(b,c,a){arguments[4][319][0].apply(a,arguments)
},{"ac-prefixer":433,dup:319}],438:[function(b,c,a){arguments[4][320][0].apply(a,arguments)
},{dup:320}],439:[function(b,c,a){arguments[4][321][0].apply(a,arguments)},{"ac-prefixer":433,dup:321}],440:[function(b,c,a){arguments[4][322][0].apply(a,arguments)
},{dup:322}],441:[function(b,c,a){arguments[4][323][0].apply(a,arguments)},{dup:323}],442:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{dup:42}],443:[function(b,c,a){arguments[4][43][0].apply(a,arguments)},{dup:43}],444:[function(b,c,a){arguments[4][44][0].apply(a,arguments)
},{dup:44}],445:[function(b,c,a){arguments[4][45][0].apply(a,arguments)},{dup:45}],446:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{dup:46}],447:[function(b,c,a){arguments[4][47][0].apply(a,arguments)},{dup:47}],448:[function(b,c,a){arguments[4][48][0].apply(a,arguments)
},{dup:48}],449:[function(b,c,a){arguments[4][49][0].apply(a,arguments)},{"./ELEMENT_NODE":446,"./internal/isNodeType":457,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:49}],450:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{dup:50}],451:[function(b,c,a){arguments[4][51][0].apply(a,arguments)},{"./COMMENT_NODE":442,"./DOCUMENT_FRAGMENT_NODE":443,"./DOCUMENT_NODE":444,"./DOCUMENT_TYPE_NODE":445,"./ELEMENT_NODE":446,"./TEXT_NODE":447,"./createDocumentFragment":448,"./filterByNodeType":449,"./hasAttribute":450,"./indexOf":452,"./insertAfter":453,"./insertBefore":454,"./insertFirstChild":455,"./insertLastChild":456,"./isComment":459,"./isDocument":460,"./isDocumentFragment":461,"./isDocumentType":462,"./isElement":463,"./isNode":464,"./isNodeList":465,"./isTextNode":466,"./remove":467,"./replace":468,dup:51}],452:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"./filterByNodeType":449,"./internal/validate":458,"ac-polyfills/Array/prototype.indexOf":1497,"ac-polyfills/Array/prototype.slice":1498,dup:52}],453:[function(b,c,a){arguments[4][53][0].apply(a,arguments)
},{"./internal/validate":458,dup:53}],454:[function(b,c,a){arguments[4][54][0].apply(a,arguments)
},{"./internal/validate":458,dup:54}],455:[function(b,c,a){arguments[4][55][0].apply(a,arguments)
},{"./internal/validate":458,dup:55}],456:[function(b,c,a){arguments[4][56][0].apply(a,arguments)
},{"./internal/validate":458,dup:56}],457:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"../isNode":464,dup:57}],458:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{"../COMMENT_NODE":442,"../DOCUMENT_FRAGMENT_NODE":443,"../ELEMENT_NODE":446,"../TEXT_NODE":447,"./isNodeType":457,dup:58}],459:[function(b,c,a){arguments[4][59][0].apply(a,arguments)
},{"./COMMENT_NODE":442,"./internal/isNodeType":457,dup:59}],460:[function(b,c,a){arguments[4][60][0].apply(a,arguments)
},{"./DOCUMENT_NODE":444,"./internal/isNodeType":457,dup:60}],461:[function(b,c,a){arguments[4][61][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":443,"./internal/isNodeType":457,dup:61}],462:[function(b,c,a){arguments[4][62][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":445,"./internal/isNodeType":457,dup:62}],463:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{"./ELEMENT_NODE":446,"./internal/isNodeType":457,dup:63}],464:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],465:[function(b,c,a){arguments[4][65][0].apply(a,arguments)},{dup:65}],466:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"./TEXT_NODE":447,"./internal/isNodeType":457,dup:66}],467:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"./internal/validate":458,dup:67}],468:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{"./internal/validate":458,dup:68}],469:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":470,dup:69}],470:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":471,dup:70}],471:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],472:[function(b,c,a){arguments[4][72][0].apply(a,arguments)},{"./ac-dom-styles/getStyle":473,"./ac-dom-styles/setStyle":476,dup:72}],473:[function(b,c,a){arguments[4][73][0].apply(a,arguments)
},{"./shim/getComputedStyle":477,"ac-prefixer":469,dup:73}],474:[function(b,c,a){arguments[4][74][0].apply(a,arguments)
},{dup:74}],475:[function(b,c,a){arguments[4][75][0].apply(a,arguments)},{dup:75}],476:[function(b,c,a){arguments[4][76][0].apply(a,arguments)
},{"./helpers/combinePartialProperties":474,"./helpers/cssToObject":475,"ac-prefixer":469,dup:76}],477:[function(b,c,a){arguments[4][77][0].apply(a,arguments)
},{dup:77}],478:[function(b,c,a){c.exports={Modal:b("./ac-modal/Modal")}},{"./ac-modal/Modal":479}],479:[function(d,c,g){var b=d("ac-classlist");
var l=d("ac-dom-styles");var n=d("ac-dom-events");var m=d("ac-dom-nodes");var k=d("ac-dom-traversal");
var f=d("ac-object");var i=d("ac-keyboard");var o=i.keys;var p=d("ac-event-emitter").EventEmitter;
var a=document.documentElement;var h;function j(q){this.opened=false;this.closeButton=null;
this.modalEl=null;this.contentEl=null;this._keysToClose=[o.ESCAPE];this._keysToOpen=[];
this._boundClose=this.close.bind(this);this._generateElements();if(q){this.appendContent(q)
}}var h=j.prototype=f.create(p.prototype);h._getScrollX=function(){var r=window.pageXOffset;
if(!r){var q=document.documentElement||document.body.parentNode||document.body;
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
};c.exports=j},{"ac-classlist":427,"ac-dom-events":436,"ac-dom-nodes":451,"ac-dom-styles":472,"ac-dom-traversal":253,"ac-event-emitter":278,"ac-keyboard":324,"ac-object":1488}],480:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":481,dup:69}],481:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":482,dup:70}],482:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],483:[function(b,c,a){arguments[4][341][0].apply(a,arguments)},{"./ac-dom-events/addEventListener":484,"./ac-dom-events/dispatchEvent":485,"./ac-dom-events/preventDefault":486,"./ac-dom-events/removeEventListener":487,"./ac-dom-events/stop":488,"./ac-dom-events/stopPropagation":489,"./ac-dom-events/target":490,dup:341}],484:[function(b,c,a){arguments[4][319][0].apply(a,arguments)
},{"ac-prefixer":480,dup:319}],485:[function(b,c,a){arguments[4][320][0].apply(a,arguments)
},{dup:320}],486:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],487:[function(b,c,a){arguments[4][321][0].apply(a,arguments)
},{"ac-prefixer":480,dup:321}],488:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{"./preventDefault":486,"./stopPropagation":489,dup:31}],489:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{dup:32}],490:[function(b,c,a){arguments[4][348][0].apply(a,arguments)},{dup:348}],491:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{dup:42}],492:[function(b,c,a){arguments[4][43][0].apply(a,arguments)},{dup:43}],493:[function(b,c,a){arguments[4][44][0].apply(a,arguments)
},{dup:44}],494:[function(b,c,a){arguments[4][45][0].apply(a,arguments)},{dup:45}],495:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{dup:46}],496:[function(b,c,a){arguments[4][47][0].apply(a,arguments)},{dup:47}],497:[function(b,c,a){arguments[4][48][0].apply(a,arguments)
},{dup:48}],498:[function(b,c,a){arguments[4][49][0].apply(a,arguments)},{"./ELEMENT_NODE":495,"./internal/isNodeType":506,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:49}],499:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{dup:50}],500:[function(b,c,a){arguments[4][51][0].apply(a,arguments)},{"./COMMENT_NODE":491,"./DOCUMENT_FRAGMENT_NODE":492,"./DOCUMENT_NODE":493,"./DOCUMENT_TYPE_NODE":494,"./ELEMENT_NODE":495,"./TEXT_NODE":496,"./createDocumentFragment":497,"./filterByNodeType":498,"./hasAttribute":499,"./indexOf":501,"./insertAfter":502,"./insertBefore":503,"./insertFirstChild":504,"./insertLastChild":505,"./isComment":508,"./isDocument":509,"./isDocumentFragment":510,"./isDocumentType":511,"./isElement":512,"./isNode":513,"./isNodeList":514,"./isTextNode":515,"./remove":516,"./replace":517,dup:51}],501:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"./filterByNodeType":498,"./internal/validate":507,"ac-polyfills/Array/prototype.indexOf":1497,"ac-polyfills/Array/prototype.slice":1498,dup:52}],502:[function(b,c,a){arguments[4][53][0].apply(a,arguments)
},{"./internal/validate":507,dup:53}],503:[function(b,c,a){arguments[4][54][0].apply(a,arguments)
},{"./internal/validate":507,dup:54}],504:[function(b,c,a){arguments[4][55][0].apply(a,arguments)
},{"./internal/validate":507,dup:55}],505:[function(b,c,a){arguments[4][56][0].apply(a,arguments)
},{"./internal/validate":507,dup:56}],506:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"../isNode":513,dup:57}],507:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{"../COMMENT_NODE":491,"../DOCUMENT_FRAGMENT_NODE":492,"../ELEMENT_NODE":495,"../TEXT_NODE":496,"./isNodeType":506,dup:58}],508:[function(b,c,a){arguments[4][59][0].apply(a,arguments)
},{"./COMMENT_NODE":491,"./internal/isNodeType":506,dup:59}],509:[function(b,c,a){arguments[4][60][0].apply(a,arguments)
},{"./DOCUMENT_NODE":493,"./internal/isNodeType":506,dup:60}],510:[function(b,c,a){arguments[4][61][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":492,"./internal/isNodeType":506,dup:61}],511:[function(b,c,a){arguments[4][62][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":494,"./internal/isNodeType":506,dup:62}],512:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{"./ELEMENT_NODE":495,"./internal/isNodeType":506,dup:63}],513:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],514:[function(b,c,a){arguments[4][65][0].apply(a,arguments)},{dup:65}],515:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"./TEXT_NODE":496,"./internal/isNodeType":506,dup:66}],516:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"./internal/validate":507,dup:67}],517:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{"./internal/validate":507,dup:68}],518:[function(b,c,a){arguments[4][349][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":519,"./ac-dom-traversal/ancestors":520,"./ac-dom-traversal/children":521,"./ac-dom-traversal/filterBySelector":522,"./ac-dom-traversal/firstChild":523,"./ac-dom-traversal/lastChild":526,"./ac-dom-traversal/matchesSelector":527,"./ac-dom-traversal/nextSibling":528,"./ac-dom-traversal/nextSiblings":529,"./ac-dom-traversal/previousSibling":530,"./ac-dom-traversal/previousSiblings":531,"./ac-dom-traversal/querySelector":532,"./ac-dom-traversal/querySelectorAll":533,"./ac-dom-traversal/shims/ie":534,"./ac-dom-traversal/siblings":535,dup:349}],519:[function(b,c,a){arguments[4][350][0].apply(a,arguments)
},{"./helpers/validate":525,"./matchesSelector":527,"ac-dom-nodes":500,dup:350}],520:[function(b,c,a){arguments[4][351][0].apply(a,arguments)
},{"./helpers/validate":525,"./matchesSelector":527,"ac-dom-nodes":500,dup:351}],521:[function(b,c,a){arguments[4][352][0].apply(a,arguments)
},{"./filterBySelector":522,"./helpers/validate":525,"ac-dom-nodes":500,dup:352}],522:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./helpers/validate":525,"./matchesSelector":527,dup:353}],523:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./children":521,"./helpers/validate":525,dup:354}],524:[function(b,c,a){arguments[4][355][0].apply(a,arguments)
},{dup:355}],525:[function(b,c,a){arguments[4][356][0].apply(a,arguments)},{"ac-dom-nodes":500,dup:356}],526:[function(b,c,a){arguments[4][357][0].apply(a,arguments)
},{"./children":521,"./helpers/validate":525,dup:357}],527:[function(b,c,a){arguments[4][358][0].apply(a,arguments)
},{"./helpers/nativeMatches":524,"./helpers/validate":525,"ac-dom-nodes":500,dup:358}],528:[function(b,c,a){arguments[4][359][0].apply(a,arguments)
},{"./helpers/validate":525,"./matchesSelector":527,"ac-dom-nodes":500,dup:359}],529:[function(b,c,a){arguments[4][360][0].apply(a,arguments)
},{"./helpers/validate":525,"./matchesSelector":527,"ac-dom-nodes":500,dup:360}],530:[function(b,c,a){arguments[4][361][0].apply(a,arguments)
},{"./helpers/validate":525,"./matchesSelector":527,"ac-dom-nodes":500,dup:361}],531:[function(b,c,a){arguments[4][362][0].apply(a,arguments)
},{"./helpers/validate":525,"./matchesSelector":527,"ac-dom-nodes":500,dup:362}],532:[function(b,c,a){arguments[4][363][0].apply(a,arguments)
},{"./helpers/validate":525,dup:363}],533:[function(b,c,a){arguments[4][364][0].apply(a,arguments)
},{"./helpers/validate":525,dup:364}],534:[function(b,c,a){arguments[4][365][0].apply(a,arguments)
},{"../helpers/nativeMatches":524,"../helpers/validate":525,"../vendor/sizzle/sizzle":536,"ac-dom-nodes":500,dup:365}],535:[function(b,c,a){arguments[4][366][0].apply(a,arguments)
},{"./children":521,"./helpers/validate":525,dup:366}],536:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],537:[function(b,c,a){arguments[4][368][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":538,dup:368}],538:[function(c,b,d){var f;
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
s=o}for(p=0;p<l;p++){this._triggerDOMEvents(n[p],r,q)}return this};f.emitterTrigger=function(m,o,p){if(!this._eventEmitter){return this
}m=this._parseEventNames(m);m=this._cleanStringData(m);o=new j(o,this);var n,l=m.length;
for(n=0;n<l;n++){this._eventEmitter.trigger(m[n],o,p)}return this};f.propagateTo=function(l,m){this._eventEmitter.propagateTo(l,m);
return this};f.stopPropagatingTo=function(l){this._eventEmitter.stopPropagatingTo(l);
return this};f.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null}}};f._parseEventNames=function(l){if(!l){return[l]
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
}};b.exports=h},{"./DOMEmitterEvent":539,"ac-dom-events":483,"ac-dom-traversal":518,"ac-event-emitter":278}],539:[function(b,c,a){var f=b("ac-dom-events");
var d;var g=function(i,h){this._domEmitter=h;this.originalEvent=i||{};this._originalTarget=f.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
};d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
}return false};c.exports=g},{"ac-dom-events":483}],540:[function(b,c,a){c.exports={Routes:b("./ac-routes/Routes"),Route:b("./ac-routes/Route")}
},{"./ac-routes/Route":541,"./ac-routes/Routes":542}],541:[function(b,c,a){function f(i,k,h,j,g){this.path=i;
this.callback=k;this.context=h;this.greedy=j||false;this.priority=g||0;if(typeof this.priority!=="number"){throw new Error("Priority must be a Number.")
}this.identifierPattern="([a-zA-Z0-9\\-\\_]+)";this.tokensRe=new RegExp(":"+this.identifierPattern,"g");
this.matcher=this._createRouteMatcher(i)}var d=f.prototype;d._createRouteMatcher=function(h){if(h&&h.exec){return{pattern:h}
}else{if(h==="/"){return{pattern:/^\/$/}}else{if(typeof h!=="string"){throw new Error("path must be either a string or regex")
}}}var g=this._extractRouteTokens(h);var j=h.replace(this.tokensRe,this.identifierPattern);
var i=new RegExp(j,"g");return{pattern:i,routeTokens:g}};d._extractRouteTokens=function(j){var g=j.replace(this.tokensRe,":"+this.identifierPattern);
var i=new RegExp(g,"g");var h=i.exec(j);if(h&&h.length>1){h=h.slice(1)}else{h=null
}return h};d.match=function(h){this.matcher.pattern.lastIndex=0;var g=this.matcher.pattern.exec(h);
if(g){var i=(g.length)?g.slice(1):[];var j=this.callback;if(j&&typeof j==="function"){j.apply(this.context||this,i);
return true}}return false};c.exports=f},{}],542:[function(c,d,b){var g=c("./Route");
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
};d.exports=a},{"./Route":541}],543:[function(b,c,a){c.exports={Router:b("./ac-router/Router"),History:b("./ac-router/History"),Routes:b("ac-routes").Routes,Route:b("ac-routes").Route}
},{"./ac-router/History":544,"./ac-router/Router":545,"ac-routes":540}],544:[function(c,f,b){var d=c("ac-object").create;
var a=c("ac-dom-events");var i=c("ac-event-emitter").EventEmitter;function h(k){k=k||{};
this.history=window.history;this.rootStripper=/^\/+|\/+$/g;this.root=k.root||"/";
this.root=("/"+this.root+"/").replace(this.rootStripper,"/");var j=typeof k.resolveInitialHash!=="boolean"?true:k.resolveInitialHash;
this._pushState=typeof k.pushState!=="boolean"?true:k.pushState;this._hashChange=k.hashChange||false;
this._setUpdateVars(j);if(k.autoStart){this.start()}}var g=h.prototype=d(i.prototype);
g._isRoot=function(j){return("/"+j+"/").replace(this.rootStripper,"/")===this.root
};g._isPushStateSupported=function(){return(this.history&&this.history.pushState)
};g._isHashChangeSupported=function(){return("onhashchange" in window)};g._setUpdateVars=function(k){if(this._pushState&&this._isPushStateSupported()){if(k&&this._hashChange&&window.location.href.indexOf("#")!==-1){this.history.pushState({},document.title,window.location.href.replace("#",""))
}this._hashChange=false}else{if(k&&this._pushState&&this._hashChange&&window.location.href.indexOf("#")<0){if(!window.location.origin){window.location.origin=window.location.protocol+"//"+window.location.hostname;
window.location.origin+=(window.location.port?":"+window.location.port:"")}var j=window.location.href.substr(window.location.origin.length+this.root.length);
if(j.length){window.location=window.location.origin+this.root+"#"+j;return}}if(this._hashChange&&!this._isHashChangeSupported()){this._interval=50;
this._iframe=document.createElement('<iframe src="javascript:0" tabindex="-1" style="display:none;">');
this._iframe=document.body.appendChild(this._iframe).contentWindow;this._iframe.document.open().close()
}this._pushState=false}};g._checkUrl=function(){var j=this._iframe.location.hash.substr(1);
if(j.length===0){j="/"}if(this.fragment()!==j){window.location.hash="#"+j;this._ignoreHashChange=false;
this._handleHashChange()}};g._handlePopState=function(j){this.trigger("popstate",{fragment:this.fragment()})
};g._handleHashChange=function(j){if(this._ignoreHashChange){this._ignoreHashChange=false;
return}this.trigger("popstate",{fragment:this.fragment()})};g.canUpdate=function(){return this._pushState||this._hashChange
};g.start=function(){if(!this.started&&(this._pushState||this._hashChange)){this.started=true;
if(this._pushState){this._handlePopState=this._handlePopState.bind(this);a.addEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){this._handleHashChange=this._handleHashChange.bind(this);
a.addEventListener(window,"hashchange",this._handleHashChange)}else{this._iframe.location.hash=this.fragment();
this._checkUrl=this._checkUrl.bind(this);this._checkUrlInterval=setInterval(this._checkUrl,this._interval)
}}}}return this.started||false};g.stop=function(){if(this.started){this.started=false;
if(this._pushState){a.removeEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){a.removeEventListener(window,"hashchange",this._handleHashChange)
}else{if(this._checkUrlInterval){clearInterval(this._checkUrlInterval);this._checkUrlInterval=null
}}}}}};g.navigate=function(l,k){if(!this.started||!this.canUpdate()){return false
}k=k||{};var j=((this._isRoot(l)?"":this.root)+l).replace(/([^:])(\/\/)/g,"$1/");
if(this._pushState){this.history.pushState(k,document.title,j)}else{if(this._hashChange){this._ignoreHashChange=true;
window.location.hash="#"+l;if(!this._isHashChangeSupported()){this._iframe.document.open().close();
this._iframe.location.hash="#"+l}}}return true};g.fragment=function(){var j="";
if(this._pushState){j=(window.location.pathname).substr(this.root.length)}else{if(this._hashChange){j=window.location.hash.substr(1)
}}return j===""?"/":j};f.exports=h},{"ac-dom-events":234,"ac-event-emitter":278,"ac-object":1488}],545:[function(d,c,g){var i=d("ac-object").create;
var k=d("ac-dom-emitter").DOMEmitter;var f=d("./History");var j=d("ac-routes").Route;
var a=d("ac-routes").Routes;function b(l){l=l||{};this._intercept=l.intercept||"[data-route]";
this._interceptAttribute=l.attribute||"href";this._handleTrigger=this._handleTrigger.bind(this);
this.intercept(this._intercept);this.history=l.history||new f({root:l.root,autoStart:l.autoStart,pushState:l.pushState,hashChange:l.hashChange,resolveInitialHash:l.resolveInitialHash});
a.call(this,l.routes);if(l.autoStart){if(!this.history.started){this.history.start()
}this.start()}}var h=b.prototype=i(a.prototype);h._handleTrigger=function(m){if(!this.started){return
}var l=m.target.getAttribute(this._interceptAttribute);if(l){if(/^(http|https):\/\/+/.exec(l)&&this._interceptAttribute==="href"){l=l.substr(l.indexOf(this.history.root)+this.history.root.length)||"/"
}if(this.navigate(l)){m.preventDefault()}}};h._handlePopstate=function(l){this.navigate(l.fragment,true)
};h.start=function(){if(!this.started){this.started=true;this.history.start();this._handlePopstate=this._handlePopstate.bind(this);
this.history.on("popstate",this._handlePopstate);this.navigate(this.history.fragment(),true)
}};h.stop=function(){if(this.started){this.started=false;this.history.stop();this.history.off("popstate",this._handlePopstate)
}};h.navigate=function(m,l){if(this.history.fragment()===m&&!l){return this.history.canUpdate()
}if(m&&!l){if(!this.history.navigate(m)){return false}}this.match(m);return true
};h.intercept=function(m,n){var l=new k(n||document.body);l.on("click",m,this._handleTrigger)
};c.exports=b},{"./History":544,"ac-dom-emitter":537,"ac-object":1488,"ac-routes":540}],546:[function(b,f,a){var d=b("./ac-ajax/Ajax");
var c=b("./ac-ajax/Request");f.exports=new d();f.exports.Ajax=d;f.exports.Request=c
},{"./ac-ajax/Ajax":547,"./ac-ajax/Request":548}],547:[function(c,g,b){var f=c("./Request");
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
return this.create(i).send()}};g.exports=d},{"./Request":548,"./URLParser":549,"./XDomain-request":550}],548:[function(b,d,a){var c=function(f){this._initialize(f)
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
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],549:[function(c,d,b){var a=function(){this.parser=null
};var f=a.prototype;f.parse=function(k){var i;var l;var h;var g;var j;if(typeof k!=="string"){throw new TypeError(k+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(k);
h=this.parser.hostname;l=this.parser.protocol;g=this._normalizePort(this.parser);
i=this.parser.origin||this._constructOriginString(this.parser,g);j=this.parser.search;
return{originalPath:k,qualifiedPath:this.parser.href,protocol:l,hostname:h,origin:i,port:g,search:j}
};f.destroy=function(){this.parser=null};f._constructOriginString=function(i,g){var h=g?":"+g:"";
return i.protocol+"//"+i.hostname+h};f._normalizePort=function(g){return(g.port==="80"||g.port==="443"||g.port==="0")?"":g.port
};f._qualifyPath=function(g){this.parser.href=g;this.parser.href=this.parser.href
};d.exports=a},{}],550:[function(b,d,a){var c=b("./Request");var f=function(g){c.apply(this,arguments)
};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};f.prototype._sendXHR=function(){setTimeout(function(){c.prototype._sendXHR.call(this)
}.bind(this),0)};d.exports=f},{"./Request":548}],551:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],552:[function(b,c,a){c.exports={isString:b("./ac-string/isString"),toCamelCase:b("./ac-string/toCamelCase"),queryStringToObject:b("./ac-string/queryStringToObject"),toQueryPair:b("./ac-string/toQueryPair"),queryParameters:b("./ac-string/queryParameters"),supplant:b("./ac-string/supplant")}
},{"./ac-string/isString":553,"./ac-string/queryParameters":554,"./ac-string/queryStringToObject":555,"./ac-string/supplant":556,"./ac-string/toCamelCase":557,"./ac-string/toQueryPair":558}],553:[function(c,d,b){d.exports=function a(f){return(typeof f==="string")
}},{}],554:[function(d,f,c){var a=d("./queryStringToObject");f.exports=function b(){var g={};
var h=window.location.toString().split("?")[1];if(typeof h==="string"){g=a(h)}return g
}},{"./queryStringToObject":555}],555:[function(d,f,c){var a=d("qs");f.exports=function b(g){if(typeof g!=="string"){throw new TypeError("QueryStringToObject error: argument must be a string")
}return a.parse(g)}},{qs:551}],556:[function(b,c,a){c.exports=function d(h,g,f){if(!g){return h
}f=f||/{([^{}]*)}/g;return h.replace(f,function(j,i){var k=g[i];return typeof k==="string"||typeof k==="number"?k:j
})}},{}],557:[function(b,c,a){c.exports=function d(f){if(typeof f!=="string"){throw new TypeError("Argument must be of type String.")
}return f.replace(/-+(.)?/g,function(g,h){return h?h.toUpperCase():""})}},{}],558:[function(b,c,a){c.exports=function d(f,g){if(typeof f!=="string"||typeof g!=="string"){throw new TypeError("toQueryPair error: argument must be a string")
}return encodeURIComponent(f)+"="+encodeURIComponent(g)}},{}],559:[function(c,d,b){var a=c("./ac-vatman/vat-client");
var f=c("./ac-vatman/vat-resource");var g={createPlayer:c("./ac-vatman/factory/createPlayer"),vatClient:a,vatResource:f};
d.exports=g},{"./ac-vatman/factory/createPlayer":560,"./ac-vatman/vat-client":567,"./ac-vatman/vat-resource":568}],560:[function(c,a,g){var m=c("./../featureDetection/canPlayType");
var d=c("./../featureDetection/canPlayTypeNatively");var l=c("./../featureDetection/canPlayTypeQuicktime");
var k=c("./../featureDetection/featureDetect").shouldPlayQuicktime;var i=c("./../featureDetection/featureDetect").textTrackDisablingNotAvailable;
function h(o,n){n.type="quicktime";return o.create(n)}function j(o,n){return o.create(n)
}function f(n){var p=this.findTextTrackModelFromNativeTrack(n);var o=this.getEnabledTextTracks();
o.forEach(function(q){if(p.cid!==q.cid){q.disable()}});if(p.get("mode")==="disabled"){p.hide()
}}function b(q,p){p=p||{};var o="video/quicktime";var n="video/mp4";var r;if(d(o)||d(n)&&(!k())){r=j(q,p)
}else{if(l(o)){p.type="quicktime";r=h(q,p)}}if(r&&!i()){r.on("addtrack",f,r)}return r
}a.exports=b},{"./../featureDetection/canPlayType":561,"./../featureDetection/canPlayTypeNatively":562,"./../featureDetection/canPlayTypeQuicktime":563,"./../featureDetection/featureDetect":564}],561:[function(b,d,a){var f=b("./canPlayTypeNatively");
var c=b("./canPlayTypeQuicktime");function g(i){var h=f(i);if(!h){h=c(i)}return h
}d.exports=g},{"./canPlayTypeNatively":562,"./canPlayTypeQuicktime":563}],562:[function(c,d,b){var f;
function a(){return document.createElement("video")}d.exports=function g(i){var j="";
var h=a();if(typeof h.canPlayType==="function"){j=h.canPlayType(i)}return j}},{}],563:[function(c,f,b){var a=c("./quicktime");
f.exports=function d(g){var h="";if(g==="video/quicktime"&&a.getPluginVersion()!==undefined){h="maybe"
}return h}},{"./quicktime":565}],564:[function(b,c,a){var f=b("ac-browser");var d=f.name.toLowerCase();
c.exports={shouldPlayMOV:function(){return(d==="safari"||d==="safari mobile")},shouldPlayQuicktime:function(){return(d==="ie"&&f.version<9)
},textTrackDisablingNotAvailable:function(){return(d==="safari mobile"&&f.version===7)
}}},{"ac-browser":228}],565:[function(b,c,a){c.exports={getPlugins:function(){return navigator.plugins
},getPluginVersion:function(){var j;var k=/(\d+\.){2}(\d+){1}$/;var d=this.getPlugins();
if(d&&d[0]){for(var h=0;h<d.length;h++){var f=(/QuickTime/i.test(d[h].name)&&typeof j==="undefined");
if(f){if(d[h].version){j=d[h].version}else{if(k.test(d[h].name)){j=d[h].name.match(k);
j=j[0]||undefined}}}}}else{var g=["QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1"];
g.forEach(function(l){var m;var i;try{m=new ActiveXObject(l);i=(typeof m==="object"&&typeof m.QuickTimeVersion!=="undefined"&&typeof j==="undefined");
if(i){j=m.QuickTimeVersion}}catch(n){}})}return j}}},{}],566:[function(b,c,a){c.exports={bg:"български език",cs:"Czech",el:"Greek",de:"German",da:"Danish",en:"English",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"Français",hr:"Croatian",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",lv:"Latvian",nl:"Dutch",no:"Norsk",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sk:"Slovak",sv:"Swedish",tr:"Turkish",zh:"Chinese"}
},{}],567:[function(d,b,g){var j=d("ac-ajax");var h=d("ac-string");var k=/(-[a-z]{2}-([a-z]{2}-){0,})[0-9]{8}_r[0-9].+\.mov$/;
var a=/_r[0-9].+\.mov$/;var i=/((-([a-z]{2}))*)-[0-9]+/;var n=/((-([a-z]{2}))*)-/;
var c="m";var f="_{width}x{height}{suffix}."+c+"p4";var l=[{width:416,height:234,type:"baseline-high",suffix:"h"},{width:416,height:234,type:"small",suffix:"h"},{width:416,height:234,type:"baseline-low",suffix:"l"},{width:416,height:234,type:"baseline-medium",suffix:"m"},{width:640,height:360,type:"medium",suffix:"h"},{width:848,height:480,type:"large",suffix:""}];
var o={create:function(){var m=function(){};m.prototype=this;return new m()},getSource:function(m,q,p){var s=l;
if(!m){throw"Must provide a vatRefMovie"}if(!q){throw"Must provide a width"}if(p){s=s.filter(function(t){return t.type===p
})}var r=s.reduce(function(t,u){return Math.abs(u.width-q)<Math.abs(t.width-q)?u:t
});return m.replace(a,h.supplant(f,r))},getConfigPath:function(m){return m.replace(k,"-current.json")
},getConfig:function(m){return j.getJSON({url:this.getConfigPath(m)})},getVTTSource:function(m){return m.replace(a,"_cc.vtt")
}};b.exports=o},{"ac-ajax":546,"ac-string":552}],568:[function(c,d,b){var a=c("./vat-client");
var h=c("./localization/language");var g=c("./featureDetection/featureDetect").shouldPlayMOV;
var f={create:function(j){if(!j){throw"Must provide a vatRefMovie."}var k=function(){};
k.prototype=this;var i=new k();i.vatRefMovie=j;i.vatVTTSource=[];return i},getSource:function(j,i){return a.getSource(this.vatRefMovie,j,i)
},getConfig:function(){return a.getConfig(this.vatRefMovie)},getVTTSource:function(){return a.getVTTSource(this.vatRefMovie)
},_getCaptionsSrcLang:function(j){var i="";if(typeof j==="string"&&j.indexOf("-")!==-1){i=j.split("-")[0]
}return i},_isNewVTTSrc:function(i){return(this.vatVTTSource.indexOf(i)===-1)},_handleCaptions:function(k){var l;
var i="";var j={};this.getConfig().then(function(m){if(!m.metadata.captions){return
}l=this.getVTTSource();if(l&&(this._isNewVTTSrc(l)===true)){if(m.metadata.lang){i=this._getCaptionsSrcLang(m.metadata.lang)
}j.kind="caption";j.src=l;j.mode="hidden";if(i){j.srclang=i;j.label=h[i]||null}k.addTextTrackFromRemoteVTT(j);
this.vatVTTSource.push(l)}}.bind(this))},setPlayerSrc:function(i,k){var j=this.vatRefMovie;
if(!g()){j=this.getSource(k)}i.setSrc(j);this._handleCaptions(i)}};d.exports=f},{"./featureDetection/featureDetect":564,"./localization/language":566,"./vat-client":567}],569:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":570}],570:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],571:[function(b,c,a){c.exports={CID:b("./ac-mvc-cid/CID")}
},{"./ac-mvc-cid/CID":572}],572:[function(c,f,b){var a=c("ac-shared-instance").SharedInstance;
var g="ac-mvc-cid:CID",d="1.0.0";function i(){this._idCount=0}var h=i.prototype;
h._cidPrefix="cid";h.getNewCID=function(){var j=this._cidPrefix+"-"+this._idCount;
this._idCount++;return j};f.exports=a.share(g,d,i)},{"ac-shared-instance":569}],573:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],574:[function(b,c,a){arguments[4][99][0].apply(a,arguments)},{"./ac-object/clone":575,"./ac-object/create":576,"./ac-object/defaults":577,"./ac-object/extend":578,"./ac-object/getPrototypeOf":579,"./ac-object/isDate":580,"./ac-object/isEmpty":581,"./ac-object/isRegExp":582,"./ac-object/toQueryParameters":583,dup:99}],575:[function(b,c,a){arguments[4][100][0].apply(a,arguments)
},{"./extend":578,dup:100}],576:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],577:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":578,dup:102}],578:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{dup:103}],579:[function(b,c,a){arguments[4][104][0].apply(a,arguments)},{dup:104}],580:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],581:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],582:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],583:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108,qs:573}],584:[function(b,c,a){c.exports={Model:b("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":585}],585:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
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
}}};d.exports=i},{"ac-event-emitter":278,"ac-mvc-cid":571,"ac-object":574}],586:[function(b,c,a){c.exports={localization:b("./ac-video-localization/localization")}
},{"./ac-video-localization/localization":587}],587:[function(b,c,a){var h=b("./translations");
var g="/global/ac_media_player/scripts/ac_media_languages/";var f=document.getElementsByTagName("html")[0];
var d=b("ac-mvc-model").Model;var i={create:function(k){k=k||this.getLang();var j=this.getRequestPath(k);
return this.sendRequest(j)},getRequestPath:function(j){return g+this.getTranslationFileName(j)
},getLang:function(){var j=f.getAttribute("lang");var k;if(!j){k="en-us"}else{switch(j.toLowerCase()){case"es-418":k="es-LA";
break;case"pt":k="pt-BR";break;default:k=j;break}}return k},getTranslationFileName:function(j){var l=j.toLowerCase().split("-")[0];
var k=h[j]||false;if(!k){k=h[l]||h.en}return k},sendRequest:function(j){return new Promise(function(m,l){var k=new XMLHttpRequest();
k.onreadystatechange=function(){if(k.readyState===4){if(k.status>=200&&k.status<300){try{var n=JSON.parse(k.responseText);
for(var p in n){n[p].replace(/<br\s{0,}\/>/g,"")}m(new d(n))}catch(o){l(o)}}else{l(k)
}}};k.open("GET",j);k.send()})}};c.exports=i},{"./translations":588,"ac-mvc-model":584}],588:[function(b,c,a){c.exports={"bg-BG":"bg-BG.json","cs-CZ":"cs-CZ.json","el-GR":"el-GR.json","de-AT":"de-AT.json","de-CH":"de-CH.json","de-DE":"de-DE.json","de-LI":"de-LI.json","da-DK":"da-DK.json",en:"en.json","en-US":"en-US.json","en-AP":"en-AP.json","en-CA":"en-CA.json","en-GB":"en-GB.json","en-HK":"en-HK.json","en-IE":"en-IE.json","en-IN":"en-IN.json","en-KR":"en-KR.json","en-AU":"en-AU.json","en-NZ":"en-NZ.json","en-SG":"en-SG.json","en-ZA":"en-ZA.json",es:"es.json","es-LA":"es-LA.json","es-MX":"es-MX.json","es-ES":"es-ES.json","et-EE":"et-EE.json","fi-FI":"fi-FI.json",fr:"fr.json","fr-BE":"fr-BE.json","fr-CA":"fr-CA.json","fr-CH":"fr-CH.json","fr-FR":"fr-FR.json","hr-HR":"hr-HR.json","hu-HU":"hu-HU.json","it-IT":"it-IT.json",ja:"ja.json","ja-JP":"ja-JP.json","ko-KR":"ko-KR.json","lt-LT":"lt-LT.json","lv-LV":"lv-LV.json","nl-BE":"nl-BE.json","nl-NL":"nl-NL.json","no-NO":"no-NO.json","pl-PL":"pl-PL.json",pt:"pt.json","pt-BR":"pt-BR.json","pt-PT":"pt-PT.json","ro-RO":"ro-RO.json","ru-RU":"ru-RU.json","sk-SK":"sk-SK.json","sv-SE":"sv-SE.json","tr-TR":"tr-TR.json",zh:"zh.json","zh-CN":"zh-CN.json","zh-HK":"zh-HK.json","zh-TW":"zh-TW.json"}
},{}],589:[function(b,c,a){arguments[4][332][0].apply(a,arguments)},{"./ac-classlist/add":590,"./ac-classlist/contains":591,"./ac-classlist/remove":593,"./ac-classlist/toggle":594,dup:332}],590:[function(b,c,a){arguments[4][333][0].apply(a,arguments)
},{"./helpers/className":592,dup:333}],591:[function(b,c,a){arguments[4][334][0].apply(a,arguments)
},{"./helpers/className":592,dup:334}],592:[function(b,c,a){arguments[4][335][0].apply(a,arguments)
},{dup:335}],593:[function(b,c,a){arguments[4][336][0].apply(a,arguments)},{"./helpers/className":592,dup:336}],594:[function(b,c,a){arguments[4][337][0].apply(a,arguments)
},{"./helpers/className":592,dup:337}],595:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":596,dup:69}],596:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":597,dup:70}],597:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],598:[function(b,c,a){arguments[4][341][0].apply(a,arguments)},{"./ac-dom-events/addEventListener":599,"./ac-dom-events/dispatchEvent":600,"./ac-dom-events/preventDefault":601,"./ac-dom-events/removeEventListener":602,"./ac-dom-events/stop":603,"./ac-dom-events/stopPropagation":604,"./ac-dom-events/target":605,dup:341}],599:[function(b,c,a){arguments[4][319][0].apply(a,arguments)
},{"ac-prefixer":595,dup:319}],600:[function(b,c,a){arguments[4][320][0].apply(a,arguments)
},{dup:320}],601:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],602:[function(b,c,a){arguments[4][321][0].apply(a,arguments)
},{"ac-prefixer":595,dup:321}],603:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{"./preventDefault":601,"./stopPropagation":604,dup:31}],604:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{dup:32}],605:[function(b,c,a){arguments[4][348][0].apply(a,arguments)},{dup:348}],606:[function(b,c,a){arguments[4][349][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":607,"./ac-dom-traversal/ancestors":608,"./ac-dom-traversal/children":609,"./ac-dom-traversal/filterBySelector":610,"./ac-dom-traversal/firstChild":611,"./ac-dom-traversal/lastChild":614,"./ac-dom-traversal/matchesSelector":615,"./ac-dom-traversal/nextSibling":616,"./ac-dom-traversal/nextSiblings":617,"./ac-dom-traversal/previousSibling":618,"./ac-dom-traversal/previousSiblings":619,"./ac-dom-traversal/querySelector":620,"./ac-dom-traversal/querySelectorAll":621,"./ac-dom-traversal/shims/ie":622,"./ac-dom-traversal/siblings":623,dup:349}],607:[function(b,c,a){arguments[4][350][0].apply(a,arguments)
},{"./helpers/validate":613,"./matchesSelector":615,"ac-dom-nodes":628,dup:350}],608:[function(b,c,a){arguments[4][351][0].apply(a,arguments)
},{"./helpers/validate":613,"./matchesSelector":615,"ac-dom-nodes":628,dup:351}],609:[function(b,c,a){arguments[4][352][0].apply(a,arguments)
},{"./filterBySelector":610,"./helpers/validate":613,"ac-dom-nodes":628,dup:352}],610:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./helpers/validate":613,"./matchesSelector":615,dup:353}],611:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./children":609,"./helpers/validate":613,dup:354}],612:[function(b,c,a){arguments[4][355][0].apply(a,arguments)
},{dup:355}],613:[function(b,c,a){arguments[4][356][0].apply(a,arguments)},{"ac-dom-nodes":628,dup:356}],614:[function(b,c,a){arguments[4][357][0].apply(a,arguments)
},{"./children":609,"./helpers/validate":613,dup:357}],615:[function(b,c,a){arguments[4][358][0].apply(a,arguments)
},{"./helpers/nativeMatches":612,"./helpers/validate":613,"ac-dom-nodes":628,dup:358}],616:[function(b,c,a){arguments[4][359][0].apply(a,arguments)
},{"./helpers/validate":613,"./matchesSelector":615,"ac-dom-nodes":628,dup:359}],617:[function(b,c,a){arguments[4][360][0].apply(a,arguments)
},{"./helpers/validate":613,"./matchesSelector":615,"ac-dom-nodes":628,dup:360}],618:[function(b,c,a){arguments[4][361][0].apply(a,arguments)
},{"./helpers/validate":613,"./matchesSelector":615,"ac-dom-nodes":628,dup:361}],619:[function(b,c,a){arguments[4][362][0].apply(a,arguments)
},{"./helpers/validate":613,"./matchesSelector":615,"ac-dom-nodes":628,dup:362}],620:[function(b,c,a){arguments[4][363][0].apply(a,arguments)
},{"./helpers/validate":613,dup:363}],621:[function(b,c,a){arguments[4][364][0].apply(a,arguments)
},{"./helpers/validate":613,dup:364}],622:[function(b,c,a){arguments[4][365][0].apply(a,arguments)
},{"../helpers/nativeMatches":612,"../helpers/validate":613,"../vendor/sizzle/sizzle":624,"ac-dom-nodes":628,dup:365}],623:[function(b,c,a){arguments[4][366][0].apply(a,arguments)
},{"./children":609,"./helpers/validate":613,dup:366}],624:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],625:[function(b,c,a){arguments[4][368][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":626,dup:368}],626:[function(b,c,a){arguments[4][538][0].apply(a,arguments)
},{"./DOMEmitterEvent":627,"ac-dom-events":598,"ac-dom-traversal":606,"ac-event-emitter":278,dup:538}],627:[function(b,c,a){arguments[4][539][0].apply(a,arguments)
},{"ac-dom-events":598,dup:539}],628:[function(d,f,c){var b=d("./ac-dom-nodes/helpers/nodeTypes");
var g;var a={createDocumentFragment:d("./ac-dom-nodes/createDocumentFragment"),filterByNodeType:d("./ac-dom-nodes/filterByNodeType"),insertAfter:d("./ac-dom-nodes/insertAfter"),insertBefore:d("./ac-dom-nodes/insertBefore"),insertFirstChild:d("./ac-dom-nodes/insertFirstChild"),insertLastChild:d("./ac-dom-nodes/insertLastChild"),isComment:d("./ac-dom-nodes/isComment"),isDocument:d("./ac-dom-nodes/isDocument"),isDocumentFragment:d("./ac-dom-nodes/isDocumentFragment"),isDocumentType:d("./ac-dom-nodes/isDocumentType"),isElement:d("./ac-dom-nodes/isElement"),isNode:d("./ac-dom-nodes/isNode"),isTextNode:d("./ac-dom-nodes/isTextNode"),remove:d("./ac-dom-nodes/remove"),replace:d("./ac-dom-nodes/replace")};
for(g in b){a[g]=b[g]}f.exports=a},{"./ac-dom-nodes/createDocumentFragment":629,"./ac-dom-nodes/filterByNodeType":630,"./ac-dom-nodes/helpers/nodeTypes":632,"./ac-dom-nodes/insertAfter":634,"./ac-dom-nodes/insertBefore":635,"./ac-dom-nodes/insertFirstChild":636,"./ac-dom-nodes/insertLastChild":637,"./ac-dom-nodes/isComment":638,"./ac-dom-nodes/isDocument":639,"./ac-dom-nodes/isDocumentFragment":640,"./ac-dom-nodes/isDocumentType":641,"./ac-dom-nodes/isElement":642,"./ac-dom-nodes/isNode":643,"./ac-dom-nodes/isTextNode":644,"./ac-dom-nodes/remove":645,"./ac-dom-nodes/replace":646}],629:[function(b,c,a){arguments[4][372][0].apply(a,arguments)
},{dup:372}],630:[function(b,c,a){arguments[4][373][0].apply(a,arguments)},{"./helpers/isNodeType":631,"./helpers/nodeTypes":632,dup:373}],631:[function(b,c,a){arguments[4][374][0].apply(a,arguments)
},{"../isNode":643,dup:374}],632:[function(b,c,a){arguments[4][375][0].apply(a,arguments)
},{dup:375}],633:[function(b,c,a){arguments[4][376][0].apply(a,arguments)},{"./isNodeType":631,"./nodeTypes":632,dup:376}],634:[function(b,c,a){arguments[4][377][0].apply(a,arguments)
},{"./helpers/validate":633,dup:377}],635:[function(b,c,a){arguments[4][378][0].apply(a,arguments)
},{"./helpers/validate":633,dup:378}],636:[function(b,c,a){arguments[4][379][0].apply(a,arguments)
},{"./helpers/validate":633,dup:379}],637:[function(b,c,a){arguments[4][380][0].apply(a,arguments)
},{"./helpers/validate":633,dup:380}],638:[function(c,d,a){var g=c("./helpers/isNodeType");
var f=c("./helpers/nodeTypes").COMMENT_NODE;d.exports=function b(h){return g(h,f)
}},{"./helpers/isNodeType":631,"./helpers/nodeTypes":632}],639:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":631,"./helpers/nodeTypes":632}],640:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_FRAGMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":631,"./helpers/nodeTypes":632}],641:[function(b,c,a){var g=b("./helpers/isNodeType");
var f=b("./helpers/nodeTypes").DOCUMENT_TYPE_NODE;c.exports=function d(h){return g(h,f)
}},{"./helpers/isNodeType":631,"./helpers/nodeTypes":632}],642:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").ELEMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":631,"./helpers/nodeTypes":632}],643:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],644:[function(c,d,a){var g=c("./helpers/isNodeType");var b=c("./helpers/nodeTypes").TEXT_NODE;
d.exports=function f(h){return g(h,b)}},{"./helpers/isNodeType":631,"./helpers/nodeTypes":632}],645:[function(b,c,a){arguments[4][389][0].apply(a,arguments)
},{"./helpers/validate":633,dup:389}],646:[function(b,c,a){arguments[4][390][0].apply(a,arguments)
},{"./helpers/validate":633,dup:390}],647:[function(b,c,a){arguments[4][569][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":648,dup:569}],648:[function(b,c,a){arguments[4][570][0].apply(a,arguments)
},{dup:570}],649:[function(b,c,a){arguments[4][571][0].apply(a,arguments)},{"./ac-mvc-cid/CID":650,dup:571}],650:[function(b,c,a){arguments[4][572][0].apply(a,arguments)
},{"ac-shared-instance":647,dup:572}],651:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],652:[function(b,c,a){arguments[4][99][0].apply(a,arguments)},{"./ac-object/clone":653,"./ac-object/create":654,"./ac-object/defaults":655,"./ac-object/extend":656,"./ac-object/getPrototypeOf":657,"./ac-object/isDate":658,"./ac-object/isEmpty":659,"./ac-object/isRegExp":660,"./ac-object/toQueryParameters":661,dup:99}],653:[function(b,c,a){arguments[4][100][0].apply(a,arguments)
},{"./extend":656,dup:100}],654:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],655:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":656,dup:102}],656:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{dup:103}],657:[function(b,c,a){arguments[4][104][0].apply(a,arguments)},{dup:104}],658:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],659:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],660:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],661:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108,qs:651}],662:[function(b,c,a){c.exports={View:b("./ac-mvc-view/View")}
},{"./ac-mvc-view/View":663}],663:[function(d,b,g){var j=d("ac-dom-emitter").DOMEmitter;
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
},{"ac-classlist":589,"ac-dom-emitter":625,"ac-dom-nodes":628,"ac-mvc-cid":649,"ac-object":652}],664:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],665:[function(b,c,a){arguments[4][552][0].apply(a,arguments)},{"./ac-string/isString":666,"./ac-string/queryParameters":667,"./ac-string/queryStringToObject":668,"./ac-string/supplant":669,"./ac-string/toCamelCase":670,"./ac-string/toQueryPair":671,dup:552}],666:[function(b,c,a){arguments[4][553][0].apply(a,arguments)
},{dup:553}],667:[function(b,c,a){arguments[4][554][0].apply(a,arguments)},{"./queryStringToObject":668,dup:554}],668:[function(b,c,a){arguments[4][555][0].apply(a,arguments)
},{dup:555,qs:664}],669:[function(b,c,a){arguments[4][556][0].apply(a,arguments)
},{dup:556}],670:[function(b,c,a){arguments[4][557][0].apply(a,arguments)},{dup:557}],671:[function(b,c,a){arguments[4][558][0].apply(a,arguments)
},{dup:558}],672:[function(b,c,a){c.exports={View:b("./ac-video-nosupportview/NoSupportView")}
},{"./ac-video-nosupportview/NoSupportView":673}],673:[function(d,f,a){var i=d("ac-mvc-view").View;
var c=d("ac-object");var b=d("ac-string");function h(){i.apply(this,arguments)}var g=h.prototype=c.create(i.prototype);
g.className=["ac-video-nosupport"];g.defaultOptions={template:'<a onclick="s_objectID=&quot;http://www.apple.com/quicktime/download/_1&quot;;return this.s_oc?this.s_oc(e):true" href="{downloadquicktimeurl}" class="ac-video-quicktime-download"><span class="ac-video-quicktime-download-title">{downloadquicktimetitle}</span><span class="ac-video-quicktime-download-text">{downloadquicktimetext}</span><span class="ac-video-quicktime-download-button">{downloadquicktimebutton}</span></a>'};
g.render=function(){this.el.innerHTML=b.supplant(this.options.template,this.model.attributes)
};f.exports=h},{"ac-mvc-view":662,"ac-object":1488,"ac-string":665}],674:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],675:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108,qs:674}],676:[function(b,f,a){var g=b("./request/factory");
var d={complete:function(j,i){},error:function(j,i){},method:"GET",headers:{},success:function(j,i,k){},timeout:5000};
var h=function(){for(var k=1;k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]};var c={ajax:function(i,j){j=h({},d,j);if(i.substr(0,2)==="//"){i=window.location.protocol+i
}var k=g(i);k.open(j.method,i);k.setTransportHeaders(j.headers);k.setReadyStateChangeHandlers(j.complete,j.error,j.success);
k.setTimeout(j.timeout,j.error,j.complete);k.send(j.data);return k},get:function(i,j){j.method="GET";
return c.ajax(i,j)},head:function(i,j){j.method="HEAD";return c.ajax(i,j)},post:function(i,j){j.method="POST";
return c.ajax(i,j)}};f.exports=c},{"./request/factory":677}],677:[function(c,b,f){var j=c("./xmlhttprequest");
var i=c("./xdomainrequest");var h=/.*(?=:\/\/)/;var a=/^.*:\/\/|\/.+$/g;var d=window.XDomainRequest&&document.documentMode<10;
var g=function(l){if(!l.match(h)){return false}var k=l.replace(a,"");return k!==window.location.hostname
};b.exports=function(k,l){var m=d&&g(k)?i:j;return new m()}},{"./xdomainrequest":679,"./xmlhttprequest":680}],678:[function(b,d,a){var c=function(){};
c.create=function(){var f=function(){};f.prototype=c.prototype;return new f()};
c.prototype.open=function(g,f){g=g.toUpperCase();this.xhr.open(g,f)};c.prototype.send=function(f){this.xhr.send(f)
};c.prototype.setTimeout=function(h,g,f){this.xhr.ontimeout=function(){g(this.xhr,this.status);
f(this.xhr,this.status)}.bind(this)};c.prototype.setTransportHeaders=function(f){for(var g in f){this.xhr.setRequestHeader(g,f[g])
}};d.exports=c},{}],679:[function(b,f,a){var d=b("./request");var c=b("ac-object/toQueryParameters");
var g=function(){this.xhr=new XDomainRequest()};g.prototype=d.create();g.prototype.setReadyStateChangeHandlers=function(h,i,j){this.xhr.onerror=function(){i(this.xhr,this.status);
h(this.xhr,this.status)}.bind(this);this.xhr.onload=function(){j(this.xhr.responseText,this.xhr.status,this.xhr);
h(this.xhr,this.status)}.bind(this)};g.prototype.send=function(h){if(h&&typeof h==="object"){h=c(h)
}this.xhr.send(h)};g.prototype.setTransportHeaders=function(h){};f.exports=g},{"./request":678,"ac-object/toQueryParameters":675}],680:[function(b,d,a){var c=b("./request");
var f=function(){this.xhr=new XMLHttpRequest()};f.prototype=c.create();f.prototype.setReadyStateChangeHandlers=function(g,h,i){this.xhr.onreadystatechange=function(j){if(this.xhr.readyState===4){clearTimeout(this.timeout);
if(this.xhr.status>=200&&this.xhr.status<300){i(this.xhr.responseText,this.xhr.status,this.xhr);
g(this.xhr,this.status)}else{h(this.xhr,this.status);g(this.xhr,this.status)}}}.bind(this)
};d.exports=f},{"./request":678}],681:[function(b,c,a){c.exports={log:b("./ac-console/log")}
},{"./ac-console/log":682}],682:[function(d,f,b){var a="f7c9180f-5c45-47b4-8de4-428015f096c0";
var c=!!(function(){try{return window.localStorage.getItem(a)}catch(h){}}());f.exports=function g(){if(window.console&&typeof console.log!=="undefined"&&c){console.log.apply(console,Array.prototype.slice.call(arguments,0))
}}},{}],683:[function(b,c,a){(function(d,f){if(typeof a==="object"&&a){c.exports=f
}else{if(typeof define==="function"&&define.amd){define(f)}else{d.Deferred=f}}}(this,(function(){var g={};
var f,l,n,d,k,j,m,h;f={0:"pending",1:"resolved",2:"rejected"};l=function(r,t){var q,u,s,p,o;
if(this._status!==0){if(console&&console.warn){console.warn("Trying to fulfill more than once.")
}return false}this.data=t;u=this.pending;s=u.length;for(q=0;q<s;q++){p=u[q];if(p[r]){o=p[r](t)
}if(typeof o==="object"&&o.hasOwnProperty("then")&&o.hasOwnProperty("status")){o.then(function(v){p.deferred.resolve(v)
},function(v){p.deferred.reject(v)},function(v){p.deferred.progress(v)})}else{p.deferred[r](o||undefined)
}}if(r!=="progress"){u=[]}return true};j=function(p,o){this.then=p;this.status=o
};m=j.prototype;h=function(o){return o};m.success=function(p,o){return this.then(p.bind(o),h,h)
};m.fail=function(p,o){return this.then(h,p.bind(o),h)};m.progress=function(p,o){return this.then(h,h,p.bind(o))
};d=function(o){if(typeof o!=="function"){return function(){}}return o};n=function(q,p,o){this.resolve=d(q);
this.reject=d(p);this.progress=d(o);this.deferred=new k()};k=function(){this.pending=[];
this._status=0;this._promise=new j(this.then.bind(this),this.status.bind(this))
};k.prototype={status:function(){return f[this._status]},promise:function(){return this._promise
},progress:function(o){l.call(this,"progress",o);return this._promise},resolve:function(o){l.call(this,"resolve",o);
if(this._status===0){this._status=1}return this._promise},reject:function(o){l.call(this,"reject",o);
if(this._status===0){this._status=2}return this._promise},then:function(s,q,p){var o,r;
r=new n(s,q,p);if(this._status===0){this.pending.push(r)}else{if(this._status===1&&typeof s==="function"){o=s(this.data);
if(typeof o==="object"&&o.hasOwnProperty("then")&&o.hasOwnProperty("status")){o.then(function(t){r.deferred.resolve(t)
},function(t){r.deferred.reject(t)},function(t){r.deferred.progress(t)})}else{r.deferred.resolve(o)
}}else{if(this._status===2&&typeof q==="function"){o=q(this.data);r.deferred.reject(o)
}}}return r.deferred.promise()}};var i=function(){var q,p,s,r,o;q=[].slice.call(arguments);
p=new k();s=0;r=function(u){s--;var t=q.indexOf(this);q[t]=u;if(s===0){p.resolve(q)
}};o=function(t){p.reject(t)};q.forEach(function(t){if(t.then){s++}});q.forEach(function(t){if(t.then){t.then(r.bind(t),o)
}});return p.promise()};k.when=i;g.Deferred=k;return g}())))},{}],684:[function(c,b,d){function g(){}g.prototype={resolve:function h(){this._defer.resolve.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},reject:function j(){this._defer.reject.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},progress:function a(){var k="ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
console.warn(k);this._defer.progress.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},then:function f(){this._defer.then.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},promise:function i(){return this._defer.promise.apply(this._defer,Array.prototype.slice.call(arguments))
}};b.exports=g},{}],685:[function(c,d,a){var h=new (c("./ac-deferred/Deferred"))(),g=c("smartsign-deferred").Deferred;
function b(){this._defer=new g()}b.prototype=h;d.exports.join=function i(){return g.when.apply(null,[].slice.call(arguments))
};d.exports.all=function f(j){return g.when.apply(null,j)};d.exports.Deferred=b
},{"./ac-deferred/Deferred":684,"smartsign-deferred":683}],686:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":687,dup:69}],687:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":688,dup:70}],688:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],689:[function(b,c,a){arguments[4][341][0].apply(a,arguments)},{"./ac-dom-events/addEventListener":690,"./ac-dom-events/dispatchEvent":691,"./ac-dom-events/preventDefault":692,"./ac-dom-events/removeEventListener":693,"./ac-dom-events/stop":694,"./ac-dom-events/stopPropagation":695,"./ac-dom-events/target":696,dup:341}],690:[function(b,c,a){arguments[4][319][0].apply(a,arguments)
},{"ac-prefixer":686,dup:319}],691:[function(b,c,a){arguments[4][320][0].apply(a,arguments)
},{dup:320}],692:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],693:[function(b,c,a){arguments[4][321][0].apply(a,arguments)
},{"ac-prefixer":686,dup:321}],694:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{"./preventDefault":692,"./stopPropagation":695,dup:31}],695:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{dup:32}],696:[function(b,c,a){arguments[4][348][0].apply(a,arguments)},{dup:348}],697:[function(b,c,a){arguments[4][349][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":698,"./ac-dom-traversal/ancestors":699,"./ac-dom-traversal/children":700,"./ac-dom-traversal/filterBySelector":701,"./ac-dom-traversal/firstChild":702,"./ac-dom-traversal/lastChild":705,"./ac-dom-traversal/matchesSelector":706,"./ac-dom-traversal/nextSibling":707,"./ac-dom-traversal/nextSiblings":708,"./ac-dom-traversal/previousSibling":709,"./ac-dom-traversal/previousSiblings":710,"./ac-dom-traversal/querySelector":711,"./ac-dom-traversal/querySelectorAll":712,"./ac-dom-traversal/shims/ie":713,"./ac-dom-traversal/siblings":714,dup:349}],698:[function(b,c,a){arguments[4][350][0].apply(a,arguments)
},{"./helpers/validate":704,"./matchesSelector":706,"ac-dom-nodes":728,dup:350}],699:[function(b,c,a){arguments[4][351][0].apply(a,arguments)
},{"./helpers/validate":704,"./matchesSelector":706,"ac-dom-nodes":728,dup:351}],700:[function(b,c,a){arguments[4][352][0].apply(a,arguments)
},{"./filterBySelector":701,"./helpers/validate":704,"ac-dom-nodes":728,dup:352}],701:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./helpers/validate":704,"./matchesSelector":706,dup:353}],702:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./children":700,"./helpers/validate":704,dup:354}],703:[function(b,c,a){arguments[4][355][0].apply(a,arguments)
},{dup:355}],704:[function(b,c,a){arguments[4][356][0].apply(a,arguments)},{"ac-dom-nodes":728,dup:356}],705:[function(b,c,a){arguments[4][357][0].apply(a,arguments)
},{"./children":700,"./helpers/validate":704,dup:357}],706:[function(b,c,a){arguments[4][358][0].apply(a,arguments)
},{"./helpers/nativeMatches":703,"./helpers/validate":704,"ac-dom-nodes":728,dup:358}],707:[function(b,c,a){arguments[4][359][0].apply(a,arguments)
},{"./helpers/validate":704,"./matchesSelector":706,"ac-dom-nodes":728,dup:359}],708:[function(b,c,a){arguments[4][360][0].apply(a,arguments)
},{"./helpers/validate":704,"./matchesSelector":706,"ac-dom-nodes":728,dup:360}],709:[function(b,c,a){arguments[4][361][0].apply(a,arguments)
},{"./helpers/validate":704,"./matchesSelector":706,"ac-dom-nodes":728,dup:361}],710:[function(b,c,a){arguments[4][362][0].apply(a,arguments)
},{"./helpers/validate":704,"./matchesSelector":706,"ac-dom-nodes":728,dup:362}],711:[function(b,c,a){arguments[4][363][0].apply(a,arguments)
},{"./helpers/validate":704,dup:363}],712:[function(b,c,a){arguments[4][364][0].apply(a,arguments)
},{"./helpers/validate":704,dup:364}],713:[function(b,c,a){arguments[4][365][0].apply(a,arguments)
},{"../helpers/nativeMatches":703,"../helpers/validate":704,"../vendor/sizzle/sizzle":715,"ac-dom-nodes":728,dup:365}],714:[function(b,c,a){arguments[4][366][0].apply(a,arguments)
},{"./children":700,"./helpers/validate":704,dup:366}],715:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],716:[function(b,c,a){arguments[4][368][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":717,dup:368}],717:[function(b,c,a){arguments[4][369][0].apply(a,arguments)
},{"./DOMEmitterEvent":718,"ac-dom-events":689,"ac-dom-traversal":697,"ac-event-emitter":278,dup:369}],718:[function(b,c,a){arguments[4][370][0].apply(a,arguments)
},{"ac-dom-events":689,dup:370}],719:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{dup:42}],720:[function(b,c,a){arguments[4][43][0].apply(a,arguments)},{dup:43}],721:[function(b,c,a){arguments[4][44][0].apply(a,arguments)
},{dup:44}],722:[function(b,c,a){arguments[4][45][0].apply(a,arguments)},{dup:45}],723:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{dup:46}],724:[function(b,c,a){arguments[4][47][0].apply(a,arguments)},{dup:47}],725:[function(b,c,a){arguments[4][48][0].apply(a,arguments)
},{dup:48}],726:[function(b,c,a){arguments[4][49][0].apply(a,arguments)},{"./ELEMENT_NODE":723,"./internal/isNodeType":734,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:49}],727:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{dup:50}],728:[function(b,c,a){arguments[4][51][0].apply(a,arguments)},{"./COMMENT_NODE":719,"./DOCUMENT_FRAGMENT_NODE":720,"./DOCUMENT_NODE":721,"./DOCUMENT_TYPE_NODE":722,"./ELEMENT_NODE":723,"./TEXT_NODE":724,"./createDocumentFragment":725,"./filterByNodeType":726,"./hasAttribute":727,"./indexOf":729,"./insertAfter":730,"./insertBefore":731,"./insertFirstChild":732,"./insertLastChild":733,"./isComment":736,"./isDocument":737,"./isDocumentFragment":738,"./isDocumentType":739,"./isElement":740,"./isNode":741,"./isNodeList":742,"./isTextNode":743,"./remove":744,"./replace":745,dup:51}],729:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"./filterByNodeType":726,"./internal/validate":735,"ac-polyfills/Array/prototype.indexOf":1497,"ac-polyfills/Array/prototype.slice":1498,dup:52}],730:[function(b,c,a){arguments[4][53][0].apply(a,arguments)
},{"./internal/validate":735,dup:53}],731:[function(b,c,a){arguments[4][54][0].apply(a,arguments)
},{"./internal/validate":735,dup:54}],732:[function(b,c,a){arguments[4][55][0].apply(a,arguments)
},{"./internal/validate":735,dup:55}],733:[function(b,c,a){arguments[4][56][0].apply(a,arguments)
},{"./internal/validate":735,dup:56}],734:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"../isNode":741,dup:57}],735:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{"../COMMENT_NODE":719,"../DOCUMENT_FRAGMENT_NODE":720,"../ELEMENT_NODE":723,"../TEXT_NODE":724,"./isNodeType":734,dup:58}],736:[function(b,c,a){arguments[4][59][0].apply(a,arguments)
},{"./COMMENT_NODE":719,"./internal/isNodeType":734,dup:59}],737:[function(b,c,a){arguments[4][60][0].apply(a,arguments)
},{"./DOCUMENT_NODE":721,"./internal/isNodeType":734,dup:60}],738:[function(b,c,a){arguments[4][61][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":720,"./internal/isNodeType":734,dup:61}],739:[function(b,c,a){arguments[4][62][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":722,"./internal/isNodeType":734,dup:62}],740:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{"./ELEMENT_NODE":723,"./internal/isNodeType":734,dup:63}],741:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],742:[function(b,c,a){arguments[4][65][0].apply(a,arguments)},{dup:65}],743:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"./TEXT_NODE":724,"./internal/isNodeType":734,dup:66}],744:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"./internal/validate":735,dup:67}],745:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{"./internal/validate":735,dup:68}],746:[function(b,c,a){arguments[4][37][0].apply(a,arguments)
},{"./ac-dom-styles/ie":747,"./ac-dom-styles/vendorTransformHelper":748,dup:37}],747:[function(b,c,a){arguments[4][38][0].apply(a,arguments)
},{dup:38}],748:[function(b,c,a){arguments[4][39][0].apply(a,arguments)},{dup:39}],749:[function(c,f,b){var d={cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),localStorageAvailable:c("./ac-feature/localStorageAvailable")};
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
};f.exports=d},{"./ac-feature/cssPropertyAvailable":750,"./ac-feature/localStorageAvailable":751}],750:[function(c,f,b){var g=null;
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
}}return false}}},{}],751:[function(d,f,b){var a=null;f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],752:[function(b,c,a){c.exports={flatten:b("./ac-array/flatten"),intersection:b("./ac-array/intersection"),toArray:b("./ac-array/toArray"),union:b("./ac-array/union"),unique:b("./ac-array/unique"),without:b("./ac-array/without")}
},{"./ac-array/flatten":753,"./ac-array/intersection":754,"./ac-array/toArray":755,"./ac-array/union":756,"./ac-array/unique":757,"./ac-array/without":758}],753:[function(b,c,a){c.exports=function d(h){var f=[];
var g=function(i){if(Array.isArray(i)){i.forEach(g)}else{f.push(i)}};h.forEach(g);
return f}},{}],754:[function(b,c,a){c.exports=function d(n){if(!n){return[]}var m=arguments.length;
var k=0;var g=n.length;var f=[];var l;for(k;k<g;k++){l=n[k];if(f.indexOf(l)>-1){continue
}for(var h=1;h<m;h++){if(arguments[h].indexOf(l)<0){break}}if(h===m){f.push(l)}}return f
}},{}],755:[function(b,d,a){d.exports=function c(f){return Array.prototype.slice.call(f)
}},{}],756:[function(b,c,a){var g=b("./flatten");var f=b("./unique");c.exports=function d(h){return f(g(Array.prototype.slice.call(arguments)))
}},{"./flatten":753,"./unique":757}],757:[function(b,c,a){c.exports=function d(g){var f=function(h,i){if(h.indexOf(i)<0){h.push(i)
}return h};return g.reduce(f,[])}},{}],758:[function(b,d,a){d.exports=function c(f,n,m){var k;
var h=f.indexOf(n);var l=f.length;if(h>=0){if(m){k=f.slice(0,l);var j,g=0;for(j=h;
j<l;j++){if(f[j]===n){k.splice(j-g,1);g++}}}else{if(h===(l-1)){k=f.slice(0,(l-1))
}else{if(h===0){k=f.slice(1)}else{k=f.slice(0,h);k=k.concat(f.slice(h+1))}}}}else{return f
}return k}},{}],759:[function(b,c,a){arguments[4][569][0].apply(a,arguments)},{"./ac-shared-instance/SharedInstance":760,dup:569}],760:[function(b,c,a){arguments[4][570][0].apply(a,arguments)
},{dup:570}],761:[function(b,c,a){arguments[4][571][0].apply(a,arguments)},{"./ac-mvc-cid/CID":762,dup:571}],762:[function(b,c,a){arguments[4][572][0].apply(a,arguments)
},{"ac-shared-instance":759,dup:572}],763:[function(b,c,a){c.exports={Collection:b("./ac-mvc-collection/Collection")}
},{"./ac-mvc-collection/Collection":764}],764:[function(d,b,j){var g=d("ac-object"),m=d("ac-array"),c=d("ac-mvc-cid").CID,n=d("ac-event-emitter").EventEmitter;
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
}},k);b.exports=h},{"ac-array":752,"ac-event-emitter":278,"ac-mvc-cid":761,"ac-object":803}],765:[function(b,c,a){arguments[4][569][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":766,dup:569}],766:[function(b,c,a){arguments[4][570][0].apply(a,arguments)
},{dup:570}],767:[function(b,c,a){arguments[4][571][0].apply(a,arguments)},{"./ac-mvc-cid/CID":768,dup:571}],768:[function(b,c,a){arguments[4][572][0].apply(a,arguments)
},{"ac-shared-instance":765,dup:572}],769:[function(b,c,a){arguments[4][584][0].apply(a,arguments)
},{"./ac-mvc-model/Model":770,dup:584}],770:[function(b,c,a){arguments[4][585][0].apply(a,arguments)
},{"ac-event-emitter":278,"ac-mvc-cid":767,"ac-object":803,dup:585}],771:[function(b,c,a){arguments[4][332][0].apply(a,arguments)
},{"./ac-classlist/add":772,"./ac-classlist/contains":773,"./ac-classlist/remove":775,"./ac-classlist/toggle":776,dup:332}],772:[function(b,c,a){arguments[4][333][0].apply(a,arguments)
},{"./helpers/className":774,dup:333}],773:[function(b,c,a){arguments[4][334][0].apply(a,arguments)
},{"./helpers/className":774,dup:334}],774:[function(b,c,a){arguments[4][335][0].apply(a,arguments)
},{dup:335}],775:[function(b,c,a){arguments[4][336][0].apply(a,arguments)},{"./helpers/className":774,dup:336}],776:[function(b,c,a){arguments[4][337][0].apply(a,arguments)
},{"./helpers/className":774,dup:337}],777:[function(b,c,a){arguments[4][628][0].apply(a,arguments)
},{"./ac-dom-nodes/createDocumentFragment":778,"./ac-dom-nodes/filterByNodeType":779,"./ac-dom-nodes/helpers/nodeTypes":781,"./ac-dom-nodes/insertAfter":783,"./ac-dom-nodes/insertBefore":784,"./ac-dom-nodes/insertFirstChild":785,"./ac-dom-nodes/insertLastChild":786,"./ac-dom-nodes/isComment":787,"./ac-dom-nodes/isDocument":788,"./ac-dom-nodes/isDocumentFragment":789,"./ac-dom-nodes/isDocumentType":790,"./ac-dom-nodes/isElement":791,"./ac-dom-nodes/isNode":792,"./ac-dom-nodes/isTextNode":793,"./ac-dom-nodes/remove":794,"./ac-dom-nodes/replace":795,dup:628}],778:[function(b,c,a){arguments[4][372][0].apply(a,arguments)
},{dup:372}],779:[function(b,c,a){arguments[4][373][0].apply(a,arguments)},{"./helpers/isNodeType":780,"./helpers/nodeTypes":781,dup:373}],780:[function(b,c,a){arguments[4][374][0].apply(a,arguments)
},{"../isNode":792,dup:374}],781:[function(b,c,a){arguments[4][375][0].apply(a,arguments)
},{dup:375}],782:[function(b,c,a){arguments[4][376][0].apply(a,arguments)},{"./isNodeType":780,"./nodeTypes":781,dup:376}],783:[function(b,c,a){arguments[4][377][0].apply(a,arguments)
},{"./helpers/validate":782,dup:377}],784:[function(b,c,a){arguments[4][378][0].apply(a,arguments)
},{"./helpers/validate":782,dup:378}],785:[function(b,c,a){arguments[4][379][0].apply(a,arguments)
},{"./helpers/validate":782,dup:379}],786:[function(b,c,a){arguments[4][380][0].apply(a,arguments)
},{"./helpers/validate":782,dup:380}],787:[function(b,c,a){arguments[4][638][0].apply(a,arguments)
},{"./helpers/isNodeType":780,"./helpers/nodeTypes":781,dup:638}],788:[function(b,c,a){arguments[4][639][0].apply(a,arguments)
},{"./helpers/isNodeType":780,"./helpers/nodeTypes":781,dup:639}],789:[function(b,c,a){arguments[4][640][0].apply(a,arguments)
},{"./helpers/isNodeType":780,"./helpers/nodeTypes":781,dup:640}],790:[function(b,c,a){arguments[4][641][0].apply(a,arguments)
},{"./helpers/isNodeType":780,"./helpers/nodeTypes":781,dup:641}],791:[function(b,c,a){arguments[4][642][0].apply(a,arguments)
},{"./helpers/isNodeType":780,"./helpers/nodeTypes":781,dup:642}],792:[function(b,c,a){arguments[4][643][0].apply(a,arguments)
},{dup:643}],793:[function(b,c,a){arguments[4][644][0].apply(a,arguments)},{"./helpers/isNodeType":780,"./helpers/nodeTypes":781,dup:644}],794:[function(b,c,a){arguments[4][389][0].apply(a,arguments)
},{"./helpers/validate":782,dup:389}],795:[function(b,c,a){arguments[4][390][0].apply(a,arguments)
},{"./helpers/validate":782,dup:390}],796:[function(b,c,a){arguments[4][569][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":797,dup:569}],797:[function(b,c,a){arguments[4][570][0].apply(a,arguments)
},{dup:570}],798:[function(b,c,a){arguments[4][571][0].apply(a,arguments)},{"./ac-mvc-cid/CID":799,dup:571}],799:[function(b,c,a){arguments[4][572][0].apply(a,arguments)
},{"ac-shared-instance":796,dup:572}],800:[function(b,c,a){arguments[4][662][0].apply(a,arguments)
},{"./ac-mvc-view/View":801,dup:662}],801:[function(b,c,a){arguments[4][663][0].apply(a,arguments)
},{"ac-classlist":771,"ac-dom-emitter":716,"ac-dom-nodes":777,"ac-mvc-cid":798,"ac-object":803,dup:663}],802:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],803:[function(b,c,a){arguments[4][99][0].apply(a,arguments)},{"./ac-object/clone":804,"./ac-object/create":805,"./ac-object/defaults":806,"./ac-object/extend":807,"./ac-object/getPrototypeOf":808,"./ac-object/isDate":809,"./ac-object/isEmpty":810,"./ac-object/isRegExp":811,"./ac-object/toQueryParameters":812,dup:99}],804:[function(b,c,a){arguments[4][100][0].apply(a,arguments)
},{"./extend":807,dup:100}],805:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],806:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":807,dup:102}],807:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{dup:103}],808:[function(b,c,a){arguments[4][104][0].apply(a,arguments)},{dup:104}],809:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],810:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],811:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],812:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108,qs:802}],813:[function(b,c,a){arguments[4][206][0].apply(a,arguments)
},{"./ac-browser/BrowserData":814,"./ac-browser/IE":815,dup:206}],814:[function(b,c,a){arguments[4][207][0].apply(a,arguments)
},{"./data":816,dup:207}],815:[function(b,c,a){arguments[4][208][0].apply(a,arguments)
},{dup:208}],816:[function(b,c,a){arguments[4][139][0].apply(a,arguments)},{dup:139}],817:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":818,dup:69}],818:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":819,dup:70}],819:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],820:[function(b,c,a){arguments[4][287][0].apply(a,arguments)},{"./ac-feature/canvasAvailable":821,"./ac-feature/continuousScrollEventsAvailable":822,"./ac-feature/cookiesAvailable":823,"./ac-feature/cssLinearGradientAvailable":824,"./ac-feature/cssPropertyAvailable":825,"./ac-feature/helpers/memoize":827,"./ac-feature/isDesktop":828,"./ac-feature/isHandheld":829,"./ac-feature/isRetina":830,"./ac-feature/isTablet":831,"./ac-feature/localStorageAvailable":832,"./ac-feature/mediaElementsAvailable":833,"./ac-feature/sessionStorageAvailable":834,"./ac-feature/svgAvailable":835,"./ac-feature/threeDTransformsAvailable":836,"./ac-feature/touchAvailable":837,"./ac-feature/webGLAvailable":838,dup:287}],821:[function(b,c,a){arguments[4][288][0].apply(a,arguments)
},{"./helpers/globals":826,dup:288}],822:[function(b,c,a){arguments[4][289][0].apply(a,arguments)
},{"./touchAvailable":837,"ac-browser":813,dup:289}],823:[function(b,c,a){arguments[4][290][0].apply(a,arguments)
},{"./helpers/globals":826,dup:290}],824:[function(b,c,a){arguments[4][291][0].apply(a,arguments)
},{"./cssPropertyAvailable":825,dup:291}],825:[function(b,c,a){arguments[4][292][0].apply(a,arguments)
},{"ac-prefixer":817,dup:292}],826:[function(b,c,a){arguments[4][197][0].apply(a,arguments)
},{dup:197}],827:[function(b,c,a){arguments[4][294][0].apply(a,arguments)},{dup:294}],828:[function(b,c,a){arguments[4][295][0].apply(a,arguments)
},{"./helpers/globals":826,"./touchAvailable":837,dup:295}],829:[function(b,c,a){arguments[4][296][0].apply(a,arguments)
},{"./isDesktop":828,"./isTablet":831,dup:296}],830:[function(b,c,a){arguments[4][297][0].apply(a,arguments)
},{"./helpers/globals":826,dup:297}],831:[function(b,c,a){arguments[4][298][0].apply(a,arguments)
},{"./helpers/globals":826,"./isDesktop":828,dup:298}],832:[function(b,c,a){arguments[4][299][0].apply(a,arguments)
},{"./helpers/globals":826,dup:299}],833:[function(b,c,a){arguments[4][300][0].apply(a,arguments)
},{"./helpers/globals":826,dup:300}],834:[function(b,c,a){arguments[4][301][0].apply(a,arguments)
},{"./helpers/globals":826,dup:301}],835:[function(b,c,a){arguments[4][302][0].apply(a,arguments)
},{"./helpers/globals":826,dup:302}],836:[function(b,c,a){arguments[4][303][0].apply(a,arguments)
},{"./cssPropertyAvailable":825,dup:303}],837:[function(b,c,a){arguments[4][304][0].apply(a,arguments)
},{"./helpers/globals":826,dup:304}],838:[function(b,c,a){arguments[4][305][0].apply(a,arguments)
},{"./helpers/globals":826,dup:305}],839:[function(b,d,a){var c={};c.addEventListener=function(j,h,i,g){if(j.addEventListener){j.addEventListener(h,i,g)
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
};d.exports=c},{}],840:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h=1;if(i){h=b(g).width/g.offsetWidth}return{width:g.scrollWidth*h,height:g.scrollHeight*h}
}},{"./utils/getBoundingClientRect":851}],841:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
}return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":851}],842:[function(g,h,f){var c=g("./getDimensions");
var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
h.exports=function i(j,p){var l;var o;var m;var k;var n;if(p){l=d(j);o=b();m=a();
return{top:l.top+m,right:l.right+o,bottom:l.bottom+m,left:l.left+o}}k=c(j,p);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};
while(j=j.offsetParent){l.top+=j.offsetTop;l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
}},{"./getDimensions":841,"./getScrollX":846,"./getScrollY":847,"./utils/getBoundingClientRect":851}],843:[function(c,f,b){var a=c("./getDimensions");
var g=c("./getPixelsInViewport");f.exports=function d(j,k){var i=g(j,k);var h=a(j,k).height;
return(i/h)}},{"./getDimensions":841,"./getPixelsInViewport":844}],844:[function(c,d,b){var a=c("./getViewportPosition");
d.exports=function f(h,k){var j=document.documentElement.clientHeight;var g=a(h,k);
var i;if(g.top>=j||g.bottom<=0){return 0}i=(g.bottom-g.top);if(g.top<0){i+=g.top
}if(g.bottom>j){i-=g.bottom-j}return i}},{"./getViewportPosition":848}],845:[function(d,f,c){var a=d("./getDimensions");
var b=d("./utils/getBoundingClientRect");f.exports=function g(i,l){var k;var h;
var j;if(l){k=b(i);if(i.offsetParent){h=b(i.offsetParent);k.top-=h.top;k.left-=h.left
}}else{j=a(i,l);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height}
}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}}},{"./getDimensions":841,"./utils/getBoundingClientRect":851}],846:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageXOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollLeft}},{}],847:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],848:[function(g,h,f){var i=g("./getPagePosition");
var d=g("./utils/getBoundingClientRect");var c=g("./getScrollX");var b=g("./getScrollY");
h.exports=function a(k,n){var j;var m;var l;if(n){j=d(k);return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}
}j=i(k);m=c();l=b();return{top:j.top-l,right:j.right-m,bottom:j.bottom-l,left:j.left-m}
}},{"./getPagePosition":842,"./getScrollX":846,"./getScrollY":847,"./utils/getBoundingClientRect":851}],849:[function(b,c,a){c.exports={getContentDimensions:b("./getContentDimensions"),getDimensions:b("./getDimensions"),getPagePosition:b("./getPagePosition"),getPercentInViewport:b("./getPercentInViewport"),getPixelsInViewport:b("./getPixelsInViewport"),getPosition:b("./getPosition"),getScrollX:b("./getScrollX"),getScrollY:b("./getScrollY"),getViewportPosition:b("./getViewportPosition"),isInViewport:b("./isInViewport")}
},{"./getContentDimensions":840,"./getDimensions":841,"./getPagePosition":842,"./getPercentInViewport":843,"./getPixelsInViewport":844,"./getPosition":845,"./getScrollX":846,"./getScrollY":847,"./getViewportPosition":848,"./isInViewport":850}],850:[function(b,d,a){var g=b("./getPixelsInViewport");
var c=b("./getPercentInViewport");d.exports=function f(j,k,h){var i;h=h||0;if(typeof h==="string"&&h.slice(-2)==="px"){h=parseInt(h,10);
i=g(j,k)}else{i=c(j,k)}return(i>0&&i>=h)}},{"./getPercentInViewport":843,"./getPixelsInViewport":844}],851:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],852:[function(b,c,a){arguments[4][349][0].apply(a,arguments)},{"./ac-dom-traversal/ancestor":853,"./ac-dom-traversal/ancestors":854,"./ac-dom-traversal/children":855,"./ac-dom-traversal/filterBySelector":856,"./ac-dom-traversal/firstChild":857,"./ac-dom-traversal/lastChild":860,"./ac-dom-traversal/matchesSelector":861,"./ac-dom-traversal/nextSibling":862,"./ac-dom-traversal/nextSiblings":863,"./ac-dom-traversal/previousSibling":864,"./ac-dom-traversal/previousSiblings":865,"./ac-dom-traversal/querySelector":866,"./ac-dom-traversal/querySelectorAll":867,"./ac-dom-traversal/shims/ie":868,"./ac-dom-traversal/siblings":869,dup:349}],853:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&a.isElement(k)&&(!j||b(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!j||b(k,j)){return k
}if(k===document.body){break}}}return null}},{"./helpers/validate":859,"./matchesSelector":861,"ac-dom-nodes":728}],854:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&a.isElement(l)&&(!j||b(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&a.isElement(l)){if(!j||b(l,j)){k.push(l)
}if(l===document.body){break}}}return k}},{"./helpers/validate":859,"./matchesSelector":861,"ac-dom-nodes":728}],855:[function(b,c,a){arguments[4][352][0].apply(a,arguments)
},{"./filterBySelector":856,"./helpers/validate":859,"ac-dom-nodes":728,dup:352}],856:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./helpers/validate":859,"./matchesSelector":861,dup:353}],857:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./children":855,"./helpers/validate":859,dup:354}],858:[function(b,c,a){arguments[4][355][0].apply(a,arguments)
},{dup:355}],859:[function(b,c,a){arguments[4][356][0].apply(a,arguments)},{"ac-dom-nodes":728,dup:356}],860:[function(b,c,a){arguments[4][357][0].apply(a,arguments)
},{"./children":855,"./helpers/validate":859,dup:357}],861:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var i=f("./helpers/validate");var h=f("./vendor/sizzle/sizzle");
g.exports=function c(k,j){i.selector(j,true,"matchesSelector");if(!b.isElement(k)){return false
}if(!a){return h.matchesSelector(k,j)}return a.call(k,j)}},{"./helpers/nativeMatches":858,"./helpers/validate":859,"./vendor/sizzle/sizzle":870,"ac-dom-nodes":728}],862:[function(b,c,a){arguments[4][359][0].apply(a,arguments)
},{"./helpers/validate":859,"./matchesSelector":861,"ac-dom-nodes":728,dup:359}],863:[function(b,c,a){arguments[4][360][0].apply(a,arguments)
},{"./helpers/validate":859,"./matchesSelector":861,"ac-dom-nodes":728,dup:360}],864:[function(b,c,a){arguments[4][361][0].apply(a,arguments)
},{"./helpers/validate":859,"./matchesSelector":861,"ac-dom-nodes":728,dup:361}],865:[function(b,c,a){arguments[4][362][0].apply(a,arguments)
},{"./helpers/validate":859,"./matchesSelector":861,"ac-dom-nodes":728,dup:362}],866:[function(b,c,a){arguments[4][363][0].apply(a,arguments)
},{"./helpers/validate":859,dup:363}],867:[function(b,c,a){arguments[4][364][0].apply(a,arguments)
},{"./helpers/validate":859,dup:364}],868:[function(c,d,b){var f=c("../vendor/sizzle/sizzle");
var a=c("ac-dom-nodes");var g=c("../helpers/validate");d.exports=function(i,h){if(h||!("querySelectorAll" in document)){i.querySelectorAll=function(j,l){var k;
var m;l=l||document;g.parentNode(l,true,"querySelectorAll","context");g.selector(j,true,"querySelectorAll");
if(a.isDocumentFragment(l)){k=i.children(l);m=[];k.forEach(function(o){var n;if(f.matchesSelector(o,j)){m.push(o)
}n=f(j,o);if(n.length){m=m.concat(n)}});return m}return f(j,l)};i.querySelector=function(k,l){var j;
l=l||document;g.parentNode(l,true,"querySelector","context");g.selector(k,true,"querySelector");
j=i.querySelectorAll(k,l);return j.length?j[0]:null}}}},{"../helpers/validate":859,"../vendor/sizzle/sizzle":870,"ac-dom-nodes":728}],869:[function(b,c,a){arguments[4][366][0].apply(a,arguments)
},{"./children":855,"./helpers/validate":859,dup:366}],870:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],871:[function(b,c,a){c.exports.Slider=b("./ac-slider/Slider")},{"./ac-slider/Slider":872}],872:[function(f,d,h){var a=f("ac-dom-traversal");
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
},{"ac-dom-events":839,"ac-dom-metrics":849,"ac-dom-traversal":852,"ac-event-emitter":278}],873:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],874:[function(b,c,a){arguments[4][552][0].apply(a,arguments)},{"./ac-string/isString":875,"./ac-string/queryParameters":876,"./ac-string/queryStringToObject":877,"./ac-string/supplant":878,"./ac-string/toCamelCase":879,"./ac-string/toQueryPair":880,dup:552}],875:[function(b,c,a){arguments[4][553][0].apply(a,arguments)
},{dup:553}],876:[function(b,c,a){arguments[4][554][0].apply(a,arguments)},{"./queryStringToObject":877,dup:554}],877:[function(b,c,a){arguments[4][555][0].apply(a,arguments)
},{dup:555,qs:873}],878:[function(b,c,a){arguments[4][556][0].apply(a,arguments)
},{dup:556}],879:[function(b,c,a){arguments[4][557][0].apply(a,arguments)},{dup:557}],880:[function(b,c,a){arguments[4][558][0].apply(a,arguments)
},{dup:558}],881:[function(c,f,b){var h=c("./view");var g=c("./model");var d=c("./elements/element");
var a={create:function(j,l){j=j||{};l=l||{};j.elementClassPrefix=j.elementClassPrefix||"controls";
l.elementClassPrefix=j.elementClassPrefix;var k=this.Model(l);var i=this.View(Object.assign({},j,{model:k}));
i.initialize();return i},Model:g,View:h,element:d};f.exports=a},{"./elements/element":884,"./model":902,"./view":904}],882:[function(d,g,b){var c=d("ac-classlist");
var f=d("./element");var a=f.newType({className:"thirty-seconds-back-button",events:[{type:"click",callback:"thirySecondsBack"}],thirySecondsBack:function(){var i=this.player.getCurrentTime();
var h=i-30;this.player.setCurrentTime((h<0)?0:h)}});g.exports=a},{"./element":884,"ac-classlist":8}],883:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"elapsed-time",_initialize:function(){this.options.model.on("change:elapsedTime",this._setElapsedTime,this)
},_setElapsedTime:function(g){this.el.innerHTML=g.value||g}});f.exports=a},{"./element":884}],884:[function(b,d,a){var c={className:"",create:function(h,g){var f=Object.create(this);
f.el=h;f.options=g;f.player=g.player;f._initialize();return f},events:[],newType:function(f){var g=Object.assign({},this,f);
return g},setElementAttributes:function(){this.elementAttributeString.forEach(function(f){var g;
if(typeof f==="string"){g=this._getLocalizationAttribute(f);this._setAttributeText(g)
}else{if(this[f.condition]()){g=this._getLocalizationAttribute(f.string);this._setAttributeText(g)
}}},this)},_getLocalizationAttribute:function(f){return this.options.model.get(f)
},_initialize:function(){this.elementAttributeString=this.elementAttributeString||[];
this.setElementAttributes()},_setAttributeText:function(f){["value","aria-label"].forEach(function(g){this.el.setAttribute(g,f)
},this)}};d.exports=c},{}],885:[function(b,a,d){var c=b("ac-classlist");var g=b("ac-fullscreen");
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
a.exports=h},{"./element":884,"ac-classlist":8,"ac-feature":820,"ac-fullscreen":306}],886:[function(b,d,a){var c=b("./element");
var f=c.newType({className:"max-volume-button",events:[{type:"click",callback:"maxVolume"}],maxVolume:function(){this.options.player.setMuted(false);
this.options.player.setVolume(1)}});d.exports=f},{"./element":884}],887:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"min-volume-button",events:[{type:"click",callback:"minVolume"}],minVolume:function(){this.options.player.setMuted(false);
this.options.player.setVolume(0)}});f.exports=a},{"./element":884}],888:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"mute-volume-button",events:[{type:"click",callback:"mute"}],mute:function(){this.options.player.setMuted(true)
}});f.exports=a},{"./element":884}],889:[function(b,d,a){var c=b("./element");var f=c.newType({className:"toggle-mute-volume-button",events:[{type:"click",callback:"toggleMutedVolume"}],toggleMutedVolume:function(){var g=this.options.player.getMuted()?false:true;
this.options.player.setMuted(g)}});d.exports=f},{"./element":884}],890:[function(b,d,a){var c=b("./element");
var f=c.newType({className:"pause-button",events:[{type:"click",callback:"pause"}],pause:function(){this.options.player.pause()
}});d.exports=f},{"./element":884}],891:[function(b,d,a){var c=b("./element");var f=c.newType({className:"play-button",events:[{type:"click",callback:"play"}],play:function(){this.options.player.play()
}});d.exports=f},{"./element":884}],892:[function(c,f,a){var b=c("ac-classlist");
var d=c("./element");var g=d.newType({className:"play-pause-button",events:[{type:"click",callback:"playPauseToggle"}],elementAttributeString:[{condition:"playerIsPlaying",string:"pause"},{condition:"playerIsPaused",string:"play"}],playerIsPlaying:function(){return !this.player.getPaused()
},playerIsPaused:function(){return this.player.getPaused()},playPauseToggle:function(){if(this.player.getPaused()){this.player.play()
}else{this.player.pause()}},_addEventListeners:function(){this.player.on("play pause",this._handleStateChange,this)
},_handleStateChange:function(){this._toggleIsPlayingClass();this.setElementAttributes()
},_initialize:function(){d._initialize.call(this);this._addEventListeners();this._handleStateChange()
},_toggleIsPlayingClass:function(){var h=this.player.getPaused()?"remove":"add";
b[h](this.el,"is-playing")}});f.exports=g},{"./element":884,"ac-classlist":8}],893:[function(f,d,i){var j=f("./element");
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
}},b,c));d.exports=g},{"../mixins/cursor-pointer":900,"../mixins/get-model-attribute":901,"./element":884,"ac-classlist":8,"ac-dom-events":234,"ac-dom-traversal":253,"ac-slider":871}],894:[function(c,g,a){var f=c("./element");
var b=c("../mixins/get-model-attribute");var d=f.newType(Object.assign({},{className:"remaining-time",_bindUpdateRemainingTimeIndicator:function(){return this._updateRemainingTimeIndicator.bind(this)
},_initialize:function(){this._updateRemainingTimeIndicator=this._bindUpdateRemainingTimeIndicator();
this.options.model.on("change:remainingTime",this._updateRemainingTimeIndicator,this);
this.getModelAttribute("remainingTime").then(this._updateRemainingTimeIndicator)
},_updateRemainingTimeIndicator:function(h){this.el.innerHTML=h.value||h}},b));
g.exports=d},{"../mixins/get-model-attribute":901,"./element":884}],895:[function(c,d,b){var a=c("./text-tracks");
var f=a.newType({className:"text-tracks-off-button",events:[{type:"click",callback:"textTracksOff"}],elementAttributeString:["captionsturnedoff"]});
d.exports=f},{"./text-tracks":898}],896:[function(d,f,b){var a=d("./text-tracks");
var c=a.newType({className:"text-tracks-on-button",events:[{type:"click",callback:"textTracksOn"}],elementAttributeString:["captionsturnedon"]});
f.exports=c},{"./text-tracks":898}],897:[function(d,f,b){var c=d("ac-classlist");
var a=d("./text-tracks");var g=a.newType({className:"text-tracks-toggle-button",events:[{type:"click",callback:"textTracksToggle"}],textTracksToggle:function(){var h=this._getTextTrackModeAndIndex();
var i=h.get("mode");if(i==="showing"){this.textTracksOff()}else{this.textTracksOn()
}},elementAttributeString:[{condition:"textTracksAreShowing",string:"captionsturnedoff"},{condition:"textTracksAreDisabled",string:"captionsturnedon"}],textTracksAreShowing:function(){return this.player.getVisibleTextTracks().models.length>0
},textTracksAreDisabled:function(){return this.player.getVisibleTextTracks().models.length===0
},_addEventListeners:function(){a._addEventListeners.call(this);this.player.on("texttrackshow texttrackhide",this.setElementAttributes,this)
}});f.exports=g},{"./text-tracks":898,"ac-classlist":8}],898:[function(f,h,c){var d=f("ac-classlist");
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
this[k]()}});h.exports=b},{"./element":884,"ac-classlist":8}],899:[function(f,d,h){var i=f("./element");
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
}}},b,c));d.exports=l},{"../mixins/cursor-pointer":900,"../mixins/get-model-attribute":901,"./element":884,"ac-classlist":8,"ac-dom-events":234,"ac-dom-traversal":253,"ac-slider":871}],900:[function(c,d,a){var b=c("ac-classlist");
var f=c("ac-dom-events");var g="cursor-pointer";d.exports={disableForcedCursorPointer:function(){b.remove(document.body,g);
this.onSelectStartResumeDefault()},forceCursorPointer:function(){b.add(document.body,g);
this.onSelectStartPreventDefault()},onSelectStartResumeDefault:function(){f.removeEventListener(document,"selectstart",this.preventDefault)
},onSelectStartPreventDefault:function(){f.addEventListener(document,"selectstart",this.preventDefault)
},preventDefault:function(h){f.preventDefault(h)}}},{"ac-classlist":8,"ac-dom-events":234}],901:[function(b,c,a){c.exports={getModelAttribute:function(d){return new Promise(function(g,f){if(this.options.model.has(d)){g(this.options.model.get(d))
}else{this.options.model.once("change:"+d,function(h){g(h.value)},this)}}.bind(this))
}}},{}],902:[function(c,d,a){var b=c("ac-mvc-model").Model;var h=c("ac-video-localization").localization;
var g=function(i){if(!(this instanceof g)){return new g(i)}b.apply(this,arguments);
this.initialize()};g.prototype=Object.create(b.prototype);var f=g.prototype;Object.assign(f,{defaultAttributes:{backthirtyseconds:"Back 30 Seconds",playpause:"Play/Pause",play:"Play",pause:"Pause",togglemutevolume:"Toggle Mute Volume",mutevolume:"Mute Volume",minvolume:"Min Volume",adjustvolume:"Adjust Volume",fastreverse:"Fast Reverse",fastforward:"Fast Forward",fullvolume:"Full Volume",fullscreen:"Full Screen",captionscontrol:"Closed Captions",captionsturnedon:"Closed Captions On",captionsturnedoff:"Closed Captions Off",subtitlescontrol:"Subtitles",subtitlesturnedon:"Subtitles On",subtitlesturnedoff:"Subtitles Off",sizescontrol:"Video Size",downloadcontrol:"Download Video",small:"Small",medium:"Medium",large:"Large",hd:"HD",ipod:"iPod/iPhone",mb:"MB",gb:"GB",tb:"TB",downloadquicktimetitle:"Get QuickTime.",downloadquicktimetext:"Download QuickTime to view this video. QuickTime is free for Mac + PC.",downloadquicktimebutton:"Download",downloadquicktimeurl:"http://www.apple.com/quicktime/download/",elapsed:"elapsed",remaining:"remaining"},getLocalizationPromise:function(){return h.create()
},initialize:function(){this.localize=this._bindLocalize();this.getLocalizationPromise().then(this.localize)
},localize:function(i){this.set(i.attributes);this.trigger("change:localization")
},_bindLocalize:function(){return this.localize.bind(this)}});d.exports=g},{"ac-mvc-model":769,"ac-video-localization":586}],903:[function(c,d,a){var b=c("ac-string");
var f={addLeadingZero:function(h,g){g=g||2;if(h<10||g>2){h=String(h);while(h.length<g){h="0"+h
}}return h},formatTime:function(j,g){if(isNaN(j)){return"00:00"}j=this.splitTime(Math.floor(j),function(k){return this.addLeadingZero(k,g)
}.bind(this));var h="{PN}{minutes}:{seconds}";var i=b.supplant(h,{PN:j.negativeModifier,minutes:j.minutes,seconds:j.seconds});
return i},splitTime:function(j,g){g=g||function(k){return k};var i={negativeModifier:"",minutes:0,seconds:0};
if(isNaN(j)){return i}i.negativeModifier=(j<0)?"-":"";j=Math.abs(j);i.minutes=Math.floor(j/60);
i.seconds=(j%60);for(var h in i){if(typeof i[h]!=="number"){continue}i[h]=g(i[h])
}return i}};d.exports=f},{"ac-string":874}],904:[function(g,d,j){var b=g("ac-dom-traversal");
var h=g("ac-string");var i=g("ac-classlist");var l=g("ac-mvc-view").View;var f=g("./time");
var a={"back-30-seconds-button":g("./elements/back-30-seconds-button"),"elapsed-time-indicator":g("./elements/elapsed-time-indicator"),element:g("./elements/element"),"full-screen-button":g("./elements/full-screen-button"),"max-volume-button":g("./elements/max-volume-button"),"min-volume-button":g("./elements/min-volume-button"),"mute-button":g("./elements/mute-button"),"mute-toggle-button":g("./elements/mute-toggle-button"),"pause-button":g("./elements/pause-button"),"play-button":g("./elements/play-button"),"play-pause-button":g("./elements/play-pause-button"),"progress-indicator":g("./elements/progress-indicator"),"remaining-time-indicator":g("./elements/remaining-time-indicator"),"text-tracks-off-button":g("./elements/text-tracks-off-button"),"text-tracks-on-button":g("./elements/text-tracks-on-button"),"text-tracks-toggle-button":g("./elements/text-tracks-toggle-button"),"text-tracks":g("./elements/text-tracks"),"volume-level-indicator":g("./elements/volume-level-indicator")};
var c=function(m){if(!(this instanceof c)){return new c(m)}l.apply(this,arguments);
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
this.on(n.type,q,r,p)}}});d.exports=c},{"./elements/back-30-seconds-button":882,"./elements/elapsed-time-indicator":883,"./elements/element":884,"./elements/full-screen-button":885,"./elements/max-volume-button":886,"./elements/min-volume-button":887,"./elements/mute-button":888,"./elements/mute-toggle-button":889,"./elements/pause-button":890,"./elements/play-button":891,"./elements/play-pause-button":892,"./elements/progress-indicator":893,"./elements/remaining-time-indicator":894,"./elements/text-tracks":898,"./elements/text-tracks-off-button":895,"./elements/text-tracks-on-button":896,"./elements/text-tracks-toggle-button":897,"./elements/volume-level-indicator":899,"./time":903,"ac-classlist":8,"ac-dom-traversal":253,"ac-mvc-view":800,"ac-string":874}],905:[function(b,c,a){c.exports={path:b("./ac-path/path")}
},{"./ac-path/path":906}],906:[function(b,c,a){function d(f){return d.parse(f)}d.basename=function(g,f){d._assertStr(g);
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
}};c.exports=d},{}],907:[function(b,c,a){c.exports={cname:b("./ac-cname/cname")}
},{"./ac-cname/cname":908}],908:[function(c,d,a){var f=c("ac-path").path;function b(g){return b.addPrefix(g)
}b._prefix=(function(){var g="http://images.apple.com/global/elements/blank.gif";return g.replace(/global\/.*/,"")
}());b.addPrefix=function(g){if(f.isAbsolute(g)){return g}b._assertRootRelative(g);
g=b._prefix+g.replace(/^\//,"");g=g.replace(/(^.+)(\/105\/)/,"$1/");return g};b.formatUrl=function(j,g,l,k){var i=f.format({dirname:j,filename:g,extname:l},k);
if(f.isAbsolute(i)){return i}b._assertRootRelative(j);var h=b.addPrefix(i);return h
};b._assertRootRelative=function(g){if(!f.isRootRelative(g)){throw new URIError("Only root-relative paths are currently supported")
}};d.exports=b},{"ac-path":905}],909:[function(b,c,a){arguments[4][189][0].apply(a,arguments)
},{"./helpers/globals":917,"ac-function/once":931,dup:189}],910:[function(b,c,a){arguments[4][190][0].apply(a,arguments)
},{"./touchAvailable":946,"ac-browser":926,"ac-function/once":931,dup:190}],911:[function(b,c,a){arguments[4][191][0].apply(a,arguments)
},{"./helpers/globals":917,"ac-function/once":931,dup:191}],912:[function(b,c,a){arguments[4][192][0].apply(a,arguments)
},{"ac-function/once":931,"ac-prefixer/getStyleValue":934,dup:192}],913:[function(b,c,a){arguments[4][193][0].apply(a,arguments)
},{"ac-function/memoize":930,"ac-prefixer/getStyleProperty":933,"ac-prefixer/getStyleValue":934,dup:193}],914:[function(b,c,a){arguments[4][194][0].apply(a,arguments)
},{"ac-function/once":931,"ac-prefixer/getStyleValue":934,dup:194}],915:[function(b,c,a){arguments[4][195][0].apply(a,arguments)
},{"./helpers/globals":917,"ac-function/memoize":930,dup:195}],916:[function(b,c,a){arguments[4][196][0].apply(a,arguments)
},{"ac-function/memoize":930,"ac-prefixer/getEventType":932,dup:196}],917:[function(b,c,a){arguments[4][197][0].apply(a,arguments)
},{dup:197}],918:[function(b,c,a){arguments[4][198][0].apply(a,arguments)},{"./canvasAvailable":909,"./continuousScrollEventsAvailable":910,"./cookiesAvailable":911,"./cssLinearGradientAvailable":912,"./cssPropertyAvailable":913,"./cssViewportUnitsAvailable":914,"./elementAttributeAvailable":915,"./eventTypeAvailable":916,"./isDesktop":919,"./isHandheld":920,"./isRetina":921,"./isTablet":922,"./localStorageAvailable":923,"./mediaElementsAvailable":924,"./mediaQueriesAvailable":925,"./sessionStorageAvailable":943,"./svgAvailable":944,"./threeDTransformsAvailable":945,"./touchAvailable":946,"./webGLAvailable":947,dup:198}],919:[function(b,c,a){arguments[4][199][0].apply(a,arguments)
},{"./helpers/globals":917,"./touchAvailable":946,"ac-function/once":931,dup:199}],920:[function(b,c,a){arguments[4][200][0].apply(a,arguments)
},{"./isDesktop":919,"./isTablet":922,"ac-function/once":931,dup:200}],921:[function(b,c,a){arguments[4][201][0].apply(a,arguments)
},{"./helpers/globals":917,dup:201}],922:[function(b,c,a){arguments[4][202][0].apply(a,arguments)
},{"./helpers/globals":917,"./isDesktop":919,"ac-function/once":931,dup:202}],923:[function(b,c,a){arguments[4][203][0].apply(a,arguments)
},{"./helpers/globals":917,"ac-function/once":931,dup:203}],924:[function(b,c,a){arguments[4][204][0].apply(a,arguments)
},{"./helpers/globals":917,"ac-function/once":931,dup:204}],925:[function(b,c,a){arguments[4][205][0].apply(a,arguments)
},{"./helpers/globals":917,"ac-function/once":931,"ac-polyfills/matchMedia":1503,dup:205}],926:[function(b,c,a){arguments[4][206][0].apply(a,arguments)
},{"./ac-browser/BrowserData":927,"./ac-browser/IE":928,dup:206}],927:[function(b,c,a){arguments[4][207][0].apply(a,arguments)
},{"./data":929,dup:207}],928:[function(b,c,a){arguments[4][208][0].apply(a,arguments)
},{dup:208}],929:[function(b,c,a){arguments[4][139][0].apply(a,arguments)},{dup:139}],930:[function(b,c,a){arguments[4][210][0].apply(a,arguments)
},{dup:210}],931:[function(b,c,a){arguments[4][211][0].apply(a,arguments)},{dup:211}],932:[function(b,c,a){arguments[4][24][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":935,"./shared/prefixHelper":937,"./utils/eventTypeAvailable":940,dup:24}],933:[function(b,c,a){arguments[4][213][0].apply(a,arguments)
},{"./shared/getStyleTestElement":936,"./shared/prefixHelper":937,"./shared/stylePropertyCache":938,"./utils/toCSS":941,"./utils/toDOM":942,dup:213}],934:[function(b,c,a){arguments[4][214][0].apply(a,arguments)
},{"./getStyleProperty":933,"./shared/prefixHelper":937,"./shared/stylePropertyCache":938,"./shared/styleValueAvailable":939,dup:214}],935:[function(b,c,a){arguments[4][25][0].apply(a,arguments)
},{dup:25}],936:[function(b,c,a){arguments[4][216][0].apply(a,arguments)},{dup:216}],937:[function(b,c,a){arguments[4][26][0].apply(a,arguments)
},{dup:26}],938:[function(b,c,a){arguments[4][218][0].apply(a,arguments)},{dup:218}],939:[function(b,c,a){arguments[4][219][0].apply(a,arguments)
},{"./getStyleTestElement":936,"./stylePropertyCache":938,dup:219}],940:[function(b,c,a){arguments[4][27][0].apply(a,arguments)
},{dup:27}],941:[function(b,c,a){arguments[4][221][0].apply(a,arguments)},{dup:221}],942:[function(b,c,a){arguments[4][222][0].apply(a,arguments)
},{dup:222}],943:[function(b,c,a){arguments[4][223][0].apply(a,arguments)},{"./helpers/globals":917,"ac-function/once":931,dup:223}],944:[function(b,c,a){arguments[4][224][0].apply(a,arguments)
},{"./helpers/globals":917,"ac-function/once":931,dup:224}],945:[function(b,c,a){arguments[4][225][0].apply(a,arguments)
},{"ac-function/once":931,"ac-prefixer/getStyleValue":934,dup:225}],946:[function(b,c,a){arguments[4][226][0].apply(a,arguments)
},{"./helpers/globals":917,"ac-function/once":931,dup:226}],947:[function(b,c,a){arguments[4][227][0].apply(a,arguments)
},{"./helpers/globals":917,"ac-function/once":931,dup:227}],948:[function(c,d,b){c("ac-polyfills/Array/isArray");
var h=c("./extend");var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;
for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
f(i[k],j[k])}else{i[k]=j[k]}}}}return i};d.exports=function g(j,i){if(i){return f({},j)
}return h({},j)}},{"./extend":951,"ac-polyfills/Array/isArray":1494}],949:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],950:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":951,dup:102}],951:[function(c,d,b){c("ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"ac-polyfills/Array/prototype.forEach":1496}],952:[function(b,c,a){arguments[4][104][0].apply(a,arguments)
},{dup:104}],953:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":948,"./create":949,"./defaults":950,"./extend":951,"./getPrototypeOf":952,"./isDate":954,"./isEmpty":955,"./isRegExp":956,"./toQueryParameters":958}],954:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],955:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],956:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],957:[function(b,c,a){arguments[4][98][0].apply(a,arguments)},{dup:98}],958:[function(b,c,a){arguments[4][108][0].apply(a,arguments)
},{dup:108,qs:957}],959:[function(c,d,b){var a=c("./ac-video-posterframe/factory");
d.exports={create:a.create,AttributePoster:c("./ac-video-posterframe/PosterAttribute"),ImageTagPoster:c("./ac-video-posterframe/PosterImageTag"),defaultPosterPath:c("./ac-video-posterframe/defaultPosterPath")}
},{"./ac-video-posterframe/PosterAttribute":960,"./ac-video-posterframe/PosterImageTag":961,"./ac-video-posterframe/defaultPosterPath":962,"./ac-video-posterframe/factory":963}],960:[function(d,f,b){var h=d("ac-mvc-view").View;
var c=d("ac-object");var i="ac-video-poster-hide";function a(){h.apply(this,arguments)
}var g=a.prototype=c.create(h.prototype);g._renderPoster=function(){if(this.model.hasPoster()){this.el.setAttribute("poster",this.model.getPoster())
}else{this.el.removeAttribute("poster")}};g.render=function(){this._renderPoster();
this.model.on("posterchange",this._renderPoster,this)};f.exports=a},{"ac-mvc-view":800,"ac-object":953}],961:[function(c,f,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");var i="ac-video-poster-hide";function d(){h.apply(this,arguments);
this._img=null}var g=d.prototype=b.create(h.prototype);g.tagName="div";g.className=["ac-video-poster"];
g._renderSrc=function(){if(this.model.hasPoster()){if(!this._img){this._img=document.createElement("img");
this.el.appendChild(this._img)}this._img.setAttribute("src",this.model.getPoster())
}else{if(this._img&&this._img.parentNode===this.el){this.el.removeChild(this._img);
this._img=null}}};g._hide=function(){this.addClassName(i)};g._show=function(){this.removeClassName(i)
};g._onPlay=function(){var j=this.model.getCurrentTime();if(j===0){this._show();
this.model.once("timeupdate",this._hide,this)}else{this._hide()}};g._onReadyStateChange=function(j){if(j.readyState===0){this._show()
}};g.render=function(){this._renderSrc();this.model.on("readystatechange",this._onReadyStateChange,this);
this.model.on("posterchange",this._renderSrc,this);this.model.on("play",this._onPlay,this);
this.model.on("ended",this._show,this)};f.exports=d},{"ac-mvc-view":800,"ac-object":953}],962:[function(f,g,c){var b=f("ac-feature");
var d=f("ac-cname").cname;function a(){return b.isRetina()}g.exports=function h(){if(a()){return d.formatUrl("/ac/ac-video-posterframe/1.0/images","ac-video-poster_848x480_2x",".jpg")
}return d.formatUrl("/ac/ac-video-posterframe/1.0/images","ac-video-poster_848x480",".jpg")
}},{"ac-cname":907,"ac-feature":918}],963:[function(g,i,d){var h=g("./PosterAttribute");
var c=g("./PosterImageTag");var b=g("ac-feature");function a(){return b.isHandheld()
}i.exports={create:function f(j){var k=null;if(a()){k=new h({model:j,element:j.getMediaElement()})
}else{k=new c({model:j})}return k}}},{"./PosterAttribute":960,"./PosterImageTag":961,"ac-feature":918}],964:[function(d,f,b){var c=d("./ac-video/player/Player");
c.create=d("./ac-video/player/factory/create");c.createFromElement=d("./ac-video/player/factory/createFromElement");
c.createFromAnchorTag=d("./ac-video/player/factory/createFromAnchorTag");var a=d("./ac-video/models/Video");
a.createFromVideoTag=d("./ac-video/models/video/factory/createFromVideoTag");f.exports={Player:c,Video:a}
},{"./ac-video/models/Video":987,"./ac-video/models/video/factory/createFromVideoTag":989,"./ac-video/player/Player":990,"./ac-video/player/factory/create":991,"./ac-video/player/factory/createFromAnchorTag":992,"./ac-video/player/factory/createFromElement":993}],965:[function(b,c,a){function f(g){this.el=g
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
return i})};d.getBuffered=function(){return this.el.buffered};c.exports=f},{}],966:[function(b,c,a){function f(g){this.el=g;
this._boundChangeSrc=this._changeSrc.bind(this);this._incomingSrc=null}var d=f.prototype;
d.setEl=function(g){this.el=g};d.play=function(){this.el.Play()};d.pause=function(){this.el.Stop()
};d.setCurrentTime=function(g){this.el.SetTime(g*this.el.GetTimeScale())};d.setPreload=function(g){};
d.getCurrentTime=function(){var h=0;if(this._incomingSrc){return h}try{h=this.el.GetTime()/this.el.GetTimeScale()
}catch(g){}return h};d.getWidth=function(){var i;try{var j=this.el.GetRectangle();
var h=this.el.GetMatrix();var g=parseFloat(h.split(",")[0]);i=+j.split(",")[2];
i=Math.round(i/g)}catch(k){}return i};d.getHeight=function(){var g;try{var j=this.el.GetRectangle();
var i=this.el.GetMatrix();var h=parseFloat(i.split(",")[3]);g=+j.split(",")[3];
g=Math.round(g/h)}catch(k){}return g};d.setMuted=function(g){this.el.SetMute(g)
};d.setVolume=function(g){this.el.SetVolume(g*256)};d.getVolume=function(){return this.el.GetVolume()/256
};d.getDuration=function(){var h=NaN;if(this._incomingSrc){return NaN}try{h=this.el.GetDuration()/this.el.GetTimeScale()
}catch(g){}return h};d.setLoop=function(g){this.el.SetIsLooping(g)};d.getLoop=function(){return this.el.GetIsLooping()
};d.setPlaybackRate=function(g){this.el.SetRate(g)};d.getPlaybackRate=function(){var g=1;
try{g=this.el.GetRate()}catch(h){}return g};d._changeSrc=function(){try{this.el.SetResetPropertiesOnReload(false);
this.el.SetURL(this._incomingSrc)}catch(g){}this._incomingSrc=null};d.setSrc=function(g){this._incomingSrc=g;
window.requestAnimationFrame(this._boundChangeSrc)};d.getSrc=function(){return this.el.GetURL()
};d.getCurrentSrc=function(){return this.el.GetURL()};d.getDefaultPlaybackRate=function(){return 1
};d.getPlayed=function(){};d.getBuffered=function(){return[[0,this.element.GetMaxTimeLoaded()/this.element.GetTimeScale()]]
};d.showTextTrack=function(g){this.el.SetTrackEnabled(g,true)};d.hideTextTrack=function(g){this.el.SetTrackEnabled(g,false)
};d.setControls=function(g){this.el.SetControllerVisible(g)};d.getControls=function(){return this.el.GetControllerVisible()
};d.getTextTracks=function(){var h=[];var g=this.el.GetTrackCount();for(var j=1;
j<=g;j++){var k=this.el.GetTrackType(j);if(k==="Subtitle"||k==="Closed Caption"){h.push({kind:k,label:this.el.GetTrackName(j),mode:(this.el.GetTrackEnabled(j))?"showing":"hidden",index:j})
}}return h};c.exports=f},{}],967:[function(f,g,d){var c=f("./HTML5VideoAPI");var b=f("./QuickTimeAPI");
var a={create:function(h,i){if(i==="video"){return new c(h)}else{return new b(h)
}}};g.exports=a},{"./HTML5VideoAPI":965,"./QuickTimeAPI":966}],968:[function(c,g,b){var h=c("ac-mvc-collection").Collection;
var f=c("./../models/MediaSource");var a=c("ac-object");var d=function(){h.apply(this,arguments)
};var i=d.prototype=a.create(h.prototype);i.ModelType=f;g.exports=d},{"./../models/MediaSource":984,"ac-mvc-collection":763,"ac-object":803}],969:[function(d,f,c){var i=d("./TextTrackCollection");
var h=d("./../models/PolyfillTextTrackModel");var b=d("ac-object");var a=function(){i.apply(this,arguments)
};var g=a.prototype=b.create(i.prototype);g.ModelType=h;g.createTextTrackFromNativeTrack=function(k,j,m){var l=new h();
l.setNativeTextTrack(m);l.setTextTrackEl(k);l.setTextTrackInnerEl(j);this.add(l);
return l};g.removeTextTrackFromNativeTrack=function(k){var j=this.findTextTrackModelFromNativeTrack(k);
this.remove(j)};g.findTextTrackModelFromNativeTrack=function(k){if(!k||k.length===0){return null
}var j=this.filter(function(l){if(l.getNativeTextTrack()===k[0].text){return l}return false
})[0];return j||null};g.getEnabledTextTracks=function(){var j=this.filter(function(k){if(k.get("mode")!=="disabled"){return k
}return false});return new a({models:j})};g.getVisibleTextTracks=function(){var j=this.find({mode:"showing"});
return new a({models:j})};f.exports=a},{"./../models/PolyfillTextTrackModel":985,"./TextTrackCollection":970,"ac-object":803}],970:[function(c,d,b){var f=c("ac-mvc-collection").Collection;
var i=c("./../models/TextTrackModel");var a=c("ac-object");var h=function(){f.apply(this,arguments)
};var g=h.prototype=a.create(f.prototype);g.ModelType=i;g.createTextTrackFromNativeTrack=function(k){var j=new i(k);
j.setNativeTextTrack(k);this.add(j);return j};g.removeTextTrackFromNativeTrack=function(k){var j=this.findTextTrackModelFromNativeTrack(k);
this.remove(j)};g.count=function(){return this.models.length};g.findTextTrackModelFromNativeTrack=function(k){var j=this.filter(function(l){if(l.getNativeTextTrack()===k){return l
}return false})[0];return j||null};g.getEnabledTextTracks=function(){var j=this.filter(function(k){if(k.get("mode")!=="disabled"){return k
}return false});return new h({models:j})};g._findTextTrack=function(k){var j;if(this.indexOf(k)>-1){j=k
}else{if(typeof k==="number"){j=this.at(k)}else{if(typeof k==="string"){j=this.get(k)
}else{j=this.find(k,{limit:1})[0]}}}return j};g.getVisibleTextTracks=function(){var j=this.find({mode:"showing"});
return new h({models:j})};g.findTextTrack=function(j){return this._findTextTrack(j)
};d.exports=h},{"./../models/TextTrackModel":986,"ac-mvc-collection":763,"ac-object":803}],971:[function(b,c,a){function f(){this._boundEventListeners=[];
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
})};c.exports=new f()},{}],972:[function(d,c,h){var f=d("ac-object");var j=d("ac-dom-traversal/querySelector");
var l=d("ac-browser");var m=d("ac-deferred").Deferred;var n="v";var b=function(o,p){var q=o.getAttribute(p);
if(q===null){return false}else{if(q===""){return false}}return true};var a=(function(){function o(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)
}return function(){return o()+o()+"-"+o()+"-"+o()+"-"+o()+"-"+o()+o()+o()}}());
function g(){return/^(iOS|Android)$/.test(l.os)}function i(){this._possibleTemplateKeys=["autoplay","buffered","endframe","controls","height","loop","muted","poster","preload","suffix","width","controlbar","controlbarwidth","controlbarskinning","disablecaptionscontrol"];
this._defaultTemplateValues={autoplay:false,muted:false,loop:false,controls:false,preload:"metadata",controlbarwidth:"450",controlbarskinning:"ac-video-controlbar",disablecaptionscontrol:false}
}var k=i.prototype;k.getSource=function(q){var r=/[^/]*.[^\.]*$/;var p=null;var s={};
if(b(q,"data-src")){p=q.getAttribute("data-src")}else{if(b(q,"href")){p=q.getAttribute("href")
}else{if(b(q,"src")){p=q.getAttribute("src")}else{var o=j("source",q);if(o&&b(o,"src")){p=o.getAttribute("src")
}}}}if(p){s.defaultSource=p;s.videoSource=p.match(r)[0];s.directory=p.replace(s.videoSource,"");
s.videoFileName=s.videoSource.split(".")[0]}return s};k.getConfig=function(r,q,t){var s=new m();
var p={};var o=this.getSource(r);this.isAppleMobileDevice=(l.os==="iOS");p=this._getValues(r,t);
this._videoRecommendation=q;p.videoTemplate=q.videoTemplate;s.resolve();return s.promise().then(function(){p.usesFullScreen=(p.usesFullScreen&&p.videoTemplate==="elementVideo");
p.source=o.defaultSource;return p})};k._buildFileSuffix=function(p){var r="";if(p.suffix){r="_"+p.suffix
}else{if(p.height&&p.width){var o=p.height.replace("px","").replace("em","").replace("rem","");
var q=p.width.replace("px","").replace("em","").replace("rem","");r="_"+q+"x"+o
}}return r};k._getRecommendedCaptionsPaths=function(p,o){var q=[];q.push(p+o+"-captions."+n+"tt");
return q};k._generateRecommendedVideoPaths=function(p,o){var r=this._buildFileSuffix(o);
var q=[];this._videoRecommendation.supportedProfiles.forEach(function(s){if(s.sizeRelevant){p=p+r
}q.push(p+"."+s.fileExtension)});return q};k._getValues=function(p,r){var q="ac-video-"+a();
var o=this._defaultTemplateValues;f.extend(o,this._getMarkupValues(p));if(r){f.extend(o,r)
}if(g()){o["native"]=true;o.controls="true"}o.targetId=p.id;o.domId=q;o.eventId=q+"-quicktime-event";
o.wrapperId=q+"-wrapper";return o};k._getMarkupValues=function(o){var p={};this._possibleTemplateKeys.forEach(function(q){if(b(o,q)){p[q]=o.getAttribute(q)
}else{if(b(o,"data-acv-"+q)){p[q]=o.getAttribute("data-acv-"+q)}}if((q==="autoplay"||q==="controls"||q==="muted"||q==="loop")&&p[q]&&p[q].length>0){p[q]=true
}if(typeof(p[q])==="string"&&/^(true|false)$/.test(p[q])){p[q]=(p[q]==="true")?true:false
}});return p};k.addPossibleTemplateKeys=function(o){o.forEach(function(p){if(!this._possibleTemplateKeys.indexOf(p)){this._possibleTemplateKeys.push(p)
}},this)};c.exports=i},{"ac-browser":228,"ac-deferred":685,"ac-dom-traversal/querySelector":272,"ac-object":803}],973:[function(b,c,a){c.exports={LOADEDMETADATA:1,LOADEDDATA:2,CANPLAY:3,CANPLAYTHROUGH:4}
},{}],974:[function(c,b,d){var h=c("./TextTracksController");var i=c("./../../views/textTracks/TextTracksCollectionView");
var g=c("./../../models/TextTrackModel");var a=c("ac-object");function j(){h.apply(this,arguments);
this.view=this.options.view||new i({element:this.mediaElement.el});this._addViewEvents()
}var f=j.prototype=a.create(h.prototype);f._holdingTextTrackModels={};f._addViewEvents=function(){this.view.on("addtrack",this._respondToAddTrackEvent,this);
this.view.on("change",this._respondToChangeTrackEvent,this);this.view.on("removetrack",this._respondToRemoveTrackEvent,this)
};f._removeViewEvents=function(){this.view.off("addtrack",this._respondToAddTrackEvent,this);
this.view.off("change",this._respondToChangeTrackEvent,this);this.view.off("removetrack",this._respondToRemoveTrackEvent,this)
};f._respondToAddTrackEvent=function(k){var l=k.data.track;var n=this.model.findTextTrackModelFromNativeTrack(l);
if(!n&&l&&l.id&&this._holdingTextTrackModels[l.id]){n=this._holdingTextTrackModels[l.id];
n.setNativeTextTrack(l);this.model.add(n);this._holdingTextTrackModels[l.id]=undefined;
var m=this.createTextTrackRenderView(l,n);m.renderMode()}if(n===null){this._createTextTrackFromNativeTrack(l)
}else{n.set({mode:l.mode})}if(n){n.on("change:mode",function(){if("webkitClosedCaptionsVisible" in this.mediaElement.el&&n.get("mode")==="showing"){if(this.mediaElement.el.webkitClosedCaptionsVisible===false){this.mediaElement.el.webkitClosedCaptionsVisible=true
}}},this)}this._resetModel();this.trigger("addtrack",k)};f._createTextTrackFromNativeTrack=function(l){var k=this.model.createTextTrackFromNativeTrack(l);
this.createTextTrackRenderView(l,k);return k};f._removeTextTrackFromNativeTrack=function(l){var k=this.model.findTextTrackModelFromNativeTrack(l);
this.removeTextTrackRenderView(k);this.model.removeTextTrackFromNativeTrack(l);
this._resetModel()};f._resetModel=function(){var k=this.mediaElement.el.textTracks;
var n=[];var l;if(k){for(var m=0;m<k.length;m+=1){l=this.model.findTextTrackModelFromNativeTrack(k[m]);
if(l){l.set({mode:k[m].mode});n.push(l)}}this.model.reset(n)}};f._respondToChangeTrackEvent=function(k){this.trigger("changetrack",k)
};f._respondToRemoveTrackEvent=function(k){var l=k.data.track;this._removeTextTrackFromNativeTrack(l);
this.trigger("removetrack",k)};f.addTextTrackFromRemoteVTT=function(l){var m={src:l.src};
var k=this.model.findTextTrack(m);if(k&&typeof k==="object"){return k.cid}k=new g(l);
this._holdingTextTrackModels[k.cid]=k;this.view.addTextTrackTag(k);return k.cid
};f.addTextTrack=function(m,k,n){var l=this.mediaElement.addTextTrack(m,k,n);return this._createTextTrackFromNativeTrack(l)
};f.removeTextTrack=function(k){if(!k){return}if(this._holdingTextTrackModels[k.cid]){this._holdingTextTrackModels[k.cid]=undefined
}this.view.removeTextTrackTag(k)};f.populateTextTracks=function(){var k=this.mediaElement.getTextTracks();
if(k){k.forEach(function(l){if(this.model.findTextTrackModelFromNativeTrack(l)===null){this._createTextTrackFromNativeTrack(l)
}},this)}};b.exports=j},{"./../../models/TextTrackModel":986,"./../../views/textTracks/TextTracksCollectionView":1007,"./TextTracksController":976,"ac-object":803}],975:[function(g,f,h){var j=g("./TextTracksController");
var a=g("./../../views/textTracks/PolyfillTextTrackCollectionView");var k=g("./../../models/PolyfillTextTrackModel");
var d=g("./../../collection/PolyfillTextTrackCollection");var b=g("ac-object");
function c(l){var m={model:new d()};j.apply(this,[l,m]);this.view=this.options.view||new a({element:this.mediaElement.el});
this._addViewEvents()}var i=c.prototype=b.create(j.prototype);i._holdingTextTrackModels={};
i._addViewEvents=function(){this.view.on("addtrack",this._respondToAddTrackEvent,this);
this.view.on("change",this._respondToChangeTrackEvent,this);this.view.on("removetrack",this._respondToRemoveTrackEvent,this);
this.view.on("timeupdate",this._onTimeUpdate,this)};i._removeViewEvents=function(){this.view.off("addtrack",this._respondToAddTrackEvent,this);
this.view.off("change",this._respondToChangeTrackEvent,this);this.view.off("removetrack",this._respondToRemoveTrackEvent,this);
this.view.off("timeupdate",this._onTimeUpdate,this)};i._respondToAddTrackEvent=function(m){if(!(m&&m.data)){return
}var l=(m.data&&m.data.track)?m.data.track:[];var o=this.model.findTextTrackModelFromNativeTrack(l);
if(!o&&l&&m.data.textTrackEl&&m.data.textTrackEl.id&&this._holdingTextTrackModels[m.data.textTrackEl.id]){o=this._holdingTextTrackModels[m.data.textTrackEl.id];
o.setNativeTextTrack(l);o.setTextTrackEl(m.data.textTrackEl);o.setTextTrackInnerEl(m.data.textTrackInnerEl);
this.model.add(o);this._holdingTextTrackModels[m.data.textTrackEl.id]=undefined;
var n=this.createTextTrackRenderView(m.data.textTrackEl,o);n.renderMode()}if(o===null){this._createTextTrackFromTextTrackData(m.data.textTrackEl,m.data.textTrackInnerEl,l)
}this.trigger("addtrack",m)};i._createTextTrackFromTextTrackData=function(n,m,l){var o=this.model.createTextTrackFromNativeTrack(n,m,l);
this.createTextTrackRenderView(n,o);return o};i._removeTextTrackFromTextTrackData=function(l){var m=this.model.findTextTrackModelFromNativeTrack(l);
this.removeTextTrackRenderView(m);this.model.removeTextTrackFromNativeTrack(l)};
i._respondToChangeTrackEvent=function(l){this.trigger("changetrack",l)};i._respondToRemoveTrackEvent=function(l){var m=l.data.track;
this._removeTextTrackFromTextTrackData(m);this.trigger("removetrack",l)};i._onTimeUpdate=function(n){if(!this.view.textTracks||this.view.textTracks.length===0){return
}var m=this.view.textTracks.filter(this._filterCaptions.bind(this));var l=m.length;
var p=this.model.findTextTrackModelFromNativeTrack(this.view.textTracks);var o=p.get("mode");
if(o==="showing"&&l>0){p.addVTTCue(m[0].text);this.view.show()}else{this.view.hide()
}};i.addTextTrackFromRemoteVTT=function(m){var n={src:m.src};var l=this.model.findTextTrack(n);
if(l&&typeof l==="object"){this.view.textTracks=l.getCues();this.view.textTrackEl=l.gettextTrackEl();
this.view.textTrackInnerEl=l.gettextTrackInnerEl();return l.cid}l=new k(m);this._holdingTextTrackModels[l.cid]=l;
if(m.src){this.view.loadVTTFile(m.src,l)}return l.cid};i.removeTextTrack=function(l){if(!l){return
}if(this._holdingTextTrackModels[l.cid]){this._holdingTextTrackModels[l.cid]=undefined
}this.view.removeTextTrackDiv(l)};i.populateTextTracks=function(){};i._filterCaptions=function(o,l,p){var n=this.mediaElement.getCurrentTime();
var m=this._toMMSSS(n);return this._compareTime(m,o.startTime,"gt")&&this._compareTime(m,o.endTime,"lt")
};i._toMMSSS=function(n){var l=Math.floor(n/3600);var m=Math.floor((n-(l*3600))/60);
var o=Math.round((n-(l*3600)-(m*60)));if(l<10){l="0"+l}if(m<10){m="0"+m}if(o<10){o="0"+o
}return l+":"+m+":"+o};i._compareTime=function(n,m,l){n=new Date("January 1, 1975 "+n);
m=new Date("January 1, 1975 "+m);return l==="gt"?n>=m:n<=m};f.exports=c},{"./../../collection/PolyfillTextTrackCollection":969,"./../../models/PolyfillTextTrackModel":985,"./../../views/textTracks/PolyfillTextTrackCollectionView":1003,"./TextTracksController":976,"ac-object":803}],976:[function(c,b,d){var j=c("ac-event-emitter").EventEmitter;
var h=c("./../../collection/TextTrackCollection");var i=c("./../../views/textTracks/TextTrackRender");
var a=c("ac-object");function g(k,l){this.options=l||{};this.mediaElement=k;this.model=this.options.model||new h();
this._textTrackRenderViews=[]}var f=g.prototype=a.create(j.prototype);f.findTextTrackModelFromNativeTrack=function(k){return this.model.findTextTrackModelFromNativeTrack(k)
};f.addTextTrackFromRemoteVTT=function(k){};f.addTextTrack=function(){};f.removeTextTrack=function(k){};
f.getEnabledTextTracks=function(){return this.model.getEnabledTextTracks.apply(this.model,arguments)
};f.getTextTracks=function(){return this.model};f.getTextTracksCount=function(){return this.model.count()
};f.getVisibleTextTracks=function(){return this.model.getVisibleTextTracks()};f.findTextTrack=function(k){return this.model.findTextTrack(k)
};f.addTextTrack=function(l,k,m){return this.mediaElement.addTextTrack(l,k,m)};
f.populateTextTracks=function(){};f.createTextTrackRenderView=function(m,k){var l=new i({element:m,model:k});
k.on("change:mode",this._onTextTrackModeChange,this);l.render();this._textTrackRenderViews.push(l);
return l};f.removeTextTrackRenderView=function(m){var l=this._textTrackRenderViews.length;
var n={};for(var k=0;k<l;k++){if(this._textTrackRenderViews[k].model.cid===m.cid){n.view=this._textTrackRenderViews[k];
n.idx=k;break}}if(n.view){this._destroyRenderView(n.view);this._textTrackRenderViews.splice(n.idx,1)
}};f._destroyRenderView=function(k){k.emitterTrigger("destroy");k.off();var l;for(l in k){if(k.hasOwnProperty(l)){k[l]=null
}}};f._onTextTrackModeChange=function(k){var l=k.value;if(l==="showing"){this.trigger("texttrackshow")
}else{this.trigger("texttrackhide")}};b.exports=g},{"./../../collection/TextTrackCollection":970,"./../../views/textTracks/TextTrackRender":1005,"ac-event-emitter":278,"ac-object":803}],977:[function(c,b,d){var h=c("./TextTracksController");
var g=c("./../../models/TextTrackModel");var i=c("./../../views/textTracks/WebkitClosedCaptionsView");
var a=c("ac-object");var k=c("ac-browser");function j(){h.apply(this,arguments)
}var f=j.prototype=a.create(h.prototype);f._onTextTrackModeChange=function(l){if(l.value==="showing"){this.trigger("texttrackshow")
}else{this.trigger("texttrackhide")}};f.populateTextTracks=function(){var m=this.mediaElement.el;
var l;var n=m.webkitHasClosedCaptions;if(n===true){if(!this.view){this.view=new i({element:m})
}l=new g({mode:"hidden"});this.view.setModel(l);l.on("change:mode",this._onTextTrackModeChange,this);
this.model.reset([l]);this.trigger("addtrack",{textTrack:l});if(k.name==="Safari Mobile"&&k.version<7){l.once("change:mode",this.view.render,this.view)
}else{this.view.render()}}};b.exports=j},{"./../../models/TextTrackModel":986,"./../../views/textTracks/WebkitClosedCaptionsView":1008,"./TextTracksController":976,"ac-browser":228,"ac-object":803}],978:[function(c,d,b){function a(f){this.options=f||{};
this.player=this.options.player;this.player.setControls(true)}a.create=function(f){return new a(f)
};d.exports=a},{}],979:[function(d,c,h){var m=d("./../models/Video");var n=d("ac-event-emitter").EventEmitter;
var b=d("./../views/mediaView/MediaView");var g=d("ac-object");var l=d("./../controller/textTracks/NativeTextTracksController");
var j=d("ac-fullscreen");var k=d("ac-feature");var a=d("./../const/readyState");
function f(p,o){this.playableObject=p;this.options=o||{};this.model=this._getOrCreateVideo();
this.view=this._getOrCreateView();this.textTracks=this._getOrCreateTextTracksController();
this._sourceReadyBinding=false;n.call(this);this._bindTextTrackEvents();this._bindModelEvents();
this._checkToRenderView()}var i=f.prototype=g.create(n.prototype);i._bindTextTrackEvents=function(){this.textTracks.on("addtrack",this._onAddTrack,this);
this.textTracks.on("change",this._onTrackChange,this);this.textTracks.on("removetrack",this._onRemoveTrack,this);
this.textTracks.on("texttrackshow",this._onTextTrackShow,this);this.textTracks.on("texttrackhide",this._onTextTrackHide,this)
};i._onTextTrackHide=function(){this.trigger("texttrackhide")};i._onTextTrackShow=function(){this.trigger("texttrackshow")
};i._onAddTrack=function(o){this.trigger("addtrack",o.data.track)};i._onTrackChange=function(o){this.trigger("change",o)
};i._onRemoveTrack=function(o){this.trigger("removetrack",o.data.track)};i._checkToRenderView=function(){if(this.model.getCurrentSrc()){this._onSourceReady()
}else{if(!this._sourceReadyBinding){this.model.once("change:currentSrc",this._onSourceReady,this);
this._sourceReadyBinding=true}}};i._onSourceReady=function(){if(this.model.getPreload()!=="none"){this.view.render();
this.playableObject.setEl(this.view.getMediaElement());this._bindViewEvents()}this._sourceReadyBinding=false
};i._getOrCreateView=function(){var o=this.options.view;if(!o){o=new b({model:this.model})
}o.on("mediaelementchange",this._onMediaElementChange,this);return o};i._onMediaElementChange=function(){this.playableObject.setEl(this.view.getMediaElement())
};i._getOrCreateTextTracksController=function(){var o=this.options.textTracks;if(o===undefined){o=new l(this.playableObject)
}return o};i._getOrCreateVideo=function(){var o=this.options.model;if(o===undefined){o=new m()
}else{if(!(o instanceof m)){o=new m(o)}}return o};i._bindModelEvents=function(){this.model.on("change:muted",this._onMutedChange,this);
this.model.on("change:seeking",this._onModelSeekingChange,this);this.model.on("change:paused",this._onPausedChange,this);
this.model.on("change:playbackRate",this._onPlaybackRateChange,this);this.model.on("change:duration",this._onDurationChange,this);
this.model.on("change:volume",this._onVolumeChange,this);this.model.on("change:readyState",this._onReadyStateChange,this);
this.model.on("change:poster",this._onPosterChange,this)};i._bindViewEvents=function(){this.view.on("play",this._respondToPlay,this);
this.view.on("pause",this._respondToPause,this);this.view.on("timeupdate",this._respondToTimeUpdate,this);
this.view.on("ended",this._respondToEnded,this);this.view.on("ratechange",this._respondToRateChange,this);
this.view.on("durationchange",this._respondToDurationChange,this);this.view.on("loadedmetadata",this._respondToLoadedMetaData,this);
this.view.on("loadeddata",this._respondToLoadedData,this);this.view.on("canplay",this._respondToCanPlay,this);
this.view.on("canplaythrough",this._respondToCanPlayThrough,this)};i._populateTextTracks=function(){this.textTracks.populateTextTracks()
};i._respondToLoadedMetaData=function(){this._populateTextTracks();this._setReadyState(1)
};i._onPosterChange=function(){this.trigger("posterchange")};i._respondToLoadedData=function(){this._setReadyState(2)
};i._respondToCanPlay=function(){this._setReadyState(3)};i._respondToCanPlayThrough=function(){this._setReadyState(4)
};i._respondToDurationChange=function(){this.model.set({duration:this.playableObject.getDuration()})
};i._respondToRateChange=function(){if(this.playableObject.getPlaybackRate){this.model.set({playbackRate:this.playableObject.getPlaybackRate()})
}};i._respondToEnded=function(){this.model.set({ended:true});this.trigger("ended")
};i._respondToPlay=function(){var o=this.getMediaElement();if(j.fullscreenElement()!==o&&j.getMode()==="ios"&&k.isHandheld()){try{j.requestFullscreen(this.getMediaElement())
}catch(p){}}this.model.set({paused:false,ended:false})};i._respondToPause=function(){this.model.set({paused:true})
};i._triggerTimeUpdate=function(){this.trigger("timeupdate",{currentTime:this.getCurrentTime()})
};i._respondToTimeUpdate=function(){if(this.model.getCurrentTime()!==this.playableObject.getCurrentTime()){this.model.setCurrentTime(this.playableObject.getCurrentTime());
this._triggerTimeUpdate()}if(this.model.getSeeking()===true){this.model.set({seeking:false})
}};i._onReadyStateChange=function(o){if(o.value===a.LOADEDMETADATA){this.trigger("loadedmetadata")
}else{if(o.value===a.LOADEDDATA){this.trigger("loadeddata")}else{if(o.value===a.CANPLAY){this.trigger("canplay")
}else{if(o.value===a.CANPLAYTHROUGH){this.trigger("canplaythrough")}}}}this.trigger("readystatechange",{readyState:o.value})
};i._setReadyState=function(o){this.model.set({readyState:o})};i._onMutedChange=function(){this.trigger("volumechange");
if(this.model.getMuted()===false){this._setElementVolume(this.model.getVolume())
}};i._onVolumeChange=function(){this.trigger("volumechange")};i._onDurationChange=function(o){if(isNaN(o.previous)&&isNaN(o.value)){return
}this.trigger("durationchange",o)};i._onPlaybackRateChange=function(){this.trigger("ratechange")
};i._onPausedChange=function(o){if(o.value===true){this.trigger("pause")}else{this.trigger("play")
}};i._onModelSeekingChange=function(o){if(o.value===true){this.trigger("seeking")
}else{this.trigger("seeked")}};i.findTextTrackModelFromNativeTrack=function(o){return this.textTracks.findTextTrackModelFromNativeTrack(o)
};i.findTextTrack=function(o){return this.textTracks.findTextTrack(o)};i.getTextTracks=function(){return this.textTracks.getTextTracks()
};i.getTextTracksCount=function(){return this.textTracks.getTextTracksCount()};
i.addTextTrackFromRemoteVTT=function(){return this.textTracks.addTextTrackFromRemoteVTT.apply(this.textTracks,arguments)
};i.addTextTrack=function(p,o,q){return this.textTracks.addTextTrack(p,o,q)};i.removeTextTrack=function(){return this.textTracks.removeTextTrack.apply(this.textTracks,arguments)
};i.getEnabledTextTracks=function(){return this.textTracks.getEnabledTextTracks.apply(this.textTracks,arguments)
};i.getVisibleTextTracks=function(){return this.textTracks.getVisibleTextTracks()
};i.play=function(){if(this.getPaused()===false){return}this.playableObject.play()
};i.pause=function(){if(this.getPaused()===true){return}this.playableObject.pause()
};i.getVideo=function(){return this.model};i.getPaused=function(){return this.model.getPaused()
};i.setMuted=function(o){this.model.setMuted(o);this.playableObject.setMuted(o)
};i.getMuted=function(){return this.model.getMuted()};i.getEnded=function(){return this.model.getEnded()
};i._setElementVolume=function(o){this.playableObject.setVolume(o)};i.setVolume=function(o){this.model.setVolume(o,{silent:true});
if(this.getMuted()===false){this._setElementVolume(o)}};i.getVolume=function(){return this.model.getVolume()
};i.setCurrentTime=function(p){var o=this.getCurrentTime();this.model.set({seeking:true});
this.playableObject.setCurrentTime(p);if(o===p){this.model.set({seeking:false})
}};i.getWidth=function(){return this.playableObject.getWidth()};i.getHeight=function(){return this.playableObject.getHeight()
};i.getCurrentTime=function(){return this.model.getCurrentTime()};i.setPlaybackRate=function(p){var o=this.model.getPlaybackRate();
if(o!==p){this.playableObject.setPlaybackRate(p)}};i.getPlaybackRate=function(){return this.model.getPlaybackRate()
};i.getDuration=function(){return this.model.getDuration()};i.setAutoplay=function(o){this.playableObject.SetAutoPlay(o)
};i.getAutoplay=function(){return this.playableObject.GetAutoPlay()};i.getCaptionsTracks=function(){return this.playableObject.getCaptionsTracks()
};i.setLoop=function(o){this.model.setLoop(o);this.playableObject.setLoop(o)};i.getLoop=function(){return this.model.getLoop()
};i.getError=function(){};i.getVideoWidth=function(){};i.getVideoHeight=function(){};
i.getPoster=function(){return this.model.getPoster()};i.setPoster=function(o){this.model.setPoster(o)
};i.hasPoster=function(){return !!(this.model.getPoster())};i._resetModelPlaybackAttributes=function(){this.model.set({duration:this.playableObject.getDuration(),currentTime:this.playableObject.getCurrentTime(),playbackRate:this.playableObject.getPlaybackRate(),readyState:0,paused:true,ended:false,seeking:false});
this._triggerTimeUpdate()};i.setSrc=function(p){var q=this.model.findSources(p)[0];
var o=this.model.getCurrentSrc();if(o){o=o.get("src")}if(q===undefined){q=this.model.addSource(p)
}if(o!==q.get("src")){this.model.setCurrentSrc(q);this.playableObject.setSrc(q.get("src"));
this._resetModelPlaybackAttributes()}return q};i.getPreload=function(){return this.model.getPreload()
};i.setPreload=function(o){this.model.setPreload(o);this.playableObject.setPreload(o);
this._checkToRenderView()};i.getCurrentSrc=function(){return this.model.getCurrentSrc()
};i.getSources=function(){return this.model.getSources()};i.getNetworkState=function(){return this.model.get("networkState")
};i.getReadyState=function(){return this.model.get("readyState")};i.getControls=function(){return this.model.get("controls")
};i.setControls=function(o){this.model.set({controls:o});this.playableObject.setControls(o)
};i.getDefaultPlaybackRate=function(){return this.model.getDefaultPlaybackRate()
};i.getSeekable=function(){return this.getBuffered()};i.getDefaultMuted=function(){return this.model.get("defaultMuted")
};i.getSeeking=function(){return this.model.get("seeking")};i.getPlayed=function(){return this.playableObject.getPlayed()
};i.getBuffered=function(){return this.playableObject.getBuffered()};i.getMediaElement=function(){return this.view.getMediaElement()
};i.appendTo=function(){return this.view.appendTo.apply(this.view,arguments)};i.getViewElement=function(){return this.view.el
};c.exports=f},{"./../const/readyState":973,"./../controller/textTracks/NativeTextTracksController":974,"./../models/Video":987,"./../views/mediaView/MediaView":997,"ac-event-emitter":278,"ac-feature":749,"ac-fullscreen":306,"ac-object":803}],980:[function(b,f,a){var g=b("./../../recommendation/vat");
var d=b("./createQuickTime");var h=b("./createHTML5Video");function c(l,i){i=i||{};
var j=i.type||g.get();var k;if(j==="quicktime"){k=d(l,i)}else{k=h(l,i)}return k
}f.exports=c},{"./../../recommendation/vat":994,"./createHTML5Video":982,"./createQuickTime":983}],981:[function(c,d,b){var h=c("./create");
var a=c("./../../models/video/factory/createFromVideoTag");var f=c("./../../recommendation/vat");
function g(m,k){k=k||{};k.element=m;var l=k.type=f.get();var o=a(m,k);var j=o.getSources();
var n;var i=j.find({src:m.currentSrc})[0];if(l==="quicktime"){i=j.find({type:"video/quicktime"})[0];
if(!i&&j.models.length===1){i=j.at(0)}}if(i){o.setSrc(i)}n=h(o,k);if(n.getViewElement()!==m){m.parentNode.replaceChild(n.getViewElement(),m)
}return n}d.exports=g},{"./../../models/video/factory/createFromVideoTag":989,"./../../recommendation/vat":994,"./create":980}],982:[function(h,c,j){var k=h("ac-browser");
var f=h("./../../views/mediaView/HTML5Video");var i=h("./../MediaController");var a=h("./../../adapter/element-adapter");
var d=h("./../../controller/textTracks/NativeTextTracksController");var b=h("./../../controller/textTracks/PolyfillTextTracksController");
var g=h("./../../controller/textTracks/WebkitClosedCaptions");var l=h("./../../models/Video");
var m=function(o,v){v=v||{};if(!(o instanceof l)){o=new l(o)}var n=v.view||new f({model:o,element:v.element,template:"elementVideo"});
var q=n.getMediaElement();var s=a.create(q,"video");var t=k.name.toLowerCase();
var p=(t==="ie"||t==="edge");var r;if(!("textTracks" in q)&&"webkitClosedCaptionsVisible" in q){r=new g(s)
}else{if(p){r=new b(s)}else{r=new d(s)}}if(v.textTracks){v.textTracks.forEach(function(w){var x=w;
if(typeof w==="string"){x={src:w}}r.addTextTrackFromRemoteVTT(x)})}var u=new i(s,{model:o,view:n,textTracks:r});
return u};c.exports=m},{"./../../adapter/element-adapter":967,"./../../controller/textTracks/NativeTextTracksController":974,"./../../controller/textTracks/PolyfillTextTracksController":975,"./../../controller/textTracks/WebkitClosedCaptions":977,"./../../models/Video":987,"./../../views/mediaView/HTML5Video":996,"./../MediaController":979,"ac-browser":228}],983:[function(d,c,g){var h=d("./../../views/mediaView/QuickTime");
var a=d("./../../adapter/element-adapter");var f=d("./../MediaController");var b=d("./../../controller/textTracks/PolyfillTextTracksController");
var j=d("./../../models/Video");var i=function(p,n){var q;var o;var l;var m;var k;
n=n||{};if(!(p instanceof j)){p=new j(p)}m=new h({model:p});l=m.getMediaElement();
q=a.create(l,"quicktime");k=new b(q);if(n.textTracks){n.textTracks.forEach(function(r){var s=r;
if(typeof r==="string"){s={src:r}}k.addTextTrackFromRemoteVTT(s)})}o=new f(q,{model:p,view:m,textTracks:k});
return o};c.exports=i},{"./../../adapter/element-adapter":967,"./../../controller/textTracks/PolyfillTextTracksController":975,"./../../models/Video":987,"./../../views/mediaView/QuickTime":998,"./../MediaController":979}],984:[function(c,f,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function d(){h.apply(this,arguments)}var g=d.prototype=a.create(h.prototype);
g.defaultAttributes={};g.getFullyQualifiedURL=function(){var k=this.get("src");
var j;var i=window.location.origin||window.location.protocol+"//"+window.location.hostname;
if(/http(s)?/.test(k)){return k}else{if(k.slice(0,2)==="//"){return window.location.protocol+k
}else{if(k[0]!=="/"){j=window.location.pathname;j=j.substring(0,j.lastIndexOf("/")+1);
return i+j+k}}}return i+k};f.exports=d},{"ac-mvc-model":769,"ac-object":803}],985:[function(c,d,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function g(i){h.apply(this,arguments)}var f=g.prototype=a.create(h.prototype);
f.defaultAttributes={mode:"disabled"};f.setNativeTextTrack=function(i){this._textTrackData=i||[]
};f.getNativeTextTrack=function(){if(!this._textTrackData||this._textTrackData.length===0){return false
}return this._textTrackData[0].text};f.setTextTrackEl=function(i){this._textTrackEl=i
};f.getTextTrackEl=function(){return this._textTrackEl};f.getTextTrackInnerEl=function(){return this._textTrackInnerEl
};f.setTextTrackInnerEl=function(i){this._textTrackInnerEl=i};f.getCues=function(){return this._textTrackData
};f.removeCue=function(i){if(typeof i!=="number"){return}if(!this._textTrackData[i]){return
}this._textTrackData.splice(i,1)};f.addCue=function(l,j,k){var i={startTime:l,endTime:j,text:k};
this._textTrackData.push(i)};f.addVTTCue=function(i){if(this._currentVTTCue!==i){this._currentVTTCue=i;
if(this._textTrackInnerEl){this._textTrackInnerEl.innerHTML=i}}};f.removeVTTCue=function(i){if(this._currentVTTCue===i){if(this._textTrackInnerEl){this._textTrackInnerEl.innerHTML=""
}}};f.show=function(){this.set({mode:"showing"})};f.hide=function(){this.set({mode:"hidden"})
};f.disable=function(){this.set({mode:"disabled"})};d.exports=g},{"ac-mvc-model":769,"ac-object":803}],986:[function(c,d,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function g(i){h.apply(this,arguments)}var f=g.prototype=a.create(h.prototype);
f.defaultAttributes={mode:"disabled"};f.setNativeTextTrack=function(i){this._nativeTextTrack=i
};f.getNativeTextTrack=function(){return this._nativeTextTrack};f.getCues=function(){return this._nativeTextTrack.cues
};f.removeCue=function(i){this._nativeTextTrack.removeCue(i)};f.addCue=function(l,j,k){var i=new VTTCue(l,j,k);
this.addVTTCue(i)};f.addVTTCue=function(i){this._nativeTextTrack.addCue(i)};f.show=function(){this.set({mode:"showing"})
};f.hide=function(){this.set({mode:"hidden"})};f.disable=function(){this.set({mode:"disabled"})
};d.exports=g},{"ac-mvc-model":769,"ac-object":803}],987:[function(f,c,h){var d=f("ac-mvc-model").Model;
var g=f("ac-object");var l=f("./../collection/MediaSourceCollection");var j=f("./MediaSource");
var b=f("ac-video-posterframe");var a=b.defaultPosterPath();function k(){d.apply(this,arguments);
this._sources=new l();if(this.has("src")){this._addInitSources()}}var i=k.prototype=g.create(d.prototype);
i.defaultAttributes={duration:"NaN",readyState:0,currentTime:0,paused:true,playbackRate:1,ended:false,seeking:false,controls:false,muted:false,volume:1,looping:false,poster:a,defaultPlaybackRate:1,defaultMuted:false,currentSrc:null,preload:"auto"};
i._addInitSources=function(){var m=this.get("src");if(!Array.isArray(m)){m=[m]}m.forEach(this.addSource,this)
};i.findSourcesByFullyQualifiedURL=function(m){return this._sources.filter(function(n){return(n.getFullyQualifiedURL()===m)
})};i.getPoster=function(){return this.get("poster")};i.setAutoplay=function(m){this.set({autoplay:m})
};i.setPoster=function(m){this.set({poster:m})};i.setPreload=function(m){this.set({preload:m})
};i.addSource=function(n){var m=this.createSource(n);this._sources.add(m);this.trigger("source:add",{source:m});
if(this._sources.models.length===1){this.setCurrentSrc(m)}return m};i._coerceMediaSourceData=function(m){if(typeof m==="string"){return{src:m}
}return m};i.createSource=function(m){if((m instanceof j)){return m}return new j(this._coerceMediaSourceData(m))
};i.findSources=function(n,m){if(typeof n==="string"){n={src:n}}return this._sources.find(n,m)
};i.getSources=function(){return this._sources};i.getAutoplay=function(){return this.get("autoplay")
};i.setCurrentTime=function(m){this.set({currentTime:m})};i.getPreload=function(){return this.get("preload")
};i.setSrc=function(m){this.set({currentSrc:m.cid})};i.setCurrentSrc=function(m){this.set({currentSrc:m.cid})
};i.getCurrentSrc=function(){return this._sources.get(this.get("currentSrc"))};
i.setReadyState=function(m){this.set({readyState:m})};i.getDefaultMuted=function(){return this.get("defaultMuted")
};i.getDefaultPlaybackRate=function(){return this.get("defaultPlaybackRate")};i.setLoop=function(m){this.set({loop:m})
};i.getLoop=function(){return this.get("loop")};i.getSeeking=function(){return this.get("seeking")
};i.getReadyState=function(){return this.get("readyState")};i.getDuration=function(){return this.get("duration")
};i.getCurrentTime=function(){return this.get("currentTime")};i.setVolume=function(m){this.set({volume:m})
};i.getVolume=function(){return this.get("volume")};i.getPaused=function(){return this.get("paused")
};i.getPlaybackRate=function(){return this.get("playbackRate")};i.setEnded=function(m){this.set({ended:m})
};i.getEnded=function(){return this.get("ended")};i.getMuted=function(){return this.get("muted")
};i.setPlaybackRate=function(m){this.set({playbackRate:m})};i.setMuted=function(n,m){this.set({muted:n},m)
};c.exports=k},{"./../collection/MediaSourceCollection":968,"./MediaSource":984,"ac-mvc-model":769,"ac-object":803,"ac-video-posterframe":959}],988:[function(b,d,a){var c=b("./../../MediaSource");
function f(g){var i=g.getAttribute("src");var h={src:i};if(g.getAttribute("type")){h.type=g.getAttribute("type")
}return new c(h)}d.exports=f},{"./../../MediaSource":984}],989:[function(c,b,g){var j=c("./../../Video");
var a=c("ac-dom-traversal/querySelectorAll");var d=c("ac-object");var i=c("./../../mediaSource/factory/createFromSourceTag");
function h(k,l){if(l.getAttribute("preload")){k.preload=l.getAttribute("preload")
}}function f(l,m){var k;l.src=[];if(m.getAttribute("src")){l.src.push(i(m))}k=a("source",m);
if(k.length){k=k.map(function(n){return i(n)});l.src=l.src.concat(k)}}b.exports=function(m,o){o=o||{};
var n;var l;var k={paused:m.paused,currentTime:m.currentTime,duration:m.duration,muted:m.muted,volume:m.volume,playbackRate:m.playbackRate,ended:m.ended,readyState:m.readyState,seeking:m.seeking,poster:m.poster,defaultPlaybackRate:m.defaultPlaybackRate,defaultMuted:m.defaultMuted,currentSrc:m.currentSrc,autoplay:m.autoplay};
h(k,m);f(k,m);k=d.extend(k,o);n=new j(k);if(m.currentSrc){l=n.findSourcesByFullyQualifiedURL(m.currentSrc);
if(l&&l[0]){n.setCurrentSrc(l[0])}}return n}},{"./../../Video":987,"./../../mediaSource/factory/createFromSourceTag":988,"ac-dom-traversal/querySelectorAll":273,"ac-object":803}],990:[function(i,a,q){var o=i("ac-mvc-view").View;
var c=i("ac-video-controls");var p=i("./../controls/Native");var r=i("ac-object");
var d=i("ac-fullscreen");var k=i("ac-feature");var f=i("./../const/readyState");
var j=i("ac-video-posterframe");var h=i("ac-dom-events/addEventListener");var b=i("ac-classlist/add");
var g=i("ac-classlist/remove");var n=i("ac-classlist/contains");var s="user-hover";
function m(){o.apply(this,arguments);if(this.options.mediaController){this.setMediaController(this.options.mediaController)
}this.poster=null;this._initPoster();this._initControls();this._listenForFullscreenEvents();
if(k.isDesktop()){this._appendBlockade()}}m.LOADEDMETADATA=f.LOADEDMETADATA;m.LOADEDDATA=f.LOADEDDATA;
m.CANPLAY=f.CANPLAY;m.CANPLAYTHROUGH=f.CANPLAYTHROUGH;var l=m.prototype=r.create(o.prototype);
l.defaultOptions={controlsTimeoutDuration:5000};l.className="ac-video-player";l._appendBlockade=function(){var t=new o({className:"ac-video-blockade"});
t.appendTo(this.el);this._blockade=t};l._onEnterFullscreen=function(t){if(t.target===this.getFullscreenTargetElement()){this.trigger("enterfullscreen",t)
}};l._onExitFullscreen=function(t){if(t.target===this.getFullscreenTargetElement()){this.trigger("exitfullscreen",t)
}};l._listenForFullscreenEvents=function(){d.on("enterfullscreen",this._onEnterFullscreen,this);
d.on("exitfullscreen",this._onExitFullscreen,this)};l._unbindFullscreenEvents=function(){d.off("enterfullscreen",this._onEnterFullscreen,this);
d.off("exitfullscreen",this._onExitFullscreen,this)};l.destroy=function(){o.prototype.destroy.call(this);
this._unbindFullscreenEvents()};l._initPoster=function(){var t=null;if(this.mediaController.hasPoster()&&this.poster===null){t=j.create(this.mediaController);
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
h(this.el,"mouseenter",t);h(this.el,"mousemove",t);var u=function(){window.clearTimeout(x);
g(this.el,s);w={}};if("onmouseleave" in this.el){h(this.el,"mouseleave",u.bind(this))
}else{h(this.el,"mouseout",function(y){if(!v.el.contains(y.target)&&y.target!==v.el){u.call(this)
}}.bind(this),true)}return v};l._instantiateControls=function(t){if(typeof t.create!=="function"){return t
}return t.create({player:this.mediaController,fullScreenElement:this.getFullscreenTargetElement()})
};l._instantiateNonHandheldControls=function(){var u=this.options.controls;var t;
if(u===false||u===null){t=null}else{if(u!==undefined){t=this._instantiateControls(u)
}else{if(k.isDesktop()){t=this._instantiateDefaultCustomUIControls()}else{t=this._instantiateControls(p)
}}}return t};l._instantiateHandheldControls=function(){return this._instantiateControls(p)
};l._initControls=function(){var t;if(!k.isHandheld()){t=this._instantiateNonHandheldControls()
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
};l.removeTextTrack=function(){return this.mediaController.removeTextTrack.apply(this.mediaController,arguments)
};l.getEnabledTextTracks=function(){return this.mediaController.getEnabledTextTracks.apply(this.mediaController,arguments)
};l.getVisibleTextTracks=function(){return this.mediaController.getVisibleTextTracks.apply(this.mediaController,arguments)
};l.findTextTrack=function(t){return this.mediaController.findTextTrack(t)};l.findTextTrackModelFromNativeTrack=function(t){return this.mediaController.findTextTrackModelFromNativeTrack(t)
};l.getMediaElement=function(){return this.mediaController.getMediaElement()};a.exports=m
},{"./../const/readyState":973,"./../controls/Native":978,"ac-classlist/add":1,"ac-classlist/contains":7,"ac-classlist/remove":9,"ac-dom-events/addEventListener":232,"ac-feature":749,"ac-fullscreen":306,"ac-mvc-view":800,"ac-object":803,"ac-video-controls":881,"ac-video-posterframe":959}],991:[function(f,g,c){var d=f("./../Player");
var h=f("./../../mediaController/factory/create");var a=f("ac-dom-nodes");var b=f("./../../collection/playerCollection");
g.exports=function(k,i){i=i||{};var j;if(!i.mediaController){i.mediaController=h(k,i)
}j=new d(i);if(i.mediaController.getViewElement().parentNode!==j.el){a.insertFirstChild(i.mediaController.getViewElement(),j.el)
}if(!i.preventCollection){b.add(j)}return j}},{"./../../collection/playerCollection":971,"./../../mediaController/factory/create":980,"./../Player":990,"ac-dom-nodes":728}],992:[function(d,g,c){var h=d("./../../config/VideoConfig");
var a=d("./../../models/Video");var b=d("./create");var f=function(i){var j=new h();
var l;var m;j.getConfig(i,{},{}).then(function(n){n.id=i.id;l=n;m=n.source});var k=new a({src:m});
return b(k)};g.exports=f},{"./../../config/VideoConfig":972,"./../../models/Video":987,"./create":991}],993:[function(c,b,g){var d=c("./create");
var i=c("./../../mediaController/factory/createFromVideoTag");var a=c("ac-dom-traversal/querySelectorAll");
var h=c("ac-dom-traversal/querySelector");function f(m){var k=a("source",m);var l=0;
for(l;l<k.length;l+=1){k[l].parentNode.removeChild(k[l])}}var j=function(l,k){k=k||{};
var m=h("video",l);if(m===null){m=document.createElement("video");l.appendChild(m)
}if(typeof k.src!=="undefined"&&k.src!==null){f(m)}k.mediaController=i(m,k);k.element=l;
return d(null,k)};b.exports=j},{"./../../mediaController/factory/createFromVideoTag":981,"./create":991,"ac-dom-traversal/querySelector":272,"ac-dom-traversal/querySelectorAll":273}],994:[function(b,d,a){var c=b("ac-browser");
d.exports={get:function(){var f="html5";if(c.name==="IE"&&c.version<9){f="quicktime"
}return f}}},{"ac-browser":228}],995:[function(b,c,a){var f=b("ac-mvc-view").View;
function g(){f.apply(this,arguments)}var d=g.prototype=new f();d.tagName="source";
d.render=function(){this.el.setAttribute("src",this.model.get("src"));if(this.model.has("type")){this.el.setAttribute("type",this.model.get("type"))
}};c.exports=g},{"ac-mvc-view":800}],996:[function(c,b,f){var a=c("./MediaView");
var j=c("./../MediaSourceTag");var d=c("ac-object");var g=c("ac-dom-traversal/querySelector");
function i(){a.apply(this,arguments)}var h=i.prototype=d.create(a.prototype);h.tagName="video";
h._renderBooleanAttribute=function(k,m){var l=this.getMediaElement();if(m===true){l.setAttribute(k,"")
}else{l.removeAttribute(k)}};h._findExistingSourceOrTrackElement=function(m){var k;
var l;if(m.has("src")){l='[src="'+m.get("src")+'"]';k=g(l,this.el)}return k};h._appendSource=function(n){var l=this.getMediaElement();
var m=this._findExistingSourceOrTrackElement(n);var k=new j({model:n,element:m});
k.render();if(!m){k.appendTo(l)}};h._onSourceAdd=function(k){this._appendSource(k.source)
};h._renderPreload=function(){var k=this.getMediaElement();k.setAttribute("preload",this.model.getPreload())
};h._renderAutoplay=function(){this._renderBooleanAttribute("autoplay",this.model.getAutoplay())
};h._renderMuted=function(){this._renderBooleanAttribute("muted",this.model.getMuted())
};h._renderAirplay=function(){this._renderBooleanAttribute("x-webkit-airplay",true)
};h._renderCrossOrigin=function(){var k=this.getMediaElement();if(this.model.has("crossorigin")){k.setAttribute("crossorigin",this.model.get("crossorigin"))
}};h._renderCurrentSrc=function(){var k=this.model.getCurrentSrc();if(k){this.el.setAttribute("src",k.get("src"))
}};h._renderLoop=function(){var k=this.model.getLoop();this._renderBooleanAttribute("loop",k)
};h._respondToAddTrackEvent=function(k){this.emitterTrigger("addtrack",k.data)};
h.getSourceAttribute=function(){return this.getMediaElement().getAttribute("src")
};h.render=function(){var k=this.getMediaElement();this.model.on("source:add",this._onSourceAdd,this);
this.model.on("change:autoplay",this._renderAutoplay,this);this.model.on("change:muted",this._renderMuted,this);
this.model.on("change:preload",this._renderPreload,this);this.model.on("change:currentSrc",this._renderCurrentSrc,this);
this.model.on("change:crossorigin",this._renderCrossOrigin,this);this.model.getSources().forEach(this._appendSource,this);
this._renderAutoplay();this._renderPreload();this._renderMuted();this._renderAirplay();
this._renderCrossOrigin();this._renderCurrentSrc();this._renderLoop();if(this.model.id){k.setAttribute("id",this.model.id)
}};b.exports=i},{"./../MediaSourceTag":995,"./MediaView":997,"ac-dom-traversal/querySelector":272,"ac-object":803}],997:[function(c,b,f){var g=c("ac-dom-traversal/querySelector");
var i=c("ac-browser");var j=c("ac-mvc-view").View;var d=c("ac-object");function a(){this._mediaElement=null;
j.apply(this,arguments)}var h=a.prototype=d.create(j.prototype);h.className="ac-video-media-controller";
h._findMediaElementByTagName=function(k){if(this.getTagName()===k){return this.el
}return g(k,this.el)};h.renderTextTrack=function(){};h._findMediaElement=function(){if(this._findMediaElementByTagName("video")){return this._findMediaElementByTagName("video")
}else{if(i.name!=="IE"){return this._findMediaElementByTagName("embed")}}return this._findMediaElementByTagName("object")
};h.getMediaElement=function(){return this._findMediaElement()};b.exports=a},{"ac-browser":228,"ac-dom-traversal/querySelector":272,"ac-mvc-view":800,"ac-object":803}],998:[function(f,c,i){var b=f("./MediaView");
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
this._renderString()};c.exports=k},{"./MediaView":997,"./eventAdapters/QuickTime":999,"./eventAdapters/quicktimeEventsElement":1002,"ac-browser":228,"ac-dom-traversal":253,"ac-object":803}],999:[function(b,a,f){var j=b("ac-dom-emitter").DOMEmitter;
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
};a.exports=d},{"./QuickTimePluginReady":1000,"./QuickTimeTimeUpdate":1001,"ac-dom-emitter":716,"ac-object":803}],1000:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");function h(i){g.call(this);this._movie=i;this._pollInterval=5;
this._boundPoll=this.poll.bind(this)}var f=h.prototype=a.create(g.prototype);f._resetMovieUrl=function(){var i=this._movie;
var j;i.SetResetPropertiesOnReload(false);j=i.GetURL();i.autoplay=true;j+=(j.indexOf("?")!==-1)?"&rnd="+Math.random():"?rnd="+Math.random();
i.SetURL(j)};f.getPluginStatus=function(){var i="";try{i=this._movie.GetPluginStatus()
}catch(j){}return i};f.isAPIAvailable=function(){var i;try{this._movie.GetVolume();
i=true}catch(j){i=false}return i};f.isReady=function(){return/(Complete)/i.test(this.getPluginStatus())
};f._triggerReady=function(){this.trigger("ready")};f.poll=function(){if(this.isReady()){this._resetMovieUrl();
this._triggerReady()}else{setTimeout(this._boundPoll,this._pollInterval)}};d.exports=h
},{"ac-event-emitter":278,"ac-object":803}],1001:[function(c,f,b){var h=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");var d=300;function i(j){this.mediaElement=j;this._isListeningForTimeUpdate=false;
this._boundTick=null;this._lastTimeCheck=0;this._timeout=null}var g=i.prototype=a.create(h.prototype);
g.listenForTimeUpdate=function(){this._isListeningForTimeUpdate=true;this._boundTick=this._tick.bind(this);
window.setTimeout(this._boundTick,d)};g.stopListenForTimeUpdate=function(){window.clearTimeout(this._timeout);
this._isListeningForTimeUpdate=false;this._boundTick=null;this._timeout=null};g.getCurrentTime=function(){return this.mediaElement.GetTime()/this.mediaElement.GetTimeScale()
};g._tick=function(){var j=this.getCurrentTime();if(j!==this._lastTimeCheck){this.trigger("timeupdate")
}this._lastTimeCheck=j;if(this._isListeningForTimeUpdate&&this._boundTick){this._timeout=window.setTimeout(this._boundTick,d)
}};f.exports=i},{"ac-event-emitter":278,"ac-object":803}],1002:[function(b,d,a){var c=b("ac-browser");
var g=function(k,i){var j=(k.toUpperCase()==="IE"&&i<9);if(!j){return}this.id="quicktime-events-element-"+Date.now();
this.el=document.createElement("object");this._setAttributes({id:this.getID(),wmode:"transparent",classid:"clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598",codebase:"http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"});
this.appendToBody()};var f=g.prototype;f.appendToBody=function(){document.write(this.el.outerHTML)
};f.getID=function(){return this.id};f._setAttributes=function(j){for(var i in j){this.el.setAttribute(i,j[i])
}};var h=new g(c.name,c.version);d.exports=h;d.exports.C=g},{"ac-browser":228}],1003:[function(d,c,f){var l=d("ac-mvc-view").View;
var h=d("./TextTrackDiv");var b=d("ac-object");var i=d("ac-dom-styles");var j=d("ac-dom-traversal/firstChild");
var m=d("ac-ajax-xhr");var a=d("ac-console");function k(){l.apply(this,arguments);
this.textTracks=[];this.textTrackEl=null;this.textTrackInnerEl=null;this.isVisible=false;
this._textTrackDivs=[];this.loadExistingTextTracksSrc()}var g=k.prototype=b.create(l.prototype);
g.loadExistingTextTracksSrc=function(){var o=(this.el&&this.el.children)?this.el.children:[];
var n=o.length;var p;while(n--){if(o[n]&&o[n].nodeName==="TRACK"){p=o[n].getAttribute("src");
break}}if(p){this.loadVTTFile(p)}};g.loadVTTFile=function(p,o){var n=p;var q={complete:function(s,r){},data:{},error:function(s,r){a.log(JSON.stringify(s))
},headers:{},success:function(s,r,t){this._vttFileLoadSuccess(s,o)}.bind(this),timeout:5000};
m.get(n,q)};g._vttFileLoadSuccess=function(p,n){var o=this.addTextTrackTag(n);this.textTrackEl=o.el;
this.textTrackInnerEl=j(this.textTrackEl);this.textTracks=this._formatVTTToModel(p);
this._publishAddTrack(this.textTracks)};g._publishAddTrack=function(n){this.emitterTrigger("addtrack",{track:n,textTrackEl:this.textTrackEl,textTrackInnerEl:this.textTrackInnerEl})
};g._publishRemoveTrack=function(n){this.emitterTrigger("removetrack",{track:n})
};g.show=function(){if(!this.textTrackEl||this.isVisible){return}i.setStyle(this.textTrackEl,{display:"inline-block"});
if(this.textTrackInnerEl){i.setStyle(this.textTrackInnerEl,{display:"inline-block"})
}this.isVisible=true};g.hide=function(){if(!this.textTrackEl||!this.isVisible){return
}i.setStyle(this.textTrackEl,{display:"none"});if(this.textTrackInnerEl){i.setStyle(this.textTrackInnerEl,{display:"none"})
}this.isVisible=false};g._createTextTrackDiv=function(n){var o=new h({model:n});
o.render();this.on("canplay",function(){o.appendTo(this.el.parentNode);this._textTrackDivs.push(o)
}.bind(this));return o};g.addTextTrackTag=function(n){return this._createTextTrackDiv(n)
};g._findTextTrackTagFromModel=function(p){var o=this._textTrackDivs.length;var q={};
for(var n=0;n<o;n++){if(this._textTrackDivs[n].model.cid===p.cid){q.div=this._textTrackDivs[n];
q.idx=n;break}}return q};g.removeTextTrackDiv=function(n){var o=this._findTextTrackTagFromModel(n);
if(o.div){o.div.destroy();this._textTrackDivs.splice(o.idx,1)}this._publishRemoveTrack(n.getCues())
};g._formatVTTToModel=function(t){var r=t.split(/\n/);var s=/([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}( \-\-> ){1}([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}/;
var q=[];var o;var u;var p=0;var n=r.length;for(p;p<n;p++){u="";if(s.test(r[p])){o=r[p].split(" --> ");
o[0]=o[0].split(":").length<3?"00:"+o[0]:o[0];o[1]=o[1].split(":").length<3?"00:"+o[1]:o[1];
while(++p&&p<n&&!s.test(r[p])){if(r[p]!==""){u+=r[p]+"<br />"}}u=u.substr(0,u.length-6);
if(p<n){p--}q.push({startTime:o[0].split(".")[0],endTime:o[1].split(".")[0],text:u})
}}return q};c.exports=k},{"./TextTrackDiv":1004,"ac-ajax-xhr":676,"ac-console":681,"ac-dom-styles":746,"ac-dom-traversal/firstChild":252,"ac-mvc-view":800,"ac-object":803}],1004:[function(c,d,a){var i=c("ac-mvc-view").View;
var b=c("ac-object");var h=c("ac-dom-styles");function g(){i.apply(this,arguments)
}var f=g.prototype=b.create(i.prototype);f.tagName="div";f.render=function(){var j=document.createElement("div");
h.setStyle(this.el,{display:"none",position:"absolute","z-index":"9",bottom:"20%",left:"0",right:"0","text-align":"center"});
h.setStyle(j,{display:"none",padding:"2px 4px","font-family":"Arial","font-weight":"700","font-size":"24px",color:"white","text-align":"center","background-color":"black"});
this.el.setAttribute("id",this.model.cid);this.el.appendChild(j)};d.exports=g},{"ac-dom-styles":746,"ac-mvc-view":800,"ac-object":803}],1005:[function(c,f,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");function d(){h.apply(this,arguments)}var g=d.prototype=b.create(h.prototype);
g._onModeChange=function(i){this.renderMode()};g.renderMode=function(){var i=this.model.get("mode");
this.el.mode=i};g.render=function(){this.model.on("change:mode",this._onModeChange,this)
};f.exports=d},{"ac-mvc-view":800,"ac-object":803}],1006:[function(d,f,b){var h=d("ac-mvc-view").View;
var c=d("ac-object");function a(){h.apply(this,arguments)}var g=a.prototype=c.create(h.prototype);
g.tagName="track";g.render=function(){["src","type","label","kind","srclang"].forEach(function(i){if(this.model.has(i)){this.el.setAttribute(i,this.model.get(i))
}},this);this.el.setAttribute("id",this.model.cid)};f.exports=a},{"ac-mvc-view":800,"ac-object":803}],1007:[function(d,f,b){var h=d("ac-mvc-view").View;
var i=d("./TextTrackTag");var c=d("ac-object");function a(){h.apply(this,arguments);
this._textTracks=this.el.textTracks;this._textTrackTags=[];this.addTextTrackEvents()
}var g=a.prototype=c.create(h.prototype);g.addTextTrackEvents=function(){if(this._textTracks){this._boundRespondToAddTrackEvent=this._respondToAddTrackEvent.bind(this);
this._boundRespondToChangeEvent=this._respondToChangeEvent.bind(this);this._boundRespondToRemoveTrackEvent=this._respondToRemoveTrackEvent.bind(this);
this._textTracks.addEventListener("addtrack",this._boundRespondToAddTrackEvent);
this._textTracks.addEventListener("change",this._boundRespondToChangeEvent);this._textTracks.addEventListener("removetrack",this._boundRespondToRemoveTrackEvent)
}};g.removeTextTrackEvents=function(){this._boundRespondToAddTrackEvent=null;this._boundRespondToChangeEvent=null;
this._boundRespondToRemoveTrackEvent=null;this._textTracks.removeEventListener("addtrack",this._boundRespondToAddTrackEvent);
this._textTracks.removeEventListener("change",this._boundRespondToChangeEvent);
this._textTracks.removeEventListener("removetrack",this._boundRespondToRemoveTrackEvent)
};g._respondToAddTrackEvent=function(j){this._addIdToTextTrackEventData(j);this.emitterTrigger("addtrack",{track:j.track})
};g._respondToChangeEvent=function(j){this.emitterTrigger("change",j)};g._respondToRemoveTrackEvent=function(j){this._addIdToTextTrackEventData(j);
this.emitterTrigger("removetrack",{track:j.track})};g._addIdToTextTrackEventData=function(j){if(j&&j.track&&this._textTrackId&&!j.track.id){try{j.track.id=this._textTrackId
}catch(k){}this._textTrackId=null}return j};g._createTextTrackTag=function(j){var k=new i({model:j});
k.render();this._textTrackId=k.el.id;k.appendTo(this.el);this._textTrackTags.push(k)
};g.addTextTrackTag=function(j){this._createTextTrackTag(j)};g._findTextTrackTagFromModel=function(k){var m=this._textTrackTags.length;
var l={};for(var j=0;j<m;j++){if(this._textTrackTags[j].model.cid===k.cid){l.tag=this._textTrackTags[j];
l.idx=j;break}}return l};g.removeTextTrackTag=function(j){var k=this._findTextTrackTagFromModel(j);
if(k.tag){k.tag.destroy();this._textTrackTags.splice(k.idx,1)}};f.exports=a},{"./TextTrackTag":1006,"ac-mvc-view":800,"ac-object":803}],1008:[function(c,d,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");function f(){h.apply(this,arguments)}var g=f.prototype=b.create(h.prototype);
g._onModeChange=function(i){this._renderMode()};g._renderMode=function(){var i=this.model.get("mode");
if(i==="showing"){this.el.webkitClosedCaptionsVisible=true}else{this.el.webkitClosedCaptionsVisible=false
}};g.setModel=function(i){if(this.model){this.model.off("change:mode",this._onModeChange,this)
}this.model=i;this.listen()};g.listen=function(){this.model.on("change:mode",this._onModeChange,this)
};g.render=function(){this._renderMode();this.listen()};d.exports=f},{"ac-mvc-view":800,"ac-object":803}],1009:[function(b,c,a){c.exports=b("ac-video-player")
},{"ac-video-player":964}],1010:[function(b,c,a){c.exports={create:b("./ac-films/factory/films")}
},{"./ac-films/factory/films":1016}],1011:[function(i,b,l){var p=i("ac-video-localization").localization;
var d=i("ac-video-nosupportview").View;var k=i("ac-feature");var j=i("./LegacyAnalyticsTranslator");
var h=i("ac-classlist");var q=i("ac-event-emitter").EventEmitter;var g=i("ac-object");
var n=i("./VideoSourceCollection");var c=i("./factory/player");var o=i("ac-fullscreen");
var a=i("./featureDetect/featureDetect");function f(r){q.call(this);this._currentVideo=null;
this.videoSrcCollection=new n();this.analyticsTranslator=null;this.player=null;
this.localization=null;this.noSupportView=null;this.options=g.defaults(f.defaults,r)
}var m=f.prototype=g.create(q.prototype);f.defaults={analytics:true,playerOptions:{crossorigin:"anonymous",preload:"none"}};
m.play=function(s){var r=null;if(!this.player){this.createPlayer()}if(s){r=this.videoSrcCollection.getSource(s);
if(r===this.getCurrentVideo()){this.player.addClassName("player-fullscreen");this.player.play();
return}}else{if(!this.player.getCurrentSrc()){r=this.videoSrcCollection.getSourceByIndex(0)
}else{r=this.getCurrentVideo()}}if(r){if(r.poster){this.setPoster(r.poster)}if(this.localization===null){this.ensureLocalization().then(this.play.bind(this,s))
}else{this._playVideoBySrcObj(r)}}};m.bindPlayerEvents=function(){this.player.on("enterfullscreen",this._onEnterFullscreen,this);
this.player.on("exitfullscreen",this._onExitFullscreen,this);this.player.on("durationchange",this._onPlayerSrcChange,this)
};m._onPlayerSrcChange=function(r){this.handleTextTracks(r)};m._onEnterFullscreen=function(){h.add(this.player.el,"player-fullscreen")
};m._onExitFullscreen=function(){h.remove(this.player.el,"player-fullscreen")};
m.handleTextTracks=function(u){var s;var r;var t;if(!this.player||!u.value||isNaN(u.value)||!this._currentVideo.vatResource.vatVTTSource||this._currentVideo.vatResource.vatVTTSource.length===0){return
}t={src:this._currentVideo.vatResource.vatVTTSource.pop()};s=this.player.getTextTracks();
r=this.player.findTextTrack(t);if(s&&s.models&&s.models.length>0&&r){s.models.forEach(function(v){if(r.cid===v.cid){v.hide()
}else{if(a.shouldAllowSingleTextTrack()){this.player.removeTextTrack(v)}else{v.disable()
}}}.bind(this))}};m.pause=function(){this.player.pause()};m.setSrc=function(r){return this._setNewPlayerSrc(r)
};m.getCurrentSrc=function(){return this.player.getCurrentSrc().attributes.src};
m.getCurrentVideo=function(){return this._currentVideo};m.createVideoResource=function(s,r){return this.videoSrcCollection.addSource(s,r)
};m.createPlayer=function(){this.on("novideosupport",this._onNoVideoSupport,this);
if(this.options.poster){this.options.playerOptions.poster=this.options.poster}this.player=c(this.options.playerOptions);
if(this.player){this.bindPlayerEvents();this.defaultPosterFrame=this.player.getPoster();
if(!this.analyticsTranslator&&this.options.analytics===true){this.analyticsTranslator=new j(this.player);
this.analyticsTranslator.activate()}this._applyDocumentClassnames()}return this.player
};m.loadLocalization=function(){return p.create().then(function(r){this.localization=r
}.bind(this))};m.ensureLocalization=function(){var r;if(this.localization===null){r=this.loadLocalization()
}else{r=Promise.resolve()}return r};m.createNoSupportView=function(){this.ensureLocalization().then(function(){var r=new d({model:this.localization});
r.render();this.noSupportView=r;this.trigger("novideosupport");this._onNoVideoSupport()
}.bind(this))};m.setPoster=function(r){if(r!==this.player.getPoster()){this.player.setPoster(r)
}};m._playVideoBySrcObj=function(s){var r=this.player.getCurrentSrc();if(!r||(r.attributes.src&&r.attributes.src!==s.src)){if(k.isDesktop()){this.player.once("canplaythrough",this.player.play,this.player);
this._setNewPlayerSrc(s)}else{this.player.addClassName("player-fullscreen");this._setNewPlayerSrc(s);
this.player.play()}}else{this.player.play()}};m._setNewPlayerSrc=function(s){var r=this._setPlayerSrcFromSourceObject(s,this.player);
if(r){this._currentVideo=s;if(this.options.analytics===true){this.analyticsTranslator.addSourceObject(s.id,s.cid)
}if(s.poster){this.setPoster(s.poster)}}return r};m._setPlayerSrcFromSourceObject=function(r,s){var u=null;
var t;if(s&&r.vatResource&&typeof r.vatResource.setPlayerSrc==="function"){t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
r.vatResource.setPlayerSrc(this.player,t);this.player.once("readystatechange",function(){var x=this.player.el;
var w=this.player.getMediaWidth();var v=this.player.getMediaHeight();if(w&&w!==848&&v&&v!==480){x.style.paddingBottom=(v/w*100)+"%"
}},this);r.cid=s.getCurrentSrc().cid;u=s.getCurrentSrc().attributes.src}return u
};m._applyDocumentClassnames=function(){var r;if(a.shouldPlayNativePlayer()){r="ac-player-handheld"
}if(k.isTablet()){r="ac-player-tablet"}if(k.isDesktop()){r="ac-player-desktop"}h.add(document.documentElement,r)
};m._onNoVideoSupport=function(){};b.exports=f},{"./LegacyAnalyticsTranslator":1012,"./VideoSourceCollection":1014,"./factory/player":1017,"./featureDetect/featureDetect":1019,"ac-classlist":8,"ac-event-emitter":278,"ac-feature":287,"ac-fullscreen":306,"ac-object":1488,"ac-video-localization":586,"ac-video-nosupportview":672}],1012:[function(b,c,a){var h=b("ac-analytics");
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
m.element=l;m.targetId=j||k||"";return m};c.exports=i},{"ac-analytics":"ac-analytics","ac-dom-traversal":253,"ac-event-emitter":278}],1013:[function(d,b,h){var m=d("ac-modal").Modal;
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
this.modalVideo.on("open",this._onModalOpen,this)};j.bindPlayerEvents=function(){k.prototype.bindPlayerEvents.call(this);
if(this.player){this.player.on("ended",this._onEnded,this)}};j._onModalClose=function(){if(!this.player){return
}this.player.setCurrentTime(0);this.pause();if(g.isTablet()){n.exitFullscreen(this.player.getMediaElement())
}};j._onModalOpen=function(){this._guaranteeVolume();if(this.options.modalOptions.playOnOpen===true){if(g.isTablet()){this.player.play()
}}};j._onEnded=function(){if(this.options.modalOptions.closeOnEnded===true){this.modalVideo.close()
}};j._onNoVideoSupport=function(){if(this.noSupportView&&this.modalVideo){this.modalVideo.appendContent(this.noSupportView.el)
}};b.exports=a},{"./FilmsController":1011,"ac-browser":228,"ac-classlist":8,"ac-feature":287,"ac-fullscreen":306,"ac-keyboard":324,"ac-modal":478,"ac-modal-video":420,"ac-object":1488}],1014:[function(c,d,b){var a=c("./VideoSourceObject").create;
function g(){this.sources=[]}var f=g.prototype;f.addSource=function(j,i){var h=a(j,i);
if(h){this.sources.push(h);h.index=this.sources.length-1}return h};f.getSource=function(h){var i=null;
if(typeof h==="number"){i=this.getSourceByIndex(h)}else{if(typeof h==="string"){if(/^cid/.test(h)){i=this.getSourceByCid(h)
}else{i=this.getSourceById(h)}}}return i};f.getSourceByIndex=function(h){return this.sources[h]
};f.getSourceById=function(h){return this.getSourceByPropertyValue("id",h)};f.getSourceByCid=function(h){return this.getSourceByPropertyValue("cid",h)
};f.getSourceByPropertyValue=function(j,h){var i=null;this.sources.some(function(l){var k=false;
if(l[j]===h){i=l;k=true}return k});return i};d.exports=g},{"./VideoSourceObject":1015}],1015:[function(b,d,a){var g=b("ac-vatman");
var h=g.vatResource;var f="data-acv-poster";function c(l,i){if(typeof l!=="string"){throw new TypeError(l+" must be a string")
}var j=i.element||null;var n=null;var m=null;var k=i.posterAttribute||f;if(j){m=j.getAttribute(k);
n=j.id}return{vatResource:h.create(l),element:j,src:l,poster:m,id:n,cid:null}}d.exports={create:c}
},{"ac-vatman":559}],1016:[function(d,c,i){var g=d("../FilmsController");var a=d("../ModalFilmsController");
var f=d("ac-object");var m=d("./sources");var l=d("../posters");var k=d("ac-dom-events");
var b=d("../featureDetect/featureDetect");var h={poster:null,modal:false,deepLink:true,playOnClick:true};
function j(p,n){n=f.defaults(h,n||{});var o;if(n.modal===true&&!b.shouldPlayNativePlayer()){o=new a(n)
}else{o=new g(n)}o.loadLocalization();o.createPlayer();if(o.player){m(p,o,n)}else{o.createNoSupportView();
p.forEach(function(q){k.addEventListener(q,"click",function(r){k.preventDefault(r);
o.modalVideo.open()})})}return o}c.exports=j},{"../FilmsController":1011,"../ModalFilmsController":1013,"../featureDetect/featureDetect":1019,"../posters":1020,"./sources":1018,"ac-dom-events":234,"ac-object":1488}],1017:[function(g,f,i){var k=g("ac-vatman");
var c=g("ac-video").Player;var l=g("ac-fullscreen");var h=g("ac-dom-events");var d=g("../featureDetect/featureDetect");
function b(m){m.on("ended",function(){l.exitFullscreen(m.getMediaElement())});m.on("exitfullscreen",function(){m.setCurrentTime(0)
})}function a(m){m.on("enterfullscreen",function(){var n=m.getMediaElement();var o;
if(n.tagName.toLowerCase()!=="video"){o=m.getMediaHeight()/m.getMediaWidth();n.style.height=n.offsetWidth*o+"px"
}});m.on("exitfullscreen",function(){var n=m.getMediaElement();if(n.tagName.toLowerCase()!=="video"){n.style.height=null
}})}function j(m){m=m||{};var n=k.createPlayer(c,m);if(n){if(d.shouldPlayNativePlayer()){b(n);
n.appendTo(document.body)}else{a(n)}}return n}f.exports=j},{"../featureDetect/featureDetect":1019,"ac-dom-events":234,"ac-fullscreen":306,"ac-vatman":559,"ac-video":1009}],1018:[function(d,c,g){var n=d("ac-router");
var p=d("ac-gesture-touchclick").TouchClick;var k=d("../windowLoad");var m=d("../posters");
var f=d("ac-vatman");var h=d("ac-dom-traversal").querySelector;var o=d("ac-browser");
var j=d("ac-feature");var l=o.name.toLowerCase();var a=(l==="safari"||l==="safari mobile");
var b=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
function i(t,s,r){var u;var q;if(r.deepLink===true){q=new n.Router({hashChange:true,pushState:false})
}t.forEach(function(y){var v;var B=y.getAttribute("href");var A=y.getAttribute("data-film-id")||y.getAttribute("id");
var z={element:y};var x;var w=B;if(!a){w=f.vatClient.getSource(B,b)}if(w!==B){y.setAttribute("href",w)
}if(!s.player){s.createPlayer()}if(B){x=s.createVideoResource(B,z);if(!x.poster){x.poster=s.defaultPosterFrame
}if(x.poster){m.loadPoster(x.poster)}if(r.deepLink===true&&x.id){q.createRoute(x.id,function(){k(function(){if(j.isTablet()){var D=s.player;
var F=D.poster;var E=D.getPoster();var C=D.getMediaElement();if(F){C.setAttribute("poster",E);
F._hide()}}s.player.setPreload("auto");s.play(x.id)})})}if(r.playOnClick===true){v=p.create(y);
v.on("click",function(){if(s.player&&s.player.getPreload()==="none"){s.player.setPreload("auto")
}s.play(A)})}}});if(r.deepLink===true){if(j.isTablet()){k(function(){window.requestAnimationFrame(function(){q.start()
})})}else{q.start()}}}c.exports=i},{"../posters":1020,"../windowLoad":1021,"ac-browser":228,"ac-dom-traversal":253,"ac-feature":287,"ac-gesture-touchclick":313,"ac-router":543,"ac-vatman":559}],1019:[function(c,f,b){var h=c("ac-browser");
var a=c("ac-feature");var g=h.name.toLowerCase();var d=h.os.toLowerCase();f.exports={shouldPlayNativePlayer:function(){return(a.isHandheld()&&d==="ios")
},shouldAllowSingleTextTrack:function(){return(g==="safari mobile")}}},{"ac-browser":228,"ac-feature":287}],1020:[function(c,d,b){function a(f){new Image().src=f
}d.exports={loadPoster:a}},{}],1021:[function(c,d,b){var a=false;var g=c("ac-dom-events");
g.addEventListener(window,"load",function(){a=true});function f(h){if(a){h()}else{g.addEventListener(window,"load",h)
}}d.exports=f},{"ac-dom-events":234}],1022:[function(b,c,a){arguments[4][681][0].apply(a,arguments)
},{"./ac-console/log":1023,dup:681}],1023:[function(b,c,a){arguments[4][682][0].apply(a,arguments)
},{dup:682}],1024:[function(b,c,a){arguments[4][21][0].apply(a,arguments)},{"./shared/getEventType":1033,"./utils/addEventListener":1037,dup:21}],1025:[function(b,c,a){arguments[4][22][0].apply(a,arguments)
},{"./shared/getEventType":1033,"./utils/dispatchEvent":1038,dup:22}],1026:[function(b,c,a){arguments[4][23][0].apply(a,arguments)
},{"./addEventListener":1024,"./dispatchEvent":1025,"./preventDefault":1031,"./removeEventListener":1032,"./stop":1034,"./stopPropagation":1035,"./target":1036,dup:23}],1027:[function(b,c,a){arguments[4][24][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":1028,"./shared/prefixHelper":1029,"./utils/eventTypeAvailable":1030,dup:24}],1028:[function(b,c,a){arguments[4][25][0].apply(a,arguments)
},{dup:25}],1029:[function(b,c,a){arguments[4][26][0].apply(a,arguments)},{dup:26}],1030:[function(b,c,a){arguments[4][27][0].apply(a,arguments)
},{dup:27}],1031:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],1032:[function(b,c,a){arguments[4][29][0].apply(a,arguments)
},{"./shared/getEventType":1033,"./utils/removeEventListener":1039,dup:29}],1033:[function(b,c,a){arguments[4][30][0].apply(a,arguments)
},{"ac-prefixer/getEventType":1027,dup:30}],1034:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{"./preventDefault":1031,"./stopPropagation":1035,dup:31}],1035:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{dup:32}],1036:[function(b,c,a){arguments[4][33][0].apply(a,arguments)},{dup:33}],1037:[function(b,c,a){arguments[4][34][0].apply(a,arguments)
},{dup:34}],1038:[function(b,c,a){arguments[4][35][0].apply(a,arguments)},{"ac-polyfills/CustomEvent":1500,dup:35}],1039:[function(b,c,a){arguments[4][36][0].apply(a,arguments)
},{dup:36}],1040:[function(b,c,a){arguments[4][840][0].apply(a,arguments)},{"./utils/getBoundingClientRect":1051,dup:840}],1041:[function(b,c,a){arguments[4][841][0].apply(a,arguments)
},{"./utils/getBoundingClientRect":1051,dup:841}],1042:[function(b,c,a){arguments[4][842][0].apply(a,arguments)
},{"./getDimensions":1041,"./getScrollX":1046,"./getScrollY":1047,"./utils/getBoundingClientRect":1051,dup:842}],1043:[function(b,c,a){arguments[4][843][0].apply(a,arguments)
},{"./getDimensions":1041,"./getPixelsInViewport":1044,dup:843}],1044:[function(b,c,a){arguments[4][844][0].apply(a,arguments)
},{"./getViewportPosition":1048,dup:844}],1045:[function(b,c,a){arguments[4][845][0].apply(a,arguments)
},{"./getDimensions":1041,"./utils/getBoundingClientRect":1051,dup:845}],1046:[function(b,c,a){arguments[4][846][0].apply(a,arguments)
},{dup:846}],1047:[function(b,c,a){arguments[4][847][0].apply(a,arguments)},{dup:847}],1048:[function(b,c,a){arguments[4][848][0].apply(a,arguments)
},{"./getPagePosition":1042,"./getScrollX":1046,"./getScrollY":1047,"./utils/getBoundingClientRect":1051,dup:848}],1049:[function(b,c,a){arguments[4][849][0].apply(a,arguments)
},{"./getContentDimensions":1040,"./getDimensions":1041,"./getPagePosition":1042,"./getPercentInViewport":1043,"./getPixelsInViewport":1044,"./getPosition":1045,"./getScrollX":1046,"./getScrollY":1047,"./getViewportPosition":1048,"./isInViewport":1050,dup:849}],1050:[function(b,c,a){arguments[4][850][0].apply(a,arguments)
},{"./getPercentInViewport":1043,"./getPixelsInViewport":1044,dup:850}],1051:[function(b,c,a){arguments[4][851][0].apply(a,arguments)
},{dup:851}],1052:[function(b,c,a){arguments[4][42][0].apply(a,arguments)},{dup:42}],1053:[function(b,c,a){arguments[4][43][0].apply(a,arguments)
},{dup:43}],1054:[function(b,c,a){arguments[4][44][0].apply(a,arguments)},{dup:44}],1055:[function(b,c,a){arguments[4][45][0].apply(a,arguments)
},{dup:45}],1056:[function(b,c,a){arguments[4][46][0].apply(a,arguments)},{dup:46}],1057:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],1058:[function(b,c,a){arguments[4][48][0].apply(a,arguments)},{dup:48}],1059:[function(b,c,a){arguments[4][49][0].apply(a,arguments)
},{"./ELEMENT_NODE":1056,"./internal/isNodeType":1067,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:49}],1060:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{dup:50}],1061:[function(b,c,a){arguments[4][51][0].apply(a,arguments)},{"./COMMENT_NODE":1052,"./DOCUMENT_FRAGMENT_NODE":1053,"./DOCUMENT_NODE":1054,"./DOCUMENT_TYPE_NODE":1055,"./ELEMENT_NODE":1056,"./TEXT_NODE":1057,"./createDocumentFragment":1058,"./filterByNodeType":1059,"./hasAttribute":1060,"./indexOf":1062,"./insertAfter":1063,"./insertBefore":1064,"./insertFirstChild":1065,"./insertLastChild":1066,"./isComment":1069,"./isDocument":1070,"./isDocumentFragment":1071,"./isDocumentType":1072,"./isElement":1073,"./isNode":1074,"./isNodeList":1075,"./isTextNode":1076,"./remove":1077,"./replace":1078,dup:51}],1062:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"./filterByNodeType":1059,"./internal/validate":1068,"ac-polyfills/Array/prototype.indexOf":1497,"ac-polyfills/Array/prototype.slice":1498,dup:52}],1063:[function(b,c,a){arguments[4][53][0].apply(a,arguments)
},{"./internal/validate":1068,dup:53}],1064:[function(b,c,a){arguments[4][54][0].apply(a,arguments)
},{"./internal/validate":1068,dup:54}],1065:[function(b,c,a){arguments[4][55][0].apply(a,arguments)
},{"./internal/validate":1068,dup:55}],1066:[function(b,c,a){arguments[4][56][0].apply(a,arguments)
},{"./internal/validate":1068,dup:56}],1067:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"../isNode":1074,dup:57}],1068:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{"../COMMENT_NODE":1052,"../DOCUMENT_FRAGMENT_NODE":1053,"../ELEMENT_NODE":1056,"../TEXT_NODE":1057,"./isNodeType":1067,dup:58}],1069:[function(b,c,a){arguments[4][59][0].apply(a,arguments)
},{"./COMMENT_NODE":1052,"./internal/isNodeType":1067,dup:59}],1070:[function(b,c,a){arguments[4][60][0].apply(a,arguments)
},{"./DOCUMENT_NODE":1054,"./internal/isNodeType":1067,dup:60}],1071:[function(b,c,a){arguments[4][61][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":1053,"./internal/isNodeType":1067,dup:61}],1072:[function(b,c,a){arguments[4][62][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":1055,"./internal/isNodeType":1067,dup:62}],1073:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{"./ELEMENT_NODE":1056,"./internal/isNodeType":1067,dup:63}],1074:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],1075:[function(b,c,a){arguments[4][65][0].apply(a,arguments)},{dup:65}],1076:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"./TEXT_NODE":1057,"./internal/isNodeType":1067,dup:66}],1077:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"./internal/validate":1068,dup:67}],1078:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{"./internal/validate":1068,dup:68}],1079:[function(c,d,b){var f=c("ac-prefixer/getStyleProperty");
var g=c("ac-prefixer/stripPrefixes");d.exports=function a(){var k=Array.prototype.slice.call(arguments);
var p=k.shift(k);var m=window.getComputedStyle(p);var l={};var o;var h;var n;var j;
if(typeof k[0]!=="string"){k=k[0]}for(j=0;j<k.length;j++){o=k[j];h=f(o);if(h){o=g(h);
n=m[h];if(!n||n==="auto"){n=null}if(n){n=g(n)}}else{n=null}l[o]=n}return l}},{"ac-prefixer/getStyleProperty":1083,"ac-prefixer/stripPrefixes":1089}],1080:[function(b,c,a){c.exports={getStyle:b("./getStyle"),setStyle:b("./setStyle")}
},{"./getStyle":1079,"./setStyle":1092}],1081:[function(c,d,b){d.exports=function a(j){var h;
var g;var f;if(!j&&j!==0){return""}if(Array.isArray(j)){return j+""}if(typeof j==="object"){h="";
g=Object.keys(j);for(f=0;f<g.length;f++){h+=g[f]+"("+j[g[f]]+") "}return h.trim()
}return j}},{}],1082:[function(d,f,c){var b=d("./shared/stylePropertyCache");var h=d("./getStyleProperty");
var g=d("./getStyleValue");f.exports=function a(k,j){var i;k=h(k);if(!k){return false
}i=b[k].css;if(typeof j!=="undefined"){j=g(k,j);if(j===false){return false}i+=":"+j+";"
}return i}},{"./getStyleProperty":1083,"./getStyleValue":1084,"./shared/stylePropertyCache":1087}],1083:[function(b,c,a){arguments[4][213][0].apply(a,arguments)
},{"./shared/getStyleTestElement":1085,"./shared/prefixHelper":1086,"./shared/stylePropertyCache":1087,"./utils/toCSS":1090,"./utils/toDOM":1091,dup:213}],1084:[function(b,c,a){arguments[4][214][0].apply(a,arguments)
},{"./getStyleProperty":1083,"./shared/prefixHelper":1086,"./shared/stylePropertyCache":1087,"./shared/styleValueAvailable":1088,dup:214}],1085:[function(b,c,a){arguments[4][216][0].apply(a,arguments)
},{dup:216}],1086:[function(b,c,a){arguments[4][26][0].apply(a,arguments)},{dup:26}],1087:[function(b,c,a){arguments[4][218][0].apply(a,arguments)
},{dup:218}],1088:[function(b,c,a){arguments[4][219][0].apply(a,arguments)},{"./getStyleTestElement":1085,"./stylePropertyCache":1087,dup:219}],1089:[function(c,d,a){var b=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
d.exports=function f(g){g=String.prototype.replace.call(g,b,"");return g.charAt(0).toLowerCase()+g.substring(1)
}},{}],1090:[function(b,c,a){arguments[4][221][0].apply(a,arguments)},{dup:221}],1091:[function(b,c,a){arguments[4][222][0].apply(a,arguments)
},{dup:222}],1092:[function(d,f,c){var a=d("ac-prefixer/getStyleCSS");var g=d("ac-prefixer/getStyleProperty");
var b=d("./internal/normalizeValue");f.exports=function h(o,l){var k="";var j;var n;
var i;var m;var p;if(typeof l!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(n in l){m=b(l[n]);if(!m&&m!==0){i=g(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=a(n,m);if(j!==false){k+=" "+j}}}if(k.length){p=o.style.cssText;
if(p.charAt(p.length-1)!==";"){p+=";"}p+=k;o.style.cssText=p}return o}},{"./internal/normalizeValue":1081,"ac-prefixer/getStyleCSS":1082,"ac-prefixer/getStyleProperty":1083}],1093:[function(b,c,a){arguments[4][78][0].apply(a,arguments)
},{"./internal/validate":1095,"./matchesSelector":1096,"ac-dom-nodes/isElement":1073,dup:78}],1094:[function(b,c,a){arguments[4][84][0].apply(a,arguments)
},{dup:84}],1095:[function(b,c,a){arguments[4][85][0].apply(a,arguments)},{"ac-dom-nodes/COMMENT_NODE":1052,"ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":1053,"ac-dom-nodes/DOCUMENT_NODE":1054,"ac-dom-nodes/ELEMENT_NODE":1056,"ac-dom-nodes/TEXT_NODE":1057,"ac-dom-nodes/isNode":1074,"ac-polyfills/Array/prototype.indexOf":1497,dup:85}],1096:[function(d,f,c){var g=d("ac-dom-nodes/isElement");
var i=d("./internal/validate");var a=d("./internal/nativeMatches");var h=d("./shims/matchesSelector");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":1094,"./internal/validate":1095,"./shims/matchesSelector":1098,"ac-dom-nodes/isElement":1073}],1097:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");
var h=b("./internal/validate");var g=b("./shims/querySelectorAll");var f=("querySelectorAll" in document);
c.exports=function d(i,j){j=j||document;h.parentNode(j,true,"querySelectorAll","context");
h.selector(i,true,"querySelectorAll");if(!f){return g(i,j)}return Array.prototype.slice.call(j.querySelectorAll(i))
}},{"./internal/validate":1095,"./shims/querySelectorAll":1099,"ac-polyfills/Array/prototype.slice":1498}],1098:[function(c,d,b){var f=c("../querySelectorAll");
d.exports=function a(l,g){var k=l.parentNode||document;var h=f(g,k);var j;for(j=0;
j<h.length;j++){if(h[j]===l){return true}}return false}},{"../querySelectorAll":1097}],1099:[function(c,b,f){c("ac-polyfills/Array/prototype.indexOf");
var j=c("ac-dom-nodes/isElement");var h=c("ac-dom-nodes/isDocumentFragment");var k=c("ac-dom-nodes/remove");
var d="_ac_qsa_";var i=function(n,l){var m;if(l===document){return true}m=n;while((m=m.parentNode)&&j(m)){if(m===l){return true
}}return false};var g=function(l){if("recalc" in l){l.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};b.exports=function a(l,n){var p=document.createElement();
var q=d+(Math.random()+"").slice(-6);var m=[];var o;n=n||document;document[q]=[];
p.innerHTML="x<style>*{display:recalc;}"+l+'{ac-qsa:expression(document["'+q+'"] && document["'+q+'"].push(this));}';
p=p.lastChild;if(h(n)){n.appendChild(p)}else{document.documentElement.firstChild.appendChild(p)
}g(n);while(document[q].length){o=document[q].shift();o.style.removeAttribute("ac-qsa");
if(m.indexOf(o)===-1&&i(o,n)){m.push(o)}}document[q]=null;k(p);g(n);return m}},{"ac-dom-nodes/isDocumentFragment":1071,"ac-dom-nodes/isElement":1073,"ac-dom-nodes/remove":1077,"ac-polyfills/Array/prototype.indexOf":1497}],1100:[function(b,c,a){c.exports={decimalToHex:b("./ac-color/decimalToHex"),hexToDecimal:b("./ac-color/hexToDecimal"),hexToRgb:b("./ac-color/hexToRgb"),isColor:b("./ac-color/isColor"),isHex:b("./ac-color/isHex"),isRgb:b("./ac-color/isRgb"),mixColors:b("./ac-color/mixColors"),rgbToArray:b("./ac-color/rgbToArray"),rgbToDecimal:b("./ac-color/rgbToDecimal"),rgbToHex:b("./ac-color/rgbToHex"),rgbToObject:b("./ac-color/rgbToObject"),shortToLongHex:b("./ac-color/shortToLongHex")}
},{"./ac-color/decimalToHex":1101,"./ac-color/hexToDecimal":1102,"./ac-color/hexToRgb":1103,"./ac-color/isColor":1104,"./ac-color/isHex":1105,"./ac-color/isRgb":1106,"./ac-color/mixColors":1107,"./ac-color/rgbToArray":1108,"./ac-color/rgbToDecimal":1109,"./ac-color/rgbToHex":1110,"./ac-color/rgbToObject":1111,"./ac-color/shortToLongHex":1112}],1101:[function(c,d,b){d.exports=function a(f){return"#"+(f).toString(16)
}},{}],1102:[function(c,d,a){d.exports=function b(f){return parseInt(f.substr(1),16)
}},{}],1103:[function(d,f,c){var a=d("./shortToLongHex");f.exports=function b(h){h=a(h);
var g=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return g?"rgb("+parseInt(g[1],16)+", "+parseInt(g[2],16)+", "+parseInt(g[3],16)+")":null
}},{"./shortToLongHex":1112}],1104:[function(c,f,b){var g=c("./isRgb");var a=c("./isHex");
f.exports=function d(h){return g(h)||a(h)}},{"./isHex":1105,"./isRgb":1106}],1105:[function(c,d,b){d.exports=function a(g){var f=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return f.test(g)}},{}],1106:[function(b,c,a){c.exports=function d(f){return typeof f==="string"&&f.indexOf("rgb(")===0
}},{}],1107:[function(d,f,c){var b=d("./isHex");var a=d("./hexToRgb");var h=d("./rgbToObject");
f.exports=function g(n,m,l){n=b(n)?a(n):n;m=b(m)?a(m):m;n=h(n);m=h(m);var k=n.r+((m.r-n.r)*l);
var j=n.g+((m.g-n.g)*l);var i=n.b+((m.b-n.b)*l);return"rgb("+k+", "+j+", "+i+")"
}},{"./hexToRgb":1103,"./isHex":1105,"./rgbToObject":1111}],1108:[function(b,c,a){var d=b("./rgbToObject");
c.exports=function f(g){var h=d(g);return[h.r,h.g,h.b]}},{"./rgbToObject":1111}],1109:[function(d,f,b){var c=d("./hexToDecimal");
var h=d("./rgbToArray");var g=d("./rgbToHex");f.exports=function a(i){var j=g.apply(this,h(i));
return c(j)}},{"./hexToDecimal":1102,"./rgbToArray":1108,"./rgbToHex":1110}],1110:[function(b,c,a){c.exports=function d(i,h,f){return"#"+((1<<24)+(i<<16)+(h<<8)+f).toString(16).slice(1)
}},{}],1111:[function(b,c,a){c.exports=function d(g){var h=/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3])}}},{}],1112:[function(c,d,b){d.exports=function a(g){var f=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
g=g.replace(f,function(i,k,j,h){return"#"+k+k+j+j+h+h});return g}},{}],1113:[function(b,c,a){(function(){var d={};
if(typeof(a)==="undefined"){if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){d.exports={};
define(function(){return d.exports})}else{d.exports=window}}else{d.exports=a}(function(n){if(!u){var u=0.000001
}if(!h){var h=(typeof Float32Array!=="undefined")?Float32Array:Array}var i={};i.setMatrixArrayType=function(w){h=w
};if(typeof(n)!=="undefined"){n.glMatrix=i}var q={};q.create=function(){var w=new h(2);
w[0]=0;w[1]=0;return w};q.clone=function(w){var x=new h(2);x[0]=w[0];x[1]=w[1];
return x};q.fromValues=function(w,A){var z=new h(2);z[0]=w;z[1]=A;return z};q.copy=function(x,w){x[0]=w[0];
x[1]=w[1];return x};q.set=function(z,w,A){z[0]=w;z[1]=A;return z};q.add=function(y,x,w){y[0]=x[0]+w[0];
y[1]=x[1]+w[1];return y};q.subtract=function(y,x,w){y[0]=x[0]-w[0];y[1]=x[1]-w[1];
return y};q.sub=q.subtract;q.multiply=function(y,x,w){y[0]=x[0]*w[0];y[1]=x[1]*w[1];
return y};q.mul=q.multiply;q.divide=function(y,x,w){y[0]=x[0]/w[0];y[1]=x[1]/w[1];
return y};q.div=q.divide;q.min=function(y,x,w){y[0]=Math.min(x[0],w[0]);y[1]=Math.min(x[1],w[1]);
return y};q.max=function(y,x,w){y[0]=Math.max(x[0],w[0]);y[1]=Math.max(x[1],w[1]);
return y};q.scale=function(y,x,w){y[0]=x[0]*w;y[1]=x[1]*w;return y};q.distance=function(A,z){var w=z[0]-A[0],B=z[1]-A[1];
return Math.sqrt(w*w+B*B)};q.dist=q.distance;q.squaredDistance=function(A,z){var w=z[0]-A[0],B=z[1]-A[1];
return w*w+B*B};q.sqrDist=q.squaredDistance;q.length=function(z){var w=z[0],A=z[1];
return Math.sqrt(w*w+A*A)};q.len=q.length;q.squaredLength=function(z){var w=z[0],A=z[1];
return w*w+A*A};q.sqrLen=q.squaredLength;q.negate=function(x,w){x[0]=-w[0];x[1]=-w[1];
return x};q.normalize=function(B,A){var z=A[0],C=A[1];var w=z*z+C*C;if(w>0){w=1/Math.sqrt(w);
B[0]=A[0]*w;B[1]=A[1]*w}return B};q.dot=function(x,w){return x[0]*w[0]+x[1]*w[1]
};q.cross=function(y,x,w){var A=x[0]*w[1]-x[1]*w[0];y[0]=y[1]=0;y[2]=A;return y
};q.lerp=function(y,x,w,z){var B=x[0],A=x[1];y[0]=B+z*(w[0]-B);y[1]=A+z*(w[1]-A);
return y};q.transformMat2=function(B,A,z){var w=A[0],C=A[1];B[0]=z[0]*w+z[2]*C;
B[1]=z[1]*w+z[3]*C;return B};q.transformMat2d=function(B,A,z){var w=A[0],C=A[1];
B[0]=z[0]*w+z[2]*C+z[4];B[1]=z[1]*w+z[3]*C+z[5];return B};q.transformMat3=function(B,A,z){var w=A[0],C=A[1];
B[0]=z[0]*w+z[3]*C+z[6];B[1]=z[1]*w+z[4]*C+z[7];return B};q.transformMat4=function(B,A,z){var w=A[0],C=A[1];
B[0]=z[0]*w+z[4]*C+z[12];B[1]=z[1]*w+z[5]*C+z[13];return B};q.forEach=(function(){var w=q.create();
return function(z,D,E,C,B,x){var A,y;if(!D){D=2}if(!E){E=0}if(C){y=Math.min((C*D)+E,z.length)
}else{y=z.length}for(A=E;A<y;A+=D){w[0]=z[A];w[1]=z[A+1];B(w,w,x);z[A]=w[0];z[A+1]=w[1]
}return z}})();q.str=function(w){return"vec2("+w[0]+", "+w[1]+")"};if(typeof(n)!=="undefined"){n.vec2=q
}var p={};p.create=function(){var w=new h(3);w[0]=0;w[1]=0;w[2]=0;return w};p.clone=function(w){var x=new h(3);
x[0]=w[0];x[1]=w[1];x[2]=w[2];return x};p.fromValues=function(w,C,B){var A=new h(3);
A[0]=w;A[1]=C;A[2]=B;return A};p.copy=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=w[2];
return x};p.set=function(A,w,C,B){A[0]=w;A[1]=C;A[2]=B;return A};p.add=function(y,x,w){y[0]=x[0]+w[0];
y[1]=x[1]+w[1];y[2]=x[2]+w[2];return y};p.subtract=function(y,x,w){y[0]=x[0]-w[0];
y[1]=x[1]-w[1];y[2]=x[2]-w[2];return y};p.sub=p.subtract;p.multiply=function(y,x,w){y[0]=x[0]*w[0];
y[1]=x[1]*w[1];y[2]=x[2]*w[2];return y};p.mul=p.multiply;p.divide=function(y,x,w){y[0]=x[0]/w[0];
y[1]=x[1]/w[1];y[2]=x[2]/w[2];return y};p.div=p.divide;p.min=function(y,x,w){y[0]=Math.min(x[0],w[0]);
y[1]=Math.min(x[1],w[1]);y[2]=Math.min(x[2],w[2]);return y};p.max=function(y,x,w){y[0]=Math.max(x[0],w[0]);
y[1]=Math.max(x[1],w[1]);y[2]=Math.max(x[2],w[2]);return y};p.scale=function(y,x,w){y[0]=x[0]*w;
y[1]=x[1]*w;y[2]=x[2]*w;return y};p.distance=function(B,A){var w=A[0]-B[0],D=A[1]-B[1],C=A[2]-B[2];
return Math.sqrt(w*w+D*D+C*C)};p.dist=p.distance;p.squaredDistance=function(B,A){var w=A[0]-B[0],D=A[1]-B[1],C=A[2]-B[2];
return w*w+D*D+C*C};p.sqrDist=p.squaredDistance;p.length=function(A){var w=A[0],C=A[1],B=A[2];
return Math.sqrt(w*w+C*C+B*B)};p.len=p.length;p.squaredLength=function(A){var w=A[0],C=A[1],B=A[2];
return w*w+C*C+B*B};p.sqrLen=p.squaredLength;p.negate=function(x,w){x[0]=-w[0];
x[1]=-w[1];x[2]=-w[2];return x};p.normalize=function(C,B){var A=B[0],E=B[1],D=B[2];
var w=A*A+E*E+D*D;if(w>0){w=1/Math.sqrt(w);C[0]=B[0]*w;C[1]=B[1]*w;C[2]=B[2]*w}return C
};p.dot=function(x,w){return x[0]*w[0]+x[1]*w[1]+x[2]*w[2]};p.cross=function(x,C,B){var w=C[0],E=C[1],D=C[2],A=B[0],z=B[1],y=B[2];
x[0]=E*y-D*z;x[1]=D*A-w*y;x[2]=w*z-E*A;return x};p.lerp=function(y,x,w,z){var C=x[0],B=x[1],A=x[2];
y[0]=C+z*(w[0]-C);y[1]=B+z*(w[1]-B);y[2]=A+z*(w[2]-A);return y};p.transformMat4=function(C,B,A){var w=B[0],E=B[1],D=B[2];
C[0]=A[0]*w+A[4]*E+A[8]*D+A[12];C[1]=A[1]*w+A[5]*E+A[9]*D+A[13];C[2]=A[2]*w+A[6]*E+A[10]*D+A[14];
return C};p.transformQuat=function(F,L,w){var M=L[0],K=L[1],J=L[2],H=w[0],G=w[1],E=w[2],I=w[3],C=I*M+G*J-E*K,B=I*K+E*M-H*J,A=I*J+H*K-G*M,D=-H*M-G*K-E*J;
F[0]=C*I+D*-H+B*-E-A*-G;F[1]=B*I+D*-G+A*-H-C*-E;F[2]=A*I+D*-E+C*-G-B*-H;return F
};p.forEach=(function(){var w=p.create();return function(z,D,E,C,B,x){var A,y;if(!D){D=3
}if(!E){E=0}if(C){y=Math.min((C*D)+E,z.length)}else{y=z.length}for(A=E;A<y;A+=D){w[0]=z[A];
w[1]=z[A+1];w[2]=z[A+2];B(w,w,x);z[A]=w[0];z[A+1]=w[1];z[A+2]=w[2]}return z}})();
p.str=function(w){return"vec3("+w[0]+", "+w[1]+", "+w[2]+")"};if(typeof(n)!=="undefined"){n.vec3=p
}var o={};o.create=function(){var w=new h(4);w[0]=0;w[1]=0;w[2]=0;w[3]=0;return w
};o.clone=function(w){var x=new h(4);x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];return x
};o.fromValues=function(A,E,D,B){var C=new h(4);C[0]=A;C[1]=E;C[2]=D;C[3]=B;return C
};o.copy=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];return x};o.set=function(C,A,E,D,B){C[0]=A;
C[1]=E;C[2]=D;C[3]=B;return C};o.add=function(y,x,w){y[0]=x[0]+w[0];y[1]=x[1]+w[1];
y[2]=x[2]+w[2];y[3]=x[3]+w[3];return y};o.subtract=function(y,x,w){y[0]=x[0]-w[0];
y[1]=x[1]-w[1];y[2]=x[2]-w[2];y[3]=x[3]-w[3];return y};o.sub=o.subtract;o.multiply=function(y,x,w){y[0]=x[0]*w[0];
y[1]=x[1]*w[1];y[2]=x[2]*w[2];y[3]=x[3]*w[3];return y};o.mul=o.multiply;o.divide=function(y,x,w){y[0]=x[0]/w[0];
y[1]=x[1]/w[1];y[2]=x[2]/w[2];y[3]=x[3]/w[3];return y};o.div=o.divide;o.min=function(y,x,w){y[0]=Math.min(x[0],w[0]);
y[1]=Math.min(x[1],w[1]);y[2]=Math.min(x[2],w[2]);y[3]=Math.min(x[3],w[3]);return y
};o.max=function(y,x,w){y[0]=Math.max(x[0],w[0]);y[1]=Math.max(x[1],w[1]);y[2]=Math.max(x[2],w[2]);
y[3]=Math.max(x[3],w[3]);return y};o.scale=function(y,x,w){y[0]=x[0]*w;y[1]=x[1]*w;
y[2]=x[2]*w;y[3]=x[3]*w;return y};o.distance=function(D,B){var A=B[0]-D[0],F=B[1]-D[1],E=B[2]-D[2],C=B[3]-D[3];
return Math.sqrt(A*A+F*F+E*E+C*C)};o.dist=o.distance;o.squaredDistance=function(D,B){var A=B[0]-D[0],F=B[1]-D[1],E=B[2]-D[2],C=B[3]-D[3];
return A*A+F*F+E*E+C*C};o.sqrDist=o.squaredDistance;o.length=function(C){var A=C[0],E=C[1],D=C[2],B=C[3];
return Math.sqrt(A*A+E*E+D*D+B*B)};o.len=o.length;o.squaredLength=function(C){var A=C[0],E=C[1],D=C[2],B=C[3];
return A*A+E*E+D*D+B*B};o.sqrLen=o.squaredLength;o.negate=function(x,w){x[0]=-w[0];
x[1]=-w[1];x[2]=-w[2];x[3]=-w[3];return x};o.normalize=function(E,D){var B=D[0],G=D[1],F=D[2],C=D[3];
var A=B*B+G*G+F*F+C*C;if(A>0){A=1/Math.sqrt(A);E[0]=D[0]*A;E[1]=D[1]*A;E[2]=D[2]*A;
E[3]=D[3]*A}return E};o.dot=function(x,w){return x[0]*w[0]+x[1]*w[1]+x[2]*w[2]+x[3]*w[3]
};o.lerp=function(y,x,w,z){var C=x[0],B=x[1],A=x[2],D=x[3];y[0]=C+z*(w[0]-C);y[1]=B+z*(w[1]-B);
y[2]=A+z*(w[2]-A);y[3]=D+z*(w[3]-D);return y};o.transformMat4=function(E,D,B){var A=D[0],G=D[1],F=D[2],C=D[3];
E[0]=B[0]*A+B[4]*G+B[8]*F+B[12]*C;E[1]=B[1]*A+B[5]*G+B[9]*F+B[13]*C;E[2]=B[2]*A+B[6]*G+B[10]*F+B[14]*C;
E[3]=B[3]*A+B[7]*G+B[11]*F+B[15]*C;return E};o.transformQuat=function(F,L,w){var M=L[0],K=L[1],J=L[2],H=w[0],G=w[1],E=w[2],I=w[3],C=I*M+G*J-E*K,B=I*K+E*M-H*J,A=I*J+H*K-G*M,D=-H*M-G*K-E*J;
F[0]=C*I+D*-H+B*-E-A*-G;F[1]=B*I+D*-G+A*-H-C*-E;F[2]=A*I+D*-E+C*-G-B*-H;return F
};o.forEach=(function(){var w=o.create();return function(z,D,E,C,B,x){var A,y;if(!D){D=4
}if(!E){E=0}if(C){y=Math.min((C*D)+E,z.length)}else{y=z.length}for(A=E;A<y;A+=D){w[0]=z[A];
w[1]=z[A+1];w[2]=z[A+2];w[3]=z[A+3];B(w,w,x);z[A]=w[0];z[A+1]=w[1];z[A+2]=w[2];
z[A+3]=w[3]}return z}})();o.str=function(w){return"vec4("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+")"
};if(typeof(n)!=="undefined"){n.vec4=o}var j={};var t=new Float32Array([1,0,0,1]);
j.create=function(){var w=new h(4);w[0]=1;w[1]=0;w[2]=0;w[3]=1;return w};j.clone=function(w){var x=new h(4);
x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];return x};j.copy=function(x,w){x[0]=w[0];
x[1]=w[1];x[2]=w[2];x[3]=w[3];return x};j.identity=function(w){w[0]=1;w[1]=0;w[2]=0;
w[3]=1;return w};j.transpose=function(y,x){if(y===x){var w=x[1];y[1]=x[2];y[2]=w
}else{y[0]=x[0];y[1]=x[2];y[2]=x[1];y[3]=x[3]}return y};j.invert=function(A,y){var z=y[0],x=y[1],w=y[2],C=y[3],B=z*C-w*x;
if(!B){return null}B=1/B;A[0]=C*B;A[1]=-x*B;A[2]=-w*B;A[3]=z*B;return A};j.adjoint=function(y,w){var x=w[0];
y[0]=w[3];y[1]=-w[1];y[2]=-w[2];y[3]=x;return y};j.determinant=function(w){return w[0]*w[3]-w[2]*w[1]
};j.multiply=function(A,F,D){var z=F[0],y=F[1],x=F[2],w=F[3];var G=D[0],E=D[1],C=D[2],B=D[3];
A[0]=z*G+y*C;A[1]=z*E+y*B;A[2]=x*G+w*C;A[3]=x*E+w*B;return A};j.mul=j.multiply;
j.rotate=function(A,D,C){var z=D[0],y=D[1],x=D[2],w=D[3],E=Math.sin(C),B=Math.cos(C);
A[0]=z*B+y*E;A[1]=z*-E+y*B;A[2]=x*B+w*E;A[3]=x*-E+w*B;return A};j.scale=function(A,B,D){var z=B[0],y=B[1],x=B[2],w=B[3],E=D[0],C=D[1];
A[0]=z*E;A[1]=y*C;A[2]=x*E;A[3]=w*C;return A};j.str=function(w){return"mat2("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+")"
};if(typeof(n)!=="undefined"){n.mat2=j}var s={};var l=new Float32Array([1,0,0,1,0,0]);
s.create=function(){var w=new h(6);w[0]=1;w[1]=0;w[2]=0;w[3]=1;w[4]=0;w[5]=0;return w
};s.clone=function(w){var x=new h(6);x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];x[4]=w[4];
x[5]=w[5];return x};s.copy=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];
x[4]=w[4];x[5]=w[5];return x};s.identity=function(w){w[0]=1;w[1]=0;w[2]=0;w[3]=1;
w[4]=0;w[5]=0;return w};s.invert=function(x,B){var w=B[0],E=B[1],D=B[2],C=B[3],z=B[4],y=B[5];
var A=w*C-E*D;if(!A){return null}A=1/A;x[0]=C*A;x[1]=-E*A;x[2]=-D*A;x[3]=w*A;x[4]=(D*y-C*z)*A;
x[5]=(E*z-w*y)*A;return x};s.determinant=function(w){return w[0]*w[3]-w[1]*w[2]
};s.multiply=function(x,H,G){var w=H[0],K=H[1],J=H[2],I=H[3],z=H[4],y=H[5],E=G[0],C=G[1],B=G[2],A=G[3],F=G[4],D=G[5];
x[0]=w*E+K*B;x[1]=w*C+K*A;x[2]=J*E+I*B;x[3]=J*C+I*A;x[4]=E*z+B*y+F;x[5]=C*z+A*y+D;
return x};s.mul=s.multiply;s.rotate=function(x,C,B){var w=C[0],G=C[1],F=C[2],D=C[3],A=C[4],y=C[5],E=Math.sin(B),z=Math.cos(B);
x[0]=w*z+G*E;x[1]=-w*E+G*z;x[2]=F*z+D*E;x[3]=-F*E+z*D;x[4]=z*A+E*y;x[5]=z*y-E*A;
return x};s.scale=function(y,w,x){var A=x[0],z=x[1];y[0]=w[0]*A;y[1]=w[1]*z;y[2]=w[2]*A;
y[3]=w[3]*z;y[4]=w[4]*A;y[5]=w[5]*z;return y};s.translate=function(y,w,x){y[0]=w[0];
y[1]=w[1];y[2]=w[2];y[3]=w[3];y[4]=w[4]+x[0];y[5]=w[5]+x[1];return y};s.str=function(w){return"mat2d("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+", "+w[4]+", "+w[5]+")"
};if(typeof(n)!=="undefined"){n.mat2d=s}var g={};var m=new Float32Array([1,0,0,0,1,0,0,0,1]);
g.create=function(){var w=new h(9);w[0]=1;w[1]=0;w[2]=0;w[3]=0;w[4]=1;w[5]=0;w[6]=0;
w[7]=0;w[8]=1;return w};g.clone=function(w){var x=new h(9);x[0]=w[0];x[1]=w[1];
x[2]=w[2];x[3]=w[3];x[4]=w[4];x[5]=w[5];x[6]=w[6];x[7]=w[7];x[8]=w[8];return x};
g.copy=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];x[4]=w[4];x[5]=w[5];
x[6]=w[6];x[7]=w[7];x[8]=w[8];return x};g.identity=function(w){w[0]=1;w[1]=0;w[2]=0;
w[3]=0;w[4]=1;w[5]=0;w[6]=0;w[7]=0;w[8]=1;return w};g.transpose=function(y,x){if(y===x){var A=x[1],z=x[2],w=x[5];
y[1]=x[3];y[2]=x[6];y[3]=A;y[5]=x[7];y[6]=z;y[7]=w}else{y[0]=x[0];y[1]=x[3];y[2]=x[6];
y[3]=x[1];y[4]=x[4];y[5]=x[7];y[6]=x[2];y[7]=x[5];y[8]=x[8]}return y};g.invert=function(A,H){var z=H[0],y=H[1],x=H[2],K=H[3],J=H[4],I=H[5],F=H[6],E=H[7],C=H[8],B=C*J-I*E,w=-C*K+I*F,G=E*K-J*F,D=z*B+y*w+x*G;
if(!D){return null}D=1/D;A[0]=B*D;A[1]=(-C*y+x*E)*D;A[2]=(I*y-x*J)*D;A[3]=w*D;A[4]=(C*z-x*F)*D;
A[5]=(-I*z+x*K)*D;A[6]=G*D;A[7]=(-E*z+y*F)*D;A[8]=(J*z-y*K)*D;return A};g.adjoint=function(z,D){var y=D[0],x=D[1],w=D[2],G=D[3],F=D[4],E=D[5],C=D[6],B=D[7],A=D[8];
z[0]=(F*A-E*B);z[1]=(w*B-x*A);z[2]=(x*E-w*F);z[3]=(E*C-G*A);z[4]=(y*A-w*C);z[5]=(w*G-y*E);
z[6]=(G*B-F*C);z[7]=(x*C-y*B);z[8]=(y*F-x*G);return z};g.determinant=function(C){var y=C[0],x=C[1],w=C[2],F=C[3],E=C[4],D=C[5],B=C[6],A=C[7],z=C[8];
return y*(z*E-D*A)+x*(-z*F+D*B)+w*(A*F-E*B)};g.multiply=function(I,N,M){var Q=N[0],P=N[1],O=N[2],B=N[3],A=N[4],z=N[5],H=N[6],G=N[7],F=N[8],E=M[0],D=M[1],C=M[2],L=M[3],K=M[4],J=M[5],y=M[6],x=M[7],w=M[8];
I[0]=E*Q+D*B+C*H;I[1]=E*P+D*A+C*G;I[2]=E*O+D*z+C*F;I[3]=L*Q+K*B+J*H;I[4]=L*P+K*A+J*G;
I[5]=L*O+K*z+J*F;I[6]=y*Q+x*B+w*H;I[7]=y*P+x*A+w*G;I[8]=y*O+x*z+w*F;return I};g.mul=g.multiply;
g.translate=function(B,H,J){var A=H[0],z=H[1],w=H[2],L=H[3],K=H[4],I=H[5],E=H[6],D=H[7],C=H[8],G=J[0],F=J[1];
B[0]=A;B[1]=z;B[2]=w;B[3]=L;B[4]=K;B[5]=I;B[6]=G*A+F*L+E;B[7]=G*z+F*K+D;B[8]=G*w+F*I+C;
return B};g.rotate=function(z,F,E){var y=F[0],x=F[1],w=F[2],I=F[3],H=F[4],G=F[5],C=F[6],B=F[7],A=F[8],J=Math.sin(E),D=Math.cos(E);
z[0]=D*y+J*I;z[1]=D*x+J*H;z[2]=D*w+J*G;z[3]=D*I-J*y;z[4]=D*H-J*x;z[5]=D*G-J*w;z[6]=C;
z[7]=B;z[8]=A;return z};g.scale=function(B,z,A){var w=A[0],C=A[2];B[0]=w*z[0];B[1]=w*z[1];
B[2]=w*z[2];B[3]=C*z[3];B[4]=C*z[4];B[5]=C*z[5];B[6]=z[6];B[7]=z[7];B[8]=z[8];return B
};g.fromMat2d=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=0;x[3]=w[2];x[4]=w[3];x[5]=0;
x[6]=w[4];x[7]=w[5];x[8]=1;return x};g.fromQuat=function(M,K){var G=K[0],F=K[1],E=K[2],H=K[3],N=G+G,A=F+F,I=E+E,D=G*N,C=G*A,B=G*I,L=F*A,J=F*I,Q=E*I,R=H*N,P=H*A,O=H*I;
M[0]=1-(L+Q);M[1]=C+O;M[2]=B-P;M[3]=C-O;M[4]=1-(D+Q);M[5]=J+R;M[6]=B+P;M[7]=J-R;
M[8]=1-(D+L);return M};g.str=function(w){return"mat3("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+", "+w[4]+", "+w[5]+", "+w[6]+", "+w[7]+", "+w[8]+")"
};if(typeof(n)!=="undefined"){n.mat3=g}var f={};var r=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
f.create=function(){var w=new h(16);w[0]=1;w[1]=0;w[2]=0;w[3]=0;w[4]=0;w[5]=1;w[6]=0;
w[7]=0;w[8]=0;w[9]=0;w[10]=1;w[11]=0;w[12]=0;w[13]=0;w[14]=0;w[15]=1;return w};
f.clone=function(w){var x=new h(16);x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];x[4]=w[4];
x[5]=w[5];x[6]=w[6];x[7]=w[7];x[8]=w[8];x[9]=w[9];x[10]=w[10];x[11]=w[11];x[12]=w[12];
x[13]=w[13];x[14]=w[14];x[15]=w[15];return x};f.copy=function(x,w){x[0]=w[0];x[1]=w[1];
x[2]=w[2];x[3]=w[3];x[4]=w[4];x[5]=w[5];x[6]=w[6];x[7]=w[7];x[8]=w[8];x[9]=w[9];
x[10]=w[10];x[11]=w[11];x[12]=w[12];x[13]=w[13];x[14]=w[14];x[15]=w[15];return x
};f.identity=function(w){w[0]=1;w[1]=0;w[2]=0;w[3]=0;w[4]=0;w[5]=1;w[6]=0;w[7]=0;
w[8]=0;w[9]=0;w[10]=1;w[11]=0;w[12]=0;w[13]=0;w[14]=0;w[15]=1;return w};f.transpose=function(z,y){if(z===y){var D=y[1],B=y[2],A=y[3],w=y[6],C=y[7],x=y[11];
z[1]=y[4];z[2]=y[8];z[3]=y[12];z[4]=D;z[6]=y[9];z[7]=y[13];z[8]=B;z[9]=w;z[11]=y[14];
z[12]=A;z[13]=C;z[14]=x}else{z[0]=y[0];z[1]=y[4];z[2]=y[8];z[3]=y[12];z[4]=y[1];
z[5]=y[5];z[6]=y[9];z[7]=y[13];z[8]=y[2];z[9]=y[6];z[10]=y[10];z[11]=y[14];z[12]=y[3];
z[13]=y[7];z[14]=y[11];z[15]=y[15]}return z};f.invert=function(P,U){var Y=U[0],W=U[1],V=U[2],S=U[3],A=U[4],z=U[5],y=U[6],x=U[7],O=U[8],N=U[9],M=U[10],L=U[11],aa=U[12],Z=U[13],X=U[14],T=U[15],K=Y*z-W*A,J=Y*y-V*A,I=Y*x-S*A,H=W*y-V*z,G=W*x-S*z,F=V*x-S*y,E=O*Z-N*aa,D=O*X-M*aa,C=O*T-L*aa,B=N*X-M*Z,R=N*T-L*Z,Q=M*T-L*X,w=K*Q-J*R+I*B+H*C-G*D+F*E;
if(!w){return null}w=1/w;P[0]=(z*Q-y*R+x*B)*w;P[1]=(V*R-W*Q-S*B)*w;P[2]=(Z*F-X*G+T*H)*w;
P[3]=(M*G-N*F-L*H)*w;P[4]=(y*C-A*Q-x*D)*w;P[5]=(Y*Q-V*C+S*D)*w;P[6]=(X*I-aa*F-T*J)*w;
P[7]=(O*F-M*I+L*J)*w;P[8]=(A*R-z*C+x*E)*w;P[9]=(W*C-Y*R-S*E)*w;P[10]=(aa*G-Z*I+T*K)*w;
P[11]=(N*I-O*G-L*K)*w;P[12]=(z*D-A*B-y*E)*w;P[13]=(Y*B-W*D+V*E)*w;P[14]=(Z*J-aa*H-X*K)*w;
P[15]=(O*H-N*J+M*K)*w;return P};f.adjoint=function(E,H){var L=H[0],J=H[1],I=H[2],F=H[3],z=H[4],y=H[5],x=H[6],w=H[7],D=H[8],C=H[9],B=H[10],A=H[11],N=H[12],M=H[13],K=H[14],G=H[15];
E[0]=(y*(B*G-A*K)-C*(x*G-w*K)+M*(x*A-w*B));E[1]=-(J*(B*G-A*K)-C*(I*G-F*K)+M*(I*A-F*B));
E[2]=(J*(x*G-w*K)-y*(I*G-F*K)+M*(I*w-F*x));E[3]=-(J*(x*A-w*B)-y*(I*A-F*B)+C*(I*w-F*x));
E[4]=-(z*(B*G-A*K)-D*(x*G-w*K)+N*(x*A-w*B));E[5]=(L*(B*G-A*K)-D*(I*G-F*K)+N*(I*A-F*B));
E[6]=-(L*(x*G-w*K)-z*(I*G-F*K)+N*(I*w-F*x));E[7]=(L*(x*A-w*B)-z*(I*A-F*B)+D*(I*w-F*x));
E[8]=(z*(C*G-A*M)-D*(y*G-w*M)+N*(y*A-w*C));E[9]=-(L*(C*G-A*M)-D*(J*G-F*M)+N*(J*A-F*C));
E[10]=(L*(y*G-w*M)-z*(J*G-F*M)+N*(J*w-F*y));E[11]=-(L*(y*A-w*C)-z*(J*A-F*C)+D*(J*w-F*y));
E[12]=-(z*(C*K-B*M)-D*(y*K-x*M)+N*(y*B-x*C));E[13]=(L*(C*K-B*M)-D*(J*K-I*M)+N*(J*B-I*C));
E[14]=-(L*(y*K-x*M)-z*(J*K-I*M)+N*(J*x-I*y));E[15]=(L*(y*B-x*C)-z*(J*B-I*C)+D*(J*x-I*y));
return E};f.determinant=function(R){var W=R[0],U=R[1],S=R[2],Q=R[3],z=R[4],y=R[5],x=R[6],w=R[7],N=R[8],M=R[9],L=R[10],K=R[11],Y=R[12],X=R[13],V=R[14],T=R[15],J=W*y-U*z,I=W*x-S*z,H=W*w-Q*z,G=U*x-S*y,F=U*w-Q*y,E=S*w-Q*x,D=N*X-M*Y,C=N*V-L*Y,B=N*T-K*Y,A=M*V-L*X,P=M*T-K*X,O=L*T-K*V;
return J*O-I*P+H*A+G*B-F*C+E*D};f.multiply=function(I,M,J){var Q=M[0],P=M[1],N=M[2],K=M[3],C=M[4],A=M[5],y=M[6],w=M[7],H=M[8],G=M[9],F=M[10],E=M[11],S=M[12],R=M[13],O=M[14],L=M[15];
var D=J[0],B=J[1],z=J[2],x=J[3];I[0]=D*Q+B*C+z*H+x*S;I[1]=D*P+B*A+z*G+x*R;I[2]=D*N+B*y+z*F+x*O;
I[3]=D*K+B*w+z*E+x*L;D=J[4];B=J[5];z=J[6];x=J[7];I[4]=D*Q+B*C+z*H+x*S;I[5]=D*P+B*A+z*G+x*R;
I[6]=D*N+B*y+z*F+x*O;I[7]=D*K+B*w+z*E+x*L;D=J[8];B=J[9];z=J[10];x=J[11];I[8]=D*Q+B*C+z*H+x*S;
I[9]=D*P+B*A+z*G+x*R;I[10]=D*N+B*y+z*F+x*O;I[11]=D*K+B*w+z*E+x*L;D=J[12];B=J[13];
z=J[14];x=J[15];I[12]=D*Q+B*C+z*H+x*S;I[13]=D*P+B*A+z*G+x*R;I[14]=D*N+B*y+z*F+x*O;
I[15]=D*K+B*w+z*E+x*L;return I};f.mul=f.multiply;f.translate=function(L,N,G){var F=G[0],E=G[1],D=G[2],Q,P,O,M,C,B,A,w,K,J,I,H;
if(N===L){L[12]=N[0]*F+N[4]*E+N[8]*D+N[12];L[13]=N[1]*F+N[5]*E+N[9]*D+N[13];L[14]=N[2]*F+N[6]*E+N[10]*D+N[14];
L[15]=N[3]*F+N[7]*E+N[11]*D+N[15]}else{Q=N[0];P=N[1];O=N[2];M=N[3];C=N[4];B=N[5];
A=N[6];w=N[7];K=N[8];J=N[9];I=N[10];H=N[11];L[0]=Q;L[1]=P;L[2]=O;L[3]=M;L[4]=C;
L[5]=B;L[6]=A;L[7]=w;L[8]=K;L[9]=J;L[10]=I;L[11]=H;L[12]=Q*F+C*E+K*D+N[12];L[13]=P*F+B*E+J*D+N[13];
L[14]=O*F+A*E+I*D+N[14];L[15]=M*F+w*E+H*D+N[15]}return L};f.scale=function(C,A,B){var w=B[0],E=B[1],D=B[2];
C[0]=A[0]*w;C[1]=A[1]*w;C[2]=A[2]*w;C[3]=A[3]*w;C[4]=A[4]*E;C[5]=A[5]*E;C[6]=A[6]*E;
C[7]=A[7]*E;C[8]=A[8]*D;C[9]=A[9]*D;C[10]=A[10]*D;C[11]=A[11]*D;C[12]=A[12];C[13]=A[13];
C[14]=A[14];C[15]=A[15];return C};f.rotate=function(T,aa,ac,w){var J=w[0],I=w[1],H=w[2],U=Math.sqrt(J*J+I*I+H*H),O,Y,N,ae,ad,ab,Z,G,F,E,D,S,R,Q,P,M,L,K,X,W,V,C,B,A;
if(Math.abs(U)<u){return null}U=1/U;J*=U;I*=U;H*=U;O=Math.sin(ac);Y=Math.cos(ac);
N=1-Y;ae=aa[0];ad=aa[1];ab=aa[2];Z=aa[3];G=aa[4];F=aa[5];E=aa[6];D=aa[7];S=aa[8];
R=aa[9];Q=aa[10];P=aa[11];M=J*J*N+Y;L=I*J*N+H*O;K=H*J*N-I*O;X=J*I*N-H*O;W=I*I*N+Y;
V=H*I*N+J*O;C=J*H*N+I*O;B=I*H*N-J*O;A=H*H*N+Y;T[0]=ae*M+G*L+S*K;T[1]=ad*M+F*L+R*K;
T[2]=ab*M+E*L+Q*K;T[3]=Z*M+D*L+P*K;T[4]=ae*X+G*W+S*V;T[5]=ad*X+F*W+R*V;T[6]=ab*X+E*W+Q*V;
T[7]=Z*X+D*W+P*V;T[8]=ae*C+G*B+S*A;T[9]=ad*C+F*B+R*A;T[10]=ab*C+E*B+Q*A;T[11]=Z*C+D*B+P*A;
if(aa!==T){T[12]=aa[12];T[13]=aa[13];T[14]=aa[14];T[15]=aa[15]}return T};f.rotateX=function(w,D,C){var I=Math.sin(C),B=Math.cos(C),H=D[4],G=D[5],F=D[6],E=D[7],A=D[8],z=D[9],y=D[10],x=D[11];
if(D!==w){w[0]=D[0];w[1]=D[1];w[2]=D[2];w[3]=D[3];w[12]=D[12];w[13]=D[13];w[14]=D[14];
w[15]=D[15]}w[4]=H*B+A*I;w[5]=G*B+z*I;w[6]=F*B+y*I;w[7]=E*B+x*I;w[8]=A*B-H*I;w[9]=z*B-G*I;
w[10]=y*B-F*I;w[11]=x*B-E*I;return w};f.rotateY=function(A,H,G){var I=Math.sin(G),F=Math.cos(G),z=H[0],y=H[1],x=H[2],w=H[3],E=H[8],D=H[9],C=H[10],B=H[11];
if(H!==A){A[4]=H[4];A[5]=H[5];A[6]=H[6];A[7]=H[7];A[12]=H[12];A[13]=H[13];A[14]=H[14];
A[15]=H[15]}A[0]=z*F-E*I;A[1]=y*F-D*I;A[2]=x*F-C*I;A[3]=w*F-B*I;A[8]=z*I+E*F;A[9]=y*I+D*F;
A[10]=x*I+C*F;A[11]=w*I+B*F;return A};f.rotateZ=function(A,D,C){var I=Math.sin(C),B=Math.cos(C),z=D[0],y=D[1],x=D[2],w=D[3],H=D[4],G=D[5],F=D[6],E=D[7];
if(D!==A){A[8]=D[8];A[9]=D[9];A[10]=D[10];A[11]=D[11];A[12]=D[12];A[13]=D[13];A[14]=D[14];
A[15]=D[15]}A[0]=z*B+H*I;A[1]=y*B+G*I;A[2]=x*B+F*I;A[3]=w*B+E*I;A[4]=H*B-z*I;A[5]=G*B-y*I;
A[6]=F*B-x*I;A[7]=E*B-w*I;return A};f.fromRotationTranslation=function(N,L,J){var G=L[0],F=L[1],E=L[2],H=L[3],O=G+G,A=F+F,I=E+E,D=G*O,C=G*A,B=G*I,M=F*A,K=F*I,R=E*I,S=H*O,Q=H*A,P=H*I;
N[0]=1-(M+R);N[1]=C+P;N[2]=B-Q;N[3]=0;N[4]=C-P;N[5]=1-(D+R);N[6]=K+S;N[7]=0;N[8]=B+Q;
N[9]=K-S;N[10]=1-(D+M);N[11]=0;N[12]=J[0];N[13]=J[1];N[14]=J[2];N[15]=1;return N
};f.fromQuat=function(M,K){var G=K[0],F=K[1],E=K[2],H=K[3],N=G+G,A=F+F,I=E+E,D=G*N,C=G*A,B=G*I,L=F*A,J=F*I,Q=E*I,R=H*N,P=H*A,O=H*I;
M[0]=1-(L+Q);M[1]=C+O;M[2]=B-P;M[3]=0;M[4]=C-O;M[5]=1-(D+Q);M[6]=J+R;M[7]=0;M[8]=B+P;
M[9]=J-R;M[10]=1-(D+L);M[11]=0;M[12]=0;M[13]=0;M[14]=0;M[15]=1;return M};f.frustum=function(A,x,F,w,E,C,B){var D=1/(F-x),z=1/(E-w),y=1/(C-B);
A[0]=(C*2)*D;A[1]=0;A[2]=0;A[3]=0;A[4]=0;A[5]=(C*2)*z;A[6]=0;A[7]=0;A[8]=(F+x)*D;
A[9]=(E+w)*z;A[10]=(B+C)*y;A[11]=-1;A[12]=0;A[13]=0;A[14]=(B*C*2)*y;A[15]=0;return A
};f.perspective=function(z,y,x,A,w){var C=1/Math.tan(y/2),B=1/(A-w);z[0]=C/x;z[1]=0;
z[2]=0;z[3]=0;z[4]=0;z[5]=C;z[6]=0;z[7]=0;z[8]=0;z[9]=0;z[10]=(w+A)*B;z[11]=-1;
z[12]=0;z[13]=0;z[14]=(2*w*A)*B;z[15]=0;return z};f.ortho=function(z,x,F,w,D,C,B){var A=1/(x-F),E=1/(w-D),y=1/(C-B);
z[0]=-2*A;z[1]=0;z[2]=0;z[3]=0;z[4]=0;z[5]=-2*E;z[6]=0;z[7]=0;z[8]=0;z[9]=0;z[10]=2*y;
z[11]=0;z[12]=(x+F)*A;z[13]=(D+w)*E;z[14]=(B+C)*y;z[15]=1;return z};f.lookAt=function(K,R,S,C){var Q,P,N,y,x,w,F,E,D,L,O=R[0],M=R[1],J=R[2],B=C[0],A=C[1],z=C[2],I=S[0],H=S[1],G=S[2];
if(Math.abs(O-I)<u&&Math.abs(M-H)<u&&Math.abs(J-G)<u){return f.identity(K)}F=O-I;
E=M-H;D=J-G;L=1/Math.sqrt(F*F+E*E+D*D);F*=L;E*=L;D*=L;Q=A*D-z*E;P=z*F-B*D;N=B*E-A*F;
L=Math.sqrt(Q*Q+P*P+N*N);if(!L){Q=0;P=0;N=0}else{L=1/L;Q*=L;P*=L;N*=L}y=E*N-D*P;
x=D*Q-F*N;w=F*P-E*Q;L=Math.sqrt(y*y+x*x+w*w);if(!L){y=0;x=0;w=0}else{L=1/L;y*=L;
x*=L;w*=L}K[0]=Q;K[1]=y;K[2]=F;K[3]=0;K[4]=P;K[5]=x;K[6]=E;K[7]=0;K[8]=N;K[9]=w;
K[10]=D;K[11]=0;K[12]=-(Q*O+P*M+N*J);K[13]=-(y*O+x*M+w*J);K[14]=-(F*O+E*M+D*J);
K[15]=1;return K};f.str=function(w){return"mat4("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+", "+w[4]+", "+w[5]+", "+w[6]+", "+w[7]+", "+w[8]+", "+w[9]+", "+w[10]+", "+w[11]+", "+w[12]+", "+w[13]+", "+w[14]+", "+w[15]+")"
};if(typeof(n)!=="undefined"){n.mat4=f}var k={};var v=new Float32Array([0,0,0,1]);
k.create=function(){var w=new h(4);w[0]=0;w[1]=0;w[2]=0;w[3]=1;return w};k.clone=o.clone;
k.fromValues=o.fromValues;k.copy=o.copy;k.set=o.set;k.identity=function(w){w[0]=0;
w[1]=0;w[2]=0;w[3]=1;return w};k.setAxisAngle=function(x,z,w){w=w*0.5;var y=Math.sin(w);
x[0]=y*z[0];x[1]=y*z[1];x[2]=y*z[2];x[3]=Math.cos(w);return x};k.add=o.add;k.multiply=function(y,E,D){var w=E[0],G=E[1],F=E[2],x=E[3],B=D[0],A=D[1],z=D[2],C=D[3];
y[0]=w*C+x*B+G*z-F*A;y[1]=G*C+x*A+F*B-w*z;y[2]=F*C+x*z+w*A-G*B;y[3]=x*C-w*B-G*A-F*z;
return y};k.mul=k.multiply;k.scale=o.scale;k.rotateX=function(y,C,A){A*=0.5;var w=C[0],E=C[1],D=C[2],x=C[3],z=Math.sin(A),B=Math.cos(A);
y[0]=w*B+x*z;y[1]=E*B+D*z;y[2]=D*B-E*z;y[3]=x*B-w*z;return y};k.rotateY=function(y,C,A){A*=0.5;
var w=C[0],E=C[1],D=C[2],x=C[3],z=Math.sin(A),B=Math.cos(A);y[0]=w*B-D*z;y[1]=E*B+x*z;
y[2]=D*B+w*z;y[3]=x*B-E*z;return y};k.rotateZ=function(y,C,A){A*=0.5;var w=C[0],E=C[1],D=C[2],x=C[3],z=Math.sin(A),B=Math.cos(A);
y[0]=w*B+E*z;y[1]=E*B-w*z;y[2]=D*B+x*z;y[3]=x*B-D*z;return y};k.calculateW=function(B,A){var w=A[0],D=A[1],C=A[2];
B[0]=w;B[1]=D;B[2]=C;B[3]=-Math.sqrt(Math.abs(1-w*w-D*D-C*C));return B};k.dot=o.dot;
k.lerp=o.lerp;k.slerp=function(A,J,I,L){var w=J[0],M=J[1],K=J[2],x=J[3],G=I[0],F=I[1],D=I[2],H=I[3];
var z=w*G+M*F+K*D+x*H,B,y,E,C;if(Math.abs(z)>=1){if(A!==J){A[0]=w;A[1]=M;A[2]=K;
A[3]=x}return A}B=Math.acos(z);y=Math.sqrt(1-z*z);if(Math.abs(y)<0.001){A[0]=(w*0.5+G*0.5);
A[1]=(M*0.5+F*0.5);A[2]=(K*0.5+D*0.5);A[3]=(x*0.5+H*0.5);return A}E=Math.sin((1-L)*B)/y;
C=Math.sin(L*B)/y;A[0]=(w*E+G*C);A[1]=(M*E+F*C);A[2]=(K*E+D*C);A[3]=(x*E+H*C);return A
};k.invert=function(C,y){var A=y[0],x=y[1],w=y[2],D=y[3],z=A*A+x*x+w*w+D*D,B=z?1/z:0;
C[0]=-A*B;C[1]=-x*B;C[2]=-w*B;C[3]=D*B;return C};k.conjugate=function(x,w){x[0]=-w[0];
x[1]=-w[1];x[2]=-w[2];x[3]=w[3];return x};k.length=o.length;k.len=k.length;k.squaredLength=o.squaredLength;
k.sqrLen=k.squaredLength;k.normalize=o.normalize;k.fromMat3=(function(){var w=[1,2,0];
return function(B,x){var y=x[0]+x[4]+x[8];var D;if(y>0){D=Math.sqrt(y+1);B[3]=0.5*D;
D=0.5/D;B[0]=(x[7]-x[5])*D;B[1]=(x[2]-x[6])*D;B[2]=(x[3]-x[1])*D}else{var C=0;if(x[4]>x[0]){C=1
}if(x[8]>x[C*3+C]){C=2}var A=w[C];var z=w[A];D=Math.sqrt(x[C*3+C]-x[A*3+A]-x[z*3+z]+1);
B[C]=0.5*D;D=0.5/D;B[3]=(x[z*3+A]-x[A*3+z])*D;B[A]=(x[A*3+C]+x[C*3+A])*D;B[z]=(x[z*3+C]+x[C*3+z])*D
}return B}})();k.str=function(w){return"quat("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+")"
};if(typeof(n)!=="undefined"){n.quat=k}})(d.exports)})()},{}],1114:[function(b,c,a){c.exports={Transform:b("./ac-transform/Transform")}
},{"./ac-transform/Transform":1115}],1115:[function(m,d,I){var l=m("gl-matrix").mat4;
var b=m("gl-matrix").vec3;var a=m("gl-matrix").vec4;var f=m("gl-matrix").quat;var g=Math.PI/180;
var c=180/Math.PI;var G=0,z=0,E=1,y=1,C=2,A=3;var k=4,x=4,j=5,w=5,i=6,h=7;var u=8,r=9,p=10,o=11;
var H=12,v=12,F=13,t=13,D=14,B=15;function q(){this.m=l.create()}var s=q.prototype;
s.rotateX=function(K){var J=g*K;l.rotateX(this.m,this.m,J);return this};s.rotateY=function(K){var J=g*K;
l.rotateY(this.m,this.m,J);return this};s.rotateZ=function(K){var J=g*K;l.rotateZ(this.m,this.m,J);
return this};s.rotate=s.rotateZ;s.rotate3d=function(K,N,M,L){if(N===null||N===undefined){N=K
}if(M===null||N===undefined){M=K}var J=g*L;l.rotate(this.m,this.m,J,[K,N,M]);return this
};s.rotateAxisAngle=s.rotate3d;s.scale=function(K,J){J=J||K;l.scale(this.m,this.m,[K,J,1]);
return this};s.scaleX=function(J){l.scale(this.m,this.m,[J,1,1]);return this};s.scaleY=function(J){l.scale(this.m,this.m,[1,J,1]);
return this};s.scaleZ=function(J){l.scale(this.m,this.m,[1,1,J]);return this};s.scale3d=function(L,K,J){l.scale(this.m,this.m,[L,K,J]);
return this};s.skew=function(L,K){if(K===null||K===undefined){return this.skewX(L)
}L=g*L;K=g*K;var J=l.create();J[x]=Math.tan(L);J[y]=Math.tan(K);l.multiply(this.m,this.m,J);
return this};s.skewX=function(K){K=g*K;var J=l.create();J[x]=Math.tan(K);l.multiply(this.m,this.m,J);
return this};s.skewY=function(K){K=g*K;var J=l.create();J[y]=Math.tan(K);l.multiply(this.m,this.m,J);
return this};s.translate=function(K,J){J=J||0;l.translate(this.m,this.m,[K,J,0]);
return this};s.translate3d=function(K,J,L){l.translate(this.m,this.m,[K,J,L]);return this
};s.translateX=function(J){l.translate(this.m,this.m,[J,0,0]);return this};s.translateY=function(J){l.translate(this.m,this.m,[0,J,0]);
return this};s.translateZ=function(J){l.translate(this.m,this.m,[0,0,J]);return this
};s.perspective=function(K){var J=l.create();if(K!==0){J[o]=-1/K}l.multiply(this.m,this.m,J)
};s.inverse=function(){var J=this.clone();J.m=l.invert(J.m,this.m);return J};s.reset=function(){l.identity(this.m);
return this};s.clone=function(){var J=new q();J.m=l.clone(this.m);return J};s.toArray=function(){var J=this.m;
if(this.isAffine()){return[J[z],J[y],J[x],J[w],J[v],J[t]]}return[J[G],J[E],J[C],J[A],J[k],J[j],J[i],J[h],J[u],J[r],J[p],J[o],J[H],J[F],J[D],J[B]]
};s.fromArray=function(J){this.m=Array.prototype.slice.call(J);return this};s.setMatrixValue=function(K){K=String(K).trim();
var J=l.create();if(K==="none"){this.m=J;return this}var M=K.slice(0,K.indexOf("(")),N,L;
if(M==="matrix3d"){N=K.slice(9,-1).split(",");for(L=0;L<N.length;L++){J[L]=parseFloat(N[L])
}}else{if(M==="matrix"){N=K.slice(7,-1).split(",");for(L=N.length;L--;){N[L]=parseFloat(N[L])
}J[G]=N[0];J[E]=N[1];J[H]=N[4];J[k]=N[2];J[j]=N[3];J[F]=N[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=J;return this};s.decompose=function(U){U=U||false;var Y=l.clone(this.m);
var P=b.create();var ae=b.create();var M=b.create();var R=a.create();var K=a.create();
var L=b.create();for(var aa=0;aa<16;aa++){Y[aa]/=Y[B]}var W=l.clone(Y);W[A]=0;W[h]=0;
W[o]=0;W[B]=1;var ab=Y[3],N=Y[7],Q=Y[11],ag=Y[12],af=Y[13],ad=Y[14],ac=Y[15];var T=a.create();
if(!n(Y[A])||!n(Y[h])||!n(Y[o])){T[0]=Y[A];T[1]=Y[h];T[2]=Y[o];T[3]=Y[B];var Z=l.invert(l.create(),W);
var S=l.transpose(l.create(),Z);R=a.transformMat4(R,T,S)}else{R=a.fromValues(0,0,0,1)
}P[0]=ag;P[1]=af;P[2]=ad;var O=[b.create(),b.create(),b.create()];O[0][0]=Y[0];
O[0][1]=Y[1];O[0][2]=Y[2];O[1][0]=Y[4];O[1][1]=Y[5];O[1][2]=Y[6];O[2][0]=Y[8];O[2][1]=Y[9];
O[2][2]=Y[10];ae[0]=b.length(O[0]);b.normalize(O[0],O[0]);M[0]=b.dot(O[0],O[1]);
O[1]=this._combine(O[1],O[0],1,-M[0]);ae[1]=b.length(O[1]);b.normalize(O[1],O[1]);
M[0]/=ae[1];M[1]=b.dot(O[0],O[2]);O[2]=this._combine(O[2],O[0],1,-M[1]);M[2]=b.dot(O[1],O[2]);
O[2]=this._combine(O[2],O[1],1,-M[2]);ae[2]=b.length(O[2]);b.normalize(O[2],O[2]);
M[1]/=ae[2];M[2]/=ae[2];var X=b.cross(b.create(),O[1],O[2]);if(b.dot(O[0],X)<0){for(aa=0;
aa<3;aa++){ae[aa]*=-1;O[aa][0]*=-1;O[aa][1]*=-1;O[aa][2]*=-1}}K[0]=0.5*Math.sqrt(Math.max(1+O[0][0]-O[1][1]-O[2][2],0));
K[1]=0.5*Math.sqrt(Math.max(1-O[0][0]+O[1][1]-O[2][2],0));K[2]=0.5*Math.sqrt(Math.max(1-O[0][0]-O[1][1]+O[2][2],0));
K[3]=0.5*Math.sqrt(Math.max(1+O[0][0]+O[1][1]+O[2][2],0));if(O[2][1]>O[1][2]){K[0]=-K[0]
}if(O[0][2]>O[2][0]){K[1]=-K[1]}if(O[1][0]>O[0][1]){K[2]=-K[2]}var J=a.fromValues(K[0],K[1],K[2],2*Math.acos(K[3]));
var V=this._rotationFromQuat(K);if(U){M[0]=Math.round(M[0]*c*100)/100;M[1]=Math.round(M[1]*c*100)/100;
M[2]=Math.round(M[2]*c*100)/100;V[0]=Math.round(V[0]*c*100)/100;V[1]=Math.round(V[1]*c*100)/100;
V[2]=Math.round(V[2]*c*100)/100;J[3]=Math.round(J[3]*c*100)/100}return{translation:P,scale:ae,skew:M,perspective:R,quaternion:K,eulerRotation:V,axisAngle:J}
};s.recompose=function(P,O,L,M,N){P=P||b.create();O=O||b.create();L=L||b.create();
M=M||a.create();N=N||a.create();var K=l.fromRotationTranslation(l.create(),N,P);
K[A]=M[0];K[h]=M[1];K[o]=M[2];K[B]=M[3];var J=l.create();if(L[2]!==0){J[r]=L[2];
l.multiply(K,K,J)}if(L[1]!==0){J[r]=0;J[u]=L[1];l.multiply(K,K,J)}if(L[0]){J[u]=0;
J[4]=L[0];l.multiply(K,K,J)}l.scale(K,K,O);this.m=K;return this};s.isAffine=function(){return(this.m[C]===0&&this.m[A]===0&&this.m[i]===0&&this.m[h]===0&&this.m[u]===0&&this.m[r]===0&&this.m[p]===1&&this.m[o]===0&&this.m[D]===0&&this.m[B]===1)
};s.toString=function(){var J=this.m;if(this.isAffine()){return"matrix("+J[z]+", "+J[y]+", "+J[x]+", "+J[w]+", "+J[v]+", "+J[t]+")"
}return"matrix3d("+J[G]+", "+J[E]+", "+J[C]+", "+J[A]+", "+J[k]+", "+J[j]+", "+J[i]+", "+J[h]+", "+J[u]+", "+J[r]+", "+J[p]+", "+J[o]+", "+J[H]+", "+J[F]+", "+J[D]+", "+J[B]+")"
};s.toCSSString=s.toString;s._combine=function(K,N,M,L){var J=b.create();J[0]=(M*K[0])+(L*N[0]);
J[1]=(M*K[1])+(L*N[1]);J[2]=(M*K[2])+(L*N[2]);return J};s._matrix2dToMat4=function(J){var L=l.create();
for(var M=0;M<4;M++){for(var K=0;K<4;K++){L[M*4+K]=J[M][K]}}return L};s._mat4ToMatrix2d=function(M){var J=[];
for(var L=0;L<4;L++){J[L]=[];for(var K=0;K<4;K++){J[L][K]=M[L*4+K]}}return J};s._rotationFromQuat=function(J){var N=J[3]*J[3];
var M=J[0]*J[0];var L=J[1]*J[1];var K=J[2]*J[2];var S=M+L+K+N;var O=J[0]*J[1]+J[2]*J[3];
var R,Q,P;if(O>0.499*S){Q=2*Math.atan2(J[0],J[3]);P=Math.PI/2;R=0;return b.fromValues(R,Q,P)
}if(O<-0.499*S){Q=-2*Math.atan2(J[0],J[3]);P=-Math.PI/2;R=0;return b.fromValues(R,Q,P)
}Q=Math.atan2(2*J[1]*J[3]-2*J[0]*J[2],M-L-K+N);P=Math.asin(2*O/S);R=Math.atan2(2*J[0]*J[3]-2*J[1]*J[2],-M+L-K+N);
return b.fromValues(R,Q,P)};var n=function(J){return Math.abs(J)<0.0001};d.exports=q
},{"gl-matrix":1113}],1116:[function(b,c,a){c.exports={Clip:b("./ac-eclipse/Clip"),Timeline:b("./ac-eclipse/Timeline")}
},{"./ac-eclipse/Clip":1117,"./ac-eclipse/Timeline":1118}],1117:[function(g,h,d){g("./helpers/Float32Array");
var b=g("./helpers/transitionEnd");var c=g("./clips/ClipEasing");var a=g("./clips/ClipInlineCss");
var i=g("./clips/ClipTransitionCss");function f(l,k,m,j){if(l.nodeType){if(b===undefined||(j&&j.inlineStyles)){return new a(l,k,m,j)
}return new i(l,k,m,j)}return new c(l,k,m,j)}h.exports=f},{"./clips/ClipEasing":1119,"./clips/ClipInlineCss":1120,"./clips/ClipTransitionCss":1121,"./helpers/Float32Array":1124,"./helpers/transitionEnd":1134}],1118:[function(c,f,a){var d=c("ac-object").create;
var b=c("ac-clip").Clip;var h=c("ac-event-emitter").EventEmitter;function i(j){j=j||{}
}var g=i.prototype=d(h.prototype);f.exports=i},{"ac-clip":13,"ac-event-emitter":1206,"ac-object":1488}],1119:[function(b,a,c){var j=b("ac-object").clone;
var g=b("ac-object").create;var k=b("../helpers/isCssCubicBezierString");var f=b("../helpers/BezierCurveCssManager");
var h=b("ac-clip").Clip;var i="ease";function l(s,r,x,B){var u=j(B||{},true);var A=0;
var m={};var w={};var v=u.propsFrom||{};var z={};var n,q;if(k(u.ease)){u.ease=f.create(u.ease).toEasingFunction()
}if(u.propsEase){var o=u.ease||i;for(n in x){if(x.hasOwnProperty(n)){q=u.propsEase[n];
if(k(q)){q=f.create(u.propsEase[n]).toEasingFunction()}if(q===undefined){if(m[o]===undefined){m[o]={};
w[o]={};z[o]=o;A++}m[o][n]=x[n];w[o][n]=v[n]}else{if(typeof q==="function"){m[A]={};
w[A]={};m[A][n]=x[n];w[A][n]=v[n];z[A]=q;A++}else{if(m[q]===undefined){m[q]={};
w[q]={};z[q]=q;A++}m[q][n]=x[n];w[q][n]=v[n]}}}}}if(A>1){this._storeOnUpdate=u.onUpdate||null;
u.onUpdate=null;var t=u.onStart;var y=u.onDraw;var p=u.onComplete;u.onStart=null;
u.onDraw=null;u.onComplete=null;this._clips=[];for(q in m){if(m.hasOwnProperty(q)){u.ease=z[q];
u.propsFrom=w[q];this._clips.push(new h(s,r,m[q],u))}}u.onUpdate=this._onUpdate;
u.onStart=t;u.onDraw=y;u.onComplete=p;u.propsFrom=null;u.ease="linear";x={}}else{for(n in z){if(z.hasOwnProperty(n)){u.ease=z[n]
}}}h.call(this,s,r,x,u)}var d=l.prototype=g(h.prototype);d.reset=function(){var n=h.prototype.reset.call(this);
if(this._clips){var m=this._clips.length;while(m--){this._clips[m].reset()}}return n
};d.destroy=function(){var n=h.prototype.destroy.call(this);if(this._clips){var m=this._clips.length;
while(m--){this._clips[m].reset()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return n};d._onUpdate=function(m){var n=(this._direction===1)?m.progress:1-m.progress;
var o=this._clips.length;while(o--){this._clips[o].setProgress(n)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,m)
}};a.exports=l},{"../helpers/BezierCurveCssManager":1123,"../helpers/isCssCubicBezierString":1130,"ac-clip":13,"ac-object":1488}],1120:[function(f,c,g){var b=f("../helpers/convertToStyleObject");
var d=f("../helpers/convertToTransitionableObjects");var l=f("ac-object").clone;
var j=f("ac-object").create;var k=f("../helpers/removeTransitions");var i=f("../helpers/BezierCurveCssManager");
var n=f("./ClipEasing");var m=f("ac-dom-styles");function a(r,p,t,x){var s=l(x||{},true);
this._el=r;var v=d(this._el,t||{},s.propsFrom||{});this._styles=v.target;this._stylesFrom=v.propsFrom;
t=v.propsTo;var o;this._storeOnStart=s.onStart||null;this._storeOnDraw=s.onDraw||null;
this._storeOnComplete=s.onComplete||null;s.onStart=this._onStart;s.onDraw=this._onDraw;
s.onComplete=this._onComplete;s.propsFrom=v.propsFrom;n.call(this,this._styles,p,t,s);
k(this._el,this._styles);var u=(this._isYoyo)?this._stylesFrom:t;this._completeStyles=b(u);
if(s.removeStylesOnComplete!==undefined){var w=s.removeStylesOnComplete;if(typeof w==="boolean"&&w){for(o in this._completeStyles){if(this._completeStyles.hasOwnProperty(o)){this._completeStyles[o]=null
}}}else{if(typeof w==="object"&&w.length){var q=w.length;while(q--){o=w[q];if(this._completeStyles.hasOwnProperty(o)){this._completeStyles[o]=null
}}}}}}var h=a.prototype=j(n.prototype);h.reset=function(){var o=n.prototype.reset.call(this);
m.setStyle(this._el,b(this._styles));return o};h.destroy=function(){var o=n.prototype.destroy.call(this);
this._el=null;this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnDraw=null;this._storeOnComplete=null;return o
};h.getTarget=function(){return this._el};h._onStart=function(o){if(this.isPlaying()&&this._direction===1){m.setStyle(this._el,b(this._stylesFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,o)}};h._onDraw=function(o){m.setStyle(this._el,b(this._styles));
if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,o)}};h._onComplete=function(o){m.setStyle(this._el,this._completeStyles);
if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,o)
}};c.exports=a},{"../helpers/BezierCurveCssManager":1123,"../helpers/convertToStyleObject":1126,"../helpers/convertToTransitionableObjects":1127,"../helpers/removeTransitions":1131,"./ClipEasing":1119,"ac-dom-styles":1080,"ac-object":1488}],1121:[function(i,a,u){var c=i("../helpers/convertToStyleObject");
var m=i("../helpers/convertToTransitionableObjects");var s=i("ac-object").clone;
var k=i("ac-object").create;var p=i("ac-easing").createPredefined;var j=i("../helpers/isCssCubicBezierString");
var q=i("../helpers/removeTransitions");var g=i("../helpers/splitUnits");var b=i("../helpers/toCamCase");
var h=i("../helpers/transitionEnd");var l=i("../helpers/waitAnimationFrames");var r=i("../helpers/BezierCurveCssManager");
var o=i("./ClipEasing");var t=i("ac-dom-styles");var d="ease";function f(B,y,D,H){var C=s(H||{},true);
this._el=B;var E=m(this._el,D||{},C.propsFrom||{});this._styles=E.target;this._propsTo=E.propsTo;
this._propsFrom=E.propsFrom;this._storeOnStart=C.onStart||null;this._storeOnComplete=C.onComplete||null;
C.onStart=this._onStart;C.onComplete=this._onComplete;C.propsFrom=this._propsFrom;
this._stylesTo=s(this._propsTo,true);this._stylesFrom=s(this._propsFrom,true);C.ease=C.ease||d;
this._eases={};this._propsArray=[];this._propsComplete={};var G;var x;var w=c(this._stylesTo);
var A=c(this._stylesFrom);this._propsEase=s(C.propsEase||{},true);var v;for(v in this._stylesTo){if(this._stylesTo.hasOwnProperty(v)){this._propsArray[this._propsArray.length]=v;
this._propsComplete[b(v)]={"1":w[v],"-1":A[v]};if(this._propsEase[v]===undefined){if(this._eases[C.ease]===undefined){G=this._convertEase(C.ease);
this._eases[C.ease]=G.css;x=G.js}this._propsEase[v]=C.ease}else{if(this._eases[this._propsEase[v]]===undefined){G=this._convertEase(this._propsEase[v]);
this._eases[this._propsEase[v]]=G.css;C.propsEase[v]=G.js}else{if(j(this._propsEase[v])){C.propsEase[v]=this._eases[this._propsEase[v]]["1"].toEasingFunction()
}}}}}C.ease=x;o.call(this,this._styles,y,this._propsTo,C);this._onTransitionEnded=this._onTransitionEnded.bind(this);
this.on("pause",this._onPaused);q(this._el,this._stylesTo);this._otherTransitions=t.getStyle(this._el,"transition").transition;
if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}this._completeStyles={transition:this._otherTransitions};if(C.removeStylesOnComplete!==undefined){var F=C.removeStylesOnComplete;
if(typeof F==="boolean"&&F){for(v in this._stylesTo){this._completeStyles[v]=null
}}else{if(typeof F==="object"&&F.length){var z=F.length;while(z--){this._completeStyles[F[z]]=null
}}}}}var n=f.prototype=k(o.prototype);n.reset=function(){var v=o.prototype.reset.call(this);
this._applyStyles(0,c(this._target));return v};n.destroy=function(){var v=o.prototype.destroy.call(this);
this._removeTransitionListener();this._el=null;this._propsArray=null;this._propsComplete=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return v};n.getTarget=function(){return this._el};n.setProgress=function(v){var w=o.prototype.setProgress.call(this,v);
this._applyStyles(0,c(this._target));if(this.isPlaying()){l(function(){if(this.isPlaying()){var y=this._duration*(1-this.getProgress());
var x=c((this._direction>0)?this._stylesTo:this._stylesFrom);this._applyStyles(y,x)
}}.bind(this),2)}return w};n._convertEase=function(x){var v;var w;if(j(x)){v=r.create(x);
w=v.toEasingFunction()}else{v=r.create(p(x).cssString);w=x}return{css:{"1":v,"-1":v.reversed()},js:w}
};n._stop=function(){this._removeTransitionListener();o.prototype._stop.call(this)
};n._complete=function(){if(this._isComplete()){o.prototype._complete.call(this)
}else{this._el.addEventListener(h,this._onTransitionEnded)}};n._onTransitionEnded=function(){this._removeTransitionListener();
o.prototype._complete.call(this)};n._removeTransitionListener=function(){if(this._el&&this._onTransitionEnded){this._el.removeEventListener(h,this._onTransitionEnded)
}};n._isComplete=function(){var v=t.getStyle.apply(this,[this._el].concat([this._propsArray]));
v.transform=null;var w;var x;for(x in v){if(v.hasOwnProperty(x)&&v[x]!==null){w=this._propsComplete[x][this._direction];
if(v[x]!==w&&this._el.style[x]!==w&&String(g(v[x]).value)!==w){return false}}}return true
};n._applyStyles=function(x,v){if(x>0){var y=this._otherTransitions+((this._otherTransitions.length)?", ":"");
var w={};var z;for(z in this._eases){if(this._eases.hasOwnProperty(z)){w[z]=this._eases[z][this._direction].splitAt(this.getProgress()).toCSSString()
}}for(z in this._stylesTo){if(this._stylesTo.hasOwnProperty(z)){y+=z+" "+x+"ms "+w[this._propsEase[z]]+" 0ms, "
}}v.transition=y.substr(0,y.length-2)}else{v.transition=this._otherTransitions}t.setStyle(this._el,v)
};n._onPaused=function(v){var w=t.getStyle.apply(this,[this._el].concat([this._propsArray]));
w.transition=this._otherTransitions;t.setStyle(this._el,w)};n._onStart=function(v){var w=(this._direction===1&&this.getProgress()===0)?2:0;
if(w){this._applyStyles(0,c(this._stylesFrom))}l(function(){if(this.isPlaying()){var y=this._duration*(1-this.getProgress());
var x=c((this._direction>0)?this._stylesTo:this._stylesFrom);this._applyStyles(y,x)
}}.bind(this),w);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,v)
}};n._onComplete=function(v){t.setStyle(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,v)
}};a.exports=f},{"../helpers/BezierCurveCssManager":1123,"../helpers/convertToStyleObject":1126,"../helpers/convertToTransitionableObjects":1127,"../helpers/isCssCubicBezierString":1130,"../helpers/removeTransitions":1131,"../helpers/splitUnits":1132,"../helpers/toCamCase":1133,"../helpers/transitionEnd":1134,"../helpers/waitAnimationFrames":1135,"./ClipEasing":1119,"ac-dom-styles":1080,"ac-easing":110,"ac-object":1488}],1122:[function(c,d,a){var g=c("ac-easing").createBezier;
function b(i,h){this.manager=h;this.p1={x:i[0],y:i[1]};this.p2={x:i[2],y:i[3]};
this._cacheSplits={}}var f=b.prototype;f.splitAt=function(k){if(k===0){return this
}else{if(this._cacheSplits[k]!==undefined){return this._cacheSplits[k]}}var q=[this.p1.x,this.p2.x];
var n=[this.p1.y,this.p2.y];var m=0;var o=k;var i=0;var p=1;var j=this._getStartX(k,q);
while(o!==j&&m<1000){if(o<j){p=k}else{i=k}k=i+((p-i)*0.5);j=this._getStartX(k,q);
++m}var l=this._splitBezier(k,q,n);var r=this._normalize(l);var h=this.manager.create(r);
this._cacheSplits[o]=h;return h};f.reversed=function(){var h=this.toArray();return this.manager.create([0.5-(h[2]-0.5),0.5-(h[3]-0.5),0.5-(h[0]-0.5),0.5-(h[1]-0.5)])
};f.toArray=function(){var h=[this.p1.x,this.p1.y,this.p2.x,this.p2.y];return Array.prototype.slice.call(h)
};f.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};f.toEasingFunction=function(){return g.apply(this,this.toArray()).easingFunction
};f._getStartX=function(m,h){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return i-3*k*l*h[1]+3*m*j*h[0]
};f._splitBezier=function(m,h,n){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return[i-3*k*l*h[1]+3*m*j*h[0],i-3*k*l*n[1]+3*m*j*n[0],k-2*m*l*h[1]+j*h[0],k-2*m*l*n[1]+j*n[0],m-l*h[1],m-l*n[1]]
};f._normalize=function(h){return[(h[2]-h[0])/(1-h[0]),(h[3]-h[1])/(1-h[1]),(h[4]-h[0])/(1-h[0]),(h[5]-h[1])/(1-h[1])]
};d.exports=b},{"ac-easing":110}],1123:[function(c,d,a){var b=c("./BezierCurveCss");
function g(){this._instances={}}var f=g.prototype;f.create=function(k){var j;if(typeof k==="string"){j=k.replace(/ /g,"")
}else{j="cubic-bezier("+k.join(",")+")"}if(this._instances[j]===undefined){if(typeof k==="string"){k=k.match(/\d*\.?\d+/g);
var h=k.length;while(h--){k[h]=Number(k[h])}}this._instances[j]=new b(k,this)}return this._instances[j]
};d.exports=new g()},{"./BezierCurveCss":1122}],1124:[function(b,c,a){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],1125:[function(d,f,c){var b=d("./splitUnits");var h=d("ac-dom-metrics");
var a={translateX:"width",translateY:"height"};function i(j,l,m){this._transform=j;
var k;var n;var o;for(o in m){if(m.hasOwnProperty(o)&&typeof this._transform[o]==="function"){k=b(m[o]);
if(k.unit==="%"){n=this._convertPercentToPixelValue(o,k.value,l)}else{n=k.value
}this._transform[o].call(this._transform,n)}}}var g=i.prototype;g._convertPercentToPixelValue=function(m,l,k){m=a[m];
var j=h.getDimensions(k);if(j[m]){l*=0.01;return j[m]*l}return l};g.toArray=function(){return this._transform.toArray()
};g.toCSSString=function(){return this._transform.toCSSString()};f.exports=i},{"./splitUnits":1132,"ac-dom-metrics":1049}],1126:[function(b,c,a){c.exports=function d(g){var f={};
var h;for(h in g){if(g.hasOwnProperty(h)&&g[h]!==null){if(g[h].isColor){f[h]="rgb("+Math.round(g[h].r)+", "+Math.round(g[h].g)+", "+Math.round(g[h].b)+")"
}else{if(h==="transform"){f[h]="matrix("+g[h].join(",")+")"}else{f[h]=g[h].value+g[h].unit
}}}}return f}},{}],1127:[function(g,c,j){var l=g("ac-object").clone;var h=g("./cssColorNames");
var d=g("./splitUnits");var b=g("./toCamCase");var o=g("ac-color");var n=g("ac-dom-styles");
var k=g("ac-feature");var i=g("ac-transform").Transform;var a=g("./TransformMatrix");
var m=function(p){if(h[p]){p=h[p]}else{if(o.isHex(p)){p=o.hexToRgb(p)}p=o.rgbToObject(p)
}p.isColor=true;return p};c.exports=function f(r,x,w){var t={};x=l(x,true);w=l(w,true);
var q;var y,u,v;var s=k.cssPropertyAvailable("transform");var p;for(p in x){if(x.hasOwnProperty(p)&&x[p]!==null){if(p==="transform"){if(s){y=new i();
q=n.getStyle(r,"transform")["transform"]||"none";y.setMatrixValue(q);u=new a(new i(),r,x[p])
}if(u&&u.toCSSString()!==y.toCSSString()){v=new a(w[p]?new i():y.clone(),r,w[p]);
t[p]=y.toArray();x[p]=u.toArray();w[p]=v.toArray()}else{t[p]=null;x[p]=null}}else{q=n.getStyle(r,p)[b(p)];
if(o.isColor(q)){t[p]=m(q);w[p]=(w[p]!==undefined)?m(w[p]):l(t[p],true);x[p]=m(x[p])
}else{t[p]=d(q);w[p]=(w[p]!==undefined)?d(w[p]):l(t[p],true);x[p]=d(x[p])}}}}for(p in w){if(w.hasOwnProperty(p)&&w[p]!==null&&(x[p]===undefined||x[p]===null)){if(p==="transform"){if(s){y=new i();
y.setMatrixValue(getComputedStyle(r).transform||getComputedStyle(r).webkitTransform||"none");
v=new a(new i(),r,w[p])}if(v&&v.toCSSString()!==y.toCSSString()){u=new a(y.clone());
t[p]=y.toArray();x[p]=u.toArray();w[p]=v.toArray()}else{t[p]=null;x[p]=null;w[p]=null
}}else{q=n.getStyle(r,p)[b(p)];if(o.isColor(q)){t[p]=m(q);x[p]=l(t[p],true);w[p]=m(w[p])
}else{t[p]=d(q);w[p]=d(w[p]);x[p]=l(t[p],true)}}}}return{target:t,propsTo:x,propsFrom:w}
}},{"./TransformMatrix":1125,"./cssColorNames":1128,"./splitUnits":1132,"./toCamCase":1133,"ac-color":1100,"ac-dom-styles":1080,"ac-feature":198,"ac-object":1488,"ac-transform":1114}],1128:[function(b,d,a){var c={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
d.exports=c},{}],1129:[function(b,c,a){c.exports=function d(j){if(j.transitionProperty){var m="";
var h=j.transitionProperty.split(", ");var k=j.transitionDuration.split(", ");var l=j.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(i){return i.substr(0,i.length-1)
}).split(", ");var f=j.transitionDelay.split(", ");var g=h.length;while(g--){m+=h[g]+" "+k[g]+" "+l[g]+" "+f[g]+", "
}return m.substr(0,m.length-2)}return false}},{}],1130:[function(c,d,b){d.exports=function a(f){return typeof f==="string"&&f.substr(0,13)==="cubic-bezier("
}},{}],1131:[function(c,d,b){var g=c("./getShorthandTransition");var f=c("ac-dom-styles");
d.exports=function a(k,m){var l=f.getStyle(k,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
l=l.transition||g(l);if(l&&l.length){l=l.split(",");var j=0;var n;var h=l.length;
while(h--){n=l[h].trim().split(" ")[0];if(m[n]!==undefined){l.splice(h,1);++j}}if(j){if(l.length===0){l=["all"]
}f.setStyle(k,{transition:l.join(",").trim()})}}}},{"./getShorthandTransition":1129,"ac-dom-styles":1080}],1132:[function(c,d,b){d.exports=function a(i){i=String(i);
if(i.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var h=/(\d*\.?\d*)(.*)/;var f=1;if(i&&i.substr(0,1)==="-"){i=i.substr(1);f=-1}var g=String(i).match(h);
return{value:Number(g[1])*f,unit:g[2]}}},{}],1133:[function(c,d,b){d.exports=function a(g){var f=function(i,j,k,h){return(k===0)&&(h.substr(1,3)!=="moz")?j:j.toUpperCase()
};return g.replace(/-(\w)/g,f)}},{}],1134:[function(d,f,c){var a;f.exports=(function b(){if(a){return a
}var g;var h=document.createElement("fakeelement");var i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(g in i){if(h.style[g]!==undefined){a=i[g];return a}}})()},{}],1135:[function(c,d,a){d.exports=function b(i,h){if(h){var g=0;
var f=function(){if(g===h){i.call(this)}else{++g;window.requestAnimationFrame(f)
}};f()}else{i.call(this)}}},{}],1136:[function(b,c,a){arguments[4][752][0].apply(a,arguments)
},{"./ac-array/flatten":1137,"./ac-array/intersection":1138,"./ac-array/toArray":1139,"./ac-array/union":1140,"./ac-array/unique":1141,"./ac-array/without":1142,dup:752}],1137:[function(b,c,a){arguments[4][753][0].apply(a,arguments)
},{dup:753}],1138:[function(b,c,a){arguments[4][754][0].apply(a,arguments)},{dup:754}],1139:[function(b,c,a){arguments[4][755][0].apply(a,arguments)
},{dup:755}],1140:[function(b,c,a){arguments[4][756][0].apply(a,arguments)},{"./flatten":1137,"./unique":1141,dup:756}],1141:[function(b,c,a){arguments[4][757][0].apply(a,arguments)
},{dup:757}],1142:[function(b,c,a){arguments[4][758][0].apply(a,arguments)},{dup:758}],1143:[function(b,c,a){arguments[4][166][0].apply(a,arguments)
},{"./ac-dom-emitter/DOMEmitter":1144,dup:166}],1144:[function(b,c,a){arguments[4][167][0].apply(a,arguments)
},{"ac-event-emitter":1206,dup:167}],1145:[function(b,c,a){arguments[4][37][0].apply(a,arguments)
},{"./ac-dom-styles/ie":1146,"./ac-dom-styles/vendorTransformHelper":1147,dup:37}],1146:[function(b,c,a){arguments[4][38][0].apply(a,arguments)
},{dup:38}],1147:[function(b,c,a){arguments[4][39][0].apply(a,arguments)},{dup:39}],1148:[function(b,c,a){arguments[4][40][0].apply(a,arguments)
},{"./ac-dom-metrics/ie":1149,"ac-dom-styles":1145,dup:40}],1149:[function(b,c,a){arguments[4][41][0].apply(a,arguments)
},{dup:41}],1150:[function(b,c,a){arguments[4][98][0].apply(a,arguments)},{dup:98}],1151:[function(b,c,a){arguments[4][99][0].apply(a,arguments)
},{"./ac-object/clone":1152,"./ac-object/create":1153,"./ac-object/defaults":1154,"./ac-object/extend":1155,"./ac-object/getPrototypeOf":1156,"./ac-object/isDate":1157,"./ac-object/isEmpty":1158,"./ac-object/isRegExp":1159,"./ac-object/toQueryParameters":1160,dup:99}],1152:[function(b,c,a){arguments[4][100][0].apply(a,arguments)
},{"./extend":1155,dup:100}],1153:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],1154:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":1155,dup:102}],1155:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{dup:103}],1156:[function(b,c,a){arguments[4][104][0].apply(a,arguments)},{dup:104}],1157:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],1158:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],1159:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],1160:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108,qs:1150}],1161:[function(b,c,a){arguments[4][839][0].apply(a,arguments)
},{dup:839}],1162:[function(b,c,a){arguments[4][349][0].apply(a,arguments)},{"./ac-dom-traversal/ancestor":1163,"./ac-dom-traversal/ancestors":1164,"./ac-dom-traversal/children":1165,"./ac-dom-traversal/filterBySelector":1166,"./ac-dom-traversal/firstChild":1167,"./ac-dom-traversal/lastChild":1170,"./ac-dom-traversal/matchesSelector":1171,"./ac-dom-traversal/nextSibling":1172,"./ac-dom-traversal/nextSiblings":1173,"./ac-dom-traversal/previousSibling":1174,"./ac-dom-traversal/previousSiblings":1175,"./ac-dom-traversal/querySelector":1176,"./ac-dom-traversal/querySelectorAll":1177,"./ac-dom-traversal/shims/ie":1178,"./ac-dom-traversal/siblings":1179,dup:349}],1163:[function(b,c,a){arguments[4][350][0].apply(a,arguments)
},{"./helpers/validate":1169,"./matchesSelector":1171,"ac-dom-nodes":1061,dup:350}],1164:[function(b,c,a){arguments[4][351][0].apply(a,arguments)
},{"./helpers/validate":1169,"./matchesSelector":1171,"ac-dom-nodes":1061,dup:351}],1165:[function(b,c,a){arguments[4][352][0].apply(a,arguments)
},{"./filterBySelector":1166,"./helpers/validate":1169,"ac-dom-nodes":1061,dup:352}],1166:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./helpers/validate":1169,"./matchesSelector":1171,dup:353}],1167:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./children":1165,"./helpers/validate":1169,dup:354}],1168:[function(b,c,a){arguments[4][355][0].apply(a,arguments)
},{dup:355}],1169:[function(b,c,a){arguments[4][356][0].apply(a,arguments)},{"ac-dom-nodes":1061,dup:356}],1170:[function(b,c,a){arguments[4][357][0].apply(a,arguments)
},{"./children":1165,"./helpers/validate":1169,dup:357}],1171:[function(b,c,a){arguments[4][358][0].apply(a,arguments)
},{"./helpers/nativeMatches":1168,"./helpers/validate":1169,"ac-dom-nodes":1061,dup:358}],1172:[function(b,c,a){arguments[4][359][0].apply(a,arguments)
},{"./helpers/validate":1169,"./matchesSelector":1171,"ac-dom-nodes":1061,dup:359}],1173:[function(b,c,a){arguments[4][360][0].apply(a,arguments)
},{"./helpers/validate":1169,"./matchesSelector":1171,"ac-dom-nodes":1061,dup:360}],1174:[function(b,c,a){arguments[4][361][0].apply(a,arguments)
},{"./helpers/validate":1169,"./matchesSelector":1171,"ac-dom-nodes":1061,dup:361}],1175:[function(b,c,a){arguments[4][362][0].apply(a,arguments)
},{"./helpers/validate":1169,"./matchesSelector":1171,"ac-dom-nodes":1061,dup:362}],1176:[function(b,c,a){arguments[4][363][0].apply(a,arguments)
},{"./helpers/validate":1169,dup:363}],1177:[function(b,c,a){arguments[4][364][0].apply(a,arguments)
},{"./helpers/validate":1169,dup:364}],1178:[function(b,c,a){arguments[4][365][0].apply(a,arguments)
},{"../helpers/nativeMatches":1168,"../helpers/validate":1169,"../vendor/sizzle/sizzle":1180,"ac-dom-nodes":1061,dup:365}],1179:[function(b,c,a){arguments[4][366][0].apply(a,arguments)
},{"./children":1165,"./helpers/validate":1169,dup:366}],1180:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],1181:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":1182}],1182:[function(c,b,d){var f;var j=c("ac-event-emitter").EventEmitter,g=c("ac-dom-events"),a=c("ac-dom-traversal");
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
},{"ac-dom-events":1161,"ac-dom-traversal":1162,"ac-event-emitter":1206}],1183:[function(b,c,a){arguments[4][569][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":1184,dup:569}],1184:[function(b,c,a){arguments[4][570][0].apply(a,arguments)
},{dup:570}],1185:[function(b,c,a){c.exports={WindowDelegate:b("./ac-window-delegate/WindowDelegate"),WindowDelegateOptimizer:b("./ac-window-delegate/WindowDelegateOptimizer"),WindowDelegateCustomEvent:b("./ac-window-delegate/WindowDelegateCustomEvent")}
},{"./ac-window-delegate/WindowDelegate":1188,"./ac-window-delegate/WindowDelegateCustomEvent":1189,"./ac-window-delegate/WindowDelegateOptimizer":1190}],1186:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
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
},{"ac-event-emitter":1206}],1187:[function(b,c,a){var g=b("ac-event-emitter").EventEmitter;
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
};c.exports=d},{"ac-event-emitter":1206}],1188:[function(d,b,g){var i;var c=d("ac-shared-instance").SharedInstance,l=d("ac-dom-emitter").DOMEmitter,j=d("./OptimizerController"),f=d("./CustomEventController"),h=d("./queries/queries"),m=d("./optimizers/optimizers");
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
};b.exports=c.share(k,a,n)},{"./CustomEventController":1186,"./OptimizerController":1187,"./optimizers/optimizers":1193,"./queries/queries":1202,"ac-dom-emitter":1181,"ac-shared-instance":1183}],1189:[function(c,d,a){var g=c("ac-event-emitter").EventEmitter;
function b(h,j,i){g.call(this);this.name=h;this.active=false;this._initializeFunc=j;
this._deinitializeFunc=i}var f=b.prototype=new g(null);f.initialize=function(){if(this._initializeFunc){this._initializeFunc()
}return this};f.deinitialize=function(){if(this._deinitializeFunc){this._deinitializeFunc()
}return this};d.exports=b},{"ac-event-emitter":1206}],1190:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
function a(h,i){g.call(this);this.active=false;this.eventNames=h.eventNames;this.propertyNames=h.propertyNames;
this.options=h.options||{};this.callback=i}var f=a.prototype=new g(null);f.update=function(i,h){this.trigger("update",{prop:i,val:h})
};f.activate=function(){this.active=true;this.trigger("activate",this)};f.deactivate=function(){this.active=false;
this.trigger("deactivate",this)};d.exports=a},{"ac-event-emitter":1206}],1191:[function(f,g,b){var a=f("../../WindowDelegateOptimizer"),d=f("../../queries/queries");
var c={eventNames:["resize"],propertyNames:["clientWidth","clientHeight","innerWidth","innerHeight"]};
var h=new a(c,function(m){var l,k=c.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],d[k[l]](true))
}});g.exports=h},{"../../WindowDelegateOptimizer":1190,"../../queries/queries":1202}],1192:[function(g,h,b){var a=g("../../WindowDelegateOptimizer"),f=g("../../queries/queries");
var d={eventNames:["scroll"],propertyNames:["scrollX","scrollY","maxScrollX","maxScrollY"]};
var c=new a(d,function(m){var l,k=d.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],f[k[l]](true))
}});h.exports=c},{"../../WindowDelegateOptimizer":1190,"../../queries/queries":1202}],1193:[function(d,f,b){var c=d("./events/resize"),a=d("./events/scroll");
f.exports=[c,a]},{"./events/resize":1191,"./events/scroll":1192}],1194:[function(b,c,a){var d=function(f){return document.documentElement.clientHeight
};c.exports=d},{}],1195:[function(b,c,a){var d=function(f){return document.documentElement.clientWidth
};c.exports=d},{}],1196:[function(b,d,a){var c=function(f){return window.innerHeight||this.clientHeight(f)
};d.exports=c},{}],1197:[function(b,c,a){var d=function(f){return window.innerWidth||this.clientWidth(f)
};c.exports=d},{}],1198:[function(c,d,a){var b=function(f){return document.body.scrollWidth-this.innerWidth()
};d.exports=b},{}],1199:[function(c,d,b){var a=function(f){return document.body.scrollHeight-this.innerHeight()
};d.exports=a},{}],1200:[function(b,c,a){var d=function(f){var h=window.pageXOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollLeft}return h};c.exports=d},{}],1201:[function(b,c,a){var d=function(f){var h=window.pageYOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollTop}return h};c.exports=d},{}],1202:[function(i,g,k){var b=i("./methods/innerWidth"),j=i("./methods/innerHeight"),d=i("./methods/clientWidth"),l=i("./methods/clientHeight"),c=i("./methods/scrollX"),a=i("./methods/scrollY"),h=i("./methods/maxScrollX"),f=i("./methods/maxScrollY");
g.exports={innerWidth:b,innerHeight:j,clientWidth:d,clientHeight:l,scrollX:c,scrollY:a,maxScrollX:h,maxScrollY:f}
},{"./methods/clientHeight":1194,"./methods/clientWidth":1195,"./methods/innerHeight":1196,"./methods/innerWidth":1197,"./methods/maxScrollX":1198,"./methods/maxScrollY":1199,"./methods/scrollX":1200,"./methods/scrollY":1201}],1203:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":1204}],1204:[function(d,c,h){var i;
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
}return p};c.exports=b},{"./TrackedElement":1205,"ac-array":1136,"ac-dom-metrics":1148,"ac-dom-nodes":1061,"ac-event-emitter":1206,"ac-object":1151,"ac-window-delegate":1185}],1205:[function(d,f,c){var g;
var i=d("ac-dom-emitter").DOMEmitter;var a=d("ac-dom-nodes");var b=d("ac-object");
function h(j){if(a.isElement(j)){this.element=j}else{throw new TypeError("TrackedElement: "+j+" is not a valid DOM element")
}this.inView=false;this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;
this.right=0;this.bottom=0;this.left=0;this.width=0;this.height=0;i.call(this,j)
}g=h.prototype=b.create(i.prototype);f.exports=h},{"ac-dom-emitter":1143,"ac-dom-nodes":1061,"ac-object":1151}],1206:[function(b,c,a){arguments[4][11][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":1207,dup:11}],1207:[function(b,c,a){arguments[4][12][0].apply(a,arguments)
},{dup:12}],1208:[function(c,d,b){function a(f,h){var g;return function(){var j=arguments;
var k=this;var i=function(){g=null;f.apply(k,j)};clearTimeout(g);g=setTimeout(i,h)
}}d.exports=a},{}],1209:[function(d,f,b){var c=d("ac-dom-events/preventDefault");
var a=d("ac-dom-events/stopPropagation");function h(j){if(j.touches&&j.touches.length===0){return false
}if(typeof j.pageX!=="number"){return false}return true}function g(j){this.originalEvent=j;
if(h(j)){this.pageX=j.touches?j.touches[0].pageX:this.originalEvent.pageX;this.pageY=j.touches?j.touches[0].pageY:this.originalEvent.pageY
}}var i=g.prototype;i.preventDefault=function(){c(this.originalEvent)};i.stopPropagation=function(){a(this.originalEvent)
};f.exports=g},{"ac-dom-events/preventDefault":1031,"ac-dom-events/stopPropagation":1035}],1210:[function(d,b,h){var l=d("ac-event-emitter").EventEmitter;
var f=d("ac-dom-events/addEventListener");var c=d("ac-dom-events/removeEventListener");
var g=d("./PointerEvent");var k=d("ac-object/create");var j=d("./util/inputs");
function a(n,m){this.options=m||{};this.element=n;this._listeners=[];if(m.mouse===true){this._listeners.push(j.MOUSE)
}if(m.touch===true){this._listeners.push(j.TOUCH)}this._boundMove=this._move.bind(this);
this._boundEnd=this._end.bind(this);this._boundCancel=this._cancel.bind(this);this._boundStart=this._start.bind(this);
this._hasFiredStart=false;this._startEvent=null}var i=a.prototype=k(l.prototype);
i._start=function(n){for(var m=0;m<this._listeners.length;m+=1){f(this.element,this._listeners[m].MOVE_EVENT,this._boundMove);
f(this.element,this._listeners[m].END_EVENT,this._boundEnd);f(this.element,this._listeners[m].CANCEL_EVENT,this._boundCancel)
}this._startEvent=new g(n)};i._move=function(m){if(this._hasFiredStart===false){this._hasFiredStart=true;
this.trigger("start",this._startEvent)}this.trigger("move",new g(m))};i._end=function(m){this._removeAllListeners();
this.trigger("end",new g(m));this._hasFiredStart=false;this._startEvent=null};i._cancel=function(m){this._removeAllListeners();
this.trigger("cancel",new g(m));this._hasFiredStart=false;this._startEvent=null
};i._removeAllListeners=function(){for(var m=0;m<this._listeners.length;m+=1){c(this.element,this._listeners[m].MOVE_EVENT,this._boundMove);
c(this.element,this._listeners[m].END_EVENT,this._boundEnd);c(this.element,this._listeners[m].CANCEL_EVENT,this._boundCancel)
}};i.activate=function(){for(var m=0;m<this._listeners.length;m+=1){f(this.element,this._listeners[m].START_EVENT,this._boundStart)
}};i.destroy=function(){this._boundStart=null;this._boundEnd=null;this._boundCancel=null
};a.create=function(n,m){return new a(n,m)};b.exports=a},{"./PointerEvent":1209,"./util/inputs":1211,"ac-dom-events/addEventListener":1024,"ac-dom-events/removeEventListener":1032,"ac-event-emitter":1206,"ac-object/create":1484}],1211:[function(c,d,b){var a={MOUSE:{START_EVENT:"mousedown",MOVE_EVENT:"mousemove",END_EVENT:"mouseup",CANCEL_EVENT:"mouseleave"},TOUCH:{START_EVENT:"touchstart",MOVE_EVENT:"touchmove",END_EVENT:"touchend",CANCEL_EVENT:"touchcancel"}};
d.exports=a},{}],1212:[function(b,c,a){arguments[4][752][0].apply(a,arguments)},{"./ac-array/flatten":1213,"./ac-array/intersection":1214,"./ac-array/toArray":1215,"./ac-array/union":1216,"./ac-array/unique":1217,"./ac-array/without":1218,dup:752}],1213:[function(b,c,a){arguments[4][753][0].apply(a,arguments)
},{dup:753}],1214:[function(b,c,a){arguments[4][754][0].apply(a,arguments)},{dup:754}],1215:[function(b,c,a){arguments[4][755][0].apply(a,arguments)
},{dup:755}],1216:[function(b,c,a){arguments[4][756][0].apply(a,arguments)},{"./flatten":1213,"./unique":1217,dup:756}],1217:[function(b,c,a){arguments[4][757][0].apply(a,arguments)
},{dup:757}],1218:[function(b,c,a){arguments[4][758][0].apply(a,arguments)},{dup:758}],1219:[function(b,c,a){arguments[4][569][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":1220,dup:569}],1220:[function(b,c,a){arguments[4][570][0].apply(a,arguments)
},{dup:570}],1221:[function(b,c,a){arguments[4][571][0].apply(a,arguments)},{"./ac-mvc-cid/CID":1222,dup:571}],1222:[function(b,c,a){arguments[4][572][0].apply(a,arguments)
},{"ac-shared-instance":1219,dup:572}],1223:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],1224:[function(b,c,a){arguments[4][99][0].apply(a,arguments)},{"./ac-object/clone":1225,"./ac-object/create":1226,"./ac-object/defaults":1227,"./ac-object/extend":1228,"./ac-object/getPrototypeOf":1229,"./ac-object/isDate":1230,"./ac-object/isEmpty":1231,"./ac-object/isRegExp":1232,"./ac-object/toQueryParameters":1233,dup:99}],1225:[function(b,c,a){arguments[4][100][0].apply(a,arguments)
},{"./extend":1228,dup:100}],1226:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],1227:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":1228,dup:102}],1228:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{dup:103}],1229:[function(b,c,a){arguments[4][104][0].apply(a,arguments)},{dup:104}],1230:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],1231:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],1232:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],1233:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108,qs:1223}],1234:[function(b,c,a){arguments[4][763][0].apply(a,arguments)
},{"./ac-mvc-collection/Collection":1235,dup:763}],1235:[function(b,c,a){arguments[4][764][0].apply(a,arguments)
},{"ac-array":1212,"ac-event-emitter":1206,"ac-mvc-cid":1221,"ac-object":1224,dup:764}],1236:[function(b,c,a){arguments[4][569][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":1237,dup:569}],1237:[function(b,c,a){arguments[4][570][0].apply(a,arguments)
},{dup:570}],1238:[function(b,c,a){arguments[4][571][0].apply(a,arguments)},{"./ac-mvc-cid/CID":1239,dup:571}],1239:[function(b,c,a){arguments[4][572][0].apply(a,arguments)
},{"ac-shared-instance":1236,dup:572}],1240:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{dup:98}],1241:[function(b,c,a){arguments[4][99][0].apply(a,arguments)},{"./ac-object/clone":1242,"./ac-object/create":1243,"./ac-object/defaults":1244,"./ac-object/extend":1245,"./ac-object/getPrototypeOf":1246,"./ac-object/isDate":1247,"./ac-object/isEmpty":1248,"./ac-object/isRegExp":1249,"./ac-object/toQueryParameters":1250,dup:99}],1242:[function(b,c,a){arguments[4][100][0].apply(a,arguments)
},{"./extend":1245,dup:100}],1243:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],1244:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":1245,dup:102}],1245:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{dup:103}],1246:[function(b,c,a){arguments[4][104][0].apply(a,arguments)},{dup:104}],1247:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],1248:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],1249:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],1250:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108,qs:1240}],1251:[function(b,c,a){arguments[4][584][0].apply(a,arguments)
},{"./ac-mvc-model/Model":1252,dup:584}],1252:[function(b,c,a){arguments[4][585][0].apply(a,arguments)
},{"ac-event-emitter":1206,"ac-mvc-cid":1238,"ac-object":1241,dup:585}],1253:[function(c,d,b){function a(h,g){h=h||{};
this.position=h.position||{x:0,y:0};this.velocity=h.velocity||{x:0,y:0};this.mass=h.mass||1;
this.options=g||{}}var f=a.prototype;f.draw=function(){};d.exports=a},{}],1254:[function(b,c,a){c.exports={Particle:b("./Particle"),spring:b("./spring")}
},{"./Particle":1253,"./spring":1255}],1255:[function(b,d,a){function c(m,l){var n=m.mass;
var p=0,h=10,g=new Date().getTime(),i=0;function j(){var r=new Date().getTime();
var q=(r-g);g=r;if(q>25){q=25}i+=q;while(i>=h){i-=h;k()}f()}function k(){var r=0.02;
var s=o.stiffness*((m.position.x-0)-o.equilibrium);var t=o.damping*m.velocity.x;
var q=(s+t)/n;m.velocity.x+=q*r;m.position.x+=m.velocity.x*r}function f(){}var o={equilibrium:l,stiffness:-30,damping:-8,update:function(q){j()
}};return o}d.exports={create:c}},{}],1256:[function(b,c,a){arguments[4][540][0].apply(a,arguments)
},{"./ac-routes/Route":1257,"./ac-routes/Routes":1258,dup:540}],1257:[function(b,c,a){arguments[4][541][0].apply(a,arguments)
},{dup:541}],1258:[function(b,c,a){arguments[4][542][0].apply(a,arguments)},{"./Route":1257,dup:542}],1259:[function(c,d,b){function a(g){this.options=g||{}
}var f=a.prototype;f.onExit=function(){};f.onEnter=function(){};d.exports=a},{}],1260:[function(d,f,b){var c=d("ac-object");
var h=d("ac-event-emitter").EventEmitter;function a(i){this.options=i||{};this.previousState=null;
this.currentState=i.currentState||null}var g=a.prototype=c.create(h.prototype);
g.handleInput=function(j,k){var i=this.currentState[j];if(typeof i==="function"){return this.currentState[j](this,k)
}};g.gotoPreviousState=function(i){this.changeState(this.previousState,i)};g.changeState=function(k,j){this.previousState=this.currentState;
this.currentState=k;var i=[this.previousState.onExit(this,j),this.currentState.onEnter(this,j)];
return Promise.all(i)};f.exports=a},{"ac-event-emitter":1206,"ac-object":1488}],1261:[function(b,c,a){c.exports={StateMachine:b("./StateMachine"),State:b("./State")}
},{"./State":1259,"./StateMachine":1260}],1262:[function(b,c,a){var g=b("./ac-gallery/Gallery");
var f=b("./ac-gallery/SlideGallery");var d=b("./ac-gallery/FadeGallery");c.exports={Gallery:g,SlideGallery:f,FadeGallery:d}
},{"./ac-gallery/FadeGallery":1263,"./ac-gallery/Gallery":1264,"./ac-gallery/SlideGallery":1265}],1263:[function(c,d,a){var h=c("./Gallery");
var b=c("ac-eclipse").Clip;var f=c("ac-dom-styles/setStyle");var g=h.extend({initialize:function(){this._boundCreateClip=this._createClip.bind(this);
this.canSpring=false},_createClip:function(l,i,m,n,k){var j=new b(l,m,{opacity:1},{onStart:function(){f(i,{zIndex:1});
f(l,{zIndex:2})},onComplete:function(){f(i,{opacity:0});window.requestAnimationFrame(k)
},ease:n});return j},drawInitial:function(j){var i=j.get("element");f(i,{zIndex:2,opacity:1});
this.model.forEach(function(k){if(k.id!==j.id){f(k.get("element"),{zIndex:1,opacity:0})
}},this)},draw:function(i,k,j){var m=i.get("element");var l=k.get("element");var o=j.easing||this.getEasing();
var n=j.duration||this.getDuration();return new Promise(function(r,q){var p=this._createClip(m,l,n,o,r);
p.play()}.bind(this))},destroy:function(){this._boundCreateClip=null}});d.exports=g
},{"./Gallery":1264,"ac-dom-styles/setStyle":1092,"ac-eclipse":1116}],1264:[function(c,b,h){var f=c("ac-object/defaults");
var m=c("ac-object/create");var o=c("ac-object/extend");var n=c("./model/GalleryCollection");
var q=c("ac-event-emitter").EventEmitter;var a=c("ac-routes").Routes;var p=c("ac-state-machine").StateMachine;
var g=c("./states/factory");var k='Could not create gallery: "id" is missing';var i='Could not create gallery: "el" was not specified';
var d={duration:0.4,easing:"linear",endless:false,initial:0};function l(r){this.options=f(d,r||{});
this.id=this.options.id;if(!this.id){throw new Error(k)}this.model=this.options.model||new n();
this.model.setSelected(this.options.initial);this.stateMachine=new p({currentState:g.create("initialize",this)});
this.routes=r.routes||new a();this.routes.add(this.routes.createRoute(this.id+"/show/:id",this.show,this));
this.routes.add(this.routes.createRoute(this.id+"/previous",this.showPrevious,this));
this.routes.add(this.routes.createRoute(this.id+"/next",this.showNext,this));this.el=this.options.el;
if(!this.el){throw new Error(i)}this.easing=this.options.easing||this.easing;this.duration=this.options.duration||this.duration;
this.initialize(r);this.show(this.model.getSelected())}var j=l.prototype=m(q.prototype);
j.sendGalleryEvent=function(r){this.trigger(r.type,r.data)};j.easing="linear";j.duration=0.4;
j.getSlideAt=function(r){return this.model.at(r)};j.setDuration=function(r){this.duration=r
};j.getDuration=function(){return this.duration};j.setEasing=function(r){this.easing=r
};j.getEasing=function(){return this.easing};j.cancelDraw=function(){};j.initialize=function(){};
j.drawInitial=function(){};j.beforeDraw=function(){};j.draw=function(){};j.afterDraw=function(){};
j.destroy=function(){};j.drawBounceInProgress=function(){};j.drawBounceOutProgress=function(){};
j.drawProgress=function(){};j.drawSnap=function(){};j.drawResize=function(){};j.removeStyles=function(){};
j.resize=function(){};j.setProgress=function(r){this.stateMachine.handleInput("seek",{progress:r})
};j.snap=function(r){this.stateMachine.handleInput("pointerUp",{progress:r})};j.getSelected=function(){return this.model.getSelected()
};j.getItems=function(){return this.model.models};j.setEngaged=function(r){this.stateMachine.handleInput("engagementChange",{engaged:r})
};j.slideAt=function(){var r=this.model.at.apply(this.model,arguments);if(!r){return null
}return r};j.getPreviousState=function(){return this.stateMachine.previousState
};j.getCurrentState=function(){return this.stateMachine.currentState};j.isEndless=function(){return this.model.isEndless()
};j.indexOf=function(r){return this.model.indexOf(r)};j.count=function(){return this.model.count()
};j.getNext=function(){return this.model.getNext()};j.getPrevious=function(){return this.model.getPrevious()
};j.getSelectedIndex=function(){return this.model.indexOfSelected()};j.showNext=function(r){var s=this.model.getNext();
return this.show(s,r)};j.showPrevious=function(r){var s=this.model.getPrevious();
return this.show(s,r)};j.getLastIndex=function(){return this.model.count()-1};j.getLast=function(){return this.model.getLast()
};j.getFirst=function(){return this.model.at(0)};j.show=function(s,r){this.stateMachine.handleInput("onDraw",{query:s,options:r})
};j.clear=function(){this.stateMachine.handleInput("onClear")};j.dealloc=function(){this.stateMachine.handleInput("onDealloc")
};l.create=c("./factory/create");l.extend=function(u){var t=this;var s=function(){t.apply(this,arguments)
};var r=m(this.prototype);s.prototype=o(r,u);o(s,this);return s};b.exports=l},{"./factory/create":1267,"./model/GalleryCollection":1273,"./states/factory":1283,"ac-event-emitter":1206,"ac-object/create":1484,"ac-object/defaults":1485,"ac-object/extend":1486,"ac-routes":1256,"ac-state-machine":1261}],1265:[function(c,a,f){var k=c("./Gallery");
var j=c("ac-eclipse").Clip;var h=c("ac-dom-styles/setStyle");var i=c("ac-dom-metrics/getDimensions");
var m=c("ac-dom-events/addEventListener");var n=c("ac-dom-events/removeEventListener");
var g=c("./SlideGallery/feature-detect");var d=c("./model/SlideGalleryTransformData");
var l="Could not create SlideGallery: no `slideEl` option was specified";var b=k.extend({_bounceInClip:null,_bounceOutClip:null,_getBounceInClip:function(){if(this._bounceInClip!==null){return this._bounceInClip
}var p=this._getTransformStyles(this.getFirst(),this.getFirst(),{addDistance:i(this.options.el).width});
var o=this._getTransformStyles(this.getFirst(),this.getLast());this._bounceInClip=new j(this.options.slideEl,this.getDuration()*this.count(),p,{ease:"linear",propsFrom:o});
return this._bounceInClip},_getBounceOutClip:function(){if(this._bounceOutClip!==null){return this._bounceOutClip
}var p=this._getTransformStyles(this.getLast(),this.getFirst(),{addDistance:-i(this.options.el).width});
var o=this._getTransformStyles(this.getLast(),this.getFirst());this._bounceOutClip=new j(this.options.slideEl,this.getDuration(),p,{ease:"linear",propsFrom:o});
return this._bounceOutClip},_renderProgress:function(p,o){p.setProgress(o)},_clip:null,_toClip:function(){if(this._clip){return this._clip
}var p=this._getTransformStyles(this.getLast(),this.getFirst());var o=this._getTransformStyles(this.getFirst(),this.getLast());
this._clip=new j(this.options.slideEl,this.getDuration(),p,{ease:"linear",propsFrom:o});
return this._clip},initialize:function(o){if(!o.slideEl){throw new Error(l)}},drawBounceOutProgress:function(o){var p=this._getBounceOutClip();
this._renderProgress(p,o)},drawBounceInProgress:function(o){var p=this._getBounceInClip();
this._renderProgress(p,o)},drawProgress:function(o){var p=this._toClip();return this._renderProgress(p,o)
},drawInitial:function(o){this.drawSnap(o)},drawSnap:function(p,s,r){var t=this._toClip();
var o=this.indexOf(p);var q=o/(this.count()-1);t.setProgress(q)},removeStyles:function(){h(this.options.slideEl,{transition:null,transform:null})
},drawResize:function(o,q,p){this._clip=null;this._bounceInClip=null;this._bounceOutClip=null;
this.drawSnap(o,q,p)},_getTransitionProp:function(){if(g.canUseTransform()){return"transform"
}return"left"},_transitionEndString:"transitionend",_drawCSSTransition:function(p,r,q){var o=this._getTransitionProp();
return new Promise(function(u,t){var s=function(v){if(v.target===this.options.slideEl){h(this.options.slideEl,{transition:null});
n(this.options.slideEl,this._transitionEndString,s);u()}}.bind(this);m(this.options.slideEl,this._transitionEndString,s);
p.transition=o+" "+q+"s "+r;h(this.options.slideEl,p)}.bind(this))},_drawRAFTransition:function(o,q,p){return new Promise(function(t,s){var r=new j(this.options.slideEl,p,o,{easing:q,onComplete:t,inlineStyles:true});
r.play()}.bind(this))},_getTransformStyles:function(o,r,q){var p=new d(this,o,r,q);
p.calculate();p.setStyles(this.didCalculateStyles(p.styles,o,r));return p.renderStylesObject()
},didCalculateStyles:function(q,o,p){return q},draw:function(o,q,p){var s=p.duration||this.getDuration();
var t=p.easing||this.getEasing();var r=this._getTransformStyles(o,q);if(g.canUseCSSTransitions()){return this._drawCSSTransition(r,t,s)
}else{return this._drawRAFTransition(r,t,s)}},destroy:function(){this.removeStyles();
this._bounceInClip=null;this._bounceOutClip=null;this._clip=null}});a.exports=b
},{"./Gallery":1264,"./SlideGallery/feature-detect":1266,"./model/SlideGalleryTransformData":1275,"ac-dom-events/addEventListener":1024,"ac-dom-events/removeEventListener":1032,"ac-dom-metrics/getDimensions":1041,"ac-dom-styles/setStyle":1092,"ac-eclipse":1116}],1266:[function(c,d,b){var a=c("ac-feature/cssPropertyAvailable");
d.exports={canUseCSSTransitions:function(){return a("transition")},canUseTransform:function(){return a("transform")
}}},{"ac-feature/cssPropertyAvailable":193}],1267:[function(f,b,q){var d=f("./../model/GalleryCollection");
var g=f("ac-object/defaults");var l=f("ac-dom-nodes/isElement");var i=f("./../inputs/pointer");
var m=f("./../inputs/Trigger");var r=f("./../inputs/Keyboard");var s=f("./../inputs/Engagement");
var c=f("./../inputs/resize");var p=f("./../observer/analytics");var j=f("./../observer/trigger");
var o="Could not create gallery: triggerSelector should be a string";var h='Could not create gallery: no "model" was specified';
var n={keyboard:true,trigger:{events:["click"]}};function k(u,t){t=t||{};t.models=u.map(function(v){if(l(v)){return{id:v.id,element:v}
}return v});return new d(t)}b.exports=function a(y){y=y||{};y=g(n,y);if(!y.model){throw new Error(h)
}y.model=k(y.model,{endless:y.endless});var x=new this(y);var w={};var A={};w.resize=c(x,y.resize);
if(y.pointer){var v=y.pointer;v.element=v.el||x.el;w.pointer=i(x,v)}if(y.triggerSelector){if(typeof y.triggerSelector!=="string"){throw new Error(o)
}else{w.trigger=m(x,{selector:y.triggerSelector,events:y.trigger.events});A.trigger=j(x,{selector:y.triggerSelector})
}}if(y.keyboard===true){x.keyboard=r(x)}var u=y.engagementElement||x.el;w.engagement=s(x,{el:u});
var z=x.id;if(x.el&&x.el.getAttribute("data-analytics-id")){z=x.el.getAttribute("data-analytics-id")
}var t={galleryName:z};p(x,t);x.inputs=w;x.observers=A;return x}},{"./../inputs/Engagement":1268,"./../inputs/Keyboard":1269,"./../inputs/Trigger":1270,"./../inputs/pointer":1271,"./../inputs/resize":1272,"./../model/GalleryCollection":1273,"./../observer/analytics":1277,"./../observer/trigger":1278,"ac-dom-nodes/isElement":1073,"ac-object/defaults":1485}],1268:[function(c,d,b){var h=c("ac-element-tracker").ElementTracker;
var f=c("ac-object/create");var a={handleEngagementChange:function(i){this.stateMachine.handleInput("engagementChange",{engaged:i})
},isNotEngaged:function(){this.handleEngagementChange(false)},isEngaged:function(){this.handleEngagementChange(true)
},onEnterView:function(){this.isEngaged()},onExitView:function(){this.isNotEngaged()
}};d.exports=function g(i,j){j=j||{};var l=new h();var k=l.addElement(j.el);var m=f(a);
m.stateMachine=i.stateMachine;m.onEnterView=m.onEnterView.bind(m);m.onExitView=m.onExitView.bind(m);
l.refreshElementState(k);if(k.inView){m.onEnterView()}else{m.onExitView()}k.on("enterview",m.onEnterView);
k.on("exitview",m.onExitView);l.start();i.once("destroy",function(){k.off("enterview",m.onEnterView);
k.off("exitview",m.onExitView);l=null;k=null});return m}},{"ac-element-tracker":1203,"ac-object/create":1484}],1269:[function(f,g,d){var i=f("ac-dom-events/addEventListener");
var b=f("ac-dom-events/removeEventListener");var h=f("ac-object/create");var c={keyDown:function(j){this.stateMachine.handleInput("keydown",{interactionEvent:j})
}};g.exports=function a(l,m){m=m||{};var j=h(c);j.stateMachine=l.stateMachine;var k=function(n){j.keyDown(n)
};i(document,"keydown",k);l.once("destroy",function(){b(document,"keydown",k);k=null
});return j}},{"ac-dom-events/addEventListener":1024,"ac-dom-events/removeEventListener":1032,"ac-object/create":1484}],1270:[function(b,a,c){var j=b("ac-dom-events/addEventListener");
var l=b("ac-dom-events/removeEventListener");var h=b("ac-dom-events");var i=b("ac-object/create");
var k=b("ac-dom-traversal/matchesSelector");var f=b("ac-dom-traversal/ancestor");
var g={triggerInteraction:function(n){var m=h.target(n);var o=null;if(k(m,this.selector)){o=m
}else{if(k(m,this.selector+" *")){o=f(m,this.selector)}}if(o){h.preventDefault(n);
this.stateMachine.handleInput("trigger",{interactionEvent:n,target:o})}}};a.exports=function d(m,o){var n=i(g);
n.selector=o.selector;n.stateMachine=m.stateMachine;var p=function(q){n.triggerInteraction(q)
};o.events.forEach(function(q){j(document,q,p)});m.once("destroy",function(){o.events.forEach(function(q){l(document,q,p)
});n=null});return n}},{"ac-dom-events":1026,"ac-dom-events/addEventListener":1024,"ac-dom-events/removeEventListener":1032,"ac-dom-traversal/ancestor":1093,"ac-dom-traversal/matchesSelector":1096,"ac-object/create":1484}],1271:[function(c,d,b){var h=c("ac-gesture/PointerMove");
var f=c("ac-object/create");var i={onPointerMove:function(j){this.stateMachine.handleInput("pointerMove",{interactionEvent:j})
},onPointerDown:function(k){var j={interactionEvent:k,element:this.gesture.element};
this.stateMachine.handleInput("pointerDown",j)},onPointerUp:function(j){this.stateMachine.handleInput("pointerUp",{interactionEvent:j})
}};var g={interactions:[],handledDown:false,isMovingHorizontal:function(){if(this.interactions.length<4){return null
}var p=this.interactions[0];var l=this.interactions[this.interactions.length-1];
var q=l.pageX-p.pageX;var o=l.pageY-p.pageY;var k=Math.atan2(o,q);var n=k*(180/Math.PI);
var j=75;var m=Math.abs(n)<j||Math.abs(n)>(180-j);return m},onPointerMove:function(j){if(this.interactions.length<4){this.interactions.push(j);
return}if(this.isMovingHorizontal()){if(!this.handledDown){this.handledDown=true;
this.parent.onPointerDown(this.interactions[0])}this.parent.onPointerMove(j)}},onPointerDown:function(j){this.interactions.push(j)
},onPointerUp:function(j){if(this.handledDown===true){this.parent.onPointerUp(j)
}this.interactions=[];this.handledDown=false}};d.exports=function a(j,k){k=k||{};
var l=h.create(k.element,k);var n=f(i);n.stateMachine=j.stateMachine;n.gesture=l;
var m=f(g);m.parent=n;l.on("start",function(o){m.onPointerDown(o)});l.on("move",function(o){m.onPointerMove(o)
});l.on("end",function(o){m.onPointerUp(o)});l.on("cancel",function(o){m.onPointerUp(o)
});l.activate();j.once("destroy",function(){l.off();l._removeAllListeners();l.destroy();
l=null});return m}},{"ac-gesture/PointerMove":1210,"ac-object/create":1484}],1272:[function(d,f,c){var b=d("ac-function/debounce");
var h=d("ac-dom-events/addEventListener");var a=d("ac-dom-events/removeEventListener");
var g=d("ac-object/create");var i={resize:function(j){this.stateMachine.handleInput("resize",j)
}};f.exports=function(k,m){m=m||{};if(typeof m.debounceTimeout==="number"){m.debounceTimeout=m.debounceTimeout
}else{m.debounceTimeout=300}var l=g(i);l.stateMachine=k.stateMachine;var n=b(function(o){l.resize(o)
},m.debounceTimeout);h(window,"resize",n);function j(){a(window,"resize",n);n=null
}k.once("destroy",j);return l}},{"ac-dom-events/addEventListener":1024,"ac-dom-events/removeEventListener":1032,"ac-function/debounce":1208,"ac-object/create":1484}],1273:[function(c,d,b){var g=c("ac-mvc-collection").Collection;
var i=c("ac-mvc-model").Model;var f=c("ac-object/create");function a(){g.apply(this,arguments);
this._selected=null}var h=a.prototype=f(g.prototype);h.ModelType=i;h.query=function(k){var j;
if(typeof k==="number"){j=this.at(k)}else{if(typeof k==="string"){j=this.get(k)
}else{if(this.indexOf(k)!==-1){j=k}}}return j};h.isEndless=function(){return !!this.options.endless
};h.getPrevious=function(){var j=this.indexOf(this._selected)-1;var k;if(this.isEndless()===true&&j<0){j=this.models.length-1
}k=this.models[j];if(k===undefined){k=null}return k};h.getNext=function(){var j=this.indexOf(this._selected)+1;
var k;if(this.isEndless()===true&&j===this.models.length){j=0}k=this.at(j);if(k===undefined){k=null
}return k};h.getFirst=function(){return this.at(0)};h.getLast=function(){return this.at(this.models.length-1)
};h.count=function(){return this.models.length};h.setSelected=function(j){this._selected=this.query(j)
};h.getSelected=function(){return this._selected};h.indexOfSelected=function(){return this.indexOf(this._selected)
};d.exports=a},{"ac-mvc-collection":1234,"ac-mvc-model":1251,"ac-object/create":1484}],1274:[function(c,d,b){var g="Could not trigger event: Event data is invalid";
function f(h,i){i=i||{};this.data=i||{};this.type=h}function a(h){if(!h||!h.incoming||!h.outgoing){throw new TypeError(g)
}}f.create=function(h,i){return new f(h,i)};f.createWillShowEvent=function(h){a(h);
return new f("willShow",h)};f.createDidShowEvent=function(h){a(h);return new f("didShow",h)
};d.exports=f},{}],1275:[function(d,f,c){var h=d("./../SlideGallery/feature-detect");
var b=d("ac-dom-metrics/getDimensions");function a(j,i,l,k){this.gallery=j;this.incoming=i;
this.outgoing=l;this.options=k||{};this.styles={}}var g=a.prototype;g._getTranslateXDistance=function(j){var k=this.gallery.indexOf(j);
var m=0;for(var l=0;l<k;l+=1){m+=b(this.gallery.slideAt(l).get("element")).width
}return -m};g._convertTranslateXToLeftIfNoTransformSupport=function(){if(!h.canUseTransform()){this.styles.left=this.styles.transform.translateX;
this.styles.transform=undefined}};g.calculate=function(){var i=this._getTranslateXDistance(this.incoming);
this.styles=this._buildTransformObject(i)};g.setStyles=function(i){this.styles=i
};g._buildTransformObject=function(i){return{transform:{translateX:i,translateZ:0}}
};g._addUnits=function(){if(!/px/.test(this.styles.transform.translateX)){this.styles.transform.translateX+="px"
}};g.renderStylesObject=function(){if(typeof this.options.addDistance==="number"){this.styles.transform.translateX=parseInt(this.styles.transform.translateX)+this.options.addDistance
}if(this.options.invert===true){this.styles.transform.translateX=-(parseInt(this.styles.transform.translateX))
}this._addUnits();this._convertTranslateXToLeftIfNoTransformSupport();return this.styles
};f.exports=a},{"./../SlideGallery/feature-detect":1266,"ac-dom-metrics/getDimensions":1041}],1276:[function(b,c,a){function f(g){this.options=g||{};
this._interactions=[];this._particle=this.options.particle;this.pixelDistance=this.options.pixelDistance;
this.distance=this.options.distance}var d=f.prototype;d.destroy=function(){this._particle=null
};d._updateFromInteraction=function(){if(this._interactions.length<2){return}var l=this._interactions[0];
var k=this._interactions[1];var m=-(k.pageX-l.pageX);var h=this.pixelDistance;var j=this.distance;
var g=m/h;var i=(j*g);this._particle.velocity={x:i,y:i};this._particle.position.x+=this._particle.velocity.x;
this._particle.position.y+=this._particle.velocity.y;this._removeInteraction()};
d._onUpdate=function(g){this._updateFromInteraction()};d._removeInteraction=function(){this._interactions.shift()
};d.addInteraction=function(g){if(this._interactions.length===2){this._removeInteraction()
}this._interactions.push(g);this._onUpdate()};d.onPointerDown=function(g){this.addInteraction(g)
};d.onPointerMove=function(g){g.preventDefault();this.addInteraction(g)};d.onPointerUp=function(g){this._interactions=[]
};d.isMovingHorizontally=function(){if(this._interactions.length<4){return null
}var k=this._interactions[0];var h=this._interactions[this._interactions.length-1];
var l=h.x-k.x;var j=h.y-k.y;var g=Math.atan2(j,l);var i=g*(180/Math.PI);return(i<15)
};c.exports=f},{}],1277:[function(c,d,b){var f;try{f=c("ac-analytics").observer.Gallery
}catch(g){}d.exports=function a(i,h){if(!f){return}var j=new f(i,h);i.once("destroy",function(){if(j.gallery){j.removeListener()
}j=null})}},{"ac-analytics":"ac-analytics"}],1278:[function(d,c,f){var j=d("ac-object/create");
var b=d("ac-dom-traversal/querySelectorAll");var i=d("ac-classlist/add");var g=d("ac-classlist/remove");
var a="current";var k="disabled";var h={paintPaddleNavs:function(l,m){if(this.gallery.isEndless()){return
}if(l===this.gallery.getFirst()){this.disablePreviousPaddles()}else{if(m&&m===this.gallery.getFirst()){this.enablePreviousPaddles()
}}if(l===this.gallery.getLast()){this.disableNextPaddles()}else{if(m&&m===this.gallery.getLast()){this.enableNextPaddles()
}}},generateFullSelector:function(m,l){return this.selector+'[href="#'+m+"/show/"+l+'"]'
},addClassNameToElements:function(m,l){m.forEach(function(n){i(n,l)})},removeClassNameFromElements:function(m,l){m.forEach(function(n){g(n,l)
})},getElementsPointingToSlide:function(m){var l=this.generateFullSelector(this.gallery.id,m.id);
return b(l)},getNextPaddleNavs:function(){var l=this.selector+'[href="#'+this.gallery.id+'/next"]';
return b(l)},getPreviousPaddleNavs:function(){var l=this.selector+'[href="#'+this.gallery.id+'/previous"]';
return b(l)},disableNextPaddles:function(){var l=this.getNextPaddleNavs();this.addClassNameToElements(l,k)
},enableNextPaddles:function(){var l=this.getNextPaddleNavs();this.removeClassNameFromElements(l,k)
},disablePreviousPaddles:function(){var l=this.getPreviousPaddleNavs();this.addClassNameToElements(l,k)
},enablePreviousPaddles:function(){var l=this.getPreviousPaddleNavs();this.removeClassNameFromElements(l,k)
},onWillShow:function(l){var m=this.getElementsPointingToSlide(l.incoming);this.addClassNameToElements(m,a);
var n=this.getElementsPointingToSlide(l.outgoing);this.removeClassNameFromElements(n,a);
if(this.gallery.isEndless()){return}if(l.incoming===this.gallery.getFirst()){this.disablePreviousPaddles()
}else{if(l.outgoing===this.gallery.getFirst()){this.enablePreviousPaddles()}}if(l.incoming===this.gallery.getLast()){this.disableNextPaddles()
}else{if(l.outgoing===this.gallery.getLast()){this.enableNextPaddles()}}this.paintPaddleNavs(l.incoming,l.outgoing)
},onReady:function(){var m=this.gallery.getSelected();var l=b(this.selector);this.removeClassNameFromElements(l,a);
var n=this.getElementsPointingToSlide(m);this.addClassNameToElements(n,a);this.paintPaddleNavs(m)
}};c.exports=function(l,n){n=n||{};var m=j(h);m.selector=n.selector;m.gallery=l;
m.onWillShow=m.onWillShow.bind(m);m.onReady=m.onReady.bind(m);l.on("willShow",m.onWillShow);
l.once("ready",m.onReady);l.once("destroy",function(){l.off("willShow",m.onWillShow);
l.off("ready",m.onReady);var o=m.getElementsPointingToSlide(l.getSelected());m.removeClassNameFromElements(o,a);
m=null});return m}},{"ac-classlist/add":1,"ac-classlist/remove":9,"ac-dom-traversal/querySelectorAll":1097,"ac-object/create":1484}],1279:[function(c,d,b){var a=c("ac-state-machine").State;
var f=c("ac-object/create");var i=c("./factory");var h=function(j,k){a.apply(this,arguments);
this.gallery=j;this.options=k||{}};var g=h.prototype=f(a.prototype);g.onDealloc=function(k,j){k.changeState(i.create("dealloc",this.gallery),j)
};d.exports=h},{"./factory":1283,"ac-object/create":1484,"ac-state-machine":1261}],1280:[function(b,c,a){var g=b("./GalleryState");
var d=b("ac-object/create");var h=function(){g.apply(this,arguments)};var f=h.prototype=d(g.prototype);
f.name="dealloc";f.onEnter=function(j,i){this.gallery.destroy();this.gallery.trigger("destroy");
this.gallery.off()};c.exports=h},{"./GalleryState":1279,"ac-object/create":1484}],1281:[function(b,a,f){var d=b("./GalleryState");
var h=b("ac-object/create");var j=b("./../model/UserDrag");var c=b("./factory");
function i(){d.apply(this,arguments);this.index=(typeof this.options.startIndex==="number")?this.options.startIndex:this.gallery.getSelectedIndex();
this.count=this.gallery.count();this.stops=this._generateStops();this.particle=this.options.particle||this._createParticle();
this.distance=this.stops[1]}var g=i.prototype=h(d.prototype);g.name="dragging";
g._createParticle=function(){return{position:{x:this.stops[this.index],y:this.stops[this.index]},mass:0.5}
};g._generateStops=function(){var m=this.count-1;var l=[];var k=0;while(k<=m){l.push(k/m);
k+=1}return l};g.onEnter=function(l,k){if(l.previousState.name!=="seeking"){this.userDragModel=new j({pixelDistance:k.element.offsetWidth,startIndex:this.startIndex,count:this.count,particle:this.particle,distance:this.distance});
this.userDragModel.onPointerDown(k.interactionEvent);l.changeState(c.create("seeking",this.gallery),{progress:this.particle.position.x})
}};g.onExit=function(l,k){if(l.currentState.name!=="seeking"){this.userDragModel.destroy();
this.userDragModel=null;this.boundOnPointerComplete=null;this.gallery=null}};g.pointerMove=function(m,l){this.userDragModel.onPointerMove(l.interactionEvent);
var k=this.particle.position;m.changeState(c.create("seeking",this.gallery),{progress:k.x})
};g.getNextPosition=function(){var k=this.index;if(this.particle.velocity.x>0){k+=1;
if(k>=this.stops.length){k=this.stops.length-1}}else{k-=1;if(k<0){k=0}}return this.stops[k]
};g.getNextIndex=function(){return this.stops.indexOf(this.getNextPosition())};
g.pointerUp=function(l,k){this.userDragModel.onPointerUp(k.interactionEvent);if(this.gallery.canSpring!==false){l.changeState(c.create("springing",this.gallery,{particle:this.particle,equilibrium:this.getNextPosition(),index:this.getNextIndex(),interactionEvent:k.interactionEvent}),k)
}else{k=k||{};k.incoming=this.gallery.slideAt(this.getNextIndex());k.outgoing=this.gallery.getSelected();
l.changeState(c.create("drawing",this.gallery),k)}};a.exports=i},{"./../model/UserDrag":1276,"./GalleryState":1279,"./factory":1283,"ac-object/create":1484}],1282:[function(c,b,h){var a=c("ac-console");
var j=c("ac-object/create");var f=c("./GalleryState");var d=c("./factory");var g=c("./../model/GalleryEvent");
var k=function(){f.apply(this,arguments);this._nextState="idle"};var i=k.prototype=j(f.prototype);
i.name="drawing";i.engagementChange=function(m,l){this._nextState="not_engaged"
};i.pointerMove=function(m,l){l.interactionEvent.preventDefault()};i.onDealloc=function(m,l){this._nextState="dealloc"
};i.onEnter=function(n,o){var t=this.gallery;var m=o.incoming;var p=o.outgoing;
var s=o.options||{};var l=s.interactionEvent||t.interactionEvent||o.interactionEvent;
var q={incoming:m,outgoing:p,interactionEvent:l,options:s};var r=Promise.resolve();
if(m!==p){t.sendGalleryEvent(g.createWillShowEvent(q));r=r.then(t.beforeDraw.bind(t,m,p,s)).then(t.draw.bind(t,m,p,s)).then(t.afterDraw.bind(t,m,p,s))
}else{this._nextState="idle"}return r.then(function(){n.changeState(d.create(this._nextState,t),{incoming:m,outgoing:p,event:q})
}.bind(this))["catch"](function(u){a.log(u)})};i.onExit=function(n,m){var l=this.gallery;
if(n.currentState.name!=="dealloc"&&l.getSelected()!==m.incoming){l.model.setSelected(m.incoming);
l.sendGalleryEvent(g.createDidShowEvent(m.event))}this._nextState=null};b.exports=k
},{"./../model/GalleryEvent":1274,"./GalleryState":1279,"./factory":1283,"ac-console":1022,"ac-object/create":1484}],1283:[function(c,d,b){var a;
d.exports={create:function f(i,g,h){var j=a[i];if(!j){throw new Error('Could not create state: state "'+i+'" not found')
}return new j(g,h)}};a={initialize:c("./initialize"),idle:c("./idle"),not_engaged:c("./not_engaged"),seeking:c("./seeking"),resize:c("./resize"),dealloc:c("./dealloc"),drawing:c("./drawing"),dragging:c("./dragging"),springing:c("./springing")}
},{"./dealloc":1280,"./dragging":1281,"./drawing":1282,"./idle":1284,"./initialize":1285,"./not_engaged":1286,"./resize":1287,"./seeking":1288,"./springing":1289}],1284:[function(b,c,a){var g=b("./GalleryState");
var d=b("ac-object/create");var h=b("./factory");var i=function(){g.apply(this,arguments)
};var f=i.prototype=d(g.prototype);f.name="idle";f.engagementChange=function(k,j){if(j.engaged===false){k.changeState(h.create("not_engaged",this.gallery),j)
}};f.seek=function(k,j){k.changeState(h.create("seeking",this.gallery),j)};f.trigger=function(l,j){var k=j.target;
this.gallery.interactionEvent=j.interactionEvent;this.gallery.routes.match(k.getAttribute("href"))
};f.keydown=function(m,l){var k=l.interactionEvent;var j=("which" in k)?k.which:k.keyCode;
if(j===37){this.gallery.showPrevious(l)}else{if(j===39){this.gallery.showNext(l)
}}};f.resize=function(k,j){k.changeState(h.create("resize",this.gallery),j)};f.onClear=function(){this.gallery.removeStyles()
};f.pointerDown=function(k,j){k.changeState(h.create("dragging",this.gallery),j)
};f.seek=function(k,j){k.changeState(h.create("seeking",this.gallery),j)};f.onDraw=function(n,m){var j=this.gallery.model.query(m.query);
var l=this.gallery.model.getSelected();var k=m.options||{};if(!j||j===l){return
}n.changeState(h.create("drawing",this.gallery),{incoming:j,outgoing:l,options:k})
};c.exports=i},{"./GalleryState":1279,"./factory":1283,"ac-object/create":1484}],1285:[function(b,a,g){var d=b("./GalleryState");
var i=b("ac-object/create");var f=b("./../model/GalleryEvent");var c=b("./factory");
function j(){d.apply(this,arguments);this._engaged=true}var h=j.prototype=i(d.prototype);
h.name="initialize";h.engagementChange=function(l,k){this._engaged=k.engaged};h.onDraw=function(n,l){var k=this.gallery.model.query(l.query);
var m=this.gallery.drawInitial(k);return Promise.resolve().then(m).then(function(){var o="idle";
if(this._engaged===false){o="not_engaged"}n.changeState(c.create(o,this.gallery))
}.bind(this))};h.onExit=function(m,l){var k=f.create("ready",{incoming:this.gallery.getSelected()});
this.gallery.sendGalleryEvent(k);this._engaged=null};a.exports=j},{"./../model/GalleryEvent":1274,"./GalleryState":1279,"./factory":1283,"ac-object/create":1484}],1286:[function(c,d,b){var h=c("./GalleryState");
var f=c("ac-object/create");var i=c("./factory");function a(){h.apply(this,arguments)
}var g=a.prototype=f(h.prototype);g.name="not_engaged";g.resize=function(k,j){k.changeState(i.create("resize",this.gallery),j)
};g.engagementChange=function(k,j){if(j.engaged===true){k.changeState(i.create("idle",this.gallery))
}};d.exports=a},{"./GalleryState":1279,"./factory":1283,"ac-object/create":1484}],1287:[function(c,d,b){var i=c("./GalleryState");
var g=c("./../model/GalleryEvent");var f=c("ac-object/create");var a=function(){i.apply(this,arguments)
};var h=a.prototype=f(i.prototype);h.name="resize";h.onEnter=function(l,k){this.gallery.sendGalleryEvent(g.create("resizing"));
var j=this.gallery.getSelected();Promise.resolve().then(this.gallery.drawResize.bind(this.gallery,j)).then(function(){l.changeState(l.previousState,k)
}.bind(this))};h.onExit=function(k,j){this.gallery.sendGalleryEvent(g.create("resized"))
};d.exports=a},{"./../model/GalleryEvent":1274,"./GalleryState":1279,"ac-object/create":1484}],1288:[function(c,d,b){var i=c("./GalleryState");
var g=c("ac-object/create");var f=c("./../model/GalleryEvent");function a(){i.apply(this,arguments)
}var h=a.prototype=g(i.prototype);h.name="seeking";h.drawProgress=function(j){if(j<0){return this.gallery.drawBounceInProgress(Math.abs(j))
}else{if(j>1){return this.gallery.drawBounceOutProgress(j-1)}else{return this.gallery.drawProgress(j)
}}};h.onEnter=function(l,j){var k={progress:j.progress};this.gallery.sendGalleryEvent(f.create("willseek",k));
this.drawProgress(j.progress);this.gallery.sendGalleryEvent(f.create("didseek",k));
l.changeState(l.previousState,j)};h.onExit=function(k,j){this.gallery=null};d.exports=a
},{"./../model/GalleryEvent":1274,"./GalleryState":1279,"ac-object/create":1484}],1289:[function(d,b,h){var g=d("./GalleryState");
var j=d("ac-object/create");var f=d("./factory");var a=d("ac-clock").Clock;var c=d("ac-physics").spring;
function k(){g.apply(this,arguments);this.particle=this.options.particle;this.equilibrium=this.options.equilibrium;
this.index=this.options.index;this.spring=c.create(this.particle,this.equilibrium);
this.spring.stiffness=-60;this.spring.damping=-10;this.interactionEvent=null;this.clock=new a();
this.clock.start();this._clockUpdate=this._clockUpdate.bind(this);this._clockDraw=this._clockDraw.bind(this);
this.clock.on("update",this._clockUpdate);this.clock.on("draw",this._clockDraw)
}var i=k.prototype=j(g.prototype);i.name="springing";i.onEnter=function(m,l){if(m.previousState.name!=="seeking"){if(l.interactionEvent.originalEvent){this.interactionEvent=l.interactionEvent.originalEvent
}else{this.interactionEvent=l.interactionEvent}this._setLastPosition();this.fsm=m
}};i.onExit=function(m,l){if(m.currentState.name!=="seeking"){this.clock.stop();
this.clock.off();this.equilibrium=null;this.index=null;this.fsm=null;this.particle=null;
this.spring=null;this.clock=null;this.lastPosition=null;this.interactionEvent=null
}};i.pointerDown=function(m,l){m.changeState(f.create("dragging",this.gallery,{particle:this.particle,startIndex:this.index}),l)
};i._clockUpdate=function(l){var m=Math.abs(this.particle.position.x-this.spring.equilibrium);
if(l.fps===0){return}if(m>0.0005){this.spring.update(l)}else{this.particle.position.x=this.spring.equilibrium
}};i._clockDraw=function(l){var m;if(this._shouldDraw()){m=Math.abs(this.particle.position.x-this.spring.equilibrium);
this._setLastPosition();if(m!==0){this.fsm.changeState(f.create("seeking",this.gallery),{progress:this.particle.position.x})
}else{this.fsm.changeState(f.create("drawing",this.gallery),{incoming:this.gallery.slideAt(this.index),outgoing:this.gallery.getSelected(),options:{interactionEvent:this.interactionEvent}})
}}};i._setLastPosition=function(){this.lastPosition={x:this.particle.position.x,y:this.particle.position.y}
};i._shouldDraw=function(){if(this.lastPosition.x===this.particle.position.x&&this.lastPosition.y===this.particle.position.y){return false
}return true};b.exports=k},{"./GalleryState":1279,"./factory":1283,"ac-clock":17,"ac-object/create":1484,"ac-physics":1254}],1290:[function(b,c,a){arguments[4][206][0].apply(a,arguments)
},{"./ac-browser/BrowserData":1291,"./ac-browser/IE":1292,dup:206}],1291:[function(b,c,a){arguments[4][207][0].apply(a,arguments)
},{"./data":1293,dup:207}],1292:[function(b,c,a){arguments[4][208][0].apply(a,arguments)
},{dup:208}],1293:[function(b,c,a){arguments[4][139][0].apply(a,arguments)},{dup:139}],1294:[function(b,c,a){arguments[4][21][0].apply(a,arguments)
},{"./shared/getEventType":1303,"./utils/addEventListener":1307,dup:21}],1295:[function(b,c,a){arguments[4][22][0].apply(a,arguments)
},{"./shared/getEventType":1303,"./utils/dispatchEvent":1308,dup:22}],1296:[function(b,c,a){arguments[4][23][0].apply(a,arguments)
},{"./addEventListener":1294,"./dispatchEvent":1295,"./preventDefault":1301,"./removeEventListener":1302,"./stop":1304,"./stopPropagation":1305,"./target":1306,dup:23}],1297:[function(b,c,a){arguments[4][24][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":1298,"./shared/prefixHelper":1299,"./utils/eventTypeAvailable":1300,dup:24}],1298:[function(b,c,a){arguments[4][25][0].apply(a,arguments)
},{dup:25}],1299:[function(b,c,a){arguments[4][26][0].apply(a,arguments)},{dup:26}],1300:[function(b,c,a){arguments[4][27][0].apply(a,arguments)
},{dup:27}],1301:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],1302:[function(b,c,a){arguments[4][29][0].apply(a,arguments)
},{"./shared/getEventType":1303,"./utils/removeEventListener":1309,dup:29}],1303:[function(b,c,a){arguments[4][30][0].apply(a,arguments)
},{"ac-prefixer/getEventType":1297,dup:30}],1304:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{"./preventDefault":1301,"./stopPropagation":1305,dup:31}],1305:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{dup:32}],1306:[function(b,c,a){arguments[4][33][0].apply(a,arguments)},{dup:33}],1307:[function(b,c,a){arguments[4][34][0].apply(a,arguments)
},{dup:34}],1308:[function(b,c,a){arguments[4][35][0].apply(a,arguments)},{"ac-polyfills/CustomEvent":1500,dup:35}],1309:[function(b,c,a){arguments[4][36][0].apply(a,arguments)
},{dup:36}],1310:[function(b,c,a){arguments[4][840][0].apply(a,arguments)},{"./utils/getBoundingClientRect":1321,dup:840}],1311:[function(b,c,a){arguments[4][841][0].apply(a,arguments)
},{"./utils/getBoundingClientRect":1321,dup:841}],1312:[function(b,c,a){arguments[4][842][0].apply(a,arguments)
},{"./getDimensions":1311,"./getScrollX":1316,"./getScrollY":1317,"./utils/getBoundingClientRect":1321,dup:842}],1313:[function(b,c,a){arguments[4][843][0].apply(a,arguments)
},{"./getDimensions":1311,"./getPixelsInViewport":1314,dup:843}],1314:[function(b,c,a){arguments[4][844][0].apply(a,arguments)
},{"./getViewportPosition":1318,dup:844}],1315:[function(b,c,a){arguments[4][845][0].apply(a,arguments)
},{"./getDimensions":1311,"./utils/getBoundingClientRect":1321,dup:845}],1316:[function(b,c,a){arguments[4][846][0].apply(a,arguments)
},{dup:846}],1317:[function(b,c,a){arguments[4][847][0].apply(a,arguments)},{dup:847}],1318:[function(b,c,a){arguments[4][848][0].apply(a,arguments)
},{"./getPagePosition":1312,"./getScrollX":1316,"./getScrollY":1317,"./utils/getBoundingClientRect":1321,dup:848}],1319:[function(b,c,a){arguments[4][849][0].apply(a,arguments)
},{"./getContentDimensions":1310,"./getDimensions":1311,"./getPagePosition":1312,"./getPercentInViewport":1313,"./getPixelsInViewport":1314,"./getPosition":1315,"./getScrollX":1316,"./getScrollY":1317,"./getViewportPosition":1318,"./isInViewport":1320,dup:849}],1320:[function(b,c,a){arguments[4][850][0].apply(a,arguments)
},{"./getPercentInViewport":1313,"./getPixelsInViewport":1314,dup:850}],1321:[function(b,c,a){arguments[4][851][0].apply(a,arguments)
},{dup:851}],1322:[function(b,c,a){arguments[4][78][0].apply(a,arguments)},{"./internal/validate":1329,"./matchesSelector":1331,"ac-dom-nodes/isElement":1342,dup:78}],1323:[function(b,c,a){arguments[4][79][0].apply(a,arguments)
},{"./internal/validate":1329,"./matchesSelector":1331,"ac-dom-nodes/isElement":1342,dup:79}],1324:[function(b,c,a){arguments[4][80][0].apply(a,arguments)
},{"./filterBySelector":1325,"./internal/validate":1329,"ac-dom-nodes/filterByNodeType":1339,dup:80}],1325:[function(b,c,a){arguments[4][81][0].apply(a,arguments)
},{"./internal/validate":1329,"./matchesSelector":1331,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:81}],1326:[function(b,c,a){arguments[4][82][0].apply(a,arguments)
},{"./children":1324,"./internal/validate":1329,dup:82}],1327:[function(b,c,a){arguments[4][83][0].apply(a,arguments)
},{"./ancestor":1322,"./ancestors":1323,"./children":1324,"./filterBySelector":1325,"./firstChild":1326,"./lastChild":1330,"./matchesSelector":1331,"./nextSibling":1332,"./nextSiblings":1333,"./previousSibling":1344,"./previousSiblings":1345,"./querySelector":1346,"./querySelectorAll":1347,"./siblings":1350,dup:83}],1328:[function(b,c,a){arguments[4][84][0].apply(a,arguments)
},{dup:84}],1329:[function(b,c,a){arguments[4][85][0].apply(a,arguments)},{"ac-dom-nodes/COMMENT_NODE":1334,"ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":1335,"ac-dom-nodes/DOCUMENT_NODE":1336,"ac-dom-nodes/ELEMENT_NODE":1337,"ac-dom-nodes/TEXT_NODE":1338,"ac-dom-nodes/isNode":1343,"ac-polyfills/Array/prototype.indexOf":1497,dup:85}],1330:[function(b,c,a){arguments[4][86][0].apply(a,arguments)
},{"./children":1324,"./internal/validate":1329,dup:86}],1331:[function(b,c,a){arguments[4][87][0].apply(a,arguments)
},{"./internal/nativeMatches":1328,"./internal/validate":1329,"./vendor/sizzle/sizzle":1351,"ac-dom-nodes/isElement":1342,dup:87}],1332:[function(b,c,a){arguments[4][88][0].apply(a,arguments)
},{"./internal/validate":1329,"./matchesSelector":1331,"ac-dom-nodes/isElement":1342,dup:88}],1333:[function(b,c,a){arguments[4][89][0].apply(a,arguments)
},{"./internal/validate":1329,"./matchesSelector":1331,"ac-dom-nodes/isElement":1342,dup:89}],1334:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{dup:42}],1335:[function(b,c,a){arguments[4][43][0].apply(a,arguments)},{dup:43}],1336:[function(b,c,a){arguments[4][44][0].apply(a,arguments)
},{dup:44}],1337:[function(b,c,a){arguments[4][46][0].apply(a,arguments)},{dup:46}],1338:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],1339:[function(b,c,a){arguments[4][49][0].apply(a,arguments)},{"./ELEMENT_NODE":1337,"./internal/isNodeType":1340,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:49}],1340:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"../isNode":1343,dup:57}],1341:[function(b,c,a){arguments[4][61][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":1335,"./internal/isNodeType":1340,dup:61}],1342:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{"./ELEMENT_NODE":1337,"./internal/isNodeType":1340,dup:63}],1343:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],1344:[function(b,c,a){arguments[4][90][0].apply(a,arguments)},{"./internal/validate":1329,"./matchesSelector":1331,"ac-dom-nodes/isElement":1342,dup:90}],1345:[function(b,c,a){arguments[4][91][0].apply(a,arguments)
},{"./internal/validate":1329,"./matchesSelector":1331,"ac-dom-nodes/isElement":1342,dup:91}],1346:[function(b,c,a){arguments[4][92][0].apply(a,arguments)
},{"./internal/validate":1329,"./shims/querySelector":1348,dup:92}],1347:[function(b,c,a){arguments[4][93][0].apply(a,arguments)
},{"./internal/validate":1329,"./shims/querySelectorAll":1349,"ac-polyfills/Array/prototype.slice":1498,dup:93}],1348:[function(b,c,a){arguments[4][94][0].apply(a,arguments)
},{"./querySelectorAll":1349,dup:94}],1349:[function(b,c,a){arguments[4][95][0].apply(a,arguments)
},{"../children":1324,"../vendor/sizzle/sizzle":1351,"ac-dom-nodes/isDocumentFragment":1341,"ac-polyfills/Array/prototype.forEach":1496,dup:95}],1350:[function(b,c,a){arguments[4][96][0].apply(a,arguments)
},{"./children":1324,"./internal/validate":1329,dup:96}],1351:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],1352:[function(b,c,a){arguments[4][11][0].apply(a,arguments)},{"./ac-event-emitter/EventEmitter":1353,dup:11}],1353:[function(b,c,a){arguments[4][12][0].apply(a,arguments)
},{dup:12}],1354:[function(b,c,a){arguments[4][69][0].apply(a,arguments)},{"./ac-prefixer/Prefixer":1355,dup:69}],1355:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":1356,dup:70}],1356:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],1357:[function(b,c,a){arguments[4][287][0].apply(a,arguments)},{"./ac-feature/canvasAvailable":1358,"./ac-feature/continuousScrollEventsAvailable":1359,"./ac-feature/cookiesAvailable":1360,"./ac-feature/cssLinearGradientAvailable":1361,"./ac-feature/cssPropertyAvailable":1362,"./ac-feature/helpers/memoize":1364,"./ac-feature/isDesktop":1365,"./ac-feature/isHandheld":1366,"./ac-feature/isRetina":1367,"./ac-feature/isTablet":1368,"./ac-feature/localStorageAvailable":1369,"./ac-feature/mediaElementsAvailable":1370,"./ac-feature/sessionStorageAvailable":1371,"./ac-feature/svgAvailable":1372,"./ac-feature/threeDTransformsAvailable":1373,"./ac-feature/touchAvailable":1374,"./ac-feature/webGLAvailable":1375,dup:287}],1358:[function(b,c,a){arguments[4][288][0].apply(a,arguments)
},{"./helpers/globals":1363,dup:288}],1359:[function(b,c,a){arguments[4][289][0].apply(a,arguments)
},{"./touchAvailable":1374,"ac-browser":1290,dup:289}],1360:[function(b,c,a){arguments[4][290][0].apply(a,arguments)
},{"./helpers/globals":1363,dup:290}],1361:[function(b,c,a){arguments[4][291][0].apply(a,arguments)
},{"./cssPropertyAvailable":1362,dup:291}],1362:[function(b,c,a){arguments[4][292][0].apply(a,arguments)
},{"ac-prefixer":1354,dup:292}],1363:[function(b,c,a){arguments[4][197][0].apply(a,arguments)
},{dup:197}],1364:[function(b,c,a){arguments[4][294][0].apply(a,arguments)},{dup:294}],1365:[function(b,c,a){arguments[4][295][0].apply(a,arguments)
},{"./helpers/globals":1363,"./touchAvailable":1374,dup:295}],1366:[function(b,c,a){arguments[4][296][0].apply(a,arguments)
},{"./isDesktop":1365,"./isTablet":1368,dup:296}],1367:[function(b,c,a){arguments[4][297][0].apply(a,arguments)
},{"./helpers/globals":1363,dup:297}],1368:[function(b,c,a){arguments[4][298][0].apply(a,arguments)
},{"./helpers/globals":1363,"./isDesktop":1365,dup:298}],1369:[function(b,c,a){arguments[4][299][0].apply(a,arguments)
},{"./helpers/globals":1363,dup:299}],1370:[function(b,c,a){arguments[4][300][0].apply(a,arguments)
},{"./helpers/globals":1363,dup:300}],1371:[function(b,c,a){arguments[4][301][0].apply(a,arguments)
},{"./helpers/globals":1363,dup:301}],1372:[function(b,c,a){arguments[4][302][0].apply(a,arguments)
},{"./helpers/globals":1363,dup:302}],1373:[function(b,c,a){arguments[4][303][0].apply(a,arguments)
},{"./cssPropertyAvailable":1362,dup:303}],1374:[function(b,c,a){arguments[4][304][0].apply(a,arguments)
},{"./helpers/globals":1363,dup:304}],1375:[function(b,c,a){arguments[4][305][0].apply(a,arguments)
},{"./helpers/globals":1363,dup:305}],1376:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{dup:42}],1377:[function(b,c,a){arguments[4][43][0].apply(a,arguments)},{dup:43}],1378:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{dup:46}],1379:[function(b,c,a){arguments[4][47][0].apply(a,arguments)},{dup:47}],1380:[function(b,c,a){arguments[4][53][0].apply(a,arguments)
},{"./internal/validate":1383,dup:53}],1381:[function(b,c,a){arguments[4][54][0].apply(a,arguments)
},{"./internal/validate":1383,dup:54}],1382:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"../isNode":1384,dup:57}],1383:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{"../COMMENT_NODE":1376,"../DOCUMENT_FRAGMENT_NODE":1377,"../ELEMENT_NODE":1378,"../TEXT_NODE":1379,"./isNodeType":1382,dup:58}],1384:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],1385:[function(b,c,a){arguments[4][1079][0].apply(a,arguments)},{"ac-prefixer/getStyleProperty":1388,"ac-prefixer/stripPrefixes":1394,dup:1079}],1386:[function(b,c,a){arguments[4][1081][0].apply(a,arguments)
},{dup:1081}],1387:[function(b,c,a){arguments[4][1082][0].apply(a,arguments)},{"./getStyleProperty":1388,"./getStyleValue":1389,"./shared/stylePropertyCache":1392,dup:1082}],1388:[function(b,c,a){arguments[4][213][0].apply(a,arguments)
},{"./shared/getStyleTestElement":1390,"./shared/prefixHelper":1391,"./shared/stylePropertyCache":1392,"./utils/toCSS":1395,"./utils/toDOM":1396,dup:213}],1389:[function(b,c,a){arguments[4][214][0].apply(a,arguments)
},{"./getStyleProperty":1388,"./shared/prefixHelper":1391,"./shared/stylePropertyCache":1392,"./shared/styleValueAvailable":1393,dup:214}],1390:[function(b,c,a){arguments[4][216][0].apply(a,arguments)
},{dup:216}],1391:[function(b,c,a){arguments[4][26][0].apply(a,arguments)},{dup:26}],1392:[function(b,c,a){arguments[4][218][0].apply(a,arguments)
},{dup:218}],1393:[function(b,c,a){arguments[4][219][0].apply(a,arguments)},{"./getStyleTestElement":1390,"./stylePropertyCache":1392,dup:219}],1394:[function(b,c,a){arguments[4][1089][0].apply(a,arguments)
},{dup:1089}],1395:[function(b,c,a){arguments[4][221][0].apply(a,arguments)},{dup:221}],1396:[function(b,c,a){arguments[4][222][0].apply(a,arguments)
},{dup:222}],1397:[function(b,c,a){arguments[4][1092][0].apply(a,arguments)},{"./internal/normalizeValue":1386,"ac-prefixer/getStyleCSS":1387,"ac-prefixer/getStyleProperty":1388,dup:1092}],1398:[function(b,c,a){c.exports={EventEmitter:b("./ac-event-emitter/EventEmitter")}
},{"./ac-event-emitter/EventEmitter":1399}],1399:[function(d,c,f){var h="EventEmitter:propagation";
var l=function(m){if(m){this.context=m}};var g=l.prototype;var i=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var j=function(m){if(typeof Array.isArray==="function"){return Array.isArray(m)
}return Object.prototype.toString.call(m)==="[object Array]"};var a=function(n,r){var q=n[0];
var t=n[1];var p=n[2];var m;var s;var o;if((typeof q!=="string"&&typeof q!=="object")||q===null||j(q)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof q==="string")&&!t){throw new Error("Expecting a callback function to be provided.")
}if(t&&(typeof t!=="function")){if(typeof q==="object"&&typeof t==="object"){p=t
}else{throw new TypeError("Expecting callback to be a function.")}}r.call(this,q,t,p)
};var k=function(q,r,o){var m;var n;var p;m=i.call(this)[q];if(!m||m.length===0){return
}m=m.slice();this._stoppedImmediatePropagation=false;for(n=0,p=m.length;n<p;n+=1){if(this._stoppedImmediatePropagation||r.call(o,m[n],n)){break
}}};var b=function(n,o,p){var m=-1;k.call(this,o,function(r,q){if(r.callback===p){m=q;
return true}});if(m===-1){return}n[o].splice(m,1)};g.on=function(){var m=i.call(this);
a.call(this,arguments,function(o,p,n){m[o]=m[o]||(m[o]=[]);m[o].push({callback:p,context:n})
});return this};g.once=function(){a.call(this,arguments,function(n,p,m){var o=function(q){p.call(m||this,q);
this.off(n,o)};this.on(n,o,this)});return this};g.off=function(r,s){var p=i.call(this);
var m;var o;var q;var n;if(arguments.length===0){this._events={}}else{if(!r||(typeof r!=="string"&&typeof r!=="object")||Array.isArray(r)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof r==="object"){for(m in r){if(r.hasOwnProperty(m)){b.call(this,p,m,r[m])
}}}if(typeof r==="string"){o=r.split(" ");if(o.length===1){if(s){b.call(this,p,r,s)
}else{p[r]=[]}}else{for(n=0,q=o.length;n<q;n+=1){p[o[n]]=[]}}}return this};g.trigger=function(r,s,n){var o;
var q;var m;var p;if(!r){throw new Error("trigger method requires an event name")
}if(typeof r!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(n&&typeof n!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}r=r.split(" ");for(p=0,q=r.length;p<q;p+=1){m=r[p];k.call(this,m,function(t){t.callback.call(t.context||this.context||this,s)
},this);if(!n){o=m;k.call(this,h,function(t){if(t.prefix){o=t.prefix+o}t.emitter.trigger(o,s)
})}}return this};g.propagateTo=function(n,o){var m=i.call(this);if(!m[h]){this._events[h]=[]
}m[h].push({emitter:n,prefix:o})};g.stopPropagatingTo=function(p){var n=i.call(this);
if(!p){n[h]=[];return}var q=n[h];var o=q.length;var m;for(m=0;m<o;m+=1){if(q[m].emitter===p){q.splice(m,1);
break}}};g.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};g.has=function(t,u,m){var v=i.call(this);var q=v[t];var r;var p;var n;var o;var s;
if(arguments.length===0){o=[];for(s in v){if(v.hasOwnProperty(s)){o.push(s)}}return o
}if(!q){return false}if(!u){return(q.length>0)?true:false}for(p=0,n=q.length;p<n;
p+=1){r=q[p];if((m&&u&&r.context===m&&r.callback===u)||(u&&!m&&r.callback===u)){return true
}}return false};c.exports=l},{}],1400:[function(b,c,a){arguments[4][193][0].apply(a,arguments)
},{"ac-function/memoize":1401,"ac-prefixer/getStyleProperty":1402,"ac-prefixer/getStyleValue":1403,dup:193}],1401:[function(b,c,a){arguments[4][210][0].apply(a,arguments)
},{dup:210}],1402:[function(b,c,a){arguments[4][213][0].apply(a,arguments)},{"./shared/getStyleTestElement":1404,"./shared/prefixHelper":1405,"./shared/stylePropertyCache":1406,"./utils/toCSS":1408,"./utils/toDOM":1409,dup:213}],1403:[function(b,c,a){arguments[4][214][0].apply(a,arguments)
},{"./getStyleProperty":1402,"./shared/prefixHelper":1405,"./shared/stylePropertyCache":1406,"./shared/styleValueAvailable":1407,dup:214}],1404:[function(b,c,a){arguments[4][216][0].apply(a,arguments)
},{dup:216}],1405:[function(b,c,a){arguments[4][26][0].apply(a,arguments)},{dup:26}],1406:[function(b,c,a){arguments[4][218][0].apply(a,arguments)
},{dup:218}],1407:[function(b,c,a){arguments[4][219][0].apply(a,arguments)},{"./getStyleTestElement":1404,"./stylePropertyCache":1406,dup:219}],1408:[function(b,c,a){arguments[4][221][0].apply(a,arguments)
},{dup:221}],1409:[function(b,c,a){arguments[4][222][0].apply(a,arguments)},{dup:222}],1410:[function(p,a,x){p("ac-polyfills/Object/assign");
var c=p("ac-feature/cssPropertyAvailable");var b=p("ac-classlist");var u=p("ac-dom-nodes/insertAfter");
var d=p("ac-dom-nodes/insertBefore");var s=p("ac-dom-metrics/getPagePosition");
var n=p("ac-dom-metrics/getScrollY");var h=p("ac-dom-styles/getStyle");var g=p("ac-dom-styles/setStyle");
var k=p("ac-dom-events/addEventListener");var m=p("ac-event-emitter").EventEmitter;
var f=c("position","sticky");var r=100;var t="b-placeholder-container";var j="b-sticky-placeholder";
var l=f?"native-sticky":"shimmed-sticky";var o="is-sticking";var i="is-stuck";var v="is-holding-place";
var q="b-sticky";var w=function(z,y){this.el=z;this.options=Object.assign({},y)
};w.addEventListeners=function(){if(!w.isListeningToScroll){w.isListeningToScroll=true;
k(window,"scroll",w.scrollEventListener);k(window,"resize",w.orientationResizeListener);
k(window,"orientationchange",w.orientationResizeListener);k(document,"touchmove",w.touchmoveEventListener)
}};w.stickies=[];w.create=function(A,z){var y=new w(A,z);y.initialize();w.stickies.push(y);
w.addEventListeners();w.scrollEventListener();return y};w.getScrollY=function(){return n()
};w.hasStickies=function(){return w.stickies.length};w.isStickingTop=function(z){var y=w.getScrollY();
return y>=z.getOriginTop()&&y<=z.getEndTop()};w.isStuckTop=function(y){return w.getScrollY()>=y.getEndTop()
};w.isStickingBottom=function(z){var y=w._getScrollPlusViewport();return y<=z.getOriginBottom()&&y>=z.getEndBottom()
};w.isStuckBottom=function(z){var y=w._getScrollPlusViewport();return y<=z.getEndBottom()
};w.orientationResizeListener=function(){if(w.hasStickies()){if(w.orientationResizeDebounce){w._clearOrientationChangeDebounce()
}w.orientationResizeDebounce=w._getOrientationChangeDebounce()}};w.scrollEventListener=function(){if(w.hasStickies()){for(var z=0,y=w.hasStickies(),A;
z<y;z++){A=w.stickies[z];w.update(A)}}};w.touchmoveEventListener=function(){if(w.hasStickies()){for(var z=0,y=w.hasStickies(),A;
z<y;z++){A=w.stickies[z];if(A.options.touchmove){w.update(A)}}}};w.update=function(z){var y=z.type;
if(y==="top"){w.updateTop(z)}if(y==="bottom"){w.updateBottom(z)}};w.updateBottom=function(y){if(w.isStickingBottom(y)){if(!y.isSticking()||y.isStuck()){y.stickBottom()
}}else{if(w.isStuckBottom(y)){if(!y.isStuck()){y.stuckBottom()}}else{if(y.isNotDefaultState()){y.unstickBottom()
}}}};w.updateTop=function(y){if(w.isStickingTop(y)){if(!y.isSticking()||y.isStuck()){y.stickTop()
}}else{if(w.isStuckTop(y)){if(!y.isStuck()){y.stuckTop()}}else{if(y.isNotDefaultState()){y.unstickTop()
}}}};w._clearOrientationChangeDebounce=function(){clearTimeout(w.orientationResizeDebounce);
w.orientationResizeDebounce=false};w._getOrientationChangeDebounce=function(){var y=setTimeout(w._resetStickies,r);
return y};w._getScrollPlusViewport=function(){var z=w.getScrollY();var y=w._getViewportHeight();
return z+y};w._getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight
};w._resetStickies=function(){var A;for(var z=0,y=w.hasStickies();z<y;z++){A=w.stickies[z];
if(A.type==="bottom"){A.unstickBottom();A.updatePlaceholderHeight();w.updateBottom(A)
}else{A.unstickTop();A.updatePlaceholderHeight();w.updateTop(A)}}};w.prototype=Object.assign({createPlaceHolder:function(){var y=document.createElement("div");
var z=document.createElement("div");var A=document.createElement("div");y.className=t;
b.add(y,t);b.add(z,j,l);y.appendChild(z);u(y,this.el);d(A,this.el);this.placeHolder=z;
this.positionHolder=A;this.updatePlaceholderHeight();return this.placeHolder},updatePlaceholderHeight:function(){var y=h(this.el,"marginTop","marginBottom");
g(this.placeHolder,{height:this._getElHeight()+"px",marginTop:y.marginTop,marginBottom:y.marginBottom})
},getPositionValue:function(){if(typeof this.positionValue!=="number"){this.positionValue=this._getPositionValue()
}return this.positionValue},getOriginTop:function(){return this._getPositionHolderOffsetY()-this.getPositionValue()
},getOriginBottom:function(){var y=this.getPositionValue();return this._getPositionHolderOffsetY()+this.placeHolder.offsetHeight+y
},getParentEndTop:function(){var y=this._getParentPadding();var z=this._getBottomOfParent();
return z-y},getParentEndBottom:function(){return this._getParentOffsetY()},getEndTop:function(){var y=this.getParentEndTop();
return y-(this.el.offsetHeight+this.getPositionValue())},getEndBottom:function(){return this._getParentOffsetY()+this.el.offsetHeight+this.getPositionValue()
},getStuckPositionTop:function(){var y=this._getParentPaddingBottom();return this.el.parentNode.offsetHeight-this.el.offsetHeight-y
},isNotDefaultState:function(){return this.isSticking()||this.isStuck()},initialize:function(){this._setStickySupportTypeClass();
this._setBStickyClass();this.type=this._getType();this.createPlaceHolder();this.origin=this.getOriginTop()
},isSticking:function(){return b.contains(this.el,o)},isStuck:function(){return b.contains(this.el,i)
},stickTop:function(){this._triggerStickyStateEvent();this._addStickingClasses();
this._removeStuckClasses();this._setUnstickStyles()},stuckTop:function(){this._triggerStuckStateEvent();
this._addStuckClasses();this._addStickingClasses();this._addStuckStylesTop(f)},stickBottom:function(){this._triggerStickyStateEvent();
this._addStickingClasses();this._removeStuckClasses();this._setStickStylesBottom(f)
},stuckBottom:function(){this._triggerStuckStateEvent();this._addStuckClasses();
this._setStuckStylesBottom(f)},unstickTop:function(){this._triggerDefaultStateEvent();
this._removeStuckAndStickingClasses();this._setUnstickStyles(f)},unstickBottom:function(){this._triggerDefaultStateEvent();
this._removeStuckAndStickingClasses();this._setUnstickStyles(f)},_addStuckStylesTop:function(y){if(!y){g(this.el,{top:this.getStuckPositionTop()+"px"})
}},_addStuckClasses:function(){b.add(this.el,i);b.add(this.placeHolder,i)},_addStickingClasses:function(){b.add(this.el,o);
b.add(this.placeHolder,v)},_getType:function(){var y="top";var z=h(this.el,"top","bottom");
if(z.top===null&&z.bottom!==null){y="bottom"}return y},_getParentOffsetY:function(){return s(this.el.parentNode,true).top
},_getBottomOfParent:function(){return this._getParentOffsetY()+this.el.parentNode.offsetHeight
},_getParentPaddingBottom:function(){var y=h(this.el.parentNode,"paddingBottom");
var z=parseInt(y.paddingBottom,10);return isNaN(z)?0:z},_getParentPadding:function(){var A=h(this.el.parentNode,"paddingBottom","paddingTop");
var y;for(var z in A){y=parseInt(A[z],10);A[z]=isNaN(y)?0:y}return A.paddingTop+A.paddingBottom
},_getPositionHolderOffsetY:function(){return s(this.positionHolder,true).top},_getPositionValue:function(){return parseInt(h(this.el,this.type)[this.type],10)||0
},_getElHeight:function(){return this.el.offsetHeight},_getElWidth:function(){return this.el.offsetWidth
},_getStuckPositionBottom:function(){return this.el.parentNode.offsetHeight-this.el.offsetHeight
},_removeStickingClasses:function(){b.remove(this.el,o);b.remove(this.placeHolder,v)
},_removeStuckClasses:function(){b.remove(this.el,i);b.remove(this.placeHolder,i)
},_removeStuckAndStickingClasses:function(){this._removeStuckClasses();this._removeStickingClasses()
},_setBStickyClass:function(){b.add(this.el,q)},_setStickySupportTypeClass:function(){b.add(this.el,l)
},_setStuckStylesBottom:function(y){if(!y){var z=this._getStuckPositionBottom();
g(this.el,{bottom:z+"px"})}},_setUnstickStyles:function(y){if(!y){g(this.el,{position:"",top:"",bottom:""})
}},_setStickStylesBottom:function(y){if(!y){var z=this.getPositionValue();g(this.el,{bottom:z+"px"})
}},_triggerDefaultStateEvent:function(){this.trigger("became-unsticky")},_triggerStickyStateEvent:function(){this.trigger("became-sticky")
},_triggerStuckStateEvent:function(){this.trigger("became-stuck")}},m.prototype);
a.exports=w},{"ac-classlist":8,"ac-dom-events/addEventListener":1294,"ac-dom-metrics/getPagePosition":1312,"ac-dom-metrics/getScrollY":1317,"ac-dom-nodes/insertAfter":1380,"ac-dom-nodes/insertBefore":1381,"ac-dom-styles/getStyle":1385,"ac-dom-styles/setStyle":1397,"ac-event-emitter":1398,"ac-feature/cssPropertyAvailable":1400,"ac-polyfills/Object/assign":1502}],1411:[function(b,c,a){arguments[4][839][0].apply(a,arguments)
},{dup:839}],1412:[function(b,c,a){arguments[4][42][0].apply(a,arguments)},{dup:42}],1413:[function(b,c,a){arguments[4][43][0].apply(a,arguments)
},{dup:43}],1414:[function(b,c,a){arguments[4][44][0].apply(a,arguments)},{dup:44}],1415:[function(b,c,a){arguments[4][45][0].apply(a,arguments)
},{dup:45}],1416:[function(b,c,a){arguments[4][46][0].apply(a,arguments)},{dup:46}],1417:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],1418:[function(b,c,a){arguments[4][48][0].apply(a,arguments)},{dup:48}],1419:[function(b,c,a){arguments[4][49][0].apply(a,arguments)
},{"./ELEMENT_NODE":1416,"./internal/isNodeType":1427,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:49}],1420:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{dup:50}],1421:[function(b,c,a){arguments[4][51][0].apply(a,arguments)},{"./COMMENT_NODE":1412,"./DOCUMENT_FRAGMENT_NODE":1413,"./DOCUMENT_NODE":1414,"./DOCUMENT_TYPE_NODE":1415,"./ELEMENT_NODE":1416,"./TEXT_NODE":1417,"./createDocumentFragment":1418,"./filterByNodeType":1419,"./hasAttribute":1420,"./indexOf":1422,"./insertAfter":1423,"./insertBefore":1424,"./insertFirstChild":1425,"./insertLastChild":1426,"./isComment":1429,"./isDocument":1430,"./isDocumentFragment":1431,"./isDocumentType":1432,"./isElement":1433,"./isNode":1434,"./isNodeList":1435,"./isTextNode":1436,"./remove":1437,"./replace":1438,dup:51}],1422:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"./filterByNodeType":1419,"./internal/validate":1428,"ac-polyfills/Array/prototype.indexOf":1497,"ac-polyfills/Array/prototype.slice":1498,dup:52}],1423:[function(b,c,a){arguments[4][53][0].apply(a,arguments)
},{"./internal/validate":1428,dup:53}],1424:[function(b,c,a){arguments[4][54][0].apply(a,arguments)
},{"./internal/validate":1428,dup:54}],1425:[function(b,c,a){arguments[4][55][0].apply(a,arguments)
},{"./internal/validate":1428,dup:55}],1426:[function(b,c,a){arguments[4][56][0].apply(a,arguments)
},{"./internal/validate":1428,dup:56}],1427:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"../isNode":1434,dup:57}],1428:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{"../COMMENT_NODE":1412,"../DOCUMENT_FRAGMENT_NODE":1413,"../ELEMENT_NODE":1416,"../TEXT_NODE":1417,"./isNodeType":1427,dup:58}],1429:[function(b,c,a){arguments[4][59][0].apply(a,arguments)
},{"./COMMENT_NODE":1412,"./internal/isNodeType":1427,dup:59}],1430:[function(b,c,a){arguments[4][60][0].apply(a,arguments)
},{"./DOCUMENT_NODE":1414,"./internal/isNodeType":1427,dup:60}],1431:[function(b,c,a){arguments[4][61][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":1413,"./internal/isNodeType":1427,dup:61}],1432:[function(b,c,a){arguments[4][62][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":1415,"./internal/isNodeType":1427,dup:62}],1433:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{"./ELEMENT_NODE":1416,"./internal/isNodeType":1427,dup:63}],1434:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],1435:[function(b,c,a){arguments[4][65][0].apply(a,arguments)},{dup:65}],1436:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"./TEXT_NODE":1417,"./internal/isNodeType":1427,dup:66}],1437:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"./internal/validate":1428,dup:67}],1438:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{"./internal/validate":1428,dup:68}],1439:[function(b,c,a){arguments[4][349][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":1440,"./ac-dom-traversal/ancestors":1441,"./ac-dom-traversal/children":1442,"./ac-dom-traversal/filterBySelector":1443,"./ac-dom-traversal/firstChild":1444,"./ac-dom-traversal/lastChild":1447,"./ac-dom-traversal/matchesSelector":1448,"./ac-dom-traversal/nextSibling":1449,"./ac-dom-traversal/nextSiblings":1450,"./ac-dom-traversal/previousSibling":1451,"./ac-dom-traversal/previousSiblings":1452,"./ac-dom-traversal/querySelector":1453,"./ac-dom-traversal/querySelectorAll":1454,"./ac-dom-traversal/shims/ie":1455,"./ac-dom-traversal/siblings":1456,dup:349}],1440:[function(b,c,a){arguments[4][350][0].apply(a,arguments)
},{"./helpers/validate":1446,"./matchesSelector":1448,"ac-dom-nodes":1421,dup:350}],1441:[function(b,c,a){arguments[4][351][0].apply(a,arguments)
},{"./helpers/validate":1446,"./matchesSelector":1448,"ac-dom-nodes":1421,dup:351}],1442:[function(b,c,a){arguments[4][352][0].apply(a,arguments)
},{"./filterBySelector":1443,"./helpers/validate":1446,"ac-dom-nodes":1421,dup:352}],1443:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./helpers/validate":1446,"./matchesSelector":1448,dup:353}],1444:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./children":1442,"./helpers/validate":1446,dup:354}],1445:[function(b,c,a){arguments[4][355][0].apply(a,arguments)
},{dup:355}],1446:[function(b,c,a){arguments[4][356][0].apply(a,arguments)},{"ac-dom-nodes":1421,dup:356}],1447:[function(b,c,a){arguments[4][357][0].apply(a,arguments)
},{"./children":1442,"./helpers/validate":1446,dup:357}],1448:[function(b,c,a){arguments[4][358][0].apply(a,arguments)
},{"./helpers/nativeMatches":1445,"./helpers/validate":1446,"ac-dom-nodes":1421,dup:358}],1449:[function(b,c,a){arguments[4][359][0].apply(a,arguments)
},{"./helpers/validate":1446,"./matchesSelector":1448,"ac-dom-nodes":1421,dup:359}],1450:[function(b,c,a){arguments[4][360][0].apply(a,arguments)
},{"./helpers/validate":1446,"./matchesSelector":1448,"ac-dom-nodes":1421,dup:360}],1451:[function(b,c,a){arguments[4][361][0].apply(a,arguments)
},{"./helpers/validate":1446,"./matchesSelector":1448,"ac-dom-nodes":1421,dup:361}],1452:[function(b,c,a){arguments[4][362][0].apply(a,arguments)
},{"./helpers/validate":1446,"./matchesSelector":1448,"ac-dom-nodes":1421,dup:362}],1453:[function(b,c,a){arguments[4][363][0].apply(a,arguments)
},{"./helpers/validate":1446,dup:363}],1454:[function(b,c,a){arguments[4][364][0].apply(a,arguments)
},{"./helpers/validate":1446,dup:364}],1455:[function(b,c,a){arguments[4][365][0].apply(a,arguments)
},{"../helpers/nativeMatches":1445,"../helpers/validate":1446,"../vendor/sizzle/sizzle":1457,"ac-dom-nodes":1421,dup:365}],1456:[function(b,c,a){arguments[4][366][0].apply(a,arguments)
},{"./children":1442,"./helpers/validate":1446,dup:366}],1457:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],1458:[function(b,c,a){arguments[4][1181][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":1459,dup:1181}],1459:[function(b,c,a){arguments[4][1182][0].apply(a,arguments)
},{"ac-dom-events":1411,"ac-dom-traversal":1439,"ac-event-emitter":1352,dup:1182}],1460:[function(b,c,a){arguments[4][569][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":1461,dup:569}],1461:[function(b,c,a){arguments[4][570][0].apply(a,arguments)
},{dup:570}],1462:[function(b,c,a){arguments[4][1185][0].apply(a,arguments)},{"./ac-window-delegate/WindowDelegate":1465,"./ac-window-delegate/WindowDelegateCustomEvent":1466,"./ac-window-delegate/WindowDelegateOptimizer":1467,dup:1185}],1463:[function(b,c,a){arguments[4][1186][0].apply(a,arguments)
},{"ac-event-emitter":1352,dup:1186}],1464:[function(b,c,a){arguments[4][1187][0].apply(a,arguments)
},{"ac-event-emitter":1352,dup:1187}],1465:[function(b,c,a){arguments[4][1188][0].apply(a,arguments)
},{"./CustomEventController":1463,"./OptimizerController":1464,"./optimizers/optimizers":1470,"./queries/queries":1479,"ac-dom-emitter":1458,"ac-shared-instance":1460,dup:1188}],1466:[function(b,c,a){arguments[4][1189][0].apply(a,arguments)
},{"ac-event-emitter":1352,dup:1189}],1467:[function(b,c,a){arguments[4][1190][0].apply(a,arguments)
},{"ac-event-emitter":1352,dup:1190}],1468:[function(b,c,a){arguments[4][1191][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":1467,"../../queries/queries":1479,dup:1191}],1469:[function(b,c,a){arguments[4][1192][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":1467,"../../queries/queries":1479,dup:1192}],1470:[function(b,c,a){arguments[4][1193][0].apply(a,arguments)
},{"./events/resize":1468,"./events/scroll":1469,dup:1193}],1471:[function(b,c,a){arguments[4][1194][0].apply(a,arguments)
},{dup:1194}],1472:[function(b,c,a){arguments[4][1195][0].apply(a,arguments)},{dup:1195}],1473:[function(b,c,a){arguments[4][1196][0].apply(a,arguments)
},{dup:1196}],1474:[function(b,c,a){arguments[4][1197][0].apply(a,arguments)},{dup:1197}],1475:[function(b,c,a){arguments[4][1198][0].apply(a,arguments)
},{dup:1198}],1476:[function(b,c,a){arguments[4][1199][0].apply(a,arguments)},{dup:1199}],1477:[function(b,c,a){arguments[4][1200][0].apply(a,arguments)
},{dup:1200}],1478:[function(b,c,a){arguments[4][1201][0].apply(a,arguments)},{dup:1201}],1479:[function(b,c,a){arguments[4][1202][0].apply(a,arguments)
},{"./methods/clientHeight":1471,"./methods/clientWidth":1472,"./methods/innerHeight":1473,"./methods/innerWidth":1474,"./methods/maxScrollX":1475,"./methods/maxScrollY":1476,"./methods/scrollX":1477,"./methods/scrollY":1478,dup:1202}],1480:[function(b,c,a){c.exports.Localnav=b("./ac-localnav/Localnav");
c.exports.LocalnavExpandable=b("./ac-localnav/LocalnavExpandable")},{"./ac-localnav/Localnav":1481,"./ac-localnav/LocalnavExpandable":1482}],1481:[function(f,a,h){var n,k=f("ac-browser"),d=f("ac-classlist"),o=f("ac-dom-metrics"),l=f("ac-dom-traversal"),g=f("ac-feature"),c=f("ac-object"),m=f("ac-sticky"),q=f("ac-event-emitter").EventEmitter,p=f("ac-window-delegate").WindowDelegate;
try{n=f("ac-analytics")}catch(j){}var b=function(s){var r={localnavWrapperClassSelector:".localnav-wrapper",analyticsEnabled:true};
this._options=c.extend(r,s);this._localnavWrapperElement=l.querySelector(this._options.localnavWrapperClassSelector);
this._isOldIE=k.name==="IE"&&k.version<9;r=null};var i=b.prototype=new q(null);
i.createLocalnav=function(){m.create(this._localnavWrapperElement,{touchmove:true}).propagateTo(this);
this.on("became-sticky",this._becameSticky.bind(this));this.on("became-unsticky",this._becameUnsticky.bind(this));
p.on("resize orientationchange",this._resizeUpdate.bind(this));window.requestAnimationFrame(this._resizeUpdate.bind(this))
};i._becameSticky=function(){this._localnavWrapperElement.setAttribute("data-analytics-region","product nav locked");
if(this._options.analyticsEnabled&&typeof n==="object"){n.regions.refreshRegion(this._localnavWrapperElement)
}};i._becameUnsticky=function(){this._localnavWrapperElement.setAttribute("data-analytics-region","product nav");
if(this._options.analyticsEnabled&&typeof n==="object"){n.regions.refreshRegion(this._localnavWrapperElement)
}};i._resizeUpdate=function(){var r=l.querySelector(".localnav-links");var s=l.querySelector(".localnav-title");
d.remove(r,"localnav-long-links");if(o.getDimensions(s,true).width+o.getDimensions(r,true).width>=o.getDimensions(this._localnavWrapperElement,true).width){d.add(r,"localnav-long-links")
}};a.exports=b},{"ac-analytics":"ac-analytics","ac-browser":1290,"ac-classlist":8,"ac-dom-metrics":1319,"ac-dom-traversal":1327,"ac-event-emitter":1352,"ac-feature":1357,"ac-object":1488,"ac-sticky":1410,"ac-window-delegate":1462}],1482:[function(h,b,j){var o,m=h("ac-browser"),a=h("ac-dom-events"),n=h("ac-dom-traversal"),g=h("ac-classlist"),i=h("ac-feature"),f=h("ac-object"),q=h("ac-event-emitter").EventEmitter,d=h("./Localnav"),p=h("ac-window-delegate").WindowDelegate;
try{o=h("ac-analytics")}catch(l){}var c=function(r){d.call(this,r);this._checkbox=n.querySelector("#localnav-disclosure");
this._tray=n.querySelector(".localnav-tray-wrapper");this._localnavSiblings=n.siblings(this._localnavWrapperElement);
this._localnavDisclosure=n.querySelector(".localnav-head-disclosure");if(!i.cssPropertyAvailable("transition")){g.add(document.documentElement,"no-transition")
}if(this._options.analyticsEnabled&&typeof o==="object"){this._analyticsEmitter=new q();
new o.observer.Event(this._analyticsEmitter,{interactionEvents:["localnav-open"]})
}a.addEventListener(this._checkbox,"click",this._toggleTray.bind(this));p.on("scroll",this._scrollUpdate.bind(this))
};var k=c.prototype=f.create(d.prototype);k._scrollUpdate=function(){if(this._checkbox&&this._checkbox.checked){this._closeTray()
}};k._resizeUpdate=function(){};k._toggleTray=function(){if(this._checkbox&&this._checkbox.checked){this._openTray()
}else{this._closeTray()}};k._toggleOldieCheckedClass=function(){if(this._isOldIE){g.toggle(this._checkbox,"oldie-checked")
}};k._openTray=function(){this._checkbox.checked=true;this._toggleOldieCheckedClass();
this._localnavDisclosure.setAttribute("aria-label","close local navigation");this._localnavDisclosure.setAttribute("aria-checked",true);
if(this._analyticsEmitter){var r=(this._localnavWrapperElement.getAttribute("data-analytics-region").indexOf("locked")>-1)?"locked":"unlocked";
this._analyticsEmitter.trigger("localnav-open",{prop3:"{PAGE_NAME_NO_LOCALE} - explore - "+r,title:"{PAGE_NAME_NO_LOCALE} - explore - "+r})
}if(!this._isOldIE){this._localnavSiblings.forEach(function(s){a.addEventListener(s,"click",this._closeTray.bind(this))
}.bind(this))}};k._closeTray=function(){this._checkbox.checked=false;this._toggleOldieCheckedClass();
this._localnavDisclosure.setAttribute("aria-label","open local navigation");this._localnavDisclosure.setAttribute("aria-checked",false);
if(!this._isOldIE){this._localnavSiblings.forEach(function(r){a.removeEventListener(r,"click",this._closeTray.bind(this))
}.bind(this))}};b.exports=c},{"./Localnav":1481,"ac-analytics":"ac-analytics","ac-browser":1290,"ac-classlist":8,"ac-dom-events":1296,"ac-dom-traversal":1327,"ac-event-emitter":1352,"ac-feature":1357,"ac-object":1488,"ac-window-delegate":1462}],1483:[function(b,c,a){arguments[4][948][0].apply(a,arguments)
},{"./extend":1486,"ac-polyfills/Array/isArray":1494,dup:948}],1484:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{dup:101}],1485:[function(b,c,a){arguments[4][102][0].apply(a,arguments)},{"./extend":1486,dup:102}],1486:[function(b,c,a){arguments[4][951][0].apply(a,arguments)
},{"ac-polyfills/Array/prototype.forEach":1496,dup:951}],1487:[function(b,c,a){arguments[4][104][0].apply(a,arguments)
},{dup:104}],1488:[function(b,c,a){arguments[4][953][0].apply(a,arguments)},{"./clone":1483,"./create":1484,"./defaults":1485,"./extend":1486,"./getPrototypeOf":1487,"./isDate":1489,"./isEmpty":1490,"./isRegExp":1491,"./toQueryParameters":1493,dup:953}],1489:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],1490:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],1491:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],1492:[function(b,c,a){arguments[4][98][0].apply(a,arguments)},{dup:98}],1493:[function(b,c,a){arguments[4][108][0].apply(a,arguments)
},{dup:108,qs:1492}],1494:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],1495:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],1496:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],1497:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],1498:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],1499:[function(b,c,a){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}},{}],1500:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],1501:[function(b,c,a){
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
}else{return d.call(this,h)}}}f=null}())}}},{}],1502:[function(c,d,b){var g=navigator.userAgent.toLowerCase();
var h=(g.indexOf("msie")>-1)?parseInt(g.split("msie")[1]):false;var a=h<9;if(!Object.assign){if(!Object.keys){Object.keys=function f(j){var i=[];
var k;if((!j)||(typeof j.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(k in j){if(j.hasOwnProperty(k)){i.push(k)}}return i}}if(!a&&Object.defineProperty){if(!Object.assign){Object.defineProperty(Object,"assign",{enumerable:false,configurable:true,writable:true,value:function(t,j){if(t===undefined||t===null){throw new TypeError("Cannot convert first argument to object")
}var v=Object(t);var r=false;var k;for(var l=1;l<arguments.length;l++){var o=arguments[l];
if(o===undefined||o===null){continue}var n=Object.keys(Object(o));for(var m=0,q=n.length;
m<q;m++){var u=n[m];try{var p=Object.getOwnPropertyDescriptor(o,u);if(p!==undefined&&p.enumerable){v[u]=o[u]
}}catch(s){if(!r){r=true;k=s}}}if(r){throw k}}return v}})}}else{Object.assign=function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]}}}},{}],1503:[function(b,c,a){window.matchMedia=window.matchMedia||(function(i,j){var g,d=i.documentElement,f=d.firstElementChild||d.firstChild,h=i.createElement("body"),k=i.createElement("div");
k.id="mq-test-1";k.style.cssText="position:absolute;top:-100em";h.style.background="none";
h.appendChild(k);return function(l){k.innerHTML='&shy;<style media="'+l+'"> #mq-test-1 { width:42px; }</style>';
d.insertBefore(h,f);g=k.offsetWidth===42;d.removeChild(h);return{matches:g,media:l}
}}(document))},{}],1504:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-prefixer/Prefixer":1505,dup:69}],1505:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{"./Prefixer/camelCasedEvents":1506,dup:70}],1506:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],1507:[function(b,c,a){arguments[4][341][0].apply(a,arguments)},{"./ac-dom-events/addEventListener":1508,"./ac-dom-events/dispatchEvent":1509,"./ac-dom-events/preventDefault":1510,"./ac-dom-events/removeEventListener":1511,"./ac-dom-events/stop":1512,"./ac-dom-events/stopPropagation":1513,"./ac-dom-events/target":1514,dup:341}],1508:[function(b,c,a){arguments[4][319][0].apply(a,arguments)
},{"ac-prefixer":1504,dup:319}],1509:[function(b,c,a){arguments[4][320][0].apply(a,arguments)
},{dup:320}],1510:[function(b,c,a){arguments[4][28][0].apply(a,arguments)},{dup:28}],1511:[function(b,c,a){arguments[4][321][0].apply(a,arguments)
},{"ac-prefixer":1504,dup:321}],1512:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{"./preventDefault":1510,"./stopPropagation":1513,dup:31}],1513:[function(b,c,a){arguments[4][32][0].apply(a,arguments)
},{dup:32}],1514:[function(b,c,a){arguments[4][348][0].apply(a,arguments)},{dup:348}],1515:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{dup:42}],1516:[function(b,c,a){arguments[4][43][0].apply(a,arguments)},{dup:43}],1517:[function(b,c,a){arguments[4][44][0].apply(a,arguments)
},{dup:44}],1518:[function(b,c,a){arguments[4][45][0].apply(a,arguments)},{dup:45}],1519:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{dup:46}],1520:[function(b,c,a){arguments[4][47][0].apply(a,arguments)},{dup:47}],1521:[function(b,c,a){arguments[4][48][0].apply(a,arguments)
},{dup:48}],1522:[function(b,c,a){arguments[4][49][0].apply(a,arguments)},{"./ELEMENT_NODE":1519,"./internal/isNodeType":1530,"ac-polyfills/Array/prototype.filter":1495,"ac-polyfills/Array/prototype.slice":1498,dup:49}],1523:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{dup:50}],1524:[function(b,c,a){arguments[4][51][0].apply(a,arguments)},{"./COMMENT_NODE":1515,"./DOCUMENT_FRAGMENT_NODE":1516,"./DOCUMENT_NODE":1517,"./DOCUMENT_TYPE_NODE":1518,"./ELEMENT_NODE":1519,"./TEXT_NODE":1520,"./createDocumentFragment":1521,"./filterByNodeType":1522,"./hasAttribute":1523,"./indexOf":1525,"./insertAfter":1526,"./insertBefore":1527,"./insertFirstChild":1528,"./insertLastChild":1529,"./isComment":1532,"./isDocument":1533,"./isDocumentFragment":1534,"./isDocumentType":1535,"./isElement":1536,"./isNode":1537,"./isNodeList":1538,"./isTextNode":1539,"./remove":1540,"./replace":1541,dup:51}],1525:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"./filterByNodeType":1522,"./internal/validate":1531,"ac-polyfills/Array/prototype.indexOf":1497,"ac-polyfills/Array/prototype.slice":1498,dup:52}],1526:[function(b,c,a){arguments[4][53][0].apply(a,arguments)
},{"./internal/validate":1531,dup:53}],1527:[function(b,c,a){arguments[4][54][0].apply(a,arguments)
},{"./internal/validate":1531,dup:54}],1528:[function(b,c,a){arguments[4][55][0].apply(a,arguments)
},{"./internal/validate":1531,dup:55}],1529:[function(b,c,a){arguments[4][56][0].apply(a,arguments)
},{"./internal/validate":1531,dup:56}],1530:[function(b,c,a){arguments[4][57][0].apply(a,arguments)
},{"../isNode":1537,dup:57}],1531:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{"../COMMENT_NODE":1515,"../DOCUMENT_FRAGMENT_NODE":1516,"../ELEMENT_NODE":1519,"../TEXT_NODE":1520,"./isNodeType":1530,dup:58}],1532:[function(b,c,a){arguments[4][59][0].apply(a,arguments)
},{"./COMMENT_NODE":1515,"./internal/isNodeType":1530,dup:59}],1533:[function(b,c,a){arguments[4][60][0].apply(a,arguments)
},{"./DOCUMENT_NODE":1517,"./internal/isNodeType":1530,dup:60}],1534:[function(b,c,a){arguments[4][61][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":1516,"./internal/isNodeType":1530,dup:61}],1535:[function(b,c,a){arguments[4][62][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":1518,"./internal/isNodeType":1530,dup:62}],1536:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{"./ELEMENT_NODE":1519,"./internal/isNodeType":1530,dup:63}],1537:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{dup:64}],1538:[function(b,c,a){arguments[4][65][0].apply(a,arguments)},{dup:65}],1539:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"./TEXT_NODE":1520,"./internal/isNodeType":1530,dup:66}],1540:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"./internal/validate":1531,dup:67}],1541:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{"./internal/validate":1531,dup:68}],1542:[function(b,c,a){arguments[4][349][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":1543,"./ac-dom-traversal/ancestors":1544,"./ac-dom-traversal/children":1545,"./ac-dom-traversal/filterBySelector":1546,"./ac-dom-traversal/firstChild":1547,"./ac-dom-traversal/lastChild":1550,"./ac-dom-traversal/matchesSelector":1551,"./ac-dom-traversal/nextSibling":1552,"./ac-dom-traversal/nextSiblings":1553,"./ac-dom-traversal/previousSibling":1554,"./ac-dom-traversal/previousSiblings":1555,"./ac-dom-traversal/querySelector":1556,"./ac-dom-traversal/querySelectorAll":1557,"./ac-dom-traversal/shims/ie":1558,"./ac-dom-traversal/siblings":1559,dup:349}],1543:[function(b,c,a){arguments[4][350][0].apply(a,arguments)
},{"./helpers/validate":1549,"./matchesSelector":1551,"ac-dom-nodes":1524,dup:350}],1544:[function(b,c,a){arguments[4][351][0].apply(a,arguments)
},{"./helpers/validate":1549,"./matchesSelector":1551,"ac-dom-nodes":1524,dup:351}],1545:[function(b,c,a){arguments[4][352][0].apply(a,arguments)
},{"./filterBySelector":1546,"./helpers/validate":1549,"ac-dom-nodes":1524,dup:352}],1546:[function(b,c,a){arguments[4][353][0].apply(a,arguments)
},{"./helpers/validate":1549,"./matchesSelector":1551,dup:353}],1547:[function(b,c,a){arguments[4][354][0].apply(a,arguments)
},{"./children":1545,"./helpers/validate":1549,dup:354}],1548:[function(b,c,a){arguments[4][355][0].apply(a,arguments)
},{dup:355}],1549:[function(b,c,a){arguments[4][356][0].apply(a,arguments)},{"ac-dom-nodes":1524,dup:356}],1550:[function(b,c,a){arguments[4][357][0].apply(a,arguments)
},{"./children":1545,"./helpers/validate":1549,dup:357}],1551:[function(b,c,a){arguments[4][358][0].apply(a,arguments)
},{"./helpers/nativeMatches":1548,"./helpers/validate":1549,"ac-dom-nodes":1524,dup:358}],1552:[function(b,c,a){arguments[4][359][0].apply(a,arguments)
},{"./helpers/validate":1549,"./matchesSelector":1551,"ac-dom-nodes":1524,dup:359}],1553:[function(b,c,a){arguments[4][360][0].apply(a,arguments)
},{"./helpers/validate":1549,"./matchesSelector":1551,"ac-dom-nodes":1524,dup:360}],1554:[function(b,c,a){arguments[4][361][0].apply(a,arguments)
},{"./helpers/validate":1549,"./matchesSelector":1551,"ac-dom-nodes":1524,dup:361}],1555:[function(b,c,a){arguments[4][362][0].apply(a,arguments)
},{"./helpers/validate":1549,"./matchesSelector":1551,"ac-dom-nodes":1524,dup:362}],1556:[function(b,c,a){arguments[4][363][0].apply(a,arguments)
},{"./helpers/validate":1549,dup:363}],1557:[function(b,c,a){arguments[4][364][0].apply(a,arguments)
},{"./helpers/validate":1549,dup:364}],1558:[function(b,c,a){arguments[4][365][0].apply(a,arguments)
},{"../helpers/nativeMatches":1548,"../helpers/validate":1549,"../vendor/sizzle/sizzle":1560,"ac-dom-nodes":1524,dup:365}],1559:[function(b,c,a){arguments[4][366][0].apply(a,arguments)
},{"./children":1545,"./helpers/validate":1549,dup:366}],1560:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{dup:97}],1561:[function(b,c,a){arguments[4][368][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":1562,dup:368}],1562:[function(b,c,a){arguments[4][538][0].apply(a,arguments)
},{"./DOMEmitterEvent":1563,"ac-dom-events":1507,"ac-dom-traversal":1542,"ac-event-emitter":1564,dup:538}],1563:[function(b,c,a){arguments[4][539][0].apply(a,arguments)
},{"ac-dom-events":1507,dup:539}],1564:[function(b,c,a){arguments[4][11][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":1565,dup:11}],1565:[function(b,c,a){arguments[4][12][0].apply(a,arguments)
},{dup:12}],1566:[function(b,c,a){arguments[4][569][0].apply(a,arguments)},{"./ac-shared-instance/SharedInstance":1567,dup:569}],1567:[function(b,c,a){arguments[4][570][0].apply(a,arguments)
},{dup:570}],1568:[function(b,c,a){arguments[4][1185][0].apply(a,arguments)},{"./ac-window-delegate/WindowDelegate":1571,"./ac-window-delegate/WindowDelegateCustomEvent":1572,"./ac-window-delegate/WindowDelegateOptimizer":1573,dup:1185}],1569:[function(b,c,a){arguments[4][1186][0].apply(a,arguments)
},{"ac-event-emitter":1564,dup:1186}],1570:[function(b,c,a){arguments[4][1187][0].apply(a,arguments)
},{"ac-event-emitter":1564,dup:1187}],1571:[function(d,b,g){var i;var c=d("ac-shared-instance").SharedInstance,l=d("ac-dom-emitter").DOMEmitter,j=d("./OptimizerController"),f=d("./CustomEventController"),h=d("./queries/queries"),m=d("./optimizers/optimizers");
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
};b.exports=c.share(k,a,n)},{"./CustomEventController":1569,"./OptimizerController":1570,"./optimizers/optimizers":1576,"./queries/queries":1585,"ac-dom-emitter":1561,"ac-shared-instance":1566}],1572:[function(b,c,a){arguments[4][1189][0].apply(a,arguments)
},{"ac-event-emitter":1564,dup:1189}],1573:[function(b,c,a){arguments[4][1190][0].apply(a,arguments)
},{"ac-event-emitter":1564,dup:1190}],1574:[function(b,c,a){arguments[4][1191][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":1573,"../../queries/queries":1585,dup:1191}],1575:[function(b,c,a){arguments[4][1192][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":1573,"../../queries/queries":1585,dup:1192}],1576:[function(b,c,a){arguments[4][1193][0].apply(a,arguments)
},{"./events/resize":1574,"./events/scroll":1575,dup:1193}],1577:[function(b,c,a){arguments[4][1194][0].apply(a,arguments)
},{dup:1194}],1578:[function(b,c,a){arguments[4][1195][0].apply(a,arguments)},{dup:1195}],1579:[function(b,c,a){arguments[4][1196][0].apply(a,arguments)
},{dup:1196}],1580:[function(b,c,a){arguments[4][1197][0].apply(a,arguments)},{dup:1197}],1581:[function(b,c,a){arguments[4][1198][0].apply(a,arguments)
},{dup:1198}],1582:[function(b,c,a){arguments[4][1199][0].apply(a,arguments)},{dup:1199}],1583:[function(b,c,a){arguments[4][1200][0].apply(a,arguments)
},{dup:1200}],1584:[function(b,c,a){arguments[4][1201][0].apply(a,arguments)},{dup:1201}],1585:[function(b,c,a){arguments[4][1202][0].apply(a,arguments)
},{"./methods/clientHeight":1577,"./methods/clientWidth":1578,"./methods/innerHeight":1579,"./methods/innerWidth":1580,"./methods/maxScrollX":1581,"./methods/maxScrollY":1582,"./methods/scrollX":1583,"./methods/scrollY":1584,dup:1202}],1586:[function(b,c,a){var g=b("ac-gallery").SlideGallery;
var d=b("ac-classlist");var h=b("ac-dom");var f=(function(){var i;var q=g.extend({drawResize:function(s,u,t){this._clip=null;
this._bounceInClip=null;this._bounceOutClip=null;for(var r=0;r<this.model.models.length;
r++){this.model.models[r].attributes.element.style.display="none";this.model.models[r].attributes.element.offsetHeight;
this.model.models[r].attributes.element.style.display="block";this.model.models[r].attributes.element.offsetWidth
}this.drawSnap(s,u,t)}});var j=function(){var w=h.querySelectorAll(".infographic-gallery-wrapper");
var s,u,r;for(var v=0;v<w.length;v++){s=h.querySelector(".togglenav",w[v]);u=h.querySelectorAll(".togglenav-button",s);
r=h.querySelector(".gallery-infographic",w[v]);for(var t=0;t<u.length;t++){h.addEventListener(u[t],"click",l.bind(s,r),true)
}}};var l=function(s,r){d.remove(h.querySelector(".active",this),"active");d.remove(h.querySelector(".active",s),"active");
var t=r.target?r.target:r.srcElement;d.add(h.querySelector(t.hash,s),"active");
d.add(t,"active");h.preventDefault(r)};var n=function(){var x=h.querySelectorAll(".section-gallery-wrapper");
if(i){var t=i.videoSrcCollection.sources[0]?i.videoSrcCollection.sources[0].element:false
}var s,u,r,w;for(var v=0;v<x.length;v++){r=h.querySelector(".ac-gallery",x[v]);
w=h.querySelectorAll(".ac-gallery-content",x[v]);u=["#",x[v].id," .dotnav-item"].join("");
s=q.create({id:x[v].id,el:x[v],slideEl:r,easing:"linear",model:w,duration:0.3,triggerSelector:u,pointer:{touch:true}});
s.on("ready",function(){this.inputs.pointer.parent.gesture.on("end",function(){if(this.currentState.name==="springing"){this.currentState.spring.stiffness=-30;
this.currentState.spring.damping=-5}},this.stateMachine)},this);h.addEventListener(s.el,"touchstart",o.bind(s,t),true);
h.addEventListener(s.el,"touchmove",m.bind(s),true);h.addEventListener(s.el,"touchend",p.bind(s,t),true);
h.addEventListener(s.el,"touchcancel",p.bind(s,t),true)}};var o=function(s,r){if(s){h.removeEventListener(s,"touchend",k,true)
}this.sx=r.changedTouches[0].clientX;this.sy=r.changedTouches[0].clientY;this.swipe=null
};var m=function(r){if(this.swipe===null){this.dx=r.changedTouches[0].clientX-this.sx;
this.dy=r.changedTouches[0].clientY-this.sy;this.swipe=(Math.abs(this.dx)>Math.abs(this.dy))?true:false
}if(this.swipe){h.preventDefault(r)}else{h.stopPropagation(r)}};var k=function(r){h.stopPropagation(r)
};var p=function(s,r){this.ey=Math.abs(r.changedTouches[0].clientY-this.sy);if(this.ey>4&&!this.swipe&&s){h.addEventListener(s,"touchend",k,true)
}};return{initSwipeGallery:function(r){i=r;n()},initToggles:function(){j()}}}());
c.exports=f},{"ac-classlist":8,"ac-dom":109,"ac-gallery":1262}],1587:[function(d,c,h){var b=d("ac-classlist");
var g=d("ac-feature");var i=d("ac-films");var k=d("ac-dom");var f=d("ac-localnav").Localnav;
var m=d("ac-window-delegate").WindowDelegate;var a=d("./../shared/play-button");
var l=d("./gallery");var j=(function(){var n=function(){var u=document.getElementById("share-wrapper");
var s;var q;var r=function(v){b.add(u,"open");k.preventDefault(v)};var t=function(v){b.remove(u,"open");
k.preventDefault(v)};if(u!==null){q=k.querySelector("#open-share",u);s=k.querySelector("#close-share",u);
if(q!==null&&s!==null){k.addEventListener(q,"click",r);k.addEventListener(s,"click",t)
}}};var p=k.querySelectorAll(".film-trigger");var o=null;if(p.length>0){o=i.create(p,{modal:true});
if(o.modalVideo){o.modalVideo.on("close",function(){m.trigger("modalClose")});o.modalVideo.on("open",function(){m.trigger("modalOpen")
})}}return{initialize:function(){if(!document.getElementById("ac-localnav")){var q=new f();
q.createLocalnav()}if(o&&g.isHandheld()&&g.touchAvailable()){l.initSwipeGallery(o)
}else{if(g.isHandheld()&&g.touchAvailable()){l.initSwipeGallery()}}if(!g.cssPropertyAvailable("transition")){l.initToggles()
}if(g.canvasAvailable()){d("./visualizations")}n();if(!g.isHandheld()&&document.getElementById("gallery-lgbt-pride-image-1")){a.init()
}return this}}}());c.exports=j.initialize()},{"./../shared/play-button":1592,"./gallery":1586,"./visualizations":1588,"ac-classlist":8,"ac-dom":109,"ac-feature":198,"ac-films":1010,"ac-localnav":1480,"ac-window-delegate":1568}],1588:[function(c,b,f){var k=c("ac-element-engagement").ElementEngagement;
var d=c("ac-element-engagement");var h=c("ac-classlist");var l=c("ac-dom");var g=c("./../shared/bar-graph");
var m=c("./../shared/donut");var j=c("./../shared/counter");var a=new k();var i=(function(){var n={trackOnce:true};
var s=l.querySelectorAll(".togglenav");var w=l.querySelectorAll(".counter-standalone");
var t=l.querySelectorAll(".bar-graph-wrapper");var v=l.querySelectorAll(".donut-graph-wrapper");
var q=l.querySelectorAll(".counter-static");var u=l.querySelectorAll(".fade-in");
var o=function(x){if(x.el.DataVisual){x.el.DataVisual.playEngaged()}else{h.add(x.el,"engaged")
}};var p=function(z){var x;x=z.target.getAttribute("href");x=x.replace("#","");
x=parseInt(x);for(var A=0;A<this.anchors.length;A++){h[(x===A+1)?"add":"remove"](this.anchors[A],"current")
}if(this.targetObj.DataVisual&&this.targetObj.DataVisual.togglePlay){this.targetObj.DataVisual.togglePlay(x)
}z.preventDefault()};a.addElements(w,n);a.addElements(t,n);a.addElements(v,n);a.addElements(q,n);
a.addElements(u,n);a.on("engaged",o);for(var r=0;r<w.length;r++){w[r]=new j(w[r])
}for(var r=0;r<t.length;r++){t[r]=new g(t[r])}for(var r=0;r<v.length;r++){v[r]=new m(v[r])
}for(var r=0;r<s.length;r++){s[r]={el:s[r],targetObj:s[r].parentNode,anchors:l.querySelectorAll("a",s[r])};
for(var y=0;y<s[r].anchors.length;y++){l.addEventListener(s[r].anchors[y],"click",p.bind(s[r]))
}}a.start();return{init:function(){return this}}}());b.exports=i.init()},{"./../shared/bar-graph":1589,"./../shared/counter":1590,"./../shared/donut":1591,"ac-classlist":8,"ac-dom":109,"ac-element-engagement":187}],1589:[function(c,b,f){var a=c("ac-classlist");
var k=c("./../shared/counter");var g=c("ac-easing").createPredefined;var l=c("ac-dom");
var d=c("ac-feature");var j={delay:0,start:0,stagger:0.1,duration:0.66,counters:false,ease:"easeOutCirc","counters-unit":null,"counters-unitpos":null,tallest:0,sideways:false,single:false,"handheld-sideways":false};
function i(m){if(!l.isNode(m)){throw new TypeError("BarGraph(): First argument must be DOM element.")
}this.el=m;this.el.DataVisual=this;this._create()}var h=i.prototype;b.exports=i;
h.playEngaged=function(){if(!this._engaged){this._engaged=true;this.play()}};h.play=function(o){var q;
q=o||1;q--;if(q===this._currentTab){return}if(!this._first&&this._staggered){this._removeStagger();
this._staggered=false}for(var m=0;m<this._bars.length;m++){if(this.counters){this._bars[m].counter.Counter.rebuild({end:this._bars[m].values[q],delay:this._staggered?(m*this.stagger):0}).play()
}var p=this._bars[m].values[q]*(this.single?1:this._ratio);if(this._hasTransforms){var n=(this.sideways||this["handheld-sideways"])?"scaleX("+(100-p)/100+")":"scaleY("+(100-p)/100+")";
l.setStyle(this._bars[m].el,{transform:n})}else{var n=100-p+"%";if(this.sideways){l.setStyle(this._bars[m].el,{width:n,position:"absolute",right:0})
}else{l.setStyle(this._bars[m].el,{height:n,position:"absolute",top:0})}}}this._currentTab=q;
this._first=false;return this};h.togglePlay=function(m){return this.play(m)};h._removeStagger=function(){for(var m=0;
m<this._bars.length;m++){l.setStyle(this._bars[m].el,{transitionDelay:"0s"})}return this
};h._buildBars=function(){var o=null;var n=l.querySelectorAll(".bar-graph .bar",this.el);
var p=document.createElement("div");a.add(p,"bar-mask");this._bars=[];if(this.counters){this.counterWrapper=l.querySelector(".bar-graph-counters",this.el);
o=l.querySelectorAll(".bar-graph-counters .counter",this.el)}for(var m=0;m<n.length;
m++){this._bars[m]={};this._bars[m].el=p.cloneNode();this._bars[m].values=n[m].getAttribute("data-graph-values").split("|").map(parseFloat);
this.tallest=Math.max(this.tallest,Math.max.apply(Math,this._bars[m].values));n[m].appendChild(this._bars[m].el);
if(this.counters){this._bars[m].counter=o[m];this._bars[m].counter.Counter=new k(this._bars[m].counter,{start:this.start,duration:this.duration,end:this._bars[m].values[0],unitpos:this["counters-unitpos"]||null,unit:this["counters-unit"]||null})
}}this._ratio=100/this.tallest;return this};h._preRender=function(){for(var m=0;
m<this._bars.length;m++){if(this.start>0){l.setStyle(this._bars[m].el,{transform:"translateX(100%) scaleX(0)"})
}l.setStyle(this._bars[m].el,{transition:["transform",this.duration+"s",this._ease.cssString,(m*this.stagger)+"s"].join(" ")})
}l.setStyle(this._graph,{opacity:1});return this};h._create=function(){for(var m in j){this[m]=this.el.getAttribute("data-"+m);
this[m]=(this[m]!==null)?this[m]:j[m];this[m]=(m==="ease")?this[m]:(m==="counters")?!!this[m]:(m==="sideways")?!!this[m]:(m==="handheld-sideways")?!!this[m]&&d.isHandheld():(m==="single")?!!this[m]:(m.indexOf("counters")!==-1)?this[m]:parseFloat(this[m])
}this._first=true;this._engaged=false;this._staggered=true;this._currentTab=-1;
this._graph=l.querySelector(".bar-graph",this.el);this._hasTransforms=d.cssPropertyAvailable("transform");
this._ease=g(this.ease);this._buildBars()._preRender()}},{"./../shared/counter":1590,"ac-classlist":8,"ac-dom":109,"ac-easing":110,"ac-feature":198}],1590:[function(b,a,d){var g=b("ac-classlist");
var c=b("ac-clip").Clip;var j=b("ac-dom");var h={delay:0,start:0,end:100,duration:1.75,unit:"",unitpos:""};
function i(k,l){if(!j.isNode(k)){throw new TypeError("Counter(): First argument must be DOM element.")
}this.el=k;this.el.DataVisual=this;this._create(l||{})}var f=i.prototype;a.exports=i;
f.playEngaged=function(){if(!this._engaged){this._engaged=true;this.Clip.play()
}};f.play=function(){this.Clip.play()};f.pause=function(){this.Clip.pause()};f.reset=function(){this.Clip.reset()
};f.rebuild=function(k){this.Clip.destroy();k=k||{};this.end=(typeof k.end!=="undefined")?k.end:this.end;
this.delay=(typeof k.delay!=="undefined")?k.delay:this.delay;this._createClip();
return this.Clip};f._started=function(k){g.add(k.target.el,"counting")};f._updated=function(k){k.target.el.innerHTML=[parseInt(k.target.current),'<span class="unit ',k.target.unitpos,'">',k.target.unit,"</span>"].join("")
};f._completed=function(k){g.add(k.target.el,"counted")};f._createClip=function(){this.Clip=new c(this,this.duration,{current:this.end},{delay:this.delay,ease:"easeOutQuad",onDraw:this._updated,onStart:this._started,onComplete:this._completed})
};f._create=function(l){for(var k in h){this[k]=this.el.getAttribute("data-"+k);
this[k]=(this[k]!==null)?this[k]:l[k];this[k]=(this[k]!==undefined)?this[k]:h[k];
this[k]=(k==="unit"||k==="unitpos")?this[k]:(k==="duration"||k==="delay")?parseFloat(this[k]):parseInt(this[k])
}this.current=this.start;this._engaged=false;this._createClip();this.el.innerHTML=[parseInt(this.current).toLocaleString("en"),'<span class="unit ',this.unitpos,'">',this.unit,"</span>"].join("");
j.setStyle(this.el,{"transition-duration":this.duration+"s","transition-timing-function":this.Clip._ease.cssString})
}},{"ac-classlist":8,"ac-clip":13,"ac-dom":109}],1591:[function(c,b,h){var j=c("ac-clip").Clip;
var a=c("ac-clock");var f=c("ac-object/defaults");var k=c("ac-dom");var g={easing:"easeInOutQuint",gradientStart:null,gradientEnd:null,combine:false,initial:false,reverse:false,startAngle:0,duration:0.5,color:"#ccc",clock:a,lineWidth:4,canvas:null,label:null,size:null,percent:1,spacer:0,delay:0};
function d(n,m,l){if(!k.isNode(n)){throw new TypeError("Donut(): First argument must be DOM element.")
}this.el=n;this.el.DataVisual=this;this.graphEl=k.querySelector(".donut-graph",this.el);
this.segments=[];this._engaged=false;this._set(l||{});this._parseSegments(m||[]);
this._setInitial();if(this.initial){this._drawInitial()}this._onDraw=this._onDraw.bind(this)
}var i=d.prototype;i._setInitial=function(){if(!this.initial){return}if(this.initial.indexOf("#")!==0){this.initial="#"+this.initial
}};i._set=function(l){this.options=f(g,l);this.size=this.options.size=this.options.size||Math.min(this.graphEl.offsetWidth,this.graphEl.offsetHeight);
if(this.size<1){this.size=100}this.initial=this.graphEl.getAttribute("data-initial-stroke")||this.options.initial;
this.lineWidth=this.options.lineWidth;this.clock=this.options.clock;this.centerPoint=this.size;
this.size*=2;this.lineWidth*=2;if(this.canvas){this.context.clearRect(0,0,this.size,this.size)
}else{this.canvas=this.options.canvas||this._createCanvas();this.context=this.canvas.getContext("2d");
this.canvas.width=this.size;this.canvas.height=this.size}};i._generateSegmentsFromAttributes=function(){var u;
var x;var o;var s;var t;var l;var p;var m;var y;var r=[];var n=function(A){return A.split("|").map(function(C,B){if(C.indexOf("#")!==0){return"#"+C
}return C})};var z=function(A){return A.split("|").map(function(B){return B.split(",").map(function(C){return parseInt(C)
})})};var w=function(B,A){return B.map(function(C){return(C[A]/100)})};var v=function(B,A){return B.map(function(C){return(C[A])
})};u=this.graphEl.getAttribute("data-segments");x=this.graphEl.getAttribute("data-graph-values");
o=this.graphEl.getAttribute("data-over-hundred");t=this.graphEl.getAttribute("data-line-width");
p=this.graphEl.getAttribute("data-colors-end");l=this.graphEl.getAttribute("data-colors-start");
s=this.graphEl.getAttribute("data-label-ids");m=this.graphEl.getAttribute("data-start-angle");
y=this.graphEl.getAttribute("data-graph-combine");if(u===null){throw new TypeError("Donut(): No segments passed or parsed.")
}u=parseInt(u);x=z(x);o=!!o?z(o):null;p=n(p);l=n(l);t=!!t?t:this.options.lineWidth;
y=!!y?!!y:this.options.combine;for(var q=0;q<u;q++){r.push({lineWidth:t,percent:(x[0][q]/100),isOverHundred:!!o?o[0][q]:null,gradientEnd:p[q],gradientStart:l[q],values:w(x,q),overHundred:!!o?v(o,q):null,label:(!!s)?document.getElementById(s+"-"+(q+1)):null,reverse:(q>0)?true:false,spacer:(q<1)?5:0,combine:y});
if(u<2){r[q].startAngle=parseInt(m)||this.options.startAngle}if(r[q].combine){r[q].spacer=0;
this.duration=this.duration/2;if(q<1){r[q].easing="linear"}else{r[q].label=r[0].label;
r[q].startAngle=(46*3.6);r[q].reverse=false;r[q].delay=0.5;r[q].easing="easeOutQuad"
}}}return r};i._parseSegments=function(l){if(l.length<1){l=this._generateSegmentsFromAttributes()
}for(var m=0;m<l.length;m++){this.segments[m]=f(this.options,l[m]||{});this.segments[m].onComplete=l[m].onComplete;
this.segments[m].onUpdate=l[m].onUpdate;this.segments[m].onStart=l[m].onStart;this.segments[m].overHundred=l[m].overHundred;
this.segments[m].spacer=(this.segments[m].reverse)?-this.segments[m].spacer:this.segments[m].spacer;
this.segments[m].startAngle=this.segments[m].startAngle+(360*(this.segments[m].spacer/1000));
this.segments[m].spacer=Math.abs(this.segments[m].spacer);this.segments[m].degreeStartAngle=this.segments[m].startAngle-90;
this.segments[m].startAngle=this.calc._degreesToAngle(this.segments[m].degreeStartAngle);
this.segments[m].percent=this._parsePercent(m);if(this.segments[m].duration!==0){this.segments[m].endAngle=this.calc._degreesToAngle(this.segments[m].degreeStartAngle);
this.segments[m].destAngle=this._getDestination(m);this.segments[m].percent=0}else{this.segments[m].endAngle=this._getDestination(m);
this._drawArc(this.segments[m])}this._createSegmentClip(this.segments[m]);if(this.segments[m].label!==null){this.segments[m].label.textContent=0;
k.setStyle(this.segments[m].label.parentNode,{"transition-duration":this.segments[m].duration+"s","transition-timing-function":this.segments[m].clip._ease.cssString})
}}};i.calc={_degreesToAngle:function(l){return l*(Math.PI/180)}};i._parsePercent=function(l){var m=this.segments[l].percent;
this.segments[l].destPercent=Math.abs(m);if(this.segments[l].isOverHundred==1){m=m-(this.segments[l].spacer/500)-0.01
}else{m=m-(this.segments[l].spacer/500)}m=(this.segments[l].reverse)?-m:m;return m
};i._getDestination=function(m){var l;l=this.segments[m].degreeStartAngle;l=l+360*this.segments[m].percent;
return this.calc._degreesToAngle(l)};i._createCanvas=function(){var l=document.createElement("canvas");
this.graphEl.appendChild(l);return l};i._drawArc=function(l){this.context.lineWidth=l.lineWidth;
this.context.beginPath();this.context.strokeStyle=l.color;this.context.arc(this.centerPoint,this.centerPoint,(l.size)-(l.lineWidth*0.5),l.startAngle,l.endAngle,l.reverse);
this.context.stroke()};i._drawInitial=function(){this.context.lineWidth=this.lineWidth;
this.context.beginPath();this.context.strokeStyle=this.initial;this.context.arc(this.centerPoint,this.centerPoint,(this.size*0.5)-(this.lineWidth*0.5),0,360);
this.context.stroke()};i._onDraw=function(l){var n=false;this.context.clearRect(0,0,this.size,this.size);
if(this.initial){this._drawInitial()}for(var m=0;m<this.segments.length;m++){if(this.segments[m].clip.isPlaying()&&!n){n=true
}if(this.segments[m].label){if(this.segments[m].combine){if(m>0){this.segments[0].label.textContent=Math.round((this.segments[m].percent+this.segments[0].percent)*100)
}else{this.segments[0].label.textContent=Math.round((this.segments[m].percent)*100)
}}else{this.segments[m].label.textContent=Math.round((this.segments[m].percent)*100)
}}if(this.segments[m].gradientStart!==null&&this.segments[m].gradientEnd!==null){this.segments[m].color=this.context.createLinearGradient(this.centerPoint+Math.cos(this.segments[m].startAngle)*(this.segments[m].size/2),this.centerPoint+Math.sin(this.segments[m].startAngle)*(this.segments[m].size/2),this.centerPoint+Math.cos(this.segments[m].endAngle)*(this.segments[m].size/2),this.centerPoint+Math.sin(this.segments[m].endAngle)*(this.segments[m].size/2));
this.segments[m].color.addColorStop(0,this.segments[m].gradientStart);this.segments[m].color.addColorStop(1,this.segments[m].gradientEnd)
}this._drawArc(this.segments[m])}if(!n){this.clock.off("draw",this._onDraw)}};i._createSegmentClip=function(l){l.clip=new j(l,l.duration,{endAngle:l.destAngle,percent:l.destPercent},{clock:this.clock,ease:l.easing,delay:l.delay,onStart:l.onStart,onUpdate:l.onUpdate,onComplete:l.onComplete,destroyOnComplete:false});
return l};i.play=function(){this.clock.on("draw",this._onDraw);if(!this.clock.isRunning()){this.clock.start()
}for(var l=0;l<this.segments.length;l++){this.segments[l].clip.play();if(this.segments[l].label!==null){k.setStyle(this.segments[l].label.parentNode,{opacity:1})
}}return this};i.togglePlay=function(l){var m;var n;m=l||1;m--;n=this.segments.map(function(o){if(o.values&&o.values[m]){return{isOverHundred:o.overHundred[m],percent:o.values[m]}
}});this.update(n).play()};i.playEngaged=function(){if(!this._engaged){this._engaged=true;
this.play()}};i.reset=function(){this.clock.off("draw",this._onDraw);if(this.clock.isRunning()){this.clock.stop()
}for(var l=0;l<this.segments.length;l++){this.segments[l].clip.reset()}return this
};i.update=function(l){var o;var n;this.clock.off("draw",this._onDraw);if(this.clock.isRunning()){this.clock.stop()
}for(var m=0;m<this.segments.length;m++){n=this.segments[m].percent;this.segments[m].percent=l[m].percent;
this.segments[m].isOverHundred=l[m].isOverHundred;this.segments[m].percent=this._parsePercent(m);
this.segments[m].destAngle=this._getDestination(m);this.segments[m].percent=n;this._createSegmentClip(this.segments[m])
}return this};b.exports=d},{"ac-clip":13,"ac-clock":17,"ac-dom":109,"ac-object/defaults":1485}],1592:[function(b,d,a){var f=b("ac-classlist");
var h=b("ac-dom");var c=b("ac-window-delegate").WindowDelegate;var g=(function(){var q=[],o=null,j=null,n=null;
var k=function(){q[0]=document.getElementById("gallery-lgbt-pride-image-1");q[1]=document.getElementById("gallery-lgbt-pride-image-2");
o=document.getElementById("thumbnail-play")};var i=function(){if(!c.has("resize",p)){c.on("resize",p)
}};var m=function(){c.off("resize",p)};var p=function(){q[0].width=q[0].offsetWidth;
q[1].width=q[1].offsetWidth;j=window.innerWidth;n=(q[0].width+q[1].width-j)/2;l()
};var l=function(){if(n>0){var r=(q[0].width-n)+"px";h.setStyle(o,{width:r})}else{h.setStyle(o,{width:"100%"})
}};c.on("modalClose",i);c.on("modalOpen",m);return{init:function(){k();i();p()}}
}());d.exports=g},{"ac-classlist":8,"ac-dom":109,"ac-window-delegate":1568}]},{},[1587]);