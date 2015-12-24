if (window.matchMedia("(max-width: 600px)").matches) 
	document.cookie = 'unisa[smartPhone]=1; path=/';
else 
	//document.cookie = 'unisa[smartPhone]=;path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie = 'unisa[smartPhone]=0; path=/';
	


$(function () {

    $(".target-dropdown .dropdown-menu li a").click(function () {
        $(this).parents(".target-dropdown").children(".btn:first-child").text($(this).text());
        $(this).parents(".target-dropdown").children(".btn:first-child").attr('href', ($(this).attr('href')));
    });

    $(".dropdown .dropdown-menu li a").click(function () {
        $(this).parents(".dropdown").children("a").children("span").text($(this).text());
    });

    // Setup drop down menu
    $('.dropdown-toggle').dropdown();

    // Fix input element click problem
    $('.dropdown input, .dropdown label').click(function (e) {
        e.stopPropagation();
    });

    $('#blueimp-gallery').data('useBootstrapModal', false);
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);

	$('#form-search').submit(function(event){
		if($('#form-search input').val() == '')
			return false;	
	});
	
	/*$('#btn-search').click(function(){
		
		if($('#form-search .search-hide').length){
			$('#form-search .search-hide').addClass('search-show');
			$('#form-search .search-hide').removeClass('search-hide');
			$('ul.search-show').addClass('search-hide');
			$('ul.search-show').removeClass('search-show');
			$('#form-search input').focus();
		}else{
			$('#form-search .search-show').addClass('search-hide');
			$('#form-search .search-show').removeClass('search-show');
			$('ul.search-hide').addClass('search-show');
			$('ul.search-hide').removeClass('search-hide');
			
			if($('#form-search input').val() != '')
				$('#form-search').submit();			
		}
		
		
		//$('#unisa-utilities-bar .collapse ul').hide();
		return false;
	
	});*/

		 $.scrollUp({
	animation: 'slide',
	scrollImg: false,
	scrollText: '<span class="fa fa-arrow-up"></span>',
	easingType: 'linear' 
  
});	
	
    $('#side-menu a.folder').click(function () {
        i = $(this).find('i');
        if (i.hasClass('fa-plus-square')) {
            i.removeClass('fa-plus-square');
            i.addClass('fa-minus-square');
        } else if (i.hasClass('fa-minus-square')){
            i.removeClass('fa-minus-square');
            i.addClass('fa-plus-square');
        } else if (i.hasClass('fa-lock')){
            i.removeClass('fa-lock');
            i.addClass('fa-unlock-alt');
        } else if (i.hasClass('fa-unlock-alt')){
            i.removeClass('fa-unlock-alt');
            i.addClass('fa-lock');
        }

    });


    $('a.sharePopup').on('click', function (e) {
        popupCenter($(this).attr('href'), $(this).attr('data-original-title'), 580, 470);
        e.preventDefault();
    });

$('body').tooltip({   
   selector: '[data-toggle=tooltip]',
   container: 'body'
 });

	// $('[data-toggle="tooltip"]').tooltip()


 /*   $('#rubrica-input').typeahead({
        display: 'name',
        onSelect: function (item) {
            document.location.href = '/unisa-rubrica/user-contact/matricola/' + item.value;
        },
        ajax: {
            url: '/unisa-rubrica/suggest',
            triggerLength: 3
        },
        items: 20
    });

    $('#rubrica-input-clear').click(function () {
        $('#rubrica-input').val('');
        return false;
    });
*/
    /* smooth scrolling for scroll to top */
    $('.scroll-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
        return false;
    });


});

(function () {
    if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
                document.createTextNode("@-ms-viewport{width:auto!important}")
                );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
})();

popupCenter = function (url, title, w, h) {
// Fixes dual-screen position Most browsers Firefox
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 3) - (h / 3)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
// Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
};

$(document).ready(function(){

	$.cookieBar({
				message: "<small>Il portale di ateneo utilizza i cookie per fornire alcuni servizi e migliorare l\'esperienza utente, potrebbero inoltre essere inviati cookie di terze parti &nbsp;</small>",
				acceptButton: true,
				acceptText: "Accetto",
				policyButton: true,
				policyText: "Note sulla Privacy",
				policyURL: "http://web.unisa.it/amministrazione-trasparente/privacy",
				acceptOnContinue: false,
				effect: "slide",
				fixed: false,
				bottom: true,
				zindex:100
	});

    //var offset = 70; // per top bar
	
    $("a[href^='#']").on('click', function (e) {
		var  offset = 0;
		if(!$("#unisa-utilities-bar").hasClass('animated'))
			offset = $("#unisa-utilities-bar").height();// + $("#cookie-bar").outerHeight();
		
        if ((!$(this).hasClass('unisa-dialog')) && (!$(this).hasClass('my-dialog')) && (!$(this).hasClass('no-scroll')) && ($(this).data('toggle') != 'collapse') && ($(this).data('toggle') != 'tab') && ($(this).attr('id')!='scrollUp')) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - offset}, 300);
        }
    });			

	$('#main-menu .navbar-toggle').on('click', function (e) {
		var  offset = 8;
		if($("#unisa-middle:in-viewport").length==0){
		    if($(this).hasClass("collapsed"))
				$('html, body').animate({
					scrollTop: $('#main-menu .navbar-toggle').offset().top - offset}, 500);	
        }
	});

	$('input, textarea').placeholder();

				
});