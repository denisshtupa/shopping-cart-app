import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsOverviewComponent } from './product-overview/products-overview.component';
import { AngularIbanModule } from 'angular-iban';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from '../services/products.service';
import { DialogService } from 'primeng/dynamicdialog';
import { CartComponent } from './checkout-modal/cart/cart.component';
import { ShippingComponent } from './checkout-modal/shipping/shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './checkout-modal/payment/payment.component';
import { CheckoutComponent } from './checkout-modal/checkout/checkout.component';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';

@NgModule({
  declarations: [
    ProductsOverviewComponent,
    CheckoutModalComponent,
    CartComponent,
    ShippingComponent,
    PaymentComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    AngularIbanModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ProductsOverviewComponent
  ],
  providers: [
    ProductsService,
    DialogService
  ],
  bootstrap: []
})
export class ComponentsModule { }
