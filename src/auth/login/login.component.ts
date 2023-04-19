import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm:any

  constructor() {
    this.profileForm = new FormGroup({                  
      username: new FormControl(''),
      password: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("from profileForm:::::::",this.profileForm)
  }

}
