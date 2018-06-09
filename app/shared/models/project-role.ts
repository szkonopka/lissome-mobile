import { Resource } from "./resource";
import { User } from "./user";
import { Role } from "./Role";

export class ProjectRole extends Resource {
    UserID: number;
    Project: number;
    Role: number;
    IsActive: boolean;
    User: User;
    RoleObject: Role;
}