'use strict';

// Sinh số bí mật từ 1 đến 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Điểm ban đầu
let score = 20;

// Điểm cao nhất
let highscore = 0;

// Hàm hiển thị thông báo
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Khi nhấn nút Check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Không nhập số
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  // Đoán đúng
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Cập nhật điểm cao nhất
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Đoán sai
  else {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});