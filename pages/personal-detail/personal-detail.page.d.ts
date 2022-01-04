import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PersonalDetailPage implements OnInit {
    private formBuilder;
    profileForm: FormGroup;
    errMsgs: Array<string>;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PersonalDetailPage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PersonalDetailPage, "app-personal-detail", never, {}, {}, never, never>;
}
