import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  apiUrl: string = 'http://localhost:4000/api/boxs';
  constructor(private http: HttpClient) {}
  public getBoxs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
