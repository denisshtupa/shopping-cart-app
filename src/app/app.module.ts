import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomModalComponent } from './modal/modal.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AngularIbanModule } from 'angular-iban';


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
    AngularIbanModule
  ],
  providers: [],
  bootstrap: [ProductListComponent]
})
export class AppModule { }
