import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from "./components/components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from "./layout/layout.module";
import { NgxMaskModule, IConfig } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
