document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const stopButton = document.getElementById('stop');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('play-next');

    let isPlaying = false;

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playPauseButton.textContent = 'Play';
        } else {
            audio.play();
            playPauseButton.textContent = 'pause';
        }
        isPlaying = !isPlaying;
    });

    stopButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playPauseButton.textContent = 'Play';
        isPlaying = false;
    });

    prevButton.addEventListener('click', () => {
        // Implement functionality to play the previous song
        console.log('song.mp3');
    });

    nextButton.addEventListener('click', () => {
        audio.stop();
        audio.currentTime = 0
        NextButton.textContent = 'play-Next';
        isPlaying = true;
    });
});
const songs = [
    { title: 'Song 1', artist: 'Artist 1', src: 'song.mp3' },
    { title: 'Song 2', artist: 'Artist 2', src: '1song.mp3' },
    { title: 'Song 3', artist: 'Artist 3', src: 'song3.mp3' }
];

let currentIndex = 0;

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('artist-name').textContent = song.artist;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = 'Pause';
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = 'next';
});

// Load the initial song
loadSong(currentIndex);
