// heart increase
let firstHeart = 0;
document.getElementById("btn-heart1").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});
//
document.getElementById("btn-heart2").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});
document.getElementById("btn-heart3").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});
document.getElementById("btn-heart4").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});
document.getElementById("btn-heart5").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});
document.getElementById("btn-heart6").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});
document.getElementById("btn-heart7").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});
document.getElementById("btn-heart8").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});
document.getElementById("btn-heart9").addEventListener("click", function () {
  firstHeart++;
  document.getElementById("heart-number").innerText = firstHeart;
});

// call click

let firstCoin = 100;
document.getElementById("call-btn").addEventListener("click", function () {
  const name = document.getElementById("call-name1").innerText;
  const number = document.getElementById("call-number1").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("You don't have enough coins! Calling requires at least 20 coins.");
  }

  document.getElementById("coin-count").innerText = firstCoin;
  //
  const callSection = document.createElement("section");
  callSection.innerHTML = `
  <div  class="bg-[#ece9e9] p-2 rounded-xl mt-2 flex mx-auto items-center gap-4 ">
  <div class="ml-2">
          <h2 class="text-[18px] font-semibold">National Emergency Number</h2>
          <p>999</p>
        </div>
         <p>${data.date}</p>
        </div>`;
  mainContainer.appendChild(callSection);
});

document.getElementById("call-btn2").addEventListener("click", function () {
  const name = document.getElementById("call-name2").innerText;
  const number = document.getElementById("call-number2").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("You don't have enough coins! Calling requires at least 20 coins.");
  }

  document.getElementById("coin-count").innerText = firstCoin;
  const callSection = document.createElement("section");
  callSection.innerHTML = `
  <div class="bg-[#ece9e9] p-4 rounded-xl mt-2 flex mx-auto items-center gap-12 ">
  <div>
          <h2 class="text-[18px] font-semibold">Police Helpline Number</h2>
          <p>999</p>
        </div>
         <p>${data.date}</p>
        </div>`;
  mainContainer.appendChild(callSection);
});
document.getElementById("call-btn3").addEventListener("click", function () {
  const name = document.getElementById("call-name3").innerText;
  const number = document.getElementById("call-number3").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("You don't have enough coins! Calling requires at least 20 coins.");
  }

  document.getElementById("coin-count").innerText = firstCoin;
  const callSection = document.createElement("section");
  callSection.innerHTML = `
  <div class="bg-[#ece9e9] p-2 rounded-xl mt-2 flex mx-auto items-center gap-17 ">
  <div class="ml-3">
          <h2 class="text-[18px] font-semibold">Fire Service Number</h2>
          <p>999</p>
        </div>
         <p class="ml-2">${data.date}</p>
        </div>`;
  mainContainer.appendChild(callSection);
});
document.getElementById("call-btn4").addEventListener("click", function () {
  const name = document.getElementById("call-name4").innerText;
  const number = document.getElementById("call-number4").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("You don't have enough coins! Calling requires at least 20 coins.");
  }

  document.getElementById("coin-count").innerText = firstCoin;
  const callSection = document.createElement("section");
  callSection.innerHTML = `
  <div class="bg-[#ece9e9] p-4 rounded-xl mt-2 flex mx-auto items-center gap-5 ">
  <div>
          <h2 class="text-[18px] font-semibold">Ambulance Service</h2>
          <p>1994-999999</p>
        </div>
         <p class="ml-17">${data.date}</p>
        </div>`;
  mainContainer.appendChild(callSection);
});
document.getElementById("call-btn5").addEventListener("click", function () {
  const name = document.getElementById("call-name5").innerText;
  const number = document.getElementById("call-number5").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("You don't have enough coins! Calling requires at least 20 coins.");
  }

  document.getElementById("coin-count").innerText = firstCoin;
  const callSection = document.createElement("section");
  callSection.innerHTML = `
  <div class="bg-[#ece9e9] p-4 rounded-xl mt-2 flex mx-auto items-center gap-5 ">
  <div>
          <h2 class="text-[18px] font-semibold">Women & Child Helpline</h2>
          <p>109</p>
        </div>
         <p class="ml-5">${data.date}</p>
        </div>`;
  mainContainer.appendChild(callSection);
});
document.getElementById("call-btn6").addEventListener("click", function () {
  const name = document.getElementById("call-name6").innerText;
  const number = document.getElementById("call-number6").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("You don't have enough coins! Calling requires at least 20 coins.");
  }

  document.getElementById("coin-count").innerText = firstCoin;
  const callSection = document.createElement("section");
  callSection.innerHTML = `
  <div class="bg-[#ece9e9] p-4 rounded-xl mt-2 flex mx-auto items-center gap-5 ">
  <div>
          <h2 class="text-[18px] font-semibold">Anti-Corruption Helpline</h2>
          <p>106</p>
        </div>
         <p class="ml-5">${data.date}</p>
        </div>`;
  mainContainer.appendChild(callSection);
});
document.getElementById("call-btn7").addEventListener("click", function () {
  const name = document.getElementById("call-name7").innerText;
  const number = document.getElementById("call-number7").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("You don't have enough coins! Calling requires at least 20 coins.");
  }

  document.getElementById("coin-count").innerText = firstCoin;
  const callSection = document.createElement("section");
  callSection.innerHTML = `
  <div class="bg-[#ece9e9] p-4 rounded-xl mt-2 flex mx-auto items-center gap-5 ">
  <div>
          <h2 class="text-[18px] font-semibold">Electricity Helpline</h2>
          <p>16216</p>
        </div>
         <p class="ml-18">${data.date}</p>
        </div>`;
  mainContainer.appendChild(callSection);
});
document.getElementById("call-btn8").addEventListener("click", function () {
  const name = document.getElementById("call-name8").innerText;
  const number = document.getElementById("call-number8").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("You don't have enough coins! Calling requires at least 20 coins.");
  }

  document.getElementById("coin-count").innerText = firstCoin;
  const callSection = document.createElement("section");
  callSection.innerHTML = `
  <div class="bg-[#ece9e9] p-4 rounded-xl mt-2 flex mx-auto items-center gap-5 ">
  <div>
          <h2 class="text-[18px] font-semibold">Brac Helpline</h2>
          <p>16445</p>
        </div>
         <p class="ml-28">${data.date}</p>
        </div>`;
  mainContainer.appendChild(callSection);
});
document.getElementById("call-btn9").addEventListener("click", function () {
  const name = document.getElementById("call-name9").innerText;
  const number = document.getElementById("call-number9").innerText;
  alert("Calling" + " " + name + " " + number);

  if (firstCoin > 0) {
    firstCoin = firstCoin - 20;
  } else {
    alert("You don't have enough coins! Calling requires at least 20 coins.");
  }

  document.getElementById("coin-count").innerText = firstCoin;
  const callSection = document.createElement("section");
  callSection.innerHTML = `
  <div class="bg-[#ece9e9] p-4 rounded-xl mt-2 flex mx-auto items-center gap-5 ">
  <div>
          <h2 class="text-[18px] font-semibold">Bangladesh Railway Help </h2>
          <p>163</p>
        </div>
         <p class="ml-5">${data.date}</p>
        </div>`;
  mainContainer.appendChild(callSection);
});

//
const data = {
  date: new Date().toLocaleTimeString(),
};
const mainContainer = document.getElementById("main-container");

// clear section create
const clearBtn = document.getElementById("clear-btn");
const historyList = document.getElementById("main-container");
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});
