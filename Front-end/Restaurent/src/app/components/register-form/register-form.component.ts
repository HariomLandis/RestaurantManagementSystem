import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  message:any;
  data:Customer=new Customer();
 
  constructor(private serv:LoginService,private route:Router) { }
  
  ngOnInit(): void {
  }
  save(){
    return this.serv.customerRegistration(this.data).subscribe(
      (res)=>{
        console.log(res);
      }
      ,(err)=>{
        console.log(err);
      }
    )
  }
  onSubmit(){
    this.save();
    console.log(this.data);
    //this.route.navigate(['login']);
  }
  }
