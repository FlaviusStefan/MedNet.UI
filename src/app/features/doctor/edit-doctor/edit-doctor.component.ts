import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { UpdateDoctorRequest } from '../models/update-doctor-request.model';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramsSubscription?: Subscription;
  editDoctorSubscription?: Subscription;
  doctor?: Doctor;

  constructor(private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router
  ) {

  }
  

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if(this.id){
          // get data from api for doctorId
          this.doctorService.getDoctorById(this.id)
          .subscribe({
            next: (response) => {
              this.doctor = response;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    const updateDoctorRequest: UpdateDoctorRequest = {
      firstName: this.doctor?.firstName ?? '',
      lastName: this.doctor?.lastName ?? '',
      dateOfBirth: this.doctor?.dateOfBirth ?? '',
      specialization: this.doctor?.specialization ?? '',
      gender: this.doctor?.gender ?? ''
    };


    if(this.id){
      this.editDoctorSubscription = this.doctorService.updateDoctor(this.id, updateDoctorRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/doctors');
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editDoctorSubscription?.unsubscribe();
  }
}
