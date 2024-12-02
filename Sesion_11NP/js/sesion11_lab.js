let respuesta="";
let calificacion=prompt("Ingresa la calificacion");
if(calificacion>=90){
    respuesta="Aprobado con honores ";
}
else if(calificacion >= 70 && calificacion <90){
    respuesta="Aprobado";
}
else{
    respuesta="Reprobado ";
}
document.write(respuesta,"con una de: ", calificacion);


