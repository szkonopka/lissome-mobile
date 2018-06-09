import { Injectable } from "@angular/core";
import * as appSettings from 'application-settings';

@Injectable()
export class DataUserService {

    constructor() { }

    public getUsername(): string {
        return JSON.parse(appSettings.getString('currentUser')).username;
    }

    public getEmail(): string {
        return JSON.parse(appSettings.getString('currentUser')).email;
    }
}