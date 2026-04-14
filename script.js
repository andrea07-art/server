// Gestione invio modulo verso il microservizio Express
const form = document.getElementById('contactForm');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const dati = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    messaggio: document.getElementById('messaggio').value
  };

  try {
    const risposta = await fetch('http://localhost:3000/contatti', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dati)
    });

    const risultato = await risposta.json();
    document.getElementById('risposta').innerText = risultato.messaggio;
    form.reset();
  } catch (errore) {
    document.getElementById('risposta').innerText = 'Errore di connessione al server';
  }
});
