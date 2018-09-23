import {Component, ViewChild} from '@angular/core';
import {More1Page} from "../more1/more1";
import {MyApp} from "../../app/app.component";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {TabsPage} from "../tabs/tabs";
import {Nav, NavController, NavParams, Platform} from 'ionic-angular';
import {MyServiceProvider} from "../../providers/my-service/my-service";


/**
 * Generated class for the PostlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class shops {
    id: number;
    name: string;

    // image: string;
    // category: number;
    // label: string;
    // price: number;
    // description: string;
    // adress: Adress;
    // tel: Tel;
    //url: string;
    comment: Comment;
    time: Time;
}
 class Comment {
     rating:number;
    category: string;
}
class Time {
    open: string;
    close : string;
}
// class Adress {
//     1: string;
//     2: string;
//     3: string;
//     4: string;
// }
// class Tel{
//     1: string;
//     2: string;
//     3: string;
//     4: string;
// }


@Component({
  selector: 'page-postlist',
  templateUrl: 'postlist.html',
})
export class PostlistPage {
    parray:  shops [];
    fterm: string = '';
    more = More1Page;



    constructor(public navCtrl: NavController, public navParams: NavParams, public ms: MyServiceProvider) {
    }

    ionViewDidLoad() {
        this.ms.getData().subscribe(data =>{ this.parray = data['shops']});
        //  this.ms.getData().subscribe(data=>console.log("!!!",data));
        //
        // this.ms.getData().subscribe(data=>
        //   {
        //   this.parray=data['shops'];
        //   console.log("!!!",data);
        //   });
    }
    getItems(evnt:any){
        this.fterm=evnt.target.value;
    }
    showDetails(shops){
            this.navCtrl.push(More1Page,{shops:shops});
    }
}
