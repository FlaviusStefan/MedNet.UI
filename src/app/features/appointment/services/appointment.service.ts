import { Injectable } from '@angular/core';
import { AddAppointmentRequest } from '../models/add-appointment-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment.model';
import { environment } from 'src/environments/environment.development';
import { UpdateAppointmentRequest } from '../models/update-appointment-request.model';

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

  getAppointmentById(id: string): Observable<Appointment> {
    return this.http.get<Appointment>(`${environment.apiBaseUrl}/api/appointments/${id}`);
  }

  updateAppointment(id: string, updateAppointmentRequest: UpdateAppointmentRequest): Observable<Appointment> {
    return this.http.put<Appointment>(`${environment.apiBaseUrl}/api/appointments/${id}`, updateAppointmentRequest);
  }

  deleteAppointment(id: string): Observable<Appointment> {
    return this.http.delete<Appointment>(`${environment.apiBaseUrl}/api/appointments/${id}`);
  }
}
