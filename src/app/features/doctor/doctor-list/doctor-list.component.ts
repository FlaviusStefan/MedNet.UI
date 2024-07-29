import { Component } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DoctorService } from '../services/doctor.service';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  doctors$?: Observable<Doctor[]>;

  constructor(private doctorService: DoctorService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.doctors$ =  this.doctorService.getAllDoctors();
  }

  formatDateTime(dateTime: string): SafeHtml {
    const date = new Date(dateTime);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return this.sanitizer.bypassSecurityTrustHtml(formattedDate);
  }
}
