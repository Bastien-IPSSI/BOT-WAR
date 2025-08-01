import express from 'express';
import cors from 'cors'
import { decideMove, setManualMove, disableManualMode } from './botLogic.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/action', (req, res) => {
    const result = decideMove();
    res.json(result);
})

app.post('/set-manual', (req, res) => {
    const {move, action} = req.body;
    setManualMove(move, action);
    res.json({ success: true, manual: true, move, action});
})

app.post('/disable-manual', (req, res) => {
    disableManualMode();
    res.json({ success: true, manual: false });
});

app.listen(3000, () => {
    console.log('Le Bot écoute sur le port 3000');
})