import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import {AuthorlistPage} from "../authorlist/authorlist";
import {CategorylistPage} from "../categorylist/categorylist";
import {PostlistPage} from "../postlist/postlist";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    index: string;
  tab1Root = PostlistPage;
  tab2Root = CategorylistPage;
  tab3Root = AuthorlistPage;

  constructor(public navParams: NavParams) {
      this.index = navParams.get('index');
  }
}
