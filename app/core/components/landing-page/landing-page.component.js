"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("../../services/authentication.service");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var user_service_1 = require("../../services/user.service");
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(page, authenticationService, router, route, userService) {
        this.page = page;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.model = {};
        this.isLoggingIn = true;
        this.page.actionBarHidden = true;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/main';
    };
    LandingPageComponent.prototype.submit = function () {
        if (this.isLoggingIn)
            this.login();
        else
            this.register();
    };
    LandingPageComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            alert("Zalogowałeś się pomyślnie.");
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            alert("Coś poszło nie tak!");
        });
    };
    LandingPageComponent.prototype.register = function () {
        this.userService.create(this.model)
            .subscribe(function (data) {
            alert("Sukces w rejestracji.");
        }, function (error) {
            alert("Nie udalo sie.");
        });
    };
    LandingPageComponent.prototype.toggleForm = function () {
        for (var member in this.model)
            delete this.model[member];
        this.isLoggingIn = !this.isLoggingIn;
    };
    LandingPageComponent = __decorate([
        core_1.Component({
            selector: "ns-landing-page",
            moduleId: __filename,
            templateUrl: "./landing-page.component.html",
            styleUrls: ["./landing-page.component.css"],
        }),
        __metadata("design:paramtypes", [page_1.Page,
            authentication_service_1.AuthenticationService,
            router_1.Router,
            router_1.ActivatedRoute,
            user_service_1.UserService])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
exports.LandingPageComponent = LandingPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0ZBQThFO0FBQzlFLDBDQUF5RDtBQUN6RCxzREFBcUQ7QUFDckQsNERBQTBEO0FBUzFEO0lBTUksOEJBQ1ksSUFBVSxFQUNWLHFCQUE0QyxFQUM1QyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsV0FBd0I7UUFKeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVDVCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFFaEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFVaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFRix1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksT0FBTyxDQUFDO0lBQzdFLENBQUM7SUFFRCxxQ0FBTSxHQUFOO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsSUFBSTtZQUNBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sb0NBQUssR0FBYjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN6RSxTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRU8sdUNBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xDLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUNJLEdBQUcsQ0FBQSxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQXpEUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDO3lDQVFvQixXQUFJO1lBQ2EsOENBQXFCO1lBQ3BDLGVBQU07WUFDUCx1QkFBYztZQUNSLDBCQUFXO09BWDNCLG9CQUFvQixDQTBEaEM7SUFBRCwyQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1sYW5kaW5nLXBhZ2VcIixcclxuICAgIG1vZHVsZUlkOiBfX2ZpbGVuYW1lLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sYW5kaW5nLXBhZ2UuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhbmRpbmdQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIG1vZGVsOiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgcmV0dXJuVXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzTG9nZ2luZ0luOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXHJcblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmV0dXJuVXJsID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1sncmV0dXJuVXJsJ10gfHwgJy9tYWluJztcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5pc0xvZ2dpbmdJbilcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4odGhpcy5tb2RlbC51c2VybmFtZSwgdGhpcy5tb2RlbC5wYXNzd29yZClcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWmFsb2dvd2HFgmXFmyBzacSZIHBvbXnFm2xuaWUuXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuVXJsXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ2/FmyBwb3N6xYJvIG5pZSB0YWshXCIpO1xyXG4gICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcigpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZSh0aGlzLm1vZGVsKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJTdWtjZXMgdyByZWplc3RyYWNqaS5cIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTmllIHVkYWxvIHNpZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRm9ybSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IobGV0IG1lbWJlciBpbiB0aGlzLm1vZGVsKSBkZWxldGUgdGhpcy5tb2RlbFttZW1iZXJdO1xyXG5cclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9XHJcbn1cclxuIl19