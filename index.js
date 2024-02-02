
var images = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

function generateRandomImages(){

    var n1 = Math.random();
    var n2 = Math.random();

    var randomNumber1 = Math.floor(n1*images.length);
    var path1 = images[randomNumber1] 
    document.querySelector(".img1").setAttribute("src" , path1);

    var randomNumber2 = Math.floor(n2*images.length);
    var path2 = images[randomNumber2] ;
    document.querySelector(".img2").setAttribute("src" , path2);

    if(randomNumber1 === randomNumber2){
        document.querySelector("h1").textContent = "Draw! Roll the dice again.";
    }else{
        n1 > n2 ? document.querySelector("h1").textContent = "Player 1 won!" : document.querySelector("h1").textContent = "Player 2 won!";
    }

}

document.addEventListener("DOMContentLoaded",function(){
    generateRandomImages();
})

