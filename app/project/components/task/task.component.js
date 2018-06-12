"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_1 = require("../../../shared/models/task");
var data_project_service_1 = require("../../../shared/services/data-project.service");
var TaskComponent = /** @class */ (function () {
    function TaskComponent(dataProjectService) {
        this.dataProjectService = dataProjectService;
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.removeFromSprint = function (task) {
        this.dataProjectService.updateTaskSprint(task.Id, null);
    };
    TaskComponent.prototype.assignToSprint = function (task) {
        this.dataProjectService.updateTaskSprint(task.Id, this.dataProjectService.selectedProject.ActiveSprint);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", task_1.Task)
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = __decorate([
        core_1.Component({
            selector: "ns-task",
            moduleId: __filename,
            templateUrl: "task.component.html",
            styleUrls: ['./task.component.css']
        }),
        __metadata("design:paramtypes", [data_project_service_1.DataProjectService])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxvREFBbUQ7QUFDbkQsc0ZBQW1GO0FBU25GO0lBR0ksdUJBQ1ksa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDOUMsQ0FBQztJQUVMLGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLElBQVU7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxJQUFVO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQWhCUTtRQUFSLFlBQUssRUFBRTtrQ0FBTyxXQUFJOytDQUFDO0lBRFgsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQU1rQyx5Q0FBa0I7T0FKekMsYUFBYSxDQW1CeEI7SUFBRCxvQkFBQztDQUFBLEFBbkJGLElBbUJFO0FBbkJXLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3Rhc2tcIjtcclxuaW1wb3J0IHsgRGF0YVByb2plY3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLXByb2plY3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy10YXNrXCIsXHJcbiAgICBtb2R1bGVJZDogX19maWxlbmFtZSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInRhc2suY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL3Rhc2suY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSB0YXNrOiBUYXNrO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVByb2plY3RTZXJ2aWNlOiBEYXRhUHJvamVjdFNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21TcHJpbnQodGFzazogVGFzaykge1xyXG4gICAgICAgIHRoaXMuZGF0YVByb2plY3RTZXJ2aWNlLnVwZGF0ZVRhc2tTcHJpbnQodGFzay5JZCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXNzaWduVG9TcHJpbnQodGFzazogVGFzaykge1xyXG4gICAgICAgIHRoaXMuZGF0YVByb2plY3RTZXJ2aWNlLnVwZGF0ZVRhc2tTcHJpbnQodGFzay5JZCwgdGhpcy5kYXRhUHJvamVjdFNlcnZpY2Uuc2VsZWN0ZWRQcm9qZWN0LkFjdGl2ZVNwcmludCk7XHJcbiAgICB9XHJcbiAgICBcclxuIH1cclxuIl19