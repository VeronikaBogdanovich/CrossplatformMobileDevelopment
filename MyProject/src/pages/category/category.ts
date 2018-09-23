import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MyServiceProvider}  from "../../providers/my-service/my-service";
import {More1Page} from "../more1/more1";
import {Service1Provider} from "../../providers/service1/service1";

/**
 * Generated class for the More1Page page.
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
    selector: 'page-category',
    templateUrl: 'category.html',
})
export class CategoryPage {

    parray:  shops [];
    fterm: string = '';
    more = More1Page;
    category:string;
    constructor(public navCtrl: NavController, public navParams: NavParams, public ms:Service1Provider) {
        this.category=this.navParams.data;
    }
    ionViewDidLoad() {
        this.ms.getData(this.category).subscribe(data =>{ this.parray = data[''+this.category+'']});
    }
    getItems(evnt:any){
        this.fterm=evnt.target.value;
    }
    showDetails(shops){
        this.navCtrl.push(More1Page,{shops:shops});
    }
}
