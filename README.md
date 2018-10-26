# Memorizer
This is a tool that helps you to memorize words or something.

# Feature

* You can memorize your own words, by creating a CSV file and selecting it.
* You can use when offline. Download <a href="memorizer.zip" download="memorizer.zip">memorizer.zip</a>, and open index.html in it by your browser.

# Demo Page

<a target="_blank" href="https://mochihashi.github.io/memorizer/sample.html">sample.html</a>

# Getting Started

1. Prepare your dictionary table in Excel, then copy to clipboard. Note that a dictionary table must have more than two columns, and a title row. This is a sample:

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

2. Open <a target="_blank" href="https://mochihashi.github.io/memorizer/">index.html</a> and paste from clipboard (Ctrl+V).<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/paste.png"></kbd>

3. Then the first question will be displayed. Choose the correct answer between options.<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/question.png"></kbd>

4. If you choose a wrong answer, the correct answer will be displayed, and this question will be repeated again later.<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/answer.png"></kbd>

5. Questions will continue until you finish choosing every correct answer at each question.<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/finished.png"></kbd>

6. You can change the column of question,<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/reverse.png"></kbd>

7. And question and answer will be reversed.<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/question2.png"></kbd>

# Input Data From File

* Instead of pasting data from clipboard, you can select your dictionary file.

1. Edit your dictionary table in Excel, and then save this worksheet as a text file.
  * Click "Save As" in the "File" menu to open the dialog.
  * In the "Save as type" box, choose to save your Excel file as "CSV (.csv)" or "Unicode Text (.txt)".<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/save-as-csv.png"></kbd>

2. Click the "select file" button in the index.html page, and select the file you saved.<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/select-file.png"></kbd>
