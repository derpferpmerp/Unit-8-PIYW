// Yung Bratz Setup
var songData = {
	"Yung Bratz": {
		"TRACK": "YungBratzAudio",
		"CONTR": "YungBratzControl",
		"CONTAINER": "YungContainer",
		"NAME": "Yung Bratz",
	},
	"Eat It Up": {
		"TRACK": "EatItUpAudio",
		"CONTR": "EatItUpControl",
		"CONTAINER": "EatContainer",
		"NAME": "Eat It Up",
	},
	"Changes": {
		"TRACK": "ChangesAudio",
		"CONTR": "ChangesControl",
		"CONTAINER": "ChangesContainer",
		"NAME": "Changes",
	},
	"Rock Bottom": {
		"TRACK": "RBAudio",
		"CONTR": "RBControl",
		"CONTAINER": "RBContainer",
		"NAME": "Rock Bottom",
	},
	"Tip Toe": {
		"TRACK": "TTAudio",
		"CONTR": "TTControl",
		"CONTAINER": "TTContainer",
		"NAME": "Tip Toe",
	},
	"Closer": {
		"TRACK": "CloserAudio",
		"CONTR": "CloserControl",
		"CONTAINER": "CloserContainer",
		"NAME": "Closer",
	},
	"The One": {
		"TRACK": "TheOneAudio",
		"CONTR": "TheOneControl",
		"CONTAINER": "TheOneContainer",
		"NAME": "The One Who Got Away",
	}
}

for(var songName in songData) {
	var data = songData[songName];
	console.log(data);
	const tr = document.getElementById(data.TRACK);
	const cont = document.getElementById(data.CONTR);
	const name = data.NAME;
	const desc = document.getElementById(data.DESCTEXT);

	cont.addEventListener("click", function() {
		if (tr.paused || (!tr.paused && cont.className=="play")) {
			tr.play();
			console.log(`Playing ${name}`);
			cont.className = "pause";
		} else {
			console.log(`Pausing ${name}`);
			tr.pause();
			cont.className = "play";
		}
	});
	
	tr.addEventListener("ended", function() {
		cont.className = "play";
		console.log(`${name} Finished Playing`);
	});
}


