async function start() {
	let keepPlaying = true;

	while (keepPlaying) {
		let turn = 0;

		let num = random(1, 100);
		num = round(num);
		let guess;
		while (guess != num && turn < 7) {
			guess = await prompt('Guess the number 1-100');
			if (guess == num) {
				await alert('You are correct');
			} else if (guess > 100 || guess < 1) {
				await alert('Your guess is invalid');
				turn--;
			} else if (guess < num) {
				await alert('Your guess is too low');
			} else if (guess > num) {
				await alert('Your guess is too high');
			}
			turn++;
		}

		if (guess != num) {
			await alert('You Lost');
		}
		let response = await prompt('Do you still want to play the game yes/no?');
		if (response == 'no') {
			keepPlaying = false;
		}
	}
	exit();
}
