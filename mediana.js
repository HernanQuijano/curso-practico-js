function esPar(numero){
  if(numero%2 === 0){
    return true;
  }else{
    return false;
  }
}

function mediana(lista){
  lista.sort((a,b) => a-b);
  const mitadLista = parseInt(lista.length/2);

  let mediana;

  if(esPar(lista.length)){
    let elemento1 = lista[mitadLista-1];
    let elemento2 = lista[mitadLista];
    mediana = (elemento1 + elemento2)/2;
  }else{
    mediana = lista[mitadLista];
  }
  return mediana;
}
