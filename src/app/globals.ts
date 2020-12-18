import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    room_id: any = 0;
    vent_id: any = 0;
    temperature: any = 0;
    humidity: any = 0;
    fan_speed: any = 0;
    mood: any = 'good';
    connection_id: any = 0;
}