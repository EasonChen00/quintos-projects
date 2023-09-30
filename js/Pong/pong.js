// canvas width is 256, height is 192

// create the sprite variables outside the setup function so you
// can use them in other functions
let ball, paddleL, paddleR, wallT, wallB;

let scoreL = 0;
let scoreR = 0;

let maxSpeed = 1;

// code in the setup function gets run once at the start of the game
function setup() {
	noStroke(); // disable black outlines around shapes
	allSprites.pixelPerfect = true;

	let imgBall = spriteArt(`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`);

	let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

	// creates a ball sprite and places it in center of the screen
	ball = new Sprite();
	ball.image = imgBall;
	ball.x = canvas.w / 2;
	ball.y = canvas.h / 2;
	ball.diameter = 8;
	ball.bounciness = 1; // full bounciness
	ball.friction = 0; // no friction

	ball.speed = 1;
	ball.direction = 45;

	// TODO: create paddle sprites
	paddleL = new Sprite();
	paddleL.img = imgPaddle;
	paddleL.x = 10;
	paddleL.collider = 'k';

	paddleR = new Sprite();
	paddleR.img = imgPaddle;
	paddleR.x = 246;
	paddleR.collider = 'k';

	blockB = new Sprite();
	blockB.y = 220;
	blockB.x = 100;
	blockB.w = 400;
	blockB.collider = 's';

	blockT = new Sprite();
	blockT.y = -30;
	blockT.x = 100;
	blockT.w = 400;
	blockT.collider = 's';
}

// code in the draw function gets run 60 times per second
function draw() {
	background('black');
	// TODO: move the paddles

	paddleL.speed = 5;
	paddleR.speed = 5;

	if (kb.pressing('up')) {
		paddleL.direction = -90;
	} else if (kb.pressing('down')) {
		paddleL.direction = 90;
	} else {
		paddleL.speed = 0;
	}
	if (kb.pressing('up2')) {
		paddleR.direction = -90;
	} else if (kb.pressing('down2')) {
		paddleR.direction = 90;
	} else {
		paddleR.speed = 0;
	}

	if (ball.collided(paddleL) || ball.collided(paddleR)) {
		maxSpeed = maxSpeed + 0.2;
		ball.speed = maxSpeed;
	}
	if (ball.collided(paddleL)) {
		ball.direction = random(-65, 65);
	}
	if (ball.collided(paddleR)) {
		ball.direction = random(115, 245);
	}

	let offLeft = ball.x <= 0;
	let offRight = ball.x >= canvas.w;

	if (offLeft || offRight) {
		ball.x = canvas.w / 2;
		ball.y = canvas.h / 2;
		maxSpeed = 1;
		ball.speed = 1;
	}
	if (offLeft) {
		scoreR = scoreR + 1;
		txt(scoreR, 3, 26);
		if (random() < 0.5) {
			ball.direction = -45;
		} else {
			ball.direction = 45;
		}
	}
	if (offRight) {
		scoreL = scoreL + 1;
		txt(scoreL, 3, 6);
		if (random() < 0.5) {
			ball.direction = -135;
		} else {
			ball.direction = 135;
		}
	}
}
