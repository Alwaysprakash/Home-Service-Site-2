import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://localhost:3000/User"

  constructor(private httpclient:HttpClient) { 

  }

  signUpUser(data:User): Observable<User>{
    return this.httpclient.post<User>(this.url,data)
  }

  loginUser(data:User): Observable<User>{
    let modifiedurl = `${this.url}?email=${data.email}&password=${data.password}&usertype=${data.usertype}`
    console.log(modifiedurl)
    return this.httpclient.get<User>(this.url)

  }
}


