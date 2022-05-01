import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

const routes: Routes = [
  {
    path: "", component: ListCategoryComponent
  }, {
    path: ":id", component: CategoryFormComponent
  }
];


@NgModule({
  declarations: [ListCategoryComponent, CategoryFormComponent],
  imports: [CommonModule, FormsModule, ConfirmDialogModule, DialogModule, ToastModule,
    CommonModule, RouterModule.forChild(routes)
  ],
  providers:[]
})
export class CategoryModule { }
