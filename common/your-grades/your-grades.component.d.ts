import { OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as i0 from "@angular/core";
export declare class YourGradesComponent implements OnInit {
    private modalCtrl;
    constructor(modalCtrl: ModalController);
    ngOnInit(): void;
    openQualificationModal(): Promise<void>;
    modaldismiss(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<YourGradesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<YourGradesComponent, "app-your-grades", never, {}, {}, never, never>;
}
