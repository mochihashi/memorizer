# Memorizer
단어등을 외우기 위해서 편리한 도구입니다.

# 특징

* 자신이 외우고 싶은 단어리스트를 Excel로 만들고 지정할 수 있습니다.
* 오프라인 경우에도 사용할 수 있습니다. <a href="memorizer.zip" download="memorizer.zip">여기서 다운로드</a>해서, 안에있는 index.html 를 브라우저로 열려주세요.

# 데모 페이지

<a target="_blank" href="https://mochihashi.github.io/memorizer/sample.html">sample.html</a>

# 사용 방법

1. Excel로 사전표를 만들고 클립보드에 복제하세요. 사전표는 2열이상, 재1행은 재목 이름을 입력해주세요. 사전표의 예입니다:

| English | Spanish |
| ---- | ---- |
| Hello | Hola |
| Good morning | Buenos días |
| Goodbye | Adiós |
| I don't know | No lo sé |
| Sorry | Lo siento |
| Thank you | Gracias |
| Yes | Si |
| No | No |

2. 브라우저로 <a target="_blank" href="https://mochihashi.github.io/memorizer/">index.html</a> 를 열린 후, 클립보드에서 붙여놓으세요.(Ctrl+V).<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/paste.png"></kbd>

3. 最初の質問が表示されますので、正しい答えを選択肢から選んでください。<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/question.png"></kbd>

4. 間違えた場合、正しい答えが表示され、その質問はまたあとで繰り返されます。<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/answer.png"></kbd>

5. すべての質問に正答すると、質問が終わります。<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/finished.png"></kbd>

6. タイトルの列名を変更することで、<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/change-column.png"></kbd>

7. 逆引きの質問に変えることもできます。<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/question2.png"></kbd>

# ファイルから入力する

クリップボードからの貼り付け以外に、辞書ファイルを選択することもできます。

1. Excelで辞書ファイルを編集し、ワークシートをテキストファイルとして保存してください。
  *  「ファイル」メニューから「名前を付けて保存」をクリックすると、ダイアログが開きます。
  * 「フォーマット」欄で、「CSV (.csv)」または「Unicodeテキスト (.txt)」を選択して保存します。<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/save-as-csv.png"></kbd>

2. index.htmlページで、「select file」ボタンをクリックし、保存したテキストファイルを選択します。<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/select-file.png"></kbd>
