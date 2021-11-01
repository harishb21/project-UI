import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkColumnDef } from '@angular/cdk/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientTestingModule,
    HttpClientModule,
    AngularMaterialModule,
    RouterTestingModule,
    NgxPaginationModule,
    Ng2OrderModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule.forRoot([]),
    

  ],
  providers:[
      {
        provide: MatDialogRef,
        useValue: {}
      },
      {
        provide: MAT_DIALOG_DATA,
        useValue:{}
      },
      {
        provide: MatDialog,
        useValue:{}
      }
  ]
})
export class TestingModule {}
