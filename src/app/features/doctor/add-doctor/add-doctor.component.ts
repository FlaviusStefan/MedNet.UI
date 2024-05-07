import { Component } from '@angular/core';
import { AddDoctorRequest } from '../models/add-doctor-request.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  model: AddDoctorRequest;

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
    this.doctorService.addDoctor(this.model)
    .subscribe({
      next: (response) => {
        console.log('Succesful');
      }
    })
  }
}
