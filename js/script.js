let btn1 = document.querySelector('.btn_1');
let btn2 = document.querySelector('.btn_2');
let btn3 = document.querySelector('.btn_3');
let btn4 = document.querySelector('.btn_4');

btn1.addEventListener('click', function changeImg() {
  document.getElementById("hand_1").src = "../images/phone_morning.png";
  document.getElementById("wrapper").style.backgroundImage = "url('../images/bg_morning.jpg')";
  document.querySelector(".lorem").style.color = 'black';
  document.getElementById("logo").src = "../images/logo_b.png";
  document.getElementById("clock").style.color = 'black';
  document.getElementById("b_w0").style.color = '';
  document.getElementById("b_w1").style.color = '';
  document.getElementById("b_w2").style.color = '';
  document.getElementById("b_w3").style.color = '';
  document.getElementById("b_w4").style.color = '';
  document.querySelector('.btn_1').style.backgroundColor = 'white';
  document.querySelector('.btn_1').style.color = 'black';
  document.querySelector('.btn_2').style.backgroundColor = '';
  document.querySelector('.btn_2').style.color = '';
  document.querySelector('.btn_3').style.backgroundColor = '';
  document.querySelector('.btn_3').style.color = '';
  document.querySelector('.btn_4').style.backgroundColor = '';
  document.querySelector('.btn_4').style.color = '';
})

btn2.addEventListener('click', function changeImg() {
  document.getElementById("hand_1").src = "../images/phone_afternoon.png";
  document.getElementById("wrapper").style.backgroundImage = "url('../images/bg_afternoon.jpg')";
  document.querySelector(".lorem").style.color = 'black';
  document.getElementById("logo").src = "../images/logo_b.png";
  document.getElementById("clock").style.color = 'black';
  document.getElementById("b_w0").style.color = '';
  document.getElementById("b_w1").style.color = '';
  document.getElementById("b_w2").style.color = '';
  document.getElementById("b_w3").style.color = '';
  document.getElementById("b_w4").style.color = '';
  document.querySelector('.btn_1').style.backgroundColor = '';
  document.querySelector('.btn_1').style.color = '';
  document.querySelector('.btn_2').style.backgroundColor = 'white';
  document.querySelector('.btn_2').style.color = 'black';
  document.querySelector('.btn_3').style.backgroundColor = '';
  document.querySelector('.btn_3').style.color = '';
  document.querySelector('.btn_4').style.backgroundColor = '';
  document.querySelector('.btn_4').style.color = '';
})

btn3.addEventListener('click', function changeImg() {
  document.getElementById("hand_1").src = "../images/phone_evening.png";
  document.getElementById("wrapper").style.backgroundImage = "url('../images/bg_evening.jpg')";
  document.querySelector(".lorem").style.color = 'black';
  document.getElementById("logo").src = "../images/logo_b.png";
  document.getElementById("clock").style.color = 'black';
  document.getElementById("b_w0").style.color = '';
  document.getElementById("b_w1").style.color = '';
  document.getElementById("b_w2").style.color = '';
  document.getElementById("b_w3").style.color = '';
  document.getElementById("b_w4").style.color = '';
  document.querySelector('.btn_1').style.backgroundColor = '';
  document.querySelector('.btn_1').style.color = '';
  document.querySelector('.btn_2').style.backgroundColor = '';
  document.querySelector('.btn_2').style.color = '';
  document.querySelector('.btn_3').style.backgroundColor = 'white';
  document.querySelector('.btn_3').style.color = 'black';
  document.querySelector('.btn_4').style.backgroundColor = '';
  document.querySelector('.btn_4').style.color = '';
})

btn4.addEventListener('click', function changeImg() {
  document.getElementById("hand_1").src = "../images/phone_night.png";
  document.getElementById("wrapper").style.backgroundImage = "url('../images/bg_night.jpg')";
  document.querySelector(".lorem").style.color = 'white';
  document.getElementById("logo").src = "../images/logo_w.png";
  document.getElementById("clock").style.color = 'white';
  document.getElementById("b_w0").style.color = 'white';
  document.getElementById("b_w1").style.color = 'white';
  document.getElementById("b_w2").style.color = 'white';
  document.getElementById("b_w3").style.color = 'white';
  document.getElementById("b_w4").style.color = 'white';
  document.querySelector('.btn_1').style.backgroundColor = '';
  document.querySelector('.btn_1').style.color = '';
  document.querySelector('.btn_2').style.backgroundColor = '';
  document.querySelector('.btn_2').style.color = '';
  document.querySelector('.btn_3').style.backgroundColor = '';
  document.querySelector('.btn_3').style.color = '';
  document.querySelector('.btn_4').style.backgroundColor = 'white';
  document.querySelector('.btn_4').style.color = 'black';

})

var clockTarget = document.getElementById("clock");


function clock() {
    var date = new Date();

    // date Object를 받아오고 
    var month = date.getMonth();

    // 달을 받아옵니다 
    var clockDate = date.getDate();

    // 몇일인지 받아옵니다 
    var day = date.getDay();

    // 요일을 받아옵니다. 
    var week = ['일', '월', '화', '수', '목', '금', '토'];

    // 요일은 숫자형태로 리턴되기때문에 미리 배열을 만듭니다. 
    var hours = date.getHours();

    // 시간을 받아오고 
    var minutes = date.getMinutes();

    // 분도 받아옵니다.
    var seconds = date.getSeconds();

    // 초까지 받아온후 
    clockTarget .innerText = `${month+1}월 ${clockDate}일 ${week[day]}요일` + `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;

    // 월은 0부터 1월이기때문에 +1일을 해주고 

    // 시간 분 초는 한자리수이면 시계가 어색해보일까봐 10보다 작으면 앞에0을 붙혀주는 작업을 3항연산으로 했습니다. 
}


function init() {

clock();

// 최초에 함수를 한번 실행시켜주고 
setInterval(clock, 1000);

// setInterval이라는 함수로 매초마다 실행을 해줍니다.

// setInterval은 첫번째 파라메터는 함수이고 두번째는 시간인데 밀리초단위로 받습니다. 1000 = 1초 

}
init();

