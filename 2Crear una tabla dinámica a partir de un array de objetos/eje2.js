const usuarios = [
    { nombre: 'Ana Martínez', edad: 28, email: 'ana.martinez@example.com' },
    { nombre: 'Carlos Ruiz', edad: 35, email: 'carlos.ruiz@example.com' },
    { nombre: 'Laura González', edad: 42, email: 'laura.gonzalez@example.com' },
    { nombre: 'Miguel Sánchez', edad: 31, email: 'miguel.sanchez@example.com' }
];
function crearTablaUsuarios(usuarios) {
    const contenedorTabla = document.getElementById("tabla-usuarios");

    const tabla = document.createElement('table');
    tabla.classList.add('tabla-usuarios');

    const encabezado = `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
            </tr>
        </thead>
    `;
    const filasHTML = usuarios.map(usuario => `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.email}</td>
        </tr>
    `).join('');

    tabla.innerHTML = `
        ${encabezado}
        <tbody>
            ${filasHTML}
        </tbody>
    `;
    contenedorTabla.appendChild(tabla);
}

crearTablaUsuarios(usuarios);