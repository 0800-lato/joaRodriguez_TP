let pagoMes = 20000;
let consumoKWH = 365;
let aumento = pagoMes * 0.2;
let pagoFinla = aumento + pagoMes;

let mensajeAumento = `Debido a que su hogar tuvo un consumo de ${consumoKWH}Kwh, en base al ajuste tarifario (hogares con consumo masyor a 300Kwh por mes tendra aumento del 20%), cumplidos con informarle que se ha ajustado el total a pagar, que será de ${pagoFinla}`

let mensajeSubsidio = `Debido a que su hogar tuvo un consumo de ${consumoKWH}Kwh, se encuentra dentro del rango de subsidio, por lo que su pago será de ${pagoMes}`

let informeFinal = consumoKWH > 300 ? mensajeAumento : mensajeSubsidio;
console.log(informeFinal);
