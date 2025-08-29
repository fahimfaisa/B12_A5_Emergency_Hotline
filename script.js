// heart increase
let firstHeart = 0;
document.getElementById("btn-heart").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});

// call click
let firstCoin = 100;
document.getElementById("call-btn").addEventListener("click", function () {
  const name = document.getElementById("call-name").innerText;
  const number = document.getElementById("call-number").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("guma akhn");
  }

  document.getElementById("coin-count").innerText = firstCoin;
});
