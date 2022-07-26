import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { RegisterComponent } from './pages/register/register.component';
import { ParentsRegisterComponent } from './pages/parent-register/parent-register.component';
import { BabysitterProfileComponent } from './pages/profiles/babysitter-profile/babysitter-profile.component';
import { ParentProfileComponent } from './pages/profiles/parent-profile/parent-profile.component';
import { MockHomeComponent } from './pages/mock-home/mock-home.component';

const routes: Routes = [
  {path: '', redirectTo: '/mockHome', pathMatch:'full'},
  {path: 'landpage', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'parent-register', component: ParentsRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profiles', component: ProfilesComponent},
  {path: 'babysitterProfile', component: BabysitterProfileComponent},
  {path: 'parentProfile', component: ParentProfileComponent},
  {path: 'mockHome', component: MockHomeComponent},
  {path: '**', redirectTo: 'landpage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
