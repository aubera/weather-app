import { Component, OnInit } from '@angular/core';
import { GetWeatherApiService } from '../get-weather-api.service';
import { Forecast } from './forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forecast: Forecast;

  constructor(private weatherApiService: GetWeatherApiService) { }

  ngOnInit() {
    this.weatherApiService.currentForecast.subscribe(forecast => this.forecast = forecast);
    console.log(this.forecast);
  }

}
