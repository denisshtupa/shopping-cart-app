import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/shared/interfaces/interfaces';
import { formatToGermanCurr } from 'src/app/shared/utils/functions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  @Input() addedProducts: IProduct[] = [];
  @Output() onFinish = new EventEmitter();

  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {

  }

  public finishBuying() {
    this.onFinish.emit();
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

  public formatToGermanCurrency(product: IProduct): string {
    return formatToGermanCurr(product);
  }

}
