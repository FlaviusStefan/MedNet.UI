import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';
import { UpdateAppointmentRequest } from '../models/update-appointment-request.model';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  editAppointmentSubscription?: Subscription;
  appointment?: Appointment;

  constructor(private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private router: Router
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
    const updateAppointmentRequest: UpdateAppointmentRequest = {
      doctorId: this.appointment?.doctorId ?? '',
      doctorFirstName: this.appointment?.doctorFirstName ?? '',
      doctorLastName: this.appointment?.doctorLastName ?? '',
      patientId: this.appointment?.patientId ?? '',
      patientFirstName: this.appointment?.patientFirstName ?? '',
      patientLastName: this.appointment?.patientLastName ?? '',
      appointmentDateTime: this.appointment?.appointmentDateTime ?? '',
      status: this.appointment?.status ?? '',
      reason: this.appointment?.reason ?? '',
      details: this.appointment?.details ?? ''
    }

    if(this.id){
      this.editAppointmentSubscription = this.appointmentService.updateAppointment(this.id, updateAppointmentRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/appointments');
        }
      });
    }
  }

  onDelete(): void{
    if(this.id) {
      this.appointmentService.deleteAppointment(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/appointments');
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editAppointmentSubscription?.unsubscribe();
  }



}
