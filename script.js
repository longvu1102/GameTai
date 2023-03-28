// Lấy các phần tử HTML
const betAmountInput = document.getElementById("bet-amount");
const oddButton = document.querySelector(".button-odd");
const evenButton = document.querySelector(".button-even");
const resultSection = document.querySelector(".result-section");
const resultText = document.getElementById("result");
const playAgainButton = document.querySelector(".button-play-again");

// Bắt đầu trò chơi khi người dùng chọn Chẵn hoặc Lẻ
oddButton.addEventListener("click", playGame);
evenButton.addEventListener("click", playGame);
playAgainButton.addEventListener("click", resetGame);

// Hàm chơi trò chơi
function playGame() {
  // Lấy giá trị đặt cược của người chơi
  const betAmount = Number(betAmountInput.value);

  // Tạo số ngẫu nhiên từ 1 đến 6
  const randomNumber = Math.floor(Math.random() * 17) ;

  // Xác định kết quả Chẵn Lẻ
  let result;
  if (randomNumber % 2 === 0) {
    result = "Chẵn";
  } else {
    result = "Lẻ";
  }
  resultText.innerText = `Kết quả: ${result}`;
  resultSection.style.display = "block";
  // Hiển thị kết quả và cập nhật số tiền của người chơi
  if (result === "Chẵn") {
    betAmountInput.value = betAmount*2;
    alert("Bạn đã thắng " + betAmount*2);
  } else {
    betAmountInput.value = 0;
    alert("Bạn đã thua " + betAmount);
  }
  
}

// Hàm reset game
function resetGame() {
  betAmountInput.value = "";
  resultText.innerText = "";
  resultSection.style.display = "none";
}
