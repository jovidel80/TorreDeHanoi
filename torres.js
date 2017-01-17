/**
 * Created by capitanjovi on 15/1/17.
 */

const altura = "40px";

var cuerpo;

var cuadro1 = new Cuadro(true);
var cuadro2 = new Cuadro(false);
var cuadro3 = new Cuadro(false);

function crearDiv() {
    caja = document.createElement("div");
    return caja;
}

function rellenarContenido() {
    var contenido = new Array();

    for ( var i = 0; i < 5; i++) {
        contenido[i] = new Relleno();
    }

    return contenido;
}

function rellenaFichas() {
    var contenido = new Array();

    contenido[0] = new Relleno();
    contenido[1] = new FichaS();
    contenido[2] = new FichaM();
    contenido[3] = new FichaL();
    contenido[4] = new FichaXL();

    return contenido;
}

function FichaS() {
    this.caja = crearDiv();
    this.caja.style.width = "10%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#0088CC";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}

function FichaM() {
    this.caja = crearDiv();
    this.caja.style.width = "30%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#979797";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}

function FichaL() {
    this.caja = crearDiv();
    this.caja.style.width = "50%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#666666";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}

function FichaXL() {
    this.caja = crearDiv();
    this.caja.style.width = "70%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#000000";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}

function Relleno() {
    this.caja = crearDiv();
    this.caja.style.width = "100%";
    this.caja.style.height = altura;
}

function Cuadro(cajaInicial) {
    this.caja = crearDiv();
    this.caja.style.width = "28%";
    this.caja.style.height = "200px";
    this.caja.style.marginLeft = "4%";
    this.caja.style.borderWidth = "2%";
    this.caja.style.border = "solid black";
    this.caja.style.float = "left";
    this.contenido;

    if (cajaInicial) {
        this.contenido = rellenaFichas();
    } else {
        this.contenido = rellenarContenido();
    }

    for (var i = 0; i < this.contenido.length; i++) {
        this.caja.appendChild(this.contenido[i].caja);
    }
}

function iniciar() {
    cuerpo = document.getElementsByTagName("body")[0];
    cuerpo.appendChild(cuadro1.caja);
    cuerpo.appendChild(cuadro2.caja);
    cuerpo.appendChild(cuadro3.caja);
}

window.addEventListener("load", iniciar, false);
