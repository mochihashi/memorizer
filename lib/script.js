function el(id) { return document.getElementById(id); }
function show(id, display) { el(id).style.display = display ? display : 'block'; }
function hide(id) { el(id).style.display = 'none'; }
function nvl(val, whenNull) { if(val) return val; if(whenNull) return whenNull; return ''; }
var args = {}, data = {};
if(location.search) {
	var arr = location.search.substring(1).split('&');
	for(var i = 0; i < arr.length; i++) {
		var k = arr[i], v = null;
		var p = k.indexOf('=');
		if(p >= 0) { v = k.slice(p + 1); k = k.slice(0, p); }
		args[k] = decodeURI(v);
	}
}
function changeColumn(col) {
	var col0 = data.col;
	data.col = parseInt(col);
	if(data.title.length > 2) {
		if(data.col2 == data.col) data.col2 = col0;
		setColumnOption('select-column2', data.col2, data.col);
	}
	start();
}
function changeColumn2(col) { data.col2 = parseInt(col); start(); }
function changeFontSize(size) { el('test').setAttribute('fsize', size); }
function toggleOption() { data.isNoOption = !data.isNoOption; el('button-option').setAttribute('off', !data.isNoOption); start(); }
function toggleSequential() { data.isSequential = !data.isSequential; el('button-random').setAttribute('off', data.isSequential); start(); }
function toggleMute() { data.isMute = !data.isMute; el('button-mute').setAttribute('off', !data.isMute); }
function togglePreview() {
	data.isPreview = !data.isPreview; el('button-preview').setAttribute('off', !data.isPreview);
	if(data.isPreview) { hide('test-main'); show('test-data'); } else { show('test-main'); hide('test-data'); }
}
function toggleSearch() { data.isSearch = !data.isSearch; el('button-search').setAttribute('off', !data.isSearch); if(data.isSearch) { show('search-text', 'inline'); el('search-text').focus(); } else { hide('search-text'); } }
function search() { data.searchText = el('search-text').value; start(); }
function start() {
	var indexes = {};
	data.test = [];
	for(var i = 0; i < data.list.length; i++) {
		if(data.isSearch && data.searchText) {
			var isMatched = false;
			for(var c = 0; c < data.title.length; c++) {
				if(data.list[i][c] && data.list[i][c].indexOf(data.searchText) >= 0) { isMatched = true; break; }
			}
			if(!isMatched) continue;
		}
		var key = data.list[i][data.col]; if(!key) continue;
		var value = data.list[i][data.col2]; if(!value) continue;
		if(!indexes[key]) {
			data.test.push({key: key, rows: []});
			indexes[key] = data.test.length;
		}
		data.test[indexes[key] - 1].rows.push(data.list[i]);
	}
	if(data.test.length == 0) { alert('no data'); data.test = null; return; }
	var prompt = data.title[data.col2];
	el('prompt').innerHTML = prompt ? (prompt + ' ?') : '';
	if(!data.isSequential) shuffle(data.test);
	for(var i = 0; i < data.test.length; i++) { data.test[i].index = i; }
	hide('index');
	show('test');
	data.pos = 0;
	data.pages = [0, data.test.length];
	if(data.title.length <= 2) {
		hide('select-column2');
	} else {
		show('select-column2', 'inline');
	}
	showQuestion();
}
function showQuestion(add, push) {
	var windowWidth = window.innerWidth || document.documentElement.clientWidth;
	var windowHeight = window.innerHeight || document.documentElement.clientHeight;
	var isMobile = (windowWidth <= 600);
	el('test-text').height = isMobile ? 'auto' : (windowHeight - 100) + 'px';
	data.isAnswer = false;
	if(push) data.test.push(data.test[data.pos]);
	if(add) {
		data.pos += add;
		if(add == -1 && data.pos < data.test.length - 1) {
			if(data.test[data.pos].key == data.test[data.test.length - 1].key) data.test.pop();
		}
	}
	hide('answer'); hide('answer-button');
	if(data.pos == data.test.length) {
		// show end
		data.isEnd = true;
		show('end'); show('before');
		hide('question'); hide('question-button'); hide('question-option'); hide('prompt'); hide('page');
		if(data.pages[1] == data.test.length) {
			el('end-message').innerHTML = "Perfect! Great!!";
			if(!data.isMute) { playAudio('lib/perfect.mp3'); }
		} else {
			el('end-message').innerHTML = "finished.";
			if(!data.isMute) { playAudio('lib/end.mp3'); }
		}
	} else {
		// show question
		data.isEnd = false;
		el('question').innerHTML = data.test[data.pos].key;
		if(add == 1 && data.pos == data.pages[data.pages.length - 1]) data.pages.push(data.test.length);
		if(add == -1 && data.pos == data.pages[data.pages.length - 2] - 1) data.pages.pop();
		var p = data.pages.length - 1, pages = '';
		for(var i = 1; i < p; i++) { pages += (data.pages[i] - data.pages[i - 1]) + ' ... '; }
		var len = data.pages[p] - data.pages[p - 1], pos = data.pos - data.pages[p - 1];
		pages += '( ' + (pos + 1) + ' / ' + len + ' )';
		if(data.test.length > data.pages[p]) { pages += ' ... ' + (data.test.length - data.pages[p]);}
		el('page').innerHTML = pages;
		if(data.isNoOption) {
			// no answer option
			show('question-button'); hide('question-option');
		} else {
			// show answer options
			hide('question-button'); show('question-option');
			var options = decideOptions(), div = el('question-option');
			div.innerHTML = '';
			for(var i = 0; i < options.length; i++) {
				var label = options[i].label, isAnswer = options[i].isAnswer;
				var button = document.createElement('button');
				button.innerHTML = label;
				button.onclick = (isAnswer ? clickDown : clickNext);
				if(!isMobile && i > 0) div.appendChild(document.createElement('br'));
				div.appendChild(button);
			}
		}
		show('question'); show('prompt'); show('page');
		if(data.pos > 0) { show('before'); } else { hide('before'); }
		hide('end');
	}
}
function decideOptions() {
	var candidates = [], options = [], len = data.pages[1], answerIndex = data.test[data.pos].index, label, answers = {};
	for(var i = 0; i < len; i++) {
		if(data.test[i].index != answerIndex) candidates.push(i);
	}
	shuffle(candidates);
	
	var rows = data.test[answerIndex].rows;
	if(rows.length > 1) {
		rows = copyArray(rows);
		shuffle(rows);
	}
	var answerLabel = null;
	for(var i = 0; i < rows.length; i++) {
		label = rows[i][data.col2];
		if(!label) continue;
		if(!answerLabel) answerLabel = label;
		answers[label] = label;
	}
	options.push({ isAnswer: true, label: answerLabel });
	
	for(var i = 0; i < candidates.length; i++) {
		rows = data.test[candidates[i]].rows;
		var isFound = false;
		for(var r = 0; r < rows.length; r++) {
			label = rows[r][data.col2];
			if(!label || answers[label]) continue;
			isFound = true;
			break;
		}
		if(!isFound) continue;
		options.push({ label: label });
		answers[label] = label;
		if(options.length >= 4) break;
	}
	shuffle(options);
	return options;
}
function showAnswer() {
	data.isAnswer = true;
	var html = "<p>" + data.test[data.pos].key + "</p>";
	var rows = data.test[data.pos].rows;
	for(var r = 0; r < rows.length; r++) {
		if(!rows[r][data.col2]) continue;
		html += "<br/>";
		html += "<p>";
		html += '[' + data.title[data.col2] + '] ';
		html += rows[r][data.col2];
		for(var i = 0; i < data.title.length; i++) {
			if(!rows[r][i] || i == data.col || i == data.col2) continue;
			if(r > 0 && rows[r][i] == rows[r - 1][i]) continue;
			html += '<br/>';
			if(data.title[i]) html += '[' + data.title[i] + '] ';
			html += rows[r][i];
		}
		html += "</p>";
	}
	el('answer').innerHTML = "<div>" + html + "</div>";
	show('answer'); show('answer-button'); show('before');
	hide('question'); hide('question-button'); hide('question-option'); hide('prompt'); hide('page');
}
function showBefore() {
	if(data.isAnswer) showQuestion();
	else if(data.pos > 0) showQuestion(-1);
}
function clickNext() { showNext(true); }
function showNext(isClick) {
	if(!data.isNoOption && !isClick && !data.isAnswer) return;
	if(data.isEnd) return;
	if(!data.isAnswer) showAnswer();
	else showQuestion(1, true);
}
function clickDown() { showDown(true); }
function showDown(isClick) {
	if(!data.isNoOption && !isClick) return;
	if(data.isAnswer || data.isEnd) return;
	if(!data.isMute) { playAudio('lib/coin.mp3'); }
	if(data.isNoOption) {
		showQuestion(1);
	} else {
		el('question').innerHTML = '<span class="ok"><i class="material-icons">check_circle</i></span>';
		setTimeout(function(){ showQuestion(1); }, 1000);
	}
}
function playAudio(file) { var a = new Audio(); a.src = file; a.volume = 0.5; a.play(); }
function shuffle(arr) {
	for(var i = arr.length - 1; i > 0; i--) {
		var r = Math.floor(Math.random() * (i + 1));
		var tmp = arr[i]; arr[i] = arr[r]; arr[r] = tmp;
	}
}
function copyArray(arr) {
	var arr2 = [];
	for(var i = 0; i < arr.length; i++) { arr2.push(arr[i]); }
	return arr2;
}
function readFile(file) {
	if(!file) return; if(file.type.indexOf('text/') < 0) { alert('This is not a text/csv file: ' + file.type); return; }
	var reader = new FileReader(); reader.readAsArrayBuffer(file);
	reader.addEventListener('load', function() { parseFile(file.name, new Uint8Array(reader.result)); });
}
function parseFile(name, unit8arr) {
	var shortName = name;
	var p = shortName.lastIndexOf('/'); if(p >= 0) { shortName = shortName.slice(p + 1); }
	p = shortName.lastIndexOf('.'); if(p >= 0) { shortName = shortName.slice(0, p); }
	var text, encoding = Encoding.detect(unit8arr);
	if(encoding == 'UTF8') text = new TextDecoder("utf-8").decode(unit8arr);
	else text = Encoding.convert(unit8arr, { to: 'unicode', from: encoding, type: 'string' });
	parseText(text, name, shortName);
}
function parseText(text, name, shortName) {
	if(shortName) { document.title = shortName + " - Memorizer"; el('filename').innerHTML = shortName; }
	var isCsv = text.indexOf('\t') < 0 || (name && name.slice(-4).toLowerCase() == '.csv');
	var arr = CSV.parse(text, {delimiter: isCsv ? ',' : '\t'});
	if(arr.length < 1) { return; }
	if(arr[0].length < 2) { alert('The number of columns must be over 2.'); return; }
	data.title = arr[0];
	data.list = arr.slice(1);
	data.col = 0;
	data.col2 = 1;
	setColumnOption('select-column', data.col, -1);
	setColumnOption('select-column2', data.col2, data.col);
	
	var table = '<tr>';
	for(var c = 0; c < data.title.length; c++) {
		table += '<th>' + data.title[c] + '</th>';
	}
	table += '</tr>';
	for(var r = 0; r < data.list.length; r++) {
		table += '<tr>';
		for(var c = 0; c < data.title.length; c++) {
			table += '<td>' + nvl(data.list[r][c]) + '</td>';
		}
		table += '</tr>';
	}
	el('test-data-table').innerHTML = table;
	if(data.isPreview) togglePreview();
	
	start();
}
function setColumnOption(id, selected, exclude) {
	var select = el(id); select.innerHTML = '';
	for(var i = 0; i < data.title.length; i++) {
		if(!data.title[i]) continue;
		if(i == exclude) continue;
		var option = document.createElement('option');
        option.setAttribute('value', i);
        if(i == selected) option.setAttribute('selected', 'selected');
        option.innerHTML = data.title[i];
        select.appendChild(option);
	}
}
function onload() {
	el('version').innerHTML = APP_VERSION;
	el('file').addEventListener('change', function(e) { readFile(e.target.files[0]); el('file').value = ''; });
	if(args['file']) {
		var url = args['file'];
		url += (url.indexOf('?') < 0 ? '?' : '&') + '_cb=' + new Date().getTime();
		var http = new XMLHttpRequest(); http.open('GET', url, true);
		//http.overrideMimeType('text/plain; charset=x-user-defined');
		http.responseType = "arraybuffer";
		http.onload = function(e) { if(http.status == 200) parseFile(args['file'], new Uint8Array(http.response)); };
		http.send();
	}
	document.addEventListener('keydown', function(e){
		if(!data.test) return;
		if(e.keyCode == 37) { // left
			showBefore();
		} else if(e.keyCode == 39) { // right
			showNext();
		} else if(e.keyCode == 40) { // down
			showDown();
		}
	});
	el('dictionary-table').addEventListener('keydown', function(e){
		if(e.keyCode == 9) { // tab
			e.preventDefault();
			var p1 = this.selectionStart, p2 = this.selectionEnd;
			this.value = this.value.substr(0, p1) + "\t" + this.value.substr(p2);
			this.setSelectionRange(p1 + 1, p1 + 1);
		}
	});
	el('index').addEventListener('dragover', function(e){
		e.stopPropagation(); e.preventDefault(); e.dataTransfer.dropEffect = 'copy';
	});
	el('index').addEventListener('drop', function(e){
		e.stopPropagation(); e.preventDefault();
		readFile(e.dataTransfer.files[0]);
		var file = e.dataTransfer.files[0]; if(!file) return;
	});
	var touchStart, touchMove;
	window.addEventListener("touchstart", function(e) { touchStart = e.touches[0]; touchMove = null; });
	window.addEventListener("touchmove", function(e) { touchMove = e.changedTouches[0]; });
	window.addEventListener("touchend", function(e) {
		if(!data.test || !touchStart || !touchMove) return;
		var isRightToLeft = (touchStart.pageX - touchMove.pageX > 100);
		var isLeftToRight = (touchMove.pageX - touchStart.pageX > 100);
		var isDownToUp = (touchMove.pageY - touchStart.pageY > 100);
		var isUpToDown = (touchMove.pageY - touchStart.pageY > 100);
		if(isLeftToRight && !isDownToUp && !isUpToDown) { showBefore(); }
		else if(isRightToLeft && !isDownToUp && !isUpToDown) { showNext(); }
	});
}
function goHome() {
	data.test = null;
	show('index');
	hide('test');
	document.title = "Memorizer";
}
