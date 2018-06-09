"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_project_service_1 = require("../../../shared/services/data-project.service");
var data_user_service_1 = require("../../../shared/services/data-user.service");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(dataProjectService, dataUserService) {
        this.dataProjectService = dataProjectService;
        this.dataUserService = dataUserService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.dataProjectService.loadProjects();
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: "ns-projects",
            moduleId: __filename,
            templateUrl: "./projects.component.html",
            styleUrls: ["./projects.component.css"],
        }),
        __metadata("design:paramtypes", [data_project_service_1.DataProjectService,
            data_user_service_1.DataUserService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNGQUFtRjtBQUNuRixnRkFBNkU7QUFTN0U7SUFFSSwyQkFDWSxrQkFBc0MsRUFDdEMsZUFBZ0M7UUFEaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDeEMsQ0FBQztJQUVMLG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQVRRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQUlrQyx5Q0FBa0I7WUFDckIsbUNBQWU7T0FKbkMsaUJBQWlCLENBVTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERhdGFQcm9qZWN0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YS1wcm9qZWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0YVVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLXVzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL3Byb2plY3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1wcm9qZWN0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IF9fZmlsZW5hbWUsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2plY3RzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcHJvamVjdHMuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2plY3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhUHJvamVjdFNlcnZpY2U6IERhdGFQcm9qZWN0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGRhdGFVc2VyU2VydmljZTogRGF0YVVzZXJTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YVByb2plY3RTZXJ2aWNlLmxvYWRQcm9qZWN0cygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==