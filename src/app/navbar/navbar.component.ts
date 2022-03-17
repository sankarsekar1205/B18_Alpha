import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../service/service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  userDetails: any;

  constructor(public headerService:HeaderService,private router:Router,) {
    this.headerService.userDetails.subscribe((user) => {
      this.userDetails = user;
      this.user= localStorage.getItem('username');
    });
    setTimeout(()=>{
      this.user= localStorage.getItem('username');
    },500)
   }

  ngOnInit(): void {
    this.user= localStorage.getItem('username');
  }
  logout(){
    localStorage.clear();
    // this.router.navigate(['/login'])
  }
  myOrders(){
    // this.router.navigate(['/myOrders'])
  }
}
