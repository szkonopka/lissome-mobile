import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import * as appSettings from 'application-settings';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            //if(localStorage.getItem('currentUser')) {
            if(appSettings.getString('currentUser')) {
                return true;
            }

            this.router.navigate([''], { queryParams: { returnUrl: state.url }});
            return false;
        }
}