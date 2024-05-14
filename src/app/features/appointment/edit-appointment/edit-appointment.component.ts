import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  appointment?: Appointment;

  constructor(private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {

  }
  

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if(this.id){
          // get data from api for appointmentId
          this.appointmentService.getAppointmentById(this.id)
          .subscribe({
            next: (response) => {
              this.appointment = response;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
     console.log(this.appointment);
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }



}
