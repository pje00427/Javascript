// window : 모든 객체의 최상위 객체. 브라우저 에서 제공하는 브라우저 창에 대한 정보를 담는 객체 

str = "전역변수";   // 자동으로 window객체의 필드로 잡힘 
var str2 = "var 전역변수";

// 해당 문서 로딩된 직후에 실행 될 함수 지정가능
window.onload = function(){ // 익명함수 
    // 특정 함수내에 var를 붙여서 선언한 변수는 지역변수의 개념
    var str = "지역변수"; // 전역변수 명과 일치하네?
    var str3 = "새로운 지역변수";

    str4= "난 뭘까요?";

    console.log("---str호출-----");
    console.log(str);

}