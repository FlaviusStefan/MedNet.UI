import { Component, OnDestroy } from '@angular/core';
import { AddPatientRequest } from '../models/add-patient-request.model';
import { PatientService } from '../services/patient.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnDestroy{
  model: AddPatientRequest;
  private addPatientSubscription?: Subscription;

  constructor(private patientService:PatientService,
    private router: Router
  ){
    this.model = {
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(0),
      gender: ''
    }
  }

  onFormSubmit(){
    this.addPatientSubscription = this.patientService.addPatient(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/patients');

      }
    })
  }

  ngOnDestroy(): void {
    this.addPatientSubscription?.unsubscribe();
  }
}
