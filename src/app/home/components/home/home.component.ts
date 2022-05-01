import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/product/category.model';
import { ProductModel } from 'src/app/product/product.model';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ProductService) { }

  products: ProductModel[];
  filteredProducts: ProductModel[];
  categories: CategoryModel[] = [];

  ngOnInit(): void {
    this.service.get().subscribe((res) => {
      this.products = res;
      this.filteredProducts = this.products;
      for (let i = 0; i < this.products.length; i++) {
        const prod = this.products[i];
        if (!this.categories.map(c => c.id).includes(prod.categoryID)) {
          this.categories.push(prod.category);
        }
      }
    });
  }

  handleChange(categoryID) {
    if (categoryID > 0) {
      this.filteredProducts = this.products.filter(i => i.categoryID == categoryID);
    } else {
      this.filteredProducts = this.products;
    }
  }

}
