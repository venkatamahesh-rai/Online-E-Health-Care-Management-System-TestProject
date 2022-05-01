import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [CatalogComponent, SearchComponent, ProductCardComponent, HomeComponent],
  imports: [
    CommonModule, HomeRoutingModule,
    CardModule, SharedModule, ButtonModule
  ], providers: []
})
export class HomeModule { }
