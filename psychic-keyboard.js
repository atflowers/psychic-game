var gamesWon = 0;
var gamesLost = 0;
var correctKey = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesLeft = 9;
var guessesMade = 0;
var displayText = "";

window.onload = function (){
	reset();
	refreshScore();

	window.addEventListener("keypress", function(e){
		document.getElementById("testMe").style.textAlign = "left";

		if (e.key == correctKey){
			document.getElementById("testMe").innerHTML = "You guessed correctly!<br>'" + e.key + "' is the correct answer.";
			document.getElementById("testMe").style.textAlign = "center";
			gamesWon++;
			reset();
		}else{
			if (displayText == ""){
				displayText = e.key;
			}else{
				displayText += ", " + e.key;
			};
			guessesLeft--;
			guessesMade++;
			document.getElementById("testMe").innerHTML = "You guessed: " + displayText;
			if (guessesLeft == 0) {
				document.getElementById("testMe").innerHTML = "Sorry, you lost...";
				gamesLost++;
				reset();
				refreshScore();
			};
		};

		refreshScore();
	}); 
};

function reset (){
	correctKey = alphabet[Math.floor(Math.random()*alphabet.length)];
	guessesLeft = 9;
	guessesMade = 0;
	displayText = "";
	console.log("The reset was passed.");
};

function refreshScore (){
	document.getElementById("gamesWon").innerHTML = gamesWon;
	document.getElementById("gamesLost").innerHTML = gamesLost;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("guessesMade").innerHTML = guessesMade;
};
