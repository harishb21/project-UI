import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  
  {
    path: 'patientList',
    component: PatientListComponent,
  },
  {
    path: 'patientDemographics/:id',
    component: PatientDemographicsComponent,
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
