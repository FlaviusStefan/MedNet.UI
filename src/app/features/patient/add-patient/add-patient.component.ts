import { Component, OnDestroy } from '@angular/core';
import { AddPatientRequest } from '../models/add-patient-request.model';
import { PatientService } from '../services/patient.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnDestroy{
  model: AddPatientRequest;
  private addPatientSubscription?: Subscription;

  constructor(private patientService:PatientService){
    this.model = {
      firstname: '',
      lastname: '',
      dateofbirth: new Date(0),
      gender: ''
    }
  }

  onFormSubmit(){
    this.addPatientSubscription = this.patientService.addPatient(this.model)
    .subscribe({
      next: (response) => {
        console.log('Succesful');
      }
    })
  }

  ngOnDestroy(): void {
    this.addPatientSubscription?.unsubscribe();
  }
}
