const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');

function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

video.addEventListener('click', toggleVideoStatus);
play.addEventListener('click', toggleVideoStatus);
play.addEventListener('click', updatePlayIcon);
video.addEventListener('click', updatePlayIcon);
stop.addEventListener('click', stopVideo);
