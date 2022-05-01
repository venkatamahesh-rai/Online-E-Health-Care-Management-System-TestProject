import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductModel } from '../../product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductService, private messageService: MessageService) { }

  product: ProductModel;

  ngOnInit(): void {
    const routeSegments = window.location.href.split("/");
    const id = routeSegments[routeSegments.length - 1];
    if (id && !Number.isNaN(id)) {
      this.productService.getById(Number(id)).subscribe(
        (product) => {
          this.product = product;
        }
      )
    } else {
      this.productService.getById(null).subscribe(
        (product) => {
          this.product = product;
        }
      )
    }
  }

  handleSave() {
    if (this.product.id) {
      this.productService.update(this.product).subscribe(
        (product) => {
          this.messageService.add({ severity: 'success', summary: 'Product Updated' })
        }
      );
    } else {
      this.productService.add(this.product).subscribe(
        (product) => {
          this.messageService.add({ severity: 'success', summary: 'Product Added' })
        }
      );
    }
  }

  handleChange(event) {
    this.product.categoryID = Number(event.target.value)
  }

}
