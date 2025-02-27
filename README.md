## Crea una lista di email di invitati ad una festa.
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