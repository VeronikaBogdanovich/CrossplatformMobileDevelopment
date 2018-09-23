webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MyServiceProvider = /** @class */ (function () {
    function MyServiceProvider(http) {
        this.http = http;
    }
    MyServiceProvider.prototype.getData = function () {
        return this.http.get('https://project-android-app.herokuapp.com/getShops');
    };
    MyServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MyServiceProvider);
    return MyServiceProvider;
}());

//# sourceMappingURL=my-service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorlist_authorlist__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorylist_categorylist__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postlist_postlist__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__postlist_postlist__["a" /* PostlistPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__categorylist_categorylist__["a" /* CategorylistPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__authorlist_authorlist__["a" /* AuthorlistPage */];
        this.index = navParams.get('index');
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex={{index}}>\n<ion-tab [root]="tab1Root" tabTitle="Магазины" tabIcon="ios-paper-outline"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Категории" tabIcon="ios-albums-outline"></ion-tab>\n<ion-tab [root]="tab3Root" tabTitle="Создатели" tabIcon="ios-contacts-outline"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AuthorlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthorlistPage = /** @class */ (function () {
    function AuthorlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AuthorlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthorlistPage');
    };
    AuthorlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authorlist',template:/*ion-inline-start:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/authorlist/authorlist.html"*/'<!--\n  Generated template for the AuthorlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="clmain">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Создатели</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 style="font-size: 30px; font-weight: bold; color: #283593; text-align: center ">Команда, предоставившая данное приложение:</h1>\n  <ion-list no-lines style="text-align: center">\n  <ion-item>\n    <ion-avatar item-left >\n      <img src="./assets/imgs/ben.png">\n    </ion-avatar>\n    <h2 style="font-size: 20px; font-weight: bolder; color: #3949ab">Бен - директор</h2>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-left >\n      <img src="./assets/imgs/max.png">\n    </ion-avatar>\n    <h2 style="font-size: 18px; color: #3949ab">Макс - маркетолог</h2>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-left>\n      <img src="./assets/imgs/mike.png">\n    </ion-avatar>\n    <h2 style="font-size: 18px; color: #3949ab"> Майк - программист</h2>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-left>\n      <img src="./assets/imgs/perry.png">\n    </ion-avatar>\n   <h2 style="font-size: 18px; color: #3949ab"> Перри - веб-дизайнер</h2>\n  </ion-item>\n  </ion-list>\n  <h2 style="color: #3953ab; text-align: center; font-size: 16px;">Мы в социальных сетях: </h2>\n  <h2 style="color: #3973ab; text-align: center;font-size: 16px; margin-top: -5px; font-weight: normal">vero_nika</h2>\n  <ion-item no-lines style="padding: 0px; margin-left: 5.5px;">\n    <ion-avatar item-left>\n      <a href="https://vk.com/">  <img src="./assets/imgs/vk.png" /></a>\n    </ion-avatar>\n      <ion-avatar item-left>\n          <a href="https://twitter.com/?lang=ru"> <img src="./assets/imgs/tw.jpg" /></a>\n      </ion-avatar>\n      <ion-avatar item-left>\n        <a href="https://www.instagram.com/"> <img src="./assets/imgs/inst.jpg" /></a>\n    </ion-avatar>\n      <ion-avatar item-left>\n        <a href="https://telegram.org/"> <img src="./assets/imgs/teleg.png" /></a>\n      </ion-avatar>\n      <ion-avatar item-left>\n        <a href="https://www.youtube.com/"><img src="./assets/imgs/yt.png" /></a>\n      </ion-avatar>\n    <ion-avatar item-left>\n       <a href="https://www.facebook.com/"> <img src="./assets/imgs/fb.png" /></a>\n    </ion-avatar>\n  </ion-item>\n  <h1 style="font-size: 25px; font-weight: bold; color: #283593; text-align: center; margin-top: 3px" >Всегда рады помочь!</h1>\n</ion-content>\n'/*ion-inline-end:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/authorlist/authorlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AuthorlistPage);
    return AuthorlistPage;
}());

