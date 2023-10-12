/**
 * 
 * 
 */
//입력 2개

var input= 0;
var weight= 0;

//2개를 입력받음
input=Number(prompt("신장(cm)를 입력하세요.","0"));
weight=Number(prompt("몸무게(Kg)을 입력하세요.","0"));

var height= input/100;
var result= weight/(height*height);
document.write("<h1>BMI 지수 : "+result+"</h1>");
//result 출력

//if비교 else if, else if, else
if(result>=18.5&&result<=22.9){
		document.write("정상체중입니다.","<br>");
	}else if(result<18.5){
		document.write("저체중입니다.","<br>");
	}else if(result>=23.0&&result<=24.9){
		document.write("과체중입니다.","<br>");
	}else{
		document.write("비만입니다!!!","<br>");
	}
