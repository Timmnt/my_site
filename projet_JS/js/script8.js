function couleur() {
    var saisie = document.querySelector("#zoneDeSaisie");
    var saisie2 = document.querySelector("#zoneDeSaisie2");
    var saisie3 = document.querySelector("#zoneDeSaisie3");
    
    body = document.querySelector("body");

    let somme1 = parseInt(saisie.value);
    let somme2 = parseInt(saisie2.value);
    let somme3 = parseInt(saisie3.value);
    
    body.style.backgroundColor= "rgb(" + somme1 + "," + somme2 + "," + somme3 + ")";

}
document.querySelector("#btn").addEventListener("click", couleur);