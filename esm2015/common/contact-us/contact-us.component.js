import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class ContactUsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC11cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91c2VyLXByb2ZpbGUvc3JjL2NvbW1vbi9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXNlci1wcm9maWxlL3NyYy9jb21tb24vY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLFlBQW9CLFNBQTBCO1FBQTFCLGNBQVMsR0FBVCxTQUFTLENBQWlCO0lBQUksQ0FBQztJQUVuRCxRQUFRLEtBQUksQ0FBQztJQUViLFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dIQVJVLGtCQUFrQjtvR0FBbEIsa0JBQWtCLHNEQ1IvQiwrK0JBcUJjOzRGRGJELGtCQUFrQjtrQkFMOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jb250YWN0LXVzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC11cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdC11cy5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdFVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbW9kYWxkaXNtaXNzKCl7XHJcbiAgICB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiPGlvbi1oZWFkZXIgY2xhc3M9XCJoZHJfbW9kYWxcIiBtb2RlPWlvcz5cclxuICA8aW9uLXRvb2xiYXI+XHJcbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XHJcbiAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJtb2RhbGRpc21pc3MoKVwiPlxyXG4gICAgICAgIDxpb24taW1nIHNyYz1cImFzc2V0cy9pY29uL2Nsb3NlX21vZGFsX2ljb24uc3ZnXCIgYWx0PVwiY2xvc2VcIj48L2lvbi1pbWc+XHJcbiAgICAgIDwvaW9uLWJ1dHRvbj5cclxuICAgIDwvaW9uLWJ1dHRvbnM+XHJcbiAgICAgIDxpb24tdGl0bGU+Q29udGFjdCB1czwvaW9uLXRpdGxlPlxyXG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxyXG4gICAgICAgIDxpb24tYnV0dG9uIGNsYXNzPVwibW9kYWxfZG9uZVwiPlNlbmQ8L2lvbi1idXR0b24+XHJcbiAgICAgIDwvaW9uLWJ1dHRvbnM+IFxyXG4gIDwvaW9uLXRvb2xiYXI+XHJcbjwvaW9uLWhlYWRlcj5cclxuPGlvbi1jb250ZW50IG1vZGU9aW9zPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250dXNfc2VjXCI+XHJcbiAgICA8aW9uLWxpc3QgY2xhc3M9XCJjb250X2Zyb21cIj5cclxuICAgICAgPGlvbi1pdGVtPlxyXG4gICAgICAgIDxpb24tdGV4dGFyZWEgcm93cz1cIjE3XCIgY29scz1cIjIwXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIG1lc3NhZ2VcIiB2YWx1ZT1cIkludGVnZXIgYWxpcXVldCB0cmlzdGlxdWUgbnVuYyBhYyB0aW5jaWR1bnQuIEFsaXF1YW0gbG9ib3J0aXMgYXQgbmlzbCBldSBzdXNjaXBpdC4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBTZWQgdHVycGlzIG1pLCBhbGlxdWFtIHF1aXMgc29sbGljaXR1ZGluIG5vbiwgdGluY2lkdW50IGEgdHVycGlzLiBWZXN0aWJ1bHVtIGZpbmlidXMgdGluY2lkdW50IGhlbmRyZXJpdFwiIGF1dG9mb2N1cz1cInRydWVcIj48L2lvbi10ZXh0YXJlYT5cclxuICAgICAgPC9pb24taXRlbT5cclxuICAgIDwvaW9uLWxpc3Q+XHJcbiAgPC9kaXY+XHJcbjwvaW9uLWNvbnRlbnQ+Il19