// numero dei post da mostare in ogni pagina se 0 si evita la paginazione	
var post4page = 10;
// nome skin (deve conicidere con lo skin della sezione di upload)
var skin = 'generic';
// numero di template aggiuntivi e container dei template
var ugcAddTemplNum = 0;
var ugcAddTempl = new Array();
// testo del link x visualizzare post figli @param %n% : numero post figli
var viewChildsText = "%n% commenti a questo video."
// testo del link x visualizzare la paginazione @param %n% : numero pagina @param %t% : totale pagine
var viewPagesText = "%n%";
if (typeof(tagMinFilter)=="undefined")
    tagMinFilter = 0;

var ugc_show_function = 	'<script type="text/javascript">'+
	'	function ugc_showCommentDetail(pageURL,threadId,idmessaggio){'+
	'		parent.window.location = "/commenti/"+pageURL+"?idarticolo="+threadId+"&idmessaggio="+idmessaggio;'+
	'	}'+
	'</script>';

var ugc_container = ''+
'<br />\n'+
'<div id="ugc-container">\n';
if(window.location.href.match("^http://((inchieste|www).repubblica.it|www.lescienze.it)")==null){
	if(window.location.href.match("^http://video.repubblica.it")==null){
	  ugc_container += ugc_show_function;
    }
	ugc_container += ''+
	'	<ul id="ugc-nav">\n'+
	'		<li><a href="javascript:updateSort(\'date\')">I pi&ugrave; recenti</a></li>\n'+
	'		<li><a href="javascript:updateSort(\'mean_vote\')">I migliori</a></li>\n'+
	'		<li><a href="javascript:updateSort(\'votes\')">I pi&ugrave; votati</a></li>\n'+
	'		<li><a href="javascript:updateSort(\'comments\')">I pi&ugrave; discussi</a></li>\n'+
	'		<li><a href="javascript:displayPerTag()">Per tag</a></li>\n'+
	'	</ul>\n';
}
ugc_container += ''+
'	<div  id="forum_pagination" class="ugc-pagination"></div>\n'+
'		<ol id="ugc_posts"'+(window.location.href.match("^http://((inchieste|video|www).repubblica.it|www.lescienze.it)")==null ? ' class="ugc_clickdetail" ' : '')+'>\n'+
'			Caricamento in corso...'+
'		</ol>\n'+
'	<div  id="forum_pagination2" class="ugc-pagination"></div>\n'+
'</div>\n'+
'<br />\n';

var ugcTemplate = '';

//gestione pagina di dettaglio
if(window.location.href.match("^http://((inchieste|video|www).repubblica.it|www.lescienze.it)")!=null){
	ugcTemplate += '<li {if oddEven == 1} class="ugc-zebra" {/if} >\n';
}else if(window.location.href.match("^http://(bari|bologna|firenze|genova|milano|napoli|palermo|parma|roma|torino).repubblica.it")!=null){
	ugcTemplate += '<li {if oddEven == 1} class="ugc-zebra" {/if} onclick="ugc_showCommentDetail(\'index.html\',threadId,\'${id}\')" {if oddEven == 1}class="ugc-zebra"{/if}>\n';
}else if(window.location.href.match("^http://www.nationalgeographic.it/")!=null){
	ugcTemplate += '<li {if oddEven == 1} class="ugc-zebra" {/if} onclick="ugc_showCommentDetail(\'index.html\',threadId,\'${id}\')" {if oddEven == 1}class="ugc-zebra"{/if}>\n';
}else{
	ugcTemplate += '<li {if oddEven == 1} class="ugc-zebra" {/if} onclick="ugc_showCommentDetail(\'dettaglio.html\',threadId,\'${id}\')" {if oddEven == 1}class="ugc-zebra"{/if}>\n';
}

ugcTemplate += '{if attachs.length>0}\n'+
	'	{if  attachs[0].url.indexOf("audio")>=0}\n'+
	'		<img src="http://commenti.kataweb.it/commenti/images/generic/audio70x70.png" width="70" height="70"  alt="Foto" />\n'+
	'	{else}\n'+
	'		<img src="${attachs[0].thumb}" width="70" height="70" alt="Foto" />\n'+
	'	{/if}\n'+
	'{/if}\n'+
	'	<h3>${titolo}</h3>\n'+
	'	{if  attachs.length>0}\n'+
	'	<p class="ugc-subtitle">(${attachs.length} foto/audio/video)</p>\n'+
	'	{else}\n'+
	'	<p class="ugc-subtitle"></p>\n'+
	'	{/if}\n'+
	'	<p>${testo}</p>\n'+
	'	<div class="clear"></div>\n'+
	'		<p class="ugc-author">Inviato da <cite>${autore}</cite> il ${data}</p>\n'+
	'	<div class="clear"></div>\n'+
	'</li>\n';

var templateTagCloud = ''+
	'<ul class="tagcloud">\n'+
	'{for t in tags}'+
		'{if cloud[t].count>tagMinFilter}'+
			'<li><a href="javascript:printPostsTagged(\'${t}\')" class="size${cloud[t].size}" title="${cloud[t].count} contenuti">${t}</a></li>\n'+
		'{/if}'+
  '{/for}'
	'</ul>\n'+
	'';

