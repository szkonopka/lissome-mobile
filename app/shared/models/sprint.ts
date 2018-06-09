import { Resource } from "./resource";
import { Task } from "./task";

export class Sprint extends Resource {
    StartDate: Date;
    EndDate: Date;
    Name: string;
    Project: number;
    Description: string;
    ActiveTasks: Task[] = [];
    SprintPoints: number = 0;
    Progress: number = 0;

    updateProgres() {
        let parsedEndDate = new Date(this.EndDate).getTime();
        let parsedStartDate = new Date(this.StartDate).getTime();
        let now = Date.now();
        this.Progress = (now - parsedStartDate) / (parsedEndDate - parsedStartDate) * 100;
    }
}
