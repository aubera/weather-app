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
import { ForecastComponent } from './forecast/forecast.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WrapWeatherInputComponent } from './wrap-weather-input/wrap-weather-input.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    InputSearchComponent,
    ForecastComponent,
    PageNotFoundComponent,
    WrapWeatherInputComponent
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
