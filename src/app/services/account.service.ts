import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { BaseURL, LoginEndpoint, RESOURCE, COMPONENTS } from '../common/api.consts';
import { AccountContext } from './account.context';

@Injectable()
export class AccountService {

  constructor(
    private http: HttpClient, 
    private accountContext: AccountContext) { }
    
  logout(): void {
    this.accountContext.logout();
  }

  getUser(): Promise<boolean> {
    this.getComponentList();
    return new Promise<boolean>((resolve, reject) => {
      this.http.get(BaseURL + LoginEndpoint.userByToken)
        .subscribe(res => {
          this.accountContext.currentUser.next(res);
          resolve(true);          
        }, err => {
          localStorage.clear();          
          resolve(false);
        });
    });
  }

  getComponentList() {
    this.http.get(`${BaseURL}${COMPONENTS}`)
      .subscribe(res => this.accountContext.componentList.next(res));
  }

  getEndpointTypeList() {
    this.http.get(`${BaseURL}${RESOURCE.endpointType}?page=1&size=100`)
      .subscribe(res => {
        this.accountContext.endpointTypeList.next(res);
      });
  }
}
