import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Servicios
import { MapasService } from './services/mapas.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWIWT5lv80hwskSGgqeoRCHKiR5H43KWk'
    })
  ],
  providers: [
    MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
