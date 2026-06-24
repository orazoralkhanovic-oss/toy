const music = document.getElementById('bgMusic');
const button = document.getElementById('musicBtn');

button.addEventListener('click', () => {

    if (music.paused) {

        music.play();

        button.classList.add('playing');
        button.innerHTML = '🎶';

    } else {

        music.pause();

        button.classList.remove('playing');
        button.innerHTML = '🎵';
    }

});