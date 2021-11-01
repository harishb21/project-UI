import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientVisitComponent } from './patient-visit/patient-visit.component';
import { PatientVisitRoutingModule } from './patient-visit-routing.module';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { PatientProceduresComponent } from './patient-procedures/patient-procedures.component';
import { VitalSignsComponent } from './vital-signs/vital-signs.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { MedicationsComponent } from './medications/medications.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MedicationsDialogComponent } from './dialog/medications-dialog/medications-dialog.component';
import { DiagnosisDialogComponent } from './dialog/diagnosis-dialog/diagnosis-dialog.component';
import { ProcedureDialogComponent } from './dialog/procedure-dialog/procedure-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MedicationsService } from './services/medications.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { PatientDetailDialogComponent } from './dialog/patient-detail-dialog/patient-detail-dialog.component';
import { EmergencyContactDialogComponent } from './dialog/emergency-contact-dialog/emergency-contact-dialog.component';
import { AllergyDialogComponent } from './dialog/allergy-dialog/allergy-dialog.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { VisitHistoryComponent } from './visit-history/visit-history.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddAllergyDialogComponent } from './add-allergy-dialog/add-allergy-dialog.component';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatRadioModule } from '@angular/material/radio';

import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    PatientVisitComponent,
    DiagnosisComponent,
    PatientProceduresComponent,
    VitalSignsComponent,
    PatientDetailComponent,
    MedicationsComponent,
    MedicationsDialogComponent,
    DiagnosisDialogComponent,
    ProcedureDialogComponent,
    PatientDetailDialogComponent,
    EmergencyContactDialogComponent,
    AllergyDialogComponent,
    AppointmentListComponent,
    VisitHistoryComponent,
    PatientDemographicsComponent,
    PatientListComponent,
    AddAllergyDialogComponent,
  ],
  imports: [
    CommonModule,
    PatientVisitRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatGridListModule,
    ScrollingModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [MedicationsService],
  entryComponents: [PatientVisitComponent],
})
export class PatientVisitModule {}