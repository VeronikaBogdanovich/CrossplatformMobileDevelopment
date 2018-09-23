import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {MyServiceProvider}  from "../../providers/my-service/my-service";

/**
 * Generated class for the More1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class shops

{
    id: number;
    name: string;

    // image: string;
    category: string;
    // label: string;
    // price: number;
    // description: string;
    adress: Adress;
    tel: Tel;
    url: string;
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
class Adress {
    first: string;
    second: string;
    third: string;
    fourth: string;
}
class Tel{
    first: string;
    second: string;
    third: string;
    fourth: string;
}

@Component({
  selector: 'page-more1',
  templateUrl: 'more1.html',
})
export class More1Page {

    s:shops;
    constructor(public navCtrl: NavController, public navParams: NavParams, private p:MyServiceProvider, public alertCtrl: AlertController) {
         this.s = this.navParams.data.shops;
        console.log(this.s);
        //console.log('anna');
    }
//     doAdd() {
// //string = prompt("Insert new meal");
// //this.items.push(newItem);
//         let prompt = this.alertCtrl.create({
//             message: "Enter a name for meal",
//             inputs: [
//                 {
//                     name: 'meal',
//                     placeholder: 'name'
//                 },
//             ],
//             buttons: [
//                 {
//                     text: 'Cancel',
//                     handler: data => {
//                         console.log('Cancel clicked');
//                     }
//                 },
//                 {
//                     text: 'Save',
//                     handler: data => {
//                         if ( data.s != "") {
//                             this.s.comment.push(data.s);
//                             // console.log(data.meal);
//                         }
//                     }
//                 }
//             ]
//         });
//         prompt.present();
//     }
//     doAdd(itm){
//         let newItem: string = prompt("Введите ваш комментарий:");
//         this.s.push(newItem);
//         itm.close();
//     }
}
