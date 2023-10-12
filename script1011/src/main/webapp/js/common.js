/**
 * 
 */
function scoreInput(){
	var kor=Number(prompt("국어점수를 입력하세요.","0"));
	var eng=Number(prompt("영어점수를 입력하세요.","0"));
	var math=Number(prompt("수학점수를 입력하세요.","0"));
	document.write("<h1> 국어점수 : "+kor+"</h1>");
	document.write("<h1> 영어점수 : "+eng+"</h1>");
	document.write("<h1> 수학점수 : "+math+"</h1>");
	document.write("<h1> 합계 :"+(kor+eng+math)+"</h1>");
	document.write("<h1> 평균 :"+(kor+eng+math)/3+"</h1>");
}
