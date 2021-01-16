import { Component } from '@angular/core';
import { Constants } from './shared/constants/static-variables';
import { IProduct } from './shared/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Shopping cart';
  public isAscendingSort: boolean;
  public ordered: string = "";
  public searchValue: string = "";
  public productList = Constants.productList;

  public filteredProducts: Array<IProduct> = this.productList;

  constructor() {

  }

  ngOnInit() {

  }

  public formatToGermanCurrency(price: number): string {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(price))
  }

  public removeQuantity(product: IProduct) {
    product.quantity--
  }

  public addQuantity(product: IProduct) {
    product.quantity++
  }

  public addOnCart(product: IProduct) {
    product.onCart = true;
  }

  public removeFromCart(product: IProduct) {
    product.onCart = false;
  }

  public sortProducts() {
    this.isAscendingSort = !this.isAscendingSort;
    this.ordered = "ord";
    Constants.sort(this.productList, this.isAscendingSort, "price");
  }

  public onSearchTyping(searchValue: string) {
    this.filteredProducts = Constants.filterProducts(searchValue, this.productList);
  }

  public goToCart() {
    console.log("CLICKEDDD")
  }

  public manageCartAccess(): boolean {
    return this.productList.some(x => x.onCart);
  }

  public numberOfProductsInCart(): number {
    let productsInCart: Array<IProduct>;
    productsInCart = this.productList.filter(x => x.onCart == true);
    return productsInCart.length;
  }

}
