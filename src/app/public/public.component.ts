import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendService } from "../services/backend.service";
import { BaseURL, User } from '../common/api.consts';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private backendService: BackendService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    })
  }

  registerUser(data) {
    console.log(data);
    this.backendService.postService(User.register,data)
      .subscribe((res:any) => {
        console.log(res);
        this.registerForm.reset(); 
        window.location.href='/login';      

      });
  }

}
