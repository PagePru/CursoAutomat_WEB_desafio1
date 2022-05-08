var vp = document.getElementById('idCanvas');
var papel = vp.getContext('2d');

var fondo = {
    url: 'tile.png',
    cargaOk: false,
};

var vaca = {
    url: 'vaca.png',
    cargaOk: false,
};

var cerdo = {
    url: 'vaca.png',
    cargarOk: false,
};

var pollo = {
    url: 'pollo.png',
    cargarOk: false,
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = 'cerdo.png';
cerdo.imagen.addEventListener('load', cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = 'pollo.png';
pollo.imagen.addEventListener('load', cargarPollos);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
}
function cargarCerdos() {
    cerdo.cargaOk = true;
    dibujar();
}
function cargarPollos() {
    pollo.cargaOk = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOk == true) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk == true) {
        for (i = 0; i < 5; i++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargaOk == true) {
        for (i = 0; i < 5; i++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if (pollo.cargaOk == true) {
        for (i = 0; i < 5; i++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}
