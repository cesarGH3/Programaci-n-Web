// alert("Hola mundo")
let contraseña = "c3l2"
let ingreso;
do{
    ingreso =prompt("Ingrese su contraseña");
}while( ingreso != contraseña)
let elemento = document.getElementById("texto");
let textoNuevo = prompt("Ingrese el nuevo texto que tendra h1")
elemento.innerHTML = textoNuevo;