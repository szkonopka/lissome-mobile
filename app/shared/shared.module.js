"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var task_assignee_pipe_1 = require("./pipes/task-assignee.pipe");
var task_state_pipe_1 = require("./pipes/task-state.pipe");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                task_assignee_pipe_1.TaskAssigneePipe,
                task_state_pipe_1.TaskStatePipe
            ],
            exports: [
                task_assignee_pipe_1.TaskAssigneePipe,
                task_state_pipe_1.TaskStatePipe
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBRS9DLHdDQUE2QztBQUM3QyxpRUFBOEQ7QUFDOUQsMkRBQXdEO0FBbUJ4RDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQWpCeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLG1CQUFXO2FBQ1o7WUFDRCxZQUFZLEVBQUU7Z0JBQ1oscUNBQWdCO2dCQUNoQiwrQkFBYTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFDQUFnQjtnQkFDaEIsK0JBQWE7YUFDZDtZQUNELFNBQVMsRUFBRSxFQUVWO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUYXNrU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy90YXNrLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVGFza0Fzc2lnbmVlUGlwZSB9IGZyb20gJy4vcGlwZXMvdGFzay1hc3NpZ25lZS5waXBlJztcclxuaW1wb3J0IHsgVGFza1N0YXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvdGFzay1zdGF0ZS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVGFza0Fzc2lnbmVlUGlwZSxcclxuICAgIFRhc2tTdGF0ZVBpcGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRhc2tBc3NpZ25lZVBpcGUsXHJcbiAgICBUYXNrU3RhdGVQaXBlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XHJcbiJdfQ==