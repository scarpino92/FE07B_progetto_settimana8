/** IMPLEMENTAZIONE INTERFACCIA SMARTPHONE CON TRE CLASSI DISTINTE */

// Interfaccia smartphone
interface Smartphone {
    // proprietà interfaccia
    credito: number;
    numeroChiamate: number;
    // dichiaro i metodi
    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata:number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

// prima classe 
class FirstUser implements Smartphone {
    // modificatori di accesso sulle proprietà
    public credito: number;
    public numeroChiamate: number;
    // dichiarazione del costruttore
    constructor(_credito: number, _numeroChiamate: number){
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    // implementazione metodo ricarica (prende credito e incrementa con la variabile)
    public ricarica(unaRicarica: number): void{
        this.credito += unaRicarica; 
    }
    // implementazione metodo chiamata (credito diminuisce e incremento n chiamate)
    public chiamata(minutiDurata: number): void{
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

// implementazione della class primo - FirstUser (credito, numero chiamate)
const primo = new FirstUser(50, 3);
console.log('================================================');
console.log('-- PRIMO UTENTE --');
console.log('');
primo.ricarica(20);
primo.chiamata(5);
console.log('Valore della carica disponibile: ' + primo.numero404());
console.log('Numero chiamate: ' + primo.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
primo.azzeraChiamate();
console.log('Numero chiamate: ' + primo.numeroChiamate);


// seconda classe
class SecondUser implements Smartphone {
    
    public credito: number;
    public numeroChiamate: number;

    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    
    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }
    
    public chiamata(minutiDurata: number): void {
        this.credito -= (0.2 * minutiDurata);
        this.numeroChiamate++;
    }
    
    public numero404(): number {
        return this.credito;
    }
    
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

// implementazione della class secondo - SecondUser (credito, numero chiamate)
const secondo = new SecondUser(90, 4);
console.log('================================================');
console.log('-- SECONDO UTENTE --');
console.log('');
secondo.ricarica(10);
secondo.ricarica(10);
secondo.chiamata(10);
secondo.chiamata(5);
console.log('Valore della carica disponibile: ' + secondo.numero404());
console.log('Numero chiamate: ' + secondo.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
secondo.azzeraChiamate();
console.log('Numero chiamate: ' + secondo.numeroChiamate);


// terza classe
class ThirdUser implements Smartphone {

    public credito: number;
    public numeroChiamate: number;

    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.credito -= (0.2 * minutiDurata);
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.credito;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

// implementazione della class terzo - ThirdUser (credito, numero chiamate)
const terzo = new ThirdUser(30, 2);
console.log('================================================');
console.log('-- TERZO UTENTE --');
console.log('');
secondo.ricarica(20);
secondo.ricarica(10);
secondo.chiamata(50);
secondo.chiamata(10);
console.log('Valore della carica disponibile: ' + terzo.numero404());
console.log('Numero chiamate: ' + terzo.numeroChiamate);
console.log('dopo l\'azzeramento delle chiamate:');
terzo.azzeraChiamate();
console.log('Numero chiamate: ' + terzo.numeroChiamate);

