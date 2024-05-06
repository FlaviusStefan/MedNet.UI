import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DoctorListComponent } from './features/doctor/doctor-list/doctor-list.component';
import { PatientListComponent } from './features/patient/patient-list/patient-list.component';
import { AppointmentListComponent } from './features/appointment/appointment-list/appointment-list.component';
import { AddDoctorComponent } from './features/doctor/add-doctor/add-doctor.component';
import { SpecializationListComponent } from './features/specialization/specialization-list/specialization-list.component';
import { AddSpecializationComponent } from './features/specialization/add-specialization/add-specialization.component';
import { AddPatientComponent } from './features/patient/add-patient/add-patient.component';
import { AddAppointmentComponent } from './features/appointment/add-appointment/add-appointment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DoctorListComponent,
    PatientListComponent,
    AppointmentListComponent,
    AddDoctorComponent,
    SpecializationListComponent,
    AddSpecializationComponent,
    AddPatientComponent,
    AddAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
