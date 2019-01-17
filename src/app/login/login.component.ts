import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendService } from "../services/backend.service";
import { User, AuthConstants } from '../common/api.consts';
import { Routes, RouterModule, Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private backendService: BackendService,
    private route:Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    })
  }

  login(data) {
    console.log(data);
    this.backendService.postService(User.login, data)
      .subscribe((res: any) => {       
        if (res) {
          console.log(res);
          
          localStorage.setItem(AuthConstants.authTokenKey, res.authToken);
          this.loginForm.reset();
          window.location.href="/dashboard"
        }
      },
        err => { console.log("error"); }
      );
  }

}
