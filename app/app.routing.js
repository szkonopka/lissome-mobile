"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var landing_page_component_1 = require("./core/components/landing-page/landing-page.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var authentication_guard_1 = require("./core/guards/authentication.guard");
var project_adder_component_1 = require("./dashboard/components/project-adder/project-adder.component");
var project_component_1 = require("./project/project.component");
var project_resolve_1 = require("./shared/resolvers/project-resolve");
var routes = [
    { path: "", component: landing_page_component_1.LandingPageComponent, pathMatch: "full" },
    { path: "main", component: dashboard_component_1.DashboardComponent, canActivate: [authentication_guard_1.AuthenticationGuard] },
    { path: "project-adder", component: project_adder_component_1.ProjectAdderComponent },
    { path: "projects/:slug/:id", pathMatch: 'prefix', component: project_component_1.ProjectComponent, resolve: { project: project_resolve_1.ProjectResolve } }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFLdkUsZ0dBQTZGO0FBQzdGLHVFQUFxRTtBQUNyRSwyRUFBeUU7QUFDekUsd0dBQXFHO0FBQ3JHLGlFQUErRDtBQUMvRCxzRUFBb0U7QUFFcEUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ2hFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUUsV0FBVyxFQUFFLENBQUMsMENBQW1CLENBQUMsRUFBRTtJQUNuRixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO0lBQzNELEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLEVBQUM7Q0FDeEgsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExhbmRpbmdQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkd1YXJkIH0gZnJvbSBcIi4vY29yZS9ndWFyZHMvYXV0aGVudGljYXRpb24uZ3VhcmRcIjtcbmltcG9ydCB7IFByb2plY3RBZGRlckNvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9jb21wb25lbnRzL3Byb2plY3QtYWRkZXIvcHJvamVjdC1hZGRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9qZWN0UmVzb2x2ZSB9IGZyb20gXCIuL3NoYXJlZC9yZXNvbHZlcnMvcHJvamVjdC1yZXNvbHZlXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMYW5kaW5nUGFnZUNvbXBvbmVudCwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJtYWluXCIsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhlbnRpY2F0aW9uR3VhcmRdIH0sXG4gICAgeyBwYXRoOiBcInByb2plY3QtYWRkZXJcIiwgY29tcG9uZW50OiBQcm9qZWN0QWRkZXJDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicHJvamVjdHMvOnNsdWcvOmlkXCIsIHBhdGhNYXRjaDogJ3ByZWZpeCcsIGNvbXBvbmVudDogUHJvamVjdENvbXBvbmVudCwgcmVzb2x2ZTogeyBwcm9qZWN0OiBQcm9qZWN0UmVzb2x2ZSB9fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==