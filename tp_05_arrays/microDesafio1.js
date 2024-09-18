let productos = ['refrigerador','licuadora','microondas','televisor','lavaropa'];

console.log(productos[0]);
console.log(productos[1]);
console.log(productos[2]);

let primerLElemento = productos.shift();
productos.push(primerLElemento);
console.log(productos);

productos.push('plancha','horno')
console.log(`La cantidad de productos del array es: ${productos.length}`);

let productoBuscado = 'plancha';
let stock = productos.includes(productoBuscado);

if (stock) {
    console.log('Producto disponible');
} else{
    console.log('El producot buscado no se encuentra disponible');
}

let texto = productos.join(' ');
console.log(texto);

let cantidadElementos = texto.split(' ').length;
console.log(cantidadElementos);

let textoMod = texto.replace('horno', 'secadora');
console.log(`La lista de productos ha sido modificada ${textoMod}`);

let textoConComas = textoMod.split(' ').join(',');
let nuevaLista = textoMod.split(' ')
console.log(nuevaLista);









