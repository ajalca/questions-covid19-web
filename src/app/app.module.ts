import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { GraphicsComponent } from './graphics/graphics.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
