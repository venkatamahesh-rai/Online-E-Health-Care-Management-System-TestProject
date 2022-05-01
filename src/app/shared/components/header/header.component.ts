import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AccountService } from 'src/app/account/account.service';
import { UserModel } from 'src/app/user/user.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }
  items: MenuItem[];
  user: UserModel;

  ngOnInit() {
    this.items = [
      {
        label: 'E - Healthcare'
      }

    ];

    this.accountService.getLoggedInUser().subscribe(
      (user) => {
        var res = this.accountService.getLoggedInUserSync();
        if (res) {
          this.user = res;
        }
      }
    )
  }

  handleSignIn() {
    this.router.navigateByUrl("account/login");
  }

  handleSignOut(){
    this.accountService.logOut();
  }
}


