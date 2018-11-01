function array2map(arr) { var map = {}; for(var i = 0; i < arr.length; i++) { map[arr[i]] = arr[i]; } return map; }

var IMG_EXTS = array2map("jpg,jpeg,gif,png".split(','));
var AUDIO_EXTS = array2map("mp3,wav".split(','));

function nvl(val, whenNull) { if(val) return val; if(whenNull) return whenNull; return ''; }
function addScript(src, async) {
	var s = document.createElement("script");
	s.type = "text/javascript"; s.src = src; s.async = (async ? true : false);
	$("head").append(s);
}

$(function(){
	addScript('/static/pixel/tracking.js', true);
	addScript('/static/js/csv.min.js', true);
	
	$('.tsv-data').each(function(){
		var text = this.innerHTML.trim();
		if(!text) return;
		var idx = $(this).attr('idx');
		var arr = CSV.parse(text, {delimiter: '\t'});
		var html = '<button class="primary" onclick="startTest(\'' + nvl(idx) + '\');"><i class="material-icons">play_arrow</i> Start Test</button>';
		html += '<table>';
		html += '<tr>';
		var cols = arr[0];
		for(var c = 0; c < cols.length; c++) { html += '<th>' + nvl(cols[c]) + '</th>'; }
		html += '</tr>';
		for(var r = 1; r < arr.length; r++) {
			html += '<tr>';
			var cols = arr[r];
			for(var c = 0; c < cols.length; c++) {
				var val = cols[c] || '';
				val = val.toString();
				val = val.replace(/</g, "&lt;");
				val = val.replace(/>/g, "&gt;");
				if(val.indexOf("\n") >= 0) {
					val = val.replace(/\n/g, "<br/>");
				} else {
					var p = val.lastIndexOf('.');
					if(p > 0) {
						var ext = val.slice(p + 1);
						if(IMG_EXTS[ext]) {
							val = '<img src="' + val + '" />';
						} else if(AUDIO_EXTS[ext]) {
							val = '<audio src="' + val + '" controls>' + val + '</audio>';
						}
					}
				}
				html += '<td>' + val + '</td>';
			}
			html += '</tr>';
		}
		html += '</table>';
		this.innerHTML = html;
	});
	
	var urlEnc = encodeURIComponent(document.URL);
	var title = document.title;
	var titleEnc = encodeURIComponent(title);
	$('#share').html(
		'<ul class="share-icons">'
		+ '<li><a class="icomoon icon-facebook" href="http://www.facebook.com/share.php?u=' + urlEnc + '" target="_blank" rel="nofollow" title="Facebook"></a></li>'
		+ '<li><a class="icomoon icon-twitter" href="https://twiter.com/share?url=' + urlEnc + '" text="' + title + '" target="_blank" rel="nofollow" title="Twitter"></a></li>'
		+ '<li><a class="icomoon icon-hatebu" href="http://b.hatena.ne.ja/add?mode=confirm&url=' + urlEnc + '&title=' + titleEnc + '" target="_blank" rel="nofollow" title="はてなブックマーク"></a></li>'
		+ '<li><a class="icomoon icon-pocket" href="http://getpocket.com/edit?url=' + urlEnc + '&title=' + titleEnc + '" target="_blank" rel="nofollow" title="Pocket"></a></li>'
		+ '<li><a class="icomoon icon-feedly" href="https://feedly.com/i/subscription/feed/' + urlEnc + '" target="_blank" rel="nofollow" title="Feedly"></a></li>'
		+ '</ul><br/>'
	);
});

function startTest(idx) {
	var url = document.URL;
	var p = document.URL.indexOf('data/');
	var documentRoot = url.slice(0, p);
	var myPath = url.slice(p);
	location.href = documentRoot + '?data=' + encodeURIComponent(myPath) + (idx ? '&idx=' + idx : '');
}