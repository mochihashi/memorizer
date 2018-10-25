# Memorizer
単語などを覚えるのに便利なツールです。

# 特徴

* 自分の覚えたい単語リストを、CSVファイルで指定することで、自由に作成できます。
* オフラインでも動かせます。<a href="memorizer.zip" download="memorizer.zip">こちら</a>からダウンロードして、中のindex.htmlをブラウザで開いてください。

# デモページ

<a target="_blank" href="https://mochihashi.github.io/memorizer/sample.html">sample.html</a>

# 使い方

1. ブラウザで、<a target="_blank" href="https://mochihashi.github.io/memorizer/">index.html</a>を開きます。
2. CSVファイルを作成して、選択します。CSVファイルは２列以上必要で、１行目をヘッダ行にします。こんな形式です:
```text:sample.csv
title1,title2
value1-1,value1-2
value2-1,value2-2
value3-1,value3-2
```
3. 質問が表示されたら、選択肢から正しい答えを選びます。もし間違えた場合、正しい答えが表示され、その質問があとで繰り返されます。
4. すべての質問に正答するまで、質問が続きます。

# 入力ファイル

* Excelで辞書ファイルを編集し、ワークシートをテキストファイルとして保存してください。
  1. 「ファイル」メニューから「名前を付けて保存」をクリックすると、ダイアログが開きます。
  2. 「フォーマット」欄で、「CSV (.csv)」または「Unicodeテキスト (.txt)」を選択して保存します。
* index.htmlページで、「ファイル選択」ボタンをクリックし、保存したテキストファイルを選択します。
* または、ワークシートのセルを選択してコピーし、index.htmlページに直接貼り付ける(Ctrl+V)ことも可能です。
