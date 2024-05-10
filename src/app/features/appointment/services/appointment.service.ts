import { Injectable } from '@angular/core';
import { AddAppointmentRequest } from '../models/add-appointment-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  addAppointment(model: AddAppointmentRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7274/api/appointments', model);
  }

  getAllAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>('https://localhost:7274/api/appointments');
  }
}
