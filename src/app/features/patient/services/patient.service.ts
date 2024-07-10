import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPatientRequest } from '../models/add-patient-request.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Patient } from '../models/patient.model';
import { UpdatePatientRequest } from '../models/update-patient-request.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  addPatient(model: AddPatientRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/patients`, model);
  }

  getAllPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${environment.apiBaseUrl}/api/patients`);
  }

  getPatientById(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${environment.apiBaseUrl}/api/patients/${id}`);
  }

  updatePatient(id: string, updatePatientRequest: UpdatePatientRequest): Observable<Patient> {
    return this.http.put<Patient>(`${environment.apiBaseUrl}/api/patients/${id}`, updatePatientRequest);
  }
}
