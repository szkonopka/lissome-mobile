"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("../../config/app.config");
var user_1 = require("../../shared/models/user");
var http_1 = require("@angular/http");
var resource_service_1 = require("./resource.service");
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        return _super.call(this, "user", new app_config_1.Configuration(), http, new UserSerializer()) || this;
    }
    UserService.prototype.create = function (user) {
        var _this = this;
        alert(this.configuration.ServerUrl + "/" + this.endpoint + "/register");
        return this.http.post(this.configuration.ServerUrl + "/" + this.endpoint + "/register", user)
            .map(function (response) { return _this.serializer.fromJson(response.json()); });
    };
    UserService.prototype.getUsersForTask = function (taskID) {
        var _this = this;
        return this.http.get(this.configuration.ServerUrl + "/taskassignee/task/" + taskID + "/users")
            .map(function (response) { return _this.convertData(response.json()); });
    };
    UserService.prototype.getUserByName = function (username) {
        var _this = this;
        return this.http.get(this.configuration.ServerUrl + "/" + this.endpoint + "/byname/" + username)
            .map(function (response) { return _this.serializer.fromJson(response.json()); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}(resource_service_1.ResourceService));
exports.UserService = UserService;
var UserSerializer = /** @class */ (function () {
    function UserSerializer() {
    }
    UserSerializer.prototype.fromJson = function (json) {
        var user = new user_1.User;
        user.Id = json.id;
        user.Name = json.name;
        user.Email = json.email;
        user.Surname = json.surname;
        user.Username = json.username;
        return user;
    };
    UserSerializer.prototype.toJson = function (user) {
        return {
            id: user.Id,
            email: user.Email,
            name: user.Name,
            surname: user.Surname,
            username: user.Username
        };
    };
    return UserSerializer;
}());
exports.UserSerializer = UserSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNEQUF3RDtBQUN4RCxpREFBZ0Q7QUFDaEQsc0NBQXdFO0FBR3hFLHVEQUFxRDtBQUdyRDtJQUFpQywrQkFBcUI7SUFFcEQscUJBQVksSUFBVTtlQUVwQixrQkFDRSxNQUFNLEVBQ04sSUFBSSwwQkFBYSxFQUFFLEVBQ25CLElBQUksRUFDSixJQUFJLGNBQWMsRUFBRSxDQUNyQjtJQUNILENBQUM7SUFFTSw0QkFBTSxHQUFiLFVBQWMsSUFBVTtRQUF4QixpQkFJQztRQUhDLEtBQUssQ0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxjQUFXLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsY0FBVyxFQUFFLElBQUksQ0FBQzthQUN2RixHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFTLEVBQWpELENBQWlELENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0scUNBQWUsR0FBdEIsVUFBdUIsTUFBYztRQUFyQyxpQkFHQztRQUZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsMkJBQXNCLE1BQU0sV0FBUSxDQUFDO2FBQ3hGLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLG1DQUFhLEdBQXBCLFVBQXFCLFFBQWdCO1FBQXJDLGlCQUdDO1FBRkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLGdCQUFXLFFBQVUsQ0FBQzthQUMxRixHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFTLEVBQWpELENBQWlELENBQUMsQ0FBQztJQUNsRixDQUFDO0lBMUJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHTyxXQUFJO09BRlgsV0FBVyxDQTJCdkI7SUFBRCxrQkFBQztDQUFBLEFBM0JELENBQWlDLGtDQUFlLEdBMkIvQztBQTNCWSxrQ0FBVztBQTZCeEI7SUFBQTtJQXFCQSxDQUFDO0lBcEJDLGlDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2hCLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFN0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNmLE1BQU0sQ0FBQztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMsIEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuL3Jlc291cmNlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBSZXNvdXJjZVNlcnZpY2U8VXNlcj4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSBcclxuICB7XHJcbiAgICBzdXBlcihcclxuICAgICAgXCJ1c2VyXCIsXHJcbiAgICAgIG5ldyBDb25maWd1cmF0aW9uKCksXHJcbiAgICAgIGh0dHAsXHJcbiAgICAgIG5ldyBVc2VyU2VyaWFsaXplcigpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSh1c2VyOiBVc2VyKSA6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgYWxlcnQoYCR7dGhpcy5jb25maWd1cmF0aW9uLlNlcnZlclVybH0vJHt0aGlzLmVuZHBvaW50fS9yZWdpc3RlcmApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9LyR7dGhpcy5lbmRwb2ludH0vcmVnaXN0ZXJgLCB1c2VyKVxyXG4gICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB0aGlzLnNlcmlhbGl6ZXIuZnJvbUpzb24ocmVzcG9uc2UuanNvbigpKSBhcyBVc2VyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2Vyc0ZvclRhc2sodGFza0lEOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxVc2VyW10+e1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uLlNlcnZlclVybH0vdGFza2Fzc2lnbmVlL3Rhc2svJHt0YXNrSUR9L3VzZXJzYClcclxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5jb252ZXJ0RGF0YShyZXNwb25zZS5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyQnlOYW1lKHVzZXJuYW1lOiBzdHJpbmcpIDogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmNvbmZpZ3VyYXRpb24uU2VydmVyVXJsfS8ke3RoaXMuZW5kcG9pbnR9L2J5bmFtZS8ke3VzZXJuYW1lfWApXHJcbiAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHRoaXMuc2VyaWFsaXplci5mcm9tSnNvbihyZXNwb25zZS5qc29uKCkpIGFzIFVzZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJpYWxpemVyIHtcclxuICBmcm9tSnNvbihqc29uOiBhbnkpIDogVXNlciB7XHJcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXI7XHJcbiAgICB1c2VyLklkID0ganNvbi5pZDtcclxuICAgIHVzZXIuTmFtZSA9IGpzb24ubmFtZTtcclxuICAgIHVzZXIuRW1haWwgPSBqc29uLmVtYWlsO1xyXG4gICAgdXNlci5TdXJuYW1lID0ganNvbi5zdXJuYW1lO1xyXG4gICAgdXNlci5Vc2VybmFtZSA9anNvbi51c2VybmFtZTtcclxuXHJcbiAgICByZXR1cm4gdXNlcjtcclxuICB9XHJcblxyXG4gIHRvSnNvbih1c2VyOiBVc2VyKSA6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdXNlci5JZCxcclxuICAgICAgZW1haWw6IHVzZXIuRW1haWwsXHJcbiAgICAgIG5hbWU6IHVzZXIuTmFtZSxcclxuICAgICAgc3VybmFtZTogdXNlci5TdXJuYW1lLFxyXG4gICAgICB1c2VybmFtZTogdXNlci5Vc2VybmFtZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19