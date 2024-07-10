import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './features/doctor/doctor-list/doctor-list.component';
import { PatientListComponent } from './features/patient/patient-list/patient-list.component';
import { AppointmentListComponent } from './features/appointment/appointment-list/appointment-list.component';
import { AddDoctorComponent } from './features/doctor/add-doctor/add-doctor.component';
import { AddPatientComponent } from './features/patient/add-patient/add-patient.component';
import { AddAppointmentComponent } from './features/appointment/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './features/appointment/edit-appointment/edit-appointment.component';
import { EditDoctorComponent } from './features/doctor/edit-doctor/edit-doctor.component';
import { EditPatientComponent } from './features/patient/edit-patient/edit-patient.component';

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
    path: 'admin/doctors/:id',
    component: EditDoctorComponent
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
    path: 'admin/patients/:id',
    component: EditPatientComponent
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
    path: 'admin/appointments/:id',
    component: EditAppointmentComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
