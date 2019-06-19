import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { EnvServiceProvider } from './env.service.provider';
import { GetWeatherApiService } from './get-weather-api.service';
import { InputSearchComponent } from './input-search/input-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EnvServiceProvider,
    GetWeatherApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
