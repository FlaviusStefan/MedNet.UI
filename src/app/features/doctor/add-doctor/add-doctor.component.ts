import { Component, OnDestroy } from '@angular/core';
import { AddDoctorRequest } from '../models/add-doctor-request.model';
import { DoctorService } from '../services/doctor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnDestroy{
  model: AddDoctorRequest;
  private addDoctorSubscription?: Subscription;

  constructor(private doctorService: DoctorService){
    this.model = {
      firstname: '',
      lastname: '',
      specialization: '',
      dateofbirth: new Date(0),
      gender: ''
    }
  }
  
  onFormSubmit(){
    this.addDoctorSubscription = this.doctorService.addDoctor(this.model)
    .subscribe({
      next: (response) => {
        console.log('Succesful');
      }
    })
  }

  ngOnDestroy(): void {
    this.addDoctorSubscription?.unsubscribe();
  }
}
