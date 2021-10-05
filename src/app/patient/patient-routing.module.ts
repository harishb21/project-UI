import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientVisitComponent } from './patient-visit/patient-visit.component';

const routes: Routes = [
  {
    path: 'patientVisit',
    component: PatientVisitComponent,
  },
  {
    path: 'landingPage',
    component: LandingPageComponent,
  },
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
