//  Copyright (c) 2000-2015 ZEDO Inc. All Rights Reserved.
var n16="http://xp2.zedo.com/asw";var r13=new function(){var n3=this;
n3.a5=false;
var zzDtctRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7"},{"name":"ShockwaveFlash.ShockwaveFlash.6"},{"name":"ShockwaveFlash.ShockwaveFlash"}];var zzgetXObj=function(name){var d19=-1;
try{
d19=new ActiveXObject(name);
}
catch(err)
{
d19={
zzactiveXError:true};
}
return d19;
};
n3.r13=function(){
if(navigator.plugins&&navigator.plugins.length>0){
var o1='application/x-shockwave-flash';var t6=navigator.mimeTypes;
if(t6&&t6[o1]&&t6[o1].enabledPlugin&&t6[o1].enabledPlugin.description){
n3.a5=true;
}
}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){
var r45=-1;
for(var i=0;i<zzDtctRules.length&&r45==-1;i++){
try{
var d19=zzgetXObj(zzDtctRules[i].name);
if((typeof(d19)!=='undefined')&&!d19.zzactiveXError){
n3.a5=true;
return;
}
}catch(err){
n3.a5=false;
}}}
}();
};
get_flash_bit=function(){
var r4=navigator.userAgent.toLowerCase();var t21=(r4.indexOf('mac')!=-1);var p21=parseInt(navigator.appVersion);
var v22=(!t21&&(r4.indexOf('opera')==-1)&&(r4.indexOf('msie')!=-1)&&(p21>=4)&&(r4.indexOf('webtv')==-1
)&&(r4.indexOf('msie 4')==-1));
var w19=navigator.javaEnabled();var i3=1;var q32=document.createElement("audio");var n37=document.createElement("video");var a23={audio:(q32.play)?true:false,video:(n37.play)?true:false};
if(a23.audio&&a23.video){
i3 |=128;
}
if(w19){i3 |=4;}
if(r13.a5){i3 |=8;}
if(v22){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
i3 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
i3 |=16;
}}}
return i3;
};
var r14=get_flash_bit();
if(r14==null){
r14='';
}

