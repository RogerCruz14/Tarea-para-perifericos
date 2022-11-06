//Importamos
import { transacciones } from "./Transaccion.js";
import { conceptos } from "./Concepto.js";

console.log("------------------------------------------------------------");
console.log(``);
console.log(`FUNCIONES`);

//Fuciones de busqueda y muestra de los elementos de los arreglos
function buscarTransaccion(idTransaccion){
    const transaccion = transacciones.find((transaccion)=> transaccion.idTransaccion===idTransaccion );
    if (!transaccion)
    {
        const error =  new Error();
        error.message="No encontramos la Transacción";
        throw error;
    }
    return transaccion;
};

function buscarConcepto(idConcepto){
    const concepto =  conceptos.find((concepto)=>{
        return concepto.idConcepto===idConcepto;
    });
    if (!concepto)
    {
        const error = new Error();
        error.message="No encontramos al cliente...";
        throw error;
    }
    return concepto;
};

//Imprime los elementos de los arreglos
let TransaccionEncontrada = buscarTransaccion(2);
let ConceptoEncontrado = buscarConcepto(TransaccionEncontrada.idConcepto)
console.log(TransaccionEncontrada);
console.log(ConceptoEncontrado);

console.log("------------------------------------------------------------");
console.log(``);

//Estructura de Callback
console.log(`ESTRUCTURA CALLBACK`);

function buscarTransaccion2(idTransaccion, callback){
    const transaccion = transacciones.find((transaccion)=> transaccion.idTransaccion===idTransaccion );
    if (!transaccion)
    {
        const error =  new Error();
        error.message="No encontramos la Transacción";
        return callback(error);
    }
    return callback(null, transaccion);
};

function buscarConcepto2(idConcepto, callback){
    const concepto =  conceptos.find((concepto)=>{
        return concepto.idConcepto===idConcepto;
    });
    if (!concepto)
    {
        const error = new Error();
        error.message="No encontramos el concepto...";
        return callback(error);
    }
    return callback(null, concepto);
};

buscarTransaccion2(3, (err,transaccion)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    buscarConcepto2( transaccion.idConcepto, ( err, concepto )=>{
        if (err)
        {
            return console.log(err.message);
        }
        transaccion.concepto= concepto; 
        delete transaccion.idConcepto;
        console.log(transaccion);

    } )
})

console.log("------------------------------------------------------------");
console.log(``);

//ESTRUCTURA ASINC/AWAIT
console.log(`ESTRUCTURA ASINC/AWAIT`);

async function buscarTransaccion3(idTransaccion){
    const transaccion = transacciones.find((transaccion)=> transaccion.idTransaccion===idTransaccion );
    if (!transaccion)
    {
        const error =  new Error();
        error.message="No encontramos la Transacción";
        throw error;
    }
    return transaccion;
};

async function buscarConcepto3(idConcepto){
    const concepto =  conceptos.find((concepto)=>{
        return concepto.idConcepto===idConcepto;
    });
    if (!concepto)
    {
        const error = new Error();
        error.message="No encontramos al cliente...";
        throw error;
    }
    return concepto;
};

//async
(async ()=>{
    try
    {
        const transaccion = await buscarTransaccion3(2);
        const concepto = await  buscarConcepto3(transaccion.idConcepto);
        transaccion.concepto = concepto;
        console.log(transaccion);
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();
