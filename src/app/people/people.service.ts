import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Igeneric } from '../generic/igeneric';
import { People } from './people';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements Igeneric<People, number> {

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
  get(): Observable<People[]> {
    console.log("Entrou dentro do serviço PeopleService - método GET");
    return this.http.get<People[]>(this.endpoint);
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
