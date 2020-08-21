chrome.runtime.onMessage.addListener(function (request) {
	urlArray = window.location.hostname.split('.');
	document.activeElement.value = urlArray[urlArray.length-2].toString()+"."+request.text;
});