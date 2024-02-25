input = document.querySelector("#box1");
output = document.querySelector("#box2");

inputType = document.querySelector("#input-type");
outputType = document.querySelector("#output-type");

function convert() {
    /**
     * Fonction exécuté lors du click sur le bouton "CONVERT".
     * recupere les valeurs entrées par l'utilisateur et les 
     * utilisent pour appeler un fonction de conversion en fonction 
     * de la selection de l'utilisateur
     */

    switch(inputType.value) {
        case "null":
            //NULL
            output.value = ""
            break
        case "dec":
            switch(outputType.value) {
                case "null":
                    //NULL
                    output.value = ""
                    break
                case "dec":
                    //INPUT
                    output.value = input.value;
                    break
                case "bin":
                    //dec to bin
                    output.value = decToBin(input.value);
                    break
                case "hexa":
                    //dec to hexa
                    output.value = "NON SUPORTE"
                    break
            }
            break
        case "bin":
            switch(outputType.value) {
                case "null":
                    //NULL
                    output.value = ""
                    break
                case "dec":
                    //bin to dec
                    output.value = binToDec(input.value);
                    break
                case "bin":
                    //INPUT
                    output.value = input.value;
                    break
                case "hexa":
                    //bin to hexa
                    output.value = "NON SUPORTE"
                    break
            }
            break
        case "hexa":
            switch(outputType.value) {
                case "null":
                    //NULL
                    output.value = ""
                    break
                case "dec":
                    //hexa to dec
                    output.value = "NON SUPORTE"
                    break
                case "bin":
                    //hexa to bin
                    output.value = hexaToBin(input.value);
                    break
                case "hexa":
                    //INPUT
                    output.value = input.value;
                    break
            }
            break
    }

}

function binToDec(bin) {
    /**
     * Converti un nombre binaire pris en parametre en un nombre
     * decimal renvoye.
     * bin : string
     * nb : string
     * dec : int
     * return : dec (int)
     */
    nb = bin.toString()
    dec = 0

    for(i = 0; i < nb.length + 1; i++) {
        
        if(nb[nb.length - i] == "1") {
            dec = dec + 2**i;
        } 
    }
    return(dec/2)
}

function hexaToBin(hexa) {
     /**
     * Converti un nombre hexadecimal pris en parametre en un nombre
     * binaire renvoye a l'aide d'un dictionnaire de réference.
     * nb : string
     * bin : string
     * hexaTable : dictionaire
     * return : bin (string)
     */
    nb = hexa.toString()
    bin = ""
    hexaTable = {
        0: "0000",
        1: "0001",
        2: "0010",
        3: "0011",
        4: "0100",
        5: "0101",
        6: "0110",
        7: "0111",
        8: "1000",
        9: "1001",
        a: "1010",
        b: "1011",
        c: "1100",
        d: "1101",
        e: "1110",
        f: "1111",
        A: "1010",
        B: "1011",
        C: "1100",
        D: "1101",
        E: "1110",
        F: "1111"
    }

    for(i = 0; i < nb.length; i++) {
        bin = bin + hexaTable[nb[i]];
    }
    return(bin);
}

function decToBin(dec) {
    /**
     * Converti un nombre deciaml pris en parametre en un nombre
     * binaire
     * p : int
     * maxP : int
     * bin : string
     * return : bin (string)
     */
    bin = "";
    p = 1;

    while(2 ** p < dec) {
        p++;
    }

    maxP = p+1;

    for(i = 0; i < maxP; i++) {
        if(dec - 2**p >= 0) {
            bin = bin + "1";
            dec -= 2**p;
        } else {
            if(bin != "") {
                bin = bin + "0";
            }
        }
        p--
    }

    return(bin);
}

/**
* En contruction :
*
*function binTohexa(bin) 
*     * Converti un nombre écris en base 2(binaire) en un nombre écris en base 16(hexdecimal)
*     * s : int
*     * nb : int de bin converti en string
*     * hex : string
*     * return : hex (string)
*
*
*    var nb = bin.toString()
*    var s = 0
*    var hex = ""
*
*    for(i = 0; i < nb.length + 1; i++) {
*        if(nb[nb.length - i] == "1") {
*            s = s + 2**i
*        }
*    }
*    *la boucle converti dans un premier temps la valeur en binaire en une valeur decimal 
*    hex = s.toString(16)
*    *cette ligne converti ensuite à la base 16
*
*   return hex
*}
*/

function clear() {
    /**
     * efface toutes les entrées
     */

    input.value = "";
    output.value = "";

    inputType.value = "null";
    outputType.value = "null";
}

function swap() {
    /**
     * echange les entres/sorties 
     */
    tempInput = input.value;
    tempInputType = inputType.value;

    input.value = output.value;
    output.value = tempInput;
    inputType.value = outputType.value;
    outputType.value = tempInputType;
}

document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#swap").addEventListener("click", swap);

input.addEventListener("input", () => {
    convert();
});

inputType.addEventListener("input", () => {
    convert();
});

outputType.addEventListener("input", () => {
    convert();
});