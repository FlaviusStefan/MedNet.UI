import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPatientRequest } from '../models/add-patient-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  addPatient(model: AddPatientRequest): Observable<void>{
    return this.http.post<void>('https://localhost:7274/api/patients', model);
  }
}
