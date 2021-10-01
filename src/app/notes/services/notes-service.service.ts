import { Notes } from './../model/notes.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from '../model/Staff.model';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  private baseurl: string;
  constructor(private http:HttpClient) { 
    this.baseurl = 'http://localhost:8084/';
  }

  getAllPhycision(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.baseurl}inbox/physicians`);
  }
  saveNotes(notes:Notes):Observable<Notes>{
    console.log(notes)
      return this.http.post<Notes>(`${this.baseurl}inbox/notes`,notes);
  }
  getNotes(userId: Number,
     filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3):  Observable<Notes[]> {

    return this.http.get(`${this.baseurl}inbox/notes/usernotes/${userId}`,  {
        params: new HttpParams()
            
            .set('filter', filter)
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    }).pipe(
      map((res: any) =>  res["payload"])
    );
}

}
