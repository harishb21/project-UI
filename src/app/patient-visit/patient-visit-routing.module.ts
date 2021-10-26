import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { MedicationsComponent } from './medications/medications.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientProceduresComponent } from './patient-procedures/patient-procedures.component';
import { PatientVisitComponent } from './patient-visit/patient-visit.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';
import { VitalSignsComponent } from './vital-signs/vital-signs.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientVisitRoutingModule {}
