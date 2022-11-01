import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
update:any;
id:any;
profiledata: any;

constructor(private Appservice: AppserviceService) { 
    this.update = new FormGroup({
      id: new FormControl(),
      Fullname: new FormControl(),
      Emailid: new FormControl(),
      Gender: new FormControl(),
      Age: new FormControl(),
      AlterNo: new FormControl()
    });
  }

  ngOnInit(): void {
    this.profiledata = JSON.parse(localStorage.getItem('profile') || '{}');
    this.id = this.profiledata.id;
  }

  //update
  onSubmit() {
    this.Appservice.updateprofile(this.update.value);
    console.log(this.update.value);
  }

  //delete
  onDelete() {
    this.Appservice.deleteprofile(this.id);
  }
}
