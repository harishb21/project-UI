
import { Notes } from '../../model/notes.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { User } from 'src/app/model/user.model';


@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  private baseurl: string;
  constructor(private http:HttpClient) { 
    this.baseurl = 'http://localhost:8084/';
  }

  getAllPhycision(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseurl}inbox/physicians`);
  }
  saveNotes(notes:Notes):Observable<Notes>{
    console.log(notes)
      return this.http.post<Notes>(`${this.baseurl}inbox/notes`,notes);
  }
 getRecievedNotes(userId:number){
  return this.http.get<Notes[]>(`${this.baseurl}inbox/notes/recieved/${userId}`);
 }
}
