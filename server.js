const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server ElettroCasa attivo');
});

app.post('/contatti', (req, res) => {
  const { nome, email, messaggio } = req.body;

  if (!nome || !email || !messaggio) {
    return res.status(400).json({
      messaggio: 'Compila tutti i campi'
    });
  }

  console.log('Messaggio ricevuto:', req.body);

  res.json({
    messaggio: 'Messaggio inviato con successo!'
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
