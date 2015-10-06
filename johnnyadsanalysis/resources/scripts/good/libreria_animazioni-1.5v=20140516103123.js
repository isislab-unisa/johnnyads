function checkCookieRCSlogin(){
	var usn=jQuery.cookie("rcsParams");
	if(usn!=null){
		var usn=jQuery.cookie("rcsLogin");
		if(usn.indexOf("@")==-1){
			jQuery.cookie("rcsLogin", null,{path: '/', domain  : 'corriere.it'});
			$('#content-generated-dlt').html(htmlLogin);
		}else{

					usnNum=usn.indexOf("|")+1;
					usnNum2=usnNum + 7;
					idrunanumber=usn.substring(usnNum,usnNum2);
					if (idrunanumber.length%2!=0) {
						idrunaValassis = '0'+idrunanumber;
					}else {
						idrunaValassis = idrunanumber;
					}
					idrunanumbersplit = idrunaValassis.match(/../g).join('/');
					fileNickjs = '/community-corriere/utenti/'+idrunanumbersplit+'/'+idrunanumber+'.json';
					$.ajax({ 
					    url: fileNickjs,
					    async: true,
						cache: false,
					    dataType: "json",
					    success: function(json) {
							$.each(json, function(i, multibar) {
								nick = multibar.nick;
								$("#user-name").html(nick);
								$("#user-name").css("display", "inline");
								return false;
							});
						},  // fine callback success chiamata JSON
				    	error: function(json){
				    		//AGGIUNTA: Controllo se usn ha la @, altrimenti prendo la prima parte della mail dallo usn
							usn = jQuery.cookie("rcsLogin");
							usn = usn.substring(0,usn.indexOf("@"));
							usn = usn.replace("\"","");
				    		$("#user-name").html(usn);
							$("#user-name").css("display", "inline");
				    	}
					});	// fine $.ajax()
			
			$("#headBoxLogin .notlogged").css("display", "none");
			$("#headBoxLogin .logged").css("display", "inline");
			
		}

	} else {
		$("#headBoxLogin .logged").hide();
		$("#headBoxLogin .notlogged").show();
	}
}
		$("#headBoxLogin a.headUsn").click(function(){
			$("#formModifica").submit();
			return false;
		});
	corcommunity_var = "/corcommunitynew/accesso/LogOut.do";
	$("#headBoxLogin .notlogged").show();

	$("#headBoxLogin .headLogout").click(function(event){
		event.preventDefault();	
		//$("#formLogout").submit();
		$.ajax({
		  type: "POST",
		  data: {contentPath : ""},
		  cache: false,
		  dataType: "html",
		  url: corcommunity_var,
		  success: function(data) {
			if((document.location.href).indexOf("ModificaRegistrazioneSkinoverlay.do") > -1){
				document.location = "/";
			}			  
			//checkCookieRCSlogin();
			window.location.reload();
		  },
		  error: function(data) {
			if((document.location.href).indexOf("ModificaRegistrazioneSkinoverlay.do") > -1){
				document.location = "/";
			}			  
			//checkCookieRCSlogin();
			window.location.reload();
		  } 		  
		});		
	});

$(window).load(function() {

	setTimeout("checkCookieRCSlogin()", 1000);

});