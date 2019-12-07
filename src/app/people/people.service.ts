import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { IGenericOperations } from '../generic/igeneric-operations';
import { People } from './people';
import { Observable } from 'rxjs';
import { IGenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements IGenericOperations<People, number> {

  endpoint = environment.URL_API+"people";

  constructor(private http : HttpClient) {
    console.log("Injeção de dependência HttpClient");
   }

  post(data: People) {
    console.log("Entrou dentro do serviço PeopleService - método POST");
    this.http.post(this.endpoint,data);
  }
  put(id? : number, data?: People) {
    console.log("Entrou dentro do serviço PeopleService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  patch(id? : number, data?: People) {
    console.log("Entrou dentro do serviço PeopleService - método PATCH");
    this.http.patch(this.endpoint+"/"+id, data);
  }
  get(): Observable<IGenericResource<People>> {
    console.log("Entrou dentro do serviço PeopleService - método GET");
    return this.http.get<IGenericResource<People>>(this.endpoint);
  }
  getById(id?: number): Observable<People> {
    console.log("Entrou dentro do serviço PeopleService - método GET/:ID");
    return this.http.get<People>(this.endpoint+"/"+id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço PeopleService - método DELETE");
    this.http.delete(this.endpoint+"/"+id);
  }
}
