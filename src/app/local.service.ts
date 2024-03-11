import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  
  public GetLocalStorage() {
    return localStorage.getItem; 
  }
  public SetLocalStorage(name: string, items:any) {
    localStorage.setItem(name, JSON.stringify(items)); 
  }
}
