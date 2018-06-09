"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_1 = require("../models/task");
var task_service_1 = require("../../core/services/task.service");
var task_state_service_1 = require("../../core/services/task-state.service");
var DataTaskService = /** @class */ (function () {
    function DataTaskService(taskService, taskStateService) {
        this.taskService = taskService;
        this.taskStateService = taskStateService;
        this.tasks = [];
        this.taskStates = [];
        this.currentTaskToEdit = new task_1.Task();
    }
    DataTaskService.prototype.setCurrentTaskToEdit = function (task) {
        this.currentTaskToEdit = task;
    };
    DataTaskService.prototype.loadTasks = function () {
        var _this = this;
        this.subscription = this.taskService.getAll(this.getUserID()).subscribe((function (tasks) { _this.tasks = tasks; }));
    };
    DataTaskService.prototype.loadTaskStates = function () {
        var _this = this;
        this.taskStateService.getAll(null).subscribe(function (taskStates) { _this.taskStates = taskStates; });
    };
    DataTaskService.prototype.deleteTask = function (taskID) {
        return this.taskService.delete(taskID).toPromise();
    };
    DataTaskService.prototype.destroy = function () {
        this.subscription.unsubscribe();
    };
    DataTaskService.prototype.showTaskEditor = function (task) {
        this.setCurrentTaskToEdit(task);
        var sprintAdder = document.querySelectorAll('.task-editor')[0];
        var sprintAdderWindow = document.querySelectorAll('.task-editor__window')[0];
        sprintAdder.classList.add('task-editor_active');
        sprintAdderWindow.classList.add('task-editor__window_active');
    };
    DataTaskService.prototype.getUserID = function () {
        var id = JSON.parse(localStorage.getItem('currentUser')).id;
        return id;
    };
    DataTaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [task_service_1.TaskService,
            task_state_service_1.TaskStateService])
    ], DataTaskService);
    return DataTaskService;
}());
exports.DataTaskService = DataTaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLXRhc2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1Q0FBc0M7QUFDdEMsaUVBQStEO0FBRy9ELDZFQUEwRTtBQUcxRTtJQU1FLHlCQUNVLFdBQXdCLEVBQ3hCLGdCQUFrQztRQURsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUHJDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFDN0Isc0JBQWlCLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUt4QyxDQUFDO0lBRUUsOENBQW9CLEdBQTNCLFVBQTRCLElBQVU7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFFTSx3Q0FBYyxHQUFyQjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxVQUFVLElBQU0sS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRU0sb0NBQVUsR0FBakIsVUFBa0IsTUFBYztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVNLGlDQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSx3Q0FBYyxHQUFyQixVQUFzQixJQUFVO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2hELGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sbUNBQVMsR0FBakI7UUFDRSxJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEUsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUM7SUExQ1UsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQVFZLDBCQUFXO1lBQ04scUNBQWdCO09BUmpDLGVBQWUsQ0EyQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL21vZGVscy90YXNrJztcclxuaW1wb3J0IHsgVGFza1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3Rhc2suc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2stc3RhdGUnO1xyXG5pbXBvcnQgeyBUYXNrU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy90YXNrLXN0YXRlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVRhc2tTZXJ2aWNlIHtcclxuICBwdWJsaWMgdGFza3M6IFRhc2tbXSA9IFtdO1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHVibGljIHRhc2tTdGF0ZXM6IFRhc2tTdGF0ZVtdID0gW107XHJcbiAgcHVibGljIGN1cnJlbnRUYXNrVG9FZGl0OiBUYXNrID0gbmV3IFRhc2soKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRhc2tTZXJ2aWNlOiBUYXNrU2VydmljZSxcclxuICAgIHByaXZhdGUgdGFza1N0YXRlU2VydmljZTogVGFza1N0YXRlU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICBwdWJsaWMgc2V0Q3VycmVudFRhc2tUb0VkaXQodGFzazogVGFzaykge1xyXG4gICAgdGhpcy5jdXJyZW50VGFza1RvRWRpdCA9IHRhc2s7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZFRhc2tzKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnRhc2tTZXJ2aWNlLmdldEFsbCh0aGlzLmdldFVzZXJJRCgpKS5zdWJzY3JpYmUoKHRhc2tzID0+IHsgdGhpcy50YXNrcyA9IHRhc2tzIH0gKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZFRhc2tTdGF0ZXMoKSB7XHJcbiAgICB0aGlzLnRhc2tTdGF0ZVNlcnZpY2UuZ2V0QWxsKG51bGwpLnN1YnNjcmliZSh0YXNrU3RhdGVzID0+IHsgdGhpcy50YXNrU3RhdGVzID0gdGFza1N0YXRlc30pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZVRhc2sodGFza0lEOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnRhc2tTZXJ2aWNlLmRlbGV0ZSh0YXNrSUQpLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dUYXNrRWRpdG9yKHRhc2s6IFRhc2spIHtcclxuICAgIHRoaXMuc2V0Q3VycmVudFRhc2tUb0VkaXQodGFzayk7XHJcbiAgICBjb25zdCBzcHJpbnRBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWVkaXRvcicpWzBdO1xyXG4gICAgY29uc3Qgc3ByaW50QWRkZXJXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1lZGl0b3JfX3dpbmRvdycpWzBdO1xyXG4gICAgc3ByaW50QWRkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0b3JfYWN0aXZlJyk7XHJcbiAgICBzcHJpbnRBZGRlcldpbmRvdy5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXRvcl9fd2luZG93X2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVc2VySUQoKTogbnVtYmVyIHtcclxuICAgIGxldCBpZDogbnVtYmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkuaWQ7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==