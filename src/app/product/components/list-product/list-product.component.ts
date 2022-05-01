import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductModel } from '../../product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: ProductModel[];
  product: ProductModel;
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productService.get().subscribe(data => this.products = data);

  }

  handleRowClick(id) {
    this.router.navigateByUrl("/product/" + id);
  }

  handleAdd(){
    this.router.navigateByUrl("/product/0");
  }

}