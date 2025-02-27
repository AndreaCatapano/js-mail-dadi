/* 
- Creiamo un array per le email. 
- Chiediamo l'input di un email al nostro utente 
- PER OGNI email presente nell'array 
   - SE l'input è presente nell'array 
      - Avvertiamo l'utente che l'operazione ha avuto successo. 
      - Interrompiamo.
   - Altrimenti
      - Chiediamo all'utente di ripetere l'operazione.
*/ 


const emails = [
    "a.catapano96@gmail.com",
    "andrea.catapano96@gmail.com",
    "andrea.catapano@gmail.com",
    "a.cata96@gmail.com",
    "catapano.andrea@gmail.com",
    "a.catapano96@hotmail.com",
    "a.catapano96@libero.it"
];

const userInput = prompt("Inserisci la tua email");
let isCorrectMail = false; 


for(let i = 0; i <= emails.length; i++){

    if(userInput === emails[i]){
        isCorrectMail = true;
        break;
    }
}

if (isCorrectMail){
    alert("Accesso autorizzato!");
} else {
    alert("Accesso non autorizzato!");
}