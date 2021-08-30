//HELPER
function esPar(numero){
    return (numero % 2 === 0 );
}

//CALCULADORA DE MEDIANAS
const salariosCol = colombia.map(
  function (persona){
    return persona.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function (salaryA, salaryB){
    return salaryA - salaryB;
  }
);

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function medianaSalarios(lista){
 const mitad = parseInt(lista.length / 2);

 if(esPar(lista.length)){
   const personaMitad1 = lista[mitad-1];
   const personaMitad2 = lista[mitad];
   const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
   return mediana;
 }else{
   const perosaMitad = lista[mitad];
   return personaMitad;
 }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//MEDIANA TOP 10%
const spliceStart = (salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
  medianaGeneralCol,
  medianaTop10Col,
);
