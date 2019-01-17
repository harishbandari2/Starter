import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AccountContext {
  public isLoggedIn: ReplaySubject<boolean>;
  public currentUser: Subject<any> = new BehaviorSubject<any>(null);
  public endpointTypeList: Subject<any> = new BehaviorSubject<any>(null);
  public componentList: Subject<any> = new BehaviorSubject<any>({});
  public addComponentToFlow: Subject<any> = new Subject<any>();
  public user: any;
  permissions:any = [];

  constructor(public router: Router) {
    this.isLoggedIn = new ReplaySubject(1);
    this.currentUser.subscribe(res => {
      this.user = res;    
       this.getpermissions();     
    });
    
  }

  public isAuthenticated(): boolean {  
    
    const token = localStorage.getItem('access_token');
    return token ? true : false;
  }

  public isUserLoaded(): boolean {
    return this.user ? true : false;
  }

  logout(): void {
    this.currentUser.next(null);
    this.isLoggedIn.next(false);
    localStorage.clear();
  }

  sendPer() {
    // this.getpermissions();
    return this.permissions;
  }

  // getpermissions() {
  //   if (this.isUserLoaded()) {      
  //     this.permissions = this.user.permissions.permissions;          
  //     this.permissions = this.permissions.map((element => {
  //       return {
  //         entity: {
  //           parent: element.parentEntity.entityName,
  //           child: element.childEntities?element.childEntities.map((item) => {
  //             return {
  //               name: item.childEntity.entityName,
  //               operations: item.operations.map(el => el.operationName)
  //             }
  //           }):'',
  //         }
  //       }
  //     }));
  //     let access = this.permissions.filter((el) => el.entity.parent == 'Design Center');      
  //     this.permissions = access[0].entity.child;
  //     let permissionss = {}
      
  //     this.permissions.forEach(element => {
  //       let key=[1];
  //       let value=[];
  //        value =key.map(el => { 
  //         return {
  //         //  read:element.operations.includes('read'),
  //         read:element.operations.includes('read'),
  //         write:element.operations.includes('write'),
  //         update:element.operations.includes('update'),
  //         delete:element.operations.includes('delete'),
  //         }
  //       });
  //       permissionss[element.name] = value[0];
  //     })
  //     this.permissions = permissionss;   
  //   }
  // }

  getpermissions() {
    this.permissions = {
      projects:{read:true,write:true,update:true,delete:true},
      endPoints:{read:true,write:true,update:true,delete:true},
      partners:{read:true,write:true,update:true,delete:true},
      documents:{read:true,write:true,update:true,delete:true},
      b2bDocTypes:{read:true,write:true,update:true,delete:true},
    }
  }
}
