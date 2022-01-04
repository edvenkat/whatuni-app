import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotificationsPageRoutingModule } from './notifications-routing.module';
import { NotificationsPage } from './notifications.page';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import * as i0 from "@angular/core";
export class NotificationsPageModule {
}
NotificationsPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NotificationsPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageModule, declarations: [NotificationsPage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        NotificationsPageRoutingModule] });
NotificationsPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageModule, providers: [OpenNativeSettings, Diagnostic], imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            NotificationsPageRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: NotificationsPageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        NotificationsPageRoutingModule
                    ],
                    declarations: [NotificationsPage],
                    providers: [OpenNativeSettings, Diagnostic]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91c2VyLXByb2ZpbGUvc3JjL3BhZ2VzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBWXJFLE1BQU0sT0FBTyx1QkFBdUI7O3FIQUF2Qix1QkFBdUI7c0hBQXZCLHVCQUF1QixpQkFIbkIsaUJBQWlCLGFBTDlCLFlBQVk7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNYLDhCQUE4QjtzSEFLckIsdUJBQXVCLGFBRnhCLENBQUMsa0JBQWtCLEVBQUMsVUFBVSxDQUFDLFlBUGhDO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gsOEJBQThCO1NBQy9COzRGQUlVLHVCQUF1QjtrQkFWbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsOEJBQThCO3FCQUMvQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsU0FBUyxFQUFDLENBQUMsa0JBQWtCLEVBQUMsVUFBVSxDQUFDO2lCQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1BhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1BhZ2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMucGFnZSc7XHJcbmltcG9ydCB7IE9wZW5OYXRpdmVTZXR0aW5ncyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9vcGVuLW5hdGl2ZS1zZXR0aW5ncy9uZ3gnO1xyXG5pbXBvcnQgeyBEaWFnbm9zdGljIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RpYWdub3N0aWMvbmd4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIE5vdGlmaWNhdGlvbnNQYWdlUm91dGluZ01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTm90aWZpY2F0aW9uc1BhZ2VdLFxyXG4gIHByb3ZpZGVyczpbT3Blbk5hdGl2ZVNldHRpbmdzLERpYWdub3N0aWNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zUGFnZU1vZHVsZSB7fVxyXG4iXX0=