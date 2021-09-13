import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatPaginatorModule
  ]
})
export class InboxModule { }
