"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var resource_service_1 = require("./resource.service");
var project_role_1 = require("../../shared/models/project-role");
var http_1 = require("@angular/http");
var app_config_1 = require("../../config/app.config");
var ProjectRoleService = /** @class */ (function (_super) {
    __extends(ProjectRoleService, _super);
    function ProjectRoleService(http) {
        return _super.call(this, 'projectrole', new app_config_1.Configuration(), http, new ProjectRoleSerializer()) || this;
    }
    ProjectRoleService.prototype.getAllFromProject = function (projectID) {
        var _this = this;
        return this.http.get(this.configuration.ServerUrl + "/" + this.endpoint + "/users/" + projectID)
            .map(function (response) { return _this.convertData(response.json()); });
    };
    ProjectRoleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProjectRoleService);
    return ProjectRoleService;
}(resource_service_1.ResourceService));
exports.ProjectRoleService = ProjectRoleService;
var ProjectRoleSerializer = /** @class */ (function () {
    function ProjectRoleSerializer() {
    }
    ProjectRoleSerializer.prototype.fromJson = function (json) {
        var projectRole = new project_role_1.ProjectRole();
        projectRole.Id = json.id;
        projectRole.Project = json.project;
        projectRole.Role = json.role;
        projectRole.UserID = json.userID;
        projectRole.IsActive = json.isActive;
        return projectRole;
    };
    ProjectRoleSerializer.prototype.toJson = function (projectRole) {
        return {
            id: projectRole.Id,
            project: projectRole.Project,
            role: projectRole.Role,
            userID: projectRole.UserID,
            isActive: projectRole.IsActive
        };
    };
    return ProjectRoleSerializer;
}());
exports.ProjectRoleSerializer = ProjectRoleSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1yb2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9qZWN0LXJvbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1REFBcUQ7QUFDckQsaUVBQStEO0FBQy9ELHNDQUErQztBQUMvQyxzREFBd0Q7QUFJeEQ7SUFBd0Msc0NBQTRCO0lBRWxFLDRCQUFZLElBQVU7ZUFDcEIsa0JBQ0UsYUFBYSxFQUNiLElBQUksMEJBQWEsRUFBRSxFQUNuQixJQUFJLEVBQ0osSUFBSSxxQkFBcUIsRUFBRSxDQUM1QjtJQUNGLENBQUM7SUFFTSw4Q0FBaUIsR0FBeEIsVUFBeUIsU0FBaUI7UUFBMUMsaUJBR0M7UUFGQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsZUFBVSxTQUFXLENBQUM7YUFDMUYsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBZFMsa0JBQWtCO1FBRDlCLGlCQUFVLEVBQUU7eUNBR08sV0FBSTtPQUZYLGtCQUFrQixDQWU5QjtJQUFELHlCQUFDO0NBQUEsQUFmRCxDQUF3QyxrQ0FBZSxHQWV0RDtBQWZZLGdEQUFrQjtBQWlCL0I7SUFBQTtJQXFCQSxDQUFDO0lBcEJDLHdDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2hCLElBQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN6QixXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFckMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0NBQU0sR0FBTixVQUFPLFdBQXdCO1FBQzdCLE1BQU0sQ0FBQztZQUNMLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtZQUNsQixPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU87WUFDNUIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO1lBQ3RCLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTTtZQUMxQixRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVE7U0FDL0IsQ0FBQTtJQUNILENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2plY3RSb2xlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9wcm9qZWN0LXJvbGUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2plY3RSb2xlU2VydmljZSBleHRlbmRzIFJlc291cmNlU2VydmljZTxQcm9qZWN0Um9sZT57XG5cbiAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xuICAgIHN1cGVyKFxuICAgICAgJ3Byb2plY3Ryb2xlJyxcbiAgICAgIG5ldyBDb25maWd1cmF0aW9uKCksXG4gICAgICBodHRwLFxuICAgICAgbmV3IFByb2plY3RSb2xlU2VyaWFsaXplcigpXG4gICAgKVxuICAgfVxuXG4gICBwdWJsaWMgZ2V0QWxsRnJvbVByb2plY3QocHJvamVjdElEOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxQcm9qZWN0Um9sZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uLlNlcnZlclVybH0vJHt0aGlzLmVuZHBvaW50fS91c2Vycy8ke3Byb2plY3RJRH1gKVxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5jb252ZXJ0RGF0YShyZXNwb25zZS5qc29uKCkpKTtcbiAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3RSb2xlU2VyaWFsaXplciB7XG4gIGZyb21Kc29uKGpzb246IGFueSkgOiBQcm9qZWN0Um9sZSB7XG4gICAgY29uc3QgcHJvamVjdFJvbGUgPSBuZXcgUHJvamVjdFJvbGUoKTtcbiAgICBwcm9qZWN0Um9sZS5JZCA9IGpzb24uaWQ7XG4gICAgcHJvamVjdFJvbGUuUHJvamVjdCA9IGpzb24ucHJvamVjdDtcbiAgICBwcm9qZWN0Um9sZS5Sb2xlID0ganNvbi5yb2xlO1xuICAgIHByb2plY3RSb2xlLlVzZXJJRCA9IGpzb24udXNlcklEO1xuICAgIHByb2plY3RSb2xlLklzQWN0aXZlID0ganNvbi5pc0FjdGl2ZTtcblxuICAgIHJldHVybiBwcm9qZWN0Um9sZTtcbiAgfVxuXG4gIHRvSnNvbihwcm9qZWN0Um9sZTogUHJvamVjdFJvbGUpIDogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHByb2plY3RSb2xlLklkLFxuICAgICAgcHJvamVjdDogcHJvamVjdFJvbGUuUHJvamVjdCxcbiAgICAgIHJvbGU6IHByb2plY3RSb2xlLlJvbGUsXG4gICAgICB1c2VySUQ6IHByb2plY3RSb2xlLlVzZXJJRCxcbiAgICAgIGlzQWN0aXZlOiBwcm9qZWN0Um9sZS5Jc0FjdGl2ZVxuICAgIH1cbiAgfVxufVxuIl19