import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FilmsModule } from './films/films.module';
import { NgxBootstrapModule } from './modules/ngxbootstrap/ngxbootstrap.module';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FilmsModule, NgxBootstrapModule, SharedModuleModule
  ],
  //exports: [NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
