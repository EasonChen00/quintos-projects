let frog, lilypads;

let jumpSound1;
let jumpSound2;
let fallSound;

function preload() {
	jumpSound1 = loadSound('sounds/retro_jump_bounce_13.wav');
	jumpSound1.setVolume(0.3);
	jumpSound2 = loadSound('sounds/retro_jump_bounce_08.wav');
	jumpSound2.setVolume(0.3);
	fallSound = loadSound('sounds/retro_jump_bounce_09.wav');
	fallSound.setVolume(0.3);

	frog = new Sprite();
	frog.addAni('frog_jump.png', { frameSize: [32, 16], frames: 7 });
	frog.ani.stop();

	lilypads = new Group();
	lilypads.addAni('lilypads.png', { frameSize: [16, 16], frames: 12 });
}

function setup() {
	world.gravity.y = 10;
	noStroke();
	allSprites.pixelPerfect = true;

	frog.x = 0;
	frog.y = 80;
	frog.w = 10;
	frog.h = 8;
	frog.rotationLock = true;

	lilypads.y = 90;
	lilypads.w = 10;
	lilypads.h = 2;
	lilypads.collider = 'static';

	frog.layer = 2;
	lilypads.layer = 1;

	makeLilyPads();
}

function makeLilyPads() {
	// TODO: use a loop to make more lily pads

	for (let i = 0; i < 50; i++) {
		let lily = new lilypads.Sprite();
		lily.x = i * 16;
		lily.ani.frame = round(random(0, 11));
		lily.ani.frameDelay = round(random(60, 150));

		if (random() < 0.5) {
			i++;
		}
	}
}

function draw() {
	background('0');
	fill('3');
	rect(0, 0, canvas.w, 90);

	// if frog fell
	if (frog.y >= 200) {
		frog.x = 0;
		frog.y = 80;
		fallSound.play();
	}

	// if frog is on lilypad
	if (frog.y > 83 && frog.vel.y <= 0.1) {
		frog.x = round(frog.x / 16) * 16;
		frog.ani.stop();
		frog.ani.frame = 0;

		if (kb.presses('up')) {
			// little jump
			jumpSound1.play();
			frog.ani.play();
			frog.velocity.y = -1.4;
			frog.velocity.x = 0.96666;
		} else if (kb.presses('right')) {
			// BIG jump!
			frog.ani.play();
			frog.velocity.y = -2;
			frog.velocity.x = 1.35;
			jumpSound2.play();
		}
	}

	camera.x = frog.x + 64;
}
