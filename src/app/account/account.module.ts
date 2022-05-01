import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';
import { AccountRoutingModule } from './account-routing.module';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule, SharedModule, FormsModule, CardModule, AccountRoutingModule, ButtonModule
  ]
})
export class AccountModule { }
