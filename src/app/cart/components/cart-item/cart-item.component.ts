import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product/product.model';
import { CartItemModel } from '../../cart.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnChanges {

  constructor(private service: CartService) { }

  @Input() item: CartItemModel;
  product: ProductModel

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.product = this.item.product;
  }

  handleRemoveClick() {
    this.service.remove(this.item.id).subscribe(
      (res) => {
        location.reload();
      }
    )
  }

}
