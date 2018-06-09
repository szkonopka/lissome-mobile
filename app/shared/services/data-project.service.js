"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_1 = require("../models/project");
var project_service_1 = require("../../core/services/project.service");
var sprint_service_1 = require("../../core/services/sprint.service");
var task_service_1 = require("../../core/services/task.service");
var task_state_service_1 = require("../../core/services/task-state.service");
var data_task_service_1 = require("./data-task.service");
var project_role_service_1 = require("../../core/services/project-role.service");
var user_service_1 = require("../../core/services/user.service");
var role_service_1 = require("../../core/services/role.service");
var task_assignees_service_1 = require("../../core/services/task-assignees.service");
var appSettings = require("application-settings");
var DataProjectService = /** @class */ (function () {
    function DataProjectService(projectService, sprintService, taskService, taskStateService, dataTaskService, projectRoleService, userService, roleService, taskAssigneService) {
        this.projectService = projectService;
        this.sprintService = sprintService;
        this.taskService = taskService;
        this.taskStateService = taskStateService;
        this.dataTaskService = dataTaskService;
        this.projectRoleService = projectRoleService;
        this.userService = userService;
        this.roleService = roleService;
        this.taskAssigneService = taskAssigneService;
        this.projects = [];
        this.selectedProject = new project_1.Project();
        this.projectActiveSprint = null;
        this.sprintlessTasks = [];
        this.projectRoles = [];
        this.projectUsers = [];
        this.roles = [];
    }
    DataProjectService.prototype.reloadProjectData = function () {
        this.loadProjectData();
        this.loadSprintlessTasks(this.selectedProject);
        this.loadActiveSprint();
        this.loadActiveSprintTasks();
        this.loadRoles();
        this.loadUsers();
    };
    DataProjectService.prototype.reloadProjectTasksStates = function () {
        this.loadSprintlessTasks(this.selectedProject);
        this.loadActiveSprintTasks();
    };
    DataProjectService.prototype.updateTaskState = function (taskID, stateID) {
        var _this = this;
        this.taskService.updateState(taskID, stateID).subscribe((function (data) { _this.reloadProjectTasksStates(); }));
    };
    DataProjectService.prototype.updateTaskSprint = function (taskID, sprintID) {
        var _this = this;
        this.taskService.updateSprint(taskID, sprintID).subscribe((function (data) { _this.reloadProjectTasksStates(); }));
    };
    DataProjectService.prototype.loadProjectData = function () {
        var _this = this;
        this.taskStateService.getAll(null).subscribe(function (taskStates) {
            _this.dataTaskService.taskStates = taskStates;
        });
    };
    DataProjectService.prototype.loadRoles = function () {
        var _this = this;
        this.roleService.getAll(null).subscribe(function (data) {
            _this.roles = data;
        });
    };
    DataProjectService.prototype.loadSprintlessTasks = function (project) {
        var _this = this;
        this.taskService.getSprintless(project.Id).subscribe(function (tasks) {
            project.SprintlessTasks = tasks;
            var _loop_1 = function (task) {
                _this.userService.getUsersForTask(task.Id).subscribe(function (users) {
                    task.Users = users;
                });
            };
            for (var _i = 0, _a = project.SprintlessTasks; _i < _a.length; _i++) {
                var task = _a[_i];
                _loop_1(task);
            }
        });
    };
    DataProjectService.prototype.loadActiveSprint = function () {
        var _this = this;
        this.sprintService.get(this.selectedProject.Id, this.selectedProject.ActiveSprint).subscribe(function (sprint) {
            _this.selectedProject.ActiveSprintObject = sprint;
        });
    };
    DataProjectService.prototype.loadProjects = function () {
        var _this = this;
        this.projectService.getAllAssignedTo(this.getUserID()).subscribe(function (projects) {
            console.log(projects);
            _this.projects = projects;
            _this.loadSprintFromProject();
        });
    };
    DataProjectService.prototype.loadActiveSprintTasks = function () {
        var _this = this;
        this.taskService.getAllFromSprint(this.selectedProject.ActiveSprint).subscribe(function (tasks) {
            _this.selectedProject.ActiveSprintObject.ActiveTasks = tasks;
            var _loop_2 = function (task) {
                _this.userService.getUsersForTask(task.Id).subscribe(function (users) {
                    task.Users = users;
                });
            };
            for (var _i = 0, _a = _this.selectedProject.ActiveSprintObject.ActiveTasks; _i < _a.length; _i++) {
                var task = _a[_i];
                _loop_2(task);
            }
        });
    };
    DataProjectService.prototype.loadSprintFromProject = function () {
        var _this = this;
        this.projects.forEach(function (project) {
            _this.sprintService.get(project.Id, project.ActiveSprint).subscribe(function (activeSprint) {
                project.ActiveSprintObject = activeSprint;
                _this.loadTasksFromSprintsData(project.ActiveSprintObject);
                _this.loadSprintlessTasks(project);
            });
        });
    };
    DataProjectService.prototype.loadTasksFromSprintsData = function (sprint) {
        sprint.updateProgres();
        this.taskService.getAllFromSprint(sprint.Id).subscribe(function (activeTasks) {
            sprint.ActiveTasks = activeTasks;
        });
    };
    DataProjectService.prototype.sumSprintPoints = function (sprint) {
        sprint.ActiveTasks.forEach(function (task) {
            sprint.SprintPoints += task.ProductivityPoints;
        });
    };
    DataProjectService.prototype.deleteProject = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.projectService.delete(id).toPromise().then(function (response) { return _this.loadProjects(); });
        }
    };
    DataProjectService.prototype.updateProject = function () {
        this.projectService.update(this.selectedProject).subscribe(function (res) { });
    };
    DataProjectService.prototype.loadUsers = function () {
        var _this = this;
        this.projectRoleService.getAllFromProject(this.selectedProject.Id).subscribe(function (res) {
            _this.projectRoles = res;
            _this.projectRoles.forEach(function (projectRole) {
                _this.userService.getOne(projectRole.UserID).subscribe(function (res) {
                    projectRole.User = res;
                });
                _this.roleService.getOne(projectRole.Role).subscribe(function (res) {
                    projectRole.RoleObject = res;
                });
            });
        });
    };
    DataProjectService.prototype.showSprintAdder = function () {
        var sprintAdder = document.querySelectorAll('.sprint-adder')[0];
        var sprintAdderWindow = document.querySelectorAll('.sprint-adder__window')[0];
        sprintAdder.classList.add('sprint-adder_active');
        sprintAdderWindow.classList.add('sprint-adder__window_active');
    };
    DataProjectService.prototype.getUserID = function () {
        var id = JSON.parse(appSettings.getString('currentUser')).id;
        return id;
    };
    DataProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [project_service_1.ProjectService,
            sprint_service_1.SprintService,
            task_service_1.TaskService,
            task_state_service_1.TaskStateService,
            data_task_service_1.DataTaskService,
            project_role_service_1.ProjectRoleService,
            user_service_1.UserService,
            role_service_1.RoleService,
            task_assignees_service_1.TaskAssigneesService])
    ], DataProjectService);
    return DataProjectService;
}());
exports.DataProjectService = DataProjectService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcm9qZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLXByb2plY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBNEM7QUFFNUMsdUVBQXFFO0FBR3JFLHFFQUFtRTtBQUNuRSxpRUFBK0Q7QUFDL0QsNkVBQTBFO0FBQzFFLHlEQUFzRDtBQUN0RCxpRkFBOEU7QUFHOUUsaUVBQStEO0FBRS9ELGlFQUErRDtBQUMvRCxxRkFBa0Y7QUFDbEYsa0RBQW9EO0FBR3BEO0lBV0UsNEJBQ1UsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsZ0JBQWtDLEVBQ2xDLGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUN0QyxXQUF3QixFQUN4QixXQUF3QixFQUN4QixrQkFBd0M7UUFSeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFzQjtRQW5CM0MsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFZLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3pDLHdCQUFtQixHQUFXLElBQUksQ0FBQztRQUduQyxvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFDakMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQWMxQixDQUFDO0lBRU0sOENBQWlCLEdBQXhCO1FBQ0UsSUFB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LElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQTlKVSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTt5Q0FhZSxnQ0FBYztZQUNmLDhCQUFhO1lBQ2YsMEJBQVc7WUFDTixxQ0FBZ0I7WUFDakIsbUNBQWU7WUFDWix5Q0FBa0I7WUFDekIsMEJBQVc7WUFDWCwwQkFBVztZQUNKLDZDQUFvQjtPQXBCdkMsa0JBQWtCLENBK0o5QjtJQUFELHlCQUFDO0NBQUEsQUEvSkQsSUErSkM7QUEvSlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xyXG5pbXBvcnQgeyBQcm9qZWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSVN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgU3ByaW50IH0gZnJvbSAnLi4vbW9kZWxzL3NwcmludCc7XHJcbmltcG9ydCB7IFNwcmludFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3NwcmludC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFza1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3Rhc2suc2VydmljZSc7XHJcbmltcG9ydCB7IFRhc2tTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3Rhc2stc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFUYXNrU2VydmljZSB9IGZyb20gJy4vZGF0YS10YXNrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0Um9sZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3Byb2plY3Qtcm9sZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvamVjdFJvbGUgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdC1yb2xlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuLi9tb2RlbHMvUm9sZSc7XHJcbmltcG9ydCB7IFJvbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy9yb2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYXNrQXNzaWduZWVzU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdGFzay1hc3NpZ25lZXMuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFQcm9qZWN0U2VydmljZSB7XHJcbiAgcHVibGljIHByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcclxuICBwdWJsaWMgc2VsZWN0ZWRQcm9qZWN0OiBQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcclxuICBwdWJsaWMgcHJvamVjdEFjdGl2ZVNwcmludDogU3ByaW50ID0gbnVsbDtcclxuICBwdWJsaWMgc3Vic2NyaXB0aW9uOiBJU3Vic2NyaXB0aW9uO1xyXG4gIHB1YmxpYyBwcm9qZWN0U3Vic2NyaXB0aW9uOiBJU3Vic2NyaXB0aW9uO1xyXG4gIHB1YmxpYyBzcHJpbnRsZXNzVGFza3M6IFRhc2tbXSA9IFtdO1xyXG4gIHB1YmxpYyBwcm9qZWN0Um9sZXM6IFByb2plY3RSb2xlW10gPSBbXTtcclxuICBwdWJsaWMgcHJvamVjdFVzZXJzOiBVc2VyW10gPSBbXTtcclxuICBwdWJsaWMgcm9sZXM6IFJvbGVbXSA9IFtdO1xyXG4gXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgc3ByaW50U2VydmljZTogU3ByaW50U2VydmljZSxcclxuICAgIHByaXZhdGUgdGFza1NlcnZpY2U6IFRhc2tTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0YXNrU3RhdGVTZXJ2aWNlOiBUYXNrU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRhVGFza1NlcnZpY2U6IERhdGFUYXNrU2VydmljZSxcclxuICAgIHByaXZhdGUgcHJvamVjdFJvbGVTZXJ2aWNlOiBQcm9qZWN0Um9sZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgcm9sZVNlcnZpY2U6IFJvbGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0YXNrQXNzaWduZVNlcnZpY2U6IFRhc2tBc3NpZ25lZXNTZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbG9hZFByb2plY3REYXRhKCkge1xyXG4gICAgdGhpcy5sb2FkUHJvamVjdERhdGEoKTtcclxuICAgIHRoaXMubG9hZFNwcmludGxlc3NUYXNrcyh0aGlzLnNlbGVjdGVkUHJvamVjdCk7XHJcbiAgICB0aGlzLmxvYWRBY3RpdmVTcHJpbnQoKTtcclxuICAgIHRoaXMubG9hZEFjdGl2ZVNwcmludFRhc2tzKCk7XHJcbiAgICB0aGlzLmxvYWRSb2xlcygpO1xyXG4gICAgdGhpcy5sb2FkVXNlcnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWxvYWRQcm9qZWN0VGFza3NTdGF0ZXMoKSB7XHJcbiAgICB0aGlzLmxvYWRTcHJpbnRsZXNzVGFza3ModGhpcy5zZWxlY3RlZFByb2plY3QpO1xyXG4gICAgdGhpcy5sb2FkQWN0aXZlU3ByaW50VGFza3MoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVUYXNrU3RhdGUodGFza0lEOiBudW1iZXIsIHN0YXRlSUQ6IG51bWJlcikge1xyXG4gICAgdGhpcy50YXNrU2VydmljZS51cGRhdGVTdGF0ZSh0YXNrSUQsIHN0YXRlSUQpLnN1YnNjcmliZSgoZGF0YSA9PiB7IHRoaXMucmVsb2FkUHJvamVjdFRhc2tzU3RhdGVzKCk7IH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVUYXNrU3ByaW50KHRhc2tJRDogbnVtYmVyLCBzcHJpbnRJRDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnRhc2tTZXJ2aWNlLnVwZGF0ZVNwcmludCh0YXNrSUQsIHNwcmludElEKS5zdWJzY3JpYmUoKGRhdGEgPT4geyB0aGlzLnJlbG9hZFByb2plY3RUYXNrc1N0YXRlcygpOyB9KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZFByb2plY3REYXRhKCkge1xyXG4gICAgdGhpcy50YXNrU3RhdGVTZXJ2aWNlLmdldEFsbChudWxsKS5zdWJzY3JpYmUoIHRhc2tTdGF0ZXMgPT4geyBcclxuICAgICAgdGhpcy5kYXRhVGFza1NlcnZpY2UudGFza1N0YXRlcyA9IHRhc2tTdGF0ZXM7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRSb2xlcygpIHtcclxuICAgIHRoaXMucm9sZVNlcnZpY2UuZ2V0QWxsKG51bGwpLnN1YnNjcmliZSgoZGF0YSkgPT4geyBcclxuICAgICAgdGhpcy5yb2xlcyA9IGRhdGE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkU3ByaW50bGVzc1Rhc2tzKHByb2plY3Q6IFByb2plY3QpIHtcclxuICAgIHRoaXMudGFza1NlcnZpY2UuZ2V0U3ByaW50bGVzcyhwcm9qZWN0LklkKS5zdWJzY3JpYmUoIHRhc2tzID0+IHtcclxuICAgICAgcHJvamVjdC5TcHJpbnRsZXNzVGFza3MgPSB0YXNrcztcclxuICAgICAgZm9yKGxldCB0YXNrIG9mIHByb2plY3QuU3ByaW50bGVzc1Rhc2tzKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2Vyc0ZvclRhc2sodGFzay5JZCkuc3Vic2NyaWJlKCB1c2VycyA9PiB7XHJcbiAgICAgICAgICB0YXNrLlVzZXJzID0gdXNlcnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZEFjdGl2ZVNwcmludCgpIHtcclxuICAgIHRoaXMuc3ByaW50U2VydmljZS5nZXQodGhpcy5zZWxlY3RlZFByb2plY3QuSWQsIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LkFjdGl2ZVNwcmludCkuc3Vic2NyaWJlKCBzcHJpbnQgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5BY3RpdmVTcHJpbnRPYmplY3QgPSBzcHJpbnQ7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRQcm9qZWN0cygpIHtcclxuICAgIHRoaXMucHJvamVjdFNlcnZpY2UuZ2V0QWxsQXNzaWduZWRUbyh0aGlzLmdldFVzZXJJRCgpKS5zdWJzY3JpYmUoXHJcbiAgICAgIHByb2plY3RzID0+IHsgXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcclxuICAgICAgICB0aGlzLmxvYWRTcHJpbnRGcm9tUHJvamVjdCgpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBY3RpdmVTcHJpbnRUYXNrcygpIHtcclxuICAgIHRoaXMudGFza1NlcnZpY2UuZ2V0QWxsRnJvbVNwcmludCh0aGlzLnNlbGVjdGVkUHJvamVjdC5BY3RpdmVTcHJpbnQpLnN1YnNjcmliZSggdGFza3MgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdC5BY3RpdmVTcHJpbnRPYmplY3QuQWN0aXZlVGFza3MgPSB0YXNrcztcclxuICAgICAgZm9yKGxldCB0YXNrIG9mIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LkFjdGl2ZVNwcmludE9iamVjdC5BY3RpdmVUYXNrcykge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcnNGb3JUYXNrKHRhc2suSWQpLnN1YnNjcmliZSggdXNlcnMgPT4ge1xyXG4gICAgICAgICAgdGFzay5Vc2VycyA9IHVzZXJzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRTcHJpbnRGcm9tUHJvamVjdCgpIHtcclxuICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdDogUHJvamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLnNwcmludFNlcnZpY2UuZ2V0KHByb2plY3QuSWQsIHByb2plY3QuQWN0aXZlU3ByaW50KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgYWN0aXZlU3ByaW50ID0+IHsgXHJcbiAgICAgICAgICBwcm9qZWN0LkFjdGl2ZVNwcmludE9iamVjdCA9IGFjdGl2ZVNwcmludDtcclxuICAgICAgICAgIHRoaXMubG9hZFRhc2tzRnJvbVNwcmludHNEYXRhKHByb2plY3QuQWN0aXZlU3ByaW50T2JqZWN0KTtcclxuICAgICAgICAgIHRoaXMubG9hZFNwcmludGxlc3NUYXNrcyhwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRUYXNrc0Zyb21TcHJpbnRzRGF0YShzcHJpbnQ6IFNwcmludCkge1xyXG4gICAgc3ByaW50LnVwZGF0ZVByb2dyZXMoKTtcclxuICAgIHRoaXMudGFza1NlcnZpY2UuZ2V0QWxsRnJvbVNwcmludChzcHJpbnQuSWQpLnN1YnNjcmliZShcclxuICAgICAgYWN0aXZlVGFza3MgPT4geyBcclxuICAgICAgICBzcHJpbnQuQWN0aXZlVGFza3MgPSBhY3RpdmVUYXNrcztcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdW1TcHJpbnRQb2ludHMoc3ByaW50OiBTcHJpbnQpIHtcclxuICAgIHNwcmludC5BY3RpdmVUYXNrcy5mb3JFYWNoKCh0YXNrOiBUYXNrKSA9PiB7XHJcbiAgICAgIHNwcmludC5TcHJpbnRQb2ludHMgKz0gdGFzay5Qcm9kdWN0aXZpdHlQb2ludHM7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZVByb2plY3QoaWQ6IG51bWJlcikge1xyXG4gICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcclxuICAgICAgdGhpcy5wcm9qZWN0U2VydmljZS5kZWxldGUoaWQpLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5sb2FkUHJvamVjdHMoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlUHJvamVjdCgpIHtcclxuICAgIHRoaXMucHJvamVjdFNlcnZpY2UudXBkYXRlKHRoaXMuc2VsZWN0ZWRQcm9qZWN0KS5zdWJzY3JpYmUocmVzID0+IHsgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZFVzZXJzKCkge1xyXG4gICAgdGhpcy5wcm9qZWN0Um9sZVNlcnZpY2UuZ2V0QWxsRnJvbVByb2plY3QodGhpcy5zZWxlY3RlZFByb2plY3QuSWQpLnN1YnNjcmliZShyZXMgPT4geyBcclxuICAgICAgdGhpcy5wcm9qZWN0Um9sZXMgPSByZXM7XHJcbiAgICAgIHRoaXMucHJvamVjdFJvbGVzLmZvckVhY2gocHJvamVjdFJvbGUgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0T25lKHByb2plY3RSb2xlLlVzZXJJRCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICBwcm9qZWN0Um9sZS5Vc2VyID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucm9sZVNlcnZpY2UuZ2V0T25lKHByb2plY3RSb2xlLlJvbGUpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgcHJvamVjdFJvbGUuUm9sZU9iamVjdCA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93U3ByaW50QWRkZXIoKSB7XHJcbiAgICBjb25zdCBzcHJpbnRBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcHJpbnQtYWRkZXInKVswXTtcclxuICAgIGNvbnN0IHNwcmludEFkZGVyV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwcmludC1hZGRlcl9fd2luZG93JylbMF07XHJcbiAgICBzcHJpbnRBZGRlci5jbGFzc0xpc3QuYWRkKCdzcHJpbnQtYWRkZXJfYWN0aXZlJyk7XHJcbiAgICBzcHJpbnRBZGRlcldpbmRvdy5jbGFzc0xpc3QuYWRkKCdzcHJpbnQtYWRkZXJfX3dpbmRvd19hY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VySUQoKSA6IG51bWJlciB7XHJcbiAgICBsZXQgaWQ6IG51bWJlciA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdjdXJyZW50VXNlcicpKS5pZDtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcbn1cclxuIl19