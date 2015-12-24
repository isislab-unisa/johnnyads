//v2.6 08/13/14

var title = document.getElementsByTagName("title")[0].innerHTML;

if ((title=='Taylor Swift - Style'))
{
      $("#main").css('height','100%');
      $("#main").attr('height','100%');
    }
var s = 0;
var ur = window.location.href;
var ur2 = ur.replace('taste', '*****');
if(ur==ur2)
{
  s=0;
}
else
{
  s=1;
}


if(isMobile())
{
// mobile offset code
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
var r=0;


var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
adapt_to_orientation();
location.reload();



}, false);




$(document).ready(function() {


    var title = jQuery(this).attr('title');

    if (!isMobile() && (title=='Taylor Swift - Style'))
      $("#main").css('height','100%');


        // bind to handler
          //$('body').bind('orientationchange', adapt_to_orientation);

          // call now
if(s==1)
{

$('meta[name=viewport]').attr('content','width=780,user-scalable=yes,initial-scale=0.41,minimum-scale=0.41');
  vp = document.querySelector("meta[name=viewport]");
  vp.setAttribute('content', 'width=780,user-scalable=yes,initial-scale=0.41,minimum-scale=0.41');
  $('meta[name=apple-mobile-web-app-capable]').attr('content','');
  $('.iframe-stretch-height').attr('width','780');
  $('.iframe-stretch-height').attr('width','780');
   $('.iframe-stretch-height').attr('data-width','780');
   $('.iframe-stretch-height').attr('data-height','1200');
   var delay=3000;//1 seconds
    setTimeout(function(){
$('.iframe-stretch-height').css({'width':'780px','height':'1200px','z-index':'10000','position':'relative'});
    },delay);

   projectWidth=780;

}
 adapt_to_orientation();



        });

// end of mobile offset code

}
else
{

}

function isMobile()
{
if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
     return true;
    };
    return false;
}

function adapt_to_orientation() {

      var content_width, screen_dimension;
      if(s==1)
      {
        projectWidth=780;
      }
r=r+1;
      if (window.orientation == 0 || window.orientation == 180) {
        // portrait
        content_width = projectWidth;
  screen_dimension = screen.width * 0.98; // fudge factor was necessary in my case

      } else if (window.orientation == 90 || window.orientation == -90) {
        // landscape
        content_width = projectWidth;
        screen_dimension = screen.height;
      }
  if(isAndroid)
  {
  screen_dimension=effectiveDeviceWidth();

  }
      var viewport_scale = screen_dimension / content_width;
   if(s==1)
   {
// resize viewport
 $('meta[name=viewport]').attr('content',
        'width=' + content_width + ', ' +
        'maximum-scale=' + viewport_scale);
var delay=3000;//1 seconds
    setTimeout(function(){
$('meta[name=viewport]').attr('content',
        'width=' + content_width + ', ' +
        'initial-scale=' + viewport_scale,'maximum-scale=' + viewport_scale,'minimum-scale=' + viewport_scale);
    //your code to be executed after 3 seconds
    },delay);
   }
   else
   {
      // resize viewport
 $('meta[name=viewport]').attr('content',
        'width=' + content_width + ', ' +
        'maximum-scale=' + viewport_scale);
var delay=3000;//1 seconds
    setTimeout(function(){
$('meta[name=viewport]').attr('content',
        'width=' + content_width + ', ' +
        'initial-scale=' + viewport_scale);
    //your code to be executed after 3 seconds
    },delay);
}
//alert(hg);

//alert(screen_dimension + ' - ' +window.orientation);
//alert($('#metatest').val());
//alert($('meta[name=viewport]').val());

var m = $( "meta[name=viewport]" ).attr( "content" );
//alert(m);
 }
function effectiveDeviceWidth() {
var deviceWidth = window.orientation == 0 ? window.screen.width : window.screen.height;
    if (navigator.userAgent.indexOf('Android') >= 0 && window.devicePixelRatio) {
    var deviceWidth = deviceWidth / window.devicePixelRatio;
  }
rounded=Math.ceil(deviceWidth);
//alert(screen.width + 'hh' + screen.height + 'dw' + deviceWidth+'pr'+window.devicePixelRatio);
if(deviceWidth<320)
{
 return window.screen.width;
}

else
{
var width2=deviceWidth * window.devicePixelRatio;


  if (window.orientation == 0 || window.orientation == 180) {
    return deviceWidth;
  }
  else if (window.orientation == 90 || window.orientation == -90) {


    return deviceWidth;


  }
}
}