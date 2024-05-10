import { Component } from '@angular/core';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patients?: Patient[];

  constructor(private patientService: PatientService) {
  }
  ngOnInit(): void {
    this.patientService.getAllPatients()
    .subscribe({
      next: (response) => {
        this.patients = response;
      }
    });
  }
}
