function includeScript(url, async) {
	if(!url) return;
	var s = document.createElement('script');
	s.type = 'text/javascript'; if(async) s.async = true; s.src = url;
	var d = document.getElementsByTagName('script')[0];
	d.parentNode.insertBefore(s, d);
}

// Global site tag (gtag.js) - Google Analytics
includeScript("https://www.googletagmanager.com/gtag/js?id=UA-55916419-2", true);
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-55916419-2');
