import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { City } from './weather/city.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherApiService {

  city: City;
  private citySource = new BehaviorSubject<City>(this.city);
  currentCity = this.citySource.asObservable();

  constructor(private env: EnvService, private http: HttpClient) {
    this.changeCity('Budapest');
  }

  changeCity(cityName: string): any {
    const url = `${this.env.apiURL}weather?q=${cityName}&appid=${this.env.apiKey}`;
    this.http.get(url).subscribe(response => {
      const temperatureInCelcius = Math.round(response['main'].temp - 273.15);
      this.citySource.next(new City(response['name'], response['sys'].country, temperatureInCelcius, response['weather'][0].icon));
    });
  }
}
