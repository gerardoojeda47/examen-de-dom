function cambiarDescripcionesImagenes() {
    const imagenes = document.querySelectorAll("#img");

    imagenes.forEach(imagen => {
        imagen.setAttribute('alt', 'Nueva descripción generada');
    });
}

document.addEventListener('DOMContentLoaded', cambiarDescripcionesImagenes);