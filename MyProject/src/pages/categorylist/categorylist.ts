import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {CategoryPage} from "../category/category";

/**
 * Generated class for the CategorylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
    selector: 'page-categorylist',
    templateUrl: 'categorylist.html',
})
export class CategorylistPage {
    category: string[] = ['Магазины одежды', 'Обувные магазины', 'Ювелирные магазины', 'Книжные магазины', 'Магазины детской одежды',
        'Магазины косметики и парфюмерии', 'Магазины сувениров', 'Магазины бытовой техники', 'Художественные магазины'];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CategorylistPage');
    }

    goToCategory(c: string) {
        this.navCtrl.push(CategoryPage, c)
    }
}
