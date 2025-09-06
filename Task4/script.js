let count = 0;

const counterDisplay = document.getElementById('counter-display');
const messageArea = document.getElementById('message-area');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateCounter() {
    counterDisplay.textContent = count;
    if (count < 0) {
        messageArea.textContent = 'Low Count';
        messageArea.style.color = 'red';
    } else if (count > 10) {
        messageArea.textContent = 'High Count';
        messageArea.style.color = 'blue';
    } else {
        messageArea.textContent = '';
    }
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// Initial update
updateCounter();
