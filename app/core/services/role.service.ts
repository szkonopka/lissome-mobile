import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Configuration } from '../../config/app.config';
import { ProjectRoleSerializer } from './project-role.service';
import { Role } from '../../shared/models/Role';
import { ResourceService } from './resource.service';

@Injectable()
export class RoleService extends ResourceService<Role> {

  constructor(http: Http) { 
    super(
      "role",
      new Configuration(),
      http,
      new RoleSerializer()
    );
  }

}

export class RoleSerializer {
  fromJson(json: any) : Role {
    const role = new Role;
    role.Id = json.id;
    role.Name = json.name;

    return role;
  }

  toJson(role: Role) : any {
    return {
      id: role.Id,
      name: role.Name
    };
  }
}
