import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http:HttpClient) { }
  data(page=1){
    return this.Http.get('https://randomuser.me/api/?results=10&page='+page);
  }
}
