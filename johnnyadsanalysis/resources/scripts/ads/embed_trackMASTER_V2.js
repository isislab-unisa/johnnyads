(function($){var g,d,j=1,a,b=this,f=!1,h="postMessage",e="addEventListener",c,i=b[h]&&!$.browser.opera;$[h]=function(k,l,m){if(!l){return}k=typeof k==="string"?k:$.param(k);m=m||parent;if(i){m[h](k,l.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else{if(l){m.location=l.replace(/#.*$/,"")+"#"+(+new Date)+(j++)+"&"+k}}};$.receiveMessage=c=function(l,m,k){if(i){if(l){a&&c();a=function(n){if((typeof m==="string"&&n.origin!==m)||($.isFunction(m)&&m(n.origin)===f)){return f}l(n)}}if(b[e]){b[l?e:"removeEventListener"]("message",a,f)}else{b[l?"attachEvent":"detachEvent"]("onmessage",a)}}else{g&&clearInterval(g);g=null;if(l){k=typeof m==="number"?m:typeof k==="number"?k:100;g=setInterval(function(){var o=document.location.hash,n=/^#?\d+&/;if(o!==d&&n.test(o)){d=o;l({data:o.replace(n,"")})}},k)}}}})(jQuery);

function MSGR_inizio_preroll()
{
	//console.log("########### MSGR start_preroll ###########");
}

function MSGR_fine_preroll()
{
	//console.log("########### MSGR fine_preroll ###########");
}

function MSGR_inizio_video()
{
	//console.log("########### MSGR inizio_video ###########");
}

function MSGR_fine_video()
{
	// fix absolute position on smartpad devices
	$('body').mousemove().click();
	
	//console.log("########### MSGR fine_video ###########");
	if (document.referrer.match(/^http:\/\/video/)) {
		$.postMessage("playNext", document.referrer );
	}
}



var queue_timer = null; // timer per il caricamento della pagina successiva/countdown
var queue_countdown = 10; // secondi del countdown
$(function(){
  try {
	if (window.self !== window.top) {
		/* codice player */
		$.receiveMessage(function(e){
			if (e.data == 'play') {
				// per invocarlo: $.postMessage("play", 'http://vid.ilmessaggero.it', $('#player iframe').get(0).contentWindow );
				//console.log("RECEIVED PLAY");
				if (document.getElementsByTagName('embed').length > 0) {
					document.getElementsByTagName('embed')[0].playCommand();
				} else if (document.getElementsByTagName('object').length > 0) {
					document.getElementsByTagName('object')[0].playCommand();
				} else if (document.getElementsByTagName('video').length > 0) {
					document.getElementsByTagName('video')[0].play();
				}
			}
			if (e.data == 'pause') {
				//console.log("RECEIVED PAUSE");
				if (document.getElementsByTagName('embed').length > 0) {
					document.getElementsByTagName('embed')[0].pauseCommand();
				} else if (document.getElementsByTagName('object').length > 0) {
					document.getElementsByTagName('object')[0].pauseCommand();
				} else if (document.getElementsByTagName('video').length > 0) {
					document.getElementsByTagName('video')[0].pause();
				}
			}
		}, document.referrer.match(/http:\/\/[^\/]+/) );
		
	} else {
		/* codice pagina */
		$.receiveMessage(function(e){
			if (e.data == 'playNext') {
				//console.log("RECEIVED");
				var nextVideo = $('#nextOverlay .anteprima a').attr('href');
				if (typeof nextVideo == 'string' && nextVideo != '') {
					$('#nextOverlay a.annulla').click(function(e) {
						e.preventDefault();
						clearTimeout(queue_timer);
						$('#nextOverlay').hide();
					});
					
					$('#nextOverlay').show();
					queue_countdown = 5;
					$('#nextOverlay .countdown').html(queue_countdown);
					queue_timer = window.setInterval(function() {
						$('#nextOverlay .countdown').html(queue_countdown);
						if (queue_countdown == 0) {
							document.location.href = nextVideo;
							clearTimeout(queue_timer);
						}
						queue_countdown--;
					}, 1000);
				}
			}
		}, $('#player iframe').attr('src').match(/http:\/\/[^\/]+/) );
		
	}
	
  } catch (e) {
	
  }
  
  
});


