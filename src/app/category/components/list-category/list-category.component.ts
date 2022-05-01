import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/product/category.model';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: CategoryModel[];
  category: CategoryModel;
  constructor(private catService: CategoryService,
    private router: Router) { }

  ngOnInit() {
    this.catService.get().subscribe(data => this.categories = data);

  }

  handleRowClick(id) {
    this.router.navigateByUrl("/category/" + id);
  }

  handleAdd() {
    this.router.navigateByUrl("/category/0");
  }
}
