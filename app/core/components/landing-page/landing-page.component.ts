import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { UserService } from "../../services/user.service";
import * as appSettings from 'application-settings';

@Component({
    selector: "ns-landing-page",
    moduleId: __filename,
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {

    private model: any = {};
    private returnUrl: string;
    private isLoggingIn: boolean = true;

    constructor(
        private page: Page,
        private authenticationService: AuthenticationService,
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService

    ) {
        this.page.actionBarHidden = true;
     }

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/main';
    }

    submit(): void {
        if(this.isLoggingIn)
            this.login();
        else
            this.register();
    }

    private login() {
        this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                alert("Zalogowałeś się pomyślnie.");
                this.router.navigate([this.returnUrl]);
            },
            error => {
                alert("Coś poszło nie tak!");
            }       
        );
    }

    private register() {
        this.userService.create(this.model)
        .subscribe(
            data => {
                alert("Sukces w rejestracji.");
            },
            error => {
                alert("Nie udalo sie.");
            }
        )
    }

    toggleForm(): void {
        for(let member in this.model) delete this.model[member];

        this.isLoggingIn = !this.isLoggingIn;
    }
}
