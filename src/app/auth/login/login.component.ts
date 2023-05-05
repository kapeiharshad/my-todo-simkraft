import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm:FormGroup

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      userName:['',[Validators.required,Validators.email]],
      password:['',[Validators.minLength(6), Validators.maxLength(10)]]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("from profileForm:::::::",this.profileForm)
  }

}
