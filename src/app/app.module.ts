import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ServiceDemoService } from './service-demo.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceDemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
