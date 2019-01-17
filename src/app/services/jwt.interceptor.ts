import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
import { AccountService } from './account.service';
import { AuthConstants } from '../common/api.consts';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  
  constructor(
    private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    console.log("here");
    
    const accessToken = localStorage.getItem(AuthConstants.authTokenKey);
    console.log(accessToken);
    if (accessToken) {
      request = request.clone({
        setHeaders: {
            Authorization: `${accessToken}`
        }
    });
    }

    return next.handle(request);

    // return next.handle(request).((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {        
    //     // do stuff with response if you want
    //   }
    // }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {        
    //     if (err.status === 401) {
    //       this.injector.get(AccountService).logout();
    //       this.injector.get(Router).navigate(['/sessions/expired']);
    //     } else {
    //       console.log('XHR request error...');
    //       console.log(JSON.stringify(err));
    //     }
    //   }
    // })
  }
}
