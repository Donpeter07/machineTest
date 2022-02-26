import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno =""
  pswd =""
  
  


  constructor(private router:Router,private ds:DataserviceService) { }

  ngOnInit(): void {
  }


  login(){

    var acno = this.acno
    var password = this.pswd

     let result = this.ds.login(acno,password)

      if(result){
        alert("Login Successful")
         this.router.navigateByUrl("dashboard")

      }
     


  }

}
