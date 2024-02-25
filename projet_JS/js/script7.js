function somme() {
    var saisie = document.querySelector("#zoneDeSaisie");
    var saisie2 = document.querySelector("#zoneDeSaisie2");
    var resultat = document.querySelector("#resultat");
    let somme1 = parseInt(saisie.value);
    let somme2 = parseInt(saisie2.value);
    var somme3 = somme1 + somme2;

    resultat.innerHTML = somme3;

}
document.querySelector("#btn").addEventListener("click", somme);