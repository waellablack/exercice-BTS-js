let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function somme_tableau(tableau) {
    var somme = 0;
    for (var i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

console.log("Somme des éléments:", somme_tableau(nombres));
