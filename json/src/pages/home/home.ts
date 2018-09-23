import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyServiceProvider } from '../../providers/my-service/my-service';
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
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
parray: Person[];
  constructor(public navCtrl: NavController, public ms: MyServiceProvider) {
    }
    ionViewDidLoad()
{
  this.ms.getData().subscribe(data=>this.parray=data['dishes']);
    //this.ms.getData().subscribe(data=>console.log("!!!",data));

    // this.ms.getData().subscribe(data=>
    //   {
    //   this.parray=data['persons'];
    //   console.log("!!!",data);
    //   });
}
}
