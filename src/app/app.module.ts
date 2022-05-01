import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './shared/http.interceptor';
import { ListProductComponent } from './product/components/list-product/list-product.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ButtonModule, ToastModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
