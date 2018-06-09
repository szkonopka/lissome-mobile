import { Resource } from "./resource";
import { User } from "./user";

export class Task extends Resource {
    Id: number;
    Name: string;
    Description: string;
    CreatedBy: number;
    Deadline: Date;
    Sprint: number;
    State: number;
    ProductivityPoints: number;
    Project: number;
    CreatedOn: Date;
    Users: User[] = [];
}
