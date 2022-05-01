import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  env = environment;

  private loggedInUser = new BehaviorSubject<UserModel>(null);

  constructor(private http: HttpClient) { }

  login(username, password) {
    return this.http.post(this.env.url + "Account/Login" + "?email=" + username + "&password=" + password, {})
  }

  updateLogginUser(model: any) {
    var user = new UserModel();
    user.firstName = model.firstName;
    user.lastName = model.lastName;
    user.isAdmin = model.isAdmin;
    user.id = model.id;
    this.loggedInUser.next(user);
    localStorage.setItem("token", model.accessToken);
    localStorage.setItem("user", JSON.stringify(user));
  }

  getLoggedInUser() {
    return this.loggedInUser.asObservable();
  }

  getLoggedInUserSync() {
    var user = localStorage.getItem("user");
    return JSON.parse(user) as UserModel;
  }

  logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    location.replace("");
  }

  register(user: UserModel) {
    return this.http.post(this.env.url + "Account/Register", user)
  }
}
