// 1️⃣ Random number for the LEFT dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// 2️⃣ Random number for the RIGHT dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// 3️⃣ Create image source paths
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // e.g. images/dice2.png
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // e.g. images/dice5.png

// 4️⃣ Change the src attribute of both <img> elements
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
