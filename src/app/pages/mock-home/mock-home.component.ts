import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mock-home',
  templateUrl: './mock-home.component.html',
  styleUrls: ['./mock-home.component.scss']
})
export class MockHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRegister():void{
    this.router.navigate(['./parent-register']);
  }

  goToLogin():void{
    this.router.navigate(['./login'])
  }
  
}
