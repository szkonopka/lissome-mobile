import { Injectable } from '@angular/core';

@Injectable()
export class ComponentSwitcherService {
  private loginVisibility = false;
  private registrationVisibility = false;

  constructor() { }

  setLoginVisibility() {
    this.loginVisibility = !this.loginVisibility;
  }

  getLoginVisibility() {
    return this.loginVisibility;
  }

}
