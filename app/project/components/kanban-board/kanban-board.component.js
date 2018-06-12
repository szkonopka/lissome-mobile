"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_task_service_1 = require("../../../shared/services/data-task.service");
var data_project_service_1 = require("../../../shared/services/data-project.service");
var KanbanBoardComponent = /** @class */ (function () {
    function KanbanBoardComponent(dataTaskService, dataProjectService) {
        this.dataTaskService = dataTaskService;
        this.dataProjectService = dataProjectService;
    }
    KanbanBoardComponent.prototype.ngOnInit = function () {
    };
    KanbanBoardComponent = __decorate([
        core_1.Component({
            selector: 'ns-kanban-board',
            moduleId: __filename,
            templateUrl: './kanban-board.component.html',
            styleUrls: ['./kanban-board.component.css']
        }),
        __metadata("design:paramtypes", [data_task_service_1.DataTaskService,
            data_project_service_1.DataProjectService])
    ], KanbanBoardComponent);
    return KanbanBoardComponent;
}());
exports.KanbanBoardComponent = KanbanBoardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FuYmFuLWJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImthbmJhbi1ib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0ZBQTZFO0FBQzdFLHNGQUFtRjtBQVNuRjtJQUVJLDhCQUNZLGVBQWdDLEVBQ2hDLGtCQUFzQztRQUR0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM5QyxDQUFDO0lBRUwsdUNBQVEsR0FBUjtJQUVBLENBQUM7SUFUUSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDO3lDQUsrQixtQ0FBZTtZQUNaLHlDQUFrQjtPQUp6QyxvQkFBb0IsQ0FVaEM7SUFBRCwyQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YVRhc2tTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLXRhc2suc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRhUHJvamVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEtcHJvamVjdC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMta2FuYmFuLWJvYXJkJyxcclxuICAgIG1vZHVsZUlkOiBfX2ZpbGVuYW1lLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2thbmJhbi1ib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9rYW5iYW4tYm9hcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgS2FuYmFuQm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVRhc2tTZXJ2aWNlOiBEYXRhVGFza1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhUHJvamVjdFNlcnZpY2U6IERhdGFQcm9qZWN0U2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn0iXX0=