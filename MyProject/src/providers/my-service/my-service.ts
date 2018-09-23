import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyServiceProvider {
    constructor(public http: HttpClient) {
    }
    getData(){
        return this.http.get('https://project-android-app.herokuapp.com/getShops');
    }

}
