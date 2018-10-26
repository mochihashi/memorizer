# Memorizer
単語などを覚えるのに便利なツールです。

# 特徴

* 自分の覚えたい単語リストを、Excelで作って、指定することができます。
* オフラインでも動かせます。<a href="memorizer.zip" download="memorizer.zip">こちら</a>からダウンロードして、中のindex.htmlをブラウザで開いてください。

# デモページ

<a target="_blank" href="https://mochihashi.github.io/memorizer/sample.html">sample.html</a>

# 使い方

1. Excelで辞書テーブルを作って、クリップボードにコピーします。辞書テーブルは２列以上とし、１行目にタイトルを入れてください。辞書テーブルの例です:

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

2. ブラウザで、 <a target="_blank" href="https://mochihashi.github.io/memorizer/">index.html</a> を開き、クリップボードから貼り付けます。(Ctrl+V).<br/>
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
