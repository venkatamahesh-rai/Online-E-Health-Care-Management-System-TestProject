import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/user/user.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private accuntService: AccountService, private router: Router) { }
  errors: boolean;
  user: UserModel;

  ngOnInit(): void {
    this.user = new UserModel();
  }

  handleRegisterClick() {
    if (!this.user.email || !this.user.firstName || !this.user.lastName || !this.user.password) {
      this.errors = true;
    }
    this.accuntService.register(this.user).subscribe(
      (user) => {
        this.router.navigateByUrl("account/login");
      }
    );
  }

}
