function ajout1() {
    var valeur = document.querySelector("#compteur").innerHTML;
    var dbl = parseInt(valeur) + 1;
    document.querySelector("#compteur").innerHTML = dbl;
  }
  
  document.querySelector("#bouton").addEventListener("click",ajout1);

  function reset() {
    var valeur = document.querySelector("#compteur").innerHTML;
    var dbl = parseInt(valeur) * 0;
    document.querySelector("#compteur").innerHTML = dbl;
  }
  
  document.querySelector("#bouton2").addEventListener("click",reset);
  