var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
console.log(randomNumber1, randomNumber2);

var imgArray = new Array(
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png"
);

var imgDir = "images/";

console.log(imgArray[randomNumber1], imgArray[randomNumber2]);

var imgPath = imgDir + imgArray[randomNumber1];
var imgPath2 = imgDir + imgArray[randomNumber2];

var theImage = document.querySelector(".img1");
var theImage2 = document.querySelector(".img2");
theImage.src = imgPath;
theImage.alt = imgArray[randomNumber1];
theImage2.src = imgPath2;
theImage2.alt = imgArray[randomNumber2];

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 wins!";
} else {
  document.querySelector("h1").innerText = "Player 2 wins!";
}
