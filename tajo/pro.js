const words = ['작은홍띠점박이푸른부전나비', '아미노글리코사이드계항생물질',
                '송곳벌레살이납작맵시벌', '헥사나이트로헥사자이소부르치탄',
                '안돌이지돌이다래미한솜바우', '딱다그르르딱다그르르하다',
                '감지금니대방광불화엄경보현행원품', '다이오드트랜지스터논리회로',
                '연립삼원일차방정식', '서몬마스터즈블루드래곤'];

let i = 0;
let time = 60;
let myScore = 0;
let timeID;

const wordDisplay = document.querySelector('.word-display');
const wordInput = document.querySelector('.word-input');
const score = document.querySelector('.score');
const timer = document.querySelector('.timer');

const updateDisplay = () => {
  if (i < words.length) {
    wordDisplay.textContent = words[i];
  } else {
    wordDisplay.textContent = '끝';
    wordInput.disabled = true;
    clearInterval(timeID);
    timeID = null;
  }
  score.textContent = myScore;
  timer.textContent = time;
};

const handleSubmit = (e) => {
  if (i < words.length) {
    if (wordInput.value === words[i]) {
      myScore += 10;
    }
    i++;
    wordInput.value = "";
    updateDisplay();
  }

  if (e) {
    e.preventDefault();
  }
}

const startTimer = () => {
  if (!timeID) {
    timeID = setInterval(countdown, 1000);
  }
}

const countdown = () => {
  time--;
  updateDisplay();
}

const handleEnter = (event) => {
  if (event.key === "Enter") {
    handleSubmit();
  }
}
wordInput.addEventListener('keypress', handleEnter);

updateDisplay();
