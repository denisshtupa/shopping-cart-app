import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsOverviewComponent } from './components/product-list/products-overview.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shopping-cart'
  },
  {
    path: 'shopping-cart',
    component: ProductsOverviewComponent
  },
  {
    path: '**',
    redirectTo: 'shopping-cart'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
