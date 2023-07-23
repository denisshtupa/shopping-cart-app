import { ProductsService } from '../../services/products.service';
import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Constants } from '../../shared/constants/static-variables';
import { IProduct } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss']
})

export class ProductsOverviewComponent {
  public modalRef: BsModalRef;
  public title: string = 'Shopping cart';
  public isAscendingSort: boolean;
  public ordered: string = "";
  public searchValue: string = "";
  public productList: IProduct[];
  public filteredProducts: IProduct[] = [];

  constructor(private _productsService: ProductsService) {
  }

  ngOnInit() {
    this.loadProductsListFromAPI();
  }

  private loadProductsListFromAPI() {
    this._productsService.getProductList().subscribe({
      next: (res: IProduct[]) => {
        res.map((x: IProduct) => x.onCart = false);
        this.productList = res;
        this.filteredProducts = res;
      },
      error: (error) => {
        if (error) {
          this.productList = Constants.productList;
          this.filteredProducts = Constants.productList;
        }
      }
    });
  }

  public openModal(template: TemplateRef<any>) {
    // this.modalRef = this.modalService.show(template);
  }

  public closeModalHandler() {
    // this.modalRef.hide();
  }

  public formatToGermanCurrency(price: number): string {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(price))
  }

  public removeQuantity(product: IProduct) {
    product.quantity--;
  }

  public addQuantity(product: IProduct) {
    product.quantity++;
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

  public manageCartAccess(): boolean {
    return this.productList.some(x => x.onCart);
  }

  public numberOfProductsInCart(): number {
    let productsInCart: Array<IProduct>;
    productsInCart = this.productList.filter(x => x.onCart == true);
    return productsInCart.length;
  }

}