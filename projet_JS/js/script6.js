function changeTexte() {
    var para1 = document.querySelector("#para1");
    var para2 = document.querySelector("#para2");
    var txt = para1.textContent;

    para1.innerHTML = para2.innerHTML;
    para2.innerHTML = txt;

}
document.querySelector("#btn").addEventListener("click", changeTexte);



