import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
 declarations: [],
 imports: [
 CommonModule,
 NgbModule,
 AccordionModule.forRoot(),
 BsDatepickerModule.forRoot(),
 AlertModule.forRoot()
 ],
 exports:[AccordionModule, BsDatepickerModule, AlertModule, BrowserAnimationsModule, NgbModule]
})
export class NgxBootstrapModule { }