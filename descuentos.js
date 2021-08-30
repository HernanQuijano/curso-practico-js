const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100-descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount(){
  const inputPrice = document.getElementById("inputPrice");
  const valuePrice = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const valueDiscount = inputDiscount.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const valueCoupon = inputCoupon.value;

  switch(valueCoupon) {
    case "JuanDC_es_Batman":
        descuento = 15;
      break;
    case "pero_no_le_digas_a_nadie":
        descuento = 30;
      break;
    case "es_un_secreto":
        descuento = 25;
      break;
    default:
    const couponError = document.getElementById("CouponError");
    couponError.innerText = "El cupon "+valueCoupon+" es incorrecto, digite un cupon valido.";
    descuento = 0;
    break;
}

  const discountTotal = Number(valueDiscount) + Number(descuento);
  const precioConDescuento = calcularPrecioConDescuento(valuePrice, discountTotal);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El  descuento fue del "+discountTotal+"% y el precio con descuento es de $"+precioConDescuento;

}
