import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {

  
  constructor() { }

  getEmployees(){
    return [{"name":"sachin","age":"23"},{"name":"ani","age":"23"},{"name":"shalini","age":"21"},{"name":"gazi","age":"23"}]
  }
}
