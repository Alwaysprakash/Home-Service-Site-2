import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string=""
  user:User={
    id:0,
    name:"",
    email:"",
    mobile:"",
    password:"",
    usertype:""
  
  }

  constructor(private userService:UserService,private _router: Router) { }

  ngOnInit(): void {
  }
  loginUser(data:NgForm){
    this.userService.loginUser(data.value).subscribe((response: any)=>{
      console.log(response);
      this._router.navigate(['servicename'])
      this.msg="Login Successful";
      this._router.navigate(['service'])
    })
   
  }

}
