let computerNum = 0;
let playButton = document.querySelector("#play-button");
let userInput = document.querySelector("#user-input");
let result = document.querySelector("#result-area");

// playButton 클릭 이벤트 리스너 추가
playButton.addEventListener('click', play);

function pickRandomNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

// play 함수 정의
function play() {
    let userValue = userInput.value;
    
    //정답과 비교해서 같으면 정답입니다. 다르면 두개를 비교해서 입력값이 크면 다운 작으면 업을 표시
    if (userValue == computerNum) {
        result.textContent = "정답입니다.";
    } else if (userValue > computerNum) {
        result.textContent = "Down";
    } else {
        result.textContent = "Up";
    }
}
pickRandomNumber();