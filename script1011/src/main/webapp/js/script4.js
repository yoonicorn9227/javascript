/**
 * 
 */
// 2개의 숫자를 입력받아 세개수를 사칙연산 결과값을 출력하시오.
//prompt(input1,"0");


//1부터 입력한 값까지의 합
var input = Number(prompt("숫자를 입력하세요.","숫자입력!"));
var sum=0;
for(var i=0;i<=input;i++){
sum+=i;
}

document.write("입력받은 숫자까지  합 : "+sum,"<br>");

