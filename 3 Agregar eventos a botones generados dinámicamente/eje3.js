 function crearBotonesDinamicos() {
    const contenedor = document.getElementById("botones-container");
    const botones = Array.from({ length: 5 }, (_, index) => {
        const boton = document.createElement('button');
        boton.textContent = `Botón ${index + 1}`;
        return boton;
    });
    botones.forEach((boton, indice) => {
        boton.addEventListener('click', () => {
            console.log(`Clic en botón con índice: ${indice}`);
        }); 
        contenedor.appendChild(boton);
    });
}
document.addEventListener('DOMContentLoaded', crearBotonesDinamicos);