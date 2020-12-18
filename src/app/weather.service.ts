import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getCurrentWeather(): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=roskilde&units=metric&appid=a5f95cda4d2187a04e0d85aaea5320b9`)
  }
}