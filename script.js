var name = prompt("Inserisci il tuo nome")

var surname = prompt("Inserisci il tuo cognome")

var favColor = prompt("Inserisci il tuo colore preferito")

var pw = name + surname + favColor + "19"

document.getElementById("pwInsicura").innerHTML= "The worst password ever is:" + pw
