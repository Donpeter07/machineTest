import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  currentUserName:any
  cacno:any
   
  users:any = {
    1000:{acno:1000,password:"1000"},
    1001:{acno:1001,password:"1001"},
    1002:{acno:1002,password:"1002"}

  }


  constructor() { }


  login(acno:any,password:any){
    let database = this.users

     if(acno in database){

       if(password == database[acno]["password"]){
        return true
       }
    
      
       else{
         alert("incorrect password")
         return false
       }

     }
     else{
       alert("invalid acc number")
       return false
     }

  }

}
