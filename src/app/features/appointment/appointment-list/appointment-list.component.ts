import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  appointments$?: Observable<Appointment[]>;

  constructor(private appointmentService: AppointmentService, private sanitizer: DomSanitizer) {
  }
  
  ngOnInit(): void {
    this.appointments$ = this.appointmentService.getAllAppointments();    
  }


  formatDateTime(dateTime: string): SafeHtml {
    const date = new Date(dateTime);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}<br>${hours}:${minutes}`;
    return this.sanitizer.bypassSecurityTrustHtml(formattedDate);
  }
  
  
}