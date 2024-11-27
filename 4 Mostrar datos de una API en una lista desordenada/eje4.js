async function mostrarPosts() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await respuesta.json();
        const listaPosts = document.getElementById("lista-posts");

        const elementosLista = posts
            .slice(0, 10) 
            .map(post => {
                const li = document.createElement('li');
                li.textContent = post.title;
                return li;
            });

        elementosLista.forEach(elemento => {
            listaPosts.appendChild(elemento);
        });
    } catch (error) {
        console.error('Error al cargar los posts:', error);
    }
}

document.addEventListener('DOMContentLoaded', mostrarPosts);