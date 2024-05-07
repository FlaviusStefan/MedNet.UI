import { Component } from '@angular/core';
import { AddPatientRequest } from '../models/add-patient-request.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  model: AddPatientRequest;

  constructor(private patientService:PatientService){
    this.model = {
      firstname: '',
      lastname: '',
      dateofbirth: new Date(0),
      gender: ''
    }
  }

  onFormSubmit(){
    this.patientService.addPatient(this.model)
    .subscribe({
      next: (response) => {
        console.log('Succesful');
      }
    })
  }
}
