import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { IGenericOperations } from '../generic/igeneric-operations';
import { Species } from './species';
import { Observable } from 'rxjs';
import { IGenericResource } from '../generic/igeneric-resource';


@Injectable({
  providedIn: 'root'
})
export class SpeciesService implements IGenericOperations<Species, number>{
  
  endpoint = environment.URL_API+"species";

  constructor(private http : HttpClient) {
    console.log("Injeção de dependência HttpClient");
   }
  
  post(data: Species) {
    console.log("Entrou dentro do serviço SpeciesService - método POST");
    this.http.post(this.endpoint,data);
  }
  put(id? : number, data?: Species) {
    console.log("Entrou dentro do serviço SpeciesService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  patch(id? : number, data?: Species) {
    console.log("Entrou dentro do serviço SpeciesService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  get(): Observable<IGenericResource<Species>> {
    console.log("Entrou dentro do serviço SpeciesService - método GET");
    return this.http.get<IGenericResource<Species>>(this.endpoint);
  }
  getById(id?: number): Observable<Species> {
    console.log("Entrou dentro do serviço SpeciesService - método GET/:ID");
    return this.http.get<Species>(this.endpoint+"/"+id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço SpeciesService - método DELETE");
    this.http.delete(this.endpoint+"/"+id);
  }
}
