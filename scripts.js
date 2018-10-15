//4 colors and random color game array

var colors = ['green', 'red', 'yellow', 'blue'];
var gameColors = [];

//generate random sequence of colors and push to gameColors array
for (var i = 0; i < 2; i++) {
    var randomColor = Math.floor(Math.random() * colors.length);
    gameColors.push(colors[randomColor]);
}

console.log(gameColors);

var green = document.querySelector('.green');
var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');
var blue = document.querySelector('.blue');

function colorSequenceOn() {
    if (gameColors[i] === 'green') {
        setTimeout(function() {
            green.style.backgroundColor = '#00ff00';
        },timeInterval)
        setTimeout(function() {
            green.style.backgroundColor = '#006400';
        },1000);
    } else if (gameColors[i] === 'yellow') {
        setTimeout(function() {
            yellow.style.backgroundColor = 'yellow';
        },timeInterval);
        setTimeout(function() {
            yellow.style.backgroundColor = '#999900';
        },1000);
    } else if (gameColors[i] === 'red') {
        setTimeout(function() {
            red.style.backgroundColor = '#ff0000';
        }, timeInterval);
        setTimeout(function() {
            red.style.backgroundColor = '#B22222';
        },1000);
    } else {
        setTimeout(function() {
            blue.style.backgroundColor = '#0000ff';
        },timeInterval);
        setTimeout(function() {
            blue.style.backgroundColor = '#000080';
        },1000);
    }
    timeInterval += 1000;
};

function colorSequenceOff() {
    if (gameColors[i] === 'green') {
        green.style.backgroundColor = '#006400';
    } else if (gameColors[i] === 'yellow') {
        yellow.style.backgroundColor = '#999900';
    } else if (gameColors[i] === 'red') {
        red.style.backgroundColor = '#B22222';
    } else {
        blue.style.backgroundColor = '#000080';
    }
    /*
    if (gameColors[i] === 'blue') {
        setTimeout(function() {
            green.style.backgroundColor = '#006400';
        }, 1000);
    } else if (gameColors[i] === 'yellow') {
        setTimeout(function() {
            yellow.style.backgroundColor = '#999900';
        }, 1000);
    } else if (gameColors[i] === 'red') {
        setTimeout(function() {
            red.style.backgroundColor = '#B22222';
        }, 1000);
    } else {
        setTimeout(function() {
            blue.style.backgroundColor = '#000080';
        }, 1000);
    } */
}
var timeInterval = 1000;
// have the game play the random sequence of colors
for (var i = 0; i < gameColors.length; i++) {
    colorSequenceOn();
    // setTimeout(colorSequenceOff, timeInterval);
    // timeInterval += 1000;
}