"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var resource_service_1 = require("./resource.service");
var task_assignee_1 = require("../../shared/models/task-assignee");
var http_1 = require("@angular/http");
var app_config_1 = require("../../config/app.config");
var TaskAssigneesService = /** @class */ (function (_super) {
    __extends(TaskAssigneesService, _super);
    function TaskAssigneesService(http) {
        return _super.call(this, "taskassignee", new app_config_1.Configuration(), http, new TaskAssigneeSerializer()) || this;
    }
    TaskAssigneesService.prototype.getAssigneesForTask = function (taskID) {
        var _this = this;
        return this.http.get(this.configuration.ServerUrl + "/" + this.endpoint + "/task/" + taskID)
            .map(function (response) { return _this.convertData(response.json()); });
    };
    TaskAssigneesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TaskAssigneesService);
    return TaskAssigneesService;
}(resource_service_1.ResourceService));
exports.TaskAssigneesService = TaskAssigneesService;
var TaskAssigneeSerializer = /** @class */ (function () {
    function TaskAssigneeSerializer() {
    }
    TaskAssigneeSerializer.prototype.fromJson = function (json) {
        var taskAssignee = new task_assignee_1.TaskAssignee();
        taskAssignee.Id = json.id;
        taskAssignee.Task = json.task;
        taskAssignee.Assignee = json.assignee;
        return taskAssignee;
    };
    TaskAssigneeSerializer.prototype.toJson = function (taskAssignee) {
        return {
            id: taskAssignee.Id,
            task: taskAssignee.Task,
            assignee: taskAssignee.Assignee
        };
    };
    return TaskAssigneeSerializer;
}());
exports.TaskAssigneeSerializer = TaskAssigneeSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1hc3NpZ25lZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2stYXNzaWduZWVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsdURBQXFEO0FBQ3JELG1FQUFpRTtBQUNqRSxzQ0FBK0M7QUFDL0Msc0RBQXdEO0FBS3hEO0lBQTBDLHdDQUE2QjtJQUVyRSw4QkFBWSxJQUFVO2VBQ3BCLGtCQUNFLGNBQWMsRUFDZCxJQUFJLDBCQUFhLEVBQUUsRUFDbkIsSUFBSSxFQUNKLElBQUksc0JBQXNCLEVBQUUsQ0FDN0I7SUFDSCxDQUFDO0lBRU0sa0RBQW1CLEdBQTFCLFVBQTJCLE1BQWM7UUFBekMsaUJBR0M7UUFGQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsY0FBUyxNQUFRLENBQUM7YUFDdEYsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBZFUsb0JBQW9CO1FBRGhDLGlCQUFVLEVBQUU7eUNBR08sV0FBSTtPQUZYLG9CQUFvQixDQWVoQztJQUFELDJCQUFDO0NBQUEsQUFmRCxDQUEwQyxrQ0FBZSxHQWV4RDtBQWZZLG9EQUFvQjtBQWlCakM7SUFBQTtJQWtCQSxDQUFDO0lBakJDLHlDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2hCLElBQU0sWUFBWSxHQUFHLElBQUksNEJBQVksRUFBRSxDQUFDO1FBRXhDLFlBQVksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMxQixZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELHVDQUFNLEdBQU4sVUFBTyxZQUEwQjtRQUMvQixNQUFNLENBQUM7WUFDTCxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQ3ZCLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtTQUNoQyxDQUFBO0lBQ0gsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuL3Jlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFza0Fzc2lnbmVlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy90YXNrLWFzc2lnbmVlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy91c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhc2tBc3NpZ25lZXNTZXJ2aWNlIGV4dGVuZHMgUmVzb3VyY2VTZXJ2aWNlPFRhc2tBc3NpZ25lZT4ge1xuXG4gIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHsgXG4gICAgc3VwZXIoXG4gICAgICBcInRhc2thc3NpZ25lZVwiLFxuICAgICAgbmV3IENvbmZpZ3VyYXRpb24oKSxcbiAgICAgIGh0dHAsXG4gICAgICBuZXcgVGFza0Fzc2lnbmVlU2VyaWFsaXplcigpXG4gICAgKVxuICB9XG5cbiAgcHVibGljIGdldEFzc2lnbmVlc0ZvclRhc2sodGFza0lEOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxUYXNrQXNzaWduZWVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9LyR7dGhpcy5lbmRwb2ludH0vdGFzay8ke3Rhc2tJRH1gKVxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5jb252ZXJ0RGF0YShyZXNwb25zZS5qc29uKCkpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFza0Fzc2lnbmVlU2VyaWFsaXplciB7XG4gIGZyb21Kc29uKGpzb246IGFueSkgOiBUYXNrQXNzaWduZWUge1xuICAgIGNvbnN0IHRhc2tBc3NpZ25lZSA9IG5ldyBUYXNrQXNzaWduZWUoKTtcblxuICAgIHRhc2tBc3NpZ25lZS5JZCA9IGpzb24uaWQ7XG4gICAgdGFza0Fzc2lnbmVlLlRhc2sgPSBqc29uLnRhc2s7XG4gICAgdGFza0Fzc2lnbmVlLkFzc2lnbmVlID0ganNvbi5hc3NpZ25lZTtcblxuICAgIHJldHVybiB0YXNrQXNzaWduZWU7XG4gIH1cblxuICB0b0pzb24odGFza0Fzc2lnbmVlOiBUYXNrQXNzaWduZWUpIDogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRhc2tBc3NpZ25lZS5JZCxcbiAgICAgIHRhc2s6IHRhc2tBc3NpZ25lZS5UYXNrLFxuICAgICAgYXNzaWduZWU6IHRhc2tBc3NpZ25lZS5Bc3NpZ25lZVxuICAgIH1cbiAgfVxufSJdfQ==