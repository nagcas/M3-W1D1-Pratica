/*
    M3 - W1D1 - Pratica
*/

console.log("It's working...");

/* 
    1. Crea una funzione che controlli due numeri. 
    Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50.
*/

const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    const n1 = document.querySelector(".num_1").value;
    const n2 = document.querySelector(".num_2").value;
    const risultato = document.querySelector(".risultato");
    let n1_ = parseInt(n1);
    let n2_ = parseInt(n2);
    console.log(n1, n2);
    if (n1_ === 50 || n2_ === 50 || n1_ + n2_ === 50) {
        console.log("true");
        risultato.innerHTML = "<h2>Risultato: true</h2>";
    } else {
        risultato.innerHTML = "<h2>Dati non validi</h2>"
    }
});


function control50 (num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } else {
        return "Dati non validi";
    }
};

console.log("Esercizio n. 1");
console.log(control50(30, 20));



/*  
    2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
    Passa la stringa e la posizione come parametri e ritorna la stringa modificata.
*/
function modificaStringa(stringa, posizione) {
    let nuovaStringa = "";
    for (let i = 0; i < stringa.length; i++) {
        if (posizione != i + 1) {
            nuovaStringa += stringa[i];
        }
    }
    return nuovaStringa;
};

console.log("Esercizio n. 2");
console.log(modificaStringa("gianluca", 4));



/*
    3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. 
    Ritorna 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'.
*/
function numeriCompresi(num1, num2) {
    console.log(num1, num2);

    if ((num1 >= 40 && num1 <= 60) && (num1 >=70 && num1 <= 100)) {
        console.log("siamo qui")
        return true;
    } 
    // In tutti gli altri casi la funzione ritorna false
    return false;    
};

console.log("Esercizio n. 3");
console.log(numeriCompresi(39, 70));



/*
    4. Crea una funzione che accetti un nome di città come parametro e ritorni 
    il nome stesso se inizia con "Los" o "New", altrimenti ritorni 'false'.
*/
function nomeCitta(citta) {
    if (citta.startsWith("Los") || citta.startsWith("New")) {
        return citta;
    } 
    // In tutti gli altri casi la funzione ritorna false
    return false;
};

console.log("Esercizio n. 4");
console.log(nomeCitta("Roma"));



/*
    5. Crea una funzione che calcoli e ritorni la somma di tutti.
*/
function sommaTutti (numeri) {
    let somma = 0;
    for (numero of numeri) {
        somma += numero;
    }
    return somma;
};

console.log("Esercizio n. 5");
let numeri = [10, 3, 5, 6, 7, 8, 6];
console.log(sommaTutti(numeri));



/*
    6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. 
    Se NON li contiene ritorna 'true', altrimenti ritorna 'false'.
*/
function controlli(valori) {
    if (valori.includes(1) || valori.includes(3)) {
        return false;
    }
    return true;
};

console.log("Esercizio n. 6");
let valori = [0, 2, 0, 4, 5, 6, 7, 8, 9];
console.log(controlli(valori));



/*
    7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
    - Angolo acuto: meno di 90° => ritorna "acuto"
    - Angolo ottuso: tra i 90° e i 180° gradi => ritorna "ottuso"
    - Angolo retto: 90° => ritorna "retto"
    - Angolo piatto: 180° => ritorna "piatto"
*/
function tipoAngolo(angolo) {
    let tipoAngolo = "";
    if (angolo === 90) {
        tipoAngolo = "Angolo retto";
    } else if (angolo === 180) {
        tipoAngolo = "Angolo piatto";
    } else if (angolo < 90) {
        tipoAngolo = "Angolo acuto";
    } else if (angolo > 90 && angolo < 180) {
        tipoAngolo = "Angolo ottuso";
    } else {
        tipoAngolo = "Errore!";
    }
    return tipoAngolo;
};

console.log("Esercizio n. 7");
console.log(tipoAngolo(180));



/*
    8. Crea una funzione che crei un acronimo a partire da una frase. 
    Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT".
*/
function acronimo (frase) {   
    let arrayParole = frase.split(" ");
    let parolaAcronimo = "";
    for (word of arrayParole) {
        parolaAcronimo += word[0];
    }
    return parolaAcronimo;
}

console.log("Esercizio n. 8");
console.log(acronimo("Fabbrica Italiana Automobili Torino"));



/*
    M3 - W1D1 - Pratica EXTRA
*/

/*
    1. Partendo da una stringa (passata come parametro), ritorna il carattere 
    più usato nella stringa stessa.
*/

function caratterePiuUsato(frase) {
    let carattere = frase.toLowerCase().split("").sort();
    let conteggioCaratteri = {};
    let caratterePiuFrequente = "";
    let maxOccorrenza = 0;

    for (let i = 0; i < carattere.length; i++) {
        if (carattere[i] in conteggioCaratteri) {
            conteggioCaratteri[carattere[i]] += 1;
        } else {
            conteggioCaratteri[carattere[i]] = 1;
        }
    }
    console.log(conteggioCaratteri);

    for (let c in conteggioCaratteri) {
        if (conteggioCaratteri[c] > maxOccorrenza) {
            maxOccorrenza = conteggioCaratteri[c];
            caratterePiuFrequente = c;
        }
    }   
    return caratterePiuFrequente;
}

console.log("Esercizio Extra n. 1");
let frase = "Gianluca";
let carattere = caratterePiuUsato(frase);
console.log("Carattere più usato in " + frase + " = " + carattere);



