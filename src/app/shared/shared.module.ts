import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SpinnerComponent } from './utils/spinner/spinner.component';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabMenuModule,
    DialogModule,
    TableModule,
    TabMenuModule,
    ToolbarModule,
    InputTextModule,
    BadgeModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    SpinnerComponent,
    TabMenuModule,
    DialogModule,
    TableModule,
    TabMenuModule,
    ToolbarModule,
    InputTextModule,
    BadgeModule,
    ButtonModule,
    ToastModule
  ],
  providers: [
  ]
})
export class SharedModule { }
