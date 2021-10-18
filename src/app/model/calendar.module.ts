import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxCalendarComponent } from '../calendar/inbox-calendar/inbox-calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import {
  DropDownListAllModule,
  MultiSelectAllModule,
} from '@syncfusion/ej2-angular-dropdowns';
import {
  MaskedTextBoxModule,
  UploaderAllModule,
} from '@syncfusion/ej2-angular-inputs';
import {
  ToolbarAllModule,
  ContextMenuAllModule,
} from '@syncfusion/ej2-angular-navigations';
import {
  ButtonAllModule,
  CheckBoxAllModule,
  SwitchAllModule,
} from '@syncfusion/ej2-angular-buttons';
import {
  DatePickerAllModule,
  TimePickerAllModule,
  DateTimePickerAllModule,
} from '@syncfusion/ej2-angular-calendars';
import {
  NumericTextBoxAllModule,
  TextBoxAllModule,
} from '@syncfusion/ej2-angular-inputs';
import {
  ScheduleAllModule,
  RecurrenceEditorAllModule,
} from '@syncfusion/ej2-angular-schedule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { InboxRoutingModule } from '../calendar/inbox-routing.module';

@NgModule({
  declarations: [InboxCalendarComponent],
  imports: [
  
    RouterModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    NumericTextBoxAllModule,
    TextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    CheckBoxAllModule,
    ToolbarAllModule,
    DropDownListAllModule,
    ContextMenuAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    MultiSelectAllModule,
    TreeViewModule,
    ButtonAllModule,
    DropDownButtonAllModule,
    SwitchAllModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    CheckBoxModule,
    InboxRoutingModule,
    HttpClientModule,
    AutoCompleteModule,
    DropDownListModule,
    CommonModule,
  ],
})
export class CalendarModule {}
