# W1D1 - Pratica

## ESERCIZI

1. Crea una funzione che controlli due numeri. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50.

2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'.

4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni 'false'.

5. Crea una funzione che calcoli e ritorni la somma di tutti.

6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene ritorna 'true', altrimenti ritorna 'false'.

7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
   - Angolo acuto: meni di 90° => ritorna "acuto"
   - Angolo ottuso: tra i 90° e i 180° gradi => ritorna "ottuso"
   - Angolo retto: 90° => ritorna "retto"
   - Angolo piatto: 180° => ritorna "piatto"
  
8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT".

### Esercizi extra

Nota: tutti gli esercizi devono essere svolti usando le funzioni

1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna 'true', altrimenti ritorna 'false'.

3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].

4. Partendo da una stringa passata come parametro, ritorna 'true' se la stringa è palindroma o 'false' se non lo è.

5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.

    Es.

    X = 2

    '# '

    '##'

    X = 3

    '# '

    '## '

    '###'

7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”.

8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.

    Es.

    array: [1, 2, 3, 4],

    y: 2 ⇒ [[ 1, 2], [3, 4]]

    array: [1, 2, 3, 4, 5],

    y: 4 ⇒ [[ 1, 2, 3, 4], [5]]

9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.

    Es.

    X = 3

    ' # '

    ' ### '

    '#####'

10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:

    Es. N = 2

    [[1, 2],[4, 3]]

    N = 3

    [[1, 2, 3],[8, 9, 4],[7, 6, 5]]

    N = 4

    [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]