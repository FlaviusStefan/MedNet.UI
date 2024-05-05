import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './features/doctor/doctor-list/doctor-list.component';
import { PatientListComponent } from './features/patient/patient-list/patient-list.component';
import { AppointmentListComponent } from './features/appointment/appointment-list/appointment-list.component';

const routes: Routes = [
  {
    path: 'admin/doctors',
    component: DoctorListComponent
  },
  {
    path: 'admin/patients',
    component: PatientListComponent
  },
  {
    path: 'admin/appointments',
    component: AppointmentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
