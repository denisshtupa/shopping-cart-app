import { Component } from '@angular/core';
import { IProduct } from '../../shared/interfaces/interfaces';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent {
  public productsList: IProduct[];
  public addedProducts: IProduct[];
  public tabsMenu: MenuItem[] = [];
  public activeItem: MenuItem | undefined = this.tabsMenu[0];

  constructor(
    private dialogRef: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private messageService: MessageService
  ) {
    this.productsList = config.data.products;
  }

  ngOnInit() {
    this.addedProducts = this.productsList.filter((x: IProduct) => x.onCart);
    this.initTabsMenu();
  }

  private initTabsMenu() {
    this.tabsMenu =[
      { label: 'Cart', icon: 'pi pi-shopping-cart', command: () =>  this.activeItem = this.tabsMenu[0] },
      { label: 'Shipping', icon: 'pi pi-map-marker', command: () => this.activeItem = this.tabsMenu[1] },
      { label: 'Payment', icon: 'pi pi-credit-card', command: () => this.activeItem = this.tabsMenu[2] },
      { label: 'Checkout', icon: 'pi pi-check', command: () => this.activeItem = this.tabsMenu[3] }
    ];
    this.activeItem = this.tabsMenu[0];
  }

  public selectTab(tabId: number) {
    this.activeItem = this.tabsMenu[tabId];
  }

  public removeQuantity(product: IProduct) {
    product.quantity--;
  }

  public addQuantity(product: IProduct) {
    product.quantity++;
  }

  public removeProduct(product: IProduct) {
    this.addedProducts = this.addedProducts.filter((x: IProduct) => x.id != product.id);
  }

  public handleFinish() {
    this.messageService.add(
      { life: 4000,
        severity: 'success',
        summary: 'Success',
        detail: 'Order placed successfully.'
      }
    );
    this.productsList.forEach((product: IProduct) => {
      product.quantity = 0;
      product.onCart = false;
    });

    this.dialogRef.close();
  }
}
