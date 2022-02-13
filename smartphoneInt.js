// prima classe 
var User = /** @class */ (function () {
    // dichiarazione del costruttore
    function User(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    // implementazione metodo ricarica (prende credito e incrementa con la variabile)
    User.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    // implementazione metodo chiamata (credito diminuisce e incremento n chiamate)
    User.prototype.chiamata = function (minutiDurata) {
        this.credito -= (0.2 * minutiDurata);
        this.numeroChiamate++;
    };
    // implementazione metodo numero404 - restituisce credito residuo
    User.prototype.numero404 = function () {
        return this.credito;
    };
    // implementazione metodo getNumeroChiamate (return)
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // implementazione metodo azzeraChiamate (deve portare le chiamate a 0 - no return)
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
// creo istanze
var primoUtente = new User(50, 2);
var secondoUtente = new User(10, 10);
var terzoUtente = new User(20, 0);
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
