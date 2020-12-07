import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-login-vent',
  templateUrl: './login-vent.component.html',
  styleUrls: ['./login-vent.component.scss']
})
export class LoginVentComponent implements OnInit {
  searchControl: FormControl;
  success = false;
  constructor() { 
    this.searchControl = new FormControl();
    this.searchControl.valueChanges
    .pipe(filter(text => text.length >= 1), debounceTime(400), distinctUntilChanged())
    .subscribe(input => {
      console.log(input);
      if(input == "1"){
        this.success = true;
        console.log(this.success)
      }
      else{
        this.success = false;
        console.log(this.success)
      }
      })
  }

  ngOnInit(): void {
  }

}
