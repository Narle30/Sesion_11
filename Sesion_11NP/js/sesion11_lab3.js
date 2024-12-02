let monto=prompt("Ingrese el monto total de su compra: ");
let resultado=0;
if(monto>100){
    resultado=monto-(monto*0.1);
}
else{
    resultado=monto;
}
document.write(`El monto total a pagar es ${resultado}`);
