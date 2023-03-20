function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    let audio;
    let key;

    if (e.type === 'keydown') {
        audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    } else if (e.type === 'click') {
        audio = document.querySelector(`audio[data-key="${e.currentTarget.getAttribute('data-key')}"]`);
        key = e.currentTarget;
    }

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
    key.addEventListener('click', playSound);
    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
