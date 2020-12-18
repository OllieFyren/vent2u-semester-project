import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { VentService } from '../vent.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(public ventService: VentService, public globals: Globals) { 
    window.addEventListener("beforeunload", (event) => {
      this.disconnect(globals.connection_id);
    });
  }

  ngOnInit(): void {
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

}
