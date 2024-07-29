import { Component } from '@angular/core';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patients$?: Observable<Patient[]>;

  constructor(private patientService: PatientService, private sanitizer: DomSanitizer) {
  }
  ngOnInit(): void {
    this.patients$ = this.patientService.getAllPatients();
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
