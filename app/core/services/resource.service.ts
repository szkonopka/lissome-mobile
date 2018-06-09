import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Configuration } from '../../config/app.config';
import { Resource } from '../../shared/models/resource';
import { Serializer } from './interfaces/serializer';

@Injectable()
export class ResourceService<T extends Resource> {

  constructor(
    protected endpoint: string,
    protected configuration: Configuration,
    protected http: Http,
    protected serializer: Serializer
  ) { }

  public create(item: T): Observable<T> {
    return this.http.post(`${this.configuration.ServerUrl}/${this.endpoint}/create`, this.serializer.toJson(item))
    .map((response: Response) => this.serializer.fromJson(response.json()) as T);
  }

  public getAll(userID: number): Observable<T[]> {
    let url;
    if(userID === null) {
      url = `${this.configuration.ServerUrl}/${this.endpoint}`;
    } else {
      url = `${this.configuration.ServerUrl}/${this.endpoint}/${userID}`;
    }
    
    return this.http.get(url)
    .map((response: Response) => this.convertData(response.json()));
  }

  public getOne(resourceID: number) : Observable<T> {
    return this.http.get(`${this.configuration.ServerUrl}/${this.endpoint}/${resourceID}`)
    .map((response: Response) => this.serializer.fromJson(response.json()) as T);
  }

  public get(userID: number, resourceID: number): Observable<T> {
    return this.http.get(`${this.configuration.ServerUrl}/${this.endpoint}/${userID}/${resourceID}`)
    .map((response: Response) => this.serializer.fromJson(response.json()) as T);
  }

  public delete(resourceID: number){
    return this.http.delete(`${this.configuration.ServerUrl}/${this.endpoint}/delete/${resourceID}`);
  }

  public update(item: T) : Observable<T> {
    return this.http.put(`${this.configuration.ServerUrl}/${this.endpoint}/update`, this.serializer.toJson(item))
    .map((response: Response) => this.serializer.fromJson(response.json()) as T);
  }

  protected convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJson(item));
  }

}
