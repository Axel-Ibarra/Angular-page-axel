import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
/* import * as EventEmitter from 'events'; */
import { ProfileService } from '../profiles/services/profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  isBabysitter = false;
  isParent = true;
  gender = '';
  workTime = '';
  selectedFile!: File;
  base64textString!: any;
  profile = {
    firstName:'',
    lastName:'',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
    gender:'',
    dateOfBirth:'',
    price: Number,
    workTime:'',
    phoneNumber: ''
  }

  /* @Output() registerClick = new EventEmitter<Profile>(); */
  constructor(private ProfileSvc: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  register({value: formData}: NgForm):any{
    const data = {
      ...formData,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      dateOfBirth: formData.dateOfBirth,
      price: formData.price,
      phoneNumber: formData.phoneNumber,
      image: this.base64textString,
      gender: this.gender,
      workTime: this.workTime
    }
    
    if(formData.password != formData.confirmPassword){
      return console.error("Las contraseñas no son las mismas!");
      
    }else{
      this.ProfileSvc.postProfile(data).subscribe(data => {
        console.log(data)
      });
    }

  }

  selectGender(event:any){
    console.log(event)
    return this.gender = event
  }

  selectHours(event:any){
    console.log(event)
    return this.workTime = event
  }

  passwordComparison(value: any, value2: any, event:any){
    if(value != value2)
      return alert("not same paswords")
    
      return this.register = event;
    
  }


  goToProfiles():void{
    this.router.navigate(['./profiles']);
  }

  babysitterOrParent(value:boolean):void{
    this.isBabysitter = value;

    console.log(this.isBabysitter);
  }

  selectFile(event:any){
    var files = event.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this.handleFile.bind(this);

      reader.readAsBinaryString(file);
  }
  }
  handleFile(event:any) {
    var binaryString = event.target.result;
          this.base64textString= btoa(binaryString);
          console.log(btoa(binaryString));
  }
}
