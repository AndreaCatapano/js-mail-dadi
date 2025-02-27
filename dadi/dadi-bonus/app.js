/* 
- L'utente ci fornisce un input con il numero del dado.
- Generiamo una seconda variabile (random)

- Se le due variabili sono ugali 
  - Stampiamo il risultato di parità
- Se la variabile del utente è maggiore 
  - Stampiamo il risultato di vittoria
- Altrimenti 
  - Stampiamo il risultato di sconfitta
*/


let userInput;
let isInputValid;
const computerInput = Math.floor(Math.random() * 6) + 1;

do {
  userInput = parseInt(prompt("Scrivi il tuo risultato!"));
  const isANumber = !isNaN(userInput);
  const isValidNumber = userInput >= 1 && userInput <= 6;
  if (isANumber && isValidNumber) {
    if (userInput === computerInput) {
      console.log(`La partita è finita in parità. Il tuo e il punteggio del computer è ${userInput}`);
    }
    else if (userInput > computerInput) {
      console.log(`La partita è vinta. Il tuo punteggio è di ${userInput} quello del computer è ${computerInput}`);
    } else {
      console.log(`La partita è persa. Il tuo punteggio è di ${userInput} quello del computer è ${computerInput}`);
    }
    isInputValid = true;
  } else {
    alert("Inserisci un numero da 1 a 6!")
    isInputValid = false
  }
} while (!isInputValid)

