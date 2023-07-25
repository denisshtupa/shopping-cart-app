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
    ButtonModule
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
    ButtonModule
  ],
  bootstrap: []
})
export class SharedModule { }
