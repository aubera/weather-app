import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { City } from './weather/city.model';
import { Forecast } from './forecast/forecast.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherApiService {

  city: City;
  private citySource = new BehaviorSubject<City>(this.city);
  currentCity = this.citySource.asObservable();

  cityForecast: Forecast;
  private forecastSource = new BehaviorSubject<Forecast>(this.cityForecast);
  currentForecast = this.forecastSource.asObservable();

  constructor(private env: EnvService, private http: HttpClient) {
    this.changeCity('Budapest');
  }

  changeCity(cityName: string): any {
    const url = `${this.env.apiURL}weather?q=${cityName}&appid=${this.env.apiKey}`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.env.apiKey}`;
    this.http.get(url).subscribe(response => {
      const temperatureInCelcius = Math.round(response['main'].temp - 273.15);
      this.citySource.next(new City(response['name'], response['sys'].country, temperatureInCelcius, response['weather'][0].icon));
    });
    this.http.get(urlForecast).subscribe(response => {
      let days: any[] = [];
      for (let i = 0; i < 40; i++) {
        let day: any = {};
        day.temperature = Math.round(response['list'][i].main.temp - 273.15);
        day.icon = response['list'][i].weather[0].icon;
        day.description = response['list'][i].weather[0].description;
        days.push(day);
        i += 8;
      }
      this.forecastSource.next(new Forecast(response['city'].name, days));
    });
  }

  // getForecast() {
  //   const cityName = this.currentCity.subscribe(city => {
  //     cityName = city;
  //     console.log(city.name);
  //   });
  //   const url = 'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=' + this.env.apiKey;
  //   this.http.get(url).subscribe(response => {
  //     console.log(response);
  //   });
  // }
}
