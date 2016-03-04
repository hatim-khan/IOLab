callAPI('hello') //use this as a placeholder for now

function passQuery() {
	// search = $('#searched').val()
	// console.log(search);
	// callAPI(search)
	// var search = document.getElementById('searched').value;
	// callAPI(search);
}



// Event hander for calling the SoundCloud API using the user's search query
function callAPI(query) {
	$.get("https://api.soundcloud.com/tracks?client_id=b3179c0738764e846066975c2571aebb",
		{'q': query,
		'limit': '200'},
		function(data) {
			// PUT IN YOUR CODE HERE TO PROCESS THE SOUNDCLOUD API'S RESPONSE OBJECT
			// HINT: CREATE A SEPARATE FUNCTION AND CALL IT HERE
			console.log(data);
			var songs = process(data); //process the data x`
			display(songs, 20);
		},'json'
	);
}

// 'Play' button event handler - play the track in the Stratus player
function changeTrack(url) {
	// Remove any existing instances of the Stratus player
	$('#stratus').remove();

	// Create a new Stratus player using the clicked song's permalink URL
	$.stratus({
      key: "b3179c0738764e846066975c2571aebb",
      auto_play: true,
      align: "bottom",
      links: url
    });
}

function display(songs, n) {


	for (var i = 0; i < n; i++) {

		//create div to encapsulate img and play button
		var thumbnail = document.createElement('div');
		///create image tag
		var img = document.createElement("img");
		if (songs[i]['artwork'] != null) {
		 	img.src = songs[i]['artwork'];
		}
		else {
			///if the artwork is null, set it an arbitrary soundcloud image
			img.src = "http://assorac.com/soundcloud/soundcloud.jpg";
		}
		// thumbnail.appendChild(img);
		document.getElementById('songs').appendChild(img);

		var button = document.createElement("button")
		button.onclick = function () {
			changeTrack(songs[i]['url']) };

			button.className = "btn btn-info";
			button.setAttribute('type','button')
			button.appendChild(document.createTextNode('Play'));
			document.getElementById('songs').appendChild(button);
		};
		thumbnail.appendChild(button);
}


//function to process the response of the $.get
//data is an array of soundcloud objects
function process(data) {

	var songs = [] //empty array to store songs in
	//iterate through each object/song in data
	for (var i = 0; i < data.length; i++) {
		var song = {
			title: data[i]['title'], //retrieve title, name, artwork_url
			artist: data[i]['user']['username'],
			artwork: data[i]['artwork_url'],
			url: data[i]['permalink_url']
		}
		songs.push(song); //add the song to list of songs
	};
	return songs
	}
