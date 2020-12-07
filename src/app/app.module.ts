import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing.module'

import { AppComponent } from './app.component';
import { LoginRoomComponent } from './login-room/login-room.component';
import { LoginVentComponent } from './login-vent/login-vent.component';
import { MainComponent } from './main/main.component';
import { MoodComponent } from './mood/mood.component';
import { InformationComponent } from './information/information.component';
import { ChangeVentComponent } from './change-vent/change-vent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRoomComponent,
    LoginVentComponent,
    MainComponent,
    MoodComponent,
    InformationComponent,
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
