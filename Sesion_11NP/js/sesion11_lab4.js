let numeroAleatrorio= (Math.floor(Math.random() * 10) +1);
let numb=prompt("Insert a number");
if(numb==numrand){
    document.write("¡CONGRATS! You guess the number");
}
else{
    document.write("¡SORRY! The correct number is: ",numrand)
}