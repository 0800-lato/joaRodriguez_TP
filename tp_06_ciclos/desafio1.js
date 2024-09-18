let operaciones = [
    {tipo: 'deposito', monto: 100000},
    {tipo: 'retiro', monto: 50000},
    {tipo: 'deposito', monto: 20000},
    {tipo: 'retiro', monto: 30000},
    {tipo:  'deposito', monto: 10000},
]

function calcularSaldo(operaciones) {
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    operaciones.forEach((operacion) => {
        if (operacion.tipo === 'deposito') {
            saldoDepositos += operacion.monto;
    }  else if (operacion.tipo === 'retiro') {
        saldoRetiros += operacion.monto;
    }
    });

    let saldoActual = saldoDepositos - saldoRetiros;
    return {saldoDepositos,saldoRetiros,saldoActual}
}

const  resultado = calcularSaldo(operaciones);
console.log('Saldo de Depósitos: ',resultado.saldoDepositos);
console.log('Saldo de Retiros: ', resultado.saldoRetiros);
console.log('Saldo Actual: ', resultado.saldoActual);

function resumenCliente(nombre,apellido,operaciones) {
    const {saldoDepositos,saldoRetiros,saldoActual} = calcularSaldo(operaciones)
    return {
        datosCompleto: `${nombre} ${apellido}`, saldoDepositos, saldoRetiros, saldoActual
    };
}

const cliente1 = resumenCliente('Juan', 'Perez', operaciones);
console.log(`Estiamd@ ${cliente1.datosCompleto}:`);
console.log(`El monto total de los depositos es de: ${cliente1.saldoDepositos}.`);
console.log(`EL monto total de los retiros es de: ${cliente1.saldoRetiros}.`);
console.log(`Su saldo actual en la cuenta es de: ${cliente1.saldoActual}.`);

const cliente2 = resumenCliente('Maria', 'Rodriguez', operaciones);
console.log(`Estiamd@ ${cliente2.datosCompleto}:`);
console.log(`El monto total de los depositos es de: ${cliente2.saldoDepositos}.`);
console.log(`EL monto total de los retiros es de: ${cliente2.saldoRetiros}.`);
console.log(`Su saldo actual en la cuenta es de: ${cliente2.saldoActual}.`);