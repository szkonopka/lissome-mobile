"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ComponentSwitcherService = /** @class */ (function () {
    function ComponentSwitcherService() {
        this.loginVisibility = false;
        this.registrationVisibility = false;
    }
    ComponentSwitcherService.prototype.setLoginVisibility = function () {
        this.loginVisibility = !this.loginVisibility;
    };
    ComponentSwitcherService.prototype.getLoginVisibility = function () {
        return this.loginVisibility;
    };
    ComponentSwitcherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ComponentSwitcherService);
    return ComponentSwitcherService;
}());
exports.ComponentSwitcherService = ComponentSwitcherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXN3aXRjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb25lbnQtc3dpdGNoZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQUlFO1FBSFEsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO0lBRXZCLENBQUM7SUFFakIscURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQztJQUVELHFEQUFrQixHQUFsQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFaVSx3QkFBd0I7UUFEcEMsaUJBQVUsRUFBRTs7T0FDQSx3QkFBd0IsQ0FjcEM7SUFBRCwrQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFN3aXRjaGVyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsb2dpblZpc2liaWxpdHkgPSBmYWxzZTtcclxuICBwcml2YXRlIHJlZ2lzdHJhdGlvblZpc2liaWxpdHkgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgc2V0TG9naW5WaXNpYmlsaXR5KCkge1xyXG4gICAgdGhpcy5sb2dpblZpc2liaWxpdHkgPSAhdGhpcy5sb2dpblZpc2liaWxpdHk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2dpblZpc2liaWxpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dpblZpc2liaWxpdHk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=