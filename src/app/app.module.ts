import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { CustomModalComponent } from './modal/modal.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AngularIbanModule } from 'angular-iban';
import { ProductsService } from './service/products.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductListComponent,
    CustomModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    AngularIbanModule,
    HttpClientModule
  ],
  providers: [
    BsModalService,
    ProductsService
  ],
  bootstrap: [ProductListComponent]
})
export class AppModule { }
