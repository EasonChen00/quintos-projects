const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `;

const imposter = `
 .d00b. 
.0P  Y0.
00    00
00    00
 0p  q0
 'Y00P' `;

let targetRow = 0;
let targetCol = 0;

let times = [];

async function calcStats() {
	let speeds = [];

	for (let i = 0; i < times.length - 1; i++) {
		speeds.push(times[i + 1] - times[i]);
	}

	log(speeds);

	let sum = 0;

	for (let i = 0; i < speeds.length; i++) {
		sum += speeds[i];
	}

	let average = sum / speeds.length;

	let slowest = 0;
	let fastest = speeds[0];
	for (let i = 0; i < speeds.length; i++) {
		if (speeds[i] > slowest) {
			slowest = speeds[i];
		}
		if (speeds[i] < fastest) {
			fastest = speeds[i];
		}
	}

	await alert(
		'The Average is: ' +
			round(average) +
			'\n' +
			'The slowest is: ' +
			round(slowest) +
			'\n' +
			'The fastest is : ' +
			round(fastest)
	);

	exit();
}

function makeBackground() {
	let patternA = '/\\'.repeat(39);
	let patternB = '\\/'.repeat(39);
	for (let i = 1; i < 29; i += 2) {
		txt(patternA, i, 1);
		txt(patternB, i + 1, 1);
	}
}

// TODO: find the range of row and column values the target can be placed at
function makeTargets() {
	times.push(performance.now());

	erase();

	makeBackground();

	if (times.length == 3) {
		calcStats();
	} else {
		targetRow = round(random(1, 23));
		targetCol = round(random(1, 71));
		button(target, targetRow, targetCol, makeTargets);

		for (let i = 0; i < 4; i++) {
			let row = round(random(1, 23));
			let col = round(random(1, 71));
			button(imposter, row, col, gameOver);
		}
	}
}

async function gameOver() {
	erase();
	text(target, targetRow, targetCol);
	await alert('Game Over');
	exit();
}

async function start() {
	makeBackground();
	await alert(
		'Click the target in the screen but there will be 4 imposters. If you click imposters the game will be over.',
		10,
		20,
		40
	);

	makeTargets();
}
