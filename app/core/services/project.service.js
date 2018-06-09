"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var project_1 = require("../../shared/models/project");
var resource_service_1 = require("./resource.service");
var app_config_1 = require("../../config/app.config");
var ProjectService = /** @class */ (function (_super) {
    __extends(ProjectService, _super);
    function ProjectService(http) {
        var _this = _super.call(this, 'project', new app_config_1.Configuration(), http, new ProjectSerializer()) || this;
        _this.model = {};
        return _this;
    }
    ProjectService.prototype.getAllAssignedTo = function (userID) {
        var _this = this;
        console.log("Get all assigned to " + userID);
        return this.http.get(this.configuration.ServerUrl + "/" + this.endpoint + "/user/" + userID)
            .map(function (response) { return _this.convertData(response.json()); });
    };
    ProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProjectService);
    return ProjectService;
}(resource_service_1.ResourceService));
exports.ProjectService = ProjectService;
var ProjectSerializer = /** @class */ (function () {
    function ProjectSerializer() {
    }
    ProjectSerializer.prototype.fromJson = function (json) {
        console.log(json);
        var project = new project_1.Project();
        project.Id = json.id;
        project.Name = json.name;
        project.Owner = json.owner;
        project.Description = json.description;
        project.StartDate = json.startDate;
        project.EndDate = json.endDate;
        project.Slug = project.prepareSlug(json.name);
        project.NumberOfSprints = json.numberOfSprints;
        project.ActiveSprint = json.activeSprint;
        return project;
    };
    ProjectSerializer.prototype.toJson = function (project) {
        return {
            id: project.Id,
            name: project.Name,
            owner: project.Owner,
            description: project.Description,
            startDate: project.StartDate,
            endDate: project.EndDate,
            numberOfSprints: project.NumberOfSprints,
            activeSprint: project.ActiveSprint
        };
    };
    return ProjectSerializer;
}());
exports.ProjectSerializer = ProjectSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUErQztBQUMvQyx1REFBc0Q7QUFFdEQsdURBQXFEO0FBQ3JELHNEQUF3RDtBQUl4RDtJQUFvQyxrQ0FBd0I7SUFJMUQsd0JBQVksSUFBVTtRQUF0QixZQUNFLGtCQUNFLFNBQVMsRUFDVCxJQUFJLDBCQUFhLEVBQUUsRUFDbkIsSUFBSSxFQUNKLElBQUksaUJBQWlCLEVBQUUsQ0FDeEIsU0FDRjtRQVZELFdBQUssR0FBUSxFQUFFLENBQUE7O0lBVWYsQ0FBQztJQUVNLHlDQUFnQixHQUF2QixVQUF3QixNQUFjO1FBQXRDLGlCQUlDO1FBSEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsY0FBUyxNQUFRLENBQUM7YUFDdEYsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBakJVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLTyxXQUFJO09BSlgsY0FBYyxDQWtCMUI7SUFBRCxxQkFBQztDQUFBLEFBbEJELENBQW9DLGtDQUFlLEdBa0JsRDtBQWxCWSx3Q0FBYztBQW9CM0I7SUFBQTtJQTRCQSxDQUFDO0lBM0JDLG9DQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDL0IsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDL0MsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUNyQixNQUFNLENBQUM7WUFDTCxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDZCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDNUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1lBQ3hCLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZTtZQUN4QyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVk7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9wcm9qZWN0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJlc291cmNlU2VydmljZSB9IGZyb20gJy4vcmVzb3VyY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLmNvbmZpZyc7XHJcbmltcG9ydCB7IFNwcmludCB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvc3ByaW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNlIGV4dGVuZHMgUmVzb3VyY2VTZXJ2aWNlPFByb2plY3Q+IHtcclxuICBtb2RlbDogYW55ID0ge31cclxuXHJcbiAgcHJpdmF0ZSBhcGlVcmwgXHJcbiAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgICdwcm9qZWN0JyxcclxuICAgICAgbmV3IENvbmZpZ3VyYXRpb24oKSxcclxuICAgICAgaHR0cCxcclxuICAgICAgbmV3IFByb2plY3RTZXJpYWxpemVyKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QWxsQXNzaWduZWRUbyh1c2VySUQ6IG51bWJlcikgOiBPYnNlcnZhYmxlPFByb2plY3RbXT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJHZXQgYWxsIGFzc2lnbmVkIHRvIFwiICsgdXNlcklEKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9LyR7dGhpcy5lbmRwb2ludH0vdXNlci8ke3VzZXJJRH1gKVxyXG4gICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB0aGlzLmNvbnZlcnREYXRhKHJlc3BvbnNlLmpzb24oKSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJpYWxpemVyIHtcclxuICBmcm9tSnNvbihqc29uOiBhbnkpIDogUHJvamVjdCB7XHJcbiAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgIGNvbnN0IHByb2plY3Q6IFByb2plY3QgPSBuZXcgUHJvamVjdCgpO1xyXG4gICAgcHJvamVjdC5JZCA9IGpzb24uaWQ7XHJcbiAgICBwcm9qZWN0Lk5hbWUgPSBqc29uLm5hbWU7XHJcbiAgICBwcm9qZWN0Lk93bmVyID0ganNvbi5vd25lcjtcclxuICAgIHByb2plY3QuRGVzY3JpcHRpb24gPSBqc29uLmRlc2NyaXB0aW9uO1xyXG4gICAgcHJvamVjdC5TdGFydERhdGUgPSBqc29uLnN0YXJ0RGF0ZTtcclxuICAgIHByb2plY3QuRW5kRGF0ZSA9IGpzb24uZW5kRGF0ZTtcclxuICAgIHByb2plY3QuU2x1ZyA9IHByb2plY3QucHJlcGFyZVNsdWcoanNvbi5uYW1lKTtcclxuICAgIHByb2plY3QuTnVtYmVyT2ZTcHJpbnRzID0ganNvbi5udW1iZXJPZlNwcmludHM7XHJcbiAgICBwcm9qZWN0LkFjdGl2ZVNwcmludCA9IGpzb24uYWN0aXZlU3ByaW50O1xyXG4gICAgcmV0dXJuIHByb2plY3Q7XHJcbiAgfVxyXG5cclxuICB0b0pzb24ocHJvamVjdDogUHJvamVjdCkgOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2plY3QuSWQsXHJcbiAgICAgIG5hbWU6IHByb2plY3QuTmFtZSxcclxuICAgICAgb3duZXI6IHByb2plY3QuT3duZXIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9qZWN0LkRlc2NyaXB0aW9uLFxyXG4gICAgICBzdGFydERhdGU6IHByb2plY3QuU3RhcnREYXRlLFxyXG4gICAgICBlbmREYXRlOiBwcm9qZWN0LkVuZERhdGUsXHJcbiAgICAgIG51bWJlck9mU3ByaW50czogcHJvamVjdC5OdW1iZXJPZlNwcmludHMsXHJcbiAgICAgIGFjdGl2ZVNwcmludDogcHJvamVjdC5BY3RpdmVTcHJpbnRcclxuICAgIH07XHJcbiAgfVxyXG59Il19