import { OnInit } from '@angular/core';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { Platform } from '@ionic/angular';
import * as i0 from "@angular/core";
export declare class LocationServicesPage implements OnInit {
    private openNativeSettings;
    private diagnostic;
    private platform;
    locationEnable: boolean;
    constructor(openNativeSettings: OpenNativeSettings, diagnostic: Diagnostic, platform: Platform);
    ngOnInit(): void;
    toggleChange(eve: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationServicesPage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocationServicesPage, "app-location-services", never, {}, {}, never, never>;
}
