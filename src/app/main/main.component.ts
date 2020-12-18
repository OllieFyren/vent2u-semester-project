import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { VentService } from '../vent.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  disMood: any;
  disVent: any;
  disTemp: any;
  disHum: any;
  disFan: any;
  room_id_check: any;
  connection_info: any;
  connection_id: any;
  constructor(private ventService:VentService, public globals:Globals, private router:Router) {
    window.addEventListener("beforeunload", (event) => {
      this.disconnect(globals.connection_id);
   });
    if(globals.humidity < 50){
      this.disHum = 'Low';
    } else if ( globals.humidity < 70) {
      this.disHum = 'Normal';
    } else {
      this.disHum = 'High';
    }
    this.disVent = globals.vent_id;
    this.disTemp = globals.temperature;
    this.disFan = globals.fan_speed;
    this.room_id_check = globals.room_id;
    this.disMood = globals.mood;
   }
   connect(input){
    const data = {
      connection_id: '',
      vent_id: input
    }
    this.ventService.createConnection(data)
    .subscribe(
      response => {
        console.log(response);
        this.connection_info = response;
        this.globals.connection_id = this.connection_info.connection_id;
        this.connection_id = this.connection_info.connection_id;
      },
      error => {
        console.log(error);
      });
  }
  disconnect(input){
    this.ventService.removeConnection(input)
    .subscribe(
      response => {
        console.log(response);
        this.globals.connection_id = 0;
      },
      error => {
        console.log(error);
      });
  }
  ngOnInit(): void {
    if (this.room_id_check == 0)
    {
      this.router.navigate(['/']);
    };
    if (this.globals.connection_id == 0)
    {
      this.connect(this.disVent)
    }
  }

}
