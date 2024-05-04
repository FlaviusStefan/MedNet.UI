import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './features/doctor/doctor-list/doctor-list.component';

const routes: Routes = [
  {
    path: 'admin/doctors',
    component: DoctorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
