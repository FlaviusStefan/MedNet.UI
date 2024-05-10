import { Injectable } from '@angular/core';
import { AddAppointmentRequest } from '../models/add-appointment-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  addAppointment(model: AddAppointmentRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/appointments`, model);
  }

  getAllAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${environment.apiBaseUrl}/api/appointments`);
  }
}