//# sourceMappingURL=authorlist.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CategorylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategorylistPage = /** @class */ (function () {
    function CategorylistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.category = ['Магазины одежды', 'Обувные магазины', 'Ювелирные магазины', 'Книжные магазины', 'Магазины детской одежды',
            'Магазины косметики и парфюмерии', 'Магазины сувениров', 'Магазины бытовой техники', 'Художественные магазины'];
    }
    CategorylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategorylistPage');
    };
    CategorylistPage.prototype.goToCategory = function (c) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */], c);
    };
    CategorylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categorylist',template:/*ion-inline-start:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/categorylist/categorylist.html"*/'<!--\n  Generated template for the CategorylistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="clmain">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Категории</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let c of category" style="text-align: center; color: #283593; font-size: large" (click)="goToCategory(c)">{{c}}</ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/categorylist/categorylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CategorylistPage);
    return CategorylistPage;
}());

//# sourceMappingURL=categorylist.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shops */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more1_more1__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service1_service1__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the More1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var shops = /** @class */ (function () {
    function shops() {
    }
    return shops;
}());

var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());
var Time = /** @class */ (function () {
    function Time() {
    }
    return Time;
}());
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
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, ms) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ms = ms;
        this.fterm = '';
        this.more = __WEBPACK_IMPORTED_MODULE_2__more1_more1__["a" /* More1Page */];
        this.category = this.navParams.data;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ms.getData(this.category).subscribe(function (data) { _this.parray = data['' + _this.category + '']; });
    };
    CategoryPage.prototype.getItems = function (evnt) {
        this.fterm = evnt.target.value;
    };
    CategoryPage.prototype.showDetails = function (shops) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__more1_more1__["a" /* More1Page */], { shops: shops });
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="clmain">\n    <ion-title>По категории</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-card *ngFor="let s of parray | mypipe:fterm" (click)="showDetails(s)">\n      <label>\n        <ion-row>\n          <ion-card-content>\n            <ion-row>\n              <ion-col col-7>\n                <h1 style="font-weight: bold; font-size: 24px; color: #3945ab; text-align: center ">{{s.name}}</h1>\n                <h2 style="color: #3953ab; text-align: center">~{{s.comment.category}}~</h2>\n                <h2 style="color:  #3953ab; text-align: center">Рейтинг магазина: {{s.comment.rating}}</h2>\n              </ion-col>\n              <ion-col col-5>\n                <img src="{{s.img}}">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>\n                <h3 style="color: #3969ab; text-align: center"> Открывается:{{s.time.open}}</h3>\n              </ion-col>\n              <ion-col col-6>\n                <h3 style="color: #3969ab; text-align: center">Закрывается:{{s.time.close}}</h3>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-row>\n      </label>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service1_service1__["a" /* Service1Provider */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service1Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Service1Provider = /** @class */ (function () {
    function Service1Provider(http) {
        this.http = http;
    }
    Service1Provider.prototype.getData = function (i) {
        if (i == 'Магазины одежды')
            return this.http.get('https://project-android-app.herokuapp.com/getCloths');
        if (i == 'Обувные магазины')
            return this.http.get('https://project-android-app.herokuapp.com/getShoes');
        if (i == 'Ювелирные магазины')
            return this.http.get('https://project-android-app.herokuapp.com/getJev');
        if (i == 'Книжные магазины') {
            return this.http.get('https://project-android-app.herokuapp.com/getBooks');
            // this.callGET('getBooks', (res) => {
            //     console.log(res);
            //     return res ? res : {};
            // })
        }
        if (i == 'Магазины детской одежды')
            return this.http.get('https://project-android-app.herokuapp.com/getKids');
        if (i == 'Магазины косметики и парфюмерии')
            return this.http.get('https://project-android-app.herokuapp.com/getCosm');
        if (i == 'Магазины сувениров')
            return this.http.get('https://project-android-app.herokuapp.com/getSouv');
        if (i == 'Магазины бытовой техники')
            return this.http.get('https://project-android-app.herokuapp.com/getTech');
        if (i == 'Художественные магазины')
            return this.http.get('https://project-android-app.herokuapp.com/getHud');
    };
    Service1Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Service1Provider);
    return Service1Provider;
}());

//# sourceMappingURL=service1.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shops */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__more1_more1__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_my_service_my_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PostlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var shops = /** @class */ (function () {
    function shops() {
    }
    return shops;
}());

