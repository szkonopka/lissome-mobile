"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_project_service_1 = require("../../../shared/services/data-project.service");
var BacklogComponent = /** @class */ (function () {
    function BacklogComponent(dataProjectService) {
        this.dataProjectService = dataProjectService;
    }
    BacklogComponent.prototype.ngOnInit = function () {
    };
    BacklogComponent = __decorate([
        core_1.Component({
            selector: "ns-backlog",
            moduleId: __filename,
            templateUrl: "backlog.component.html",
            styleUrls: ['./backlog.component.css']
        }),
        __metadata("design:paramtypes", [data_project_service_1.DataProjectService])
    ], BacklogComponent);
    return BacklogComponent;
}());
exports.BacklogComponent = BacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzRkFBbUY7QUFTbkY7SUFFSSwwQkFDWSxrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM5QyxDQUFDO0lBRUwsbUNBQVEsR0FBUjtJQUVBLENBQUM7SUFSUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzt5Q0FLa0MseUNBQWtCO09BSHpDLGdCQUFnQixDQVUzQjtJQUFELHVCQUFDO0NBQUEsQUFWRixJQVVFO0FBVlcsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhUHJvamVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEtcHJvamVjdC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWJhY2tsb2dcIixcclxuICAgIG1vZHVsZUlkOiBfX2ZpbGVuYW1lLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYmFja2xvZy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYmFja2xvZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhUHJvamVjdFNlcnZpY2U6IERhdGFQcm9qZWN0U2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiB9XHJcbiJdfQ==