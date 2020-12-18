import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { VentService } from '../vent.service';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {
  vent_id: any;
  connection_id: any;
  length: any;
  mood: any;
  constructor(private ventService:VentService,public globals:Globals) {
    window.addEventListener("beforeunload", (event) => {
      this.disconnect(globals.connection_id);
    });
    this.vent_id = globals.vent_id;
    this.connection_id = globals.connection_id;
   }
  findConnections(input){
    this.ventService.findActiveConnections(input)
    .subscribe(
      (response: any) => {
        this.length = response.length;
        console.log(this.length);
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
  moodNew(input){
    const data = {
      vent: this.vent_id,
      connections: this.length,
      mood: input
    }
    if(input == this.globals.mood){
      console.log('Same mood chosen')
    } else {
    this.ventService.moodChange(data)
    .subscribe (
      response => {
        console.log(response);
        this.globals.mood = input;
      },
      error => {
        console.log(error);
      });
    };
  }

  ngOnInit(): void {
    console.log(this.vent_id)
    this.findConnections(this.vent_id)
  } 

}
