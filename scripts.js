//4 colors and random color game array

var colors = ['green', 'red', 'yellow', 'blue'];
var gameColors = [];
var timeInterval = 333;

/*sequenceLength is used to limit the number of items in the random colors
array that the function can produce.*/
var sequenceLength = 5;

/*sequenceLengthInv is the "opposite" of sequenceLength in the sense
that the length of the random color array minus this number equals
the sequence length*/
var sequenceLengthInv = 5;
var counter = 0;

//generate random sequence of colors and push to gameColors array
for (var i = 0; i < 10; i++) {
    var randomColor = Math.floor(Math.random() * colors.length);
    gameColors.push(colors[randomColor]);
}

//select the color divs from the HTML page
var green = document.querySelector('.green');
var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');
var blue = document.querySelector('.blue');
//this selects all the colors
var color = document.querySelectorAll('.color');

//change color on click
for (var i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function(e) {
        var fourColors = this.getAttribute('class');
        if (fourColors.includes('green')) {
            green.style.backgroundColor = '#00ff00';
            setTimeout(function () {
                green.style.backgroundColor = '#006400';
            }, 125);
        } else if (fourColors.includes('yellow')) {
            yellow.style.backgroundColor = 'yellow';
            setTimeout(function () {
                yellow.style.backgroundColor = '#999900';
            }, 125);
        } else if (fourColors.includes('red')) {
            red.style.backgroundColor = '#ff0000';
            setTimeout(function () {
                red.style.backgroundColor = '#B22222';
            }, 125);
        } else if (fourColors.includes('blue')) {
            blue.style.backgroundColor = '#0000ff';
            setTimeout(function () {
                blue.style.backgroundColor = '#000080';
            }, 125);
        }
    });
}
//find a way to refactor this, it's fairly redundant

console.log(gameColors);
//function to turn on the colors in the random sequence
function colorSequenceOn(i) {
    if (gameColors[i] === 'green') {
        green.style.backgroundColor = '#00ff00';
    } else if (gameColors[i] === 'yellow') {
        yellow.style.backgroundColor = 'yellow';
    } else if (gameColors[i] === 'red') {
        red.style.backgroundColor = '#ff0000';
    } else if (gameColors[i] === 'blue')  {
        blue.style.backgroundColor = '#0000ff';
    } else {
        console.log('colorSequenceOn is broken.');
    }
};

//function to turn off the colors in the random sequence
function colorSequenceOff(i) {
    if (gameColors[i] === 'green') {
        green.style.backgroundColor = '#006400';
    } else if (gameColors[i] === 'yellow') {
        yellow.style.backgroundColor = '#999900';
    } else if (gameColors[i] === 'red') {
        red.style.backgroundColor = '#B22222';
    } else if (gameColors[i] === 'blue') {
        blue.style.backgroundColor = '#000080';
    }
};

//function for the game to play the random sequence of colors
function randomSequence() {
    setTimeout(colorSequenceOn, timeInterval, i);
    setTimeout(colorSequenceOff, timeInterval + 333, i);
    timeInterval += 666;
}

//function declaration that listens for user's input
function userInput() {
    color[i].addEventListener('click', function(e) {
        var result = this.getAttribute('class');
        if (result.includes(gameColors[counter]) && counter < sequenceLength) {
            console.log('correct');
            counter++;
        } else {
            alert('incorrect! You have lost the game!');
        }
    });
}

if (sequenceLengthInv >= 0) {
    // have the game play the random sequence of colors
    for (var i = 0; i < gameColors.length - sequenceLengthInv; i++) {
        randomSequence();
    }

    //listens for the user's input
    for (var i = 0; i < color.length; i++) {
        userInput();
    }
    sequenceLength++;
    sequenceLengthInv--;
}

// have the game play the random sequence of colors
// for (var i = 0; i < gameColors.length - sequenceLength; i++) {
//     randomSequence();
// }

//listens for the user's input
// for (var i = 0; i < color.length; i++) {
//     userInput();
// }