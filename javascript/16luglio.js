var A;
var B;
A = 3;
B = "buongiorno a tutti";
console.log("Il tipo della var A e' " + typeof(A) + "\n");
console.log("Il tipo della var B e' " + typeof (B) + "\n");

console.log("Il tipo di A prima del cambiamento è: " + typeof(A));
A = "L'inverno è meglio"
console.log("Il tipo di A dopo il cambiamento è: " + typeof(A));

var iPosizione;
var sMiaStringa;
sMiaStringa = "paperino"
iPosizione = sMiaStringa.indexOf("z");
if((iPosizione == -1) || (iPosizione > 3))
	console.log("La z non c'e' nei primi 4 caratteri")
else
	console.log("La z c'e' nei primi 4 caratteri");

var sStringa = "francesco totti"
var iPosizione = sStringa.indexOf("f")
if (iPosizione == -1)
    console.log("La letterea f non si trova nella stringa " + sStringa)
else
    console.log("La letterea f si trova nella stringa " + sStringa + " al carattere numero " + iPosizione)

function terminaConLettera(sStringa, sTermine) {
    var iRitorno = sStringa.indexOf(sTermine, sStringa.lenght - sTermine.lenght);
    if (iRitorno == -1)
        return 0;
    else
        return 1;
}

var gigi = "franczp";
var fine = "z";
console.log(terminaConLettera(gigi, fine));