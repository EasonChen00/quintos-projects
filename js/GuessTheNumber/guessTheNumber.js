async function start() {
	let num = random(1, 100);
	num = round(num);
	let guess;
	while (guess != num) {
		guess = await prompt('Guess the number 1-100');
		if (guess == num) {
			await alert('You are correct');
		} else if (guess < num) {
			await alert('Your guess is too low');
		} else if (guess > num) {
			await alert('Your guess is too high');
		} else if (guess > 100) {
			await alert('Your guess is over 100');
		}
	}
	exit();
}
