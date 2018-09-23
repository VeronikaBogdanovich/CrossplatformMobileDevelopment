import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    inputtext:string;
    key:string= ' ';
    data:any[]=[];
  constructor(public navCtrl: NavController, private storage: Storage) {
      // Or to get a key/value pair
      this.storage.get(this.key).then((val) => {
          this.data.push(val);
      });
  }
    saveDate(){
        // set a key/value
        this.data.push(this.inputtext);
        this.storage.set(this.key, this.data);}


}
