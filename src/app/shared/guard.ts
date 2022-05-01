import { Injectable } from "@angular/core";
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
    Router,
} from "@angular/router";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { AccountService } from "../account/account.service";

@Injectable({
	providedIn: "root",
})
export class MainAuthGuardService implements CanActivate {
	constructor(public http: HttpClient, private router: Router, private service: AccountService) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | boolean {
        const user = this.service.getLoggedInUserSync();
		if (user && user.isAdmin) {
			return true
		} else {
			this.router.navigateByUrl("login");
		}
	}

}
