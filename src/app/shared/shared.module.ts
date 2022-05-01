import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [ContainerComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    CardModule,
    RouterModule,
    ButtonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
