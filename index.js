/*for lesft side image*/
var randomNumber1=Math.floor(Math.random()*6)+1;//random no generator from 1-6

var randomDiceImage1= "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];//for image1

image1.setAttribute("src",randomDiceImage1);

/*for right side image*/
var randomNumber2=Math.floor(Math.random()*6) + 1;

var randomDiceImage2="images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);

/*to display result*/

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="player1 wins ";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="player2 wins";
}
else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Its a draw";
}
