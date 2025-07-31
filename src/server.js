import express from 'express';
import cors from 'cors'
import { decideMove } from './botLogic.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/action', (req, res) => {
    const result = decideMove();
    res.json(result);
})

app.listen(3000, () => {
    console.log('Le Bot écoute sur le port 3000');
})