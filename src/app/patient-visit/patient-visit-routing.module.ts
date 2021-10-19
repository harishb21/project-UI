import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { MedicationsComponent } from './medications/medications.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientProceduresComponent } from './patient-procedures/patient-procedures.component';
import { PatientVisitComponent } from './patient-visit/patient-visit.component';
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
    path: 'visit/:id',
    component: PatientVisitComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientVisitRoutingModule {}
