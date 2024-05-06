import { Component } from '@angular/core';
import { AddDoctorRequest } from '../models/add-doctor-request.model';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  model: AddDoctorRequest;

  constructor(){
    this.model = {
      firstname: '',
      lastname: '',
      specialization: '',
      dateofbirth: new Date(0),
      gender: ''
    }
  }

  onFormSubmit(){
    console.log(this.model);
  }
}
