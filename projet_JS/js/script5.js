function paragraphe() {
    var para = document.querySelector('#para1');
    para.style.color = "lightblue"
}

function paragraphereset() {
    var para = document.querySelector('#para1');
    para.style.color = "black"
}

document.querySelector('#para1').addEventListener('mouseenter',paragraphe)
document.querySelector('#para1').addEventListener('mouseleave',paragraphereset)