import {
  IPaymentDetails,
} from '../../shared/interfaces/interfaces';
import { GlobalValidator } from '../../shared/constants/global-validator';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IProduct } from '../../shared/interfaces/interfaces';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'angular-iban';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'checkout-modal',
  templateUrl: './checkout-modal.component.html',
})
export class CheckoutModalComponent {
  @Input() products: IProduct[] = [];
  @Output() closeModalClicked = new EventEmitter();
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  public productsList: IProduct[];

  public addedProducts: IProduct[];


  tabs: MenuItem[] = [
    { label: 'Cart', icon: 'pi pi-shopping-cart', command: () =>  this.activeItem = this.tabs[0] },
    { label: 'Shipping', icon: 'pi pi-map-marker', command: () => this.activeItem = this.tabs[1] },
    { label: 'Payment', icon: 'pi pi-credit-card', command: () => this.activeItem = this.tabs[2] },
    { label: 'Checkout', icon: 'pi pi-check', command: () => this.activeItem = this.tabs[3] },
    { label: 'Progress', icon: 'pi pi-chart-line', command: () => this.activeItem = this.tabs[4] }
  ];

  activeItem: MenuItem | undefined = this.tabs[0];


  constructor(
    private _fb: FormBuilder,
    private dialogRef: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    this.productsList = config.data.products;
  }

  ngOnInit() {
    this.activeItem = this.tabs[0];
    this.addedProducts = this.productsList.filter((x: IProduct) => x.onCart);
  }

  public onCloseIconClickHandler() {
    this.closeModalClicked.emit();
  }


  public selectTab(tabId: number, mode: string = '') {
    this.activeItem = this.tabs[tabId];
  }

  public selectTabConditionally(tabId: number, isValid: boolean) {
    if (isValid) {
      this.staticTabs.tabs[tabId].active = true;
    } else {
      return;
    }
  }

  // public formatToGermanCurrency(product: IProduct): string {
  //   let totalPrice = Number(product.price) * product.quantity;
  //   return new Intl.NumberFormat('de-DE', {
  //     style: 'currency',
  //     currency: 'EUR',
  //   }).format(Number(totalPrice));
  // }

  public removeQuantity(product: IProduct) {
    product.quantity--;
  }

  public addQuantity(product: IProduct) {
    product.quantity++;
  }

  public removeProduct(product: IProduct) {
    this.addedProducts = this.addedProducts.filter((x: IProduct) => x.id != product.id);
  }

}
