import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {PostlistPage} from "../pages/postlist/postlist";
import {AuthorlistPage} from "../pages/authorlist/authorlist";
import {CategorylistPage} from "../pages/categorylist/categorylist";
import {TabsPage} from '../pages/tabs/tabs';
import {More1Page} from '../pages/more1/more1';
import {CategoryPage} from "../pages/category/category";


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {MyServiceProvider} from '../providers/my-service/my-service';
import {MypipePipe} from "../pipes/mypipe/mypipe";
import {Service1Provider} from '../providers/service1/service1';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


@NgModule({
    declarations: [
        MyApp, //  какой-то пароль - veronika
        PostlistPage,
        AuthorlistPage,
        CategorylistPage,
        TabsPage,
        More1Page,
        MypipePipe,
        CategoryPage
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
        TabsPage,
        More1Page,
        CategoryPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        MyServiceProvider,
        Service1Provider
    ]
})
export class AppModule {
}
