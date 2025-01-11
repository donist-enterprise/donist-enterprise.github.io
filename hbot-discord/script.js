document.getElementById('bot-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const botName = document.getElementById('bot-name').value;
    if (botName) {
        const botList = document.getElementById('bot-list-ul');
        const newBot = document.createElement('li');
        newBot.textContent = botName;
        botList.appendChild(newBot);
        createBotOnServer(botName);
    }
});

function createBotOnServer(botName) {
    fetch('/create-bot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: botName })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Bot créé :', data);
    })
    .catch(error => {
        console.error('Erreur lors de la création du bot :', error);
    });
}
