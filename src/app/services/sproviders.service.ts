import { Injectable, OnInit } from '@angular/core';
import {serviceprovider} from '../models/serviceprovider';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SprovidersService implements OnInit {
  url:string="http://localhost:3000/services"
  constructor(private httpclient:HttpClient){

  }
  ngOnInit(): void {
    this.getServices()
  }
//   serviceproviders:Array<serviceprovider> =[{
//     id:1,
//     name:'service1',
//     description:'description1',
//     Contact:9898989898,
//     Email:'s1@gmail.com',
//     Address:'address1',
//     Location:'xyz',
//     City:'hyderabad',
//     Zipcode:'676767',
//     website:'www.xyz.com'
//   }
// ]
// id=2;

//  addservice(s:serviceprovider){
//   s.id= this.id;
//   this.id++;
//   this.serviceproviders.push(s);
//  }

getServices(){
  return this.httpclient.get<serviceprovider[]>(this.url)
}
addService(data:any): Observable<any>{

 return this.httpclient.post<any>(this.url,data)
}
updateService(data:any,id:any): Observable<any>{
 return this.httpclient.put<any>(this.url+"/"+id,data)
}
deleteService(id:any){
 return this.httpclient.delete<serviceprovider[]>(this.url+"/"+id)

}

 
}
