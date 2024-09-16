function fusion_tableaux(tableau1, tableau2) {
    return tableau1.concat(tableau2);
}

let tableau1 = [1, 2, 3];
let tableau2 = [4, 5, 6];
console.log("Fusion des tableaux:", fusion_tableaux(tableau1, tableau2));
