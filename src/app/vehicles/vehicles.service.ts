import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Vehicles } from './vehicles';
import { Igeneric } from '../generic/igeneric';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService implements Igeneric<Vehicles, number> {

  endpoint = environment.URL_API+"vehicles";

  constructor(private http : HttpClient) {
    console.log("Injeção de dependência HttpClient");
   }
  
  post(data: Vehicles) {
    console.log("Entrou dentro do serviço VehiclesService - método POST");
    this.http.post(this.endpoint,data);
  }
  put(id? : number, data?: Vehicles) {
    console.log("Entrou dentro do serviço VehiclesService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  patch(id? : number, data?: Vehicles) {
    console.log("Entrou dentro do serviço VehiclesService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  get(): Observable<Vehicles[]> {
    console.log("Entrou dentro do serviço VehiclesService - método GET");
    return this.http.get<Vehicles[]>(this.endpoint);
  }
  getById(id?: number): Observable<Vehicles> {
    console.log("Entrou dentro do serviço VehiclesService - método GET/:ID");
    return this.http.get<Vehicles>(this.endpoint+"/"+id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço VehiclesService - método DELETE");
    this.http.delete(this.endpoint+"/"+id);
  }
}
