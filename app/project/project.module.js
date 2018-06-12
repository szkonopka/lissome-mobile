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
var project_resolve_1 = require("../shared/resolvers/project-resolve");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_2 = require("nativescript-angular/common");
var backlog_component_1 = require("./components/backlog/backlog.component");
var task_component_1 = require("./components/task/task.component");
var sprint_tasks_component_1 = require("./components/sprint-tasks/sprint-tasks.component");
var kanban_board_component_1 = require("./components/kanban-board/kanban-board.component");
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                nativescript_module_1.NativeScriptModule,
                common_2.NativeScriptCommonModule
            ],
            declarations: [
                project_component_1.ProjectComponent,
                backlog_component_1.BacklogComponent,
                task_component_1.TaskComponent,
                sprint_tasks_component_1.SprintTasksComponent,
                kanban_board_component_1.KanbanBoardComponent
            ],
            exports: [
                project_component_1.ProjectComponent,
            ],
            providers: [
                project_service_1.ProjectService,
                sprint_service_1.SprintService,
                task_service_1.TaskService,
                role_service_1.RoleService,
                task_assignees_service_1.TaskAssigneesService,
                project_resolve_1.ProjectResolve
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9qZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MseURBQXVEO0FBR3ZELHdDQUE2QztBQUM3QyxvRUFBa0U7QUFDbEUsa0VBQWdFO0FBQ2hFLDhEQUE0RDtBQUM1RCx5REFBdUQ7QUFDdkQsOERBQTREO0FBQzVELGtGQUErRTtBQUMvRSx1RUFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLHNEQUFzRTtBQUN0RSw0RUFBMEU7QUFDMUUsbUVBQWlFO0FBQ2pFLDJGQUF3RjtBQUN4RiwyRkFBd0Y7QUE4QnhGO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBNUJ6QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7Z0JBQ1osbUJBQVc7Z0JBQ1gsNEJBQVk7Z0JBQ1osd0NBQWtCO2dCQUNsQixpQ0FBd0I7YUFDekI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osb0NBQWdCO2dCQUNoQixvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2dCQUNiLDZDQUFvQjtnQkFDcEIsNkNBQW9CO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9DQUFnQjthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxnQ0FBYztnQkFDZCw4QkFBYTtnQkFDYiwwQkFBVztnQkFDWCwwQkFBVztnQkFDWCw2Q0FBb0I7Z0JBQ3BCLGdDQUFjO2FBQ2Y7U0FDRixDQUFDO09BRVcsYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFByb2plY3RDb21wb25lbnQgfSBmcm9tICcuL3Byb2plY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBQcm9qZWN0U2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ByaW50U2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvc3ByaW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdGFzay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBSb2xlU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvcm9sZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFza0Fzc2lnbmVlc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3Rhc2stYXNzaWduZWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0UmVzb2x2ZSB9IGZyb20gJy4uL3NoYXJlZC9yZXNvbHZlcnMvcHJvamVjdC1yZXNvbHZlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20nbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQmFja2xvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYWNrbG9nL2JhY2tsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFza0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YXNrL3Rhc2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ByaW50VGFza3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3ByaW50LXRhc2tzL3NwcmludC10YXNrcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLYW5iYW5Cb2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9rYW5iYW4tYm9hcmQva2FuYmFuLWJvYXJkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFByb2plY3RDb21wb25lbnQsXHJcbiAgICBCYWNrbG9nQ29tcG9uZW50LFxyXG4gICAgVGFza0NvbXBvbmVudCxcclxuICAgIFNwcmludFRhc2tzQ29tcG9uZW50LFxyXG4gICAgS2FuYmFuQm9hcmRDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFByb2plY3RDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFByb2plY3RTZXJ2aWNlLFxyXG4gICAgU3ByaW50U2VydmljZSxcclxuICAgIFRhc2tTZXJ2aWNlLFxyXG4gICAgUm9sZVNlcnZpY2UsXHJcbiAgICBUYXNrQXNzaWduZWVzU2VydmljZSxcclxuICAgIFByb2plY3RSZXNvbHZlXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RNb2R1bGUgeyB9XHJcbiJdfQ==