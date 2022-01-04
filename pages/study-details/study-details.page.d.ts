import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as i0 from "@angular/core";
export declare class StudyDetailsPage implements OnInit {
    private router;
    private modalCntrl;
    constructor(router: Router, modalCntrl: ModalController);
    ngOnInit(): void;
    openStudyLevelModal(): Promise<void>;
    openYearofEntryModal(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StudyDetailsPage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StudyDetailsPage, "app-study-details", never, {}, {}, never, never>;
}
