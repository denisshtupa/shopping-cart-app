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
@NgModule({
  declarations: [
    ProductsOverviewComponent,
    CustomModalComponent
  ],
  imports: [
    CommonModule,
    AngularIbanModule,
    TableModule,
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
    ProductsService
  ],
  bootstrap: []
})
export class ComponentsModule { }
