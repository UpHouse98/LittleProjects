'use strict'
// Function that returns a random hexa color when called
// e.g. calling myColor = getRandomColor() will store a 
// random hexadecimal color in myColor (i.e. myColor = '#12AC56')
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    // Generate 6 random values from letters array
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var btnPress = document.getElementById("btnStart");
var countDw = document.getElementById("countDown");

//Button press event listerner
btnPress.addEventListener("click",CountDown);

//Function for countdown
function CountDown() {
    var timeleft = 9;
    var Timer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(Timer);
            countDw.innerHTML = getMessage(Math.floor(Math.random() * 100));
        } else {
            document.getElementById("countDown").innerHTML = timeleft;
        }
        timeleft -= 1;
        countDw.style.color = getRandomColor();
    }, 1000);
    if (timeleft = 9) {
        btnPress.style.display = "none";
    }
}

function getMessage(cnt) {
    // HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts/" + cnt);
    httpRequest.send();
    httpRequest.onload = function () {
        var httpResponse = JSON.parse(httpRequest.responseText);
        var htmlString = "<h1>" + httpResponse.title + "</h1>";
        countDw.innerHTML = htmlString;
    }
}

