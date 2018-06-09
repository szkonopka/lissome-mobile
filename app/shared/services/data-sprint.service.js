"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_service_1 = require("../../core/services/project.service");
var sprint_service_1 = require("../../core/services/sprint.service");
var DataSprintService = /** @class */ (function () {
    function DataSprintService(projectService, sprintService) {
        this.projectService = projectService;
        this.sprintService = sprintService;
        this.sprints = [];
        this.projects = [];
    }
    DataSprintService.prototype.setProgress = function (sprint) {
        var styles;
        if (sprint !== undefined) {
            styles = {
                'width': sprint.Progress + '%'
            };
        }
        return styles;
    };
    DataSprintService.prototype.delete = function (sprintID) {
        if (confirm("Are you sure?")) {
            //this.sprintService.delete(sprintID).subscribe(data => { this.dataProjectService.reloadProjectData() })
        }
    };
    DataSprintService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [project_service_1.ProjectService,
            sprint_service_1.SprintService])
    ], DataSprintService);
    return DataSprintService;
}());
exports.DataSprintService = DataSprintService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zcHJpbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtc3ByaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsdUVBQXFFO0FBR3JFLHFFQUFtRTtBQUduRTtJQUtFLDJCQUNVLGNBQThCLEVBQzlCLGFBQTRCO1FBRDVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU4vQixZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFTL0IsQ0FBQztJQUVGLHVDQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3hCLElBQUksTUFBTSxDQUFDO1FBQ1gsRUFBRSxDQUFBLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxHQUFHO2dCQUNQLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUc7YUFDL0IsQ0FBQztRQUNKLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sUUFBZ0I7UUFDckIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1Qix3R0FBd0c7UUFDMUcsQ0FBQztJQUNILENBQUM7SUEzQlUsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBT2UsZ0NBQWM7WUFDZiw4QkFBYTtPQVAzQixpQkFBaUIsQ0E0QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XHJcbmltcG9ydCB7IFByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy9wcm9qZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBTcHJpbnQgfSBmcm9tICcuLi9tb2RlbHMvc3ByaW50JztcclxuaW1wb3J0IHsgU3ByaW50U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvc3ByaW50LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNwcmludFNlcnZpY2Uge1xyXG4gIHB1YmxpYyBzcHJpbnRzOiBTcHJpbnRbXSA9IFtdO1xyXG4gIHB1YmxpYyBwcm9qZWN0czogUHJvamVjdFtdID0gW107XHJcbiAgcHVibGljIHN1YnNjcmlwdGlvbjogSVN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgc3ByaW50U2VydmljZTogU3ByaW50U2VydmljZSxcclxuICAgIC8vcHJpdmF0ZSBkYXRhUHJvamVjdFNlcnZpY2U6IERhdGFQcm9qZWN0U2VydmljZVxyXG4gICkge1xyXG4gICAgXHJcbiAgIH1cclxuXHJcbiAgc2V0UHJvZ3Jlc3Moc3ByaW50OiBTcHJpbnQpIHtcclxuICAgIGxldCBzdHlsZXM7XHJcbiAgICBpZihzcHJpbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgJ3dpZHRoJzogc3ByaW50LlByb2dyZXNzICsgJyUnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3R5bGVzO1xyXG4gIH1cclxuICBcclxuICBkZWxldGUoc3ByaW50SUQ6IG51bWJlcikge1xyXG4gICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcclxuICAgICAgLy90aGlzLnNwcmludFNlcnZpY2UuZGVsZXRlKHNwcmludElEKS5zdWJzY3JpYmUoZGF0YSA9PiB7IHRoaXMuZGF0YVByb2plY3RTZXJ2aWNlLnJlbG9hZFByb2plY3REYXRhKCkgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19