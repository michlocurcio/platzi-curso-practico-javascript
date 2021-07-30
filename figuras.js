//Código del Cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El area del cuadrado: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del Triángulo
console.group("Triángulos");

//const ladoTriángulo1 = 6;
//const ladoTriángulo2 = 6;
//const baseTriángulo = 4;
//console.log(
//    "Los lados de mi triangulo miden: "
//    + ladoTriángulo1
//    + "cm, "
//    + ladoTriángulo2
//    + "cm, "
//    + baseTriángulo
//    + "cm"
// );

// const alturaTriángulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriángulo + "cm");


function perimetroTriángulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triángulo: " + perimetroTriángulo + "cm");

function areaTriángulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area del triángulo: " + areaTriángulo + "cm^2");

console.groupEnd();

// Código del Circulo
console.group ("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("El PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con HTML

function calcularPerímetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perímetro = perimetroCuadrado(value);
    alert(perímetro);
}

function calcularÁreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const área = areaCuadrado(value);
    alert(área);  
}