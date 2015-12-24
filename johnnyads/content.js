chrome.runtime.onMessage.addListener (
	function (request, sender, sendResponse) {
		var head = document.getElementsByTagName("head")[0]; 
        var script = document.createElement("SCRIPT"); 
 
        script.type = "text/javascript"; 
        //script.src = request.scriptUrl; 
        
        script.innerHTML = request.innerBody;
        
        head.appendChild(script); 
	}
);