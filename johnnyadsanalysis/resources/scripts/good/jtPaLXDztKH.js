/*!CK:110227219!*//*1441289897,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["6AU0l"]); }

__d('VideoRotate',['AsyncRequest','Dialog','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l,m){'use strict';this.videoFbid=l;this.rotateURI=m;}k.prototype.motionRotate=function(l){'use strict';this.waitDialog=new i().setTitle(j._("Ocenianie filmu")).setBody(j._("Czekaj. Trwa obracanie filmu.")).setModal(true);this.waitDialog.show();new h().setAllowCrossOrigin(true).setURI(this.rotateURI).setData({video_id:this.videoFbid,degrees:l}).setFinallyHandler((function(m){this.waitDialog.hide();}).bind(this)).setHandler(function(m){window.location.reload();}).send();};f.exports=k;},null);