import { Component, OnDestroy } from '@angular/core';
import { AddAppointmentRequest } from '../models/add-appointment-request.model';
import { AppointmentService } from '../services/appointment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnDestroy {
  model: AddAppointmentRequest;
  private addAppointmentSubscription?: Subscription;

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
    this.addAppointmentSubscription = this.appointmentService.addAppointment(this.model)
    .subscribe({
      next: (response) => {
        console.log('Succesful');
      }
    });
  }

  ngOnDestroy(): void {
    this.addAppointmentSubscription?.unsubscribe();
  }

}
