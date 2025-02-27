/* 
- Generiamo una variabile per l'utente (random)
- Generiamo una seconda variabile (random)

- Se le due variabili sono ugali 
  - Stampiamo il risultato di parità
- Se la variabile del utente è maggiore 
  - Stampiamo il risultato di vittoria
- Altrimenti 
  - Stampiamo il risultato di sconfitta
*/


const userInput = Math.floor(Math.random() * 6) + 1;
const computerInput = Math.floor(Math.random() * 6) + 1;


if (userInput === computerInput){
    console.log(`La partita è finita in parità. Il tuo e il punteggio del computer è ${userInput}`);
}
else if (userInput > computerInput){
    console.log(`La partita è vinta. Il tuo punteggio è di ${userInput} quello del computer è ${computerInput}`);
} else {
    console.log(`La partita è persa. Il tuo punteggio è di ${userInput} quello del computer è ${computerInput}`);
}