import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IGenericOperations } from '../generic/igeneric-operations';
import { Films } from './films';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class FilmsService implements IGenericOperations<Films, number> {

  endpoint = environment.URL_API+"films";

  constructor(private http : HttpClient) {
    console.log("Injeção de dependência HttpClient");
   }

  post(data: Films) {
    console.log("Entrou dentro do serviço FilmeService - método POST");
    this.http.post(this.endpoint, data);
  }
  put(id?: number, data?: Films) {
    console.log("Entrou dentro do serviço FilmeService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  patch(id?: number, data?: Films) {
    console.log("Entrou dentro do serviço FilmeService - método PATCH");
    this.http.patch(this.endpoint+"/"+id, data);
  }
  get(): Observable<IGenericResource<Films>> {
    console.log("Entrou dentro do serviço FilmeService - método GET");
    return this.http.get<IGenericResource<Films>>(this.endpoint);
  }
  getById(id?: number): Observable<Films> {
    console.log("Entrou dentro do serviço FilmeService - método GET/:ID");
    return this.http.get<Films>(this.endpoint+"/"+id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço FilmeService - método DELETE");
    this.http.delete(this.endpoint+"/"+id);
  }
}
