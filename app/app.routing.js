"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var landing_page_component_1 = require("./core/components/landing-page/landing-page.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var authentication_guard_1 = require("./core/guards/authentication.guard");
var project_adder_component_1 = require("./dashboard/components/project-adder/project-adder.component");
var routes = [
    { path: "", component: landing_page_component_1.LandingPageComponent, pathMatch: "full" },
    { path: "main", component: dashboard_component_1.DashboardComponent, canActivate: [authentication_guard_1.AuthenticationGuard] },
    { path: "project-adder", component: project_adder_component_1.ProjectAdderComponent, canActivate: [authentication_guard_1.AuthenticationGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFLdkUsZ0dBQTZGO0FBQzdGLHVFQUFxRTtBQUNyRSwyRUFBeUU7QUFDekUsd0dBQXFHO0FBRXJHLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNoRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFLFdBQVcsRUFBRSxDQUFDLDBDQUFtQixDQUFDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRSxXQUFXLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQyxFQUFFO0NBQ2xHLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYW5kaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25HdWFyZCB9IGZyb20gXCIuL2NvcmUvZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkXCI7XG5pbXBvcnQgeyBQcm9qZWN0QWRkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvY29tcG9uZW50cy9wcm9qZWN0LWFkZGVyL3Byb2plY3QtYWRkZXIuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMYW5kaW5nUGFnZUNvbXBvbmVudCwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJtYWluXCIsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhlbnRpY2F0aW9uR3VhcmRdIH0sXG4gICAgeyBwYXRoOiBcInByb2plY3QtYWRkZXJcIiwgY29tcG9uZW50OiBQcm9qZWN0QWRkZXJDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aGVudGljYXRpb25HdWFyZF0gfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==