import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Globals } from '../globals';
import { VentService } from '../vent.service'

@Component({
  selector: 'app-login-vent',
  templateUrl: './login-vent.component.html',
  styleUrls: ['./login-vent.component.scss']
})
export class LoginVentComponent implements OnInit {
  searchControl: FormControl;
  isLoading = true;
  digit1 = '';
  digit2 = '';
  digit3 = '';
  code = '';
  vent_details: any;
  vent_details_array: any;
  room_id_check: any;
  success = false;

  constructor(private ventService: VentService, globals:Globals, private router:Router) { 
    this.room_id_check = globals.room_id;
    this.searchControl = new FormControl();
    this.searchControl.valueChanges
    .pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(input => {
      console.log(globals.room_id);
      this.code = this.digit1+this.digit2+this.digit3+input;
      this.isLoading = true
      this.ventService.findVent(globals.room_id, this.code)
      .subscribe(
        (data:any) => {
          this.isLoading = false;
          this.vent_details = data;
          this.vent_details_array = this.vent_details[0];
  
          globals.vent_id = this.vent_details_array.vent_id;
          globals.temperature = this.vent_details_array.temperature;
          globals.humidity = this.vent_details_array.humidity;
          globals.fan_speed = this.vent_details_array.fan_speed;

          console.log(globals.vent_id);
          if(data && data.length > 0){
            this.success = true;
          }
        },
        error => {
          this.isLoading = false;
          console.log(error);
        });
      });
  }
  ngOnInit(): void {
    if (this.room_id_check == 0)
    {
      this.router.navigate(['/']);
    }
  }

}
