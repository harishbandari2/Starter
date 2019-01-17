import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';


import { AccountService } from './account.service';
import { AccountContext } from './account.context';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountContexct: AccountContext,
    private accountService: AccountService
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable((observer: Observer<boolean>) => {
      if (!this.accountContexct.isAuthenticated()) {
        this.router.navigate(['/login']);
        observer.next(false);
        observer.complete();
      }
      else {
        observer.next(true);
        observer.complete();
      }

    });
  }
}
