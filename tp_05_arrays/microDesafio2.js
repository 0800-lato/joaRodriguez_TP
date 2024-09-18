let peliculas = ['Top gun maverick','Deadpool','Volver al futuro', 'Los simuladores','El padrino','Scarface','Harry Potter'];

let peliculaMasVista = peliculas[3];

function mayusculas(pelicula) {
    return pelicula.toUpperCase();
}

let peliculaMayus = mayusculas(peliculaMasVista);

peliculas.splice(6, 1);
peliculas.unshift(peliculaMayus);
console.log(peliculas);

const estrenos = ['The Flash','Avatar','minecraft'];
const estrenosStrign = estrenos.join(', ');
console.log(estrenosStrign);

estrenos.slice(estrenos.indexOf('Avatar'),1);
console.log(estrenos);

function concatenarPeliculas(peliculas,estrenos) {
    return peliculas.concat(estrenos);
};
console.log(concatenarPeliculas(peliculas,estrenos));