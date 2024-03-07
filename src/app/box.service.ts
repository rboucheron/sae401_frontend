import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  apiUrl: string = 'http://localhost:3000/api/boxs'; // Ajout du protocole HTTP

  constructor(private http: HttpClient) {}

  public getBoxs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
