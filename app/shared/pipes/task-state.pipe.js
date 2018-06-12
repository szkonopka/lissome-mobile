"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskStatePipe = /** @class */ (function () {
    function TaskStatePipe() {
    }
    TaskStatePipe.prototype.transform = function (tasks, stateID) {
        return tasks.filter(function (task) { return task.State === stateID; });
    };
    TaskStatePipe = __decorate([
        core_1.Pipe({
            name: 'taskStateFilter',
            pure: false
        })
    ], TaskStatePipe);
    return TaskStatePipe;
}());
exports.TaskStatePipe = TaskStatePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zdGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay1zdGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBT3BEO0lBQUE7SUFJQSxDQUFDO0lBSEMsaUNBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxPQUFlO1FBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBSFUsYUFBYTtRQUp6QixXQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQztPQUNXLGFBQWEsQ0FJekI7SUFBRCxvQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0YXNrU3RhdGVGaWx0ZXInLFxyXG4gIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYXNrU3RhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHRhc2tzOiBUYXNrW10sIHN0YXRlSUQ6IG51bWJlcik6IFRhc2tbXSB7XHJcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5TdGF0ZSA9PT0gc3RhdGVJRCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==