import { Component } from '@angular/core';
import { AddAppointmentRequest } from '../../models/add-appointment-request.model';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
  model: AddAppointmentRequest;

  constructor(){
    this.model = {
      doctorid: '',
      patientid: '',
      datetime: new Date(0),
      reason: ''
    };
  }

  onFormSubmit(){
    console.log(this.model);
  }
}
