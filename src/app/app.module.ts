import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './moduls/mat/mat.module';
import { C1Component } from './comps/c1/c1.component';
import { C2Component } from './comps/c2/c2.component';
import { C3Component } from './comps/c3/c3.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { C4Component } from './comps/c4/c4.component';
import { C5Component } from './comps/c5/c5.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'he-IL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
