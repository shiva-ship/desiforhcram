import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  public login(username:string, password:string){
    const headers = new HttpHeaders()
   return  this.http.get("http://localhost:8080/login",{headers});
  }
}
