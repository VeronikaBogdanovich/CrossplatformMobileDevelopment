webpackJsonp([0],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_filter__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_filter__);
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
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navParams, view, modal) {
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
    }
    ModalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.data = this.navParams.get("data");
        console.log(this.data);
        this.req = this.navParams.get("req");
        console.log(this.req);
        if (this.data && this.req && this.req.length > 0) {
            this.data.specs = this.data.specs.filter(function (data) {
                if (data.spec_name.toLowerCase().indexOf(_this.req.toLowerCase()) > -1)
                    return true;
            });
        }
    };
    ModalPage.prototype.showDescription = function (spec) {
        var myModal = this.modal.create("ModalPageDescriptionPage", { data: spec });
        myModal.present();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/veronikabogdanovich/Documents/IT/new/src/pages/modal/modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{data.fac_name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        Закрыть\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        цт:\n      </ion-col>\n      <ion-col col-5>\n        <ion-row *ngFor="let ex of data.exams">\n          {{ ex }}\n        </ion-row>\n      </ion-col>\n        <ion-col col-5>\n            Бюджет:   <ion-badge item-end>{{ data.passing_score.free }}</ion-badge>\n          <br><br><br>\n            Платное:   <ion-badge item-end>{{ data.passing_score.payed }}</ion-badge>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-item>\n      <ion-title>\n        Специальности:\n      </ion-title>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-card *ngFor="let spec of data.specs">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-12>\n              {{ spec.spec_name }}\n            </ion-col>\n\n            </ion-row>\n        </ion-grid>\n        <ion-item>\n          <span>\n          Бюджетная форма:\n          <ion-badge item-end>{{ spec.passing_score.free}}</ion-badge>\n          </span>\n          <br>\n          <span>\n          Платная форма:\n          <ion-badge item-end>{{ spec.passing_score.payed}}</ion-badge>\n          </span>\n        </ion-item>\n        <ion-item>\n          <a (click)="showDescription(spec)">Подробнее</a>\n        </ion-item>\n        <!-- Add card content here! -->\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/veronikabogdanovich/Documents/IT/new/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map