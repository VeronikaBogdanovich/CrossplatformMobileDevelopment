import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {PostlistPage} from "../pages/postlist/postlist";
import {AuthorlistPage} from "../pages/authorlist/authorlist";
import {CategorylistPage} from "../pages/categorylist/categorylist";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    PostlistPage,
    AuthorlistPage,
    CategorylistPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostlistPage,
    AuthorlistPage,
    CategorylistPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
