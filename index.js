/*setInterval(() => {
  for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
			    button.click(); // "Skip Ad" or "Skip Ads" buttons
			}
}, 1000);*/
	//document.body.style.border = "5px solid red";
    document.addEventListener('keydown', function(event) {
        var vlist = document.querySelectorAll('video');
        if (event.code == 'KeyX') {
            for(const vobj of vlist) vobj.playbackRate +=  0.25;
        } else if (event.code == 'KeyZ') {
            for(const vobj of vlist) vobj.playbackRate -=  0.25;
        } else if (event.code == 'KeyX' && (event.shiftKey || event.metaKey)) {
            for(const vobj of vlist)  vobj.playbackRate +=  0.5;
        } else if (event.code == 'KeyZ' && (event.shiftKey || event.metaKey)) {
            for(const vobj of vlist)  vobj.playbackRate -=  0.5;
        } else if (event.code == 'KeyS') {
            for(const vobj of vlist)  vobj.currentTime = (vobj.duration);

	        for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
			    button.click(); // "Skip Ad" or "Skip Ads" buttons
			}
        }
    });