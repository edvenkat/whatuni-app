import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@awesome-cordova-plugins/open-native-settings/ngx";
import * as i2 from "@awesome-cordova-plugins/diagnostic/ngx";
import * as i3 from "@ionic/angular";
export class LocationServicesPage {
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
LocationServicesPage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPage, deps: [{ token: i1.OpenNativeSettings }, { token: i2.Diagnostic }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Component });
LocationServicesPage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: LocationServicesPage, selector: "app-location-services", ngImport: i0, template: "<ion-header class=\"hdpers_det page_header\" mode=ios>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/user-profile\" text=\"\" icon=\"assets/icon/back_arrow.svg\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Location</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cntpers_det cntstu_det user_settings\" mode=ios>\r\n<!-- User settings -->\r\n<ion-list>\r\n  <!-- <ion-list-header>\r\n    <ion-label></ion-label>\r\n  </ion-list-header> -->\r\n  <ion-item-group>\r\n    <ion-item>\r\n      <ion-label>\r\n        <span class=\"semiBold\">Location services</span>\r\n        <span class=\"regular qual_subtit uset_tit\">Emails from us providing you the latest university news, tips and guides</span>\r\n      </ion-label>\r\n      <ion-item class=\"usrset_tog\">\r\n        <ion-toggle slot=\"end\" name=\"Newsletters\" color=\"medium\" [checked]=\"locationEnable\" (ionChange)=\"toggleChange($event)\"></ion-toggle>\r\n      </ion-item>\r\n  </ion-item>\r\n</ion-item-group> \r\n</ion-list>\r\n<!-- User settings -->\r\n</ion-content>\r\n", styles: ["ion-content.user_settings ion-list{margin-top:32px}ion-content.user_settings ion-list ion-item{--padding-start: 0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}ion-content.user_settings ion-list ion-item ion-label{padding:14px 14px 12px 16px;margin:0}ion-content.user_settings ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}ion-content.user_settings ion-list ion-item.item ion-label{display:flex;flex-direction:column}ion-content.user_settings ion-list ion-item.item ion-label .uset_tit{font:12px/18px \"Poppins-Regular\";color:#64748b;margin-top:3px;white-space:initial}ion-content.user_settings ion-list ion-item .usrset_tog{--border-color:#fff;--inner-border-width:0;box-shadow:none;margin-bottom:0}ion-content.user_settings ion-list ion-item .usrset_tog ion-toggle{width:43px;height:25px;--handle-spacing: 3px;--background: #64748B;--background-checked: #fff;--handle-background: #fff;--handle-background-checked: #fff;--handle-width: 18px;--handle-height:18px;--handle-max-height:18px;--ion-color-base: #00B26D!important;padding-inline:0}\n"], components: [{ type: i3.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i3.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i3.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i3.IonBackButton, selector: "ion-back-button", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }, { type: i3.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i3.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i3.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i3.IonItemGroup, selector: "ion-item-group" }, { type: i3.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i3.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i3.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "mode", "name", "value"] }], directives: [{ type: i3.IonBackButtonDelegate, selector: "ion-back-button", inputs: ["defaultHref", "routerAnimation"] }, { type: i3.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPage, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-location-services',
                    templateUrl: './location-services.page.html',
                    styleUrls: ['./location-services.page.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.OpenNativeSettings }, { type: i2.Diagnostic }, { type: i3.Platform }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tc2VydmljZXMucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VzZXItcHJvZmlsZS9zcmMvcGFnZXMvbG9jYXRpb24tc2VydmljZXMvbG9jYXRpb24tc2VydmljZXMucGFnZS50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VzZXItcHJvZmlsZS9zcmMvcGFnZXMvbG9jYXRpb24tc2VydmljZXMvbG9jYXRpb24tc2VydmljZXMucGFnZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7OztBQVNsRCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQW9CLGtCQUFzQyxFQUFTLFVBQXNCLEVBQVMsUUFBaUI7UUFBL0YsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBRDlHLG1CQUFjLEdBQVcsS0FBSyxDQUFDO0lBQ21GLENBQUM7SUFHeEgsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDNUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQSxFQUFFO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFTLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7WUFDNUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQSxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUNELFlBQVksQ0FBQyxHQUFTO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7O2tIQTNCVSxvQkFBb0I7c0dBQXBCLG9CQUFvQiw2RENUakMsd21DQTRCQTs0RkRuQmEsb0JBQW9CO2tCQUxoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9wZW5OYXRpdmVTZXR0aW5ncyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9vcGVuLW5hdGl2ZS1zZXR0aW5ncy9uZ3gnO1xyXG5pbXBvcnQgeyBEaWFnbm9zdGljIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RpYWdub3N0aWMvbmd4JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxvY2F0aW9uLXNlcnZpY2VzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYXRpb24tc2VydmljZXMucGFnZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2NhdGlvbi1zZXJ2aWNlcy5wYWdlLnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU2VydmljZXNQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxucHVibGljIGxvY2F0aW9uRW5hYmxlOmJvb2xlYW4gPSBmYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wZW5OYXRpdmVTZXR0aW5nczogT3Blbk5hdGl2ZVNldHRpbmdzLHByaXZhdGUgZGlhZ25vc3RpYzogRGlhZ25vc3RpYyxwcml2YXRlIHBsYXRmb3JtOlBsYXRmb3JtKSB7IH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaWFnbm9zdGljLmlzTG9jYXRpb25FbmFibGVkKCkudGhlbihyZXMgPT57XHJcbiAgICAgIHRoaXMubG9jYXRpb25FbmFibGUgPSByZXM7XHJcbiAgICB9LCBlcnI9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbGF0Zm9ybS5yZXN1bWUuc3Vic2NyaWJlKGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5kaWFnbm9zdGljLmlzTG9jYXRpb25FbmFibGVkKCkudGhlbihyZXMgPT57XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbkVuYWJsZSA9IHJlcztcclxuICAgICAgfSwgZXJyPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG4gIHRvZ2dsZUNoYW5nZShldmU6RXZlbnQpIHtcclxuICAgICAgdGhpcy5vcGVuTmF0aXZlU2V0dGluZ3Mub3BlbignbG9jYXRpb24nKS50aGVuKHJlcyA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB9LCBlcnIgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGlvbi1oZWFkZXIgY2xhc3M9XCJoZHBlcnNfZGV0IHBhZ2VfaGVhZGVyXCIgbW9kZT1pb3M+XHJcbiAgPGlvbi10b29sYmFyPlxyXG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxyXG4gICAgICA8aW9uLWJhY2stYnV0dG9uIGRlZmF1bHRIcmVmPVwiL3VzZXItcHJvZmlsZVwiIHRleHQ9XCJcIiBpY29uPVwiYXNzZXRzL2ljb24vYmFja19hcnJvdy5zdmdcIj48L2lvbi1iYWNrLWJ1dHRvbj5cclxuICAgIDwvaW9uLWJ1dHRvbnM+XHJcbiAgICA8aW9uLXRpdGxlPkxvY2F0aW9uPC9pb24tdGl0bGU+XHJcbiAgPC9pb24tdG9vbGJhcj5cclxuPC9pb24taGVhZGVyPlxyXG48aW9uLWNvbnRlbnQgY2xhc3M9XCJjbnRwZXJzX2RldCBjbnRzdHVfZGV0IHVzZXJfc2V0dGluZ3NcIiBtb2RlPWlvcz5cclxuPCEtLSBVc2VyIHNldHRpbmdzIC0tPlxyXG48aW9uLWxpc3Q+XHJcbiAgPCEtLSA8aW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgPGlvbi1sYWJlbD48L2lvbi1sYWJlbD5cclxuICA8L2lvbi1saXN0LWhlYWRlcj4gLS0+XHJcbiAgPGlvbi1pdGVtLWdyb3VwPlxyXG4gICAgPGlvbi1pdGVtPlxyXG4gICAgICA8aW9uLWxhYmVsPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VtaUJvbGRcIj5Mb2NhdGlvbiBzZXJ2aWNlczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInJlZ3VsYXIgcXVhbF9zdWJ0aXQgdXNldF90aXRcIj5FbWFpbHMgZnJvbSB1cyBwcm92aWRpbmcgeW91IHRoZSBsYXRlc3QgdW5pdmVyc2l0eSBuZXdzLCB0aXBzIGFuZCBndWlkZXM8L3NwYW4+XHJcbiAgICAgIDwvaW9uLWxhYmVsPlxyXG4gICAgICA8aW9uLWl0ZW0gY2xhc3M9XCJ1c3JzZXRfdG9nXCI+XHJcbiAgICAgICAgPGlvbi10b2dnbGUgc2xvdD1cImVuZFwiIG5hbWU9XCJOZXdzbGV0dGVyc1wiIGNvbG9yPVwibWVkaXVtXCIgW2NoZWNrZWRdPVwibG9jYXRpb25FbmFibGVcIiAoaW9uQ2hhbmdlKT1cInRvZ2dsZUNoYW5nZSgkZXZlbnQpXCI+PC9pb24tdG9nZ2xlPlxyXG4gICAgICA8L2lvbi1pdGVtPlxyXG4gIDwvaW9uLWl0ZW0+XHJcbjwvaW9uLWl0ZW0tZ3JvdXA+IFxyXG48L2lvbi1saXN0PlxyXG48IS0tIFVzZXIgc2V0dGluZ3MgLS0+XHJcbjwvaW9uLWNvbnRlbnQ+XHJcbiJdfQ==