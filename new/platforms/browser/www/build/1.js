webpackJsonp([1],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSearchPageModule", function() { return ModalSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_search__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalSearchPageModule = /** @class */ (function () {
    function ModalSearchPageModule() {
    }
    ModalSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_search__["a" /* ModalSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_search__["a" /* ModalSearchPage */]),
            ],
        })
    ], ModalSearchPageModule);
    return ModalSearchPageModule;
}());

//# sourceMappingURL=modal-search.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__);
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
 * Generated class for the ModalSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalSearchPage = /** @class */ (function () {
    function ModalSearchPage(navParams, view, newHttp, modal, alertCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.newHttp = newHttp;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.show = 0;
        this.resItems = [];
        this.itemsEx = this.navParams.get("data");
    }
    ModalSearchPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.itemsEx = this.navParams.get("data");
        this.newHttp.get("assets/data/univs.json").subscribe(function (data) {
            _this.items = data;
            //console.log(this.resData);
        });
    };
    ModalSearchPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalSearchPage.prototype.f = function () {
        if (parseInt(this.a) > 0 && parseInt(this.b) > 0 && parseInt(this.c) > 0) {
            this.score = parseInt(this.a) + parseInt(this.b) + parseInt(this.c) + parseInt(this.d);
            this.show = 1;
            this.getItems();
        }
        else {
            this.show = 2;
        }
    };
    ModalSearchPage.prototype.calcCount = function () {
        var k = 0;
        if (this.resItems) {
            for (var _i = 0, _a = this.resItems; _i < _a.length; _i++) {
                var fac = _a[_i];
                for (var _b = 0, _c = fac.specs; _b < _c.length; _b++) {
                    var spec = _c[_b];
                    if (spec.passing_score.free <= this.score) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    ModalSearchPage.prototype.getItems = function () {
        var _this = this;
        this.newHttp.get("assets/data/univs.json").subscribe(function (data) {
            _this.items = data;
        });
        if (this.items) {
            this.items = this.items.filter(function (val) {
                return val.faculties;
            });
            this.resItems = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var i = _a[_i];
                var tmp = i.faculties.filter(function (val) {
                    if (val.passing_score.free <= _this.score) {
                        //console.log(this.score);
                        for (var _i = 0, _a = _this.itemsEx; _i < _a.length; _i++) {
                            var ex = _a[_i];
                            if (val.exams.indexOf(ex.toLowerCase()) < 0) {
                                return false;
                            }
                        }
                        return true;
                    }
                });
                if (tmp && tmp.length > 0) {
                    for (var i_1 in tmp) {
                        this.resItems.push(tmp[i_1]);
                    }
                }
            }
        }
    };
    ModalSearchPage.prototype.openModal = function (faculty, req) {
        var myModal = this.modal.create("ModalPage", { data: faculty, req: req });
        myModal.present();
    };
    ModalSearchPage.prototype.showDescription = function (spec) {
        var myModal = this.modal.create("ModalPageDescriptionPage", { data: spec });
        myModal.present();
    };
    ModalSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-search',template:/*ion-inline-start:"/Users/veronikabogdanovich/Documents/IT/new/src/pages/modal-search/modal-search.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Поиск</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        Закрыть\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <div class="bar bar-header bar-balanced">\n        <h1 class="title">Калькулятор</h1>\n      </div>\n    </ion-list-header>\n    <ion-item>\n      <ion-label stacked>{{ itemsEx[0] }}</ion-label>\n      <ion-input type="text" [(ngModel)]="a"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>{{ itemsEx[1] }}</ion-label>\n      <ion-input type="text" [(ngModel)]="b"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>{{ itemsEx[2] }}</ion-label>\n      <ion-input type="text" [(ngModel)]="c"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Средний балл Аттестата*100</ion-label>\n      <ion-input type="text" [(ngModel)]="d"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n    <button ion-button outline (click)="f()">подобрать</button>\n    <ion-list *ngIf="show == 1">\n      <ion-list-header>\n        <div class="bar bar-header bar-balanced">\n          <h5 class="title">Ваш результат: {{ score }}</h5>\n          <h3 *ngIf="calcCount()">Ничего не найдено</h3>\n        </div>\n      </ion-list-header>\n      <ion-list *ngFor="let fac of resItems">\n\n        <div *ngFor="let spec of fac.specs">\n          <ion-card  *ngIf="spec.passing_score.free <= score">\n            <ion-card-content >\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-10>\n                    {{ spec.spec_name }}\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-item>\n                <span>\n                Бюджетная форма:\n                <ion-badge item-end>{{ spec.passing_score.free}}</ion-badge>\n                </span>\n                      <br>\n                      <span>\n                Платная форма:\n                <ion-badge item-end>{{ spec.passing_score.payed}}</ion-badge>\n                </span>\n\n              </ion-item>\n              <ion-item>\n                <a (click)="showDescription(spec)">Подробнее</a>\n              </ion-item>\n\n              <!-- Add card content here! -->\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-list>\n    </ion-list>\n    <ion-list *ngIf="show == 2">\n      <ion-list-header>\n        <div class="bar bar-header bar-balanced">\n          <h5 class="title">Error</h5>\n        </div>\n      </ion-list-header>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/veronikabogdanovich/Documents/IT/new/src/pages/modal-search/modal-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ModalSearchPage);
    return ModalSearchPage;
}());

//# sourceMappingURL=modal-search.js.map

/***/ })

});
//# sourceMappingURL=1.js.map