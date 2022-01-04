import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { PersonalDetailPageModule } from '../pages/personal-detail/personal-detail.module';
import { StudyDetailsPageModule } from '../pages/study-details/study-details.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'user-profile',
        component: UserProfileComponent,
    },
    {
        path: '',
        component: PersonalDetailPageModule,
    },
    {
        path: 'study-details',
        component: StudyDetailsPageModule,
    },
];
export class UserProfilePageRoutingModule {
    static getRoutes() {
        return routes;
    }
}
UserProfilePageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserProfilePageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
UserProfilePageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: UserProfilePageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdXNlci1wcm9maWxlL3NyYy9saWIvdXNlci1wcm9maWxlLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7QUFJckYsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsY0FBYztRQUNwQixTQUFTLEVBQUUsb0JBQW9CO0tBQ2hDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSx3QkFBd0I7S0FDcEM7SUFDRDtRQUNFLElBQUksRUFBRSxlQUFlO1FBQ3JCLFNBQVMsRUFBRSxzQkFBc0I7S0FDbEM7Q0FFRixDQUFDO0FBT0YsTUFBTSxPQUFPLDRCQUE0QjtJQUNsQyxNQUFNLENBQUMsU0FBUztRQUNuQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzswSEFIWSw0QkFBNEI7MkhBQTVCLDRCQUE0Qix3Q0FGN0IsWUFBWTsySEFFWCw0QkFBNEIsWUFKOUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBRTlCLFlBQVk7NEZBRVgsNEJBQTRCO2tCQUx4QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRXhDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLXByb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlc1BhZ2VNb2R1bGV9IGZyb20gJy4uL3BhZ2VzL2xvY2F0aW9uLXNlcnZpY2VzL2xvY2F0aW9uLXNlcnZpY2VzLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNQYWdlTW9kdWxlIH0gZnJvbSAnLi4vcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBlcnNvbmFsRGV0YWlsUGFnZU1vZHVsZSB9IGZyb20gJy4uL3BhZ2VzL3BlcnNvbmFsLWRldGFpbC9wZXJzb25hbC1kZXRhaWwubW9kdWxlJztcclxuaW1wb3J0IHsgU3R1ZHlEZXRhaWxzUGFnZU1vZHVsZSB9IGZyb20gJy4uL3BhZ2VzL3N0dWR5LWRldGFpbHMvc3R1ZHktZGV0YWlscy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBVc2VyU2V0dGluZ3NQYWdlTW9kdWxlIH0gZnJvbSAnLi4vcGFnZXMvdXNlci1zZXR0aW5ncy91c2VyLXNldHRpbmdzLm1vZHVsZSc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ3VzZXItcHJvZmlsZScsXHJcbiAgICBjb21wb25lbnQ6IFVzZXJQcm9maWxlQ29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IFBlcnNvbmFsRGV0YWlsUGFnZU1vZHVsZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdzdHVkeS1kZXRhaWxzJyxcclxuICAgIGNvbXBvbmVudDogU3R1ZHlEZXRhaWxzUGFnZU1vZHVsZSxcclxuICB9LFxyXG5cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZVBhZ2VSb3V0aW5nTW9kdWxlIHsgXHJcbnB1YmxpYyBzdGF0aWMgZ2V0Um91dGVzKCl7XHJcbiAgICByZXR1cm4gcm91dGVzO1xyXG59XHJcblxyXG5cclxufVxyXG4iXX0=