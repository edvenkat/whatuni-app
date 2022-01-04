import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationServicesPageRoutingModule } from './location-services-routing.module';
import { LocationServicesPage } from './location-services.page';
//Native Imports
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import * as i0 from "@angular/core";
export class LocationServicesPageModule {
}
LocationServicesPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LocationServicesPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageModule, declarations: [LocationServicesPage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        LocationServicesPageRoutingModule] });
LocationServicesPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageModule, providers: [OpenNativeSettings, Diagnostic], imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            LocationServicesPageRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: LocationServicesPageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        LocationServicesPageRoutingModule
                    ],
                    declarations: [LocationServicesPage],
                    providers: [OpenNativeSettings, Diagnostic]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tc2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXNlci1wcm9maWxlL3NyYy9wYWdlcy9sb2NhdGlvbi1zZXJ2aWNlcy9sb2NhdGlvbi1zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxnQkFBZ0I7QUFDaEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQVlyRSxNQUFNLE9BQU8sMEJBQTBCOzt3SEFBMUIsMEJBQTBCO3lIQUExQiwwQkFBMEIsaUJBSHRCLG9CQUFvQixhQUxqQyxZQUFZO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWCxpQ0FBaUM7eUhBS3hCLDBCQUEwQixhQUYzQixDQUFDLGtCQUFrQixFQUFDLFVBQVUsQ0FBQyxZQVBoQztZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVztZQUNYLGlDQUFpQztTQUNsQzs0RkFJVSwwQkFBMEI7a0JBVnRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO3dCQUNYLGlDQUFpQztxQkFDbEM7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLFNBQVMsRUFBQyxDQUFDLGtCQUFrQixFQUFDLFVBQVUsQ0FBQztpQkFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlc1BhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9sb2NhdGlvbi1zZXJ2aWNlcy1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2VzUGFnZSB9IGZyb20gJy4vbG9jYXRpb24tc2VydmljZXMucGFnZSc7XHJcbi8vTmF0aXZlIEltcG9ydHNcclxuaW1wb3J0IHsgT3Blbk5hdGl2ZVNldHRpbmdzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL29wZW4tbmF0aXZlLXNldHRpbmdzL25neCc7XHJcbmltcG9ydCB7IERpYWdub3N0aWMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZGlhZ25vc3RpYy9uZ3gnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIElvbmljTW9kdWxlLFxyXG4gICAgTG9jYXRpb25TZXJ2aWNlc1BhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtMb2NhdGlvblNlcnZpY2VzUGFnZV0sXHJcbiAgcHJvdmlkZXJzOltPcGVuTmF0aXZlU2V0dGluZ3MsRGlhZ25vc3RpY11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU2VydmljZXNQYWdlTW9kdWxlIHt9XHJcbiJdfQ==