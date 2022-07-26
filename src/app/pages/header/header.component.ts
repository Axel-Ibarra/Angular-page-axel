import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockHeaderService } from '../login/services/mockHeader.service.';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  variable = true;

  constructor(private router: Router, private MockSvc: MockHeaderService) { }

  ngOnInit(): void {
  }

  goHome():void{
    this.router.navigate(['./landpage']);
  }

  change(){
    return this.MockSvc.userIsLogged();
  }

}
