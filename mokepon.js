let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    
           document.getElementById("btn-config").addEventListener("click", () => {
            document.getElementById("configuracion").style.display = "block";
        });
        
        document.getElementById("btn-guardar-config").addEventListener("click", () => {
            let musicaActiva = document.getElementById("musica").checked;
            let sonidoActivo = document.getElementById("sonido").checked;
            let modoOscuroActivo = document.getElementById("modoOscuro").checked;
        
            console.log("Música:", musicaActiva);
            console.log("Sonido:", sonidoActivo);
            console.log("Modo Oscuro:", modoOscuroActivo);
        
            document.getElementById("configuracion").style.display = "none";
        });
   
   let sectionHola = document.getElementById('hola')
    sectionHola.style.display = 'block'
    
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = "none"
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = "none"
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
 
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

document.getElementById("btn-jugar").addEventListener("click", () => {
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("seleccionar-mascota").style.display = "flex";
});

document.getElementById("btn-info").addEventListener("click", () => {
    document.getElementById("info").style.display = "block";
});
document.getElementById("btn-cerrar-info").addEventListener("click", () => {
    document.getElementById("info").style.display = "none";
});

function seleccionarMascotaJugador() {
    
   let sectionHola = document.getElementById('hola')
    sectionHola.style.display = 'none'
    
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = "flex"

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        document.getElementById("alerta").style.display = "block";
    }
    
    function PlayAudio() {
    document.getElementById(musica1).play()
}

    seleccionarMascotaEnemigo()
}

function animacionSeleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
            
    let tarjetas = document.querySelectorAll(".tarjeta-de-mokepon-hipodoge, .tarjeta-de-mokepon-capipepo, .tarjeta-de-mokepon-ratigueya");
    tarjetas.forEach(tarjeta => tarjeta.classList.remove("tarjeta-seleccionada"));
            
    if (inputHipodoge.checked) {
        document.querySelector(".tarjeta-de-mokepon-hipodoge").classList.add("tarjeta-seleccionada");
    } else if (inputCapipepo.checked) {
        document.querySelector(".tarjeta-de-mokepon-capipepo").classList.add("tarjeta-seleccionada");
    } else if (inputRatigueya.checked) {
        document.querySelector(".tarjeta-de-mokepon-ratigueya").classList.add("tarjeta-seleccionada");
    } else {
        document.getElementById("alerta").style.display = "block";
    }
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}
function combate() {
    let barraJugador = document.getElementById('HP jugador');
    let  barraEnemigo = document.getElementById('HP enemigo');

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    } else if (
        (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') ||
        (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||
        (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')
    ) {
        crearMensaje("GANASTE");
        barraEnemigo.value = Math.max(0, barraEnemigo.value - 35);
    } else {
        crearMensaje("PERDISTE");
        barraJugador.value = Math.max(0, barraJugador.value - 35);
    }

    revisarResultado(barraJugador.value, barraEnemigo.value);
}

function revisarResultado(vidaJugador, vidaEnemigo) {
    if (vidaJugador === 0) {
        crearMensajeFinal("¡Has perdido! 😢");
        desactivarBotones();
    } else if (vidaEnemigo === 0) {
        crearMensajeFinal("¡Has ganado! 🎉");
        desactivarBotones();
    }
}

function crearMensajeFinal(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `<strong>${resultado}</strong>`;
    sectionMensajes.appendChild(parrafo);
}

function desactivarBotones() {
    document.getElementById('boton-fuego').disabled = true;
    document.getElementById('boton-agua').disabled = true;
    document.getElementById('boton-tierra').disabled = true;
}

function actualizarVida(quien) {
    // Suponiendo que tienes elementos <progress> con id "vidaJugador" y "vidaEnemigo"
    let barra;
    if(quien === 'jugador'){
        barra = document.getElementById('HP jugador');
    } else {
        barra = document.getElementById('HP enemigo');
    }
    barra.value = Math.max(0, barra.value - 35);
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
            
    sectionMensajes.innerHTML = ""; 

    let parrafo = document.createElement('p');
    parrafo.innerHTML = `<strong>${resultado}</strong><br>
                         Elegiste <span style="color:blue;">${ataqueJugador}</span>, 
                         el enemigo eligió <span style="color:red;">${ataqueEnemigo}</span>.`;

    sectionMensajes.appendChild(parrafo);
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function crearMensajeSegundo(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
            
    sectionMensajes.innerHTML = "";

    let parrafo = document.createElement('p');
    parrafo.innerHTML = `<strong>${resultado}</strong><br>
                         Elegiste <span style="color:blue;">${ataqueJugador}</span>, 
                         el enemigo eligió <span style="color:red;">${ataqueEnemigo}</span>.`;
            
    if (resultado === "GANASTE") {
        sectionMensajes.className = "mensaje-ganaste fade-in";
    } else if (resultado === "PERDISTE") {
        sectionMensajes.className = "mensaje-perdiste fade-in";
    } else {
        sectionMensajes.className = "mensaje-empate fade-in";
    }

    sectionMensajes.appendChild(parrafo);
}

function reiniciarJuego() {
     //FIN Y SE ACABO

        document.getElementById("HP jugador").value = 100;
        document.getElementById("HP enemigo").value = 100;
            
        document.getElementById('boton-fuego').disabled = false;
        document.getElementById('boton-agua').disabled = false;
        document.getElementById('boton-tierra').disabled = false;
            
        document.getElementById("mensajes").innerHTML = "";
            
        location.reload();
    }

window.addEventListener('load', iniciarJuego)