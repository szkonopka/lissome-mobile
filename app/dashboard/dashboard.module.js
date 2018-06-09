"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("./dashboard.component");
var projects_component_1 = require("./components/projects/projects.component");
var data_project_service_1 = require("../shared/services/data-project.service");
var router_1 = require("@angular/router");
var data_task_service_1 = require("../shared/services/data-task.service");
var task_service_1 = require("../core/services/task.service");
var forms_1 = require("@angular/forms");
var task_state_service_1 = require("../core/services/task-state.service");
var shared_module_1 = require("../shared/shared.module");
var project_role_service_1 = require("../core/services/project-role.service");
var data_user_service_1 = require("../shared/services/data-user.service");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var project_adder_component_1 = require("./components/project-adder/project-adder.component");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                nativescript_module_1.NativeScriptModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                projects_component_1.ProjectsComponent,
                project_adder_component_1.ProjectAdderComponent
            ],
            exports: [],
            providers: [
                data_task_service_1.DataTaskService,
                task_service_1.TaskService,
                data_project_service_1.DataProjectService,
                task_state_service_1.TaskStateService,
                project_role_service_1.ProjectRoleService,
                data_user_service_1.DataUserService
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDZEQUEyRDtBQUMzRCwrRUFBNkU7QUFDN0UsZ0ZBQTZFO0FBQzdFLDBDQUErQztBQUMvQywwRUFBdUU7QUFDdkUsOERBQTREO0FBQzVELHdDQUE2QztBQUM3QywwRUFBdUU7QUFFdkUseURBQXVEO0FBQ3ZELDhFQUFrRztBQUNsRywwRUFBdUU7QUFDdkUsZ0ZBQThFO0FBQzlFLDhGQUEyRjtBQTJCM0Y7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUF6QjNCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixxQkFBWTtnQkFDWixtQkFBVztnQkFDWCw0QkFBWTtnQkFDWix3Q0FBa0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osd0NBQWtCO2dCQUNsQixzQ0FBaUI7Z0JBQ2pCLCtDQUFxQjthQUN0QjtZQUNELE9BQU8sRUFBRSxFQUVSO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG1DQUFlO2dCQUNmLDBCQUFXO2dCQUNYLHlDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQix5Q0FBa0I7Z0JBQ2xCLG1DQUFlO2FBQ2hCO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRhUHJvamVjdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvZGF0YS1wcm9qZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEYXRhVGFza1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvZGF0YS10YXNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdGFzay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRhc2tTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3Rhc2stc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTcHJpbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEtc3ByaW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFByb2plY3RSb2xlU2VyaWFsaXplciwgUHJvamVjdFJvbGVTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9wcm9qZWN0LXJvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFVc2VyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLXVzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0QWRkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdC1hZGRlci9wcm9qZWN0LWFkZGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIERhc2hib2FyZENvbXBvbmVudCxcclxuICAgIFByb2plY3RzQ29tcG9uZW50LFxyXG4gICAgUHJvamVjdEFkZGVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRGF0YVRhc2tTZXJ2aWNlLFxyXG4gICAgVGFza1NlcnZpY2UsXHJcbiAgICBEYXRhUHJvamVjdFNlcnZpY2UsXHJcbiAgICBUYXNrU3RhdGVTZXJ2aWNlLFxyXG4gICAgUHJvamVjdFJvbGVTZXJ2aWNlLFxyXG4gICAgRGF0YVVzZXJTZXJ2aWNlXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cclxuIl19