import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientVisitComponent } from './patient-visit/patient-visit.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';

const routes: Routes = [
  {
    path: '',
    component: PatientVisitComponent,
  },
  {
    path: 'appointment-list',
    component: AppointmentListComponent,
  },
  {
    path: 'appointment-list/:id',
    component: AppointmentListComponent,
  },
  {
    path: 'visit/:patientId/:appointmentId',
    component: PatientVisitComponent,
  },
  {
    path: 'diagnosis',
    component: DiagnosisComponent,
  },
  {
    path:'patient-history/:id/:patientId',
    component:VisitHistoryComponent
  },
  {
    path:'patient-history/:patientId',
    component:VisitHistoryComponent
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
export class PatientVisitRoutingModule {}
