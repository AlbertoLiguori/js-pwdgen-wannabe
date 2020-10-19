let name = prompt("Inserisci il tuo nome")

let surname = prompt("Inserisci il tuo cognome")

let favColor = prompt("Inserisci il tuo colore preferito")

let pw = name + surname + favColor + "19"

console.log(pw)


let output = document.createElement("h1")
output.textContent=` The worst password ever is: ${pw} `
document.querySelector("body").appendChild(output)
