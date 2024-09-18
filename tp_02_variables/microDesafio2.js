let nombre = 'Fede';
let apellido = 'Pérez';
let sueldoActual = 150000;
let porcentajeAumento = 15;
let calculoAumentado = (sueldoActual * porcentajeAumento) / 100
let nuevoSueldo = sueldoActual + calculoAumentado;
let resultado = `Buenos dias ${nombre} ${apellido} queriamos avisarle que su sueldo de ${sueldoActual} tuvo un aumnento del ${porcentajeAumento}%:$${calculoAumentado}, quedando su sueldo en $${nuevoSueldo}, saludos.`