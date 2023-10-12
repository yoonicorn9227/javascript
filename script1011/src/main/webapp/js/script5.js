/**
 * 두수를 입력하여 첫번째 숫자부터 두번째 숫자까지의 합
 * 2,7->2+3+5+4+6+7
 */

var input = Number(prompt("첫번째 숫자를 입력하세요.","0"));
var input2 = Number(prompt("두번째 숫자를 입력하세요.","0"));
var sum=0;
for(var i=input;i<=input2;i++){
	sum+=i;
	}
document.write(input+"부터 "+input2+"까지의 합 : "+sum);
