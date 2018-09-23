import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, NavParams, Platform} from 'ionic-angular';
import {MyServiceProvider} from "../../providers/my-service/my-service";
import {MyApp} from "../../app/app.component";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the PostlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class Person {
    id: number;
    name: string;
    image: string;
    category: number;
    label: string;
    price: number;
    description: string;
    comment: Comment;
}
class Comment {
    rating:number;
    text:string;
    author:string; }

@Component({
  selector: 'page-postlist',
  templateUrl: 'postlist.html',
})
export class PostlistPage {
    parray: Person[];

    constructor(public navCtrl: NavController, public navParams: NavParams, public ms: MyServiceProvider) {
    }

    // ionViewDidLoad() {
    //     this.ms.getData().subscribe(data => this.parray = data['dishes']);
    //     // this.ms.getData().subscribe(data=>console.log("!!!",data));
    //     //
    //     // this.ms.getData().subscribe(data=>
    //     //   {
    //     //   this.parray=data['pages'];
    //     //   console.log("!!!",data);
    //     //   });
    // }

}
