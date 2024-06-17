function startAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    const startButton = document.getElementById('startButton');
    const nextChapterButton = document.getElementById('nextChapter');

    startButton.hidden = true;
    audioPlayer.hidden = false;
    audioPlayer.play();

    audioPlayer.addEventListener('timeupdate', () => {
        if (audioPlayer.duration - audioPlayer.currentTime <= 30) {
            nextChapterButton.hidden = false;
            nextChapterButton.onclick = function() {
                window.location.href = 'https://app.meadow.space/e/-O-al8Rovo0Q7feMHwuZ?i';
            };
        }
    });
}
