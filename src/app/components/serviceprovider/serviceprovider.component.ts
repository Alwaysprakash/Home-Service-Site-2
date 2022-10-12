import { Component, OnInit } from '@angular/core';
import { SprovidersService } from 'src/app/services/sproviders.service';
import {serviceprovider} from '../../models/serviceprovider'
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.component.html',
  styleUrls: ['./serviceprovider.component.css']
})
export class ServiceproviderComponent implements OnInit {
  edit=false;
  serviceId:any;
  allProviders:Array<serviceprovider>=[];
  // newService:serviceprovider={
  //   id:0,
  //   name:"",
  //   description:"",
  //   Contact:0,
  //   Email:"",
  //   Address:"",
  //   Location:"",
  //   City:"",
  //   Zipcode:"",
  //   website:""
  // }

  constructor(private providers:SprovidersService) { 
    this.getServiceProviders()

  }

  ngOnInit(): void {
  }
  getServiceProviders(){
    this.providers.getServices().subscribe(
      data=>{
        this.allProviders = data
      }
     )
  }

  addProvider(s:any){  
   if(s.valid){
    this.providers.addService(s.value).subscribe(
      (d)=>{
        s.reset();
        this.getServiceProviders();
        console.log(d)
      }
    )
   }
   else{
    alert("Fill all details")
  }  
  }
  
  editService(s:serviceprovider,form:any){
    this.edit=true;
    this.serviceId= s.id;
    form.setValue({
       "name": s.name,
       "description": s.description,
       "Contact": s.Contact,
       "Email": s.Email,
       "Address": s.Address,
       "Location": s.Location,
       "City": s.City,
       "Zipcode": s.Zipcode,
       "website": s.website
     
   });
 
 
 
   }
   deleteService(id:any){
    this.providers.deleteService(id).subscribe(
      ()=>{
        this.getServiceProviders()
      }
    )

  }
  

}
