import { Component } from '@angular/core';
import { AddAppointmentRequest } from '../models/add-appointment-request.model';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
  model: AddAppointmentRequest;

  constructor(private appointmentService: AppointmentService){
    this.model = {
      doctorid: '',
      patientid: '',
      appointmentdatetime: new Date(0),
      status: '',
      reason: ''
    };
  }

  onFormSubmit(){
    this.appointmentService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        console.log('Succesful');
      }
    });
  }
}
