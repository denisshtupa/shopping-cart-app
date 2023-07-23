import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from './modal/modal.component';
import { ProductsOverviewComponent } from './product-list/products-overview.component';
import { AngularIbanModule } from 'angular-iban';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from '../services/products.service';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { CartComponent } from './modal/cart/cart.component';
import { ShippingComponent } from './modal/shipping/shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsOverviewComponent,
    CustomModalComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    AngularIbanModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    TabMenuModule,
    ToolbarModule,
    InputTextModule,
    BadgeModule,
    ButtonModule,
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
