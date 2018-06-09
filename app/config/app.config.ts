import { Injectable } from "@angular/core"

@Injectable()
export class Configuration {
	public readonly ServerUrl: string = "http://10.0.2.2:5000";
}
