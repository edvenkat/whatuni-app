import { OnInit } from '@angular/core';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { Platform } from '@ionic/angular';
import * as i0 from "@angular/core";
export declare class NotificationsPage implements OnInit {
    private openNativeSettings;
    private diagnostic;
    private platform;
    notificationEnable: boolean;
    constructor(openNativeSettings: OpenNativeSettings, diagnostic: Diagnostic, platform: Platform);
    ngOnInit(): void;
    toggleChange(eve: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationsPage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationsPage, "app-notifications", never, {}, {}, never, never>;
}
