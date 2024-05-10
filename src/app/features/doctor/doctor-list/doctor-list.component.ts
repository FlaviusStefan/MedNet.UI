import { Component } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  doctors?: Doctor[];

  constructor(private doctorService: DoctorService) {
  }
  ngOnInit(): void {
    this.doctorService.getAllDoctors()
    .subscribe({
      next: (response) => {
        this.doctors = response;
      }
    });
  }
}
