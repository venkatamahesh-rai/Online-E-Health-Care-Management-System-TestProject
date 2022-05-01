import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/**
 * ApiInterceptor
 */
@Injectable({ providedIn: 'root' })
export class ApiInterceptor implements HttpInterceptor {

    accessToken: string;

    constructor() {
    }

    /**
     * @param req Intercept all http request
     * @param next http handler
     */
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        const token = localStorage.getItem("token");
        let headers = new HttpHeaders();
        if (token) {
            headers = headers.append('Authorization', 'Bearer ' + token);
        }

        const UpdatedRequest = req.clone({ headers });

        return next.handle(UpdatedRequest).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            })
        );
    }
}
