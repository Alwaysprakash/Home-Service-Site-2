import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


user:User={
  id:0,
  name:"",
  email:"",
  mobile:"",
  password:"",
  usertype:""

}


msg:string = ""






  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
  }
   signUpUser(formData:NgForm){
    console.log("signupuser")
      console.log(formData.value)
      this.userService.signUpUser(formData.value).subscribe((data)=>
      {
        console.log("data from the server",data)
        this.msg="Sign Up Successful"
      })
  }

  

}
