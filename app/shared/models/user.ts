import { Resource } from "./resource";

export class User extends Resource {
    Username: string;
    Email: string;
    Name: string = '';
    Surname: string = '';
}
