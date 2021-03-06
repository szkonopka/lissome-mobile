"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_service_1 = require("../../core/services/project.service");
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var ProjectResolve = /** @class */ (function () {
    function ProjectResolve(projectService) {
        this.projectService = projectService;
    }
    ProjectResolve.prototype.resolve = function (route, routstate) {
        return this.projectService.get(this.getUserID(), route.params['id']);
    };
    ProjectResolve.prototype.getUserID = function () {
        return JSON.parse(appSettings.getString('currentUser')).id;
    };
    ProjectResolve = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], ProjectResolve);
    return ProjectResolve;
}());
exports.ProjectResolve = ProjectResolve;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1yZXNvbHZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdC1yZXNvbHZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsdUVBQXFFO0FBRXJFLHNDQUEyQztBQUMzQyxrREFBb0Q7QUFHcEQ7SUFFSSx3QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUV2RCxnQ0FBTyxHQUFQLFVBQVEsS0FBNkIsRUFBRSxTQUE4QjtRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8sa0NBQVMsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFWUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBRzJCLGdDQUFjO09BRnpDLGNBQWMsQ0FXMUI7SUFBRCxxQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmVcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9jb3JlL3NlcnZpY2VzL3Byb2plY3Quc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2plY3RSZXNvbHZlIGltcGxlbWVudHMgUmVzb2x2ZTxQcm9qZWN0PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9qZWN0U2VydmljZTogUHJvamVjdFNlcnZpY2UpIHsgfVxyXG5cclxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHJvdXRzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkgOiBPYnNlcnZhYmxlPFByb2plY3Q+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0U2VydmljZS5nZXQodGhpcy5nZXRVc2VySUQoKSwgcm91dGUucGFyYW1zWydpZCddKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFVzZXJJRCgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdjdXJyZW50VXNlcicpKS5pZDtcclxuICAgIH1cclxufVxyXG4iXX0=