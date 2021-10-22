import { Notes } from './../../model/notes.model';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import { User } from 'src/app/model/user.model';
import { Email } from 'src/app/model/email.model';


@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  private baseurl: string;
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http:HttpClient) { 
    this.baseurl = 'http://localhost:8084/';
  }

  getAllPhycision(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseurl}inbox/physicians`);
  }
  saveNotes(notes:Notes):Observable<Notes>{
    console.log(notes)
      return this.http.post<Notes>(`${this.baseurl}notes/save`,notes);
  }
 getRecievedNotes(userId:number){
  return this.http.get<Notes[]>(`${this.baseurl}notes/recieved/${userId}`);
 }
 getSentNotes(userId:number){
  return this.http.get<Notes[]>(`${this.baseurl}notes/sent/${userId}`);
 }
 deleteNotes(notesId:number){
return this.http.delete(`${this.baseurl}notes/delete/${notesId}`,{responseType: 'text'});
 }
 sendReply(notes:Notes):Observable<any>{
   return this.http.put(`${this.baseurl}notes/reply/`,notes,{responseType: 'text'});
 }
 getNonReadCount(userId:number):Observable<any>{
   return this.http.get(`${this.baseurl}notes/nonreadcount/${userId}`);
 }
 updateRead(notesId:number):Observable<any>{
   return this.http.put(`${this.baseurl}/notes/updateread/${notesId}`,new Notes());
 }
 sendMail(email:Email){
  return this.http.post<Email>(this.baseurl + 'api/contact', email, this.httpOptions).pipe(
    catchError(this.handleError)
  );
 }
 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {

    // A client-side or network error occurred. Handle it accordingly.

    console.error('An error occurred:', error.error.message);
  } else {

    // The backend returned an unsuccessful response code.

    // The response body may contain clues as to what went wrong.

    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }

  // return an observable with a user-facing error message

  this.errorData = {
    errorTitle: 'Oops! Request for document failed',
    errorDesc: 'Something bad happened. Please try again later.'
  };
  return throwError(this.errorData);
} 
}
