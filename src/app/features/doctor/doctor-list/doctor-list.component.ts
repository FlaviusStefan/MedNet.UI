import { Component } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DoctorService } from '../services/doctor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  doctors$?: Observable<Doctor[]>;

  constructor(private doctorService: DoctorService) {
  }
  ngOnInit(): void {
    this.doctors$ =  this.doctorService.getAllDoctors();
  }
}
