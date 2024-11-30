import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Password } from 'primeng/password';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Url de API almacenada de forma privada
  apiUrl = 'https://localhost:7180/api/Users'

  constructor(private http: HttpClient){}

  //  Observable es un objeto que represnta un flujo de datos que se puede manejar de forma asincrona
  //  Los observables son parte de la biblioteca rxjs (reactive extensions for javascript)
  //  y se utilizan principalmente para manejar eventos o flujos de datos que pueden ocurrir en el futuro
  //  como respuestas de peticiones HTTP, eventos del usuario - se

  login(username: string, password: string): Observable<any> {
    const body = {username, password};
    // return this.http.post(this.apiUrl, {username, password});
    //post hace un envio
    return this.http.post(`${this.apiUrl}/login`, {username, password});
  }

  register(username: string, password: string): Observable<any> {
    const body = {username, password};
    return this.http.post(`${this.apiUrl}/register`, {username, password});
  }

  updateUser(id: string, username: string, password: string): Observable<any> {
    const body = {username, password};
    return this.http.put(`${this.apiUrl}/update/${id}`,body)
  }

  deleteUser(id: string): Observable<any> {
    const body = {id};
    return this.http.post(`${this.apiUrl}/delete/${id}`, body)
  }

}
