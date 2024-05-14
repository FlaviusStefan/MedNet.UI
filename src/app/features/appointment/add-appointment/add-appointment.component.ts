import { Component, OnDestroy } from '@angular/core';
import { AddAppointmentRequest } from '../models/add-appointment-request.model';
import { AppointmentService } from '../services/appointment.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnDestroy {
  model: AddAppointmentRequest;
  private addAppointmentSubscription?: Subscription;

  constructor(private appointmentService: AppointmentService,
    private router: Router
  ){
    this.model = {
      doctorId: '',
      patientId: '',
      appointmentDateTime: new Date(0),
      status: '',
      reason: ''
    };
  }

  onFormSubmit(){
    this.addAppointmentSubscription = this.appointmentService.addAppointment(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/appointments');
      }    
    });
  }

  ngOnDestroy(): void {
    this.addAppointmentSubscription?.unsubscribe();
  }

}
