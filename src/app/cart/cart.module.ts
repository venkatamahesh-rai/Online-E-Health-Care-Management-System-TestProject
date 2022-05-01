import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { CartMainComponent } from './components/cart-main/cart-main.component';
import { CartRoutingModule } from './cart-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [CartItemComponent, OrderSummaryComponent, OrderConfirmationComponent, CartMainComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    ButtonModule,
    CardModule
  ]
})
export class CartModule { }
