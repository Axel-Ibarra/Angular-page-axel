import { variable } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MockHeaderService  {
    condition = true;

    userIsLogged(){
        if(this.condition == true){
            console.log(this.condition)
            return this.condition = false;
            
        }else{
            console.log(this.condition)
            return this.condition = true;
        }
    }
}