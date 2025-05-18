* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 400px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

header {
    background: linear-gradient(90deg, #ff4d4d, #ff7878);
    color: #fff;
    text-align: center;
    padding: 15px;
}

header h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.tabs {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}

.tab {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
}

.tab.active {
    background: #fff;
    color: #ff4d4d;
}

.timer-section {
    text-align: center;
    padding: 20px;
    background: #ffe6e6;
    border-bottom: 1px solid #ddd;
}

.how-to-play {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
}

.timer {
    font-size: 36px;
    font-weight: bold;
    color: #ff4d4d;
    margin-bottom: 10px;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.round-info {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
}

.recent-numbers {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.ball {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
}

.ball.green { background: #28a745; }
.ball.red { background: #dc3545; }
.ball.violet { background: linear-gradient(45deg, #dc3545, #6f42c1); }

.message-section {
    text-align: center;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    display: none;
}

.message-section.win {
    background: #28a745;
    color: #fff;
    display: block;
    animation: fadeIn 0.5s ease;
}

.message-section.lose {
    background: #dc3545;
    color: #fff;
    display: block;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.prediction-section {
    display: flex;
    justify-content: space-around;
    padding: 20px;
}

.prediction-btn {
    padding: 15px 30px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    transition: transform 0.2s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.prediction-btn:hover {
    transform: translateY(-3px);
}

.prediction-btn.green { background: #28a745; }
.prediction-btn.violet { background: linear-gradient(45deg, #dc3545, #6f42c1); }
.prediction-btn.red { background: #dc3545; }

.number-section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    padding: 20px;
}

.number-ball {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
}

.number-ball:hover {
    transform: scale(1.1);
}

.number-ball.green { background: #28a745; }
.number-ball.red { background: #dc3545; }
.number-ball.violet { background: linear-gradient(45deg, #dc3545, #6f42c1); }

.multiplier-section {
    display: flex;
    justify-content: space-around;
    padding: 10px 20px;
}

.multiplier-btn {
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    background: #f0f0f0;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}

.multiplier-btn:hover {
    background: #ddd;
    transform: translateY(-2px);
}

.big-small-section {
    display: flex;
    justify-content: space-around;
    padding: 10px 20px;
}

.big-small-btn {
    padding: 15px 40px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
}

.big-small-btn:hover {
    transform: translateY(-3px);
}

.big-small-btn.big { background: #ff8c00; }
.big-small-btn.small { background: #007bff; }

.history-section {
    padding: 20px;
}

.history-section table {
    width: 100%;
    border-collapse: collapse;
}

.history-section th, .history-section td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
}

.history-section th {
    background: #ff4d4d;
    color: #fff;
}

.history-section .color-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
}

.color-circle.green { background: #28a745; }
.color-circle.red { background: #dc3545; }
.color-circle.violet { background: linear-gradient(45deg, #dc3545, #6f42c1); }

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-content h2 {
    margin-bottom: 15px;
    font-size: 20px;
}

.modal-content input {
    padding: 10px;
    margin-bottom: 15px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.modal-content button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 5px;
}

#confirm-bet {
    background: #28a745;
    color: #fff;
}

#cancel-bet {
    background: #dc3545;
    color: #fff;
}
