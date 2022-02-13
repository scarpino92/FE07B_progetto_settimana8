/** IMPLEMENTAZIONE INTERFACCIA SMARTPHONE CON TRE CLASSI DISTINTE */
// prima classe 
var FirstUser = /** @class */ (function () {
    // dichiarazione del costruttore
    function FirstUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    // implementazione metodo ricarica (prende credito e incrementa con la variabile)
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    // implementazione metodo chiamata (credito diminuisce e incremento n chiamate)
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.credito -= (0.2 * minutiDurata);
        this.numeroChiamate++;
    };
    // implementazione metodo numero404 - restituisce credito residuo
    FirstUser.prototype.numero404 = function () {
        return this.credito;
    };
    // implementazione metodo getNumeroChiamate (return)
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // implementazione metodo azzeraChiamate (deve portare le chiamate a 0 - no return)
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
// implementazione della class primo - FirstUser (credito, numero chiamate)
var primo = new FirstUser(50, 3);
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
var SecondUser = /** @class */ (function () {
    function SecondUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.credito -= (0.2 * minutiDurata);
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.credito;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
// implementazione della class secondo - SecondUser (credito, numero chiamate)
var secondo = new SecondUser(90, 4);
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
var ThirdUser = /** @class */ (function () {
    function ThirdUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.credito -= (0.2 * minutiDurata);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.credito;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
// implementazione della class terzo - ThirdUser (credito, numero chiamate)
var terzo = new ThirdUser(30, 2);
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
