import { Component, OnInit } from '@angular/core';
import { MockHeaderService } from './services/mockHeader.service.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private MockSvc: MockHeaderService) { }

  ngOnInit(): void {
  }

  // condition = true;

  isLogged():void{
      console.log("presiono el boton uwu")
      this.MockSvc.userIsLogged()
  }
  
}
