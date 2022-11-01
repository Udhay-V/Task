import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  nodeApiUrl = "http://localhost:3400/api/task/";
  form:any;
  constructor(private router: Router, private http: HttpClient) { }

//create
createprofile(profile: any) {
    const header = { headers: new HttpHeaders({'content-type': 'application/json'}) };
    console.log("called", profile)
    var result = this.http.post<any>(this.nodeApiUrl + 'create', profile, header).subscribe(task => {
    console.log(task);

      if (task.success) {
        localStorage.setItem('profile', JSON.stringify(task.profile));
        alert("Registered succefully")
        this.router.navigate(['signin']);
      }
      else {
        alert("Request failed")
      }
    });
  }
    
  //checklogin
  Checklogin(logindata: any) {
    const header = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
    console.log("called", logindata[0])
    var result = this.http.post<any>(this.nodeApiUrl + 'login', logindata[0], header).subscribe(task => {
      console.log(task);

      if (task.profile) {
        localStorage.setItem('profile', JSON.stringify(task.profile));
        this.router.navigate(['update']);
      }
      else {
        console.log('enter valid Email & password');
      }
      console.log(result);
      return task
    });
    console.log("call", result)
  }

    
  //update
  updateprofile(profiledata: any) {
    const header = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
    console.log("called", profiledata)
    var result = this.http.post<any>(this.nodeApiUrl + 'update', profiledata, header).subscribe(task => {
      console.log(task);
      console.log(result);
      return task
    });
    console.log("call", result)
  }

   //delete
   deleteprofile(id: any) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { id: id },
    };
    var result = this.http.delete(this.nodeApiUrl + 'delete', options).subscribe(task => {
      console.log(task);
      console.log(result);
      return task
    });
    console.log("call", result)
  
  }
}


