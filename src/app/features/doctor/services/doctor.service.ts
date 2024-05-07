import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddDoctorRequest } from '../models/add-doctor-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  addDoctor(model: AddDoctorRequest): Observable<void>{
    return this.http.post<void>('https://localhost:7274/api/doctors', model);
  }
}