var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());
var Time = /** @class */ (function () {
    function Time() {
    }
    return Time;
}());
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
var PostlistPage = /** @class */ (function () {
    function PostlistPage(navCtrl, navParams, ms) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ms = ms;
        this.fterm = '';
        this.more = __WEBPACK_IMPORTED_MODULE_1__more1_more1__["a" /* More1Page */];
    }
    PostlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ms.getData().subscribe(function (data) { _this.parray = data['shops']; });
        //  this.ms.getData().subscribe(data=>console.log("!!!",data));
        //
        // this.ms.getData().subscribe(data=>
        //   {
        //   this.parray=data['shops'];
        //   console.log("!!!",data);
        //   });
    };
    PostlistPage.prototype.getItems = function (evnt) {
        this.fterm = evnt.target.value;
    };
    PostlistPage.prototype.showDetails = function (shops) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__more1_more1__["a" /* More1Page */], { shops: shops });
    };
    PostlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postlist',template:/*ion-inline-start:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/postlist/postlist.html"*/'<!--\n  Generated template for the PostlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="clmain">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Магазины</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <!--<ion-searchbar-->\n          <!--[(ngModel)]="myInput"-->\n          <!--[showCancelButton]="shouldShowCancel"-->\n          <!--(ionInput)="onInput($event)"-->\n          <!--(ionCancel)="onCancel($event)">-->\n  <!--</ion-searchbar>-->\n  <ion-list>\n    <ion-card *ngFor="let s of parray | mypipe:fterm" (click)="showDetails(s)">\n      <label>\n      <ion-row>\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-7>\n              <h1 style="font-weight: bold; font-size: 25px; color: #3945ab; text-align: center ">{{s.name}}</h1>\n              <h2 style="color: #3953ab; text-align: center">{{s.comment.category}}</h2>\n              <h2 style="color:  #3953ab; text-align: center">Рейтинг магазина: {{s.comment.rating}}</h2>\n            </ion-col>\n            <ion-col col-5>\n              <img src="{{s.img}}">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n          <ion-col col-6>\n            <h3 style="color: #3969ab; text-align: center"> Открывается:{{s.time.open}}</h3>\n          </ion-col>\n          <ion-col col-6>\n            <h3 style="color: #3969ab; text-align: center">Закрывается:{{s.time.close}}</h3>\n          </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-row>\n      </label>\n    </ion-card>\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/postlist/postlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_my_service_my_service__["a" /* MyServiceProvider */]])
    ], PostlistPage);
    return PostlistPage;
}());

//# sourceMappingURL=postlist.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_postlist_postlist__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_authorlist_authorlist__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_categorylist_categorylist__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_more1_more1__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_my_service_my_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_mypipe_mypipe__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_service1_service1__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_postlist_postlist__["a" /* PostlistPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_authorlist_authorlist__["a" /* AuthorlistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_categorylist_categorylist__["a" /* CategorylistPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_more1_more1__["a" /* More1Page */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_mypipe_mypipe__["a" /* MypipePipe */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_postlist_postlist__["a" /* PostlistPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_authorlist_authorlist__["a" /* AuthorlistPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_categorylist_categorylist__["a" /* CategorylistPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_more1_more1__["a" /* More1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_16__angular_common__["f" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_16__angular_common__["d" /* HashLocationStrategy */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_my_service_my_service__["a" /* MyServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_service1_service1__["a" /* Service1Provider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Магазины', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], index: '0', icon_name: 'ios-paper-outline' },
            { title: 'Категории', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], index: '1', icon_name: 'ios-albums-outline' },
            { title: 'Создатели', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], index: '2', icon_name: 'ios-contacts-outline' }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component, { index: page.index });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n\n    </ion-header>\n\n    <ion-content class="myBg">\n        <img src="./assets/imgs/shop.png" style="height: 28%; width: 100%"/>\n        <ion-list no-lines>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" color="clmain">\n                <ion-icon item-left [name]="p.icon_name" item-left color="light"></ion-icon>\n                {{p.title}}\n            </button>\n        </ion-list>\n        <img src="./assets/imgs/shops.png" />\n    </ion-content>\n</ion-menu>\n\n   <!--<ion-content class="myAu" >-->\n            <!--<ion-row><ion-list no-lines><button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" color="clmain">-->\n                <!--{{p.title}}-->\n   <!--</button></ion-list></ion-row>-->\n    <!--</ion-content>-->\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the MypipePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MypipePipe = /** @class */ (function () {
    // export class MypipePipe implements PipeTransform {
    //   /**
    //    * Takes a value and makes it lowercase.
    //    */
    //   transform(value: string, ...args) {
    //     return value.toLowerCase();
    //   }
    // }
    function MypipePipe() {
    }
    MypipePipe.prototype.transform = function (data, fterm) {
        if (fterm && fterm.trim() != '') {
            return data.filter(function (name) {
                return (name.name.toLowerCase().indexOf(fterm.toLowerCase()) > -1);
            });
        }
        return data;
    };
    MypipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'mypipe',
        })
        // export class MypipePipe implements PipeTransform {
        //   /**
        //    * Takes a value and makes it lowercase.
        //    */
        //   transform(value: string, ...args) {
        //     return value.toLowerCase();
        //   }
        // }
    ], MypipePipe);
    return MypipePipe;
}());

