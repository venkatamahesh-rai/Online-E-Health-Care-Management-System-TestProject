import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './shared/components/container/container.component';
import { MainAuthGuardService } from './shared/guard';

const routes: Routes = [
  {
    path: "account", component: ContainerComponent, loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule)
  },
  {
    path: "cart", component: ContainerComponent, loadChildren: () =>
      import("./cart/cart.module").then((m) => m.CartModule)
  },
  {
    path: "product", component: ContainerComponent, loadChildren: () =>
      import("./product/product.module").then((m) => m.ProductModule),
    canActivate: [MainAuthGuardService]
  },
  {
    path: "category", component: ContainerComponent, loadChildren: () =>
      import("./category/category.module").then((m) => m.CategoryModule),
    canActivate: [MainAuthGuardService]
  },
  {
    path: "", component: ContainerComponent, loadChildren: () =>
      import("./home/home.module").then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
