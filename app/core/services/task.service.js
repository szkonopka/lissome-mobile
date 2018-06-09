"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var resource_service_1 = require("./resource.service");
var task_1 = require("../../shared/models/task");
var app_config_1 = require("../../config/app.config");
var http_1 = require("@angular/http");
var TaskService = /** @class */ (function (_super) {
    __extends(TaskService, _super);
    function TaskService(http) {
        return _super.call(this, 'task', new app_config_1.Configuration(), http, new TaskSerializer()) || this;
    }
    TaskService.prototype.getAllFromSprint = function (sprintID) {
        var _this = this;
        return this.http.get(this.configuration.ServerUrl + "/sprint/" + sprintID + "/tasks")
            .map(function (response) { return _this.convertData(response.json()); });
    };
    TaskService.prototype.updateState = function (taskID, stateID) {
        var _this = this;
        return this.http.put(this.configuration.ServerUrl + "/task/update/" + taskID + "/state/" + stateID, null)
            .map(function (response) { return _this.serializer.fromJson(response); });
    };
    TaskService.prototype.updateSprint = function (taskID, sprintID) {
        var _this = this;
        return this.http.put(this.configuration.ServerUrl + "/task/update/" + taskID + "/sprint/" + sprintID, null)
            .map(function (response) { return _this.serializer.fromJson(response); });
    };
    TaskService.prototype.getSprintless = function (projectID) {
        var _this = this;
        return this.http.get(this.configuration.ServerUrl + "/task/project/" + projectID + "/none")
            .map(function (response) { return _this.convertData(response.json()); });
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TaskService);
    return TaskService;
}(resource_service_1.ResourceService));
exports.TaskService = TaskService;
var TaskSerializer = /** @class */ (function () {
    function TaskSerializer() {
    }
    TaskSerializer.prototype.fromJson = function (json) {
        var task = new task_1.Task();
        task.Id = json.id;
        task.Name = json.name;
        task.Deadline = json.deadline;
        task.ProductivityPoints = json.productivityPoints;
        task.Description = json.description;
        task.State = json.state;
        task.CreatedBy = json.createdBy;
        task.Sprint = json.sprint;
        task.Project = json.project;
        task.CreatedOn = json.createdOn;
        return task;
    };
    TaskSerializer.prototype.toJson = function (task) {
        return {
            id: task.Id,
            name: task.Name,
            deadline: task.Deadline,
            productivityPoints: task.ProductivityPoints,
            description: task.Description,
            createdBy: task.CreatedBy,
            state: task.State,
            sprint: task.Sprint,
            project: task.Project,
            createdOn: task.CreatedOn
        };
    };
    return TaskSerializer;
}());
exports.TaskSerializer = TaskSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHVEQUFxRDtBQUNyRCxpREFBZ0Q7QUFDaEQsc0RBQXdEO0FBQ3hELHNDQUErQztBQUsvQztJQUFpQywrQkFBcUI7SUFFcEQscUJBQVksSUFBVTtlQUNwQixrQkFDRSxNQUFNLEVBQ04sSUFBSSwwQkFBYSxFQUFFLEVBQ25CLElBQUksRUFDSixJQUFJLGNBQWMsRUFBRSxDQUNyQjtJQUNGLENBQUM7SUFFTSxzQ0FBZ0IsR0FBdkIsVUFBd0IsUUFBZ0I7UUFBeEMsaUJBR0M7UUFGQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLGdCQUFXLFFBQVEsV0FBUSxDQUFDO2FBQy9FLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQW1CLE1BQWMsRUFBRSxPQUFlO1FBQWxELGlCQUdDO1FBRkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxxQkFBZ0IsTUFBTSxlQUFVLE9BQVMsRUFBRSxJQUFJLENBQUM7YUFDbkcsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBUyxFQUExQyxDQUEwQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLE1BQWMsRUFBRSxRQUFnQjtRQUFwRCxpQkFHQztRQUZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMscUJBQWdCLE1BQU0sZ0JBQVcsUUFBVSxFQUFFLElBQUksQ0FBQzthQUNyRyxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFTLEVBQTFDLENBQTBDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sbUNBQWEsR0FBcEIsVUFBcUIsU0FBaUI7UUFBdEMsaUJBR0E7UUFGQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLHNCQUFpQixTQUFTLFVBQU8sQ0FBQzthQUNyRixHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUE3QlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdPLFdBQUk7T0FGWCxXQUFXLENBOEJ2QjtJQUFELGtCQUFDO0NBQUEsQUE5QkQsQ0FBaUMsa0NBQWUsR0E4Qi9DO0FBOUJZLGtDQUFXO0FBZ0N4QjtJQUFBO0lBOEJBLENBQUM7SUE3QkMsaUNBQVEsR0FBUixVQUFTLElBQVM7UUFDaEIsSUFBTSxJQUFJLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLElBQVU7UUFDZixNQUFNLENBQUM7WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9yZXNvdXJjZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvdGFzayc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLmNvbmZpZyc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhc2tTZXJ2aWNlIGV4dGVuZHMgUmVzb3VyY2VTZXJ2aWNlPFRhc2s+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgICd0YXNrJyxcclxuICAgICAgbmV3IENvbmZpZ3VyYXRpb24oKSxcclxuICAgICAgaHR0cCxcclxuICAgICAgbmV3IFRhc2tTZXJpYWxpemVyKClcclxuICAgICk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXRBbGxGcm9tU3ByaW50KHNwcmludElEOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxUYXNrW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9L3NwcmludC8ke3NwcmludElEfS90YXNrc2ApXHJcbiAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHRoaXMuY29udmVydERhdGEocmVzcG9uc2UuanNvbigpKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB1cGRhdGVTdGF0ZSh0YXNrSUQ6IG51bWJlciwgc3RhdGVJRDogbnVtYmVyKSB7XHJcbiAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy5jb25maWd1cmF0aW9uLlNlcnZlclVybH0vdGFzay91cGRhdGUvJHt0YXNrSUR9L3N0YXRlLyR7c3RhdGVJRH1gLCBudWxsKVxyXG4gICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5zZXJpYWxpemVyLmZyb21Kc29uKHJlc3BvbnNlKSBhcyBUYXNrKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwZGF0ZVNwcmludCh0YXNrSUQ6IG51bWJlciwgc3ByaW50SUQ6IG51bWJlcikge1xyXG4gICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9L3Rhc2svdXBkYXRlLyR7dGFza0lEfS9zcHJpbnQvJHtzcHJpbnRJRH1gLCBudWxsKVxyXG4gICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5zZXJpYWxpemVyLmZyb21Kc29uKHJlc3BvbnNlKSBhcyBUYXNrKTtcclxuICAgfVxyXG4gICBcclxuICAgcHVibGljIGdldFNwcmludGxlc3MocHJvamVjdElEOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxUYXNrW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9L3Rhc2svcHJvamVjdC8ke3Byb2plY3RJRH0vbm9uZWApXHJcbiAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHRoaXMuY29udmVydERhdGEocmVzcG9uc2UuanNvbigpKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFza1NlcmlhbGl6ZXIge1xyXG4gIGZyb21Kc29uKGpzb246IGFueSkgOiBUYXNrIHtcclxuICAgIGNvbnN0IHRhc2s6IFRhc2sgPSBuZXcgVGFzaygpO1xyXG4gICAgdGFzay5JZCA9IGpzb24uaWQ7XHJcbiAgICB0YXNrLk5hbWUgPSBqc29uLm5hbWU7XHJcbiAgICB0YXNrLkRlYWRsaW5lID0ganNvbi5kZWFkbGluZTtcclxuICAgIHRhc2suUHJvZHVjdGl2aXR5UG9pbnRzID0ganNvbi5wcm9kdWN0aXZpdHlQb2ludHM7XHJcbiAgICB0YXNrLkRlc2NyaXB0aW9uID0ganNvbi5kZXNjcmlwdGlvbjtcclxuICAgIHRhc2suU3RhdGUgPSBqc29uLnN0YXRlO1xyXG4gICAgdGFzay5DcmVhdGVkQnkgPSBqc29uLmNyZWF0ZWRCeTtcclxuICAgIHRhc2suU3ByaW50ID0ganNvbi5zcHJpbnQ7XHJcbiAgICB0YXNrLlByb2plY3QgPSBqc29uLnByb2plY3Q7XHJcbiAgICB0YXNrLkNyZWF0ZWRPbiA9IGpzb24uY3JlYXRlZE9uO1xyXG4gICAgcmV0dXJuIHRhc2s7XHJcbiAgfVxyXG5cclxuICB0b0pzb24odGFzazogVGFzaykgOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRhc2suSWQsXHJcbiAgICAgIG5hbWU6IHRhc2suTmFtZSxcclxuICAgICAgZGVhZGxpbmU6IHRhc2suRGVhZGxpbmUsXHJcbiAgICAgIHByb2R1Y3Rpdml0eVBvaW50czogdGFzay5Qcm9kdWN0aXZpdHlQb2ludHMsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0YXNrLkRlc2NyaXB0aW9uLFxyXG4gICAgICBjcmVhdGVkQnk6IHRhc2suQ3JlYXRlZEJ5LFxyXG4gICAgICBzdGF0ZTogdGFzay5TdGF0ZSxcclxuICAgICAgc3ByaW50OiB0YXNrLlNwcmludCxcclxuICAgICAgcHJvamVjdDogdGFzay5Qcm9qZWN0LFxyXG4gICAgICBjcmVhdGVkT246IHRhc2suQ3JlYXRlZE9uXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=