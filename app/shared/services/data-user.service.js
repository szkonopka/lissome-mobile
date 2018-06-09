"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var DataUserService = /** @class */ (function () {
    function DataUserService() {
    }
    DataUserService.prototype.getUsername = function () {
        return JSON.parse(appSettings.getString('currentUser')).username;
    };
    DataUserService.prototype.getEmail = function () {
        return JSON.parse(appSettings.getString('currentUser')).email;
    };
    DataUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataUserService);
    return DataUserService;
}());
exports.DataUserService = DataUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS11c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLXVzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxrREFBb0Q7QUFHcEQ7SUFFSTtJQUFnQixDQUFDO0lBRVYscUNBQVcsR0FBbEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3JFLENBQUM7SUFFTSxrQ0FBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsRSxDQUFDO0lBVlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0FXM0I7SUFBRCxzQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFVc2VyU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VXNlcm5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2N1cnJlbnRVc2VyJykpLnVzZXJuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFbWFpbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZygnY3VycmVudFVzZXInKSkuZW1haWw7XHJcbiAgICB9XHJcbn0iXX0=