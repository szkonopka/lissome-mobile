"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskAssigneePipe = /** @class */ (function () {
    function TaskAssigneePipe() {
    }
    TaskAssigneePipe.prototype.transform = function (projectRoles, task) {
        return projectRoles.filter(function (el) {
            for (var _i = 0, _a = task.Users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (el.UserID === user.Id) {
                    return;
                }
            }
            return el;
        });
    };
    TaskAssigneePipe = __decorate([
        core_1.Pipe({
            name: 'taskAssigneeFilter',
            pure: false
        })
    ], TaskAssigneePipe);
    return TaskAssigneePipe;
}());
exports.TaskAssigneePipe = TaskAssigneePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1hc3NpZ25lZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay1hc3NpZ25lZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBUXBEO0lBQUE7SUFjQSxDQUFDO0lBWkMsb0NBQVMsR0FBVCxVQUFVLFlBQTJCLEVBQUUsSUFBVTtRQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUU7WUFDNUIsR0FBRyxDQUFBLENBQWEsVUFBVSxFQUFWLEtBQUEsSUFBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVTtnQkFBdEIsSUFBSSxJQUFJLFNBQUE7Z0JBQ1YsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQ3pCLENBQUM7b0JBQ0MsTUFBTSxDQUFDO2dCQUNULENBQUM7YUFDRjtZQUNELE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFaVSxnQkFBZ0I7UUFKNUIsV0FBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUM7T0FDVyxnQkFBZ0IsQ0FjNUI7SUFBRCx1QkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9tb2RlbHMvdGFzayc7XG5pbXBvcnQgeyBQcm9qZWN0Um9sZSB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0LXJvbGUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0YXNrQXNzaWduZWVGaWx0ZXInLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUYXNrQXNzaWduZWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHByb2plY3RSb2xlczogUHJvamVjdFJvbGVbXSwgdGFzazogVGFzayk6IGFueSB7XG4gICAgcmV0dXJuIHByb2plY3RSb2xlcy5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICBmb3IobGV0IHVzZXIgb2YgdGFzay5Vc2Vycykge1xuICAgICAgICBpZihlbC5Vc2VySUQgPT09IHVzZXIuSWQpXG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbDtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=