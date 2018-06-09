"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resource_1 = require("./resource");
var Sprint = /** @class */ (function (_super) {
    __extends(Sprint, _super);
    function Sprint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ActiveTasks = [];
        _this.SprintPoints = 0;
        _this.Progress = 0;
        return _this;
    }
    Sprint.prototype.updateProgres = function () {
        var parsedEndDate = new Date(this.EndDate).getTime();
        var parsedStartDate = new Date(this.StartDate).getTime();
        var now = Date.now();
        this.Progress = (now - parsedStartDate) / (parsedEndDate - parsedStartDate) * 100;
    };
    return Sprint;
}(resource_1.Resource));
exports.Sprint = Sprint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3ByaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXNDO0FBR3RDO0lBQTRCLDBCQUFRO0lBQXBDO1FBQUEscUVBZ0JDO1FBVkcsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUFRekIsQ0FBQztJQU5HLDhCQUFhLEdBQWI7UUFDSSxJQUFJLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckQsSUFBSSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN0RixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFoQkQsQ0FBNEIsbUJBQVEsR0FnQm5DO0FBaEJZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tIFwiLi9yZXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcmludCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIFN0YXJ0RGF0ZTogRGF0ZTtcclxuICAgIEVuZERhdGU6IERhdGU7XHJcbiAgICBOYW1lOiBzdHJpbmc7XHJcbiAgICBQcm9qZWN0OiBudW1iZXI7XHJcbiAgICBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgQWN0aXZlVGFza3M6IFRhc2tbXSA9IFtdO1xyXG4gICAgU3ByaW50UG9pbnRzOiBudW1iZXIgPSAwO1xyXG4gICAgUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAgdXBkYXRlUHJvZ3JlcygpIHtcclxuICAgICAgICBsZXQgcGFyc2VkRW5kRGF0ZSA9IG5ldyBEYXRlKHRoaXMuRW5kRGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBwYXJzZWRTdGFydERhdGUgPSBuZXcgRGF0ZSh0aGlzLlN0YXJ0RGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuUHJvZ3Jlc3MgPSAobm93IC0gcGFyc2VkU3RhcnREYXRlKSAvIChwYXJzZWRFbmREYXRlIC0gcGFyc2VkU3RhcnREYXRlKSAqIDEwMDtcclxuICAgIH1cclxufVxyXG4iXX0=