import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { UserProfilePageRoutingModule } from './user-profile-routing.module';
import { LocationServicesPageModule } from '../pages/location-services/location-services.module';
import { NotificationsPageModule } from '../pages/notifications/notifications.module';
import { PersonalDetailPageModule } from '../pages/personal-detail/personal-detail.module';
import { StudyDetailsPageModule } from '../pages/study-details/study-details.module';
import { UserSettingsPageModule } from '../pages/user-settings/user-settings.module';
import { YearOfEntryComponent } from '../common/year-of-entry/year-of-entry.component';
import { AccessToHEDiplomaComponent } from '../common/access-to-hediploma/access-to-hediploma.component';
import { ContactUsComponent } from '../common/contact-us/contact-us.component';
import { MultipleQualificationComponent } from '../common/multiple-qualification/multiple-qualification.component';
import { QualificationComponent } from '../common/qualification/qualification.component';
import { StudyLevelComponent } from '../common/study-level/study-level.component';
import { UcasTariffPointsComponent } from '../common/ucas-tariff-points/ucas-tariff-points.component';
import { UpdatePasswordComponent } from '../common/update-password/update-password.component';
import { YourGradesComponent } from '../common/your-grades/your-grades.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class UserProfileModule {
}
UserProfileModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserProfileModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileModule, declarations: [UserProfileComponent,
        YearOfEntryComponent,
        AccessToHEDiplomaComponent,
        ContactUsComponent,
        MultipleQualificationComponent,
        QualificationComponent,
        StudyLevelComponent,
        UcasTariffPointsComponent,
        UpdatePasswordComponent,
        YourGradesComponent], imports: [UserProfilePageRoutingModule,
        UserProfilePageRoutingModule,
        LocationServicesPageModule,
        NotificationsPageModule,
        PersonalDetailPageModule,
        StudyDetailsPageModule,
        UserSettingsPageModule, i1.IonicModule], exports: [UserProfileComponent] });
UserProfileModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileModule, providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], imports: [[
            UserProfilePageRoutingModule,
            UserProfilePageRoutingModule,
            LocationServicesPageModule,
            NotificationsPageModule,
            PersonalDetailPageModule,
            StudyDetailsPageModule,
            UserSettingsPageModule,
            IonicModule.forRoot()
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfileModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UserProfileComponent,
                        YearOfEntryComponent,
                        AccessToHEDiplomaComponent,
                        ContactUsComponent,
                        MultipleQualificationComponent,
                        QualificationComponent,
                        StudyLevelComponent,
                        UcasTariffPointsComponent,
                        UpdatePasswordComponent,
                        YourGradesComponent
                    ],
                    imports: [
                        UserProfilePageRoutingModule,
                        UserProfilePageRoutingModule,
                        LocationServicesPageModule,
                        NotificationsPageModule,
                        PersonalDetailPageModule,
                        StudyDetailsPageModule,
                        UserSettingsPageModule,
                        IonicModule.forRoot()
                    ],
                    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
                    exports: [
                        UserProfileComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3VzZXItcHJvZmlsZS9zcmMvbGliL3VzZXItcHJvZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUNyRixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQTtBQUN0RyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxtRUFBbUUsQ0FBQTtBQUNoSCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQTtBQUNuRyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sZ0JBQWdCLENBQUE7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQThCckQsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQTFCMUIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsbUJBQW1CLGFBR25CLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHNCQUFzQiw2QkFLdEIsb0JBQW9CO2dIQUdYLGlCQUFpQixhQUxqQixDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLFlBVmpFO1lBQ1AsNEJBQTRCO1lBQzVCLDRCQUE0QjtZQUM1QiwwQkFBMEI7WUFDMUIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLFdBQVcsQ0FBQyxPQUFPLEVBQUU7U0FDdEI7NEZBTVUsaUJBQWlCO2tCQTVCN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLDBCQUEwQjt3QkFDMUIsa0JBQWtCO3dCQUNsQiw4QkFBOEI7d0JBQzlCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQix5QkFBeUI7d0JBQ3pCLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNEJBQTRCO3dCQUM1Qiw0QkFBNEI7d0JBQzVCLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2Qix3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0QixXQUFXLENBQUMsT0FBTyxFQUFFO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztvQkFDMUUsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjtxQkFDckI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJQcm9maWxlUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3VzZXItcHJvZmlsZS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZXNQYWdlTW9kdWxlfSBmcm9tICcuLi9wYWdlcy9sb2NhdGlvbi1zZXJ2aWNlcy9sb2NhdGlvbi1zZXJ2aWNlcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zUGFnZU1vZHVsZSB9IGZyb20gJy4uL3BhZ2VzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQZXJzb25hbERldGFpbFBhZ2VNb2R1bGUgfSBmcm9tICcuLi9wYWdlcy9wZXJzb25hbC1kZXRhaWwvcGVyc29uYWwtZGV0YWlsLm1vZHVsZSc7XHJcbmltcG9ydCB7IFN0dWR5RGV0YWlsc1BhZ2VNb2R1bGUgfSBmcm9tICcuLi9wYWdlcy9zdHVkeS1kZXRhaWxzL3N0dWR5LWRldGFpbHMubW9kdWxlJztcclxuaW1wb3J0IHsgVXNlclNldHRpbmdzUGFnZU1vZHVsZSB9IGZyb20gJy4uL3BhZ2VzL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5tb2R1bGUnO1xyXG5pbXBvcnQge1llYXJPZkVudHJ5Q29tcG9uZW50fSBmcm9tICcuLi9jb21tb24veWVhci1vZi1lbnRyeS95ZWFyLW9mLWVudHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWNjZXNzVG9IRURpcGxvbWFDb21wb25lbnR9IGZyb20gJy4uL2NvbW1vbi9hY2Nlc3MtdG8taGVkaXBsb21hL2FjY2Vzcy10by1oZWRpcGxvbWEuY29tcG9uZW50J1xyXG5pbXBvcnQge0NvbnRhY3RVc0NvbXBvbmVudH0gZnJvbSAnLi4vY29tbW9uL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge011bHRpcGxlUXVhbGlmaWNhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi4vY29tbW9uL211bHRpcGxlLXF1YWxpZmljYXRpb24vbXVsdGlwbGUtcXVhbGlmaWNhdGlvbi5jb21wb25lbnQnXHJcbmltcG9ydCB7UXVhbGlmaWNhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi4vY29tbW9uL3F1YWxpZmljYXRpb24vcXVhbGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0dWR5TGV2ZWxDb21wb25lbnR9IGZyb20gJy4uL2NvbW1vbi9zdHVkeS1sZXZlbC9zdHVkeS1sZXZlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1VjYXNUYXJpZmZQb2ludHNDb21wb25lbnR9IGZyb20gJy4uL2NvbW1vbi91Y2FzLXRhcmlmZi1wb2ludHMvdWNhcy10YXJpZmYtcG9pbnRzLmNvbXBvbmVudCdcclxuaW1wb3J0IHtVcGRhdGVQYXNzd29yZENvbXBvbmVudH0gZnJvbSAnLi4vY29tbW9uL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtZb3VyR3JhZGVzQ29tcG9uZW50fSBmcm9tICcuLi9jb21tb24veW91ci1ncmFkZXMveW91ci1ncmFkZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtJb25pY01vZHVsZSwgSW9uaWNSb3V0ZVN0cmF0ZWd5fSBmcm9tICdAaW9uaWMvYW5ndWxhcidcclxuaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBVc2VyUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIFllYXJPZkVudHJ5Q29tcG9uZW50LFxyXG4gICAgQWNjZXNzVG9IRURpcGxvbWFDb21wb25lbnQsXHJcbiAgICBDb250YWN0VXNDb21wb25lbnQsXHJcbiAgICBNdWx0aXBsZVF1YWxpZmljYXRpb25Db21wb25lbnQsXHJcbiAgICBRdWFsaWZpY2F0aW9uQ29tcG9uZW50LFxyXG4gICAgU3R1ZHlMZXZlbENvbXBvbmVudCxcclxuICAgIFVjYXNUYXJpZmZQb2ludHNDb21wb25lbnQsXHJcbiAgICBVcGRhdGVQYXNzd29yZENvbXBvbmVudCxcclxuICAgIFlvdXJHcmFkZXNDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFVzZXJQcm9maWxlUGFnZVJvdXRpbmdNb2R1bGUsXHJcbiAgICBVc2VyUHJvZmlsZVBhZ2VSb3V0aW5nTW9kdWxlLFxyXG4gICAgTG9jYXRpb25TZXJ2aWNlc1BhZ2VNb2R1bGUsXHJcbiAgICBOb3RpZmljYXRpb25zUGFnZU1vZHVsZSxcclxuICAgIFBlcnNvbmFsRGV0YWlsUGFnZU1vZHVsZSxcclxuICAgIFN0dWR5RGV0YWlsc1BhZ2VNb2R1bGUsXHJcbiAgICBVc2VyU2V0dGluZ3NQYWdlTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFJvdXRlUmV1c2VTdHJhdGVneSwgdXNlQ2xhc3M6IElvbmljUm91dGVTdHJhdGVneSB9XSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBVc2VyUHJvZmlsZUNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlTW9kdWxlIHsgfVxyXG4iXX0=