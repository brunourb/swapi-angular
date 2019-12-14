import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { FilmsListComponent } from './films-list/films-list.component';
import {NgbModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FilmsDetailComponent } from './films-detail/films-detail.component';

@NgModule({
  declarations: [FilmsListComponent, FilmsDetailComponent],
  imports: [
    CommonModule, GenericModule, HttpClientModule, BrowserModule, NgbModule
  ],
  exports: [FilmsListComponent,FilmsDetailComponent]
  //bootstrap: [FilmsListComponent]
})
export class FilmsModule { }
