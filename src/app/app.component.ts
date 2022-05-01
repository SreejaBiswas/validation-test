import { Component } from '@angular/core';

import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  loginform = new FormGroup({

    uname1: new FormControl('',[Validators.required,Validators.minLength(3)]),
    uname2: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    body: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    contact_no: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])

  });

  get form(){
    return this.loginform.controls;


  }
  submit(){
    console.log(this.loginform.value);
  }
}



  



  
    
 




