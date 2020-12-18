import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing.module'

import { AppComponent } from './app.component';
import { LoginRoomComponent } from './login-room/login-room.component';
import { LoginVentComponent } from './login-vent/login-vent.component';
import { MainComponent } from './main/main.component';
import { MoodComponent } from './mood/mood.component';
import { ChangeVentComponent } from './change-vent/change-vent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { Globals } from './globals'


@NgModule({
  declarations: [
    AppComponent,
    LoginRoomComponent,
    LoginVentComponent,
    MainComponent,
    MoodComponent,
    ChangeVentComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
