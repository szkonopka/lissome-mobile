"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_config_1 = require("../../config/app.config");
var Role_1 = require("../../shared/models/Role");
var resource_service_1 = require("./resource.service");
var RoleService = /** @class */ (function (_super) {
    __extends(RoleService, _super);
    function RoleService(http) {
        return _super.call(this, "role", new app_config_1.Configuration(), http, new RoleSerializer()) || this;
    }
    RoleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RoleService);
    return RoleService;
}(resource_service_1.ResourceService));
exports.RoleService = RoleService;
var RoleSerializer = /** @class */ (function () {
    function RoleSerializer() {
    }
    RoleSerializer.prototype.fromJson = function (json) {
        var role = new Role_1.Role;
        role.Id = json.id;
        role.Name = json.name;
        return role;
    };
    RoleSerializer.prototype.toJson = function (role) {
        return {
            id: role.Id,
            name: role.Name
        };
    };
    return RoleSerializer;
}());
exports.RoleSerializer = RoleSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9sZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxzREFBd0Q7QUFFeEQsaURBQWdEO0FBQ2hELHVEQUFxRDtBQUdyRDtJQUFpQywrQkFBcUI7SUFFcEQscUJBQVksSUFBVTtlQUNwQixrQkFDRSxNQUFNLEVBQ04sSUFBSSwwQkFBYSxFQUFFLEVBQ25CLElBQUksRUFDSixJQUFJLGNBQWMsRUFBRSxDQUNyQjtJQUNILENBQUM7SUFUVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBR08sV0FBSTtPQUZYLFdBQVcsQ0FXdkI7SUFBRCxrQkFBQztDQUFBLEFBWEQsQ0FBaUMsa0NBQWUsR0FXL0M7QUFYWSxrQ0FBVztBQWF4QjtJQUFBO0lBZUEsQ0FBQztJQWRDLGlDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2hCLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNmLE1BQU0sQ0FBQztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBQcm9qZWN0Um9sZVNlcmlhbGl6ZXIgfSBmcm9tICcuL3Byb2plY3Qtcm9sZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL1JvbGUnO1xuaW1wb3J0IHsgUmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9yZXNvdXJjZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvbGVTZXJ2aWNlIGV4dGVuZHMgUmVzb3VyY2VTZXJ2aWNlPFJvbGU+IHtcblxuICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7IFxuICAgIHN1cGVyKFxuICAgICAgXCJyb2xlXCIsXG4gICAgICBuZXcgQ29uZmlndXJhdGlvbigpLFxuICAgICAgaHR0cCxcbiAgICAgIG5ldyBSb2xlU2VyaWFsaXplcigpXG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBSb2xlU2VyaWFsaXplciB7XG4gIGZyb21Kc29uKGpzb246IGFueSkgOiBSb2xlIHtcbiAgICBjb25zdCByb2xlID0gbmV3IFJvbGU7XG4gICAgcm9sZS5JZCA9IGpzb24uaWQ7XG4gICAgcm9sZS5OYW1lID0ganNvbi5uYW1lO1xuXG4gICAgcmV0dXJuIHJvbGU7XG4gIH1cblxuICB0b0pzb24ocm9sZTogUm9sZSkgOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogcm9sZS5JZCxcbiAgICAgIG5hbWU6IHJvbGUuTmFtZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==