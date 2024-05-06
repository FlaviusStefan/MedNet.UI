import { Component } from '@angular/core';
import { AddPatientRequest } from '../../models/add-patient-request.model';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  model: AddPatientRequest;

  constructor(){
    this.model = {
      firstname: '',
      lastname: '',
      dateofbirth: new Date(0),
      gender: ''
    }
  }

  onFormSubmit(){
    console.log(this.model);
  }
}
