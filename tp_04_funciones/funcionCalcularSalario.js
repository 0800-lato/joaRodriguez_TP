function calcularSalarioDiario(salarioMensual,diasTrabajados,horasTrabajadas) {
    const totalHorasTrabajadas = diasTrabajados * horasTrabajadas;
    const valorPorHora = salarioMensual / totalHorasTrabajadas;
    return valorPorHora;
};
console.log(calcularSalarioDiario(14000,10,7));