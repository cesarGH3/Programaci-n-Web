let notas = [];
console.log("Bienvenido al sistema para calcular el promedio de notas de un grupo")
let respuesta = prompt("¿Desea ingresar las notas? 1.Si, 2.No");
while(respuesta == 1){
    let nuevaNota = parseFloat( prompt("Ingrese la nota: "))
    notas.push(nuevaNota)
    console.log("El promedio de las notas de los alumnos es: " + calcularPromedio(notas))
    respuesta = prompt("¿Desea ingresar otra nota? 1.Si, 2.No")
    if(respuesta == 2) break;
}
function calcularPromedio(notas){
    let suma = 0;
    for(i = 0; i < notas.length; i++){
        suma += notas[i];
    }
    return suma / notas.length;
}