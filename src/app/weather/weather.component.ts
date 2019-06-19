import { Component, OnInit } from '@angular/core';
import { GetWeatherApiService } from '../get-weather-api.service';
import { City } from './city.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city: City;

  constructor(private weatherApiService: GetWeatherApiService) { }

  ngOnInit() {
    this.weatherApiService.currentCity.subscribe(city => this.city = city);
  }

}
