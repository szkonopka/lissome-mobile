import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from "./core/guards/authentication.guard";
import { ProjectAdderComponent } from "./dashboard/components/project-adder/project-adder.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectResolve } from "./shared/resolvers/project-resolve";

const routes: Routes = [
    { path: "", component: LandingPageComponent, pathMatch: "full" },
    { path: "main", component: DashboardComponent, canActivate: [AuthenticationGuard] },
    { path: "project-adder", component: ProjectAdderComponent },
    { path: "projects/:slug/:id", pathMatch: 'prefix', component: ProjectComponent, resolve: { project: ProjectResolve }}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
