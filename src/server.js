import express from 'express';
import cors from 'cors'
import { decideMove } from './botLogic.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/action', (req, res) => {
    const gameStateRaw = req.headers['x-game-state'];

    if (!gameStateRaw) {
        return res.status(400).json({ error: 'Missing X-Game-State header' });
    }

    let gameState;
    try {
        gameState = JSON.parse(gameStateRaw);
        console.log(gameState);
    } catch (err) {
        return res.status(400).json({ error: 'Invalid game state JSON' });
    }
    const result = decideMove(gameState);
    res.json(result);
});

app.listen(3000, () => {
    console.log('Le Bot écoute sur le port 3000');
})