/*
    2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. 
    Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. 
    Se le due parole sono anagrammi, ritorna 'true', altrimenti ritorna 'false'.
*/
function anagrammi(parola1, parola2) {
    // verifica se hanno la stessa lunghezza
    if (parola1.length !== parola2.length) {
        return false;
    }

    // ordina le lettere delle singole parole
    let ordinaParola1 = parola1.split('').sort().join('');
    let ordinaParola2 = parola2.split('').sort().join('');

    // verifica se le lettere ordinate sono uguali
    if (ordinaParola1 === ordinaParola2) {
        return true;
    }
};

console.log("Esercizio Extra n. 2");
let parola1 = "Mora";
let parola2 = "Ramo";
console.log(anagrammi(parola1.toLowerCase(), parola2.toLowerCase()));



/*
    3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), 
    ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
    Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], 
    il valore ritornato deve essere [”carenti”, “incerta”].
*/
function nuovoArrayAnagrammi (listaAnagrammi, parola3) {
    let newListaAnagrammi = [];
    let ordinaParola = parola3.split('').sort().join('');
    
    for (parola3 of listaAnagrammi) {
        if (parola3.split('').sort().join('') === ordinaParola) {
            newListaAnagrammi.push(parola3);
        }
        
    }
    return newListaAnagrammi;
};

console.log("Esercizio Extra n. 3");
const listaAnagrammi = ["carenti", "incerta", "espatrio"];
const parola3 = "cartine";
console.log(nuovoArrayAnagrammi(listaAnagrammi, parola3));



/*
    4. Partendo da una stringa passata come parametro, 
    ritorna 'true' se la stringa è palindroma o 'false' se non lo è.
*/
function palindroma(parola) {
    console.log(parola);
    let parolaPalindroma = "";
    for (let c = parola.length - 1; c >= 0; c--) {
        parolaPalindroma += parola[c];
    }
    //console.log(parolaPalindroma);
    if (parola == parolaPalindroma) {
        return true;
    }
    return false;
};

console.log("Esercizio Extra n. 4");
const parola4 = "anna";
console.log(palindroma(parola4));


/*
    5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le 
    stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
*/
function ordineContrario(numeroIntero) {
    if (numeroIntero > 0) {
        let numeroStringa = numeroIntero.toString();
        let nuovoNumeroStringa = "";
        for (let n = numeroStringa.length - 1; n >= 0; n--) {
            nuovoNumeroStringa += numeroStringa[n];
        }
        return parseInt(nuovoNumeroStringa);
    } else {
        return false;
    }
};

console.log("Esercizio Extra n. 5");
const numeroIntero = 189;
console.log(ordineContrario(numeroIntero));



/*
    6. Scrivi una funzione che accetti un numero positivo X come parametro. 
    La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e 
    avente X scalini.

    Es.
    X = 2
    '# '
    '##'
    X = 3
    '# '
    '## '
    '###'
*/

function stampaScala(numeroPositivo) {
    console.log("X = " + numeroPositivo);
    const carattere = "#";
    let stampaScalini = "";
    for (let c = 1; c < numeroPositivo + 1; c++) {
        stampaScalini += carattere;
        console.log(stampaScalini);
    }
};

console.log("Esercizio Extra n. 6");
const numeroPositivo = 5;
stampaScala(numeroPositivo);



/*
    7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, 
    ma al contrario. Es. “Ciao” ****⇒ “oaiC”.
*/
function contrario(stringaParola) {
    let nuovaStringaContrario = "";
    for (let c = stringaParola.length - 1; c >= 0; c--) {
        nuovaStringaContrario += stringaParola[c];
    }
    return nuovaStringaContrario;
};

console.log("Esercizio Extra n. 7");
const stringaParola = "Ciao";
console.log(contrario(stringaParola));



/*
    8. Crea una funzione che accetti un array e un numero Y come parametro. 
    Dividi l’array in sotto-array aventi lunghezza Y.

    Es.
    array: [1, 2, 3, 4],
    y: 2 ⇒ [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5],
    y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
*/

function sottoArray(arrayValori, y) {
    let newArray = [];
    return newArray;
}

console.log("Esercizio Extra n. 8");
const arrayValori = [1, 2, 3, 4];
const y = 2;
console.log(sottoArray(arrayValori, y));

/*
    9. Scrivi una funzione che accetti un numero positivo X come parametro. 
    La funzione dovrebbe stampare a console una “piramide” create con il carattere 
    “#” e avente X strati.

    Es.
    X = 3
    '--#--' 0
    '-###-' 1
    '#####' 2
     01234
     
    Es.
    X = 5  
    '----#----' 0
    '---###---' 1
    '--#####--' 2
    '-#######-' 3
    '#########' 4
     012345678
*/

function piramide(number) {
    let rigo = "";
    // conteggia il rigo
    for (let r = 0; r < number; r++) {
        // conteggia le colonne
        for (let c = 0; c < (number * 2) - 1; c++) {
            if (c >= (number - r - 1) && c <= (number + r - 1)) {
                rigo += "#";
            } else {
                rigo += " ";
            }
        }
        console.log(rigo);
        rigo = "";
    }
    
};

console.log("Esercizio Extra n. 9");
let numberPositivo = 5;
piramide(numberPositivo);


/*
    10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:

    Es. N = 2
    [[1, 2],[4, 3]]
    N = 3
    [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
    N = 4
    [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]
*/

function matriceSpirale() {

}

console.log("Esercizio Extra n. 10");
