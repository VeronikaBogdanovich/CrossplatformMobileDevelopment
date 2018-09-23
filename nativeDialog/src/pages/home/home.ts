import { Component } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController,public dialogs: Dialogs) {
        // this.dialogs.prompt('Hello world','Dialog',['Ok','Cancel'],'')
        //     .then(theResult  => {if ((theResult.buttonIndex==1)&& (theResult.input1 !== ''))
        //         {this.tasks.push({title: theResult.input1,status: 'open'});
        //         }
        //         }
        //     )
        this.dialogs.alert('Hello world','Dialog')
            .then(() => console.log('Dialog dismissed'))
            .catch(e => console.log('Error displaying dialog', e));
    }
}

