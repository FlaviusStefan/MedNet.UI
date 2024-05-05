import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './features/doctor/doctor-list/doctor-list.component';
import { PatientListComponent } from './features/patient/patient-list/patient-list.component';
import { AppointmentListComponent } from './features/appointment/appointment-list/appointment-list.component';
import { AddDoctorComponent } from './features/doctor/add-doctor/add-doctor.component';
import { SpecializationListComponent } from './features/specialization/specialization-list/specialization-list.component';
import { AddSpecializationComponent } from './features/specialization/add-specialization/add-specialization.component';
import { AddPatientComponent } from './features/patient/add-patient/add-patient.component';
import { AddAppointmentComponent } from './features/appointment/add-appointment/add-appointment.component';

const routes: Routes = [
  {
    path: 'admin/doctors',
    component: DoctorListComponent
  },
  {
    path: 'admin/doctors/add',
    component: AddDoctorComponent
  },
  {
    path: 'admin/patients',
    component: PatientListComponent
  },
  {
    path: 'admin/patients/add',
    component: AddPatientComponent
  },
  {
    path: 'admin/appointments',
    component: AppointmentListComponent
  },
  {
    path: 'admin/appointments/add',
    component: AddAppointmentComponent
  },
  {
    path: 'admin/specializations',
    component: SpecializationListComponent
  },
  {
    path: 'admin/specializations/add',
    component: AddSpecializationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
