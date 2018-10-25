# Memorizer
This is a tool that helps you to memorize words or something.

# Feature

* You can memorize your own words, by creating a CSV file and selecting it.
* You can use when offline. Download <a href="memorizer.zip" download="memorizer.zip">memorizer.zip</a>, and open index.html in it by your browser.

# Demo Page

<a target="_blank" href="https://mochihashi.github.io/memorizer/sample.html">sample.html</a>

# Getting Started

1. Open <a target="_blank" href="https://mochihashi.github.io/memorizer/">index.html</a>
2. Create a csv file with 2 columns and with a header row, and select it. The format of file is like:
```text:sample.csv
title1,title2
value1-1,value1-2
value2-1,value2-2
value3-1,value3-2
```
3. Choose the correct answer between options. If you choose a wrong answer, the correct answer will be displayed, and this question will be repeated again later.
4. Questions will continue until you finish choosing the correct answer at each question.

# Input File

* Edit your dictionary table in Excel, and then save this worksheet as a text file.
  1. Click "Save As" in the "File" menu to open the dialog.
  2. In the "Save as type" box, choose to save your Excel file as "CSV (.csv)" or "Unicode Text (.txt)".
* Click the "select file" button in the index.html page, and select your text file.
* Or you can directly paste your data (Ctrl+V) on the index.html page, after selecting and copying the cells in your worksheet.
