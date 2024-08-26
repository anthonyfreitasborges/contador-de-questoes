let totalQuestions = 0;
let dailyQuestions = 0;

function incrementCounter(subject) {
    const countElement = document.getElementById(`${subject}-count`);
    let count = parseInt(countElement.textContent) || 0;
    count++;

    countElement.textContent = count;

    totalQuestions++;
    dailyQuestions++;

    document.getElementById('total-count').textContent = totalQuestions;
    document.getElementById('daily-count').textContent = dailyQuestions;
}

function decrementCounter(subject) {
    const countElement = document.getElementById(`${subject}-count`);
    let count = parseInt(countElement.textContent) || 0;

    if (count > 0) {
        count--;

        countElement.textContent = count;

        totalQuestions--;
        dailyQuestions--;

        document.getElementById('total-count').textContent = totalQuestions;
        document.getElementById('daily-count').textContent = dailyQuestions;
    }
}

// Função para resetar o contador diário no final do dia
function resetDailyCounter() {
    dailyQuestions = 0;
    document.getElementById('daily-count').textContent = dailyQuestions;
}

// Exemplo: Reseta o contador diário às 23:59 todos os dias
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 23 && now.getMinutes() === 59) {
        resetDailyCounter();
    }
}, 60000); // Verifica a cada minuto
