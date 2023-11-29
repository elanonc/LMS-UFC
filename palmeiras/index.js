var imageContainer = document.getElementById('imageContainer');
var audioPlayer = document.getElementById('audioPlayer');
var audio = document.getElementById('audio');
var playPauseButton = document.getElementById('playPauseButton');

function showAudioPlayer() {
    imageContainer.style.display = 'none';
    audioPlayer.style.display = 'block';
}

playPauseButton.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "&#9616;&#9616;"; // ícone de pausa
        playPauseButton.classList.add('rotating');
    } else {
        audio.pause();
        playPauseButton.innerHTML = "&#9654;"; // ícone de play
        playPauseButton.classList.remove('rotating');
    }
});