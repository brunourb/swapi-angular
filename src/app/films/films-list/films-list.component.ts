import { Component, OnInit } from '@angular/core';
import {Injectable, PipeTransform} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';

import { FilmsService } from '../films.service';
import { Films } from '../films';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  
  films: Films[];

  //Injeção de dependência do serviço no componente
  constructor(private service : FilmsService) { }

  ngOnInit() {
    this.getAll();
  }

  //Método que vai assinar (subscribe) a consulta
  //quando houver resultado os dados serao armazenas num array
  getAll(){
    this.service.get().subscribe(
      resultado => this.films = resultado.results,
      error => /* Tratamos erros aqui :) */console.log(error));
  }

}
