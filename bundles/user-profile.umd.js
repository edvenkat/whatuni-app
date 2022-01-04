(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/angular'), require('@angular/router'), require('@angular/common'), require('@angular/forms'), require('@awesome-cordova-plugins/open-native-settings/ngx'), require('@awesome-cordova-plugins/diagnostic/ngx'), require('@awesome-cordova-plugins/in-app-browser/ngx')) :
    typeof define === 'function' && define.amd ? define('user-profile', ['exports', '@angular/core', '@ionic/angular', '@angular/router', '@angular/common', '@angular/forms', '@awesome-cordova-plugins/open-native-settings/ngx', '@awesome-cordova-plugins/diagnostic/ngx', '@awesome-cordova-plugins/in-app-browser/ngx'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["user-profile"] = {}, global.ng.core, global.i1, global.ng.router, global.ng.common, global.ng.forms, global.i1$3, global.i2, global.i3$1));
})(this, (function (exports, i0, i1, i1$2, i3, i1$1, i1$3, i2, i3$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);

    var UserProfileService = /** @class */ (function () {
        function UserProfileService() {
        }
        return UserProfileService;
    }());
    UserProfileService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfileService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UserProfileService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfileService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfileService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var UserProfileComponent = /** @class */ (function () {
        function UserProfileComponent() {
        }
        UserProfileComponent.prototype.ngOnInit = function () {
        };
        return UserProfileComponent;
    }());
    UserProfileComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfileComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    UserProfileComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserProfileComponent, selector: "lib-user-profile", ngImport: i0__namespace, template: "\n  <ion-app>\n  <ion-router-outlet></ion-router-outlet>\n\n</ion-app>\n  ", isInline: true, components: [{ type: i1__namespace.IonApp, selector: "ion-app" }], directives: [{ type: i1__namespace.IonRouterOutlet, selector: "ion-router-outlet", inputs: ["animated", "animation", "swipeGesture"], outputs: ["stackEvents", "activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfileComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-user-profile',
                        template: "\n  <ion-app>\n  <ion-router-outlet></ion-router-outlet>\n\n</ion-app>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var PersonalDetailPage = /** @class */ (function () {
        function PersonalDetailPage(formBuilder) {
            this.formBuilder = formBuilder;
            this.errMsgs = [];
            this.profileForm = this.formBuilder.group({
                firstName: ['', [i1$1.Validators.required]],
                lastName: ['', [i1$1.Validators.required]],
            });
        }
        PersonalDetailPage.prototype.ngOnInit = function () {
        };
        PersonalDetailPage.prototype.save = function () {
            var _a, _b;
            var errMsgs = [];
            if (!((_a = this.profileForm.get('firstName')) === null || _a === void 0 ? void 0 : _a.valid)) {
                errMsgs.push('First name is required');
            }
            if (!((_b = this.profileForm.get('lastName')) === null || _b === void 0 ? void 0 : _b.valid)) {
                errMsgs.push('Last name is required');
            }
            this.errMsgs = errMsgs;
        };
        return PersonalDetailPage;
    }());
    PersonalDetailPage.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPage, deps: [{ token: i1__namespace$1.FormBuilder }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PersonalDetailPage.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: PersonalDetailPage, selector: "app-personal-detail", ngImport: i0__namespace, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Personal details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"modal_done\" (click)=\"save()\">Save</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det\" mode=ios>\r\n  <div class=\"skeleton_cnt\">\r\n\r\n\r\n    <!-------Error Message Container--------->\r\n    <ng-container *ngFor=\"let msg of errMsgs\">\r\n      <div class=\"err_skeleton\">\r\n        <div class=\"skel_row\">\r\n          <ion-img src=\"assets/icon/error_alert.svg\"></ion-img>\r\n          <ion-label>Error - {{msg}}</ion-label>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n  <form [formGroup]=\"profileForm\">\r\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\"><span class=\"input_label\">First name</span></ion-label>\r\n        <ion-input value=\"Neil\" formControlName=\"firstName\"></ion-input>\r\n        <ion-img class=\"delete\" src=\"assets/icon/edit_cross_icon.svg\"></ion-img>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\"><span class=\"input_label\">Last name</span></ion-label>\r\n        <ion-input value=\"Burgess\" formControlName=\"lastName\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\"><span class=\"input_label\">Email</span></ion-label>\r\n        <ion-input value=\"Neil.burgess@idp.com\" readonly></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\"><span class=\"input_label\">Mobile number</span></ion-label>\r\n        <ion-input value=\"+44 7777 777 7777\" readonly></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n  </form>\r\n</ion-content>", styles: ["ion-content.cntpers_det{--background: #F8FAFC}ion-content.cntpers_det ion-list{margin-top:32px}ion-content.cntpers_det .list-ios-lines-full ion-item{--border-color: #E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px;--padding-start: 16px}ion-content.cntpers_det ion-item{position:relative}ion-content.cntpers_det ion-item ion-label{margin:15px 8px 0 0}ion-content.cntpers_det ion-item ion-label .input_label{font:18px/23px \"Poppins-SemiBold\";color:#0f172a}ion-content.cntpers_det ion-item ion-label .mandatory{padding:2px}ion-content.cntpers_det ion-item ion-input{font:14px/20px \"Poppins-Regular\"}ion-content.cntpers_det ion-item.item-label-floating .sc-ion-input-ios-h{--padding-top: 0px;--padding-bottom: 14px}ion-content.cntpers_det ion-item .inc_staus{width:8px;height:8px;background:#FF3B30;border-radius:8px;margin-right:7px}ion-content.cntpers_det ion-item ion-img.delete{position:absolute;top:24px;right:15px}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i1__namespace.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }, { type: i3__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1__namespace.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPage, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-personal-detail',
                        templateUrl: './personal-detail.page.html',
                        styleUrls: ['./personal-detail.page.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.FormBuilder }]; } });

    var routes$6 = [
        {
            path: '',
            component: PersonalDetailPage
        }
    ];
    var PersonalDetailPageRoutingModule = /** @class */ (function () {
        function PersonalDetailPageRoutingModule() {
        }
        return PersonalDetailPageRoutingModule;
    }());
    PersonalDetailPageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PersonalDetailPageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPageRoutingModule, imports: [i1__namespace$2.RouterModule], exports: [i1$2.RouterModule] });
    PersonalDetailPageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPageRoutingModule, imports: [[i1$2.RouterModule.forChild(routes$6)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes$6)],
                        exports: [i1$2.RouterModule],
                    }]
            }] });

    var PersonalDetailPageModule = /** @class */ (function () {
        function PersonalDetailPageModule() {
        }
        return PersonalDetailPageModule;
    }());
    PersonalDetailPageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PersonalDetailPageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPageModule, declarations: [PersonalDetailPage], imports: [i3.CommonModule,
            i1$1.FormsModule,
            i1.IonicModule,
            PersonalDetailPageRoutingModule,
            i1$1.ReactiveFormsModule] });
    PersonalDetailPageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPageModule, imports: [[
                i3.CommonModule,
                i1$1.FormsModule,
                i1.IonicModule,
                PersonalDetailPageRoutingModule,
                i1$1.ReactiveFormsModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: PersonalDetailPageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i1$1.FormsModule,
                            i1.IonicModule,
                            PersonalDetailPageRoutingModule,
                            i1$1.ReactiveFormsModule
                        ],
                        declarations: [PersonalDetailPage]
                    }]
            }] });

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var StudyLevelComponent = /** @class */ (function () {
        function StudyLevelComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
        }
        StudyLevelComponent.prototype.ngOnInit = function () { };
        StudyLevelComponent.prototype.modaldismiss = function () {
            this.modalCtrl.dismiss();
        };
        return StudyLevelComponent;
    }());
    StudyLevelComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyLevelComponent, deps: [{ token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    StudyLevelComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: StudyLevelComponent, selector: "app-study-level", ngImport: i0__namespace, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Study level</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button class=\"modal_done\">Done</ion-button>\r\n      </ion-buttons>  \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"sthlvl_title\">\r\n  <ion-text class=\"chse_title\">Choose one or more</ion-text>\r\n  <ion-list class=\"stu_details_radiobox\">\r\n    <ion-radio-group>\r\n        <ion-item>\r\n          <ion-label>Access foundation</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"Access foundation\"></ion-radio>\r\n        </ion-item>   \r\n        <ion-item>\r\n          <ion-label>HND / HNC</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"HND / HNC\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Foundation degree</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"Foundation degree\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Postgraduate</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"Postgraduate\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Undergraduate</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"Undergraduate\"></ion-radio>\r\n        </ion-item>\r\n    </ion-radio-group>    \r\n  </ion-list>\r\n</div>  \r\n</ion-content>", styles: [".sthlvl_title{padding:32px 15px 15px}.sthlvl_title ion-list{background:transparent}.sthlvl_title .chse_title{font:12px/18px \"Poppins-SemiBold\";color:#64748b;text-transform:uppercase;float:left;width:100%;margin-bottom:8px}.stu_details_radiobox{display:flex;float:left;flex-wrap:wrap;padding-right:26px}.stu_details_radiobox ion-item{--min-height: 39px;--background:transparent;--background-hover: transparent;--background-activated:transparent;--background-focused: transparent;--border-color: #3460DC;--inner-border-width: 0;--border-width: 1px;--border-radius: 24px;--inner-padding-end:o;--padding-start: 0;--padding-end: 0;margin:0 8px 8px 0;text-align:center}.stu_details_radiobox ion-item ion-label{font:14px/17px \"Poppins-SemiBold\";--color: #3460DC;margin:0;padding:0 17px}.stu_details_radiobox ion-item ion-radio{opacity:0;position:absolute;left:0;width:100%;height:38px;--border-radius: 38px;--padding-start: 0;--padding-end: 0;margin-inline:0px}.stu_details_radiobox ion-item.item-radio-checked{--background:#3460DC}.stu_details_radiobox ion-item.item-radio-checked ion-label{color:#fff}.stu_details_radiobox ion-radio-group{display:flex;float:left;flex-wrap:wrap}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1__namespace.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i1__namespace.RadioValueAccessor, selector: "ion-radio" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyLevelComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-study-level',
                        templateUrl: './study-level.component.html',
                        styleUrls: ['./study-level.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ModalController }]; } });

    var YearOfEntryComponent = /** @class */ (function () {
        function YearOfEntryComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
        }
        YearOfEntryComponent.prototype.ngOnInit = function () { };
        YearOfEntryComponent.prototype.modaldismiss = function () {
            this.modalCtrl.dismiss();
        };
        return YearOfEntryComponent;
    }());
    YearOfEntryComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: YearOfEntryComponent, deps: [{ token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    YearOfEntryComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: YearOfEntryComponent, selector: "app-year-of-entry", ngImport: i0__namespace, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Year of entry</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button class=\"modal_done\">Done</ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"sthlvl_title\">\r\n  <ion-text class=\"chse_title\">Choose one</ion-text>\r\n  <ion-list class=\"stu_details_chkbox\">\r\n    <ion-radio-group>\r\n      <ion-item>\r\n        <ion-label>2022</ion-label>\r\n        <ion-radio slot=\"end\" color=\"success\" value=\"2022\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>2023</ion-label>\r\n        <ion-radio slot=\"end\" color=\"success\" value=\"2023\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>2024</ion-label>\r\n        <ion-radio slot=\"end\" color=\"success\" value=\"2024\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>2025</ion-label>\r\n        <ion-radio slot=\"end\" color=\"success\" value=\"2025\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n</div>  \r\n</ion-content>", styles: [".sthlvl_title{padding:32px 15px 15px}.sthlvl_title ion-list{background:transparent}.sthlvl_title .chse_title{font:12px/18px \"Poppins-SemiBold\";color:#64748b;text-transform:uppercase;float:left;width:100%;margin-bottom:8px}.stu_details_chkbox{display:flex;float:left;flex-wrap:wrap;padding-right:24px}.stu_details_chkbox ion-item{--min-height: 39px;--background:transparent;--background-hover: transparent;--background-activated:transparent;--background-focused: transparent;--border-color: #3460DC;--inner-border-width: 0;--border-width: 1px;--border-radius: 24px;--inner-padding-end:o;--padding-start: 0;--padding-end: 0;margin:0 8px 8px 0}.stu_details_chkbox ion-item ion-label{font:14px/16px \"Poppins-SemiBold\";--color: #3460DC;margin:0;padding:0 16px}.stu_details_chkbox ion-item ion-radio{opacity:0;position:absolute;left:0;width:100%;height:38px;--border-radius: 38px;--padding-start: 0;--padding-end: 0;margin-inline:0px}.stu_details_chkbox ion-item.item-radio-checked{--background:#3460DC}.stu_details_chkbox ion-item.item-radio-checked ion-label{color:#fff}.stu_details_chkbox ion-radio-group{display:flex;float:left;flex-wrap:wrap}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1__namespace.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i1__namespace.RadioValueAccessor, selector: "ion-radio" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: YearOfEntryComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-year-of-entry',
                        templateUrl: './year-of-entry.component.html',
                        styleUrls: ['./year-of-entry.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ModalController }]; } });

    var StudyDetailsPage = /** @class */ (function () {
        function StudyDetailsPage(router, modalCntrl) {
            this.router = router;
            this.modalCntrl = modalCntrl;
        }
        StudyDetailsPage.prototype.ngOnInit = function () {
        };
        StudyDetailsPage.prototype.openStudyLevelModal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCntrl.create({
                                component: StudyLevelComponent,
                                cssClass: 'my-modal-styles'
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        StudyDetailsPage.prototype.openYearofEntryModal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCntrl.create({
                                component: YearOfEntryComponent,
                                cssClass: 'my-modal-styles'
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return StudyDetailsPage;
    }());
    StudyDetailsPage.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPage, deps: [{ token: i1__namespace$2.Router }, { token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    StudyDetailsPage.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: StudyDetailsPage, selector: "app-study-details", ngImport: i0__namespace, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Study details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det cntstu_det\" mode=ios>\r\n<!-- Study Details -->\r\n<ion-list>\r\n  <!-- <ion-list-header>\r\n    <ion-label></ion-label>\r\n  </ion-list-header> -->\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openStudyLevelModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Study level</span>\r\n        <span class=\"regular qual_subtit\">Not set</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n  <ion-item (click)=\"openYearofEntryModal()\">\r\n    <ion-label>\r\n      <span class=\"semiBold\">Year of entry</span>\r\n      <span class=\"regular qual_subtit\">Not set</span>    \r\n    </ion-label>\r\n    <span class=\"inc_staus\"></span>\r\n    <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<!-- Study Details -->\r\n</ion-content>\r\n", styles: ["ion-content.cntstu_det{--background: #F8FAFC}ion-content.cntstu_det ion-list{margin-top:32px}ion-content.cntstu_det ion-list ion-list-header{background:#F8FAFC}ion-content.cntstu_det ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.cntstu_det ion-list ion-item ion-label{padding:14px 14px 12px 16px;margin:0}ion-content.cntstu_det ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}ion-content.cntstu_det ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.cntstu_det ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#64748b;margin-top:3px}ion-content.cntstu_det ion-list ion-item ion-icon{width:22px}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonItemGroup, selector: "ion-item-group" }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }], directives: [{ type: i1__namespace.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPage, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-study-details',
                        templateUrl: './study-details.page.html',
                        styleUrls: ['./study-details.page.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.Router }, { type: i1__namespace.ModalController }]; } });

    var routes$5 = [
        {
            path: '',
            component: StudyDetailsPage
        }
    ];
    var StudyDetailsPageRoutingModule = /** @class */ (function () {
        function StudyDetailsPageRoutingModule() {
        }
        return StudyDetailsPageRoutingModule;
    }());
    StudyDetailsPageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    StudyDetailsPageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPageRoutingModule, imports: [i1__namespace$2.RouterModule], exports: [i1$2.RouterModule] });
    StudyDetailsPageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPageRoutingModule, imports: [[i1$2.RouterModule.forChild(routes$5)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes$5)],
                        exports: [i1$2.RouterModule],
                    }]
            }] });

    var StudyDetailsPageModule = /** @class */ (function () {
        function StudyDetailsPageModule() {
        }
        return StudyDetailsPageModule;
    }());
    StudyDetailsPageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    StudyDetailsPageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPageModule, declarations: [StudyDetailsPage], imports: [i3.CommonModule,
            i1$1.FormsModule,
            i1.IonicModule,
            StudyDetailsPageRoutingModule] });
    StudyDetailsPageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPageModule, imports: [[
                i3.CommonModule,
                i1$1.FormsModule,
                i1.IonicModule,
                StudyDetailsPageRoutingModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: StudyDetailsPageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i1$1.FormsModule,
                            i1.IonicModule,
                            StudyDetailsPageRoutingModule
                        ],
                        declarations: [StudyDetailsPage]
                    }]
            }] });

    var routes$4 = [
        {
            path: 'user-profile',
            component: UserProfileComponent,
        },
        {
            path: '',
            component: PersonalDetailPageModule,
        },
        {
            path: 'study-details',
            component: StudyDetailsPageModule,
        },
    ];
    var UserProfilePageRoutingModule$1 = /** @class */ (function () {
        function UserProfilePageRoutingModule() {
        }
        UserProfilePageRoutingModule.getRoutes = function () {
            return routes$4;
        };
        return UserProfilePageRoutingModule;
    }());
    UserProfilePageRoutingModule$1.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageRoutingModule$1, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UserProfilePageRoutingModule$1.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageRoutingModule$1, imports: [i1__namespace$2.RouterModule], exports: [i1$2.RouterModule] });
    UserProfilePageRoutingModule$1.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageRoutingModule$1, imports: [[i1$2.RouterModule.forChild(routes$4)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageRoutingModule$1, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes$4)],
                        exports: [i1$2.RouterModule],
                    }]
            }] });

    var LocationServicesPage = /** @class */ (function () {
        function LocationServicesPage(openNativeSettings, diagnostic, platform) {
            this.openNativeSettings = openNativeSettings;
            this.diagnostic = diagnostic;
            this.platform = platform;
            this.locationEnable = false;
        }
        LocationServicesPage.prototype.ngOnInit = function () {
            var _this = this;
            this.diagnostic.isLocationEnabled().then(function (res) {
                _this.locationEnable = res;
            }, function (err) {
                console.log(err);
            });
            this.platform.resume.subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.diagnostic.isLocationEnabled().then(function (res) {
                        _this.locationEnable = res;
                    }, function (err) {
                        console.log(err);
                    });
                    return [2 /*return*/];
                });
            }); });
        };
        LocationServicesPage.prototype.toggleChange = function (eve) {
            this.openNativeSettings.open('location').then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        };
        return LocationServicesPage;
    }());
    LocationServicesPage.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPage, deps: [{ token: i1__namespace$3.OpenNativeSettings }, { token: i2__namespace.Diagnostic }, { token: i1__namespace.Platform }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LocationServicesPage.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: LocationServicesPage, selector: "app-location-services", ngImport: i0__namespace, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Location</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det cntstu_det user_settings\" mode=ios>\r\n<!-- User settings -->\r\n<ion-list>\r\n  <!-- <ion-list-header>\r\n    <ion-label></ion-label>\r\n  </ion-list-header> -->\r\n  <ion-item-group>\r\n    <ion-item>\r\n      <ion-label>\r\n        <span class=\"semiBold\">Location services</span>\r\n        <span class=\"regular qual_subtit uset_tit\">Emails from us providing you the latest university news, tips and guides</span>\r\n      </ion-label>\r\n      <ion-item class=\"usrset_tog\">\r\n        <ion-toggle slot=\"end\" name=\"Newsletters\" color=\"medium\" [checked]=\"locationEnable\" (ionChange)=\"toggleChange($event)\"></ion-toggle>\r\n      </ion-item>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<!-- User settings -->\r\n</ion-content>\r\n", styles: ["ion-content.user_settings ion-list{margin-top:32px}ion-content.user_settings ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.user_settings ion-list ion-item ion-label{padding:14px 14px 12px 16px;margin:0}ion-content.user_settings ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}ion-content.user_settings ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.user_settings ion-list ion-item.item ion-label .uset_tit{font:12px/18px \"Poppins-Regular\";color:#64748b;margin-top:3px;white-space:initial}ion-content.user_settings ion-list ion-item .usrset_tog{--border-color:#fff;--inner-border-width:0;box-shadow:none;margin-bottom:0}ion-content.user_settings ion-list ion-item .usrset_tog ion-toggle{width:43px;height:25px;--handle-spacing: 3px;--background: #64748B;--background-checked: #fff;--handle-background: #fff;--handle-background-checked: #fff;--handle-width: 18px;--handle-height:18px;--handle-max-height:18px;--ion-color-base: #00B26D!important;padding-inline:0}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonItemGroup, selector: "ion-item-group" }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1__namespace.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }, { type: i1__namespace.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPage, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-location-services',
                        templateUrl: './location-services.page.html',
                        styleUrls: ['./location-services.page.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$3.OpenNativeSettings }, { type: i2__namespace.Diagnostic }, { type: i1__namespace.Platform }]; } });

    var routes$3 = [
        {
            path: '',
            component: LocationServicesPage
        }
    ];
    var LocationServicesPageRoutingModule = /** @class */ (function () {
        function LocationServicesPageRoutingModule() {
        }
        return LocationServicesPageRoutingModule;
    }());
    LocationServicesPageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LocationServicesPageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPageRoutingModule, imports: [i1__namespace$2.RouterModule], exports: [i1$2.RouterModule] });
    LocationServicesPageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPageRoutingModule, imports: [[i1$2.RouterModule.forChild(routes$3)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes$3)],
                        exports: [i1$2.RouterModule],
                    }]
            }] });

    var LocationServicesPageModule = /** @class */ (function () {
        function LocationServicesPageModule() {
        }
        return LocationServicesPageModule;
    }());
    LocationServicesPageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LocationServicesPageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPageModule, declarations: [LocationServicesPage], imports: [i3.CommonModule,
            i1$1.FormsModule,
            i1.IonicModule,
            LocationServicesPageRoutingModule] });
    LocationServicesPageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPageModule, providers: [i1$3.OpenNativeSettings, i2.Diagnostic], imports: [[
                i3.CommonModule,
                i1$1.FormsModule,
                i1.IonicModule,
                LocationServicesPageRoutingModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: LocationServicesPageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i1$1.FormsModule,
                            i1.IonicModule,
                            LocationServicesPageRoutingModule
                        ],
                        declarations: [LocationServicesPage],
                        providers: [i1$3.OpenNativeSettings, i2.Diagnostic]
                    }]
            }] });

    var NotificationsPage = /** @class */ (function () {
        function NotificationsPage(openNativeSettings, diagnostic, platform) {
            this.openNativeSettings = openNativeSettings;
            this.diagnostic = diagnostic;
            this.platform = platform;
            this.notificationEnable = false;
        }
        NotificationsPage.prototype.ngOnInit = function () {
            var _this = this;
            this.diagnostic.isRemoteNotificationsEnabled().then(function (res) {
                _this.notificationEnable = res;
            }, function (err) {
                console.log(err);
            });
            this.platform.resume.subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.diagnostic.isRemoteNotificationsEnabled().then(function (res) {
                        _this.notificationEnable = res;
                    }, function (err) {
                        console.log(err);
                    });
                    return [2 /*return*/];
                });
            }); });
        };
        NotificationsPage.prototype.toggleChange = function (eve) {
            this.openNativeSettings.open('notification_id').then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        };
        return NotificationsPage;
    }());
    NotificationsPage.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPage, deps: [{ token: i1__namespace$3.OpenNativeSettings }, { token: i2__namespace.Diagnostic }, { token: i1__namespace.Platform }], target: i0__namespace.ɵɵFactoryTarget.Component });
    NotificationsPage.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: NotificationsPage, selector: "app-notifications", ngImport: i0__namespace, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Notifications</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det cntstu_det user_settings\" mode=ios>\r\n<!-- User settings -->\r\n<ion-list>\r\n  <!-- <ion-list-header>\r\n    <ion-label></ion-label>\r\n  </ion-list-header> -->\r\n  <ion-item-group>\r\n    <ion-item>\r\n      <ion-label>\r\n        <span class=\"semiBold\">All push notifications</span>\r\n        <span class=\"regular qual_subtit uset_tit\">Turn on to receive order tracking updates, price drop alerts and coupons in real time, anywhere</span>\r\n      </ion-label>\r\n      <ion-item class=\"usrset_tog\">\r\n        <ion-toggle slot=\"end\" name=\"All push notifications\" color=\"medium\" (ionChange)=\"toggleChange($event)\" [checked]=\"notificationEnable\"></ion-toggle>\r\n      </ion-item>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<!-- User settings -->\r\n</ion-content>\r\n", styles: ["ion-content.user_settings ion-list{margin-top:32px}ion-content.user_settings ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.user_settings ion-list ion-item ion-label{padding:14px 14px 12px 16px;margin:0}ion-content.user_settings ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}ion-content.user_settings ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.user_settings ion-list ion-item.item ion-label .uset_tit{font:12px/18px \"Poppins-Regular\";color:#64748b;margin-top:3px;white-space:initial}ion-content.user_settings ion-list ion-item .usrset_tog{--border-color:#fff;--inner-border-width:0;box-shadow:none;margin-bottom:0}ion-content.user_settings ion-list ion-item .usrset_tog ion-toggle{width:43px;height:25px;--handle-spacing: 3px;--background: #64748B;--background-checked: #fff;--handle-background: #fff;--handle-background-checked: #fff;--handle-width: 18px;--handle-height:18px;--handle-max-height:18px;--ion-color-base: #00B26D!important;padding-inline:0}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonItemGroup, selector: "ion-item-group" }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1__namespace.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }, { type: i1__namespace.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPage, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-notifications',
                        templateUrl: './notifications.page.html',
                        styleUrls: ['./notifications.page.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$3.OpenNativeSettings }, { type: i2__namespace.Diagnostic }, { type: i1__namespace.Platform }]; } });

    var routes$2 = [
        {
            path: '',
            component: NotificationsPage
        }
    ];
    var NotificationsPageRoutingModule = /** @class */ (function () {
        function NotificationsPageRoutingModule() {
        }
        return NotificationsPageRoutingModule;
    }());
    NotificationsPageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NotificationsPageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPageRoutingModule, imports: [i1__namespace$2.RouterModule], exports: [i1$2.RouterModule] });
    NotificationsPageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPageRoutingModule, imports: [[i1$2.RouterModule.forChild(routes$2)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes$2)],
                        exports: [i1$2.RouterModule],
                    }]
            }] });

    var NotificationsPageModule = /** @class */ (function () {
        function NotificationsPageModule() {
        }
        return NotificationsPageModule;
    }());
    NotificationsPageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NotificationsPageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPageModule, declarations: [NotificationsPage], imports: [i3.CommonModule,
            i1$1.FormsModule,
            i1.IonicModule,
            NotificationsPageRoutingModule] });
    NotificationsPageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPageModule, providers: [i1$3.OpenNativeSettings, i2.Diagnostic], imports: [[
                i3.CommonModule,
                i1$1.FormsModule,
                i1.IonicModule,
                NotificationsPageRoutingModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: NotificationsPageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i1$1.FormsModule,
                            i1.IonicModule,
                            NotificationsPageRoutingModule
                        ],
                        declarations: [NotificationsPage],
                        providers: [i1$3.OpenNativeSettings, i2.Diagnostic]
                    }]
            }] });

    var UserSettingsPage = /** @class */ (function () {
        function UserSettingsPage() {
        }
        UserSettingsPage.prototype.ngOnInit = function () {
        };
        return UserSettingsPage;
    }());
    UserSettingsPage.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPage, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    UserSettingsPage.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserSettingsPage, selector: "app-user-settings", ngImport: i0__namespace, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Preferences</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"modal_done\">Done</ion-button>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det cntstu_det user_settings\" mode=ios>\r\n<!-- User settings -->\r\n<ion-list>\r\n  <!-- <ion-list-header>\r\n    <ion-label></ion-label>\r\n  </ion-list-header> -->\r\n  <ion-item-group>\r\n    <ion-item>\r\n      <ion-label>\r\n        <span class=\"semiBold\">Newsletters</span>\r\n        <span class=\"regular qual_subtit uset_tit\">Emails from us providing you the latest university news, tips and guides</span>\r\n      </ion-label>\r\n      <ion-item class=\"usrset_tog\">\r\n        <ion-toggle slot=\"end\" name=\"Newsletters\" color=\"medium\"></ion-toggle>\r\n      </ion-item>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      <span class=\"semiBold\">University updates</span>\r\n      <span class=\"regular qual_subtit uset_tit\">Emails on behalf of universities and carefully selected third-party partners</span>    \r\n    </ion-label>\r\n    <ion-item class=\"usrset_tog\">\r\n      <ion-toggle slot=\"end\" name=\"Newsletters\" color=\"medium\"></ion-toggle>\r\n    </ion-item>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      <span class=\"semiBold\">Surveys</span>\r\n      <span class=\"regular qual_subtit uset_tit\">Have your say on important education issues and the services you receive from us and our partners</span>    \r\n    </ion-label>\r\n    <ion-item class=\"usrset_tog\">\r\n      <ion-toggle slot=\"end\" name=\"Newsletters\" color=\"medium\"></ion-toggle>\r\n    </ion-item>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<!-- User settings -->\r\n</ion-content>\r\n", styles: ["ion-content.user_settings ion-list{margin-top:32px}ion-content.user_settings ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.user_settings ion-list ion-item ion-label{padding:14px 14px 12px 16px;margin:0}ion-content.user_settings ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}ion-content.user_settings ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.user_settings ion-list ion-item.item ion-label .uset_tit{font:12px/18px \"Poppins-Regular\";color:#64748b;margin-top:3px;white-space:initial}ion-content.user_settings ion-list ion-item .usrset_tog{--border-color:#fff;--inner-border-width:0;box-shadow:none;margin-bottom:0}ion-content.user_settings ion-list ion-item .usrset_tog ion-toggle{width:43px;height:25px;--handle-spacing: 3px;--background: #64748B;--background-checked: #fff;--handle-background: #fff;--handle-background-checked: #fff;--handle-width: 18px;--handle-height:18px;--handle-max-height:18px;--ion-color-base: #00B26D!important;padding-inline:0}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonItemGroup, selector: "ion-item-group" }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1__namespace.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }, { type: i1__namespace.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPage, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-user-settings',
                        templateUrl: './user-settings.page.html',
                        styleUrls: ['./user-settings.page.scss'],
                    }]
            }], ctorParameters: function () { return []; } });

    var routes$1 = [
        {
            path: '',
            component: UserSettingsPage
        }
    ];
    var UserSettingsPageRoutingModule = /** @class */ (function () {
        function UserSettingsPageRoutingModule() {
        }
        return UserSettingsPageRoutingModule;
    }());
    UserSettingsPageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UserSettingsPageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPageRoutingModule, imports: [i1__namespace$2.RouterModule], exports: [i1$2.RouterModule] });
    UserSettingsPageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPageRoutingModule, imports: [[i1$2.RouterModule.forChild(routes$1)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes$1)],
                        exports: [i1$2.RouterModule],
                    }]
            }] });

    var UserSettingsPageModule = /** @class */ (function () {
        function UserSettingsPageModule() {
        }
        return UserSettingsPageModule;
    }());
    UserSettingsPageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UserSettingsPageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPageModule, declarations: [UserSettingsPage], imports: [i3.CommonModule,
            i1$1.FormsModule,
            i1.IonicModule,
            UserSettingsPageRoutingModule] });
    UserSettingsPageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPageModule, imports: [[
                i3.CommonModule,
                i1$1.FormsModule,
                i1.IonicModule,
                UserSettingsPageRoutingModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserSettingsPageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i1$1.FormsModule,
                            i1.IonicModule,
                            UserSettingsPageRoutingModule
                        ],
                        declarations: [UserSettingsPage]
                    }]
            }] });

    var AccessToHEDiplomaComponent = /** @class */ (function () {
        function AccessToHEDiplomaComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
        }
        AccessToHEDiplomaComponent.prototype.ngOnInit = function () { };
        AccessToHEDiplomaComponent.prototype.modaldismiss = function () {
            this.modalCtrl.dismiss();
        };
        AccessToHEDiplomaComponent.prototype.openQualificationModal = function () {
        };
        return AccessToHEDiplomaComponent;
    }());
    AccessToHEDiplomaComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: AccessToHEDiplomaComponent, deps: [{ token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AccessToHEDiplomaComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: AccessToHEDiplomaComponent, selector: "app-access-to-hediploma", ngImport: i0__namespace, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Your grades</ion-title>   \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"your_grades\" mode=ios>\r\n<div class=\"ygrd_sec credit_sec\"> \r\n<!-- Your Grades -->\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label><h2>Calculate your UCAS points</h2></ion-label>\r\n  </ion-list-header>\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">Access to HE Diploma</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<div class=\"ucas_tariff_sec\">\r\n  <ion-text>\r\n    <h4 >A total of 45 credits must be added for tariff points (eg D15, P15, M15)</h4>\r\n  </ion-text> \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"uct_col min_pts\">\r\n            <ion-label>Distinction</ion-label>\r\n            <ion-label class=\"credit_pts\">0 credits <ion-icon name=\"chevron-down-outline\"></ion-icon></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" >\r\n        <div class=\"uct_col max_pts\">\r\n            <ion-label>Merit</ion-label>\r\n            <ion-label class=\"credit_pts\">0 credits <ion-icon name=\"chevron-down-outline\"></ion-icon></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" >\r\n        <div class=\"uct_col max_pts\">\r\n            <ion-label>Pass</ion-label>\r\n            <ion-label class=\"credit_pts\">0 credits <ion-icon name=\"chevron-down-outline\"></ion-icon></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>\r\n</div>\r\n<ion-card class=\"add_qualif\">\r\n  <ion-card-header>\r\n    <ion-card-title>Have more qualifications?</ion-card-title>\r\n    <ion-button fill=\"outline\" (click)=\"openQualificationModal()\">+ Add qualification</ion-button>\r\n  </ion-card-header>\r\n  </ion-card>\r\n<!-- Your Grades -->\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"ygrd_ft\">\r\n  <ion-toolbar>\r\n      <ion-label class=\"ucas_pts\">Your UCAS points <span class=\"ucas_val\">0</span></ion-label>\r\n      <ion-label class=\"ucas_pts_btn\">\r\n        <ion-button expand=\"block\" class=\"update_btn\" color=\"primary\" disabled>Update</ion-button>\r\n      </ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n", styles: ["ion-content.your_grades{--background: #F8FAFC}ion-content.your_grades ion-list ion-list-header{background:#F8FAFC;padding-inline-start:0}ion-content.your_grades ion-list ion-list-header ion-label{margin:32px 0 30px;padding-left:15px}ion-content.your_grades ion-list ion-list-header ion-label h2{font:28px/34px \"Poppins-Bold\";max-width:220px}ion-content.your_grades ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.your_grades ion-list ion-item ion-label{padding:14px 14px 12px 15px;margin:0}ion-content.your_grades ion-list ion-item ion-label span{font-size:14px;line-height:17px}ion-content.your_grades ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.your_grades ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#0f172a;margin-top:3px}ion-content.your_grades ion-list ion-item ion-icon{width:22px}ion-content.your_grades ion-card{box-shadow:0 1px #e2e8f0;border-radius:8px}ion-content.your_grades ion-card.add_qualif ion-card-header{display:flex;align-items:center;flex-direction:column}ion-content.your_grades ion-card.add_qualif ion-card-header ion-card-title{font:16px/24px \"Poppins-SemiBold\";margin:0 0 10px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 18px;--padding-end: 18px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button:hover{--background-hover:#3460DC;--color-hover:#fff;opacity:1}ion-content.your_grades .credit_sec .ucas_tariff_sec ion-col,ion-content.your_grades .credit_sec .ucas_tariff_sec ion-grid{padding:0}ion-content.your_grades .credit_sec ion-text h4{font:12px/18px \"Poppins-SemiBold\";color:#000;text-transform:uppercase;letter-spacing:.08em;padding-right:42px;margin:0 0 8px}.ygrd_ft ion-toolbar{text-align:center;padding:14px 10px 25px}.ygrd_ft .ucas_pts{font:14px/20px \"Poppins-Regular\";display:flex;justify-content:center;align-items:center;margin-bottom:15px}.ygrd_ft .ucas_pts .ucas_val{font:12px/30px \"Poppins-SemiBold\";color:#64748b;width:36px;height:30px;background:#F1F5F9;border-radius:4px;margin-left:8px}.ygrd_ft .ucas_pts_btn ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 40px;--box-shadow: none}.ygrd_ft .ucas_pts_btn ion-button.button-disabled{--ion-color-base: #E2E8F0!important;--ion-color-contrast: #94A3B8!important;opacity:1}.ucas_tariff_sec{padding:30px 16px 0}.ucas_tariff_sec ion-col:nth-child(2){font:14px/20px \"Poppins-Regular\";color:#475569;display:flex;align-items:center;justify-content:center;padding-top:28px}.ucas_tariff_sec .uct_col{display:flex;justify-content:space-between;align-items:center;padding:8px 0}.ucas_tariff_sec .uct_col ion-label{font:14px/20px \"Poppins-Regular\";color:#475569}.ucas_tariff_sec .uct_col .credit_pts{font:16px/42px \"Poppins-Regular\";color:#0f172a;border:1px solid #CBD5E1;border-radius:26px;--placeholder-opacity: 1;margin:0;width:128px;min-height:42px;display:flex;align-items:center;justify-content:center}.ucas_tariff_sec .uct_col .credit_pts ion-icon{padding:0 0 0 6px}.ucas_tariff_sec .uct_col .credit_pts.has-focus,.ucas_tariff_sec .uct_col .credit_pts.has-value{color:#0f172a;--placeholder:#0F172A}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonItemGroup, selector: "ion-item-group" }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1__namespace.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i1__namespace.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { type: i1__namespace.IonRow, selector: "ion-row" }, { type: i1__namespace.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1__namespace.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i1__namespace.IonCardHeader, selector: "ion-card-header", inputs: ["color", "mode", "translucent"] }, { type: i1__namespace.IonCardTitle, selector: "ion-card-title", inputs: ["color", "mode"] }, { type: i1__namespace.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: AccessToHEDiplomaComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-access-to-hediploma',
                        templateUrl: './access-to-hediploma.component.html',
                        styleUrls: ['./access-to-hediploma.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ModalController }]; } });

    var ContactUsComponent = /** @class */ (function () {
        function ContactUsComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
        }
        ContactUsComponent.prototype.ngOnInit = function () { };
        ContactUsComponent.prototype.modaldismiss = function () {
            this.modalCtrl.dismiss();
        };
        return ContactUsComponent;
    }());
    ContactUsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ContactUsComponent, deps: [{ token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ContactUsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: ContactUsComponent, selector: "app-contact-us", ngImport: i0__namespace, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Contact us</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button class=\"modal_done\">Send</ion-button>\r\n      </ion-buttons> \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"contus_sec\">\r\n    <ion-list class=\"cont_from\">\r\n      <ion-item>\r\n        <ion-textarea rows=\"17\" cols=\"20\" placeholder=\"Write your message\" value=\"Integer aliquet tristique nunc ac tincidunt. Aliquam lobortis at nisl eu suscipit. Aliquam erat volutpat. Sed turpis mi, aliquam quis sollicitudin non, tincidunt a turpis. Vestibulum finibus tincidunt hendrerit\" autofocus=\"true\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>", styles: [".contus_sec{padding:30px 15px}.contus_sec .cont_from ion-item{--padding-start:0;--inner-padding-end: 0;--inner-border-width:0;--border-color:transparent;--background:transparent}.contus_sec .cont_from ion-item.item-has-focus ion-textarea{color:#000}.contus_sec .cont_from ion-textarea{font:14px/20px \"Poppins-Regular\";border:1px solid #CBD5E1;border-radius:22px;--border-radius: 22px;color:#94a3b8;--placeholder-opacity: 1;--padding-start: 15px;--padding-end:15px;--padding-top: 13px;--padding-bottom: 13px}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }], directives: [{ type: i1__namespace.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ContactUsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-contact-us',
                        templateUrl: './contact-us.component.html',
                        styleUrls: ['./contact-us.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ModalController }]; } });

    var MultipleQualificationComponent = /** @class */ (function () {
        function MultipleQualificationComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
        }
        MultipleQualificationComponent.prototype.ngOnInit = function () { };
        MultipleQualificationComponent.prototype.modaldismiss = function () {
            this.modalCtrl.dismiss();
        };
        //
        MultipleQualificationComponent.prototype.openQualificationModal = function () {
        };
        return MultipleQualificationComponent;
    }());
    MultipleQualificationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: MultipleQualificationComponent, deps: [{ token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MultipleQualificationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: MultipleQualificationComponent, selector: "app-multiple-qualification", ngImport: i0__namespace, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Your grades</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntstu_det your_grades\" mode=ios>\r\n<div class=\"ygrd_sec\"> \r\n<!-- Your Grades -->\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label><h2>Calculate your UCAS points</h2></ion-label>\r\n  </ion-list-header>\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">A-level</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<div class=\"fltr_levls\">\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">A*</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">A</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">B</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">C</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">D</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">E</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ion-list class=\"multi_quallist\">\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">EPQ level 3</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<ion-list class=\"muliti_pts_chse\">\r\n  <ion-radio-group>\r\n    <ion-item>\r\n      <ion-label>A*</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"A*\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>A</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"A\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>B</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"B\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>C</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"C\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>D</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"D\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>E</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"E\"></ion-radio>\r\n    </ion-item>        \r\n  </ion-radio-group>\r\n</ion-list>\r\n<ion-card class=\"add_qualif\">\r\n  <ion-card-header>\r\n    <ion-card-title>Have more qualifications?</ion-card-title>\r\n    <ion-button fill=\"outline\" (click)=\"openQualificationModal()\">+ Add qualification</ion-button>\r\n  </ion-card-header>\r\n</ion-card>\r\n\r\n<!-- Your Grades -->\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"ygrd_ft\">\r\n  <ion-toolbar>\r\n      <ion-label class=\"ucas_pts pts_added\">Your UCAS points <span class=\"ucas_val\">150</span></ion-label>\r\n      <ion-label class=\"ucas_pts_btn\">\r\n        <ion-button expand=\"block\" class=\"update_btn\" color=\"primary\">Update</ion-button>\r\n      </ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n", styles: ["ion-content.your_grades{--background: #F8FAFC}ion-content.your_grades ion-list ion-list-header{background:#F8FAFC;padding-inline-start:0}ion-content.your_grades ion-list ion-list-header ion-label{margin:32px 0 30px;padding-left:15px}ion-content.your_grades ion-list ion-list-header ion-label h2{font:28px/34px \"Poppins-Bold\";max-width:220px}ion-content.your_grades ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.your_grades ion-list ion-item ion-label{padding:14px 14px 12px 15px;margin:0}ion-content.your_grades ion-list ion-item ion-label span{font-size:14px;line-height:17px}ion-content.your_grades ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.your_grades ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#0f172a;margin-top:3px}ion-content.your_grades ion-list ion-item ion-icon{width:22px}ion-content.your_grades ion-card{box-shadow:0 1px #e2e8f0;border-radius:8px}ion-content.your_grades ion-card.add_qualif{display:inline-block;width:calc(100% - 32px)}ion-content.your_grades ion-card.add_qualif ion-card-header{display:flex;align-items:center;flex-direction:column}ion-content.your_grades ion-card.add_qualif ion-card-header ion-card-title{font:16px/24px \"Poppins-SemiBold\";margin:0 0 10px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 19px;--padding-end: 19px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button:hover{--background-hover:#3460DC;--color-hover:#fff;opacity:1}ion-content.your_grades .fltr_levls{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;padding:10px 16px 7px}ion-content.your_grades .fltr_levls .grd_minmax{margin-top:20px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-basis:33%}ion-content.your_grades .fltr_levls .grd_minmax .grd_label{font:16px/24px \"Poppins-SemiBold\";color:#0f172a;width:30px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col{display:flex;flex-direction:row;align-items:center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-label{display:flex}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-icon{width:36px;height:36px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle{background:url(/assets/icon/minus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle.deactive{background-image:url(/assets/icon/minus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle{background:url(/assets/icon/plus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle.deactive{background-image:url(/assets/icon/plus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .grd_value{font:16px/24px \"Poppins-Regular\";color:#64748b;width:24px;height:24px;text-align:center;margin:0 6px}ion-content.your_grades .multi_quallist{margin:24px 0 30px}ion-content.your_grades .muliti_pts_chse{display:flex;float:left;flex-wrap:wrap;padding:0 16px;background:transparent}ion-content.your_grades .muliti_pts_chse ion-item{--min-height: 39px;--background:transparent;--background-hover: transparent;--background-activated:transparent;--background-focused: transparent;--border-color: #3460DC;--inner-border-width: 0;--border-width: 1px;--border-radius: 24px;--inner-padding-end:o;--padding-start: 0;--padding-end: 0;margin:0 8px 8px 0;box-shadow:none}ion-content.your_grades .muliti_pts_chse ion-item ion-label{font:14px/16px \"Poppins-SemiBold\";--color: #3460DC;margin:0;padding:12px 18px}ion-content.your_grades .muliti_pts_chse ion-item ion-radio{opacity:0;position:absolute;left:0;width:100%;height:41px;--border-radius: 38px;--padding-start: 0;--padding-end: 0;margin-inline:0px}ion-content.your_grades .muliti_pts_chse ion-item.item-radio-checked{--background:#3460DC}ion-content.your_grades .muliti_pts_chse ion-item.item-radio-checked ion-label{color:#fff}ion-content.your_grades .muliti_pts_chse ion-radio-group{display:flex;float:left;flex-wrap:wrap}.ygrd_ft ion-toolbar{text-align:center;padding:14px 10px 25px}.ygrd_ft .ucas_pts{font:14px/20px \"Poppins-Regular\";display:flex;justify-content:center;align-items:center;margin-bottom:15px}.ygrd_ft .ucas_pts .ucas_val{font:12px/30px \"Poppins-SemiBold\";color:#64748b;width:36px;height:30px;background:#F1F5F9;border-radius:4px;margin-left:8px}.ygrd_ft .ucas_pts.pts_added .ucas_val{background:#D1FAE5;color:#059669}.ygrd_ft .ucas_pts_btn ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 40px;--box-shadow: none}.ygrd_ft .ucas_pts_btn ion-button.button-disabled{--ion-color-base: #E2E8F0!important;--ion-color-contrast: #94A3B8!important;opacity:1}.ygrd_ft .ucas_pts_btn ion-button.ion-activated{--ion-color-shade:#173EAD!important}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonItemGroup, selector: "ion-item-group" }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1__namespace.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1__namespace.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }, { type: i1__namespace.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i1__namespace.IonCardHeader, selector: "ion-card-header", inputs: ["color", "mode", "translucent"] }, { type: i1__namespace.IonCardTitle, selector: "ion-card-title", inputs: ["color", "mode"] }, { type: i1__namespace.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }], directives: [{ type: i1__namespace.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i1__namespace.RadioValueAccessor, selector: "ion-radio" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: MultipleQualificationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-multiple-qualification',
                        templateUrl: './multiple-qualification.component.html',
                        styleUrls: ['./multiple-qualification.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ModalController }]; } });

    var UcasTariffPointsComponent = /** @class */ (function () {
        function UcasTariffPointsComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
        }
        UcasTariffPointsComponent.prototype.ngOnInit = function () { };
        UcasTariffPointsComponent.prototype.modaldismiss = function () {
            this.modalCtrl.dismiss();
        };
        //
        UcasTariffPointsComponent.prototype.openQualificationModal = function () {
        };
        return UcasTariffPointsComponent;
    }());
    UcasTariffPointsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UcasTariffPointsComponent, deps: [{ token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UcasTariffPointsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UcasTariffPointsComponent, selector: "app-ucas-tariff-points", ngImport: i0__namespace, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Your grades</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"modal_done\">Reset</ion-button>\r\n    </ion-buttons>       \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"your_grades ucas_tariff_pts\" mode=ios>\r\n<div class=\"ygrd_sec\"> \r\n<!-- Your Grades -->\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label><h2>Calculate your UCAS points</h2></ion-label>\r\n  </ion-list-header>\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">UCAS tariff points</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<div class=\"ucas_tariff_sec\"> \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"5\">\r\n        <div class=\"uct_col min_pts\">\r\n            <ion-label>Minimum points</ion-label>\r\n            <ion-input placeholder=\"80\"></ion-input>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">-</ion-col>\r\n      <ion-col size=\"5\" >\r\n        <div class=\"uct_col max_pts\">\r\n            <ion-label>Maximum points</ion-label>\r\n            <ion-input placeholder=\"150\"></ion-input>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n<ion-card class=\"add_qualif\">\r\n  <ion-card-header>\r\n    <ion-card-title>Have more qualifications?</ion-card-title>\r\n    <ion-button fill=\"outline\" (click)=\"openQualificationModal()\">+ Add qualification</ion-button>\r\n  </ion-card-header>\r\n  </ion-card>\r\n<!-- Your Grades -->\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"ygrd_ft\">\r\n  <ion-toolbar>\r\n      <ion-label class=\"ucas_pts\">Your UCAS points <span class=\"ucas_val\">0</span></ion-label>\r\n      <ion-label class=\"ucas_pts_btn\">\r\n        <ion-button expand=\"block\" class=\"update_btn\" color=\"primary\" disabled>Update</ion-button>\r\n      </ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n", styles: ["ion-content.your_grades{--background: #F8FAFC}ion-content.your_grades ion-list ion-list-header{background:#F8FAFC;padding-inline-start:0}ion-content.your_grades ion-list ion-list-header ion-label{margin:32px 0 30px;padding-left:15px}ion-content.your_grades ion-list ion-list-header ion-label h2{font:28px/34px \"Poppins-Bold\";max-width:220px}ion-content.your_grades ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.your_grades ion-list ion-item ion-label{padding:14px 14px 12px 15px;margin:0}ion-content.your_grades ion-list ion-item ion-label span{font-size:14px;line-height:17px}ion-content.your_grades ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.your_grades ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#0f172a;margin-top:3px}ion-content.your_grades ion-list ion-item ion-icon{width:22px}ion-content.your_grades ion-card{box-shadow:0 1px #e2e8f0;border-radius:8px}ion-content.your_grades ion-card.add_qualif ion-card-header{display:flex;align-items:center;flex-direction:column}ion-content.your_grades ion-card.add_qualif ion-card-header ion-card-title{font:16px/24px \"Poppins-SemiBold\";margin:0 0 10px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 18px;--padding-end: 18px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button:hover{--background-hover:#3460DC;--color-hover:#fff;opacity:1}ion-content.your_grades .fltr_levls{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;padding:10px 16px 7px}ion-content.your_grades .fltr_levls .grd_minmax{margin-top:20px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-basis:33%}ion-content.your_grades .fltr_levls .grd_minmax .grd_label{font:16px/24px \"Poppins-SemiBold\";color:#0f172a;width:30px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col{display:flex;flex-direction:row;align-items:center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-label{display:flex}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-icon{width:36px;height:36px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle{background:url(/assets/icon/minus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle.deactive{background-image:url(/assets/icon/minus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle{background:url(/assets/icon/plus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle.deactive{background-image:url(/assets/icon/plus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .grd_value{font:16px/24px \"Poppins-Regular\";color:#64748b;width:24px;height:24px;text-align:center;margin:0 6px}.ygrd_ft ion-toolbar{text-align:center;padding:14px 10px 25px}.ygrd_ft .ucas_pts{font:14px/20px \"Poppins-Regular\";display:flex;justify-content:center;align-items:center;margin-bottom:15px}.ygrd_ft .ucas_pts .ucas_val{font:12px/30px \"Poppins-SemiBold\";color:#64748b;width:36px;height:30px;background:#F1F5F9;border-radius:4px;margin-left:8px}.ygrd_ft .ucas_pts_btn ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 40px;--box-shadow: none}.ygrd_ft .ucas_pts_btn ion-button.button-disabled{--ion-color-base: #E2E8F0!important;--ion-color-contrast: #94A3B8!important;opacity:1}.ucas_tariff_sec{padding:20px 6px 0}.ucas_tariff_sec ion-col:nth-child(2){font:14px/20px \"Poppins-Regular\";color:#475569;display:flex;align-items:center;justify-content:center;padding-top:28px}.ucas_tariff_sec .uct_col{justify-content:center;align-items:center}.ucas_tariff_sec .uct_col ion-label{font:14px/20px \"Poppins-Regular\";color:#475569}.ucas_tariff_sec .uct_col ion-input{font:16px/24px \"Poppins-Regular\";color:#94a3b8;border:1px solid #CBD5E1;border-radius:26px;--padding-top: 13px;--padding-end: 16px;--padding-bottom: 13px;--padding-start: 16px;margin:3px 0 0;--placeholder-opacity: 1}.ucas_tariff_sec .uct_col ion-input.has-focus,.ucas_tariff_sec .uct_col ion-input.has-value{color:#0f172a;--placeholder:#0F172A}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonItemGroup, selector: "ion-item-group" }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1__namespace.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { type: i1__namespace.IonRow, selector: "ion-row" }, { type: i1__namespace.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1__namespace.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }, { type: i1__namespace.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i1__namespace.IonCardHeader, selector: "ion-card-header", inputs: ["color", "mode", "translucent"] }, { type: i1__namespace.IonCardTitle, selector: "ion-card-title", inputs: ["color", "mode"] }, { type: i1__namespace.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }], directives: [{ type: i1__namespace.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UcasTariffPointsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-ucas-tariff-points',
                        templateUrl: './ucas-tariff-points.component.html',
                        styleUrls: ['./ucas-tariff-points.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ModalController }]; } });

    var QualificationComponent = /** @class */ (function () {
        function QualificationComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
        }
        QualificationComponent.prototype.ngOnInit = function () { };
        QualificationComponent.prototype.openUcasTariffPointsModal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCtrl.create({
                                component: UcasTariffPointsComponent,
                                cssClass: 'my-modal-styles'
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        QualificationComponent.prototype.openMultipleQualificationModal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCtrl.create({
                                component: MultipleQualificationComponent,
                                cssClass: 'my-modal-styles'
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        QualificationComponent.prototype.openAccesstoHEDiplomaModal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCtrl.create({
                                component: AccessToHEDiplomaComponent,
                                cssClass: 'my-modal-styles'
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        QualificationComponent.prototype.modaldismiss = function () {
            this.modalCtrl.dismiss();
        };
        return QualificationComponent;
    }());
    QualificationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: QualificationComponent, deps: [{ token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    QualificationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: QualificationComponent, selector: "app-qualification", ngImport: i0__namespace, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Qualification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"qualif_lst\">\r\n    <ion-list>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>A-levels</ion-label>\r\n        </ion-list-header>\r\n        <ion-item (click)=\"openMultipleQualificationModal()\">\r\n          <ion-label>A level<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"A level\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>AS level</ion-label>\r\n          <ion-radio slot=\"start\" value=\"AS level\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>A Level Double Award</ion-label>\r\n          <ion-radio slot=\"start\" value=\"A Level Double Award\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>International Baccalaureate (Diploma)</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>IB (Diploma) Higher Level<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"IB (Diploma) Higher Level\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>IB (Diploma) Standard Level</ion-label>\r\n          <ion-radio slot=\"start\" value=\"IB (Diploma) Standard Level\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>Scottish qualifications</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>Scottish Highers<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"Scottish Highers\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Scottish Advanced Highers</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Scottish Advanced Highers\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>BTEC Nationals (QCF)</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>BTEC Extended Diploma<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"BTEC Extended Diploma\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>BTEC Diploma</ion-label>\r\n          <ion-radio slot=\"start\" value=\"BTEC Diploma\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>BTEC Foundation Diploma</ion-label>\r\n          <ion-radio slot=\"start\" value=\"BTEC Foundation Diploma\" mode=\"md\"></ion-radio>\r\n        </ion-item>        \r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>Irish Leaving Certificate</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>Irish Leaving Certificate Higher<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"Irish Leaving Certificate Higher\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Irish Leaving Certificate Ordinary</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Irish Leaving Certificate Ordinary\" mode=\"md\"></ion-radio>\r\n        </ion-item>      \r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>UCAS</ion-label>\r\n        </ion-list-header>\r\n        <ion-item (click)=\"openUcasTariffPointsModal()\">\r\n          <ion-label>UCAS Tariff Points<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"UCAS Tariff Points\" mode=\"md\"></ion-radio>\r\n        </ion-item>    \r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>Access to HE Diploma</ion-label>\r\n        </ion-list-header>\r\n        <ion-item (click)=\"openAccesstoHEDiplomaModal()\">\r\n          <ion-label>Access to HE Diploma</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Access to HE Diploma\" mode=\"md\"></ion-radio>\r\n        </ion-item>      \r\n      </ion-radio-group>                                  \r\n    </ion-list>\r\n  </div>  \r\n</ion-content>\r\n\r\n", styles: [".qualif_lst{padding:15px 0 4px}.qualif_lst ion-list{background:transparent}.qualif_lst ion-list-header ion-label{font:16px/24px \"Poppins-SemiBold\";margin-top:17px;margin-bottom:0}.qualif_lst ion-item{--inner-border-width: 0;--background: transparent;--min-height: auto;margin:14px 0}.qualif_lst ion-item.ion-activated{--background-activated: transparent;--background-focused: transparent;--background-hover: transparent}.qualif_lst ion-item ion-label{font:14px/20px \"Poppins-Regular\";margin:0}.qualif_lst ion-item ion-radio{width:18px;height:18px;--color-checked:#3460DC;--color:#0F172A;margin-inline:0px 10px;margin:0 10px 0 0}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1__namespace.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1__namespace.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i1__namespace.RadioValueAccessor, selector: "ion-radio" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: QualificationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-qualification',
                        templateUrl: './qualification.component.html',
                        styleUrls: ['./qualification.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ModalController }]; } });

    var UpdatePasswordComponent = /** @class */ (function () {
        function UpdatePasswordComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
        }
        UpdatePasswordComponent.prototype.ngOnInit = function () { };
        UpdatePasswordComponent.prototype.modaldismiss = function () {
            this.modalCtrl.dismiss();
        };
        return UpdatePasswordComponent;
    }());
    UpdatePasswordComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UpdatePasswordComponent, deps: [{ token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UpdatePasswordComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UpdatePasswordComponent, selector: "app-update-password", ngImport: i0__namespace, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Password</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"updte_pswd\">\r\n    <div class=\"skeleton_cnt\">\r\n      <div class=\"succ_skeleton\">\r\n        <div class=\"skel_row\">\r\n          <ion-img src=\"assets/icon/success_alert.svg\"></ion-img>\r\n          <ion-label>Your password has been updated</ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding error\" size=\"12\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-input placeholder=\"Current password\" value=\"Neil Burgess\" type=\"password\"></ion-input>\r\n              <ion-img class=\"pwd_valid\" src=\"assets/icon/pwd_decrypt.svg\"></ion-img>\r\n            </ion-item>\r\n            <ion-label class=\"err_msge\" style=\"display: block;\">This password doesn\u2019t match what we have for you\r\n            </ion-label>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"12\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-input placeholder=\"New password\"></ion-input>\r\n              <ion-img class=\"pwd_valid\" src=\"assets/icon/pwd_decrypt.svg\"></ion-img>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"12\">\r\n          <div class=\"pwdval_cnt\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt error\">ABC</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"split_line\"></ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt success\">abc</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"split_line\"></ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt\">123</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"split_line\"></ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt\">!@%</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"split_line\"></ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt\">8 characters</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"12\">\r\n          <ion-button class=\"update_btn\" color=\"primary\" disabled>Update</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"12\">\r\n          <div class=\"forgot_pwd\">\r\n            <!-- <ion-router-link color=\"primary\">Forgot password</ion-router-link> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n<!-- <ion-footer class=\"updpwd_ft\">\r\n    <ion-label>The information you provide will be used to update the password on your account. Visit our <ion-router-link color=\"primary\">Privacy Policy</ion-router-link> to learn more.</ion-label>\r\n</ion-footer> -->", styles: [".updte_pswd{padding:30px 15px 0}.updte_pswd ion-col{--background:transparent}.updte_pswd ion-col ion-list{margin-bottom:24px;background:transparent}.updte_pswd ion-item{position:relative;--padding-start: 0;--inner-padding-end:0;--inner-border-width:0;--border-color:transparent;--highlight-color-focused: transparent;--background: transparent}.updte_pswd ion-item ion-input{font:16px/24px \"Poppins-Regular\";border:1px solid #CBD5E1;border-radius:26px;--border-radius: 26px;color:#94a3b8;--placeholder-opacity: 1;--padding-start:15px;--padding-end:15px;--padding-top: 13px;--padding-bottom: 13px}.updte_pswd ion-item ion-input.has-focus,.updte_pswd ion-item ion-input.has-value{color:#000}.updte_pswd ion-item ion-input.has-focus{border:1px solid #3460DC}.updte_pswd ion-item .pwd_valid{position:absolute;right:16px;top:15px}.updte_pswd .error ion-input{border:1px solid #EF4444}.updte_pswd .error .err_msge{font:12px/18px \"Poppins-Regular\";color:#ef4444;margin-top:4px}.updte_pswd .pwdval_cnt ion-list{display:flex;justify-content:center;margin:-12px 0 18px}.updte_pswd .pwdval_cnt ion-list .vali_txt{font:14px/20px \"Poppins-Regular\";color:#000;margin:0}.updte_pswd .pwdval_cnt ion-list .split_line{width:1px;height:20px;--min-height: 20px;background:#CBD5E1;margin-inline:0;margin:0 8px}.updte_pswd .update_btn{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;width:100%;height:41px;margin:0}.updte_pswd .update_btn.button-disabled{--ion-color-base: #E2E8F0!important;opacity:1;--ion-color-contrast: #94A3B8!important}.updte_pswd .forgot_pwd{text-align:center;padding:32px 0}.updte_pswd .forgot_pwd ion-router-link{font:14px/17px \"Poppins-SemiBold\"}.updte_pswd .forgot_pwd ion-router-link.ion-activated{color:#173ead}.updpwd_ft{text-align:center;background:#F8FAFC}.updpwd_ft:before{background-image:none!important}.updpwd_ft ion-label{font:14px/20px \"Poppins-Regular\";padding:10px 20px;display:block}.updpwd_ft ion-label ion-router-link{text-decoration:underline}.updpwd_ft ion-label ion-router-link.ion-activated{color:#173ead}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { type: i1__namespace.IonRow, selector: "ion-row" }, { type: i1__namespace.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i1__namespace.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UpdatePasswordComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-update-password',
                        templateUrl: './update-password.component.html',
                        styleUrls: ['./update-password.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ModalController }]; } });

    var YourGradesComponent = /** @class */ (function () {
        function YourGradesComponent(modalCtrl) {
            this.modalCtrl = modalCtrl;
        }
        YourGradesComponent.prototype.ngOnInit = function () { };
        YourGradesComponent.prototype.openQualificationModal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCtrl.create({
                                component: QualificationComponent,
                                cssClass: 'my-modal-styles'
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        YourGradesComponent.prototype.modaldismiss = function () {
            this.modalCtrl.dismiss();
        };
        return YourGradesComponent;
    }());
    YourGradesComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: YourGradesComponent, deps: [{ token: i1__namespace.ModalController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    YourGradesComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: YourGradesComponent, selector: "app-your-grades", ngImport: i0__namespace, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Your grades</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"cntpers_det cntstu_det your_grades\" mode=ios>\r\n<div class=\"ygrd_sec\"> \r\n<!-- Your Grades -->\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label><h2>Calculate your UCAS points</h2></ion-label>\r\n  </ion-list-header>\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">A-level</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<div class=\"fltr_levls\">\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">A*</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">A</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">B</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">C</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">D</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">E</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ion-card class=\"add_qualif\">\r\n  <ion-card-header>\r\n    <ion-card-title>Have more qualifications?</ion-card-title>\r\n    <ion-button fill=\"outline\" (click)=\"openQualificationModal()\">+ Add qualification</ion-button>\r\n  </ion-card-header>\r\n  </ion-card>\r\n<!-- Your Grades -->\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"ygrd_ft\">\r\n  <ion-toolbar>\r\n      <ion-label class=\"ucas_pts\">Your UCAS points <span class=\"ucas_val\">0</span></ion-label>\r\n      <ion-label class=\"ucas_pts_btn\">\r\n        <ion-button expand=\"block\" class=\"update_btn\" color=\"primary\" disabled>Update</ion-button>\r\n      </ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n", styles: ["ion-content.your_grades{--background: #F8FAFC}ion-content.your_grades ion-list ion-list-header{background:#F8FAFC;padding-inline-start:0}ion-content.your_grades ion-list ion-list-header ion-label{margin:32px 0 30px;padding-left:15px}ion-content.your_grades ion-list ion-list-header ion-label h2{font:28px/34px \"Poppins-Bold\";max-width:220px}ion-content.your_grades ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.your_grades ion-list ion-item ion-label{padding:14px 14px 12px 15px;margin:0}ion-content.your_grades ion-list ion-item ion-label span{font-size:14px;line-height:17px}ion-content.your_grades ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.your_grades ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#0f172a;margin-top:3px}ion-content.your_grades ion-list ion-item ion-icon{width:22px}ion-content.your_grades ion-card{box-shadow:0 1px #e2e8f0;border-radius:8px}ion-content.your_grades ion-card.add_qualif{display:inline-block;width:calc(100% - 32px)}ion-content.your_grades ion-card.add_qualif ion-card-header{display:flex;align-items:center;flex-direction:column}ion-content.your_grades ion-card.add_qualif ion-card-header ion-card-title{font:16px/24px \"Poppins-SemiBold\";margin:0 0 10px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 19px;--padding-end: 19px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button:hover{--background-hover:#3460DC;--color-hover:#fff;opacity:1}ion-content.your_grades .fltr_levls{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;padding:10px 16px 7px}ion-content.your_grades .fltr_levls .grd_minmax{margin-top:20px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-basis:33%}ion-content.your_grades .fltr_levls .grd_minmax .grd_label{font:16px/24px \"Poppins-SemiBold\";color:#0f172a;width:30px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col{display:flex;flex-direction:row;align-items:center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-label{display:flex}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-icon{width:36px;height:36px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle{background:url(/assets/icon/minus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle.deactive{background-image:url(/assets/icon/minus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle{background:url(/assets/icon/plus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle.deactive{background-image:url(/assets/icon/plus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .grd_value{font:16px/24px \"Poppins-Regular\";color:#64748b;width:24px;height:24px;text-align:center;margin:0 6px}.ygrd_ft ion-toolbar{text-align:center;padding:14px 10px 25px}.ygrd_ft .ucas_pts{font:14px/20px \"Poppins-Regular\";display:flex;justify-content:center;align-items:center;margin-bottom:15px}.ygrd_ft .ucas_pts .ucas_val{font:12px/30px \"Poppins-SemiBold\";color:#64748b;width:36px;height:30px;background:#F1F5F9;border-radius:4px;margin-left:8px}.ygrd_ft .ucas_pts_btn ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 40px;--box-shadow: none}.ygrd_ft .ucas_pts_btn ion-button.button-disabled{--ion-color-base: #E2E8F0!important;--ion-color-contrast: #94A3B8!important;opacity:1}\n"], components: [{ type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1__namespace.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonItemGroup, selector: "ion-item-group" }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1__namespace.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i1__namespace.IonCardHeader, selector: "ion-card-header", inputs: ["color", "mode", "translucent"] }, { type: i1__namespace.IonCardTitle, selector: "ion-card-title", inputs: ["color", "mode"] }, { type: i1__namespace.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: YourGradesComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-your-grades',
                        templateUrl: './your-grades.component.html',
                        styleUrls: ['./your-grades.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ModalController }]; } });

    var UserProfileModule = /** @class */ (function () {
        function UserProfileModule() {
        }
        return UserProfileModule;
    }());
    UserProfileModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfileModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UserProfileModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfileModule, declarations: [UserProfileComponent,
            YearOfEntryComponent,
            AccessToHEDiplomaComponent,
            ContactUsComponent,
            MultipleQualificationComponent,
            QualificationComponent,
            StudyLevelComponent,
            UcasTariffPointsComponent,
            UpdatePasswordComponent,
            YourGradesComponent], imports: [UserProfilePageRoutingModule$1,
            UserProfilePageRoutingModule$1,
            LocationServicesPageModule,
            NotificationsPageModule,
            PersonalDetailPageModule,
            StudyDetailsPageModule,
            UserSettingsPageModule, i1__namespace.IonicModule], exports: [UserProfileComponent] });
    UserProfileModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfileModule, providers: [{ provide: i1$2.RouteReuseStrategy, useClass: i1.IonicRouteStrategy }], imports: [[
                UserProfilePageRoutingModule$1,
                UserProfilePageRoutingModule$1,
                LocationServicesPageModule,
                NotificationsPageModule,
                PersonalDetailPageModule,
                StudyDetailsPageModule,
                UserSettingsPageModule,
                i1.IonicModule.forRoot()
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfileModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            UserProfileComponent,
                            YearOfEntryComponent,
                            AccessToHEDiplomaComponent,
                            ContactUsComponent,
                            MultipleQualificationComponent,
                            QualificationComponent,
                            StudyLevelComponent,
                            UcasTariffPointsComponent,
                            UpdatePasswordComponent,
                            YourGradesComponent
                        ],
                        imports: [
                            UserProfilePageRoutingModule$1,
                            UserProfilePageRoutingModule$1,
                            LocationServicesPageModule,
                            NotificationsPageModule,
                            PersonalDetailPageModule,
                            StudyDetailsPageModule,
                            UserSettingsPageModule,
                            i1.IonicModule.forRoot()
                        ],
                        providers: [{ provide: i1$2.RouteReuseStrategy, useClass: i1.IonicRouteStrategy }],
                        exports: [
                            UserProfileComponent
                        ]
                    }]
            }] });

    var UserProfilePage = /** @class */ (function () {
        function UserProfilePage(router, modalCntrl, iab) {
            this.router = router;
            this.modalCntrl = modalCntrl;
            this.iab = iab;
        }
        UserProfilePage.prototype.ngOnInit = function () {
        };
        UserProfilePage.prototype.gotoPersonalDetails = function () {
            this.router.navigate(['/personal-detail']);
        };
        UserProfilePage.prototype.gotoStudyDetails = function () {
            this.router.navigate(['/study-details']);
        };
        UserProfilePage.prototype.gotoUserSettings = function () {
            this.router.navigate(['/user-settings']);
        };
        UserProfilePage.prototype.gotoLocationServices = function () {
            this.router.navigate(['/location-services']);
        };
        UserProfilePage.prototype.gotoNotifications = function () {
            this.router.navigate(['/notifications']);
        };
        UserProfilePage.prototype.openYourGradesModal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCntrl.create({
                                component: YourGradesComponent,
                                cssClass: 'my-modal-styles'
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserProfilePage.prototype.openUpdatePwdModal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCntrl.create({
                                component: UpdatePasswordComponent,
                                cssClass: 'my-modal-styles'
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserProfilePage.prototype.openContactUsModal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var modal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.modalCntrl.create({
                                component: ContactUsComponent,
                                cssClass: 'my-modal-styles'
                            })];
                        case 1:
                            modal = _a.sent();
                            return [4 /*yield*/, modal.present()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserProfilePage.prototype.openPlaystore = function () {
            // this.market.open('com.hotcourses.group.wuapp');
            var options = {
                closebuttoncaption: 'X',
                clearcache: 'yes',
                location: 'yes',
                hardwareback: 'no',
                footer: 'no',
                hidenavigationbuttons: 'yes',
                hideurlbar: 'yes',
                toolbarcolor: '#333333',
                toolbarposition: 'top'
            };
            this.iab.create('https://play.google.com/store/apps/details?id=com.hotcourses.group.wuapp', '', options);
        };
        UserProfilePage.prototype.openInapp = function (eve) {
            var options = {
                closebuttoncaption: 'X',
                clearcache: 'yes',
                location: 'yes',
                hardwareback: 'no',
                footer: 'no',
                hidenavigationbuttons: 'yes',
                hideurlbar: 'yes',
                toolbarcolor: '#333333',
                toolbarposition: 'top'
            };
            this.iab.create(eve, '', options);
        };
        return UserProfilePage;
    }());
    UserProfilePage.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePage, deps: [{ token: i1__namespace$2.Router }, { token: i1__namespace.ModalController }, { token: i3__namespace$1.InAppBrowser }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UserProfilePage.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserProfilePage, selector: "app-user-profile", ngImport: i0__namespace, template: "<ion-content [fullscreen]=\"true\" class=\"user_prof\" mode=ios>\r\n  <ion-header>\r\n    <div class=\"user_sec\">\r\n      <div class=\"user_thumb\">NB</div>\r\n      <div class=\"user_name\">\r\n        <h1>Neil Burgess</h1>\r\n      </div>\r\n      <!-- <ion-chip outline color=\"dark\" class=\"msge_pos\">\r\n              <ion-label>Messages</ion-label>\r\n              <ion-img src=\"assets/icon/message_icon.svg\"></ion-img>\r\n              <ion-badge color=\"danger\">4</ion-badge>\r\n            </ion-chip> -->\r\n    </div>\r\n  </ion-header>\r\n  <!-- User list -->\r\n  <!-- Your Details -->\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <h2>Your details</h2>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"gotoPersonalDetails()\">\r\n        <ion-label><span class=\"semiBold\">Personal details</span></ion-label>\r\n        <span class=\"inc_staus\"></span>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"openYourGradesModal()\">\r\n        <ion-label><span class=\"semiBold\">Your grades</span></ion-label>\r\n        <span class=\"inc_staus\"></span>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"gotoStudyDetails()\">\r\n        <ion-label><span class=\"semiBold\">Study details</span></ion-label>\r\n        <span class=\"inc_staus\"></span>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"openUpdatePwdModal()\">\r\n        <ion-label><span class=\"semiBold\">Update password</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Your Details -->\r\n  <!-- Settings -->\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <h2>Settings</h2>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"gotoNotifications()\">\r\n        <ion-label><span class=\"semiBold\">Notifications</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"gotoLocationServices()\">\r\n        <ion-label><span class=\"semiBold\">Location services</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"gotoUserSettings()\">\r\n        <ion-label><span class=\"semiBold\">Preferences</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Settings -->\r\n  <!-- General -->\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <h2>General</h2>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"openContactUsModal()\">\r\n        <ion-label><span class=\"semiBold\">Contact us</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- General -->\r\n  <!-- Inner browser list -->\r\n  <ion-list>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"openPlaystore()\">\r\n        <ion-label><span class=\"semiBold\">Rate us</span></ion-label>\r\n        <ion-img src=\"assets/icon/internal_lnk_icon.svg\"></ion-img>\r\n      </ion-item>\r\n      <ion-item (click)=\"openInapp('https://www.whatuni.com/wu-cont/privacy.htm')\">\r\n        <ion-label><span class=\"semiBold\">Privacy policy</span></ion-label>\r\n        <ion-img src=\"assets/icon/internal_lnk_icon.svg\"></ion-img>\r\n      </ion-item>\r\n      <ion-item (click)=\"openInapp('https://www.whatuni.com/wu-cont/termsAndCondition.htm')\">\r\n        <ion-label><span class=\"semiBold\">Terms and conditions</span></ion-label>\r\n        <ion-img src=\"assets/icon/internal_lnk_icon.svg\"></ion-img>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Inner browser list -->\r\n  <ion-label class=\"sign_out\">\r\n    <ion-button expand=\"block\" fill=\"outline\">Sign out</ion-button>\r\n  </ion-label>\r\n  <!-- User list -->\r\n</ion-content>", styles: [".user_prof ion-list{padding:0}.user_prof ion-list ion-list-header{background:#F8FAFC;padding-inline-start:16px}.user_prof ion-list ion-list-header h2{font:19px/23px \"Poppins-Bold\";color:#0f172a}.user_prof ion-list ion-list-header ion-label{margin-top:32px;margin-bottom:14px}.user_prof ion-list ion-item{--padding-start:0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}.user_prof ion-list ion-item .item-native{--border-color:transparent }.user_prof ion-list ion-item ion-label{padding:19px 0 19px 16px;margin:0}.user_prof ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}.user_prof ion-list ion-item ion-icon{--color:#0F172A;padding-right:2px;width:22px}.user_prof ion-list ion-item ion-img{padding-right:5px}.user_prof ion-list ion-item .inc_staus{width:8px;height:8px;background:#FF3B30;border-radius:8px;margin-right:7px}.user_prof .sign_out ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 18px;--padding-end: 18px;--padding-top: 2px;height:41px;margin:30px 2px;margin-inline:15px}.item .sc-ion-label-ios-h{--color:#0F172A }\n"], components: [{ type: i1__namespace.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1__namespace.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1__namespace.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1__namespace.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1__namespace.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1__namespace.IonItemGroup, selector: "ion-item-group" }, { type: i1__namespace.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1__namespace.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1__namespace.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1__namespace.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePage, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-user-profile',
                        templateUrl: './user-profile.page.html',
                        styleUrls: ['./user-profile.page.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.Router }, { type: i1__namespace.ModalController }, { type: i3__namespace$1.InAppBrowser }]; } });

    var routes = [
        {
            path: '',
            component: UserProfilePage,
        },
    ];
    var UserProfilePageRoutingModule = /** @class */ (function () {
        function UserProfilePageRoutingModule() {
        }
        return UserProfilePageRoutingModule;
    }());
    UserProfilePageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UserProfilePageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageRoutingModule, imports: [i1__namespace$2.RouterModule], exports: [i1$2.RouterModule] });
    UserProfilePageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageRoutingModule, imports: [[i1$2.RouterModule.forChild(routes)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes)],
                        exports: [i1$2.RouterModule],
                    }]
            }] });

    var UserProfilePageModule = /** @class */ (function () {
        function UserProfilePageModule() {
        }
        return UserProfilePageModule;
    }());
    UserProfilePageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UserProfilePageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageModule, declarations: [UserProfilePage], imports: [i3.CommonModule,
            i1$1.FormsModule,
            i1.IonicModule,
            UserProfilePageRoutingModule] });
    UserProfilePageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageModule, providers: [i3$1.InAppBrowser], imports: [[
                i3.CommonModule,
                i1$1.FormsModule,
                i1.IonicModule,
                UserProfilePageRoutingModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserProfilePageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i1$1.FormsModule,
                            i1.IonicModule,
                            UserProfilePageRoutingModule,
                        ],
                        declarations: [UserProfilePage],
                        providers: [i3$1.InAppBrowser]
                    }]
            }] });

    /*
     * Public API Surface of user-profile
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LocationServicesPage = LocationServicesPage;
    exports.LocationServicesPageModule = LocationServicesPageModule;
    exports.NotificationsPage = NotificationsPage;
    exports.NotificationsPageModule = NotificationsPageModule;
    exports.NotificationsPageRoutingModule = NotificationsPageRoutingModule;
    exports.PersonalDetailPage = PersonalDetailPage;
    exports.PersonalDetailPageModule = PersonalDetailPageModule;
    exports.StudyDetailsPage = StudyDetailsPage;
    exports.StudyDetailsPageModule = StudyDetailsPageModule;
    exports.StudyDetailsPageRoutingModule = StudyDetailsPageRoutingModule;
    exports.UserProfileComponent = UserProfileComponent;
    exports.UserProfileModule = UserProfileModule;
    exports.UserProfilePage = UserProfilePage;
    exports.UserProfilePageModule = UserProfilePageModule;
    exports.UserProfilePageRoutingModule = UserProfilePageRoutingModule$1;
    exports.UserProfileService = UserProfileService;
    exports.UserSettingsPage = UserSettingsPage;
    exports.UserSettingsPageModule = UserSettingsPageModule;
    exports.UserSettingsPageRoutingModule = UserSettingsPageRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=user-profile.umd.js.map
