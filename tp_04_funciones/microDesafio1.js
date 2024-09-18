let tipoVehiculo = 'compacto';
let diasAlquiler = 10;
let sillaParaBebe = false;
let costoSilla = 1000;

function precioAlquiler(tipoVehiculo,diasAlquiler,sillaParaBebe) {
    let costoPorDia;
    switch (tipoVehiculo.toLoweCase()) {
        case 'compacto':
            costoPorDia = 14000;
            break;
        case 'mediano':
            costoPorDia = 17000;
            break;
        case 'camioneta':
            costoPorDia = 28000;
            break;
        default:
            return 'Elija un tipo de vehiculo'
            break;
    }
    let costoTotal = costoPorDia + diasAlquiler;
    if (sillaParaBebe) {
        costoTotal += costoSilla * diasAlquiler;
    }
    let mensaje;
    switch (sillaParaBebe) {
        case true:
            mensaje = `En base al tipo de vehiculo elegido ${tipoVehiculo} y los dias de alquiler ${diasAlquiler}, incluyendo la silla para bebe, el costo total es de $${costoTotal} por dia.`;
            break;
        case false:
            mensaje = `En base al tipo de vehiculo elegido ${tipoVehiculo} y los dias de alquiler ${diasAlquiler}, el costo total es de $${costoTotal} por dia.`
            break;
        default:
            mensaje = `ERROR al cargar los datos, por favor revise la informacion dada.`
            break;
    }
    return mensaje
}
console.log(precioAlquiler(tipoVehiculo, diasAlquiler, sillaParaBebe));
