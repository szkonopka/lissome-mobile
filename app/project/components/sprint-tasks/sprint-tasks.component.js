"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_project_service_1 = require("../../../shared/services/data-project.service");
var SprintTasksComponent = /** @class */ (function () {
    function SprintTasksComponent(dataProjectService) {
        this.dataProjectService = dataProjectService;
    }
    SprintTasksComponent.prototype.ngOnInit = function () {
    };
    SprintTasksComponent = __decorate([
        core_1.Component({
            selector: 'ns-sprint-tasks',
            moduleId: __filename,
            templateUrl: './sprint-tasks.component.html',
            styleUrls: ['./sprint-tasks.component.css']
        }),
        __metadata("design:paramtypes", [data_project_service_1.DataProjectService])
    ], SprintTasksComponent);
    return SprintTasksComponent;
}());
exports.SprintTasksComponent = SprintTasksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByaW50LXRhc2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwcmludC10YXNrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0ZBQW1GO0FBU25GO0lBQ0ksOEJBQ1ksa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFHbEQsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFFQSxDQUFDO0lBVFEsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzt5Q0FJa0MseUNBQWtCO09BRnpDLG9CQUFvQixDQVVoQztJQUFELDJCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEtcHJvamVjdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1zcHJpbnQtdGFza3MnLFxyXG4gICAgbW9kdWxlSWQ6IF9fZmlsZW5hbWUsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3ByaW50LXRhc2tzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3NwcmludC10YXNrcy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpbnRUYXNrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFQcm9qZWN0U2VydmljZTogRGF0YVByb2plY3RTZXJ2aWNlXHJcbiAgICApIHsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19