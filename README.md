## Mail
  - Crea una lista di email di invitati ad una festa.
  - Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
  - Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
  - Si può fare? Certo che si basta ragionare un po’.

--- 

### Soluzione: Ciclo For

- Creiamo un array per le email. 
- Creaiamo una variabile bool falsa.  
- Chiediamo l'input di un email al nostro utente 
- PER OGNI email presente nell'array 
   - SE l'input è presente nell'array 
      - Rendiamo la variabile bool vera.
      - Interrompiamo.

- Se la variabile bool è vera 
  - Avvertiamo del successo
- Altrimenti 
  - Avvertiamo del fallimento


---

## Dadi 

- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.

### Soluzione:

- Generiamo una variabile per l'utente (random)
- Generiamo una seconda variabile (random)

- Se le due variabili sono ugali 
  - Stampiamo il risultato di parità
- Se la variabile del utente è maggiore 
  - Stampiamo il risultato di vittoria
- Altrimenti 
  - Stampiamo il risultato di sconfitta
