import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Appointment } from '../model/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  baseAppointmentUrl: string = 'http://localhost:8072'; //visit

  public appointmentId: string;
  public patientId: string ;

  constructor(private http: HttpClient) {
  }

  getAllList() {
    return this.http.get<Appointment[]>(
      this.baseAppointmentUrl + '/api/appointments'
    );
  }

 
}
