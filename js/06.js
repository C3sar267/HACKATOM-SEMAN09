//-------------Pregunta-06---------------//

 let trabajador,descuento;

trabajador = parseInt (prompt("Por favor ingresar el numero"));

if ( trabajador <= 80000)
    descuento = trabajador *1;
else if (trabajador > 100000 && trabajador < 20000)
    descuento = trabajador *5;

    else
        descuento = trabajador *3;

        console.log("el descuento del empleado es de:",descuento,"y el salaro neto es de:",(trabajador-descuento));


 

 //-------------Pregunta-06---------------//