if(typeof zflag_vals!='undefined'&&typeof zflag_vals.c!='undefined'){
var zflag_cid=zflag_vals.c;}
if(typeof zflag_vals!='undefined'&&typeof zflag_vals.s!='undefined'){
var zflag_sid=zflag_vals.s;}
var t11=0;var r0='';var w7=0;var v49;var y47;var e49;var c49;var y48;var p48;var p49='';var e14='0';var d12=0;var y30='';var zd_$='';var a5=0;var v26='';var r30='';
var v37="";var t34='';var e37='';var r18=new Array();var t13='';var z35=0;var w30='';var i11="";var v30="";var t30="";var z40="";var n17="";var n30="";var d25="";var t31="";var z25=new Array();
var a38=new Array();var r22=new Array();var r33=0;var w9="";var z20="";var z37="";
if(typeof zflag_ct!='undefined'){
z37=encodeURI(zflag_ct);
zflag_ct="";
}
if(typeof zflag_nid!='undefined'){
t11=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_charset!='undefined'){
r0=zflag_charset;
zflag_charset="";
}else{
r0="UTF-8";
}
if(typeof zflag_sid!='undefined'){
w7=zflag_sid;
}
if(typeof zflag_pbnw!='undefined'&&zflag_pbnw>0){
i11+="&pn="+zflag_pbnw;
zflag_pbnw=0;
}
if(typeof zflag_6!='undefined'){
i11+="&6="+zflag_6;
zflag_6=0;
}
if(typeof zflag_pbad!='undefined'){
i11+="&pa="+zflag_pbad;
zflag_pbad=0;
}
if(typeof zflag_pbch!='undefined'){
if(zflag_pbch.indexOf("/")!=-1){
var z47=zflag_pbch.substr(0,zflag_pbch.indexOf("/"));
i11+="&pc="+z47;
}
else{
i11+="&pc="+zflag_pbch;
}
zflag_pbch="0";
}
if(typeof zflag_pbr!='undefined'){
i11+="&pr="+zflag_pbr;
zflag_pbr=0;
}
if(typeof zflag_pbsid!='undefined'){
i11+="&ps="+zflag_pbsid;
}
if(typeof zflag_tmy!='undefined'){
v30+="&tmy="+zflag_tmy;
zflag_tmy=0;
}
if(typeof zflag_cid!='undefined'){
zflag_cid=zflag_cid.toString();
if(zflag_cid.indexOf("/")>-1){
e14=zflag_cid.substr(0,zflag_cid.indexOf("/"));
}else{
e14=zflag_cid;
}
if(e14<0||e14>999999){
e14=0;
}}
if(typeof zflag_chanlimits!='undefined'){
z35=zflag_chanlimits;
zflag_chanlimits=0;
}
if(typeof zflag_sz!='undefined'){
d12=zflag_sz;
if(d12<0||d12>95){
d12=0;
}
zflag_sz=0;
}
if(typeof zflag_msize!='undefined'){
zd_msz=F55(zflag_msize,screen.width,screen.height);
if(typeof zd_msz!='undefined'){
d12=zd_msz;
}
zflag_msize="";
}
if(typeof zflag_alter_sz!='undefined'){
n17=zflag_alter_sz;
if(n17<0||n17>95){
n17=0;
}
zflag_alter_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
y30=zflag_kw;
zflag_kw="";
}
if(typeof zflag_$!='undefined'){
zd_$=zflag_$;
zflag_$='';
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
v26="&gc="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
v37="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=encodeURIComponent(zflag_click);
r30='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_ad_title!='undefined'){
zzTitle=escape(zflag_ad_title);
w30='&t='+zzTitle;
zflag_ad_title="";
}
if(typeof zflag_hasAd!='undefined'){
t34='&y='+zflag_hasAd;
}
if(typeof zflag_num!='undefined'){
e37=zflag_num;
zflag_num=0;
}
if(typeof zflag_ck!='undefined'){
t13='&ck='+zflag_ck;
zflag_ck=0;
}
if(typeof zflag_message_transport!='undefined'){
t30=zflag_message_transport;
zflag_message_transport=0;
}
if(typeof zflag_append_message!='undefined'){
z40=zflag_append_message;
zflag_append_message=0;
}
if(typeof zflag_multi_param!='undefined'){
n30="&mp="+zflag_multi_param;
zflag_multi_param="";
}
if(typeof zflag_smooth!='undefined'){
d25+="&ssm="+zflag_smooth;
}
if(typeof zflag_slide_speed!='undefined'){
d25+="&ssp="+zflag_slide_speed;
}
if(typeof zflag_slider_close_text!='undefined'){
d25+="&sct="+zflag_slider_close_text;
}
if(typeof zflag_page!='undefined'&&zflag_page!='[INSERT_PAGE_URL]'){
w9=zflag_page;
zflag_page='';
}
if(typeof zflag_ref!='undefined'&&zflag_ref!='[INSERT_REFERER_URL]'){
z20=zflag_ref;
zflag_ref='';
}
if(typeof zd_pg_id=='undefined'){
zd_pg_id=(new Date).getTime();
}
var r18="d1,d2,d3,d4,d5,d6,d7,d8,d9,da,db,dc,dd,de,df".split(",");
function B14(){
var v19=new Array();
for(var i=0;i<r18.length;i++){
v19[i]=r18[i].substring(1);
}
return v19;
}
function F13(){
var p25=r18;var a6=new Array();var y13=new RegExp(",","g");
for(var i=0;i<p25.length;i++){
if(eval('typeof(zflag_'+r18[i]+')!="undefined"')){
a6[i]=eval('zflag_'+r18[i]);
if(a6[i]!=""){
a6[i]=a6[i].replace(y13,"Z");
}}}
return a6;
}
a38=B14();
r22=F13();
for(var i=0;i<r22.length;i++){
if(r22[i]!=""&&typeof r22[i]!='undefined'){
z25[z25.length]=a38[i]+":"+r22[i];
}}
if(z25.length!=0){
t31='&dm='+z25;
}
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=w7;var zzPbNId=y47;var zzPbEId=e49;var zzPbAId=c49;var zzPbCId=y48;var zzPbGeoLvl=p48;var zzPbk=p49;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzPbSId=v49;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;var zzNw=0;var zzCh=0;
var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
if(r14<0||r14>159){
r14=1;
}
var d11=new Array();
function B0(zp_label){
if(!d11[zp_label]){
var q35=document.cookie;var r7=new Array();var r15=new Array();
r7=q35.split(';');
var r34=(r7!=null)?r7.length:0;
for(var i=0;i<r34;i++){
r7[i]=r7[i].replace(/^\s/,'');
r15=r7[i].split('=');
d11[r15[0]]=r15[1];
}}
if(d11[zp_label]){
return d11[zp_label];
}else{
return '';
}}
function B62(){
var t43=new Date();var z50=new Date(t43.getFullYear(),0,1,0,0,0,0);var q45=new Date(t43.getFullYear(),6,1,0,0,0,0);var v48=Math.max(z50.getTimezoneOffset(),q45.getTimezoneOffset());
return-v48/60;
}
r33=B62();
function U9(isJSTag){
var o31='';
try{
if(isJSTag){
o31=(typeof(location.href)=='undefined'?"":encodeURIComponent(location.href.split("?")[0]));
}else{
o31=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(err){}
return o31;
}
function U16(url){
var p0="";
try{
if(url&&url.length>0){
if(url.indexOf("://")>-1){
p0=url.split('/')[2];
}else{
p0=url.split('/')[0];
}}
}catch(t){}
return p0;
}
function F37(){
var url="";
try{
if(!window.location.ancestorOrigins){
return "";
}
url=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]||"";
}catch(t){}
return url;
}
function U29(isJsTag){
var n39="";
try{
var d46=U16(decodeURIComponent(U9(isJsTag)));var t50=U16(F37());var v45=U16(decodeURIComponent((w9)));
n39=encodeURIComponent(d46+"_"+t50+"_"+v45);
}catch(t){}
return n39;
}
function F21(isJSTag){
var y38='';
try{
if(isJSTag){
y38=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(e){}
return y38;
}
function U68(isJSTag){
if(w9!=''){
var c46=encodeURIComponent(w9.split("?")[0]);var y43=U9(isJSTag);
if(c46==y43){
return '';
}else{
return y43;
}}
return '';
}
function B20(tag_dimid,tag_height,tag_width){
this.tag_dimid=tag_dimid;
this.tag_height=tag_height;
this.tag_width=tag_width;
}
function U20(p2,scrWidth,scrHeight){
if(typeof p2=='undefined'||p2.length==0||typeof scrWidth=='undefined'||typeof scrHeight=='undefined'){
return;
}
p2.sort(B59);
p2.sort(F30);
var d48=p2[p2.length-1];
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_width)<=parseInt(scrWidth)&&parseInt(p2[i].tag_height)<=parseInt(scrHeight)){
return p2[i].tag_dimid;
}}
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_width)<=parseInt(scrWidth)){
return p2[i].tag_dimid;
}}
p2.reverse();
p2.sort(F52);
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_height)<=parseInt(scrHeight)){
return p2[i].tag_dimid;
}}
return d48.tag_dimid;
}
function F30(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function B59(a,b){
if(parseInt(a.tag_width)>parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_width)<parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function F52(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)){
return 1;
}else{
return 0;
}}
function F55(msize,scrWidth,scrHeight){
if(typeof msize=='undefined'){
return;
}
var arr=msize.replace(/^\s+|\s+$/g,'').split(",");var p2=new Array();
for(i=0;i<arr.length;i++){
var v40=arr[i].replace(/^\s+|\s+$/g,'');
if(null!=v40.match(/^\d+x\d+:\d+$/)){
p2.push(B43(v40));
}}
return U20(p2,scrWidth,scrHeight);
}
function B43(val){
var arr=val.split(":");var q41=arr[0].split("x");
return new B20(arr[1],q41[1],q41[0]);
}

z0=n16+'/fm.js?c='+e14+'&a='+z35+'&f='+e37+'&n='+t11
+'&r='+r14+'&d='+d12+'&adm='+n17+'&q='+y30+'&$='+zd_$+i11+v30+'&s='+w7+v26+v37+r30+t34+w30+
'&ct='+z37+t31+'&z='+Math.random()+'&tt=0'+n30+'&tz='+r33+'&pu='+((w9!='')?encodeURIComponent(w9.split("?")[0]):U9(true))+
'&ru='+((z20!='')?encodeURI(z20.split("?")[0]):F21(true))+'&pi='+zd_pg_id+'&ce='+r0+'&zpu='+U29(true)+'&tpu='+((w9!='')?'1':'0');
z0='<scr'+'ipt language="javascript" src="'+z0+'" charset='+r0+'></scr'+'ipt>';
var d20=B0("ZEDOIDA");
if(!(d20=="OPT_OUT"&&d12==15)){
document.write(z0);
}