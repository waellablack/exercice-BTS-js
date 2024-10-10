const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

fs.readFile('intput.txt', 'utf8', (err, jsonString) => {
    if (err) {
        console.log('Error reading file from disk:', err);
        return;
    }   
    try {
        const obj = JSON.parse(jsonString);
        const messageBienvenue = obj.message;

        // Route pour la page d'accueil
        app.get('/', (req, res) => {
            res.send(messageBienvenue);
        });

        app.listen(port, () => {
            console.log(`L'application est en écoute sur le port ${port}`);
        });
    } catch(err) {
        console.log('Error parsing JSON string:', err);
    }
});