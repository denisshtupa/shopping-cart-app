import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/interfaces';
import { formatToGermanCurr } from 'src/app/shared/utils/functions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() addedProducts: IProduct[] = [];

  @Output() onConfirm = new EventEmitter();
  @Output() onAddQuantity = new EventEmitter();
  @Output() onRemoveQuantity = new EventEmitter();
  @Output() onRemoveProduct = new EventEmitter();

  ngOnInit() {

  }

  public totalPrice(): string {
    let totalPrice: number = 0;
    this.addedProducts.forEach((x: IProduct) => {
      totalPrice += Number(x.price) * x.quantity;
    });

    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(Number(totalPrice.toString()));
  }

  public confirmProducts(tabId: number) {
    this.onConfirm.emit(tabId);
  }

  public formatToGermanCurrency(product: IProduct): string {
    return formatToGermanCurr(product);
  }

  public removeQuantity(product: IProduct) {
    this.onRemoveQuantity.emit(product);
  }

  public addQuantity(product: IProduct) {
    this.onAddQuantity.emit(product);
  }

  public removeProduct(product: IProduct) {
    this.onRemoveProduct.emit(product);
  }
}
