import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin:any;
  signindetails:any;
  logindata:any;
  constructor(private router:Router,public formbuilder:FormBuilder, private Appservice:AppserviceService) { 
     
   this.signin = new  FormGroup
   ({
    Name: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Password: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
    this.signindetails = JSON.parse(localStorage.getItem('form') || '');
  }
  get Name(): any {
    return this.signin.get('Name');
  }

  get Email(): any {
    return this.signin.get('Email');
  }
  get Password(): any {
    return this.signin.get('Password');
  }

  onSubmit(){
    console.log(this.signindetails)
    if (this.signin.invalid) 
    {
      for (const control of Object.keys(this.signin.controls)) 
      {
        this.signin.controls[control].markAsTouched();
      }
      return;
  }
  let logindata = []
  logindata.push(this.signin.value);
  this.router.navigate(['update']);
  console.log("signin",logindata);

  this.Appservice.Checklogin(logindata);
}
}