const personajes = [
    { 
        nombre: 'Luke Skywalker', 
        descripcion: 'Jedi y héroe de la Alianza Rebelde' 
    },
    { 
        nombre: 'Darth Vader', 
        descripcion: 'Lord Sith y antiguo Anakin Skywalker' 
    },
    { 
        nombre: 'Yoda', 
        descripcion: 'Maestro Jedi más antiguo y sabio' 
    }
];

function generarTarjetas() {
    const contenedorTarjetas = document.getElementById('tarjetas-contenedor');

    const tarjetas = personajes.map(personaje => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        tarjeta.innerHTML = `
            <h2>${personaje.nombre}</h2>
            <p>${personaje.descripcion}</p>
        `;
        return tarjeta;
    });

    tarjetas.forEach(tarjeta => {
        contenedorTarjetas.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', generarTarjetas);