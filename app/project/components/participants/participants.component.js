"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_project_service_1 = require("../../../shared/services/data-project.service");
var ParticipantsComponent = /** @class */ (function () {
    function ParticipantsComponent(dataProjectService) {
        this.dataProjectService = dataProjectService;
    }
    ParticipantsComponent.prototype.ngOnInit = function () {
    };
    ParticipantsComponent = __decorate([
        core_1.Component({
            selector: "ns-participants",
            moduleId: __filename,
            templateUrl: "./participants.component.html",
            styleUrls: ["./participants.component.css"]
        }),
        __metadata("design:paramtypes", [data_project_service_1.DataProjectService])
    ], ParticipantsComponent);
    return ParticipantsComponent;
}());
exports.ParticipantsComponent = ParticipantsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljaXBhbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcnRpY2lwYW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0ZBQW1GO0FBU25GO0lBQ0ksK0JBQ1ksa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFHbEQsQ0FBQztJQUNELHdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBUlEscUJBQXFCO1FBUGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzt5Q0FJa0MseUNBQWtCO09BRnpDLHFCQUFxQixDQVNqQztJQUFELDRCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhUHJvamVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEtcHJvamVjdC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXBhcnRpY2lwYW50c1wiLFxyXG4gICAgbW9kdWxlSWQ6IF9fZmlsZW5hbWUsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhcnRpY2lwYW50cy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhcnRpY2lwYW50cy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljaXBhbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVByb2plY3RTZXJ2aWNlOiBEYXRhUHJvamVjdFNlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSJdfQ==