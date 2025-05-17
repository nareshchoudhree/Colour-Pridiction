// script.js
document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.querySelector('.timer');
    const historyBody = document.getElementById('history-body');
    let timeLeft = 30;

    // Timer Function
    function startTimer() {
        timeLeft = 30;
        timerElement.textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;
        const timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                generateResult();
                setTimeout(startTimer, 1000);
            }
        }, 1000);
    }

    // Generate Random Result
    function generateResult() {
        const number = Math.floor(Math.random() * 10); // Random number 0-9
        const bigSmall = number >= 5 ? 'Big' : 'Small';
        let color;
        if (number === 0 || number === 5) {
            color = 'violet';
        } else if (number % 2 === 0) {
            color = 'red';
        } else {
            color = 'green';
        }

        // Add to history
        const period = `202505171000519${Math.floor(Math.random() * 1000)}`;
        const row = `
            <tr>
                <td>${period}</td>
                <td>${number}</td>
                <td>${bigSmall}</td>
                <td><span class="color-circle ${color}"></span></td>
            </tr>
        `;
        historyBody.insertAdjacentHTML('afterbegin', row);

        // Update recent numbers
        const recentNumbers = document.querySelector('.recent-numbers');
        recentNumbers.insertAdjacentHTML('afterbegin', `<div class="ball ${color}">${number}</div>`);
        if (recentNumbers.children.length > 5) {
            recentNumbers.removeChild(recentNumbers.lastChild);
        }
    }

    // Start the timer on page load
    startTimer();

    // Handle Prediction Buttons (For demo purposes, log the prediction)
    document.querySelectorAll('.prediction-btn, .number-ball, .big-small-btn').forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Prediction made: ${button.textContent}`);
        });
    });

    // Handle Multiplier Buttons (For demo purposes, log the multiplier)
    document.querySelectorAll('.multiplier-btn').forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Multiplier selected: ${button.textContent}`);
        });
    });
});
