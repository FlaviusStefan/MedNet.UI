import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  appointments$?: Observable<Appointment[]>;

  constructor(private appointmentService: AppointmentService) {
  }
  
  ngOnInit(): void {
    this.appointments$ = this.appointmentService.getAllAppointments();    
  }

  
}
