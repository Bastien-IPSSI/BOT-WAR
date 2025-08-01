import express from 'express';
import cors from 'cors';
import { decideMove } from './botLogic.js';
import { setManualMove, disableManualMode } from './stateStore.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/action', async (req, res) => {
  const result = await decideMove();
  res.json(result);
});

app.post('/set-manual', async (req, res) => {
  const {move, action} = req.body;
  await setManualMove(move, action);
  res.json({ success: true, manual: true, move, action });
});

app.post('/disable-manual', async (req, res) => {
  await disableManualMode();
  res.json({ success: true, manual: false });
});

app.listen(3000, () => {
  console.log('Le Bot écoute sur le port 3000');
})