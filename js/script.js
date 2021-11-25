// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



//ESEMPIO DI OGGETTO 

const studenteProva = {

    nome: 'Federico',
    cognome: 'Casartelli',
    età: 29

}

console.log(studenteProva);


//STAMPO OGNI PROPRIETA' DELL'OGGETTO ATTRAVERSO UN CICLO FOR

for ( let key in studenteProva ) {
    console.log( studenteProva[key] );
}

//CREO UN ARRAY DI OGGETTI, DOVE GLI OGGETTI SONO GLI STUDENTI

const studentsClassOne = 
[

    {
        nome: 'Leonardo',
        cognome: 'Marelli',
        età: 20
    },

    {
        nome: 'Francesco',
        cognome: 'Bianchi',
        età: 38
    },

    {
        nome: 'Mattia',
        cognome: 'Covelli',
        età: 55
    }

];

//CICLO L'ARRAY DI OGGETTI E STAMPO SOLO LE PRIME DUE PROPRIETA'

for (i = 0; i < studentsClassOne.length; i++) {

    const thisStudent = studentsClassOne[i];
    console.log(thisStudent);

    for ( let key in thisStudent) {
        
        if ( key !== 'età') {
            console.log(thisStudent[key]);
        }
    }
}

//CREO TRE PROMPT PER PERMETTERE ALL'UTENTE DI PUSHARE UN OGGETTO NEL MIO ARRAY

//user input
let newName = prompt('Inserisci il nome del nuovo studente');
let newLastname=prompt('Inserisci il cognome del nuovo studente');
let newAge= parseInt( prompt( 'Inserisci l\'età del nuovo studente' ));

//oggetto di nuovo studente con dati forniti da user
const newStudent = {

    nome: newName,
    cognome: newLastname,
    età: newAge

};

console.log(newStudent);

studentsClassOne.push(newStudent);

console.log(studentsClassOne);
