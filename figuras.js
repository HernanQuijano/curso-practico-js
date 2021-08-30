//codigo del cuadrado
console.group("cuadrado");
function perimetroCuadrado(lado){
  return lado*4;
}

function areaCuadrado(lado){
  return lado*lado;
}
console.groupEnd();

//codigo del triangulo
console.group("triangulo");
function perimetroTriangulo(lado1, lado2, base){
  return lado1+lado2+base;
}

function areaTriangulo(base, altura){
  return (base * altura)/2;
}
console.groupEnd();

//codigo del circulo
console.group("circulo");
const PI = Math.PI;

function diametroCirculo(radio){
  return radio*2;
}

function perimetroCirculo(radio, PI){
  const diametro = diametroCirculo(radio)
  return diametro* PI;
}

function areaCirculo(radio, PI){
  return (radio*radio)*PI;
}
console.groupEnd();

//--------Cuadrado form HTML------------//
function calcularPerimetroCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert("el perimetro del cuadrado es "+perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El area del cuadrado es "+area);
}
//--------Triangulo form HTML------------//
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById("inputTrianguloLado1");
  const input2 = document.getElementById("inputTrianguloLado2");
  const inputBase = document.getElementById("inputTrianguloBase");
  const value1 = input1.value;
  const value2 = input2.value;
  const valueBase = inputBase.value;
  const perimetro = perimetroTriangulo(value1, value2, valueBase);
  alert("El perimetro del triangulo es "+perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert("El area del tringualo es "+area);
}

//--------Circulo form HTML------------//
function calcularDiametroCirculo(){
  const input = document.getElementById("inputCirculo");
  const radio = input.value;
  const diametro = diametroCirculo(radio);
  alert("El diametro del circulo es "+diametro);
}

function calcularPerimetroCirculo(){
  const input = document.getElementById("inputCirculo");
  const radio = input.value;
  const diametro = diametroCirculo(radio);
  const perimetro = perimetroCirculo(diametro, PI);
  alert("El perimetro del circulo es "+perimetro);
}

function calcularAreaCirculo(){
  const input = document.getElementById("inputCirculo");
  const radio = input.value;
  const area = areaCirculo(radio, PI );
  alert("El area del circulo es "+area);
}
