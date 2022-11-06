// npm init --y
// npm i mongoose

const mongoose = require('mongoose');

// const { connect } = require('mongoose')

// const { Types } = require('mongoose')

const connectionURL= "mongodb+srv://rogercruz:ositoymono12@cluster0.wnyfbmm.mongodb.net/ejemploDB?retryWrites=true&w=majority";

( async ()=>{

try {

    //conectarse a la base de datos
    const stateConnection = await mongoose.connect(connectionURL);
    //crear un modelo de grupo
    const conceptos = mongoose.model("Concepto", {nombreConcepto:String, detalleConcepto:String});
    //crear modelo de permisos
    const cajas = mongoose.model("Caja", {descripcionCaja:String});

    // crear modelo de usuarios en este caso transacciones
    const transacciones =  mongoose.model("Transacciones", 
    {
        fecha: String,
        ingreso: Number,
        egreso: Number,
        observación: String,
        idCaja: { type: mongoose.Types.ObjectId , ref:"Caja" } ,
        idConcepto: { type: mongoose.Types.ObjectId , ref:"Concepto" }
        
    } );

    //INGRESO DE CAJA
    const caja1 =  new cajas({descripcionCaja:"Caja de departamento A"});
    const guardarCaja = await caja1.save();
    //CONSULTA DE CAJA
    const consultaCaja = await cajas.findById(guardarCaja._id);
    console.log(consultaCaja);
    //MODIFICAR LA CAJA
    await cajas.updateOne({_id: guardarCaja._id}, {descripcionCaja:"Caja de departamento de TI A"});


    //INGRESO DE CONCEPTOS
    const conceptos1 = new conceptos({nombreConcepto:"Pago de proveedores de carnes", detalleConcepto:"Caja de Pasillo uno"});
    const guardarConcepto= await  conceptos1.save();
    //CONSULTA DE CONCEPTOS
    const consultaConcepto = await conceptos.findById(guardarConcepto._id);
    console.log(consultaConcepto);
    //MODIFICAR EL CONCEPTO
    await conceptos.updateOne({_id: guardarConcepto._id}, {nombreConcepto:"Pago de proveedores de mariscos"});


    //CRUD TRANSACCION
    //INGRESO DE TRANSACCION
    const transacciones1 = new transacciones(
    {
        fecha:"21/03/2022",
        ingreso:"100",
        egreso:"200",
        observación:"Ninguna Observación",
        idCaja: guardarCaja._id,
        idConcepto: guardarConcepto._id
    });
    const guardarTransacciones = await transacciones1.save();
    
    //CONSULTA DE TRANSACCION
    const resultado =   await transacciones.find()
    .populate("idCaja")
    .populate("idConcepto");

    console.log(resultado[resultado.length-1])

    //Modificar Transaccion
    await transacciones.updateOne({_id: guardarTransacciones._id}, {observación:"3 Observaciones Encontradas"});

} catch (error) {
    console.log(error.message);       
}
})();