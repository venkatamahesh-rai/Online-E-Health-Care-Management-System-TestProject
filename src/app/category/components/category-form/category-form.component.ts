import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoryModel } from 'src/app/product/category.model';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {


  constructor(private catService: CategoryService, private messageService: MessageService) { }

  category: CategoryModel;

  ngOnInit(): void {
    const routeSegments = window.location.href.split("/");
    const id = routeSegments[routeSegments.length - 1];
    if (id && !Number.isNaN(id) && Number(id)>0) {
      this.catService.getById(Number(id)).subscribe(
        (category) => {
          this.category = category;
        }
      )
    } else {
      this.category = new CategoryModel();
    }
  }

  handleSave() {
    if (this.category.id) {
      this.catService.update(this.category).subscribe(
        (category) => {
          this.messageService.add({ severity: 'success', summary: 'Category Updated' })
        }
      );
    } else {
      this.catService.add(this.category).subscribe(
        (category) => {
          this.messageService.add({ severity: 'success', summary: 'Category Added' })
        }
      );
    }
  }


}
