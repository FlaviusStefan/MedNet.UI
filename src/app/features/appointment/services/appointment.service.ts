import { Injectable } from '@angular/core';
import { AddAppointmentRequest } from '../models/add-appointment-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddAppointmentRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7274/api/appointments', model);
  }
}
