let random = parseInt(Math.random() * 100 + 1);

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const previousGuesses = document.querySelector(".previousGuesses");
const attemptsRemaining = document.querySelector(".attemptsLeft");
const resultPara = document.getElementById("resultpara");
const resultMessage = document.getElementById("resultMessage");

let submittedGuesses = [];
let attempt = 1;
let playGame = true;

let startOverBtnContainer = document.getElementById("startOverBtnContainer");
if (!startOverBtnContainer) {
    startOverBtnContainer = document.createElement("div");
    startOverBtnContainer.id = "startOverBtnContainer";
    resultPara.appendChild(startOverBtnContainer);
}

if (playGame) {
    submitGuess.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(guessInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        DisplayMessages("Please enter a valid number between 1 and 100.");
        return;
    }
    if (submittedGuesses.includes(guess)) {
        DisplayMessages("You have already guessed that number. Try again.");
        return;
    }

    submittedGuesses.push(guess);
    previousGuesses.textContent = submittedGuesses.join(", ");
    attemptsRemaining.textContent = 10 - attempt;

    if (guess === random) {
        DisplayMessages(`🎉 Congratulations! You guessed the number ${random} correctly!`);
        endgame();
    } else if (attempt === 10) {
        DisplayMessages(`❌ Game Over! The number was ${random}.`);
        endgame();
    } else {
        const hint = guess < random ? "Your guess is too low." : "Your guess is too high.";
        DisplayMessages(`${hint} Try again.`);
    }

    attempt++;
    guessInput.value = "";
}

function DisplayMessages(msg) {
    resultMessage.textContent = msg;
}

function endgame() {
    guessInput.setAttribute("disabled", true);
    submitGuess.setAttribute("disabled", true);
    playGame = false;

    startOverBtnContainer.innerHTML = `
        <button type="button" id="startOver" 
        class="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded transition">
            🔄 Start Over
        </button>
    `;

    const startOverBtn = document.getElementById("startOver");
    startOverBtn.addEventListener("click", resetGame);
}

function resetGame() {
    random = parseInt(Math.random() * 100 + 1);
    submittedGuesses = [];
    attempt = 1;
    playGame = true;

    guessInput.removeAttribute("disabled");
    submitGuess.removeAttribute("disabled");
    guessInput.value = "";

    previousGuesses.textContent = "";
    attemptsRemaining.textContent = "10";
    resultMessage.textContent = "";
    startOverBtnContainer.innerHTML = "";
}
