import { User } from "./user";
import { Task } from './task';
import { Resource } from "./resource";
import { Sprint } from "./sprint";

export class Project extends Resource {
    Name: string;
    Users: User[] = [];
    ActiveTasks: Task[] = [];
    Slug: string;
    Owner: number;
    Description: string;
    StartDate: Date;
    EndDate: Date;
    SprintlessTasks: Task[] = [];
    ActiveSprint: number = null;
    ActiveSprintObject: Sprint = null;
    NumberOfSprints: number = 0;

    addUser(user: User) {
        this.Users.push(user);
    }

    prepareSlug(name: string) : string {
        let slug = name.replace(/ /g, "-");
        encodeURI(slug);
        slug = slug.toLowerCase();
        return slug;
    }
}
