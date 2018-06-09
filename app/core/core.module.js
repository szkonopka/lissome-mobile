"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_component_1 = require("./core.component");
var landing_page_component_1 = require("./components/landing-page/landing-page.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var component_switcher_service_1 = require("./services/component-switcher.service");
var http_1 = require("@angular/http");
var app_config_1 = require("../config/app.config");
var user_service_1 = require("./services/user.service");
var http_2 = require("@angular/common/http");
var forms_2 = require("nativescript-angular/forms");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                forms_2.NativeScriptFormsModule
            ],
            declarations: [
                landing_page_component_1.LandingPageComponent,
                core_component_1.CoreComponent,
            ],
            exports: [
                core_component_1.CoreComponent
            ],
            providers: [
                component_switcher_service_1.ComponentSwitcherService,
                app_config_1.Configuration,
                user_service_1.UserService,
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsbURBQWlEO0FBQ2pELDJGQUF3RjtBQUN4RiwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLG9GQUFpRjtBQUNqRixzQ0FBMkM7QUFDM0MsbURBQXFEO0FBQ3JELHdEQUFzRDtBQUN0RCw2Q0FBK0U7QUFDL0Usb0RBQXFFO0FBeUJyRTtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBdkJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7Z0JBQ1oscUJBQVk7Z0JBQ1osbUJBQVc7Z0JBQ1gsaUJBQVU7Z0JBQ1YsdUJBQWdCO2dCQUNoQiwrQkFBdUI7YUFDeEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNkNBQW9CO2dCQUNwQiw4QkFBYTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDhCQUFhO2FBQ2Q7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QscURBQXdCO2dCQUN4QiwwQkFBYTtnQkFDYiwwQkFBVzthQUNaO1NBQ0YsQ0FBQztPQUVXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvcmVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFuZGluZ1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50U3dpdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21wb25lbnQtc3dpdGNoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2NvbmZpZy9hcHAuY29uZmlnJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRKc29ucE1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgSHR0cE1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMYW5kaW5nUGFnZUNvbXBvbmVudCxcclxuICAgIENvcmVDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb3JlQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENvbXBvbmVudFN3aXRjaGVyU2VydmljZSxcclxuICAgIENvbmZpZ3VyYXRpb24sXHJcbiAgICBVc2VyU2VydmljZSxcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7IH1cclxuIl19