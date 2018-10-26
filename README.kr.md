# Memorizer
단어등을 외우기 위한 편리한 도구입니다.

# 특징

* 자신이 외우고 싶은 단어리스트를 Excel로 만들고 지정할 수 있습니다.
* 오프라인 경우에도 사용할 수 있습니다. <a href="memorizer.zip" download="memorizer.zip">여기서 다운로드</a>해서, 안에있는 index.html 를 브라우저로 엽니다.

# 데모 페이지

<a target="_blank" href="https://mochihashi.github.io/memorizer/sample.html">sample.html</a>

# 사용 방법

1. Excel로 사전 테이블을 만들고 클립보드에 복사합니다(Ctrl+C). 테이블은 2열이상, 재1행은 제목 이름을 입력합니다. 사전 테이블의 예입니다:

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

2. 브라우저로 <a target="_blank" href="https://mochihashi.github.io/memorizer/">index.html</a> 를 연 후, 1번에서 복사한 클립보드의 내용을 붙입니다(Ctrl+V).<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/paste.png"></kbd>

3. 질문이 표시되면 정답을 선택합니다.<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/question.png"></kbd>

4. 틀린 경우, 정답이 표시되고 틀린 질문은 나중에 다시 반복됩니다.<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/answer.png"></kbd>

5. 모든 질문이 정답일 경우 질문은 끝납니다.<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/finished.png"></kbd>

6. 타이틀의 열을 바꾸면,<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/change-column.png"></kbd>

7. 질문의 열도 바뀝니다.<br/>
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/question2.png"></kbd>

# 파일에서 입력하기

클립보드에서 붙이는 방법 이외에 사진파일을 선택해도 됩니다.

1. Excel에서 사전파일을 편집하여 워크시트를 텍스트파일로 저장합니다.
  *  「파일」 메뉴에서  「새이름으로 저장」을 누르면 다이얼로그가 열립니다.
  *  「포맷」 란에、「CSV (.csv)」또는「Unicode텍스트 (.txt)」를 선택하고 저장합니다.
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/save-as-csv.png"></kbd>

2. index.html패아지에서, 「select file」버튼을 누르고、저장한 텍스트파일을 선택합니다.
	<kbd><img src="https://raw.githubusercontent.com/mochihashi/memorizer/master/images/select-file.png"></kbd>
