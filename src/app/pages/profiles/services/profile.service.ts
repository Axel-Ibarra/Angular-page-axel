import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Profile } from "../interfaces/profile.interface";

@Injectable({
    providedIn: 'root'
})

export class ProfileService {
    constructor (private http: HttpClient){}
    private apiURL = 'https://localhost:7289/api';

    getProfiles(): Observable<Profile[]>{
        return this.http.get<Profile[]>(this.apiURL+"/BabySitter");
    }

    postProfile(profile: Profile): Observable<any>{
        const headers = {'Content-Type':'application/json'}
        const body = JSON.stringify(profile);
        console.log(body);
        return this.http.post(this.apiURL + "/BabySitter",body,{'headers':headers});
    }

}