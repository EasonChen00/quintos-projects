async function start() {
	// your code goes here! below this line

	let path = 0;

	// while path is not null (nothing)
	while (path != null) {
		// null in this case indicates the player cancelled out of the prompt

		let message;
		let options = [];

		if (path == 0) {
			message =
				"You've arrived at uncharted island in the Carribean Ocean. You're looking for the long lost treasure of Captain Rogers, a notorious pirate! You have a copy of his map but it is incomplete, you'll need to search the island for clues.\n\n\t" +
				'1: go into the caves\n\t' +
				'2: go into the forests\n\t' +
				'3: go into the lighthouse';
			options = [1, 2, 3];
		} else if (path == 1) {
			message =
				'In the cave you find two skeletons sitting next to barrels of gunpowder! Be careful.\n\n\t' +
				'4: check their clothes\n\t' +
				'5: pickup the gunpowder to try to remove it from the cave';
			options = [4, 5];
		} else if (path == 2) {
			message =
				"In the forest you find a tiger standing nearby Captain Roger' skeleton. \n\n\t" +
				'6: fight the tiger\n\n\t' +
				'7: try to escape from the tiger';
			options = [6, 7];
		} else if (path == 3) {
			message =
				'In the lighthouse you find a part of your map in the machine, but the machine is still working. Be careful \n\n\t' +
				'8: take the map when the machine is still working \n\t' +
				'9: find the button to turn the machine off';
			options = [8, 9];
		} else if (path == 4) {
			message =
				'After you check the clothes you find a map show where all the rest of the map are and the map shows that some of the pieces is at the lighthouse and a village.\n\n\t' +
				'10 : go to the lighthouse \n\t' +
				'11 : go to the village';
			options = [10, 11];
		} else if (path == 5) {
			message =
				"After you pick up the gunpowder you saw a gun in skeleton's pocket. But the gun is alredy broken\n\n\t" +
				'12: pick up the gun and leave the cave\n\t' +
				'13: pick up the gun and go deeper into the cave\n\t' +
				"14: don't pickup the gun and leave the cave\n\t";
			options = [12, 13, 14];
		} else if (path == 6) {
			message =
				'When you are fighting with tiger you got hurt and you try to escape from the tiger, so u climb on the tree. However your body is getting tired\n\n\t' +
				'15: you jump down and run as fast as you can to escape from tiger\n\t' +
				'16: you wait until the tiger walk away and you go down and escape from the tiger';
			options = [15, 16];
		} else if (path == 7) {
			message =
				'When you start runnig away from the tiger the tiger suddenly tries to attack you, but successfuly you still escape from the tiger. While your running you saw a village \n\n\t' +
				'17: you go back and start finding the way to village \n\t' +
				'18: you keep going forward and you saw a path to a cave and a path to the mountain';
			options = [17, 18];
		} else if (path == 8) {
			message =
				' you put your hand in the machine and you reached the map, but your hand got stuck inside the machine\n\n\t' +
				'19: you unplug the machine but when you unplug the electricity may hurt you \n\t' +
				'20: you just pull your hand away, but the machine might break your arm';
			options = [19, 20];
		} else if (path == 9) {
			message =
				' You find the button that can close the machine but the button have a cap around it and you need to find the key to unlock it\n\n\t' +
				'21: you dont care about the bottom any more and you put your hand in the machine\n\t' +
				'22: You try to find the key to unlock the cap';
			options = [21, 22];
		} else if (path == 10) {
			message =
				'After you leave the cave you try to fix the gun, but you find out that you need some material to fix the gun, so you try to look for the metal and you saw a village \n\n\t' +
				'23: You go inside the store and try to trade things to get the metal\n\t' +
				"24: You didn't go inside the village, but you try to steal the metal at night";
			options = [23, 24];
		} else if (path == 12) {
			message =
				'After you leave the cave you use your gun powder and your broken gun to make gun that is working, and now it is night time and you start to get hungry \n\n\t' +
				'27: You go to the village and use your gun to threaten the villager and get their food\n\t' +
				'28: You go to the forest and use your gun and hunt for animals for dinner';
			options = [27, 28];
		} else if (path == 13) {
			message =
				'You went deeper into the cave and you saw a secret door and you need to open it\n\n\t' +
				'29: You go to look for the key\n\t' +
				'30: You use your gun and try to break the door';
			options = [29, 30];
		} else if (path == 14) {
			message =
				'You go out of the cave and you go to the lighthouse, and you see someone is in the lighthouse using the machine \n\n\t' +
				'31: You try to talk to him and be his friend\n\t' +
				'32: You start to fight with him';
			options = [31, 32];
		} else if (path == 15) {
			message =
				'When you are running you saw a dead animal on the ground\n\n\t' +
				"33: You pickup animal's body and you throw it at the tiger\n\t" +
				'34: You keep running and ignore the dead animal';
			options = [33, 34];
		} else if (path == 16) {
			message =
				'After the tiger walk away you jump down from the tree, but you accidently break your leg\n\n\t' +
				'35: You go to the villgae and try to fix your leg\n\t' +
				'36: You go to the cave and try to rest there';
			options = [35, 36];
		} else if (path == 18) {
			message =
				'You can pick a path between path to a mountain and path to the village\n\n\t' +
				'37: You choose to go to village\n\t' +
				'38: You choose to go to mountain';
			options = [37, 38];
		} else if (path == 11 || path == 17 || path == 37) {
			message =
				'When you enter the village you try to communicate with them, but they do not understand your language. However they still that you live in their village, and they also give you a house, some food, and some drinks \n\n\t' +
				'25: You sleep in their village and try to be friend with them \n\t' +
				'26: You start learning their languages and try to communicate with them';
			options = [25, 26];
		} else if (path == 19) {
			message =
				'When you unplug the machine, the electricity inside it hurt you and now your right hand is broken \n\n\t' +
				'39: You can stay inside the lighthouse and wait for your broken arm to heal\n\t' +
				'40: You can go to other places to find someone who can help you';
			options = [39, 40];
		} else if (path == 20) {
			message =
				'When you pull your hand out, luckily nothing happen to your arm, but when you pull your hand out the map got tear by the machine \n\n\t' +
				'41: You can go find something to put the map together\n\t' +
				'42: You leave the broken map on the ground and leave the lighthouse';
			options = [41, 42];
		} else if (path == 21) {
			messaage =
				'After you put your hand inside the machine, your hand start to feel weird and your hand is not working anymore, so your hand got stucked inside the machine. And then after a while you see a guy go inside the lighthouse.\n\n\t' +
				'43: You can try to communicate with hi, \n\t' +
				'44: You can ignore him and stay inside the machine';
			options = [43, 44];
		} else if (path == 22) {
			message =
				'You find the key and now your opening the machine, and you take the map out. After that you check the map and the map shows other pieces of map is in village and in cave\n\n\t' +
				'45: Go to the cave\n\t' +
				'46: Go to the village';
			options = [45, 46];
		} else if (path == 23) {
			message =
				"When you arrive at the market, you take out all the thing you have,but they didn't give you metal. However they gave you a bag of chicken and some bread. After that you try to build your own camp for you to sleep\n\n\t" +
				'47: You try to ask villagers for help \n\t' +
				'48: You go find some resources and build your own camp';
			options = [47, 48];
		} else if (path == 24) {
			message =
				'At night when they are all asleep, you go to the market and steal some food and some tools that you need \n\n\t' +
				'49: You can build your own camp\n\t' +
				'50: You can go to discover more area in the island';
			options = [49, 50];
		} else if (path == 25) {
			message =
				'The villager borrow you a house and some foods for you. And after that night they even prepare breakfast for you. And you start to be friend with them\n\n\t' +
				'51: You can keep living in the village\n\t' +
				'52: You can leave the village and keep going on the advanture';
			options = [51, 52];
		} else if (path == 26) {
			message =
				'You start to learn their languages and you also take some classes at their village. And now they want you to stay inside the village and live with them.\n\n\t' +
				'53: You accept their invite and live with them.\n\t' +
				'54: You reject it and keep going on your adventure';
			options = [53, 54];
		} else if (path == 27) {
			message =
				'You take out your gun and you try to raid the villlage, but the villagers does not know what a gun is, so they did not got threaten \n\n\t' +
				'55: You can shoot someone to show them your power\n\t' +
				'56: You can leave the village without anything and keep going on your adventure';
			options = [55, 56];
		} else if (path == 28) {
			message =
				'You use your gun to haunt for animals. Luckily you killed a pig and a tiger, but now you need to make something to cook your dinner \n\n\t' +
				'57: You can go find some branches and cook your food. \n\t' +
				'58: You can eat the animals body without cooking it, but be careful you might get sick after eating these raw animals.';
			options = [57, 58];
		} else if (path == 29) {
			message =
				"When you are finding keys, you heard some noise in the cave, and it sounds like animal's noise\n\n\t" +
				'59:You can stay at where you are and wait until the thing walk away\n\t' +
				'60:You can go out and fight with it';
			options = [59, 60];
		} else if (path == 30) {
			message =
				'You use your gun to hit the door and you really destroy the door\n\n\t' +
				'61: You can enter the door now and went inside to look for some clue or some treasure \n\t' +
				'62: You can go deeper inside the cave';
			options = [61, 62];
		} else if (path == 31) {
			message =
				'You try to communicate with him and he actually understand your language and he communicate with you \n\n\t' +
				'63: You can asked him about some clues about the treasure and some information about the island \n\t' +
				'64: You can follow him and work with him';
			options = [63, 64];
		} else if (path == 32) {
			message =
				'You fight with him, but he is much stronger than you, so you lost a battle with him.And you die, you can start the adventure again.\n\n\t' +
				'65: You can go to cave\n\t' +
				'66: You can go to lighthouse\n\t' +
				'67: You can go to village';
			options = [65, 66, 67];
		} else if (path == 33) {
			message =
				"You throw the animal's body at tiger, and the tiger stop chasing you\n\n\t" +
				'68: You can go to haunt for food \n\t' +
				'69: You can go to find some where to rest';
			options = [68, 69];
		} else if (path == 34) {
			message =
				'You keep running but tiger runs faster than, and the tiger hit you, so now you are bleeding a lot. Luckily, someone with a gun try to save you from the tiger\n\n\t' +
				'70: stay behind the person and tell him to help you \n\t' +
				'71: You can keep running, but you might get more painful when you are running';
			options = [70, 71];
		} else if (path == 35) {
			message = 
			'You go to the village and  '
		}
		// else if (path == 21 || path == 22) {
		// 	//same message
		// } else if (path == 23 && foundTheKey) {
		// 	//now the player could unlock a door
		// } else if (path == 23 && !foundTheKey) {
		// 	//the if statement is true if the player did NOT find the key
		// }
		// asks the player to choose a path
		let choice = await prompt(message);
		if (options.includes(choice)) {
			path = choice;
		} else {
			await alert('the choice is not valid');
		}
	}

	exit();
}
