import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Igeneric } from '../generic/igeneric';
import { Planets } from './planets';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService implements Igeneric<Planets, number> {

  endpoint = environment.URL_API+"planets";

  constructor(private http : HttpClient) {
    console.log("Injeção de dependência HttpClient");
   }

  post(data: Planets) {
    console.log("Entrou dentro do serviço PlanetsService - método POST");
    this.http.post(this.endpoint,data);
  }
  put(id? : number, data?: Planets) {
    console.log("Entrou dentro do serviço PlanetsService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  patch(id? : number, data?: Planets) {
    console.log("Entrou dentro do serviço PlanetsService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  get(): Observable<Planets[]> {
    console.log("Entrou dentro do serviço PlanetsService - método GET");
    return this.http.get<Planets[]>(this.endpoint);
  }
  getById(id?: number): Observable<Planets> {
    console.log("Entrou dentro do serviço PlanetsService - método GET/:ID");
    return this.http.get<Planets>(this.endpoint+"/"+id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço PlanetsService - método DELETE");
    this.http.delete(this.endpoint+"/"+id);
  }
}
