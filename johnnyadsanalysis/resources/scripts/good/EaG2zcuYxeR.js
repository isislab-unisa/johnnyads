/*!CK:1181169532!*//*1439630207,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["6AU0l"]); }

__d('VideoRotate',['AsyncRequest','Dialog','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l,m){'use strict';this.videoFbid=l;this.rotateURI=m;}k.prototype.motionRotate=function(l){'use strict';this.waitDialog=new i().setTitle(j._("\u041f\u043e\u0432\u043e\u0440\u043e\u0442 \u0432\u0438\u0434\u0435\u043e")).setBody(j._("\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u043f\u043e\u043a\u0430 \u0432\u0430\u0448\u0435 \u0432\u0438\u0434\u0435\u043e \u043f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f.")).setModal(true);this.waitDialog.show();new h().setAllowCrossOrigin(true).setURI(this.rotateURI).setData({video_id:this.videoFbid,degrees:l}).setFinallyHandler((function(m){this.waitDialog.hide();}).bind(this)).setHandler(function(m){window.location.reload();}).send();};f.exports=k;},null);