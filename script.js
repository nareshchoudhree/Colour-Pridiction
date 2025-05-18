document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.querySelector('.timer');
    const historyBody = document.getElementById('history-body');
    const messageSection = document.getElementById('message-section');
    const betModal = document.getElementById('bet-modal');
    const betAmountInput = document.getElementById('bet-amount');
    const confirmBetBtn = document.getElementById('confirm-bet');
    const cancelBetBtn = document.getElementById('cancel-bet');

    let timeLeft = 30;
    let userPrediction = null;
    let userBetAmount = 0;
    let multiplier = 1;
    let latestResult = null;

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
                checkWinLose();
                setTimeout(startTimer, 2000);
            }
        }, 1000);
    }

    // Generate Random Result
    function generateResult() {
        const number = Math.floor(Math.random() * 10);
        const bigSmall = number >= 5 ? 'big' : 'small';
        let color;
        if (number === 0 || number === 5) {
            color = 'violet';
        } else if (number % 2 === 0) {
            color = 'red';
        } else {
            color = 'green';
        }

        latestResult = { number, bigSmall, color };

        // Add to history
        const period = `202505171000519${Math.floor(Math.random() * 1000)}`;
        const row = `
            <tr>
                <td>${period}</td>
                <td>${number}</td>
                <td>${bigSmall.charAt(0).toUpperCase() + bigSmall.slice(1)}</td>
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

    // Check Win/Lose
    function checkWinLose() {
        if (!userPrediction || !latestResult) return;

        let win = false;
        let winnings = 0;

        if (userPrediction.type === 'color' && userPrediction.value === latestResult.color) {
            win = true;
        } else if (userPrediction.type === 'number' && parseInt(userPrediction.value) === latestResult.number) {
            win = true;
        } else if (userPrediction.type === 'bigsmall' && userPrediction.value === latestResult.bigSmall) {
            win = true;
        }

        if (win) {
            winnings = userBetAmount * multiplier * 2; // Base payout is 2x, multiplied by chosen multiplier
            messageSection.textContent = `🎉 You Win! +${winnings} 💰`;
            messageSection.className = 'message-section win';
            // Simulate win sound: new Audio('win.mp3').play();
        } else {
            messageSection.textContent = `😔 You Lose! -${userBetAmount} 💸`;
            messageSection.className = 'message-section lose';
            // Simulate lose sound: new Audio('lose.mp3').play();
        }

        // Reset prediction after result
        userPrediction = null;
        userBetAmount = 0;
        multiplier = 1;

        setTimeout(() => {
            messageSection.style.display = 'none';
        }, 2000);
    }

    // Show Bet Modal
    function showBetModal(type, value) {
        betModal.style.display = 'flex';
        betAmountInput.value = '';
        multiplier = 1; // Reset multiplier
        document.querySelectorAll('.multiplier-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.multiplier-btn[data-multiplier="1"]').classList.add('active');

        document.querySelectorAll('.multiplier-btn').forEach(button => {
            button.onclick = () => {
                multiplier = parseInt(button.dataset.multiplier);
                document.querySelectorAll('.multiplier-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                // Simulate click sound: new Audio('click.mp3').play();
            };
        });

        confirmBetBtn.onclick = () => {
            const bet = parseInt(betAmountInput.value);
            if (bet > 0) {
                userBetAmount = bet;
                userPrediction = { type, value };
                betModal.style.display = 'none';
            } else {
                alert('Please enter a valid bet amount!');
            }
        };

        cancelBetBtn.onclick = () => {
            betModal.style.display = 'none';
        };
    }

    // Handle Prediction Buttons
    document.querySelectorAll('.prediction-btn, .number-ball, .big-small-btn').forEach(button => {
        button.addEventListener('click', () => {
            const type = button.dataset.type;
            const value = button.dataset.value;
            showBetModal(type, value);
            // Simulate click sound: new Audio('click.mp3').play();
        });
    });

    // Start the timer on page load
    startTimer();
});
