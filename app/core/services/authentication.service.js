"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_config_1 = require("../../config/app.config");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var appSettings = require("application-settings");
var AuthenticationService = /** @class */ (function () {
    //temporaryUser: User = new User(0, 'Samzone', 'Szymon', 'Konopka');
    function AuthenticationService(http, configuration, router) {
        this.http = http;
        this.configuration = configuration;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.configuration.ServerUrl + '/user/authenticate', { username: username, password: password })
            .map(function (response) {
            var user = response.json();
            console.log(user);
            if (user && user.token) {
                appSettings.setString('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.ifLoggedIn = function () {
        if (appSettings.getString('currentUser')) {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.logout = function () {
        appSettings.remove('currentUser');
        this.router.navigate(['']);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            app_config_1.Configuration,
            router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0Msc0NBQXFDO0FBQ3JDLHNEQUF3RDtBQUV4RCxpQ0FBK0I7QUFFL0IsMENBQXlDO0FBQ3pDLGtEQUFvRDtBQUdwRDtJQUVFLG9FQUFvRTtJQUVwRSwrQkFDVSxJQUFVLEVBQ1YsYUFBNEIsRUFDNUIsTUFBYztRQUZkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BCLENBQUM7SUFFTCxxQ0FBSyxHQUFMLFVBQU0sUUFBZ0IsRUFBRSxRQUFnQjtRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUNySCxHQUFHLENBQUMsVUFBQyxRQUFrQjtZQUN0QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RCxDQUFDO1FBQ0gsQ0FBQyxDQUFFLENBQUM7SUFDTixDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNFLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWhDVSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FNSyxXQUFJO1lBQ0ssMEJBQWE7WUFDcEIsZUFBTTtPQVBiLHFCQUFxQixDQWtDakM7SUFBRCw0QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAuY29uZmlnJztcclxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgLy90ZW1wb3JhcnlVc2VyOiBVc2VyID0gbmV3IFVzZXIoMCwgJ1NhbXpvbmUnLCAnU3p5bW9uJywgJ0tvbm9wa2EnKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHAsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24sXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7IH1cclxuXHJcbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmwgKyAnL3VzZXIvYXV0aGVudGljYXRlJywgeyB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KVxyXG4gICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgaWYodXNlciAmJiB1c2VyLnRva2VuKSB7XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgaWZMb2dnZWRJbigpIHtcclxuICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZygnY3VycmVudFVzZXInKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBhcHBTZXR0aW5ncy5yZW1vdmUoJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==