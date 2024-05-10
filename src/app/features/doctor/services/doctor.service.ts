import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddDoctorRequest } from '../models/add-doctor-request.model';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  addDoctor(model: AddDoctorRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/doctors`, model);
  }

  getAllDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${environment.apiBaseUrl}/api/doctors`);
  }
}
