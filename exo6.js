let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function recherche_element(tableau, valeur) {
    return tableau.includes(valeur);
}

console.log("Présence de la valeur 5:", recherche_element(nombres, 5));
console.log("Présence de la valeur 13:", recherche_element(nombres, 13));
