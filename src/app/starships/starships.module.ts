import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, GenericModule, HttpClientModule
  ]
})
export class StarshipsModule { }
