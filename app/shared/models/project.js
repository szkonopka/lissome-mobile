"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resource_1 = require("./resource");
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Users = [];
        _this.ActiveTasks = [];
        _this.SprintlessTasks = [];
        _this.ActiveSprint = null;
        _this.ActiveSprintObject = null;
        _this.NumberOfSprints = 0;
        return _this;
    }
    Project.prototype.addUser = function (user) {
        this.Users.push(user);
    };
    Project.prototype.prepareSlug = function (name) {
        var slug = name.replace(/ /g, "-");
        encodeURI(slug);
        slug = slug.toLowerCase();
        return slug;
    };
    return Project;
}(resource_1.Resource));
exports.Project = Project;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx1Q0FBc0M7QUFHdEM7SUFBNkIsMkJBQVE7SUFBckM7UUFBQSxxRUF3QkM7UUF0QkcsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQU16QixxQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUM1Qix3QkFBa0IsR0FBVyxJQUFJLENBQUM7UUFDbEMscUJBQWUsR0FBVyxDQUFDLENBQUM7O0lBWWhDLENBQUM7SUFWRyx5QkFBTyxHQUFQLFVBQVEsSUFBVTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw2QkFBVyxHQUFYLFVBQVksSUFBWTtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUE2QixtQkFBUSxHQXdCcEM7QUF4QlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcclxuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tIFwiLi9yZXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBTcHJpbnQgfSBmcm9tIFwiLi9zcHJpbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgTmFtZTogc3RyaW5nO1xyXG4gICAgVXNlcnM6IFVzZXJbXSA9IFtdO1xyXG4gICAgQWN0aXZlVGFza3M6IFRhc2tbXSA9IFtdO1xyXG4gICAgU2x1Zzogc3RyaW5nO1xyXG4gICAgT3duZXI6IG51bWJlcjtcclxuICAgIERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBTdGFydERhdGU6IERhdGU7XHJcbiAgICBFbmREYXRlOiBEYXRlO1xyXG4gICAgU3ByaW50bGVzc1Rhc2tzOiBUYXNrW10gPSBbXTtcclxuICAgIEFjdGl2ZVNwcmludDogbnVtYmVyID0gbnVsbDtcclxuICAgIEFjdGl2ZVNwcmludE9iamVjdDogU3ByaW50ID0gbnVsbDtcclxuICAgIE51bWJlck9mU3ByaW50czogbnVtYmVyID0gMDtcclxuXHJcbiAgICBhZGRVc2VyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICB0aGlzLlVzZXJzLnB1c2godXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZVNsdWcobmFtZTogc3RyaW5nKSA6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHNsdWcgPSBuYW1lLnJlcGxhY2UoLyAvZywgXCItXCIpO1xyXG4gICAgICAgIGVuY29kZVVSSShzbHVnKTtcclxuICAgICAgICBzbHVnID0gc2x1Zy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiBzbHVnO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==