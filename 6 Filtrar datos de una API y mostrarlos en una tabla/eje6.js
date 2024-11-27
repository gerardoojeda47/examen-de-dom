async function mostrarUsuariosFiltrados() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();

        const tablaUsuarios = document.getElementById('tabla-usuarios');
        
        const usuariosFiltrados = usuarios.filter(usuario => usuario.id < 5);

        const filasTabla = usuariosFiltrados.map(usuario => `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.name}</td>
                <td>${usuario.email}</td>
            </tr>
        `).join('');

        tablaUsuarios.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                ${filasTabla}
            </tbody>
        `;
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

document.addEventListener('DOMContentLoaded', mostrarUsuariosFiltrados);