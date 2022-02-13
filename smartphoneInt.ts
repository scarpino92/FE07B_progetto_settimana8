/** IMPLEMENTAZIONE INTERFACCIA SMARTPHONE CON UNA SINGOLA CLASSE */

// Interfaccia smartphone
interface SmartphoneInt {
    // proprietà interfaccia
    credito: number;
    numeroChiamate: number;
    // dichiaro i metodi
    ricarica(credito: number, unaRicarica: number): void;
    chiamata(credito: number, minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

// prima classe 
class User implements SmartphoneInt {
    // modificatori di accesso sulle proprietà
    public credito: number;
    public numeroChiamate: number;
    // dichiarazione del costruttore
    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    // implementazione metodo ricarica (prende credito e incrementa con la variabile)
    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }
    // implementazione metodo chiamata (credito diminuisce e incremento n chiamate)
    public chiamata(minutiDurata: number): void {
        this.credito -= (0.2 * minutiDurata);
        this.numeroChiamate++;
    }
    // implementazione metodo numero404 - restituisce credito residuo
    public numero404(): number {
        return this.credito;
    }
    // implementazione metodo getNumeroChiamate (return)
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    // implementazione metodo azzeraChiamate (deve portare le chiamate a 0 - no return)
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

// creo istanze
const primoUtente = new User(50, 2);
const secondoUtente = new User(10, 10);
const terzoUtente = new User(20, 0);

// primo utente
primoUtente.ricarica(30);
primoUtente.chiamata(40);
console.log('================================================');
console.log('-- PRIMO UTENTE --');
console.log('');
console.log('Valore della carica disponibile: ' + primoUtente.numero404());
console.log('Numero chiamate: ' + primoUtente.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
primoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + primoUtente.numeroChiamate);

// secondo utente
secondoUtente.ricarica(30);
secondoUtente.chiamata(40);
console.log('================================================');
console.log('-- SECONDO UTENTE --');
console.log('');
console.log('Valore della carica disponibile: ' + secondoUtente.numero404());
console.log('Numero chiamate: ' + secondoUtente.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
secondoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + secondoUtente.numeroChiamate);

// terzo utente
terzoUtente.ricarica(30);
terzoUtente.chiamata(40);
console.log('================================================');
console.log('-- TERZO UTENTE --');
console.log('');
console.log('Valore della carica disponibile: ' + terzoUtente.numero404());
console.log('Numero chiamate: ' + terzoUtente.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
terzoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + terzoUtente.numeroChiamate);