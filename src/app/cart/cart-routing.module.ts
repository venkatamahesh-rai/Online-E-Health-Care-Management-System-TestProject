import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartMainComponent } from './components/cart-main/cart-main.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

const routes: Routes = [
  {
    path: "", component: CartMainComponent
  },
  {
    path: "confirm", component: OrderConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
