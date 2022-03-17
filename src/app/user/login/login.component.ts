import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/service/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  login: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router, public headerService:HeaderService) {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }

  ngOnInit(): void {

  }
  get f() { return this.login.controls; }
  onSubmitForm(data: any) {
    console.log(data)
    this.http.post('https://bookcart.azurewebsites.net/api/login', data).subscribe((res: any) => {
      localStorage.setItem('authToken', res.token);
      localStorage.setItem('userId', res.userDetails.userId);
      localStorage.setItem('username', res.userDetails.username);
      this.headerService.userDetails.next({
        name: res.userDetails.username,
    });
      this.router.navigate(['/dashboard'])
    })
  }
  register(){
    this.router.navigate(['/register'])
  }
//  hide ='true' 
}
