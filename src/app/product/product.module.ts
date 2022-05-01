import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './components/list-product/list-product.component';
import { TableModule } from 'primeng/table';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "", component: ListProductComponent
  }, {
    path: ":id", component: ProductFormComponent
  }
];

@NgModule({
  declarations: [
    ListProductComponent,
    ProductFormComponent],
  imports: [
    CommonModule, FormsModule, ConfirmDialogModule, DialogModule, ToastModule, TableModule, ToolbarModule, RouterModule.forChild(routes)
  ],
  providers: [ConfirmationService]
})
export class ProductModule { }
