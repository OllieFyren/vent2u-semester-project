import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginVentComponent } from './login-vent/login-vent.component';
import { LoginRoomComponent } from './login-room/login-room.component';
import { MainComponent } from './main/main.component';
import { MoodComponent } from './mood/mood.component';
import { ChangeVentComponent } from './change-vent/change-vent.component'
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: LoginRoomComponent},
    {path: 'Vent', component: LoginVentComponent},
    {path: 'Main', component: MainComponent},
    {path: 'Mood', component: MoodComponent},
    {path: 'Change', component: ChangeVentComponent},
    {path: 'Quiz', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
