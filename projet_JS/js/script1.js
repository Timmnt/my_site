function modif1() {
    var corps = document.querySelector("body")
    corps.style.backgroundColor = "yellow";
}

document.querySelector("#btn").addEventListener("click", modif1);

function modif2() {
    var corps = document.querySelector("body")
    corps.style.backgroundColor = "green";
}

document.querySelector("#btn2").addEventListener("click", modif2);

function modif3() {
    var corps = document.querySelector("body")
    corps.style.backgroundColor = "blue";
}

document.querySelector("#btn3").addEventListener("click", modif3);