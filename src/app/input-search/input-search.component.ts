import { Component } from '@angular/core';
import { GetWeatherApiService } from '../get-weather-api.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {

  cityName: string;

  constructor(private weatherApiService: GetWeatherApiService) {
  }

  search() {
    this.weatherApiService.changeCity(this.cityName);
    this.cityName = '';
  }

}
