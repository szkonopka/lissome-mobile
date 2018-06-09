"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var project_component_1 = require("./project.component");
var forms_1 = require("@angular/forms");
var project_service_1 = require("../core/services/project.service");
var sprint_service_1 = require("../core/services/sprint.service");
var task_service_1 = require("../core/services/task.service");
var shared_module_1 = require("../shared/shared.module");
var role_service_1 = require("../core/services/role.service");
var task_assignees_service_1 = require("../core/services/task-assignees.service");
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                project_component_1.ProjectComponent,
            ],
            exports: [
                project_component_1.ProjectComponent,
            ],
            providers: [
                project_service_1.ProjectService,
                sprint_service_1.SprintService,
                task_service_1.TaskService,
                role_service_1.RoleService,
                task_assignees_service_1.TaskAssigneesService
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9qZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MseURBQXVEO0FBR3ZELHdDQUE2QztBQUM3QyxvRUFBa0U7QUFDbEUsa0VBQWdFO0FBQ2hFLDhEQUE0RDtBQUM1RCx5REFBdUQ7QUFDdkQsOERBQTREO0FBQzVELGtGQUErRTtBQXVCL0U7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFyQnpCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixtQkFBVztnQkFDWCw0QkFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLG9DQUFnQjthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxvQ0FBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsMEJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gsNkNBQW9CO2FBQ3JCO1NBQ0YsQ0FBQztPQUVXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9qZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUHJvamVjdFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3Byb2plY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFNwcmludFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3NwcmludC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFza1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3Rhc2suc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgUm9sZVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3JvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhc2tBc3NpZ25lZXNTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy90YXNrLWFzc2lnbmVlcy5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBTaGFyZWRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUHJvamVjdENvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFByb2plY3RDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFByb2plY3RTZXJ2aWNlLFxyXG4gICAgU3ByaW50U2VydmljZSxcclxuICAgIFRhc2tTZXJ2aWNlLFxyXG4gICAgUm9sZVNlcnZpY2UsXHJcbiAgICBUYXNrQXNzaWduZWVzU2VydmljZVxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kdWxlIHsgfVxyXG4iXX0=