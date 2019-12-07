import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { FilmsListComponent } from './films-list/films-list.component';
import {NgbModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FilmsListComponent],
  imports: [
    CommonModule, GenericModule, HttpClientModule, BrowserModule, NgbModule
  ],
  exports: [FilmsListComponent]
  //bootstrap: [FilmsListComponent]
})
export class FilmsModule { }
