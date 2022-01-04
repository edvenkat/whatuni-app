import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { ContactUsComponent } from '../../common/contact-us/contact-us.component';
import { UpdatePasswordComponent } from '../../common/update-password/update-password.component';
import { YourGradesComponent } from '../../common/your-grades/your-grades.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@ionic/angular";
import * as i3 from "@awesome-cordova-plugins/in-app-browser/ngx";
export class UserProfilePage {
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
UserProfilePage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePage, deps: [{ token: i1.Router }, { token: i2.ModalController }, { token: i3.InAppBrowser }], target: i0.ɵɵFactoryTarget.Component });
UserProfilePage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserProfilePage, selector: "app-user-profile", ngImport: i0, template: "<ion-content [fullscreen]=\"true\" class=\"user_prof\" mode=ios>\r\n  <ion-header>\r\n    <div class=\"user_sec\">\r\n      <div class=\"user_thumb\">NB</div>\r\n      <div class=\"user_name\">\r\n        <h1>Neil Burgess</h1>\r\n      </div>\r\n      <!-- <ion-chip outline color=\"dark\" class=\"msge_pos\">\r\n              <ion-label>Messages</ion-label>\r\n              <ion-img src=\"assets/icon/message_icon.svg\"></ion-img>\r\n              <ion-badge color=\"danger\">4</ion-badge>\r\n            </ion-chip> -->\r\n    </div>\r\n  </ion-header>\r\n  <!-- User list -->\r\n  <!-- Your Details -->\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <h2>Your details</h2>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"gotoPersonalDetails()\">\r\n        <ion-label><span class=\"semiBold\">Personal details</span></ion-label>\r\n        <span class=\"inc_staus\"></span>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"openYourGradesModal()\">\r\n        <ion-label><span class=\"semiBold\">Your grades</span></ion-label>\r\n        <span class=\"inc_staus\"></span>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"gotoStudyDetails()\">\r\n        <ion-label><span class=\"semiBold\">Study details</span></ion-label>\r\n        <span class=\"inc_staus\"></span>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"openUpdatePwdModal()\">\r\n        <ion-label><span class=\"semiBold\">Update password</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Your Details -->\r\n  <!-- Settings -->\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <h2>Settings</h2>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"gotoNotifications()\">\r\n        <ion-label><span class=\"semiBold\">Notifications</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"gotoLocationServices()\">\r\n        <ion-label><span class=\"semiBold\">Location services</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"gotoUserSettings()\">\r\n        <ion-label><span class=\"semiBold\">Preferences</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Settings -->\r\n  <!-- General -->\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        <h2>General</h2>\r\n      </ion-label>\r\n    </ion-list-header>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"openContactUsModal()\">\r\n        <ion-label><span class=\"semiBold\">Contact us</span></ion-label>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- General -->\r\n  <!-- Inner browser list -->\r\n  <ion-list>\r\n    <ion-item-group>\r\n      <ion-item (click)=\"openPlaystore()\">\r\n        <ion-label><span class=\"semiBold\">Rate us</span></ion-label>\r\n        <ion-img src=\"assets/icon/internal_lnk_icon.svg\"></ion-img>\r\n      </ion-item>\r\n      <ion-item (click)=\"openInapp('https://www.whatuni.com/wu-cont/privacy.htm')\">\r\n        <ion-label><span class=\"semiBold\">Privacy policy</span></ion-label>\r\n        <ion-img src=\"assets/icon/internal_lnk_icon.svg\"></ion-img>\r\n      </ion-item>\r\n      <ion-item (click)=\"openInapp('https://www.whatuni.com/wu-cont/termsAndCondition.htm')\">\r\n        <ion-label><span class=\"semiBold\">Terms and conditions</span></ion-label>\r\n        <ion-img src=\"assets/icon/internal_lnk_icon.svg\"></ion-img>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Inner browser list -->\r\n  <ion-label class=\"sign_out\">\r\n    <ion-button expand=\"block\" fill=\"outline\">Sign out</ion-button>\r\n  </ion-label>\r\n  <!-- User list -->\r\n</ion-content>", styles: [".user_prof ion-list{padding:0}.user_prof ion-list ion-list-header{background:#F8FAFC;padding-inline-start:16px}.user_prof ion-list ion-list-header h2{font:19px/23px \"Poppins-Bold\";color:#0f172a}.user_prof ion-list ion-list-header ion-label{margin-top:32px;margin-bottom:14px}.user_prof ion-list ion-item{--padding-start:0;--inner-border-width:0;--border-color:#E2E8F0;--border-width: 0;box-shadow:0 1px #e2e8f0;margin-bottom:1px}.user_prof ion-list ion-item .item-native{--border-color:transparent }.user_prof ion-list ion-item ion-label{padding:19px 0 19px 16px;margin:0}.user_prof ion-list ion-item ion-label span{font-size:14px;line-height:17px;color:#0f172a}.user_prof ion-list ion-item ion-icon{--color:#0F172A;padding-right:2px;width:22px}.user_prof ion-list ion-item ion-img{padding-right:5px}.user_prof ion-list ion-item .inc_staus{width:8px;height:8px;background:#FF3B30;border-radius:8px;margin-right:7px}.user_prof .sign_out ion-button{font:14px/17px \"Poppins-SemiBold\";--border-radius: 24px;--padding-start: 18px;--padding-end: 18px;--padding-top: 2px;height:41px;margin:30px 2px;margin-inline:15px}.item .sc-ion-label-ios-h{--color:#0F172A }\n"], components: [{ type: i2.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i2.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i2.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i2.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i2.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i2.IonItemGroup, selector: "ion-item-group" }, { type: i2.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i2.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i2.IonImg, selector: "ion-img", inputs: ["alt", "src"] }, { type: i2.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePage, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-user-profile',
                    templateUrl: './user-profile.page.html',
                    styleUrls: ['./user-profile.page.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.ModalController }, { type: i3.InAppBrowser }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91c2VyLXByb2ZpbGUvc3JjL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VzZXItcHJvZmlsZS9zcmMvcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5wYWdlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7O0FBU3JGLE1BQU0sT0FBTyxlQUFlO0lBRTFCLFlBQW9CLE1BQWMsRUFBVSxVQUEyQixFQUFTLEdBQWlCO1FBQTdFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBSSxDQUFDO0lBRXRHLFFBQVE7SUFDUixDQUFDO0lBQ0QsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNLLG1CQUFtQjs7WUFDdkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDekMsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsUUFBUSxFQUFFLGlCQUFpQjthQUM1QixDQUFDLENBQUM7WUFDSCxNQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFDSyxrQkFBa0I7O1lBQ3RCLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFFBQVEsRUFBRSxpQkFBaUI7YUFDNUIsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQztLQUFBO0lBQ0ssa0JBQWtCOztZQUN0QixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUN6QyxTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2FBQzVCLENBQUMsQ0FBQztZQUNILE1BQU0sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUNELGFBQWE7UUFDWCxrREFBa0Q7UUFDbEQsSUFBSSxPQUFPLEdBQXVCO1lBQ2hDLGtCQUFrQixFQUFDLEdBQUc7WUFDdEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixZQUFZLEVBQUUsSUFBSTtZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLHFCQUFxQixFQUFFLEtBQUs7WUFDNUIsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsZUFBZSxFQUFFLEtBQUs7U0FDdkIsQ0FBQTtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLDBFQUEwRSxFQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsQ0FBQTtJQUN4RyxDQUFDO0lBQ0QsU0FBUyxDQUFDLEdBQVU7UUFDbEIsSUFBSSxPQUFPLEdBQXVCO1lBQ2hDLGtCQUFrQixFQUFDLEdBQUc7WUFDdEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixZQUFZLEVBQUUsSUFBSTtZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLHFCQUFxQixFQUFFLEtBQUs7WUFDNUIsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsZUFBZSxFQUFFLEtBQUs7U0FDdkIsQ0FBQTtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsT0FBTyxDQUFDLENBQUE7SUFDakMsQ0FBQzs7NkdBdEVVLGVBQWU7aUdBQWYsZUFBZSx3RENkNUIsOHBJQXlHYzs0RkQzRkQsZUFBZTtrQkFMM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbnRhY3RVc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vdXBkYXRlLXBhc3N3b3JkL3VwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBZb3VyR3JhZGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL3lvdXItZ3JhZGVzL3lvdXItZ3JhZGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluQXBwQnJvd3NlciwgSW5BcHBCcm93c2VyT3B0aW9ucyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXVzZXItcHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItcHJvZmlsZS5wYWdlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbW9kYWxDbnRybDogTW9kYWxDb250cm9sbGVyLHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgZ290b1BlcnNvbmFsRGV0YWlscygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BlcnNvbmFsLWRldGFpbCddKTtcclxuICB9XHJcbiAgZ290b1N0dWR5RGV0YWlscygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0dWR5LWRldGFpbHMnXSk7XHJcbiAgfVxyXG4gIGdvdG9Vc2VyU2V0dGluZ3MoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy91c2VyLXNldHRpbmdzJ10pO1xyXG4gIH1cclxuICBnb3RvTG9jYXRpb25TZXJ2aWNlcygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvY2F0aW9uLXNlcnZpY2VzJ10pO1xyXG4gIH1cclxuICBnb3RvTm90aWZpY2F0aW9ucygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL25vdGlmaWNhdGlvbnMnXSk7XHJcbiAgfVxyXG4gIGFzeW5jIG9wZW5Zb3VyR3JhZGVzTW9kYWwoKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDbnRybC5jcmVhdGUoe1xyXG4gICAgICBjb21wb25lbnQ6IFlvdXJHcmFkZXNDb21wb25lbnQsXHJcbiAgICAgIGNzc0NsYXNzOiAnbXktbW9kYWwtc3R5bGVzJ1xyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XHJcbiAgfVxyXG4gIGFzeW5jIG9wZW5VcGRhdGVQd2RNb2RhbCgpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbENudHJsLmNyZWF0ZSh7XHJcbiAgICAgIGNvbXBvbmVudDogVXBkYXRlUGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICAgIGNzc0NsYXNzOiAnbXktbW9kYWwtc3R5bGVzJ1xyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XHJcbiAgfVxyXG4gIGFzeW5jIG9wZW5Db250YWN0VXNNb2RhbCgpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbENudHJsLmNyZWF0ZSh7XHJcbiAgICAgIGNvbXBvbmVudDogQ29udGFjdFVzQ29tcG9uZW50LFxyXG4gICAgICBjc3NDbGFzczogJ215LW1vZGFsLXN0eWxlcydcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgbW9kYWwucHJlc2VudCgpO1xyXG4gIH1cclxuICBvcGVuUGxheXN0b3JlKCkge1xyXG4gICAgLy8gdGhpcy5tYXJrZXQub3BlbignY29tLmhvdGNvdXJzZXMuZ3JvdXAud3VhcHAnKTtcclxuICAgIGxldCBvcHRpb25zOkluQXBwQnJvd3Nlck9wdGlvbnMgPSB7XHJcbiAgICAgIGNsb3NlYnV0dG9uY2FwdGlvbjonWCcsXHJcbiAgICAgIGNsZWFyY2FjaGU6ICd5ZXMnLFxyXG4gICAgICBsb2NhdGlvbjogJ3llcycsXHJcbiAgICAgIGhhcmR3YXJlYmFjazogJ25vJyxcclxuICAgICAgZm9vdGVyOiAnbm8nLFxyXG4gICAgICBoaWRlbmF2aWdhdGlvbmJ1dHRvbnM6ICd5ZXMnLFxyXG4gICAgICBoaWRldXJsYmFyOiAneWVzJyxcclxuICAgICAgdG9vbGJhcmNvbG9yOiAnIzMzMzMzMycsXHJcbiAgICAgIHRvb2xiYXJwb3NpdGlvbjogJ3RvcCdcclxuICAgIH1cclxuICAgIHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5ob3Rjb3Vyc2VzLmdyb3VwLnd1YXBwJywnJyxvcHRpb25zKVxyXG4gIH1cclxuICBvcGVuSW5hcHAoZXZlOnN0cmluZykge1xyXG4gICAgbGV0IG9wdGlvbnM6SW5BcHBCcm93c2VyT3B0aW9ucyA9IHtcclxuICAgICAgY2xvc2VidXR0b25jYXB0aW9uOidYJyxcclxuICAgICAgY2xlYXJjYWNoZTogJ3llcycsXHJcbiAgICAgIGxvY2F0aW9uOiAneWVzJyxcclxuICAgICAgaGFyZHdhcmViYWNrOiAnbm8nLFxyXG4gICAgICBmb290ZXI6ICdubycsXHJcbiAgICAgIGhpZGVuYXZpZ2F0aW9uYnV0dG9uczogJ3llcycsXHJcbiAgICAgIGhpZGV1cmxiYXI6ICd5ZXMnLFxyXG4gICAgICB0b29sYmFyY29sb3I6ICcjMzMzMzMzJyxcclxuICAgICAgdG9vbGJhcnBvc2l0aW9uOiAndG9wJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5pYWIuY3JlYXRlKGV2ZSwnJyxvcHRpb25zKVxyXG4gIH1cclxufVxyXG4iLCI8aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiIGNsYXNzPVwidXNlcl9wcm9mXCIgbW9kZT1pb3M+XHJcbiAgPGlvbi1oZWFkZXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidXNlcl9zZWNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInVzZXJfdGh1bWJcIj5OQjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidXNlcl9uYW1lXCI+XHJcbiAgICAgICAgPGgxPk5laWwgQnVyZ2VzczwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIDxpb24tY2hpcCBvdXRsaW5lIGNvbG9yPVwiZGFya1wiIGNsYXNzPVwibXNnZV9wb3NcIj5cclxuICAgICAgICAgICAgICA8aW9uLWxhYmVsPk1lc3NhZ2VzPC9pb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlvbi1pbWcgc3JjPVwiYXNzZXRzL2ljb24vbWVzc2FnZV9pY29uLnN2Z1wiPjwvaW9uLWltZz5cclxuICAgICAgICAgICAgICA8aW9uLWJhZGdlIGNvbG9yPVwiZGFuZ2VyXCI+NDwvaW9uLWJhZGdlPlxyXG4gICAgICAgICAgICA8L2lvbi1jaGlwPiAtLT5cclxuICAgIDwvZGl2PlxyXG4gIDwvaW9uLWhlYWRlcj5cclxuICA8IS0tIFVzZXIgbGlzdCAtLT5cclxuICA8IS0tIFlvdXIgRGV0YWlscyAtLT5cclxuICA8aW9uLWxpc3Q+XHJcbiAgICA8aW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgICA8aW9uLWxhYmVsPlxyXG4gICAgICAgIDxoMj5Zb3VyIGRldGFpbHM8L2gyPlxyXG4gICAgICA8L2lvbi1sYWJlbD5cclxuICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgPGlvbi1pdGVtLWdyb3VwPlxyXG4gICAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cImdvdG9QZXJzb25hbERldGFpbHMoKVwiPlxyXG4gICAgICAgIDxpb24tbGFiZWw+PHNwYW4gY2xhc3M9XCJzZW1pQm9sZFwiPlBlcnNvbmFsIGRldGFpbHM8L3NwYW4+PC9pb24tbGFiZWw+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmNfc3RhdXNcIj48L3NwYW4+XHJcbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWZvcndhcmRcIj48L2lvbi1pY29uPlxyXG4gICAgICA8L2lvbi1pdGVtPlxyXG4gICAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cIm9wZW5Zb3VyR3JhZGVzTW9kYWwoKVwiPlxyXG4gICAgICAgIDxpb24tbGFiZWw+PHNwYW4gY2xhc3M9XCJzZW1pQm9sZFwiPllvdXIgZ3JhZGVzPC9zcGFuPjwvaW9uLWxhYmVsPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5jX3N0YXVzXCI+PC9zcGFuPlxyXG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1mb3J3YXJkXCI+PC9pb24taWNvbj5cclxuICAgICAgPC9pb24taXRlbT5cclxuICAgICAgPGlvbi1pdGVtIChjbGljayk9XCJnb3RvU3R1ZHlEZXRhaWxzKClcIj5cclxuICAgICAgICA8aW9uLWxhYmVsPjxzcGFuIGNsYXNzPVwic2VtaUJvbGRcIj5TdHVkeSBkZXRhaWxzPC9zcGFuPjwvaW9uLWxhYmVsPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5jX3N0YXVzXCI+PC9zcGFuPlxyXG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1mb3J3YXJkXCI+PC9pb24taWNvbj5cclxuICAgICAgPC9pb24taXRlbT5cclxuICAgICAgPGlvbi1pdGVtIChjbGljayk9XCJvcGVuVXBkYXRlUHdkTW9kYWwoKVwiPlxyXG4gICAgICAgIDxpb24tbGFiZWw+PHNwYW4gY2xhc3M9XCJzZW1pQm9sZFwiPlVwZGF0ZSBwYXNzd29yZDwvc3Bhbj48L2lvbi1sYWJlbD5cclxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZXZyb24tZm9yd2FyZFwiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICA8L2lvbi1pdGVtLWdyb3VwPlxyXG4gIDwvaW9uLWxpc3Q+XHJcbiAgPCEtLSBZb3VyIERldGFpbHMgLS0+XHJcbiAgPCEtLSBTZXR0aW5ncyAtLT5cclxuICA8aW9uLWxpc3Q+XHJcbiAgICA8aW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgICA8aW9uLWxhYmVsPlxyXG4gICAgICAgIDxoMj5TZXR0aW5nczwvaDI+XHJcbiAgICAgIDwvaW9uLWxhYmVsPlxyXG4gICAgPC9pb24tbGlzdC1oZWFkZXI+XHJcbiAgICA8aW9uLWl0ZW0tZ3JvdXA+XHJcbiAgICAgIDxpb24taXRlbSAoY2xpY2spPVwiZ290b05vdGlmaWNhdGlvbnMoKVwiPlxyXG4gICAgICAgIDxpb24tbGFiZWw+PHNwYW4gY2xhc3M9XCJzZW1pQm9sZFwiPk5vdGlmaWNhdGlvbnM8L3NwYW4+PC9pb24tbGFiZWw+XHJcbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWZvcndhcmRcIj48L2lvbi1pY29uPlxyXG4gICAgICA8L2lvbi1pdGVtPlxyXG4gICAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cImdvdG9Mb2NhdGlvblNlcnZpY2VzKClcIj5cclxuICAgICAgICA8aW9uLWxhYmVsPjxzcGFuIGNsYXNzPVwic2VtaUJvbGRcIj5Mb2NhdGlvbiBzZXJ2aWNlczwvc3Bhbj48L2lvbi1sYWJlbD5cclxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZXZyb24tZm9yd2FyZFwiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICAgIDxpb24taXRlbSAoY2xpY2spPVwiZ290b1VzZXJTZXR0aW5ncygpXCI+XHJcbiAgICAgICAgPGlvbi1sYWJlbD48c3BhbiBjbGFzcz1cInNlbWlCb2xkXCI+UHJlZmVyZW5jZXM8L3NwYW4+PC9pb24tbGFiZWw+XHJcbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWZvcndhcmRcIj48L2lvbi1pY29uPlxyXG4gICAgICA8L2lvbi1pdGVtPlxyXG4gICAgPC9pb24taXRlbS1ncm91cD5cclxuICA8L2lvbi1saXN0PlxyXG4gIDwhLS0gU2V0dGluZ3MgLS0+XHJcbiAgPCEtLSBHZW5lcmFsIC0tPlxyXG4gIDxpb24tbGlzdD5cclxuICAgIDxpb24tbGlzdC1oZWFkZXI+XHJcbiAgICAgIDxpb24tbGFiZWw+XHJcbiAgICAgICAgPGgyPkdlbmVyYWw8L2gyPlxyXG4gICAgICA8L2lvbi1sYWJlbD5cclxuICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgPGlvbi1pdGVtLWdyb3VwPlxyXG4gICAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cIm9wZW5Db250YWN0VXNNb2RhbCgpXCI+XHJcbiAgICAgICAgPGlvbi1sYWJlbD48c3BhbiBjbGFzcz1cInNlbWlCb2xkXCI+Q29udGFjdCB1czwvc3Bhbj48L2lvbi1sYWJlbD5cclxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZXZyb24tZm9yd2FyZFwiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICA8L2lvbi1pdGVtLWdyb3VwPlxyXG4gIDwvaW9uLWxpc3Q+XHJcbiAgPCEtLSBHZW5lcmFsIC0tPlxyXG4gIDwhLS0gSW5uZXIgYnJvd3NlciBsaXN0IC0tPlxyXG4gIDxpb24tbGlzdD5cclxuICAgIDxpb24taXRlbS1ncm91cD5cclxuICAgICAgPGlvbi1pdGVtIChjbGljayk9XCJvcGVuUGxheXN0b3JlKClcIj5cclxuICAgICAgICA8aW9uLWxhYmVsPjxzcGFuIGNsYXNzPVwic2VtaUJvbGRcIj5SYXRlIHVzPC9zcGFuPjwvaW9uLWxhYmVsPlxyXG4gICAgICAgIDxpb24taW1nIHNyYz1cImFzc2V0cy9pY29uL2ludGVybmFsX2xua19pY29uLnN2Z1wiPjwvaW9uLWltZz5cclxuICAgICAgPC9pb24taXRlbT5cclxuICAgICAgPGlvbi1pdGVtIChjbGljayk9XCJvcGVuSW5hcHAoJ2h0dHBzOi8vd3d3LndoYXR1bmkuY29tL3d1LWNvbnQvcHJpdmFjeS5odG0nKVwiPlxyXG4gICAgICAgIDxpb24tbGFiZWw+PHNwYW4gY2xhc3M9XCJzZW1pQm9sZFwiPlByaXZhY3kgcG9saWN5PC9zcGFuPjwvaW9uLWxhYmVsPlxyXG4gICAgICAgIDxpb24taW1nIHNyYz1cImFzc2V0cy9pY29uL2ludGVybmFsX2xua19pY29uLnN2Z1wiPjwvaW9uLWltZz5cclxuICAgICAgPC9pb24taXRlbT5cclxuICAgICAgPGlvbi1pdGVtIChjbGljayk9XCJvcGVuSW5hcHAoJ2h0dHBzOi8vd3d3LndoYXR1bmkuY29tL3d1LWNvbnQvdGVybXNBbmRDb25kaXRpb24uaHRtJylcIj5cclxuICAgICAgICA8aW9uLWxhYmVsPjxzcGFuIGNsYXNzPVwic2VtaUJvbGRcIj5UZXJtcyBhbmQgY29uZGl0aW9uczwvc3Bhbj48L2lvbi1sYWJlbD5cclxuICAgICAgICA8aW9uLWltZyBzcmM9XCJhc3NldHMvaWNvbi9pbnRlcm5hbF9sbmtfaWNvbi5zdmdcIj48L2lvbi1pbWc+XHJcbiAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICA8L2lvbi1pdGVtLWdyb3VwPlxyXG4gIDwvaW9uLWxpc3Q+XHJcbiAgPCEtLSBJbm5lciBicm93c2VyIGxpc3QgLS0+XHJcbiAgPGlvbi1sYWJlbCBjbGFzcz1cInNpZ25fb3V0XCI+XHJcbiAgICA8aW9uLWJ1dHRvbiBleHBhbmQ9XCJibG9ja1wiIGZpbGw9XCJvdXRsaW5lXCI+U2lnbiBvdXQ8L2lvbi1idXR0b24+XHJcbiAgPC9pb24tbGFiZWw+XHJcbiAgPCEtLSBVc2VyIGxpc3QgLS0+XHJcbjwvaW9uLWNvbnRlbnQ+Il19