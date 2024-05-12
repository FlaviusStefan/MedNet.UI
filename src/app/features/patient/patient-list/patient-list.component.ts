import { Component } from '@angular/core';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patients$?: Observable<Patient[]>;

  constructor(private patientService: PatientService) {
  }
  ngOnInit(): void {
    this.patients$ = this.patientService.getAllPatients();
  }
}
