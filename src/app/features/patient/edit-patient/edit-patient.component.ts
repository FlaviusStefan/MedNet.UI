import { Component } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { UpdatePatientRequest } from '../models/update-patient-request.model';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {
  id: string | null = null;
  paramsSubscription?: Subscription;
  editPatientSubscription?: Subscription;
  patient?: Patient;

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) {

  }
  

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if(this.id){
          // get data from api for patientId
          this.patientService.getPatientById(this.id)
          .subscribe({
            next: (response) => {
              this.patient = response;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    const updatePatientRequest: UpdatePatientRequest = {
      firstName: this.patient?.firstName ?? '',
      lastName: this.patient?.lastName ?? '',
      dateOfBirth: this.patient?.dateOfBirth ?? '',
      gender: this.patient?.gender ?? ''
    };


    if(this.id){
      this.editPatientSubscription = this.patientService.updatePatient(this.id, updatePatientRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/patients');
        }
      });
    }
  }

  onDelete(): void{
    if(this.id) {
      this.patientService.deletePatient(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/patients');
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editPatientSubscription?.unsubscribe();
  }
}