import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/types/Users';
import { Observable } from 'rxjs';
import { Bins } from './models/types/Bins';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  readonly BASE_URL: string = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getUsers$(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }

  getBins$(): Observable<Bins[]> {
    return this.http.get<Bins[]>(`${this.BASE_URL}/bins`);
  }

  addUser(newUser: User): Observable<User> {
    //haven't figured out how to send NewUser type as the response will then be expected 
    //to be newUser and then we can't see ID
    console.log("in service, addUser");
    return this.http.post<User>(`${this.BASE_URL}/users`, newUser, this.httpOptions)
  }

  updateUser(updatedUser: User): Observable<User> {
    console.log("in service, updateUser");
    return this.http.put<User>(`${this.BASE_URL}/users/${updatedUser.id}`, updatedUser, this.httpOptions)
  }

  deleteUser(deleteUserId:string){
    console.log("in service, updateUser");
    return this.http.delete<User>(`${this.BASE_URL}/users/${deleteUserId}`, this.httpOptions)
  }

}