// Yung Bratz Setup
var songData = {
	"Ridin Dirty": {
		"TRACK": "RidinAudio",
		"CONTR": "RidinControl",
		"CONTAINER": "RidinContainer",
		"NAME": "Ridin Dirty",
	},
	"What\'s Your Fantasy": {
		"TRACK": "FantasyAudio",
		"CONTR": "FantasyControl",
		"CONTAINER": "FantasyContainer",
		"NAME": "What\'s Your Fantasy",
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


