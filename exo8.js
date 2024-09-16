var marque = ["apple", "samsung", "dell", "hp", "lg", "acer"];

function afficher_marques() {
    console.log("Liste des marques : " + marque.join(", "));
}

afficher_marques();

var marque_preferee = prompt("Quelle marque préférez-vous ?");

var index = marque.indexOf(marque_preferee); 

if (index !== -1) {
    marque.splice(index, 1); 
    console.log("ok");
} else {
    console.log("indisponible");
}

afficher_marques(); 


console.log("Message de fin")