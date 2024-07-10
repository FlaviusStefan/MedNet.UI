import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DoctorListComponent } from './features/doctor/doctor-list/doctor-list.component';
import { PatientListComponent } from './features/patient/patient-list/patient-list.component';
import { AppointmentListComponent } from './features/appointment/appointment-list/appointment-list.component';
import { AddDoctorComponent } from './features/doctor/add-doctor/add-doctor.component';

import { AddPatientComponent } from './features/patient/add-patient/add-patient.component';
import { AddAppointmentComponent } from './features/appointment/add-appointment/add-appointment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditAppointmentComponent } from './features/appointment/edit-appointment/edit-appointment.component';
import { EditDoctorComponent } from './features/doctor/edit-doctor/edit-doctor.component';
import { EditPatientComponent } from './features/patient/edit-patient/edit-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DoctorListComponent,
    PatientListComponent,
    AppointmentListComponent,
    AddDoctorComponent,
    AddPatientComponent,
    AddAppointmentComponent,
    EditAppointmentComponent,
    EditDoctorComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
