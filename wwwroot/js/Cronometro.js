
const time_el = document.querySelector('.time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");


let seconds = 0;
let interval = null;


start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);



function timer() {

	seconds++;

	var hrs = Math.floor(seconds / 3600);
	var mins = Math.floor((seconds - (hrs * 3600)) / 60);
	var secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;


	time_el.innerText = `${hrs}:${mins}:${secs}`;

	var tempo = { 'seconds': seconds };

	localStorage.setItem('tempo', JSON.stringify(tempo));

	var pegarTempo = localStorage.getItem('tempo');



}


window.onload = function () {

	var pegarTempo = localStorage.getItem('tempo');
	if (pegarTempo) {
		seconds = JSON.parse(pegarTempo).seconds;
	}

}



function start() {

	if (interval) {
		return;
	}
	interval = setInterval(timer, 1000);


}


function stop() {

	clearInterval(interval);
	interval = null;
}

function reset() {

	seconds = 0;
	stop();
	time_el.innerText = '00:00:00';

}




