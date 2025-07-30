import express from 'express';
import { decideMove } from './botLogic.js';

const app = express();

app.use(express.json());

app.get('/action', (req, res) => {
    const result = decideMove();
    res.json(result);
})

app.listen(3000, () => {
    console.log('Le Bot écoute sur le port 3000');
})