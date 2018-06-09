"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_config_1 = require("../../config/app.config");
var ResourceService = /** @class */ (function () {
    function ResourceService(endpoint, configuration, http, serializer) {
        this.endpoint = endpoint;
        this.configuration = configuration;
        this.http = http;
        this.serializer = serializer;
    }
    ResourceService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.configuration.ServerUrl + "/" + this.endpoint + "/create", this.serializer.toJson(item))
            .map(function (response) { return _this.serializer.fromJson(response.json()); });
    };
    ResourceService.prototype.getAll = function (userID) {
        var _this = this;
        var url;
        if (userID === null) {
            url = this.configuration.ServerUrl + "/" + this.endpoint;
        }
        else {
            url = this.configuration.ServerUrl + "/" + this.endpoint + "/" + userID;
        }
        return this.http.get(url)
            .map(function (response) { return _this.convertData(response.json()); });
    };
    ResourceService.prototype.getOne = function (resourceID) {
        var _this = this;
        return this.http.get(this.configuration.ServerUrl + "/" + this.endpoint + "/" + resourceID)
            .map(function (response) { return _this.serializer.fromJson(response.json()); });
    };
    ResourceService.prototype.get = function (userID, resourceID) {
        var _this = this;
        return this.http.get(this.configuration.ServerUrl + "/" + this.endpoint + "/" + userID + "/" + resourceID)
            .map(function (response) { return _this.serializer.fromJson(response.json()); });
    };
    ResourceService.prototype.delete = function (resourceID) {
        return this.http.delete(this.configuration.ServerUrl + "/" + this.endpoint + "/delete/" + resourceID);
    };
    ResourceService.prototype.update = function (item) {
        var _this = this;
        return this.http.put(this.configuration.ServerUrl + "/" + this.endpoint + "/update", this.serializer.toJson(item))
            .map(function (response) { return _this.serializer.fromJson(response.json()); });
    };
    ResourceService.prototype.convertData = function (data) {
        var _this = this;
        return data.map(function (item) { return _this.serializer.fromJson(item); });
    };
    ResourceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [String, app_config_1.Configuration,
            http_1.Http, Object])
    ], ResourceService);
    return ResourceService;
}());
exports.ResourceService = ResourceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc291cmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0Msc0NBQStDO0FBQy9DLHNEQUF3RDtBQUt4RDtJQUVFLHlCQUNZLFFBQWdCLEVBQ2hCLGFBQTRCLEVBQzVCLElBQVUsRUFDVixVQUFzQjtRQUh0QixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzlCLENBQUM7SUFFRSxnQ0FBTSxHQUFiLFVBQWMsSUFBTztRQUFyQixpQkFHQztRQUZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxZQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0csR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBTSxFQUE5QyxDQUE4QyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVNLGdDQUFNLEdBQWIsVUFBYyxNQUFjO1FBQTVCLGlCQVVDO1FBVEMsSUFBSSxHQUFHLENBQUM7UUFDUixFQUFFLENBQUEsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQixHQUFHLEdBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVUsQ0FBQztRQUMzRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixHQUFHLEdBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsU0FBSSxNQUFRLENBQUM7UUFDckUsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLFVBQWtCO1FBQWhDLGlCQUdDO1FBRkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLFNBQUksVUFBWSxDQUFDO2FBQ3JGLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQU0sRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFTSw2QkFBRyxHQUFWLFVBQVcsTUFBYyxFQUFFLFVBQWtCO1FBQTdDLGlCQUdDO1FBRkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLFNBQUksTUFBTSxTQUFJLFVBQVksQ0FBQzthQUMvRixHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFNLEVBQTlDLENBQThDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLFVBQWtCO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxnQkFBVyxVQUFZLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLElBQU87UUFBckIsaUJBR0M7UUFGQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsWUFBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVHLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQU0sRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFUyxxQ0FBVyxHQUFyQixVQUFzQixJQUFTO1FBQS9CLGlCQUVDO1FBREMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUEvQ1UsZUFBZTtRQUQzQixpQkFBVSxFQUFFO2lEQUtnQiwwQkFBYTtZQUN0QixXQUFJO09BTFgsZUFBZSxDQWlEM0I7SUFBRCxzQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAuY29uZmlnJztcclxuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL3Jlc291cmNlJztcclxuaW1wb3J0IHsgU2VyaWFsaXplciB9IGZyb20gJy4vaW50ZXJmYWNlcy9zZXJpYWxpemVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlc291cmNlU2VydmljZTxUIGV4dGVuZHMgUmVzb3VyY2U+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgZW5kcG9pbnQ6IHN0cmluZyxcclxuICAgIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uLFxyXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHAsXHJcbiAgICBwcm90ZWN0ZWQgc2VyaWFsaXplcjogU2VyaWFsaXplclxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoaXRlbTogVCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9LyR7dGhpcy5lbmRwb2ludH0vY3JlYXRlYCwgdGhpcy5zZXJpYWxpemVyLnRvSnNvbihpdGVtKSlcclxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5zZXJpYWxpemVyLmZyb21Kc29uKHJlc3BvbnNlLmpzb24oKSkgYXMgVCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QWxsKHVzZXJJRDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUW10+IHtcclxuICAgIGxldCB1cmw7XHJcbiAgICBpZih1c2VySUQgPT09IG51bGwpIHtcclxuICAgICAgdXJsID0gYCR7dGhpcy5jb25maWd1cmF0aW9uLlNlcnZlclVybH0vJHt0aGlzLmVuZHBvaW50fWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSBgJHt0aGlzLmNvbmZpZ3VyYXRpb24uU2VydmVyVXJsfS8ke3RoaXMuZW5kcG9pbnR9LyR7dXNlcklEfWA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5jb252ZXJ0RGF0YShyZXNwb25zZS5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPbmUocmVzb3VyY2VJRDogbnVtYmVyKSA6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uLlNlcnZlclVybH0vJHt0aGlzLmVuZHBvaW50fS8ke3Jlc291cmNlSUR9YClcclxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5zZXJpYWxpemVyLmZyb21Kc29uKHJlc3BvbnNlLmpzb24oKSkgYXMgVCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KHVzZXJJRDogbnVtYmVyLCByZXNvdXJjZUlEOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9LyR7dGhpcy5lbmRwb2ludH0vJHt1c2VySUR9LyR7cmVzb3VyY2VJRH1gKVxyXG4gICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB0aGlzLnNlcmlhbGl6ZXIuZnJvbUpzb24ocmVzcG9uc2UuanNvbigpKSBhcyBUKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGUocmVzb3VyY2VJRDogbnVtYmVyKXtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9LyR7dGhpcy5lbmRwb2ludH0vZGVsZXRlLyR7cmVzb3VyY2VJRH1gKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoaXRlbTogVCkgOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMuY29uZmlndXJhdGlvbi5TZXJ2ZXJVcmx9LyR7dGhpcy5lbmRwb2ludH0vdXBkYXRlYCwgdGhpcy5zZXJpYWxpemVyLnRvSnNvbihpdGVtKSlcclxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdGhpcy5zZXJpYWxpemVyLmZyb21Kc29uKHJlc3BvbnNlLmpzb24oKSkgYXMgVCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY29udmVydERhdGEoZGF0YTogYW55KTogVFtdIHtcclxuICAgIHJldHVybiBkYXRhLm1hcChpdGVtID0+IHRoaXMuc2VyaWFsaXplci5mcm9tSnNvbihpdGVtKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=