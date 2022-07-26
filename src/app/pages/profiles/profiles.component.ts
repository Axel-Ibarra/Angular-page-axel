import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Profile } from './interfaces/profile.interface';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  validation = true;

  profiles!: Profile[];
  constructor(private ProfileSvc: ProfileService) { }

  async ngOnInit(): Promise<any> {
    return await this.ProfileSvc.getProfiles()
    .pipe(
      tap( (profiles: Profile[]) => this.profiles = profiles)
    )
    .subscribe();
  }
  
  selectSection(event:any){
    console.log(event)
    return this.validation = event
  }

  comments(){
return this.validation = false
  }

  profile(){
    return this.validation = true
  }

}
