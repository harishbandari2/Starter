import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClient,HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { BackendService } from "./services/backend.service";
import { AuthGuard } from "./services/auth.guard";
import { AccountContext } from "./services/account.context";
import { AccountService } from "./services/account.service";
import { AuthLoginGuard } from "./services/auth.login.guard";
import { JwtInterceptor } from "./services/jwt.interceptor";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    DashboardComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendService, AuthGuard,AccountContext,AccountService,AuthLoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
