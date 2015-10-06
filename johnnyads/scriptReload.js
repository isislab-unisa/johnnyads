chrome.runtime.onMessage.addListener (
	function (request, sender, sendResponse) {
		if (request.callerScript == 'background') {
            var newScript = document.createElement("script");
            newScript.src = request.toInsert;
            document.body.appendChild(newScript);
        }
	}
);