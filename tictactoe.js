var turno = "X";
var ganador = false;
var mensaje = true;

function changeSymbol(symbol) {
    if (turno == "X" && document.getElementById(symbol).innerText == "") {
        document.getElementById(symbol).innerText = "X";
        turno = "O";
    } else if (turno == "O" && document.getElementById(symbol).innerText == "") {
        document.getElementById(symbol).innerText = "O";
        turno = "X";
    }
}

function setMensaje() {
    if (mensaje) {
        document.getElementById("mensaje").innerText = "Toca el turno para la " + turno;
    }
}

function evaluar(symbol) {
    if ((document.getElementById("1").innerText &&
        document.getElementById("2").innerText &&
        document.getElementById("3").innerText) == document.getElementById(symbol).innerText) {
        document.getElementById("ganador").innerText = "Ganaron las " + document.getElementById(symbol).innerText + "'s";
        mensaje = false;
    }
    if ((document.getElementById("4").innerText &&
        document.getElementById("5").innerText &&
        document.getElementById("6").innerText) == document.getElementById(symbol).innerText) {
        document.getElementById("ganador").innerText = "Ganaron las " + document.getElementById(symbol).innerText + "'s";
        mensaje = false;

    }
    if ((document.getElementById("7").innerText &&
        document.getElementById("8").innerText &&
        document.getElementById("9").innerText) == document.getElementById(symbol).innerText) {
        document.getElementById("ganador").innerText = "Ganaron las " + document.getElementById(symbol).innerText + "'s";
        mensaje = false;

    }
    if ((document.getElementById("1").innerText &&
        document.getElementById("4").innerText &&
        document.getElementById("7").innerText) == document.getElementById(symbol).innerText) {
        document.getElementById("ganador").innerText = "Ganaron las " + document.getElementById(symbol).innerText + "'s";
        mensaje = false;

    }
    if ((document.getElementById("2").innerText &&
        document.getElementById("5").innerText &&
        document.getElementById("8").innerText) == document.getElementById(symbol).innerText) {
        document.getElementById("ganador").innerText = "Ganaron las " + document.getElementById(symbol).innerText + "'s";
        mensaje = false;

    }
    if ((document.getElementById("3").innerText &&
        document.getElementById("6").innerText &&
        document.getElementById("9").innerText) == document.getElementById(symbol).innerText) {
        document.getElementById("ganador").innerText = "Ganaron las " + document.getElementById(symbol).innerText + "'s";
        mensaje = false;

    }
    if ((document.getElementById("1").innerText &&
        document.getElementById("5").innerText &&
        document.getElementById("9").innerText) == document.getElementById(symbol).innerText) {
        document.getElementById("ganador").innerText = "Ganaron las " + document.getElementById(symbol).innerText + "'s";
        document.getElementById("mensaje").innerText = "";

    }
    if ((document.getElementById("3").innerText &&
        document.getElementById("5").innerText &&
        document.getElementById("7").innerText) == document.getElementById(symbol).innerText) {
        document.getElementById("ganador").innerText = "Ganaron las " + document.getElementById(symbol).innerText + "'s";
        mensaje = false;

    }

}
function prueba() {
    console.log("o" == ("x" || "o"))
}

function loadJS(file) {
    var jsElm = document.createElement("script");
    jsElm.src = file;
    document.body.appendChild(jsElm);
}