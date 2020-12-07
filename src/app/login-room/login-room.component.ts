import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-login-room',
  templateUrl: './login-room.component.html',
  styleUrls: ['./login-room.component.scss']
})
export class LoginRoomComponent implements OnInit {
  searchControl: FormControl;
  success = false;
  constructor() {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges
    .pipe(filter(text => text.length >= 3), debounceTime(400), distinctUntilChanged())
    .subscribe(input => {
      console.log(input);
      if(input == "zea1"){
        this.success = true;
        console.log(this.success)
      }
      else{
        this.success = false;
        console.log(this.success)
      }
      })
    };

  ngOnInit(): void {
  }

}
