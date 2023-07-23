import { IProduct } from "../interfaces/interfaces";

export const formatToGermanCurr = (product: IProduct): string => {
  let totalPrice = Number(product.price) * product.quantity;
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(Number(totalPrice));
}
