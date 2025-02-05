let computerNum = 0;
let playButton = document.querySelector("#play-button");
let userInput = document.querySelector("#user-input");
let resultArea = document.querySelector("#result-area");
let resetButton = document.querySelector("#reset-button");
let chance = 5;
let gameOver = false;
let chanceArea = document.querySelector("#chance-area");

// playButton 클릭 이벤트 리스너 추가
playButton.addEventListener('click', play);
// resetButton 클릭 이벤트 리스너 추가
resetButton.addEventListener('click', reset);

function pickRandomNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

// play 함수 정의
function play() {
    let userValue = userInput.value;
    
    chance = chance - 1;
    chanceArea.textContent = `남은 기회: ${chance}번`;


    //정답과 비교해서 같으면 정답입니다. 다르면 두개를 비교해서 입력값이 크면 다운 작으면 업을 표시
    if (userValue == computerNum) {
        resultArea.textContent = "정답입니다.";
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down";
    } else {
        resultArea.textContent = "Up";
    }

    //chance가 0이면 게임오버
    if (chance == 0) {
        gameOver = true;
    }

    if(gameOver) {
        playButton.disabled = true;
    }
}

// reset 함수 정의
function reset() {
    resultArea.textContent = "결과값이 여기 나옵니다";
    userInput.value = "";
    pickRandomNumber();

    //playButton 활성화
    playButton.disabled = false;
    chance = 5;
    chanceArea.textContent = `남은 기회: ${chance}번`;
}

pickRandomNumber();