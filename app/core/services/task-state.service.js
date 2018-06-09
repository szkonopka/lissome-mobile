"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var resource_service_1 = require("./resource.service");
var task_state_1 = require("../../shared/models/task-state");
var http_1 = require("@angular/http");
var app_config_1 = require("../../config/app.config");
var TaskStateService = /** @class */ (function (_super) {
    __extends(TaskStateService, _super);
    function TaskStateService(http) {
        return _super.call(this, 'taskstate', new app_config_1.Configuration(), http, new TaskStateSerializer()) || this;
    }
    TaskStateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TaskStateService);
    return TaskStateService;
}(resource_service_1.ResourceService));
exports.TaskStateService = TaskStateService;
var TaskStateSerializer = /** @class */ (function () {
    function TaskStateSerializer() {
    }
    TaskStateSerializer.prototype.fromJson = function (json) {
        var taskState = new task_state_1.TaskState();
        taskState.Id = json.id;
        taskState.Name = json.name;
        return taskState;
    };
    TaskStateSerializer.prototype.toJson = function (taskState) {
        return {
            id: taskState.Id,
            name: taskState.Name
        };
    };
    return TaskStateSerializer;
}());
exports.TaskStateSerializer = TaskStateSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHVEQUFxRDtBQUNyRCw2REFBMkQ7QUFDM0Qsc0NBQStDO0FBQy9DLHNEQUF3RDtBQUt4RDtJQUFzQyxvQ0FBMEI7SUFFOUQsMEJBQVksSUFBVTtlQUNwQixrQkFDRSxXQUFXLEVBQ1gsSUFBSSwwQkFBYSxFQUFFLEVBQ25CLElBQUksRUFDSixJQUFJLG1CQUFtQixFQUFFLENBQzFCO0lBQ0gsQ0FBQztJQVRVLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUdPLFdBQUk7T0FGWCxnQkFBZ0IsQ0FVNUI7SUFBRCx1QkFBQztDQUFBLEFBVkQsQ0FBc0Msa0NBQWUsR0FVcEQ7QUFWWSw0Q0FBZ0I7QUFZN0I7SUFBQTtJQWVBLENBQUM7SUFkQyxzQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNoQixJQUFNLFNBQVMsR0FBYyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUM3QyxTQUFTLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdkIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELG9DQUFNLEdBQU4sVUFBTyxTQUFvQjtRQUN6QixNQUFNLENBQUM7WUFDTCxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCLENBQUE7SUFDSCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9yZXNvdXJjZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy90YXNrLXN0YXRlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAuY29uZmlnJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvdGFzayc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGFza1N0YXRlU2VydmljZSBleHRlbmRzIFJlc291cmNlU2VydmljZTxUYXNrU3RhdGU+e1xyXG5cclxuICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7IFxyXG4gICAgc3VwZXIoXHJcbiAgICAgICd0YXNrc3RhdGUnLFxyXG4gICAgICBuZXcgQ29uZmlndXJhdGlvbigpLFxyXG4gICAgICBodHRwLFxyXG4gICAgICBuZXcgVGFza1N0YXRlU2VyaWFsaXplcigpXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFza1N0YXRlU2VyaWFsaXplciB7XHJcbiAgZnJvbUpzb24oanNvbjogYW55KSA6IFRhc2tTdGF0ZSB7XHJcbiAgICBjb25zdCB0YXNrU3RhdGU6IFRhc2tTdGF0ZSA9IG5ldyBUYXNrU3RhdGUoKTtcclxuICAgIHRhc2tTdGF0ZS5JZCA9IGpzb24uaWQ7XHJcbiAgICB0YXNrU3RhdGUuTmFtZSA9IGpzb24ubmFtZTtcclxuXHJcbiAgICByZXR1cm4gdGFza1N0YXRlO1xyXG4gIH1cclxuXHJcbiAgdG9Kc29uKHRhc2tTdGF0ZTogVGFza1N0YXRlKSA6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGFza1N0YXRlLklkLFxyXG4gICAgICBuYW1lOiB0YXNrU3RhdGUuTmFtZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=