const hangman = [
	`
  +---+
  |   |
      |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
];

const wordsList =
	'cool know over these about down large please they after drink learn put think again each little red this ago everything live right those all face location run three also far make same to always fast man sea together am father many seven try an find may shop turn and first meaning sit under any five men six until are fly mother sleep us as foot much small use from must smile want ask give never some we at go no sorry well away green not star what because has now stay when bed here ocean stop where black his of store which blue how old strong why bring in on tell will call into one thank with clean is only that yellow cold it or the yes color just our you come kind out there';

// the start function gets run when the game starts
async function start() {
	// your code goes here! below this line

	/* Part A: split the wordsList String into an array called words, then choose a random word */
	let words = wordsList.split(' ');

	let keepPlaying = true;

	while (keepPlaying) {
		let randomNum = round(random(0, words.length));
		let word = words[randomNum];

		log(word);

		/* Part B: make an array with a line for each letter in the word */
		// Example word: 'quiz'
		// lines -> ['_', '_', '_', '_']

		let lines = [];

		for (let i = 0; i < word.length; i++) {
			lines.push('_');
		}

		let wrong = 0;
		let correct = 0;

		let wrongLetters = [];

		while (wrong < 6 && correct < word.length) {
			/* Part C: show the lines for the word below the hangman art */
			let guess = await prompt(hangman[wrong] + '\n\n' + lines.join(' ') + '\n\n' + wrongLetters);

			let isCorrect = false;

			for (let i = 0; i < word.length; i++) {
				let letter = word[i];
				if (guess == letter) {
					lines[i] = letter;
					isCorrect = true;
					correct++;
				}
			}
			if (isCorrect == false) {
				wrong++;
				wrongLetters.push(guess);
			}
		}

		if (correct == word.length) {
			await alert('You Won');
		} else {
			await alert('You Lose, the word was ' + word);
		}

		let response = await prompt('Would you like to keep playing hangman? yes/no');
		if (response == 'no') {
			keepPlaying = false;
		}
	}

	exit();
} // end of the start function
