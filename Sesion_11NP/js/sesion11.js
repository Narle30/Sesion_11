let num1=10;
let num2=15;
let num3= 9;

let resultado="";
if(num1>num2 && num1>num3){
    resultado="El numero 1 es el mayor";
}
if(num2>num1 && num2>num3){
    resultado="El numero 2 es el resultado"
}
if(num3>num1 && num3>num2){
    resultado="El numero 3 es el resultado"
}
console.log(resultado);

//segunda solucion
console.log("Segunda Solucion");
if(num1>num2 && num1>num3){
    resultado="Numero 1 mayor";
}
else{
    if(num2>num3){
        resultado="Numero 2 mayor";
    }
    else{
        resultado="Numero 3 mayor";
    }
}
console.log(resultado);
//tercera solucion 
console.log("Tercera solucion");
if(num1>num2 && num1>num3){
    resultado="Numero 1 es mayor";
}
else if(num2>num3){
    resultado="Numero 2 es mayor";
}
else{
    resultado="Numero 3 es el mayor";
}
console.log(resultado);