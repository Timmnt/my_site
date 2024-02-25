function changeTexte() {
    var para = document.querySelector("#para1");
    para.innerHTML = "Bonjour !";

}
document.querySelector("#btn").addEventListener("click", changeTexte);


function changeTexte2() {
    var para = document.querySelector("#para1");
    para.innerHTML = "Hello !";

}
document.querySelector("#btn2").addEventListener("click", changeTexte2);

