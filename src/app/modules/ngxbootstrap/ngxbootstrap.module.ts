import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
 declarations: [],
 imports: [
 CommonModule,
 AccordionModule.forRoot(),
 BsDatepickerModule.forRoot(),
 AlertModule.forRoot()
 ],
 exports:[AccordionModule, BsDatepickerModule, AlertModule, BrowserAnimationsModule]
})
export class NgxBootstrapModule { }