var wordBank = ["cardinals","falcons","ravens","bills","panthers","bears","bengals","browns","cowboys","broncos","lions","packers","texans","colts","jaguars","chiefs","dolphins","vikings","patriots","saints","giants","jets","raiders","eagles","steelers","rams","chargers","niners","seahawks","buccaneers","titans","redskins"];

var i = Math.floor((Math.random() * 31));
var word = wordBank[i];
var wordLength = word.length;
var gameGuess = [""];
for (var j=1; j <= wordLength; j++) {
    gameGuess = gameGuess + "_ ";
}


var wins = 0;
var losses = 0;
var remain = 9;
var guessed = [];

var gameGuessNode = document.getElementById("game-guess");
var winNode = document.getElementById("win");
var lossNode = document.getElementById("loss");
var remainNode = document.getElementById("remain");
var guessedNode = document.getElementById("guessed");


gameGuessNode.textContent = gameGuess;
winNode.textContent = wins;
lossNode.textContent = losses;
remainNode.textContent = remain;
guessedNode.textContent = guessed;


document.onkeyup = function(event) {
    var guessedLetter = event.key;
    
    if (guessed.indexOf(guessedLetter) === -1 ) {
        
        if (word.indexOf(guessedLetter) === -1) {
            guessed.push(guessedLetter);
            remain = remain - 1;

            if (remain === 0) {
                losses = losses + 1;
                i = Math.floor((Math.random() * 31));
                word = wordBank[i];
                wordLength = word.length;
                gameGuess = [""];

                for (var j=1; j<=wordLength; j++) {
                    gameGuess = gameGuess + "_ ";
                }

                remain = 9;
                guessed = [];
            } 

        }        

        else {
            for (var k=0; k<wordLength;k++) {

                if (word.charAt(k) === guessedLetter) {
                    
                    if ( guessed.indexOf(guessedLetter) === -1 ) {
                        guessed.push(guessedLetter);
                    }

                    gameGuess = gameGuess.substr(0, 2*k) + guessedLetter + " " + gameGuess.substr(2*(k+1));

                    if (gameGuess.indexOf("_") ===  - 1 ) {
                        wins = wins + 1;
                        i = Math.floor((Math.random() * 31));
                        word = wordBank[i];
                        wordLength = word.length;
                        gameGuess = [""];
                        
                        for (var j=1; j<=wordLength; j++) {
                            gameGuess = gameGuess + "_ ";
                        }
                        
                        remain = 9;
                        guessed = [];
                    }
                }
            }


        }

        gameGuessNode.textContent = gameGuess;
        winNode.textContent = wins;
        lossNode.textContent = losses;
        remainNode.textContent = remain;
        guessedNode.textContent = guessed;
        
    }


};
