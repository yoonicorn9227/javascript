/**
 * 숫자를 입력받아 홀수인지 짝수인지 출력하시오.
 * 
 */

var input = Number(prompt("숫자를 입력하세요."));
if(input%2==0){
	document.write("짝수입니다.","<br>");
} else{
	document.write("홀수입니다.","<br>");
}