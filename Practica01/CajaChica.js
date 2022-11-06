// Importaciones de los arregelos
import { cajas } from "./Caja.js";
import { transacciones } from "./Transaccion.js";
import { conceptos } from "./Concepto.js";

//Presentacion de datos del arreglo cajas
let x = 0;
while (x < cajas.length){
    console.log(`----> CAJA <----`);
    console.log(`ID: ${cajas[x].idCaja}`);
    console.log(`Descripción de Caja: ${cajas[x].descripcionCaja}`);
    console.log(``);
    x++;
}

console.log("------------------------------------------------------------");
console.log(``);

//Presentación de datos del arreglo Concepto
let y = 0;
do{
    console.log(`----> CONCEPTO <----`);
    console.log(`ID Concepto: ${conceptos[y].idConcepto}`);
    console.log(`Nombre del Concepto: ${conceptos[y].nombreConcepto}`);
    console.log(`Detalle del Concepto: ${conceptos[y].detalleConcepto}`);
    console.log(``);
    y++;
}
while(y < conceptos.length);

console.log("------------------------------------------------------------");
console.log(``);

//Presentación de datos del arreglo Transacción
for(let z=0; z<transacciones.length; z++){
    console.log(`----> TRANSACCIÓN <----`);
    console.log(` ID Transacción: ${transacciones[z].idTransaccion}`);
    console.log(` ID Caja: ${transacciones[z].idCaja}`);
    console.log(` ID Concepto: ${transacciones[z].idConcepto}`);
    console.log(` Fecha: ${transacciones[z].fecha}`);
    console.log(` Ingreso: ${transacciones[z].ingreso}`);
    console.log(` Egreso: ${transacciones[z].egreso}`);
    console.log(` Observación: ${transacciones[z].observación}`);
    console.log(``);
};
