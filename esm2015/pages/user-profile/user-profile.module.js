import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserProfilePageRoutingModule } from './user-profile-routing.module';
import { UserProfilePage } from './user-profile.page';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import * as i0 from "@angular/core";
export class UserProfilePageModule {
}
UserProfilePageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserProfilePageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageModule, declarations: [UserProfilePage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        UserProfilePageRoutingModule] });
UserProfilePageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageModule, providers: [InAppBrowser], imports: [[
            CommonModule,
            FormsModule,
            IonicModule,
            UserProfilePageRoutingModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        UserProfilePageRoutingModule,
                    ],
                    declarations: [UserProfilePage],
                    providers: [InAppBrowser]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VzZXItcHJvZmlsZS9zcmMvcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQWEzRSxNQUFNLE9BQU8scUJBQXFCOzttSEFBckIscUJBQXFCO29IQUFyQixxQkFBcUIsaUJBSGpCLGVBQWUsYUFONUIsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1gsNEJBQTRCO29IQU1uQixxQkFBcUIsYUFGdEIsQ0FBQyxZQUFZLENBQUMsWUFSZjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVztZQUNYLDRCQUE0QjtTQUU3Qjs0RkFJVSxxQkFBcUI7a0JBWGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO3dCQUNYLDRCQUE0QjtxQkFFN0I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixTQUFTLEVBQUMsQ0FBQyxZQUFZLENBQUM7aUJBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZVBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi91c2VyLXByb2ZpbGUtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZVBhZ2UgfSBmcm9tICcuL3VzZXItcHJvZmlsZS5wYWdlJztcclxuaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2luLWFwcC1icm93c2VyL25neCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBVc2VyUHJvZmlsZVBhZ2VSb3V0aW5nTW9kdWxlLFxyXG5cclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1VzZXJQcm9maWxlUGFnZV0sXHJcbiAgcHJvdmlkZXJzOltJbkFwcEJyb3dzZXJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZVBhZ2VNb2R1bGUgeyB9XHJcbiJdfQ==