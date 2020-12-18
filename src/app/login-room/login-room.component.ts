import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../models/weatherData.model'
import { VentService } from '../vent.service';
import {Globals} from '../globals';

@Component({
  selector: 'app-login-room',
  templateUrl: './login-room.component.html',
  styleUrls: ['./login-room.component.scss']
})
export class LoginRoomComponent implements OnInit {
  weatherDetails: WeatherData = new WeatherData();
  searchControl: FormControl;
  success = false;
  room_details: any;
  room_details_array: any;
  isLoading = false;
  temp: any;
  temp_slice: any;
  constructor(private weatherService:WeatherService, private ventService:VentService, globals:Globals) {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges
    .pipe(filter(text => text.length >= 3), debounceTime(400), distinctUntilChanged())
    .subscribe(input => {
      console.log(input);
      this.isLoading = true;
      this.ventService.findAll(input)
      .subscribe(
        (data: any) => {
          this.room_details = data;
          this.isLoading = false;
          this.room_details_array = this.room_details[0];
          globals.room_id = this.room_details_array.room_id;
          console.log(globals.room_id);
          if(data && data.length > 0){
            this.success = true;
          }
        },
        error => {
          this.isLoading = false;
          console.log(error);
        }
      )
      })
    };

  ngOnInit(): void {
    this.getCurrentWeather()
  }
  getCurrentWeather(){
    this.weatherService.getCurrentWeather().subscribe(
      res=> {
        this.weatherDetails.cityName = res.name;
         this.weatherDetails.description = res.weather[0].description;
         this.weatherDetails.currentTemperature=   res.main.temp;
         this.weatherDetails.icon = res.weather[0].icon;
         this.weatherDetails.maxTemperature=res.main.temp_max;
         this.weatherDetails.minTemperature = res.main.temp_min;
      }
    )
  }
}
