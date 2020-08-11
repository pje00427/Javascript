// window : 모든 객체의 최상위 객체. 브라우저 에서 제공하는 브라우저 창에 대한 정보를 담는 객체 

str = "전역변수";   // 자동으로 window객체의 필드로 잡힘 
var str2 = "var 전역변수";

// 해당 문서 로딩된 직후에 실행 될 함수 지정가능
window.onload = function(){ // 익명함수 
    // 특정 함수내에 var를 붙여서 선언한 변수는 지역변수의 개념
    var str = "지역변수"; // 전역변수 명과 일치하네?
    var str3 = "새로운 지역변수";

    str4= "난 뭘까요?"; // 전역변수

    console.log("---str호출-----");
    console.log(str);
    // 해당 지역내에 지역변수명과 전역변수명이 동일한 경우 호출시 지역변수 호출!
    // 전역변수를 호출하고자 한다면 window또는 this 붙이면 전역변수 접근가능
    console.log(window.str);
    console.log(this.str);

    console.log("----str2 호출-----");
    console.log(str2); // 자동으로 전역변수 찾음 지역변수중에 str2없기 때문에

    console.log("---str3 호출 ---");
    console.log(str3);
    console.log(window.str3); // undifined 정의되어있지 않다


    console.log(str4);
    console.log(window.str4);

    console.log(test);

}

var test = "테스트"; // 전역변수 특정함수 안에있어도 불러와짐

function showStr4(){
    console.log(str4);
}
