console.log('ciao');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function controll(number) {
    for (i=0; i<number.lenght; i++) {
        if ((number.charAt(i) < '0') || (number.charAt(i) > '9')) {
            return true
        }
    }
    return false
}

var prompt = require('prompt-sync')();
const str = prompt('Enter a string: ');
console.log('Hai inserito dopo ' + str);
console.log('Hai inserito dopo ' + capitalizeFirstLetter(str));
var check = true
while (check) {
    //inserisci primo numero
    var numero = parseInt(prompt('Inserisci il primo numero: '));
    check = controll(numero)
}
var check = true
while (check) {
    //inserisci secondo numero
    var numero2 = parseInt(prompt('Inserisci il secondo numero: '));
    check = controll(numero2)
}
//fai la somma
var somma = numero + numero2
//stampa a schermo la somma
console.log('Somma: ' + somma)

function VerificaNumero(sNum)
{
    //Faccio delle cose
    for( i=0;i<sNum.length;i++) 
    {
        if((sNum.charAt(i) < '0') || (sNum.charAt(i)>'9'))
            return false;
    } 
    return true; 
}
function parseIntMy(sNum)
{
    bEsito = VerificaNumero(sNum);
    if(bEsito==true)
        return parseInt(sNum);
    var sNum1 = "0";
    for(a=0;a<3;a++)
    {
        sNum1 = prompt("Attenzione, numero errato, riprova ");
        bEsito = VerificaNumero(sNum1);
        if(bEsito==true)
            return parseInt(sNum1); 
    }

    return null;
}
var prompt = require('prompt-sync')();
var sPrimoNum = prompt("Inserisci primo numero ");
var iNum = parseIntMy(sPrimoNum);
if(iNum != null)
    console.log("Hai inserito" + iNum);
else
    console.log("Non sei riuscito ad inserire un numero");