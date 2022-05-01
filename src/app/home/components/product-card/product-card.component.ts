import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/cart/cart.service';
import { ProductModel } from 'src/app/product/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService: CartService, private messageService: MessageService) { }

  @Input() product: ProductModel;

  ngOnInit(): void {
  }

  handleAddToCartClick() {
    this.cartService.add(this.product.id).subscribe(
      (res) => {
        alert('Item added to cart');
        this.cartService.notifyCartUpdate();
      }
    )
  }

}