//# sourceMappingURL=mypipe.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shops */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return More1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_my_service_my_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the More1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var shops = /** @class */ (function () {
    function shops() {
    }
    return shops;
}());

var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());
var Time = /** @class */ (function () {
    function Time() {
    }
    return Time;
}());
var Adress = /** @class */ (function () {
    function Adress() {
    }
    return Adress;
}());
var Tel = /** @class */ (function () {
    function Tel() {
    }
    return Tel;
}());
var More1Page = /** @class */ (function () {
    function More1Page(navCtrl, navParams, p, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.p = p;
        this.alertCtrl = alertCtrl;
        this.s = this.navParams.data.shops;
        console.log(this.s);
        //console.log('anna');
    }
    More1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more1',template:/*ion-inline-start:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/more1/more1.html"*/'<!--\n  Generated template for the More1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="clmain">\n    <ion-title>Больше</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 style="text-align: center; font-weight: bold; font-size: 25px; color: #3945ab ">{{s.name}}</h1>\n   <h4 style="text-align: center;color: #3953ab; font-size: 16px; margin-top: -5px">{{s.comment.category}}</h4>\n    <img src="{{s.img}}" style=" width: 100%">\n  <ion-row>\n      <ion-col col-6><h6 style="color: #3969ab; text-align: center; font-size: 15px"> Открывается:{{s.time.open}}</h6></ion-col>\n      <ion-col col-6><h6 style="color: #3969ab; text-align: center; font-size: 15px">Закрывается:{{s.time.close}}</h6></ion-col>\n  </ion-row>\n      <h4 style="color:  #3950ab; text-align: center; margin-top: -5px; font-size: 16px">Рейтинг магазина: {{s.comment.rating}}</h4>\n  <h5 style="color: #3969ab;text-align: center">Сайт магазина: <a href="{{s.url}}">{{s.url}}</a> </h5>\n<h4 style="font-size: 18px; color: #283593; text-align: center">Адреса магазинов и телефоны:</h4>\n  <ion-row>\n  <ion-col col-6>\n    <h4 style="font-size: 16px; color: #283593">{{s.adress.first}}</h4>\n  </ion-col>\n  <ion-col col-6>\n    <h4 style="font-size: 16px; color: #3949ab; text-align: right ">{{s.tel.first}}</h4>\n  </ion-col>\n  <ion-col col-6>\n    <h4 style="font-size: 16px; color: #283593">{{s.adress.second}}</h4>\n  </ion-col>\n  <ion-col col-6>\n    <h4 style="font-size: 16px; color: #3949ab; text-align: right">{{s.tel.second}}</h4>\n  </ion-col>\n  <ion-col col-6>\n  <h4 style="font-size: 16px; color: #283593">{{s.adress.third}}</h4>\n  </ion-col>\n  <ion-col col-6>\n    <h4 style="font-size: 16px; color: #3949ab; text-align: right">{{s.tel.third}}</h4>\n  </ion-col>\n  <ion-col col-6>\n  <h4 style="font-size: 16px; color: #283593">{{s.adress.fourth}}</h4>\n  </ion-col>\n  <ion-col col-6>\n    <h4 style="font-size: 16px; color: #3949ab; text-align: right">{{s.tel.fourth}}</h4>\n  </ion-col>\n</ion-row>\n    <!--<label (click)="doAdd()" style="color: #283593; margin-left: 14%">-->\n      <!--<ion-icon name="add-circle" ></ion-icon>-->\n      <!--<b style="font-size: 18px">Добавить комментарий</b>-->\n    <!--</label>-->\n</ion-content>\n'/*ion-inline-end:"/Users/veronikabogdanovich/Documents/IT/MyProject/src/pages/more1/more1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_my_service_my_service__["a" /* MyServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], More1Page);
    return More1Page;
}());

//# sourceMappingURL=more1.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map