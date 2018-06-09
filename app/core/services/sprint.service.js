"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var resource_service_1 = require("./resource.service");
var sprint_1 = require("../../shared/models/sprint");
var app_config_1 = require("../../config/app.config");
var http_1 = require("@angular/http");
var SprintService = /** @class */ (function (_super) {
    __extends(SprintService, _super);
    function SprintService(http) {
        return _super.call(this, 'sprint', new app_config_1.Configuration(), http, new SprintSerializer()) || this;
    }
    SprintService.prototype.getCurrentSprints = function (projectID) {
        var _this = this;
        return this.http.get(this.configuration.ServerUrl + "/project/" + projectID + "/sprints/current")
            .map(function (response) { return _this.convertData(response.json()); });
    };
    SprintService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SprintService);
    return SprintService;
}(resource_service_1.ResourceService));
exports.SprintService = SprintService;
var SprintSerializer = /** @class */ (function () {
    function SprintSerializer() {
    }
    SprintSerializer.prototype.fromJson = function (json) {
        var sprint = new sprint_1.Sprint();
        sprint.Id = json.id;
        sprint.Name = json.name;
        sprint.StartDate = json.startDate;
        sprint.EndDate = json.endDate;
        sprint.Description = json.description;
        sprint.Project = json.project;
        return sprint;
    };
    SprintSerializer.prototype.toJson = function (sprint) {
        return {
            id: sprint.Id,
            name: sprint.Name,
            startDate: sprint.StartDate,
            endDate: sprint.EndDate,
            description: sprint.Description,
            project: sprint.Project
        };
    };
    return SprintSerializer;
}());
exports.SprintSerializer = SprintSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcHJpbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1REFBcUQ7QUFDckQscURBQW9EO0FBRXBELHNEQUF3RDtBQUN4RCxzQ0FBK0M7QUFJL0M7SUFBbUMsaUNBQXVCO0lBRXhELHVCQUFZLElBQVU7ZUFDcEIsa0JBQ0UsUUFBUSxFQUNSLElBQUksMEJBQWEsRUFBRSxFQUNuQixJQUFJLEVBQ0osSUFBSSxnQkFBZ0IsRUFBRSxDQUN2QjtJQUNILENBQUM7SUFFTSx5Q0FBaUIsR0FBeEIsVUFBeUIsU0FBaUI7UUFBMUMsaUJBR0M7UUFGQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLGlCQUFZLFNBQVMscUJBQWtCLENBQUM7YUFDM0YsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBZFUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUdPLFdBQUk7T0FGWCxhQUFhLENBZXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWZELENBQW1DLGtDQUFlLEdBZWpEO0FBZlksc0NBQWE7QUFpQjFCO0lBQUE7SUFzQkEsQ0FBQztJQXJCQyxtQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNoQixJQUFNLE1BQU0sR0FBVyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM5QixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxNQUFjO1FBQ25CLE1BQU0sQ0FBQztZQUNMLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNiLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztZQUMvQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDeEIsQ0FBQTtJQUNILENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuL3Jlc291cmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTcHJpbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL3NwcmludCc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL3Rhc2snO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwcmludFNlcnZpY2UgZXh0ZW5kcyBSZXNvdXJjZVNlcnZpY2U8U3ByaW50PiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHsgXHJcbiAgICBzdXBlcihcclxuICAgICAgJ3NwcmludCcsXHJcbiAgICAgIG5ldyBDb25maWd1cmF0aW9uKCksXHJcbiAgICAgIGh0dHAsXHJcbiAgICAgIG5ldyBTcHJpbnRTZXJpYWxpemVyKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q3VycmVudFNwcmludHMocHJvamVjdElEOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxTcHJpbnRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uLlNlcnZlclVybH0vcHJvamVjdC8ke3Byb2plY3RJRH0vc3ByaW50cy9jdXJyZW50YClcclxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5jb252ZXJ0RGF0YShyZXNwb25zZS5qc29uKCkpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpbnRTZXJpYWxpemVyIHtcclxuICBmcm9tSnNvbihqc29uOiBhbnkpOiBTcHJpbnQge1xyXG4gICAgY29uc3Qgc3ByaW50OiBTcHJpbnQgPSBuZXcgU3ByaW50KCk7XHJcbiAgICBzcHJpbnQuSWQgPSBqc29uLmlkO1xyXG4gICAgc3ByaW50Lk5hbWUgPSBqc29uLm5hbWU7XHJcbiAgICBzcHJpbnQuU3RhcnREYXRlID0ganNvbi5zdGFydERhdGU7XHJcbiAgICBzcHJpbnQuRW5kRGF0ZSA9IGpzb24uZW5kRGF0ZTtcclxuICAgIHNwcmludC5EZXNjcmlwdGlvbiA9IGpzb24uZGVzY3JpcHRpb247XHJcbiAgICBzcHJpbnQuUHJvamVjdCA9IGpzb24ucHJvamVjdDtcclxuICAgIHJldHVybiBzcHJpbnQ7XHJcbiAgfVxyXG5cclxuICB0b0pzb24oc3ByaW50OiBTcHJpbnQpIDogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBzcHJpbnQuSWQsXHJcbiAgICAgIG5hbWU6IHNwcmludC5OYW1lLFxyXG4gICAgICBzdGFydERhdGU6IHNwcmludC5TdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHNwcmludC5FbmREYXRlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogc3ByaW50LkRlc2NyaXB0aW9uLFxyXG4gICAgICBwcm9qZWN0OiBzcHJpbnQuUHJvamVjdFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=