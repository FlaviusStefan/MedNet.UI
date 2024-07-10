import { Component, OnDestroy } from '@angular/core';
import { AddDoctorRequest } from '../models/add-doctor-request.model';
import { DoctorService } from '../services/doctor.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnDestroy{
  model: AddDoctorRequest;
  private addDoctorSubscription?: Subscription;

  constructor(private doctorService: DoctorService,
    private router: Router
  ){
    this.model = {
      firstName: '',
      lastName: '',
      specialization: '',
      dateOfBirth: new Date(0),
      gender: ''
    }
  }
  
  onFormSubmit(){
    this.addDoctorSubscription = this.doctorService.addDoctor(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/doctors');

      }
    })
  }

  ngOnDestroy(): void {
    this.addDoctorSubscription?.unsubscribe();
  }
}
