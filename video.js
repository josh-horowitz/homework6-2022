var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= .95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration > 15){
		video.currentTime += 15;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	// console.log(video.muted);
});

document.querySelector("#slider").addEventListener("change", function(){
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").textContent = video.volume*100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
});


