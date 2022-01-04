import { OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as i0 from "@angular/core";
export declare class QualificationComponent implements OnInit {
    private modalCtrl;
    constructor(modalCtrl: ModalController);
    ngOnInit(): void;
    openUcasTariffPointsModal(): Promise<void>;
    openMultipleQualificationModal(): Promise<void>;
    openAccesstoHEDiplomaModal(): Promise<void>;
    modaldismiss(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QualificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QualificationComponent, "app-qualification", never, {}, {}, never, never>;
}
