import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendService } from "../services/backend.service";
import { User } from '../common/api.consts';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Users: any[] = [];
  registerForm: FormGroup;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private backendService: BackendService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getUsers();
    this.createForm();
  }

  getUsers() {
    this.backendService.getService(User.getAllUsers)
      .subscribe((res: any) => {
        this.Users = res.users;
      });
  }


  createForm() {
    this.registerForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      userId:'',
    })
  }

  registerUser(data) {  
    this.backendService.postService(User.register, data)
      .subscribe((res: any) => {
        this.registerForm.reset();
        this.getUsers();
      });
  }

  addNewUser() {
    this.isEdit = false;
    this.registerForm.reset();
  }


  editUser(data) {
    this.isEdit = true;
    console.log(data);
    this.backendService.getService(User.getuser, data)
      .subscribe((res: any) => {
        this.registerForm.patchValue(res, { onlySelf: true });
      })
  }

  updateUser(data) {
    console.log(data);    
    this.backendService.putService(User.getuser, data,  data.userId)
      .subscribe((res: any) => {
        this.getUsers();
      })
    
  }

  deleteUser(data) {
    this.backendService.deleteService(User.getuser, data)
      .subscribe((res: any) => {
        this.getUsers();
        this.registerForm.reset();
        this.isEdit = false;      
      });
  }
}
