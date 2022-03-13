var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1Src = "images/dice" + randomNumber1 + ".png";
document.querySelector(".dice .img1").setAttribute("src", img1Src);

var img2Src = "images/dice" + randomNumber2 + ".png";
document.querySelector(".dice .img2").setAttribute("src", img2Src);

var result = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  result.innerHTML = "🏆 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  result.innerHTML = "🏆 Player 2 Wins!";
} else {
  result.innerHTML = "Draw!";
}
