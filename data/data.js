function nvl(val, whenNull) { if(val) return val; if(whenNull) return whenNull; return ''; }
function addScript(src, async) {
	var s = document.createElement("script");
	s.type = "text/javascript"; s.src = src; s.async = (async ? true : false);
	$("head").append(s);
}

$(function(){
	addScript('/static/pixel/tracking.js', true);
	
	$('.tsv-data').each(function(){
		var text = this.innerHTML.trim();
		if(!text) return;
		var idx = $(this).attr('idx');
		var rows = text.split("\n");
		var html = '<button class="primary" onclick="startTest(\'' + nvl(idx) + '\');"><i class="material-icons">play_arrow</i> Start Test</button>';
		html += '<table>';
		html += '<tr>';
		var cols = rows[0].split("\t");
		for(var c = 0; c < cols.length; c++) { html += '<th>' + nvl(cols[c]) + '</th>'; }
		html += '</tr>';
		for(var r = 1; r < rows.length; r++) {
			html += '<tr>';
			var cols = rows[r].split("\t");
			for(var c = 0; c < cols.length; c++) {
				html += '<td>' + nvl(cols[c]) + '</td>';
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
		+ '<li><a class="icomoon icon-hatebu" href="http://b.hatena.ne.jp/add?mode=confirm&url=' + urlEnc + '&title=' + titleEnc + '" target="_blank" rel="nofollow" title="はてなブックマーク"></a></li>'
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