import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  username: string;
  password: string;
  invalidCreds: boolean;

  ngOnInit(): void {
  }

  handleLoginClick() {
    this.invalidCreds = false;
    this.accountService.login(this.username, this.password)
      .subscribe(
        (model) => {
          this.accountService.updateLogginUser(model);
          this.router.navigateByUrl("");
        },
        (err) => {
          this.invalidCreds = true;
        }
      );
  }

  handleRegisterClick(){
    this.router.navigateByUrl("account/register");
  }

}
