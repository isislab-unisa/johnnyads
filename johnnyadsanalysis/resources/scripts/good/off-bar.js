$( document ).ready(function() {
				$navbar = $("#unisa-utilities-bar");
				
				
				$("#unisa-utilities-bar .btn-search").on("click", function(e) {  
					if (!window.searching) {
						$("#off-search").collapse('show');
						$("#search-query").val("");
					    $("#search-query").focus();
						
						 
					}
					e.preventDefault();
				  });		  
				$("#search-query").on("focus", function() {
						return window.searching = true;
				}).on("blur", function() {
					 
					  return setTimeout(function() {
					   $("#off-search").collapse('hide');
					  return window.searching = false;
					}, 200);
				});		
			  
			 $("#unisa-utilities-bar .btn-language").on("click", function(e) {  
				if (!window.sel_language) {
					$("#off-language").collapse('show');
					$("#off-language a").first().focus();
				}
				e.preventDefault();
			});
				  
			$("#off-language a").first().on("focus", function() {
				return window.sel_language = true;
			}).on("blur", function() {
				
				return setTimeout(function() {
				  $("#off-language").collapse('hide');
				  return window.sel_language = false;
				}, 200);
			});	

			 $("#unisa-utilities-bar .btn-off-profili").on("click", function(e) {  
				if (!window.sel_profilo) {
					$("#off-profili").collapse('show');
					$("#off-profili a").first().focus();
					//$("#off-profili a.active").focus();
				}
				e.preventDefault();
			});
				  
			$("#off-profili a").on("focus", function() {
				return window.sel_profilo = true;
			}).on("blur", function() {
				return setTimeout(function() {
				  $("#off-profili").collapse('hide');
				  return window.sel_profilo = false;
				}, 200);
			});	

			
			$("#unisa-utilities-bar .btn-off-rubrica").on("click", function(e) {  
				if (!window.off_rubrica) {
					$("#off-rubrica").collapse('show');
					$("#off-rubrica input").first().focus();
					$("#off-rubrica input").first().val("");
				}
				e.preventDefault();
			});
				  
			$("#off-rubrica input").first().on("focus", function() {
				return window.off_rubrica = true;
			}).on("blur", function() {
				return setTimeout(function() {
				  $("#off-rubrica").collapse('hide');
				  return window.off_rubrica = false;
				}, 200);
			});			

			
			
			  $("#rubrica-query").typeahead({
				display: "name",
				autoSelect: false,
				onSelect: function(item) {
					if(typeof item.value != "undefined")
						document.location.href = "http://rubrica.unisa.it/persone?matricola="+item.value;
					else{
						document.location.href = "http://rubrica.unisa.it/persone?nome=" + $("#rubrica-query").val();
					}
				},
				ajax: {
					url: "/unisa-rescue-page/ajax/case/rubrica",
					triggerLength: 3,
					displayField: "name"
				},
				items: 20
				});		
	
	
	if (window.matchMedia("(max-width: 600px),(max-height: 600px)").matches) {
		$("#unisa-utilities-bar").addClass("animated");
		$("#unisa-utilities-bar").css("animation-duration", "0.2s");
		var previousScroll = 0;
		$(window).scroll(function(){
			var currentScroll = $(this).scrollTop();
			if (currentScroll >= 0 && currentScroll < $(document).height() - $(window).height()){
				 if (currentScroll > previousScroll)
					$("#unisa-utilities-bar").removeClass(" slideInDown").addClass("animated slideOutUp");
				 else 
					$("#unisa-utilities-bar").removeClass(" slideOutUp").addClass("animated slideInDown"); 
					previousScroll = currentScroll;
			}
		});
	}
	
	
	
});	  
		