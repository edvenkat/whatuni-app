import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import * as i0 from "@angular/core";
export declare class UserProfilePage implements OnInit {
    private router;
    private modalCntrl;
    private iab;
    constructor(router: Router, modalCntrl: ModalController, iab: InAppBrowser);
    ngOnInit(): void;
    gotoPersonalDetails(): void;
    gotoStudyDetails(): void;
    gotoUserSettings(): void;
    gotoLocationServices(): void;
    gotoNotifications(): void;
    openYourGradesModal(): Promise<void>;
    openUpdatePwdModal(): Promise<void>;
    openContactUsModal(): Promise<void>;
    openPlaystore(): void;
    openInapp(eve: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserProfilePage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserProfilePage, "app-user-profile", never, {}, {}, never, never>;
}
