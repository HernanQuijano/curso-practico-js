function calcularMedia(lista){
  const sumaLista = lista.reduce(
    function (acumulado = 0, nuevo){
      return acumulado + nuevo;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
