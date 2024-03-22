async function start() {
	// your code goes here
	let choice = await prompt('B2D or D2B?');
	if (choice == 'D2B') {
		let decimal = await prompt('Enter a decimal number');

		let binary = '';

		for (let i = 3; i >= 0; i--) {
			let cal = 2 ** i;
			if (decimal < cal) {
				binary += '0';
			} else {
				binary += '1';

				decimal -= cal;
			}
		}
		await alert(binary);
	} else {
		let binary = await prompt('Enter a binary number');
		// turn into string
		binary = binary + '';

		// "1010"

		let decimal = 0;

		for (let i = 0; i < binary.length; i++) {
			let bit = binary[i];
			if (bit == 1) {
				decimal += 2 ** (binary.length - i - 1);
			}
		}

		await alert(decimal);
	}
}
