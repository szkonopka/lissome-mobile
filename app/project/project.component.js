"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_project_service_1 = require("../shared/services/data-project.service");
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route, router, dataProjectService, zone) {
        this.route = route;
        this.router = router;
        this.dataProjectService = dataProjectService;
        this.zone = zone;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.map(function (data) { _this.dataProjectService.selectedProject = data.project; })
            .subscribe(function (res) {
            _this.dataProjectService.reloadProjectData();
        });
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'ns-project',
            templateUrl: './project.component.html',
            moduleId: __filename,
            styleUrls: ['./project.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            data_project_service_1.DataProjectService,
            core_1.NgZone])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9qZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUVqRiwwQ0FBeUQ7QUFDekQsZ0ZBQTZFO0FBVzdFO0lBSUksMEJBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLGtCQUFzQyxFQUN0QyxJQUFZO1FBSFosVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNwQixDQUFDO0lBRUwsbUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RixTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEJRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQU1xQix1QkFBYztZQUNiLGVBQU07WUFDTSx5Q0FBa0I7WUFDaEMsYUFBTTtPQVJmLGdCQUFnQixDQWlCNUI7SUFBRCx1QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERhdGFQcm9qZWN0U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvZGF0YS1wcm9qZWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidWkvYnV0dG9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtcHJvamVjdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvamVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBtb2R1bGVJZDogX19maWxlbmFtZSxcclxuICAgIHN0eWxlVXJsczogWycuL3Byb2plY3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByb2plY3Q6IFByb2plY3Q7XHJcbiAgICBhY3RpdmVTdWJwYWdlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGRhdGFQcm9qZWN0U2VydmljZTogRGF0YVByb2plY3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGUuZGF0YS5tYXAoZGF0YSA9PiB7IHRoaXMuZGF0YVByb2plY3RTZXJ2aWNlLnNlbGVjdGVkUHJvamVjdCA9IGRhdGEucHJvamVjdDsgfSlcclxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVByb2plY3RTZXJ2aWNlLnJlbG9hZFByb2plY3REYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=