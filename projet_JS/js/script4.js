function prenom() {
    var saisie = document.querySelector("#zoneDeSaisie");
    var para = document.querySelector("#para1");
    let prenom = saisie.value;
    let texte = prenom;
    para.innerHTML = texte;

}
document.querySelector("#btn").addEventListener("click", prenom);