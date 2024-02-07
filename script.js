const messageDiv = document.getElementById('message');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const funnyMessages = [
    "Please try again.",
    "That is not the correct choice.",
    "Please think about it.",
    "Are you sure? Try again!",
    "Come on, give it another shot!",
    "You can do better than that!",
    "Almost there, but not quite!",
    "Looks like you need another chance!",
    "Don't be shy, try again!"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function showPopup(message, correct) {
    messageDiv.innerText = message;
    if (correct) {
        messageDiv.style.color = 'green';
    } else {
        messageDiv.style.color = 'red';
    }
}

function relocateButton() {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const newX = getRandomInt(maxX);
    const newY = getRandomInt(maxY);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}


yesBtn.addEventListener('click', function() {
    showPopup("Hurray! You got the right answer!", true);
});

noBtn.addEventListener('click', function() {
    const randomMessage = funnyMessages[getRandomInt(funnyMessages.length)];
    showPopup(randomMessage, false);
    relocateButton();
});

// Heart animation
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heartsContainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
