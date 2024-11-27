document.getElementById('formulario-datos').addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({ name: nombre, email: email }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const datosRespuesta = await respuesta.json();
        const listaRespuesta = document.getElementById('lista-respuesta');
        listaRespuesta.innerHTML = `
            <li>ID: ${datosRespuesta.id}</li>
            <li>Nombre: ${datosRespuesta.name}</li>
            <li>Email: ${datosRespuesta.email}</li>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
});