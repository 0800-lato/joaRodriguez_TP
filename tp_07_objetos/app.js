// Desafio 1
const { isUtf8 } = require('buffer');
const peliculas = require('./peliculas');

console.log('Listado de Películas Favoritas:');
peliculas.forEach(pelicula => {
    console.log(`ID: ${pelicula.id}`);
    console.log(`Rating: ${pelicula.rating}`);
    console.log(`Premios: ${pelicula.awards}`);
    console.log(`Duración: ${pelicula.length} minutos`);
    console.log(`Precio: $${pelicula.price}`);
    console.log(`Género: ${pelicula.genre}`);
    console.log('--------------------------');
});

// Desafio 2
const fs = require('fs'); 
const path = './tp_07_objetos/proyecto/mensaje.txt'; 

fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log(`Contenido del archivo: ${data}`);
});
