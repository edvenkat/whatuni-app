import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@ionic/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import * as i1$2 from '@angular/router';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __awaiter } from 'tslib';
import * as i1$3 from '@awesome-cordova-plugins/open-native-settings/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import * as i2 from '@awesome-cordova-plugins/diagnostic/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import * as i3$1 from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

class UserProfileService {
    constructor() { }
}
UserProfileService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UserProfileService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class UserProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UserProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserProfileComponent, selector: "lib-user-profile", ngImport: i0, template: `
  <ion-app>
  <ion-router-outlet></ion-router-outlet>

</ion-app>
  `, isInline: true, components: [{ type: i1.IonApp, selector: "ion-app" }], directives: [{ type: i1.IonRouterOutlet, selector: "ion-router-outlet", inputs: ["animated", "animation", "swipeGesture"], outputs: ["stackEvents", "activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-user-profile',
                    template: `
  <ion-app>
  <ion-router-outlet></ion-router-outlet>

</ion-app>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class PersonalDetailPage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.errMsgs = [];
        this.profileForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
        });
    }
    ngOnInit() {
    }
    save() {
        var _a, _b;
        let errMsgs = [];
        if (!((_a = this.profileForm.get('firstName')) === null || _a === void 0 ? void 0 : _a.valid)) {
            errMsgs.push('First name is required');
        }
        if (!((_b = this.profileForm.get('lastName')) === null || _b === void 0 ? void 0 : _b.valid)) {
            errMsgs.push('Last name is required');
        }
        this.errMsgs = errMsgs;
    }
}
PersonalDetailPage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPage, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
PersonalDetailPage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: PersonalDetailPage, selector: "app-personal-detail", ngImport: i0, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Personal details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"modal_done\" (click)=\"save()\">Save</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det\" mode=ios>\r\n  <div class=\"skeleton_cnt\">\r\n\r\n\r\n    <!-------Error Message Container--------->\r\n    <ng-container *ngFor=\"let msg of errMsgs\">\r\n      <div class=\"err_skeleton\">\r\n        <div class=\"skel_row\">\r\n          <ion-img src=\"assets/icon/error_alert.svg\"></ion-img>\r\n          <ion-label>Error - {{msg}}</ion-label>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n  <form [formGroup]=\"profileForm\">\r\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\"><span class=\"input_label\">First name</span></ion-label>\r\n        <ion-input value=\"Neil\" formControlName=\"firstName\"></ion-input>\r\n        <ion-img class=\"delete\" src=\"assets/icon/edit_cross_icon.svg\"></ion-img>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\"><span class=\"input_label\">Last name</span></ion-label>\r\n        <ion-input value=\"Burgess\" formControlName=\"lastName\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\"><span class=\"input_label\">Email</span></ion-label>\r\n        <ion-input value=\"Neil.burgess@idp.com\" readonly></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\"><span class=\"input_label\">Mobile number</span></ion-label>\r\n        <ion-input value=\"+44 7777 777 7777\" readonly></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n  </form>\r\n</ion-content>", styles: ["ion-content.cntpers_det{--background: #F8FAFC}ion-content.cntpers_det ion-list{margin-top:32px}ion-content.cntpers_det .list-ios-lines-full ion-item{--border-color: #E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px;--padding-start: 16px}ion-content.cntpers_det ion-item{position:relative}ion-content.cntpers_det ion-item ion-label{margin:15px 8px 0 0}ion-content.cntpers_det ion-item ion-label .input_label{font:18px/23px \"Poppins-SemiBold\";color:#0f172a}ion-content.cntpers_det ion-item ion-label .mandatory{padding:2px}ion-content.cntpers_det ion-item ion-input{font:14px/20px \"Poppins-Regular\"}ion-content.cntpers_det ion-item.item-label-floating .sc-ion-input-ios-h{--padding-top: 0px;--padding-bottom: 14px}ion-content.cntpers_det ion-item .inc_staus{width:8px;height:8px;background:#FF3B30;border-radius:8px;margin-right:7px}ion-content.cntpers_det ion-item ion-img.delete{position:absolute;top:24px;right:15px}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i1.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPage, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-personal-detail',
                    templateUrl: './personal-detail.page.html',
                    styleUrls: ['./personal-detail.page.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }]; } });

const routes$6 = [
    {
        path: '',
        component: PersonalDetailPage
    }
];
class PersonalDetailPageRoutingModule {
}
PersonalDetailPageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PersonalDetailPageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPageRoutingModule, imports: [i1$2.RouterModule], exports: [RouterModule] });
PersonalDetailPageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPageRoutingModule, imports: [[RouterModule.forChild(routes$6)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$6)],
                    exports: [RouterModule],
                }]
        }] });

class PersonalDetailPageModule {
}
PersonalDetailPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PersonalDetailPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPageModule, declarations: [PersonalDetailPage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        PersonalDetailPageRoutingModule,
        ReactiveFormsModule] });
PersonalDetailPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPageModule, imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            PersonalDetailPageRoutingModule,
            ReactiveFormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: PersonalDetailPageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        PersonalDetailPageRoutingModule,
                        ReactiveFormsModule
                    ],
                    declarations: [PersonalDetailPage]
                }]
        }] });

class StudyLevelComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    modaldismiss() {
        this.modalCtrl.dismiss();
    }
}
StudyLevelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyLevelComponent, deps: [{ token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
StudyLevelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: StudyLevelComponent, selector: "app-study-level", ngImport: i0, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Study level</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button class=\"modal_done\">Done</ion-button>\r\n      </ion-buttons>  \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"sthlvl_title\">\r\n  <ion-text class=\"chse_title\">Choose one or more</ion-text>\r\n  <ion-list class=\"stu_details_radiobox\">\r\n    <ion-radio-group>\r\n        <ion-item>\r\n          <ion-label>Access foundation</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"Access foundation\"></ion-radio>\r\n        </ion-item>   \r\n        <ion-item>\r\n          <ion-label>HND / HNC</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"HND / HNC\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Foundation degree</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"Foundation degree\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Postgraduate</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"Postgraduate\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Undergraduate</ion-label>\r\n          <ion-radio slot=\"end\" color=\"success\" value=\"Undergraduate\"></ion-radio>\r\n        </ion-item>\r\n    </ion-radio-group>    \r\n  </ion-list>\r\n</div>  \r\n</ion-content>", styles: [".sthlvl_title{padding:32px 15px 15px}.sthlvl_title ion-list{background:transparent}.sthlvl_title .chse_title{font:12px/18px \"Poppins-SemiBold\";color:#64748b;text-transform:uppercase;float:left;width:100%;margin-bottom:8px}.stu_details_radiobox{display:flex;float:left;flex-wrap:wrap;padding-right:26px}.stu_details_radiobox ion-item{--min-height: 39px;--background:transparent;--background-hover: transparent;--background-activated:transparent;--background-focused: transparent;--border-color: #3460DC;--inner-border-width: 0;--border-width: 1px;--border-radius: 24px;--inner-padding-end:o;--padding-start: 0;--padding-end: 0;margin:0 8px 8px 0;text-align:center}.stu_details_radiobox ion-item ion-label{font:14px/17px \"Poppins-SemiBold\";--color: #3460DC;margin:0;padding:0 17px}.stu_details_radiobox ion-item ion-radio{opacity:0;position:absolute;left:0;width:100%;height:38px;--border-radius: 38px;--padding-start: 0;--padding-end: 0;margin-inline:0px}.stu_details_radiobox ion-item.item-radio-checked{--background:#3460DC}.stu_details_radiobox ion-item.item-radio-checked ion-label{color:#fff}.stu_details_radiobox ion-radio-group{display:flex;float:left;flex-wrap:wrap}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i1.RadioValueAccessor, selector: "ion-radio" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyLevelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-study-level',
                    templateUrl: './study-level.component.html',
                    styleUrls: ['./study-level.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }]; } });

class YearOfEntryComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    modaldismiss() {
        this.modalCtrl.dismiss();
    }
}
YearOfEntryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: YearOfEntryComponent, deps: [{ token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
YearOfEntryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: YearOfEntryComponent, selector: "app-year-of-entry", ngImport: i0, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Year of entry</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button class=\"modal_done\">Done</ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"sthlvl_title\">\r\n  <ion-text class=\"chse_title\">Choose one</ion-text>\r\n  <ion-list class=\"stu_details_chkbox\">\r\n    <ion-radio-group>\r\n      <ion-item>\r\n        <ion-label>2022</ion-label>\r\n        <ion-radio slot=\"end\" color=\"success\" value=\"2022\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>2023</ion-label>\r\n        <ion-radio slot=\"end\" color=\"success\" value=\"2023\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>2024</ion-label>\r\n        <ion-radio slot=\"end\" color=\"success\" value=\"2024\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>2025</ion-label>\r\n        <ion-radio slot=\"end\" color=\"success\" value=\"2025\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n</div>  \r\n</ion-content>", styles: [".sthlvl_title{padding:32px 15px 15px}.sthlvl_title ion-list{background:transparent}.sthlvl_title .chse_title{font:12px/18px \"Poppins-SemiBold\";color:#64748b;text-transform:uppercase;float:left;width:100%;margin-bottom:8px}.stu_details_chkbox{display:flex;float:left;flex-wrap:wrap;padding-right:24px}.stu_details_chkbox ion-item{--min-height: 39px;--background:transparent;--background-hover: transparent;--background-activated:transparent;--background-focused: transparent;--border-color: #3460DC;--inner-border-width: 0;--border-width: 1px;--border-radius: 24px;--inner-padding-end:o;--padding-start: 0;--padding-end: 0;margin:0 8px 8px 0}.stu_details_chkbox ion-item ion-label{font:14px/16px \"Poppins-SemiBold\";--color: #3460DC;margin:0;padding:0 16px}.stu_details_chkbox ion-item ion-radio{opacity:0;position:absolute;left:0;width:100%;height:38px;--border-radius: 38px;--padding-start: 0;--padding-end: 0;margin-inline:0px}.stu_details_chkbox ion-item.item-radio-checked{--background:#3460DC}.stu_details_chkbox ion-item.item-radio-checked ion-label{color:#fff}.stu_details_chkbox ion-radio-group{display:flex;float:left;flex-wrap:wrap}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i1.RadioValueAccessor, selector: "ion-radio" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: YearOfEntryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-year-of-entry',
                    templateUrl: './year-of-entry.component.html',
                    styleUrls: ['./year-of-entry.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }]; } });

class StudyDetailsPage {
    constructor(router, modalCntrl) {
        this.router = router;
        this.modalCntrl = modalCntrl;
    }
    ngOnInit() {
    }
    openStudyLevelModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCntrl.create({
                component: StudyLevelComponent,
                cssClass: 'my-modal-styles'
            });
            yield modal.present();
        });
    }
    openYearofEntryModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCntrl.create({
                component: YearOfEntryComponent,
                cssClass: 'my-modal-styles'
            });
            yield modal.present();
        });
    }
}
StudyDetailsPage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPage, deps: [{ token: i1$2.Router }, { token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
StudyDetailsPage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: StudyDetailsPage, selector: "app-study-details", ngImport: i0, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Study details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det cntstu_det\" mode=ios>\r\n<!-- Study Details -->\r\n<ion-list>\r\n  <!-- <ion-list-header>\r\n    <ion-label></ion-label>\r\n  </ion-list-header> -->\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openStudyLevelModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Study level</span>\r\n        <span class=\"regular qual_subtit\">Not set</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n  <ion-item (click)=\"openYearofEntryModal()\">\r\n    <ion-label>\r\n      <span class=\"semiBold\">Year of entry</span>\r\n      <span class=\"regular qual_subtit\">Not set</span>    \r\n    </ion-label>\r\n    <span class=\"inc_staus\"></span>\r\n    <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<!-- Study Details -->\r\n</ion-content>\r\n", styles: ["ion-content.cntstu_det{--background: #F8FAFC}ion-content.cntstu_det ion-list{margin-top:32px}ion-content.cntstu_det ion-list ion-list-header{background:#F8FAFC}ion-content.cntstu_det ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.cntstu_det ion-list ion-item ion-label{padding:14px 14px 12px 16px;margin:0}ion-content.cntstu_det ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}ion-content.cntstu_det ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.cntstu_det ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#64748b;margin-top:3px}ion-content.cntstu_det ion-list ion-item ion-icon{width:22px}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonItemGroup, selector: "ion-item-group" }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }], directives: [{ type: i1.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPage, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-study-details',
                    templateUrl: './study-details.page.html',
                    styleUrls: ['./study-details.page.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$2.Router }, { type: i1.ModalController }]; } });

const routes$5 = [
    {
        path: '',
        component: StudyDetailsPage
    }
];
class StudyDetailsPageRoutingModule {
}
StudyDetailsPageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StudyDetailsPageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPageRoutingModule, imports: [i1$2.RouterModule], exports: [RouterModule] });
StudyDetailsPageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPageRoutingModule, imports: [[RouterModule.forChild(routes$5)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$5)],
                    exports: [RouterModule],
                }]
        }] });

class StudyDetailsPageModule {
}
StudyDetailsPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StudyDetailsPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPageModule, declarations: [StudyDetailsPage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        StudyDetailsPageRoutingModule] });
StudyDetailsPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPageModule, imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            StudyDetailsPageRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: StudyDetailsPageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        StudyDetailsPageRoutingModule
                    ],
                    declarations: [StudyDetailsPage]
                }]
        }] });

const routes$4 = [
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
class UserProfilePageRoutingModule$1 {
    static getRoutes() {
        return routes$4;
    }
}
UserProfilePageRoutingModule$1.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule$1, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserProfilePageRoutingModule$1.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule$1, imports: [i1$2.RouterModule], exports: [RouterModule] });
UserProfilePageRoutingModule$1.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule$1, imports: [[RouterModule.forChild(routes$4)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule$1, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$4)],
                    exports: [RouterModule],
                }]
        }] });

class LocationServicesPage {
    constructor(openNativeSettings, diagnostic, platform) {
        this.openNativeSettings = openNativeSettings;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.locationEnable = false;
    }
    ngOnInit() {
        this.diagnostic.isLocationEnabled().then(res => {
            this.locationEnable = res;
        }, err => {
            console.log(err);
        });
        this.platform.resume.subscribe(() => __awaiter(this, void 0, void 0, function* () {
            this.diagnostic.isLocationEnabled().then(res => {
                this.locationEnable = res;
            }, err => {
                console.log(err);
            });
        }));
    }
    toggleChange(eve) {
        this.openNativeSettings.open('location').then(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
}
LocationServicesPage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPage, deps: [{ token: i1$3.OpenNativeSettings }, { token: i2.Diagnostic }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component });
LocationServicesPage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: LocationServicesPage, selector: "app-location-services", ngImport: i0, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Location</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det cntstu_det user_settings\" mode=ios>\r\n<!-- User settings -->\r\n<ion-list>\r\n  <!-- <ion-list-header>\r\n    <ion-label></ion-label>\r\n  </ion-list-header> -->\r\n  <ion-item-group>\r\n    <ion-item>\r\n      <ion-label>\r\n        <span class=\"semiBold\">Location services</span>\r\n        <span class=\"regular qual_subtit uset_tit\">Emails from us providing you the latest university news, tips and guides</span>\r\n      </ion-label>\r\n      <ion-item class=\"usrset_tog\">\r\n        <ion-toggle slot=\"end\" name=\"Newsletters\" color=\"medium\" [checked]=\"locationEnable\" (ionChange)=\"toggleChange($event)\"></ion-toggle>\r\n      </ion-item>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<!-- User settings -->\r\n</ion-content>\r\n", styles: ["ion-content.user_settings ion-list{margin-top:32px}ion-content.user_settings ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.user_settings ion-list ion-item ion-label{padding:14px 14px 12px 16px;margin:0}ion-content.user_settings ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}ion-content.user_settings ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.user_settings ion-list ion-item.item ion-label .uset_tit{font:12px/18px \"Poppins-Regular\";color:#64748b;margin-top:3px;white-space:initial}ion-content.user_settings ion-list ion-item .usrset_tog{--border-color:#fff;--inner-border-width:0;box-shadow:none;margin-bottom:0}ion-content.user_settings ion-list ion-item .usrset_tog ion-toggle{width:43px;height:25px;--handle-spacing: 3px;--background: #64748B;--background-checked: #fff;--handle-background: #fff;--handle-background-checked: #fff;--handle-width: 18px;--handle-height:18px;--handle-max-height:18px;--ion-color-base: #00B26D!important;padding-inline:0}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonItemGroup, selector: "ion-item-group" }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }, { type: i1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPage, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-location-services',
                    templateUrl: './location-services.page.html',
                    styleUrls: ['./location-services.page.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$3.OpenNativeSettings }, { type: i2.Diagnostic }, { type: i1.Platform }]; } });

const routes$3 = [
    {
        path: '',
        component: LocationServicesPage
    }
];
class LocationServicesPageRoutingModule {
}
LocationServicesPageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LocationServicesPageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageRoutingModule, imports: [i1$2.RouterModule], exports: [RouterModule] });
LocationServicesPageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageRoutingModule, imports: [[RouterModule.forChild(routes$3)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$3)],
                    exports: [RouterModule],
                }]
        }] });

class LocationServicesPageModule {
}
LocationServicesPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LocationServicesPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageModule, declarations: [LocationServicesPage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        LocationServicesPageRoutingModule] });
LocationServicesPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageModule, providers: [OpenNativeSettings, Diagnostic], imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            LocationServicesPageRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        LocationServicesPageRoutingModule
                    ],
                    declarations: [LocationServicesPage],
                    providers: [OpenNativeSettings, Diagnostic]
                }]
        }] });

class NotificationsPage {
    constructor(openNativeSettings, diagnostic, platform) {
        this.openNativeSettings = openNativeSettings;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.notificationEnable = false;
    }
    ngOnInit() {
        this.diagnostic.isRemoteNotificationsEnabled().then(res => {
            this.notificationEnable = res;
        }, err => {
            console.log(err);
        });
        this.platform.resume.subscribe(() => __awaiter(this, void 0, void 0, function* () {
            this.diagnostic.isRemoteNotificationsEnabled().then(res => {
                this.notificationEnable = res;
            }, err => {
                console.log(err);
            });
        }));
    }
    toggleChange(eve) {
        this.openNativeSettings.open('notification_id').then(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
}
NotificationsPage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPage, deps: [{ token: i1$3.OpenNativeSettings }, { token: i2.Diagnostic }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component });
NotificationsPage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: NotificationsPage, selector: "app-notifications", ngImport: i0, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Notifications</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det cntstu_det user_settings\" mode=ios>\r\n<!-- User settings -->\r\n<ion-list>\r\n  <!-- <ion-list-header>\r\n    <ion-label></ion-label>\r\n  </ion-list-header> -->\r\n  <ion-item-group>\r\n    <ion-item>\r\n      <ion-label>\r\n        <span class=\"semiBold\">All push notifications</span>\r\n        <span class=\"regular qual_subtit uset_tit\">Turn on to receive order tracking updates, price drop alerts and coupons in real time, anywhere</span>\r\n      </ion-label>\r\n      <ion-item class=\"usrset_tog\">\r\n        <ion-toggle slot=\"end\" name=\"All push notifications\" color=\"medium\" (ionChange)=\"toggleChange($event)\" [checked]=\"notificationEnable\"></ion-toggle>\r\n      </ion-item>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<!-- User settings -->\r\n</ion-content>\r\n", styles: ["ion-content.user_settings ion-list{margin-top:32px}ion-content.user_settings ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.user_settings ion-list ion-item ion-label{padding:14px 14px 12px 16px;margin:0}ion-content.user_settings ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}ion-content.user_settings ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.user_settings ion-list ion-item.item ion-label .uset_tit{font:12px/18px \"Poppins-Regular\";color:#64748b;margin-top:3px;white-space:initial}ion-content.user_settings ion-list ion-item .usrset_tog{--border-color:#fff;--inner-border-width:0;box-shadow:none;margin-bottom:0}ion-content.user_settings ion-list ion-item .usrset_tog ion-toggle{width:43px;height:25px;--handle-spacing: 3px;--background: #64748B;--background-checked: #fff;--handle-background: #fff;--handle-background-checked: #fff;--handle-width: 18px;--handle-height:18px;--handle-max-height:18px;--ion-color-base: #00B26D!important;padding-inline:0}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonItemGroup, selector: "ion-item-group" }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }, { type: i1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPage, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-notifications',
                    templateUrl: './notifications.page.html',
                    styleUrls: ['./notifications.page.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$3.OpenNativeSettings }, { type: i2.Diagnostic }, { type: i1.Platform }]; } });

const routes$2 = [
    {
        path: '',
        component: NotificationsPage
    }
];
class NotificationsPageRoutingModule {
}
NotificationsPageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NotificationsPageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageRoutingModule, imports: [i1$2.RouterModule], exports: [RouterModule] });
NotificationsPageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageRoutingModule, imports: [[RouterModule.forChild(routes$2)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$2)],
                    exports: [RouterModule],
                }]
        }] });

class NotificationsPageModule {
}
NotificationsPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NotificationsPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageModule, declarations: [NotificationsPage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        NotificationsPageRoutingModule] });
NotificationsPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageModule, providers: [OpenNativeSettings, Diagnostic], imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            NotificationsPageRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        NotificationsPageRoutingModule
                    ],
                    declarations: [NotificationsPage],
                    providers: [OpenNativeSettings, Diagnostic]
                }]
        }] });

class UserSettingsPage {
    constructor() { }
    ngOnInit() {
    }
}
UserSettingsPage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPage, deps: [], target: i0.ɵɵFactoryTarget.Component });
UserSettingsPage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserSettingsPage, selector: "app-user-settings", ngImport: i0, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Preferences</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"modal_done\">Done</ion-button>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det cntstu_det user_settings\" mode=ios>\r\n<!-- User settings -->\r\n<ion-list>\r\n  <!-- <ion-list-header>\r\n    <ion-label></ion-label>\r\n  </ion-list-header> -->\r\n  <ion-item-group>\r\n    <ion-item>\r\n      <ion-label>\r\n        <span class=\"semiBold\">Newsletters</span>\r\n        <span class=\"regular qual_subtit uset_tit\">Emails from us providing you the latest university news, tips and guides</span>\r\n      </ion-label>\r\n      <ion-item class=\"usrset_tog\">\r\n        <ion-toggle slot=\"end\" name=\"Newsletters\" color=\"medium\"></ion-toggle>\r\n      </ion-item>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      <span class=\"semiBold\">University updates</span>\r\n      <span class=\"regular qual_subtit uset_tit\">Emails on behalf of universities and carefully selected third-party partners</span>    \r\n    </ion-label>\r\n    <ion-item class=\"usrset_tog\">\r\n      <ion-toggle slot=\"end\" name=\"Newsletters\" color=\"medium\"></ion-toggle>\r\n    </ion-item>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      <span class=\"semiBold\">Surveys</span>\r\n      <span class=\"regular qual_subtit uset_tit\">Have your say on important education issues and the services you receive from us and our partners</span>    \r\n    </ion-label>\r\n    <ion-item class=\"usrset_tog\">\r\n      <ion-toggle slot=\"end\" name=\"Newsletters\" color=\"medium\"></ion-toggle>\r\n    </ion-item>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<!-- User settings -->\r\n</ion-content>\r\n", styles: ["ion-content.user_settings ion-list{margin-top:32px}ion-content.user_settings ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.user_settings ion-list ion-item ion-label{padding:14px 14px 12px 16px;margin:0}ion-content.user_settings ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}ion-content.user_settings ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.user_settings ion-list ion-item.item ion-label .uset_tit{font:12px/18px \"Poppins-Regular\";color:#64748b;margin-top:3px;white-space:initial}ion-content.user_settings ion-list ion-item .usrset_tog{--border-color:#fff;--inner-border-width:0;box-shadow:none;margin-bottom:0}ion-content.user_settings ion-list ion-item .usrset_tog ion-toggle{width:43px;height:25px;--handle-spacing: 3px;--background: #64748B;--background-checked: #fff;--handle-background: #fff;--handle-background-checked: #fff;--handle-width: 18px;--handle-height:18px;--handle-max-height:18px;--ion-color-base: #00B26D!important;padding-inline:0}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonItemGroup, selector: "ion-item-group" }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }, { type: i1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPage, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-user-settings',
                    templateUrl: './user-settings.page.html',
                    styleUrls: ['./user-settings.page.scss'],
                }]
        }], ctorParameters: function () { return []; } });

const routes$1 = [
    {
        path: '',
        component: UserSettingsPage
    }
];
class UserSettingsPageRoutingModule {
}
UserSettingsPageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserSettingsPageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPageRoutingModule, imports: [i1$2.RouterModule], exports: [RouterModule] });
UserSettingsPageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPageRoutingModule, imports: [[RouterModule.forChild(routes$1)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule],
                }]
        }] });

class UserSettingsPageModule {
}
UserSettingsPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserSettingsPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPageModule, declarations: [UserSettingsPage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        UserSettingsPageRoutingModule] });
UserSettingsPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPageModule, imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            UserSettingsPageRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserSettingsPageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        UserSettingsPageRoutingModule
                    ],
                    declarations: [UserSettingsPage]
                }]
        }] });

class AccessToHEDiplomaComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    modaldismiss() {
        this.modalCtrl.dismiss();
    }
    openQualificationModal() {
    }
}
AccessToHEDiplomaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: AccessToHEDiplomaComponent, deps: [{ token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
AccessToHEDiplomaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: AccessToHEDiplomaComponent, selector: "app-access-to-hediploma", ngImport: i0, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Your grades</ion-title>   \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"your_grades\" mode=ios>\r\n<div class=\"ygrd_sec credit_sec\"> \r\n<!-- Your Grades -->\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label><h2>Calculate your UCAS points</h2></ion-label>\r\n  </ion-list-header>\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">Access to HE Diploma</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<div class=\"ucas_tariff_sec\">\r\n  <ion-text>\r\n    <h4 >A total of 45 credits must be added for tariff points (eg D15, P15, M15)</h4>\r\n  </ion-text> \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"uct_col min_pts\">\r\n            <ion-label>Distinction</ion-label>\r\n            <ion-label class=\"credit_pts\">0 credits <ion-icon name=\"chevron-down-outline\"></ion-icon></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" >\r\n        <div class=\"uct_col max_pts\">\r\n            <ion-label>Merit</ion-label>\r\n            <ion-label class=\"credit_pts\">0 credits <ion-icon name=\"chevron-down-outline\"></ion-icon></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" >\r\n        <div class=\"uct_col max_pts\">\r\n            <ion-label>Pass</ion-label>\r\n            <ion-label class=\"credit_pts\">0 credits <ion-icon name=\"chevron-down-outline\"></ion-icon></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>\r\n</div>\r\n<ion-card class=\"add_qualif\">\r\n  <ion-card-header>\r\n    <ion-card-title>Have more qualifications?</ion-card-title>\r\n    <ion-button fill=\"outline\" (click)=\"openQualificationModal()\">+ Add qualification</ion-button>\r\n  </ion-card-header>\r\n  </ion-card>\r\n<!-- Your Grades -->\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"ygrd_ft\">\r\n  <ion-toolbar>\r\n      <ion-label class=\"ucas_pts\">Your UCAS points <span class=\"ucas_val\">0</span></ion-label>\r\n      <ion-label class=\"ucas_pts_btn\">\r\n        <ion-button expand=\"block\" class=\"update_btn\" color=\"primary\" disabled>Update</ion-button>\r\n      </ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n", styles: ["ion-content.your_grades{--background: #F8FAFC}ion-content.your_grades ion-list ion-list-header{background:#F8FAFC;padding-inline-start:0}ion-content.your_grades ion-list ion-list-header ion-label{margin:32px 0 30px;padding-left:15px}ion-content.your_grades ion-list ion-list-header ion-label h2{font:28px/34px \"Poppins-Bold\";max-width:220px}ion-content.your_grades ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.your_grades ion-list ion-item ion-label{padding:14px 14px 12px 15px;margin:0}ion-content.your_grades ion-list ion-item ion-label span{font-size:14px;line-height:17px}ion-content.your_grades ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.your_grades ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#0f172a;margin-top:3px}ion-content.your_grades ion-list ion-item ion-icon{width:22px}ion-content.your_grades ion-card{box-shadow:0 1px #e2e8f0;border-radius:8px}ion-content.your_grades ion-card.add_qualif ion-card-header{display:flex;align-items:center;flex-direction:column}ion-content.your_grades ion-card.add_qualif ion-card-header ion-card-title{font:16px/24px \"Poppins-SemiBold\";margin:0 0 10px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 18px;--padding-end: 18px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button:hover{--background-hover:#3460DC;--color-hover:#fff;opacity:1}ion-content.your_grades .credit_sec .ucas_tariff_sec ion-col,ion-content.your_grades .credit_sec .ucas_tariff_sec ion-grid{padding:0}ion-content.your_grades .credit_sec ion-text h4{font:12px/18px \"Poppins-SemiBold\";color:#000;text-transform:uppercase;letter-spacing:.08em;padding-right:42px;margin:0 0 8px}.ygrd_ft ion-toolbar{text-align:center;padding:14px 10px 25px}.ygrd_ft .ucas_pts{font:14px/20px \"Poppins-Regular\";display:flex;justify-content:center;align-items:center;margin-bottom:15px}.ygrd_ft .ucas_pts .ucas_val{font:12px/30px \"Poppins-SemiBold\";color:#64748b;width:36px;height:30px;background:#F1F5F9;border-radius:4px;margin-left:8px}.ygrd_ft .ucas_pts_btn ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 40px;--box-shadow: none}.ygrd_ft .ucas_pts_btn ion-button.button-disabled{--ion-color-base: #E2E8F0!important;--ion-color-contrast: #94A3B8!important;opacity:1}.ucas_tariff_sec{padding:30px 16px 0}.ucas_tariff_sec ion-col:nth-child(2){font:14px/20px \"Poppins-Regular\";color:#475569;display:flex;align-items:center;justify-content:center;padding-top:28px}.ucas_tariff_sec .uct_col{display:flex;justify-content:space-between;align-items:center;padding:8px 0}.ucas_tariff_sec .uct_col ion-label{font:14px/20px \"Poppins-Regular\";color:#475569}.ucas_tariff_sec .uct_col .credit_pts{font:16px/42px \"Poppins-Regular\";color:#0f172a;border:1px solid #CBD5E1;border-radius:26px;--placeholder-opacity: 1;margin:0;width:128px;min-height:42px;display:flex;align-items:center;justify-content:center}.ucas_tariff_sec .uct_col .credit_pts ion-icon{padding:0 0 0 6px}.ucas_tariff_sec .uct_col .credit_pts.has-focus,.ucas_tariff_sec .uct_col .credit_pts.has-value{color:#0f172a;--placeholder:#0F172A}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonItemGroup, selector: "ion-item-group" }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i1.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { type: i1.IonRow, selector: "ion-row" }, { type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i1.IonCardHeader, selector: "ion-card-header", inputs: ["color", "mode", "translucent"] }, { type: i1.IonCardTitle, selector: "ion-card-title", inputs: ["color", "mode"] }, { type: i1.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: AccessToHEDiplomaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-access-to-hediploma',
                    templateUrl: './access-to-hediploma.component.html',
                    styleUrls: ['./access-to-hediploma.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }]; } });

class ContactUsComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    modaldismiss() {
        this.modalCtrl.dismiss();
    }
}
ContactUsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ContactUsComponent, deps: [{ token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
ContactUsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: ContactUsComponent, selector: "app-contact-us", ngImport: i0, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Contact us</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button class=\"modal_done\">Send</ion-button>\r\n      </ion-buttons> \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"contus_sec\">\r\n    <ion-list class=\"cont_from\">\r\n      <ion-item>\r\n        <ion-textarea rows=\"17\" cols=\"20\" placeholder=\"Write your message\" value=\"Integer aliquet tristique nunc ac tincidunt. Aliquam lobortis at nisl eu suscipit. Aliquam erat volutpat. Sed turpis mi, aliquam quis sollicitudin non, tincidunt a turpis. Vestibulum finibus tincidunt hendrerit\" autofocus=\"true\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>", styles: [".contus_sec{padding:30px 15px}.contus_sec .cont_from ion-item{--padding-start:0;--inner-padding-end: 0;--inner-border-width:0;--border-color:transparent;--background:transparent}.contus_sec .cont_from ion-item.item-has-focus ion-textarea{color:#000}.contus_sec .cont_from ion-textarea{font:14px/20px \"Poppins-Regular\";border:1px solid #CBD5E1;border-radius:22px;--border-radius: 22px;color:#94a3b8;--placeholder-opacity: 1;--padding-start: 15px;--padding-end:15px;--padding-top: 13px;--padding-bottom: 13px}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }], directives: [{ type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ContactUsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-contact-us',
                    templateUrl: './contact-us.component.html',
                    styleUrls: ['./contact-us.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }]; } });

class MultipleQualificationComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    modaldismiss() {
        this.modalCtrl.dismiss();
    }
    //
    openQualificationModal() {
    }
}
MultipleQualificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: MultipleQualificationComponent, deps: [{ token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
MultipleQualificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: MultipleQualificationComponent, selector: "app-multiple-qualification", ngImport: i0, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Your grades</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntstu_det your_grades\" mode=ios>\r\n<div class=\"ygrd_sec\"> \r\n<!-- Your Grades -->\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label><h2>Calculate your UCAS points</h2></ion-label>\r\n  </ion-list-header>\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">A-level</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<div class=\"fltr_levls\">\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">A*</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">A</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">B</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">C</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">D</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">E</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ion-list class=\"multi_quallist\">\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">EPQ level 3</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<ion-list class=\"muliti_pts_chse\">\r\n  <ion-radio-group>\r\n    <ion-item>\r\n      <ion-label>A*</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"A*\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>A</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"A\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>B</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"B\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>C</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"C\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>D</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"D\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>E</ion-label>\r\n      <ion-radio slot=\"end\" color=\"success\" value=\"E\"></ion-radio>\r\n    </ion-item>        \r\n  </ion-radio-group>\r\n</ion-list>\r\n<ion-card class=\"add_qualif\">\r\n  <ion-card-header>\r\n    <ion-card-title>Have more qualifications?</ion-card-title>\r\n    <ion-button fill=\"outline\" (click)=\"openQualificationModal()\">+ Add qualification</ion-button>\r\n  </ion-card-header>\r\n</ion-card>\r\n\r\n<!-- Your Grades -->\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"ygrd_ft\">\r\n  <ion-toolbar>\r\n      <ion-label class=\"ucas_pts pts_added\">Your UCAS points <span class=\"ucas_val\">150</span></ion-label>\r\n      <ion-label class=\"ucas_pts_btn\">\r\n        <ion-button expand=\"block\" class=\"update_btn\" color=\"primary\">Update</ion-button>\r\n      </ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n", styles: ["ion-content.your_grades{--background: #F8FAFC}ion-content.your_grades ion-list ion-list-header{background:#F8FAFC;padding-inline-start:0}ion-content.your_grades ion-list ion-list-header ion-label{margin:32px 0 30px;padding-left:15px}ion-content.your_grades ion-list ion-list-header ion-label h2{font:28px/34px \"Poppins-Bold\";max-width:220px}ion-content.your_grades ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.your_grades ion-list ion-item ion-label{padding:14px 14px 12px 15px;margin:0}ion-content.your_grades ion-list ion-item ion-label span{font-size:14px;line-height:17px}ion-content.your_grades ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.your_grades ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#0f172a;margin-top:3px}ion-content.your_grades ion-list ion-item ion-icon{width:22px}ion-content.your_grades ion-card{box-shadow:0 1px #e2e8f0;border-radius:8px}ion-content.your_grades ion-card.add_qualif{display:inline-block;width:calc(100% - 32px)}ion-content.your_grades ion-card.add_qualif ion-card-header{display:flex;align-items:center;flex-direction:column}ion-content.your_grades ion-card.add_qualif ion-card-header ion-card-title{font:16px/24px \"Poppins-SemiBold\";margin:0 0 10px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 19px;--padding-end: 19px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button:hover{--background-hover:#3460DC;--color-hover:#fff;opacity:1}ion-content.your_grades .fltr_levls{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;padding:10px 16px 7px}ion-content.your_grades .fltr_levls .grd_minmax{margin-top:20px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-basis:33%}ion-content.your_grades .fltr_levls .grd_minmax .grd_label{font:16px/24px \"Poppins-SemiBold\";color:#0f172a;width:30px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col{display:flex;flex-direction:row;align-items:center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-label{display:flex}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-icon{width:36px;height:36px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle{background:url(/assets/icon/minus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle.deactive{background-image:url(/assets/icon/minus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle{background:url(/assets/icon/plus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle.deactive{background-image:url(/assets/icon/plus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .grd_value{font:16px/24px \"Poppins-Regular\";color:#64748b;width:24px;height:24px;text-align:center;margin:0 6px}ion-content.your_grades .multi_quallist{margin:24px 0 30px}ion-content.your_grades .muliti_pts_chse{display:flex;float:left;flex-wrap:wrap;padding:0 16px;background:transparent}ion-content.your_grades .muliti_pts_chse ion-item{--min-height: 39px;--background:transparent;--background-hover: transparent;--background-activated:transparent;--background-focused: transparent;--border-color: #3460DC;--inner-border-width: 0;--border-width: 1px;--border-radius: 24px;--inner-padding-end:o;--padding-start: 0;--padding-end: 0;margin:0 8px 8px 0;box-shadow:none}ion-content.your_grades .muliti_pts_chse ion-item ion-label{font:14px/16px \"Poppins-SemiBold\";--color: #3460DC;margin:0;padding:12px 18px}ion-content.your_grades .muliti_pts_chse ion-item ion-radio{opacity:0;position:absolute;left:0;width:100%;height:41px;--border-radius: 38px;--padding-start: 0;--padding-end: 0;margin-inline:0px}ion-content.your_grades .muliti_pts_chse ion-item.item-radio-checked{--background:#3460DC}ion-content.your_grades .muliti_pts_chse ion-item.item-radio-checked ion-label{color:#fff}ion-content.your_grades .muliti_pts_chse ion-radio-group{display:flex;float:left;flex-wrap:wrap}.ygrd_ft ion-toolbar{text-align:center;padding:14px 10px 25px}.ygrd_ft .ucas_pts{font:14px/20px \"Poppins-Regular\";display:flex;justify-content:center;align-items:center;margin-bottom:15px}.ygrd_ft .ucas_pts .ucas_val{font:12px/30px \"Poppins-SemiBold\";color:#64748b;width:36px;height:30px;background:#F1F5F9;border-radius:4px;margin-left:8px}.ygrd_ft .ucas_pts.pts_added .ucas_val{background:#D1FAE5;color:#059669}.ygrd_ft .ucas_pts_btn ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 40px;--box-shadow: none}.ygrd_ft .ucas_pts_btn ion-button.button-disabled{--ion-color-base: #E2E8F0!important;--ion-color-contrast: #94A3B8!important;opacity:1}.ygrd_ft .ucas_pts_btn ion-button.ion-activated{--ion-color-shade:#173EAD!important}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonItemGroup, selector: "ion-item-group" }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }, { type: i1.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i1.IonCardHeader, selector: "ion-card-header", inputs: ["color", "mode", "translucent"] }, { type: i1.IonCardTitle, selector: "ion-card-title", inputs: ["color", "mode"] }, { type: i1.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }], directives: [{ type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i1.RadioValueAccessor, selector: "ion-radio" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: MultipleQualificationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-multiple-qualification',
                    templateUrl: './multiple-qualification.component.html',
                    styleUrls: ['./multiple-qualification.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }]; } });

class UcasTariffPointsComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    modaldismiss() {
        this.modalCtrl.dismiss();
    }
    //
    openQualificationModal() {
    }
}
UcasTariffPointsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UcasTariffPointsComponent, deps: [{ token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
UcasTariffPointsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UcasTariffPointsComponent, selector: "app-ucas-tariff-points", ngImport: i0, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Your grades</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"modal_done\">Reset</ion-button>\r\n    </ion-buttons>       \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"your_grades ucas_tariff_pts\" mode=ios>\r\n<div class=\"ygrd_sec\"> \r\n<!-- Your Grades -->\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label><h2>Calculate your UCAS points</h2></ion-label>\r\n  </ion-list-header>\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">UCAS tariff points</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<div class=\"ucas_tariff_sec\"> \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"5\">\r\n        <div class=\"uct_col min_pts\">\r\n            <ion-label>Minimum points</ion-label>\r\n            <ion-input placeholder=\"80\"></ion-input>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">-</ion-col>\r\n      <ion-col size=\"5\" >\r\n        <div class=\"uct_col max_pts\">\r\n            <ion-label>Maximum points</ion-label>\r\n            <ion-input placeholder=\"150\"></ion-input>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n<ion-card class=\"add_qualif\">\r\n  <ion-card-header>\r\n    <ion-card-title>Have more qualifications?</ion-card-title>\r\n    <ion-button fill=\"outline\" (click)=\"openQualificationModal()\">+ Add qualification</ion-button>\r\n  </ion-card-header>\r\n  </ion-card>\r\n<!-- Your Grades -->\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"ygrd_ft\">\r\n  <ion-toolbar>\r\n      <ion-label class=\"ucas_pts\">Your UCAS points <span class=\"ucas_val\">0</span></ion-label>\r\n      <ion-label class=\"ucas_pts_btn\">\r\n        <ion-button expand=\"block\" class=\"update_btn\" color=\"primary\" disabled>Update</ion-button>\r\n      </ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n", styles: ["ion-content.your_grades{--background: #F8FAFC}ion-content.your_grades ion-list ion-list-header{background:#F8FAFC;padding-inline-start:0}ion-content.your_grades ion-list ion-list-header ion-label{margin:32px 0 30px;padding-left:15px}ion-content.your_grades ion-list ion-list-header ion-label h2{font:28px/34px \"Poppins-Bold\";max-width:220px}ion-content.your_grades ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.your_grades ion-list ion-item ion-label{padding:14px 14px 12px 15px;margin:0}ion-content.your_grades ion-list ion-item ion-label span{font-size:14px;line-height:17px}ion-content.your_grades ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.your_grades ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#0f172a;margin-top:3px}ion-content.your_grades ion-list ion-item ion-icon{width:22px}ion-content.your_grades ion-card{box-shadow:0 1px #e2e8f0;border-radius:8px}ion-content.your_grades ion-card.add_qualif ion-card-header{display:flex;align-items:center;flex-direction:column}ion-content.your_grades ion-card.add_qualif ion-card-header ion-card-title{font:16px/24px \"Poppins-SemiBold\";margin:0 0 10px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 18px;--padding-end: 18px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button:hover{--background-hover:#3460DC;--color-hover:#fff;opacity:1}ion-content.your_grades .fltr_levls{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;padding:10px 16px 7px}ion-content.your_grades .fltr_levls .grd_minmax{margin-top:20px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-basis:33%}ion-content.your_grades .fltr_levls .grd_minmax .grd_label{font:16px/24px \"Poppins-SemiBold\";color:#0f172a;width:30px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col{display:flex;flex-direction:row;align-items:center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-label{display:flex}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-icon{width:36px;height:36px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle{background:url(/assets/icon/minus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle.deactive{background-image:url(/assets/icon/minus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle{background:url(/assets/icon/plus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle.deactive{background-image:url(/assets/icon/plus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .grd_value{font:16px/24px \"Poppins-Regular\";color:#64748b;width:24px;height:24px;text-align:center;margin:0 6px}.ygrd_ft ion-toolbar{text-align:center;padding:14px 10px 25px}.ygrd_ft .ucas_pts{font:14px/20px \"Poppins-Regular\";display:flex;justify-content:center;align-items:center;margin-bottom:15px}.ygrd_ft .ucas_pts .ucas_val{font:12px/30px \"Poppins-SemiBold\";color:#64748b;width:36px;height:30px;background:#F1F5F9;border-radius:4px;margin-left:8px}.ygrd_ft .ucas_pts_btn ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 40px;--box-shadow: none}.ygrd_ft .ucas_pts_btn ion-button.button-disabled{--ion-color-base: #E2E8F0!important;--ion-color-contrast: #94A3B8!important;opacity:1}.ucas_tariff_sec{padding:20px 6px 0}.ucas_tariff_sec ion-col:nth-child(2){font:14px/20px \"Poppins-Regular\";color:#475569;display:flex;align-items:center;justify-content:center;padding-top:28px}.ucas_tariff_sec .uct_col{justify-content:center;align-items:center}.ucas_tariff_sec .uct_col ion-label{font:14px/20px \"Poppins-Regular\";color:#475569}.ucas_tariff_sec .uct_col ion-input{font:16px/24px \"Poppins-Regular\";color:#94a3b8;border:1px solid #CBD5E1;border-radius:26px;--padding-top: 13px;--padding-end: 16px;--padding-bottom: 13px;--padding-start: 16px;margin:3px 0 0;--placeholder-opacity: 1}.ucas_tariff_sec .uct_col ion-input.has-focus,.ucas_tariff_sec .uct_col ion-input.has-value{color:#0f172a;--placeholder:#0F172A}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonItemGroup, selector: "ion-item-group" }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { type: i1.IonRow, selector: "ion-row" }, { type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }, { type: i1.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i1.IonCardHeader, selector: "ion-card-header", inputs: ["color", "mode", "translucent"] }, { type: i1.IonCardTitle, selector: "ion-card-title", inputs: ["color", "mode"] }, { type: i1.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }], directives: [{ type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UcasTariffPointsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-ucas-tariff-points',
                    templateUrl: './ucas-tariff-points.component.html',
                    styleUrls: ['./ucas-tariff-points.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }]; } });

class QualificationComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    openUcasTariffPointsModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: UcasTariffPointsComponent,
                cssClass: 'my-modal-styles'
            });
            yield modal.present();
        });
    }
    openMultipleQualificationModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: MultipleQualificationComponent,
                cssClass: 'my-modal-styles'
            });
            yield modal.present();
        });
    }
    openAccesstoHEDiplomaModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: AccessToHEDiplomaComponent,
                cssClass: 'my-modal-styles'
            });
            yield modal.present();
        });
    }
    modaldismiss() {
        this.modalCtrl.dismiss();
    }
}
QualificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: QualificationComponent, deps: [{ token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
QualificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: QualificationComponent, selector: "app-qualification", ngImport: i0, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Qualification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"qualif_lst\">\r\n    <ion-list>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>A-levels</ion-label>\r\n        </ion-list-header>\r\n        <ion-item (click)=\"openMultipleQualificationModal()\">\r\n          <ion-label>A level<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"A level\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>AS level</ion-label>\r\n          <ion-radio slot=\"start\" value=\"AS level\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>A Level Double Award</ion-label>\r\n          <ion-radio slot=\"start\" value=\"A Level Double Award\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>International Baccalaureate (Diploma)</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>IB (Diploma) Higher Level<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"IB (Diploma) Higher Level\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>IB (Diploma) Standard Level</ion-label>\r\n          <ion-radio slot=\"start\" value=\"IB (Diploma) Standard Level\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>Scottish qualifications</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>Scottish Highers<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"Scottish Highers\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Scottish Advanced Highers</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Scottish Advanced Highers\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>BTEC Nationals (QCF)</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>BTEC Extended Diploma<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"BTEC Extended Diploma\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>BTEC Diploma</ion-label>\r\n          <ion-radio slot=\"start\" value=\"BTEC Diploma\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>BTEC Foundation Diploma</ion-label>\r\n          <ion-radio slot=\"start\" value=\"BTEC Foundation Diploma\" mode=\"md\"></ion-radio>\r\n        </ion-item>        \r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>Irish Leaving Certificate</ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-label>Irish Leaving Certificate Higher<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"Irish Leaving Certificate Higher\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Irish Leaving Certificate Ordinary</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Irish Leaving Certificate Ordinary\" mode=\"md\"></ion-radio>\r\n        </ion-item>      \r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>UCAS</ion-label>\r\n        </ion-list-header>\r\n        <ion-item (click)=\"openUcasTariffPointsModal()\">\r\n          <ion-label>UCAS Tariff Points<span class=\"alrdy_selec\"></span></ion-label>\r\n          <ion-radio slot=\"start\" value=\"UCAS Tariff Points\" mode=\"md\"></ion-radio>\r\n        </ion-item>    \r\n      </ion-radio-group>\r\n      <ion-radio-group>\r\n        <ion-list-header>\r\n          <ion-label>Access to HE Diploma</ion-label>\r\n        </ion-list-header>\r\n        <ion-item (click)=\"openAccesstoHEDiplomaModal()\">\r\n          <ion-label>Access to HE Diploma</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Access to HE Diploma\" mode=\"md\"></ion-radio>\r\n        </ion-item>      \r\n      </ion-radio-group>                                  \r\n    </ion-list>\r\n  </div>  \r\n</ion-content>\r\n\r\n", styles: [".qualif_lst{padding:15px 0 4px}.qualif_lst ion-list{background:transparent}.qualif_lst ion-list-header ion-label{font:16px/24px \"Poppins-SemiBold\";margin-top:17px;margin-bottom:0}.qualif_lst ion-item{--inner-border-width: 0;--background: transparent;--min-height: auto;margin:14px 0}.qualif_lst ion-item.ion-activated{--background-activated: transparent;--background-focused: transparent;--background-hover: transparent}.qualif_lst ion-item ion-label{font:14px/20px \"Poppins-Regular\";margin:0}.qualif_lst ion-item ion-radio{width:18px;height:18px;--color-checked:#3460DC;--color:#0F172A;margin-inline:0px 10px;margin:0 10px 0 0}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }], directives: [{ type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i1.RadioValueAccessor, selector: "ion-radio" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: QualificationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-qualification',
                    templateUrl: './qualification.component.html',
                    styleUrls: ['./qualification.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }]; } });

class UpdatePasswordComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    modaldismiss() {
        this.modalCtrl.dismiss();
    }
}
UpdatePasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UpdatePasswordComponent, deps: [{ token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
UpdatePasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UpdatePasswordComponent, selector: "app-update-password", ngImport: i0, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Password</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=ios>\r\n  <div class=\"updte_pswd\">\r\n    <div class=\"skeleton_cnt\">\r\n      <div class=\"succ_skeleton\">\r\n        <div class=\"skel_row\">\r\n          <ion-img src=\"assets/icon/success_alert.svg\"></ion-img>\r\n          <ion-label>Your password has been updated</ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding error\" size=\"12\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-input placeholder=\"Current password\" value=\"Neil Burgess\" type=\"password\"></ion-input>\r\n              <ion-img class=\"pwd_valid\" src=\"assets/icon/pwd_decrypt.svg\"></ion-img>\r\n            </ion-item>\r\n            <ion-label class=\"err_msge\" style=\"display: block;\">This password doesn\u2019t match what we have for you\r\n            </ion-label>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"12\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-input placeholder=\"New password\"></ion-input>\r\n              <ion-img class=\"pwd_valid\" src=\"assets/icon/pwd_decrypt.svg\"></ion-img>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"12\">\r\n          <div class=\"pwdval_cnt\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt error\">ABC</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"split_line\"></ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt success\">abc</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"split_line\"></ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt\">123</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"split_line\"></ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt\">!@%</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"split_line\"></ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"vali_txt\">8 characters</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"12\">\r\n          <ion-button class=\"update_btn\" color=\"primary\" disabled>Update</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"12\">\r\n          <div class=\"forgot_pwd\">\r\n            <!-- <ion-router-link color=\"primary\">Forgot password</ion-router-link> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n<!-- <ion-footer class=\"updpwd_ft\">\r\n    <ion-label>The information you provide will be used to update the password on your account. Visit our <ion-router-link color=\"primary\">Privacy Policy</ion-router-link> to learn more.</ion-label>\r\n</ion-footer> -->", styles: [".updte_pswd{padding:30px 15px 0}.updte_pswd ion-col{--background:transparent}.updte_pswd ion-col ion-list{margin-bottom:24px;background:transparent}.updte_pswd ion-item{position:relative;--padding-start: 0;--inner-padding-end:0;--inner-border-width:0;--border-color:transparent;--highlight-color-focused: transparent;--background: transparent}.updte_pswd ion-item ion-input{font:16px/24px \"Poppins-Regular\";border:1px solid #CBD5E1;border-radius:26px;--border-radius: 26px;color:#94a3b8;--placeholder-opacity: 1;--padding-start:15px;--padding-end:15px;--padding-top: 13px;--padding-bottom: 13px}.updte_pswd ion-item ion-input.has-focus,.updte_pswd ion-item ion-input.has-value{color:#000}.updte_pswd ion-item ion-input.has-focus{border:1px solid #3460DC}.updte_pswd ion-item .pwd_valid{position:absolute;right:16px;top:15px}.updte_pswd .error ion-input{border:1px solid #EF4444}.updte_pswd .error .err_msge{font:12px/18px \"Poppins-Regular\";color:#ef4444;margin-top:4px}.updte_pswd .pwdval_cnt ion-list{display:flex;justify-content:center;margin:-12px 0 18px}.updte_pswd .pwdval_cnt ion-list .vali_txt{font:14px/20px \"Poppins-Regular\";color:#000;margin:0}.updte_pswd .pwdval_cnt ion-list .split_line{width:1px;height:20px;--min-height: 20px;background:#CBD5E1;margin-inline:0;margin:0 8px}.updte_pswd .update_btn{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;width:100%;height:41px;margin:0}.updte_pswd .update_btn.button-disabled{--ion-color-base: #E2E8F0!important;opacity:1;--ion-color-contrast: #94A3B8!important}.updte_pswd .forgot_pwd{text-align:center;padding:32px 0}.updte_pswd .forgot_pwd ion-router-link{font:14px/17px \"Poppins-SemiBold\"}.updte_pswd .forgot_pwd ion-router-link.ion-activated{color:#173ead}.updpwd_ft{text-align:center;background:#F8FAFC}.updpwd_ft:before{background-image:none!important}.updpwd_ft ion-label{font:14px/20px \"Poppins-Regular\";padding:10px 20px;display:block}.updpwd_ft ion-label ion-router-link{text-decoration:underline}.updpwd_ft ion-label ion-router-link.ion-activated{color:#173ead}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { type: i1.IonRow, selector: "ion-row" }, { type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UpdatePasswordComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-update-password',
                    templateUrl: './update-password.component.html',
                    styleUrls: ['./update-password.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }]; } });

class YourGradesComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    openQualificationModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: QualificationComponent,
                cssClass: 'my-modal-styles'
            });
            yield modal.present();
        });
    }
    modaldismiss() {
        this.modalCtrl.dismiss();
    }
}
YourGradesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: YourGradesComponent, deps: [{ token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
YourGradesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: YourGradesComponent, selector: "app-your-grades", ngImport: i0, template: "<ion-header class=\"hdr_modal\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modaldismiss()\">\r\n        <ion-img src=\"assets/icon/close_modal_icon.svg\" alt=\"close\"></ion-img>\r\n      </ion-button>\r\n    </ion-buttons>\r\n      <ion-title>Your grades</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"cntpers_det cntstu_det your_grades\" mode=ios>\r\n<div class=\"ygrd_sec\"> \r\n<!-- Your Grades -->\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label><h2>Calculate your UCAS points</h2></ion-label>\r\n  </ion-list-header>\r\n  <ion-item-group>\r\n    <ion-item (click)=\"openQualificationModal()\">\r\n      <ion-label>\r\n        <span class=\"semiBold\">Qualification</span>\r\n        <span class=\"regular qual_subtit\">A-level</span>\r\n      </ion-label>\r\n      <span class=\"inc_staus\"></span>\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<div class=\"fltr_levls\">\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">A*</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">A</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">B</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">C</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">D</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n  <div class=\"grd_minmax\">\r\n    <span class=\"grd_label\">E</span>\r\n    <div class=\"grd_val_col\">\r\n      <ion-label class=\"plus_symb\"><ion-icon class=\"remove_circle deactive\"></ion-icon></ion-label>\r\n      <span class=\"grd_value\">0</span>\r\n      <ion-label class=\"minis_symb\"><ion-icon class=\"add_circle\"></ion-icon></ion-label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ion-card class=\"add_qualif\">\r\n  <ion-card-header>\r\n    <ion-card-title>Have more qualifications?</ion-card-title>\r\n    <ion-button fill=\"outline\" (click)=\"openQualificationModal()\">+ Add qualification</ion-button>\r\n  </ion-card-header>\r\n  </ion-card>\r\n<!-- Your Grades -->\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"ygrd_ft\">\r\n  <ion-toolbar>\r\n      <ion-label class=\"ucas_pts\">Your UCAS points <span class=\"ucas_val\">0</span></ion-label>\r\n      <ion-label class=\"ucas_pts_btn\">\r\n        <ion-button expand=\"block\" class=\"update_btn\" color=\"primary\" disabled>Update</ion-button>\r\n      </ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n", styles: ["ion-content.your_grades{--background: #F8FAFC}ion-content.your_grades ion-list ion-list-header{background:#F8FAFC;padding-inline-start:0}ion-content.your_grades ion-list ion-list-header ion-label{margin:32px 0 30px;padding-left:15px}ion-content.your_grades ion-list ion-list-header ion-label h2{font:28px/34px \"Poppins-Bold\";max-width:220px}ion-content.your_grades ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.your_grades ion-list ion-item ion-label{padding:14px 14px 12px 15px;margin:0}ion-content.your_grades ion-list ion-item ion-label span{font-size:14px;line-height:17px}ion-content.your_grades ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.your_grades ion-list ion-item.item ion-label .qual_subtit{font:14px/20px \"Poppins-Regular\";color:#0f172a;margin-top:3px}ion-content.your_grades ion-list ion-item ion-icon{width:22px}ion-content.your_grades ion-card{box-shadow:0 1px #e2e8f0;border-radius:8px}ion-content.your_grades ion-card.add_qualif{display:inline-block;width:calc(100% - 32px)}ion-content.your_grades ion-card.add_qualif ion-card-header{display:flex;align-items:center;flex-direction:column}ion-content.your_grades ion-card.add_qualif ion-card-header ion-card-title{font:16px/24px \"Poppins-SemiBold\";margin:0 0 10px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 19px;--padding-end: 19px}ion-content.your_grades ion-card.add_qualif ion-card-header ion-button:hover{--background-hover:#3460DC;--color-hover:#fff;opacity:1}ion-content.your_grades .fltr_levls{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;padding:10px 16px 7px}ion-content.your_grades .fltr_levls .grd_minmax{margin-top:20px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-basis:33%}ion-content.your_grades .fltr_levls .grd_minmax .grd_label{font:16px/24px \"Poppins-SemiBold\";color:#0f172a;width:30px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col{display:flex;flex-direction:row;align-items:center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-label{display:flex}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col ion-icon{width:36px;height:36px}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle{background:url(/assets/icon/minus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .remove_circle.deactive{background-image:url(/assets/icon/minus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle{background:url(/assets/icon/plus_blue.svg) no-repeat center}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .add_circle.deactive{background-image:url(/assets/icon/plus_blue_disabled.svg)}ion-content.your_grades .fltr_levls .grd_minmax .grd_val_col .grd_value{font:16px/24px \"Poppins-Regular\";color:#64748b;width:24px;height:24px;text-align:center;margin:0 6px}.ygrd_ft ion-toolbar{text-align:center;padding:14px 10px 25px}.ygrd_ft .ucas_pts{font:14px/20px \"Poppins-Regular\";display:flex;justify-content:center;align-items:center;margin-bottom:15px}.ygrd_ft .ucas_pts .ucas_val{font:12px/30px \"Poppins-SemiBold\";color:#64748b;width:36px;height:30px;background:#F1F5F9;border-radius:4px;margin-left:8px}.ygrd_ft .ucas_pts_btn ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 40px;--box-shadow: none}.ygrd_ft .ucas_pts_btn ion-button.button-disabled{--ion-color-base: #E2E8F0!important;--ion-color-contrast: #94A3B8!important;opacity:1}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonItemGroup, selector: "ion-item-group" }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonCard, selector: "ion-card", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }, { type: i1.IonCardHeader, selector: "ion-card-header", inputs: ["color", "mode", "translucent"] }, { type: i1.IonCardTitle, selector: "ion-card-title", inputs: ["color", "mode"] }, { type: i1.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: YourGradesComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-your-grades',
                    templateUrl: './your-grades.component.html',
                    styleUrls: ['./your-grades.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }]; } });

class UserProfileModule {
}
UserProfileModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserProfileModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileModule, declarations: [UserProfileComponent,
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
        UserSettingsPageModule, i1.IonicModule], exports: [UserProfileComponent] });
UserProfileModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileModule, providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], imports: [[
            UserProfilePageRoutingModule$1,
            UserProfilePageRoutingModule$1,
            LocationServicesPageModule,
            NotificationsPageModule,
            PersonalDetailPageModule,
            StudyDetailsPageModule,
            UserSettingsPageModule,
            IonicModule.forRoot()
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileModule, decorators: [{
            type: NgModule,
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
                        IonicModule.forRoot()
                    ],
                    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
                    exports: [
                        UserProfileComponent
                    ]
                }]
        }] });

class UserProfilePage {
    constructor(router, modalCntrl, iab) {
        this.router = router;
        this.modalCntrl = modalCntrl;
        this.iab = iab;
    }
    ngOnInit() {
    }
    gotoPersonalDetails() {
        this.router.navigate(['/personal-detail']);
    }
    gotoStudyDetails() {
        this.router.navigate(['/study-details']);
    }
    gotoUserSettings() {
        this.router.navigate(['/user-settings']);
    }
    gotoLocationServices() {
        this.router.navigate(['/location-services']);
    }
    gotoNotifications() {
        this.router.navigate(['/notifications']);
    }
    openYourGradesModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCntrl.create({
                component: YourGradesComponent,
                cssClass: 'my-modal-styles'
            });
            yield modal.present();
        });
    }
    openUpdatePwdModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCntrl.create({
                component: UpdatePasswordComponent,
                cssClass: 'my-modal-styles'
            });
            yield modal.present();
        });
    }
    openContactUsModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCntrl.create({
                component: ContactUsComponent,
                cssClass: 'my-modal-styles'
            });
            yield modal.present();
        });
    }
    openPlaystore() {
        // this.market.open('com.hotcourses.group.wuapp');
        let options = {
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
    }
    openInapp(eve) {
        let options = {
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
    }
}
UserProfilePage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePage, deps: [{ token: i1$2.Router }, { token: i1.ModalController }, { token: i3$1.InAppBrowser }], target: i0.ɵɵFactoryTarget.Component });
UserProfilePage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserProfilePage, selector: "app-user-profile", ngImport: i0, template: "<ion-content [fullscreen]=\"true\" class=\"user_prof\" mode=ios>\r\n  <ion-header>\r\n    <div class=\"user_sec\">\r\n      <div class=\"user_thumb\">NB</div>\r\n      <div class=\"user_name\">\r\n        <h1>Neil Burgess</h1>\r\n      </div>\r\n      <!-- <ion-chip outline color=\"dark\" class=\"msge_pos\">\r\n              <ion-label>Messages</ion-label>\r\n              <ion-img src=\"assets/icon/message_icon.svg\"></ion-img>\r\n              <ion-badge color=\"danger\">4</ion-badge>\r\n            </ion-chip> -->\r\n    </div>\r\n  </ion-header>\r\n  <!-- User list -->\r\n  <!-- Your Details -->\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <h2>Your details</h2>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"gotoPersonalDetails()\">\r\n        <ion-label><span class=\"semiBold\">Personal details</span></ion-label>\r\n        <span class=\"inc_staus\"></span>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"openYourGradesModal()\">\r\n        <ion-label><span class=\"semiBold\">Your grades</span></ion-label>\r\n        <span class=\"inc_staus\"></span>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"gotoStudyDetails()\">\r\n        <ion-label><span class=\"semiBold\">Study details</span></ion-label>\r\n        <span class=\"inc_staus\"></span>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"openUpdatePwdModal()\">\r\n        <ion-label><span class=\"semiBold\">Update password</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Your Details -->\r\n  <!-- Settings -->\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <h2>Settings</h2>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"gotoNotifications()\">\r\n        <ion-label><span class=\"semiBold\">Notifications</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"gotoLocationServices()\">\r\n        <ion-label><span class=\"semiBold\">Location services</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"gotoUserSettings()\">\r\n        <ion-label><span class=\"semiBold\">Preferences</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Settings -->\r\n  <!-- General -->\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <h2>General</h2>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"openContactUsModal()\">\r\n        <ion-label><span class=\"semiBold\">Contact us</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- General -->\r\n  <!-- Inner browser list -->\r\n  <ion-list>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"openPlaystore()\">\r\n        <ion-label><span class=\"semiBold\">Rate us</span></ion-label>\r\n        <ion-img src=\"assets/icon/internal_lnk_icon.svg\"></ion-img>\r\n      </ion-item>\r\n      <ion-item (click)=\"openInapp('https://www.whatuni.com/wu-cont/privacy.htm')\">\r\n        <ion-label><span class=\"semiBold\">Privacy policy</span></ion-label>\r\n        <ion-img src=\"assets/icon/internal_lnk_icon.svg\"></ion-img>\r\n      </ion-item>\r\n      <ion-item (click)=\"openInapp('https://www.whatuni.com/wu-cont/termsAndCondition.htm')\">\r\n        <ion-label><span class=\"semiBold\">Terms and conditions</span></ion-label>\r\n        <ion-img src=\"assets/icon/internal_lnk_icon.svg\"></ion-img>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Inner browser list -->\r\n  <ion-label class=\"sign_out\">\r\n    <ion-button expand=\"block\" fill=\"outline\">Sign out</ion-button>\r\n  </ion-label>\r\n  <!-- User list -->\r\n</ion-content>", styles: [".user_prof ion-list{padding:0}.user_prof ion-list ion-list-header{background:#F8FAFC;padding-inline-start:16px}.user_prof ion-list ion-list-header h2{font:19px/23px \"Poppins-Bold\";color:#0f172a}.user_prof ion-list ion-list-header ion-label{margin-top:32px;margin-bottom:14px}.user_prof ion-list ion-item{--padding-start:0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}.user_prof ion-list ion-item .item-native{--border-color:transparent }.user_prof ion-list ion-item ion-label{padding:19px 0 19px 16px;margin:0}.user_prof ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}.user_prof ion-list ion-item ion-icon{--color:#0F172A;padding-right:2px;width:22px}.user_prof ion-list ion-item ion-img{padding-right:5px}.user_prof ion-list ion-item .inc_staus{width:8px;height:8px;background:#FF3B30;border-radius:8px;margin-right:7px}.user_prof .sign_out ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 18px;--padding-end: 18px;--padding-top: 2px;height:41px;margin:30px 2px;margin-inline:15px}.item .sc-ion-label-ios-h{--color:#0F172A }\n"], components: [{ type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonItemGroup, selector: "ion-item-group" }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePage, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-user-profile',
                    templateUrl: './user-profile.page.html',
                    styleUrls: ['./user-profile.page.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$2.Router }, { type: i1.ModalController }, { type: i3$1.InAppBrowser }]; } });

const routes = [
    {
        path: '',
        component: UserProfilePage,
    },
];
class UserProfilePageRoutingModule {
}
UserProfilePageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserProfilePageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule, imports: [i1$2.RouterModule], exports: [RouterModule] });
UserProfilePageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });

class UserProfilePageModule {
}
UserProfilePageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserProfilePageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageModule, declarations: [UserProfilePage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        UserProfilePageRoutingModule] });
UserProfilePageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageModule, providers: [InAppBrowser], imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            UserProfilePageRoutingModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        UserProfilePageRoutingModule,
                    ],
                    declarations: [UserProfilePage],
                    providers: [InAppBrowser]
                }]
        }] });

/*
 * Public API Surface of user-profile
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LocationServicesPage, LocationServicesPageModule, NotificationsPage, NotificationsPageModule, NotificationsPageRoutingModule, PersonalDetailPage, PersonalDetailPageModule, StudyDetailsPage, StudyDetailsPageModule, StudyDetailsPageRoutingModule, UserProfileComponent, UserProfileModule, UserProfilePage, UserProfilePageModule, UserProfilePageRoutingModule$1 as UserProfilePageRoutingModule, UserProfileService, UserSettingsPage, UserSettingsPageModule, UserSettingsPageRoutingModule };
//# sourceMappingURL=user-profile.js.map
