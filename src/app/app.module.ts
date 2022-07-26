import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { MdbModule } from './mdb.module';
import { MaterialModule } from './material.module';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentsRegisterComponent } from './pages/parent-register/parent-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilesComponent,
    RegisterComponent,
    ParentsRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,     
    MdbModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
