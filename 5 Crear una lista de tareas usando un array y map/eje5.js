let tareas = [
    { id: 1, texto: 'Aprender JavaScript' },
    { id: 2, texto: 'Construir proyecto' },
    { id: 3, texto: 'Practicar programación' }
];

function renderizarTareas() {
    const listaTareas = document.getElementById('lista-tareas');
    listaTareas.innerHTML = '';

    const elementosTareas = tareas.map(tarea => {
        const contenedorTarea = document.createElement('div');
        contenedorTarea.classList.add('tarea');

        const textoTarea = document.createElement('span');
        textoTarea.textContent = tarea.texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarTarea(tarea.id));

        contenedorTarea.appendChild(textoTarea);
        contenedorTarea.appendChild(botonEliminar);

        return contenedorTarea;
    });

    elementosTareas.forEach(elemento => {
        listaTareas.appendChild(elemento);
    });
}
function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    renderizarTareas();
}

document.addEventListener('DOMContentLoaded', renderizarTareas);