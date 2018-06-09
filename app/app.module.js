"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var authentication_service_1 = require("./core/services/authentication.service");
var app_routing_1 = require("./app.routing");
var project_module_1 = require("./project/project.module");
var core_module_1 = require("./core/core.module");
var authentication_guard_1 = require("./core/guards/authentication.guard");
var shared_module_1 = require("./shared/shared.module");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                shared_module_1.SharedModule,
                core_module_1.CoreModule,
                dashboard_module_1.DashboardModule,
                project_module_1.ProjectModule,
                app_routing_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule
            ],
            providers: [
                authentication_service_1.AuthenticationService,
                authentication_guard_1.AuthenticationGuard,
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBMEQ7QUFDMUQsc0NBQXlDO0FBR3pDLGlEQUErQztBQUMvQyxpRUFBK0Q7QUFDL0QsaUZBQStFO0FBQy9FLDZDQUFpRDtBQUNqRCwyREFBeUQ7QUFDekQsa0RBQWdEO0FBRWhELDJFQUF5RTtBQUN6RSx3REFBc0Q7QUFFdEQsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzREFBc0U7QUFDdEUsc0RBQXVFO0FBMEJ2RTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBeEJyQixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7YUFDYjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQ0FBYTtnQkFDYiw0QkFBWTtnQkFDWix3QkFBVTtnQkFDVixrQ0FBZTtnQkFDZiw4QkFBYTtnQkFDYiw4QkFBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QjthQUN6QjtZQUNELFNBQVMsRUFBRTtnQkFDVCw4Q0FBcUI7Z0JBQ3JCLDBDQUFtQjthQUNwQjtZQUNELFNBQVMsRUFBRTtnQkFDVCw0QkFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZE1vZHVsZSB9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb3JlL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgUHJvamVjdE1vZHVsZSB9IGZyb20gJy4vcHJvamVjdC9wcm9qZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcbmltcG9ydCB7IENvcmVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25HdWFyZCB9IGZyb20gJy4vY29yZS9ndWFyZHMvYXV0aGVudGljYXRpb24uZ3VhcmQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIERhc2hib2FyZE1vZHVsZSxcbiAgICBQcm9qZWN0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgQXV0aGVudGljYXRpb25HdWFyZCxcbiAgXSxcbiAgYm9vdHN0cmFwOiBbXG4gICAgQXBwQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19