import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://vent2u-node-server.herokuapp.com/api/vent';
const connectionUrl = 'https://vent2u-node-server.herokuapp.com/api/vent/find/connections';
const moodUrl = 'https://vent2u-node-server.herokuapp.com/api/vent/mood/';

@Injectable({
  providedIn: 'root'
})
export class VentService {

  constructor(private http: HttpClient) { }
  findAll(input) {
    return this.http.get(`${baseUrl}/${input}`)
  }
  findVent(room_id, code) {
    return this.http.get(`${baseUrl}/${room_id}/${code}`)
  }
  createConnection(Connection) {
    return this.http.post(baseUrl, Connection)
  }
  removeConnection(connection_id) {
    return this.http.delete(`${baseUrl}/${connection_id}`)
  }
  findActiveConnections(vent_id) {
    return this.http.get(`${connectionUrl}/${vent_id}`)
  }
  moodChange(moodChange) {
    return this.http.post(moodUrl, moodChange)
  }
}
