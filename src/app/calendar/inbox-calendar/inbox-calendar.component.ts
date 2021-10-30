import { Observable } from 'rxjs';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { L10n } from '@syncfusion/ej2-base';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import Fuse from 'fuse.js';
import { EmitType } from '@syncfusion/ej2-base';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
//import Fuse from 'fuse.js/dist/fuse.min.js';
import {
  PopupOpenEventArgs,
  EventRenderedArgs,
  
  MonthService,
  DayService,
  WeekService,
  WorkWeekService,
  EventSettingsModel,
  ResizeService,
  DragAndDropService,
  WorkHoursModel,
  EJ2Instance,
  Schedule,
  RenderCellEventArgs,
  PopupCloseEventArgs,
  TimeScaleModel,
  ScheduleComponent,
} from '@syncfusion/ej2-angular-schedule';
import {
  FormValidators,
  FormValidator,
  TextBox,
} from '@syncfusion/ej2-angular-inputs';
import { InboxService } from './inbox.service';
import { Data } from '@syncfusion/ej2-schedule/src/schedule/actions/data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InboxData } from '../../model/inbox.model';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ChangeEventArgs } from '@syncfusion/ej2-calendars';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { TimeSlotResponse } from 'src/app/model/timeslot.model';

L10n.load({
  'en-US': {
    schedule: {
      newEvent: 'Add Appointment',
      editEvent: 'Edit Appointment',
    },
  },
});
@Component({
  selector: 'app-inbox-calendar',
  templateUrl: './inbox-calendar.component.html',
  styleUrls: ['./inbox-calendar.component.css'],
  providers: [
    MonthService,
    DayService,
    WeekService,
    WorkWeekService,
    ResizeService,
    DragAndDropService,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InboxCalendarComponent implements OnInit {
  
  constructor(private inboxService: InboxService) {
    this.inboxService.onloadFun();
    this.loadUser();
    this.inboxService.loadStaffData();
    this.inboxService.loadPatientNameData();
    
  }
  ngOnInit(): void {
    
  }
  @ViewChild('scheduleObj', { static: false })
  public scheduleObj: ScheduleComponent;
  public selectedDate: Date = new Date();
  public showQuickInfo: boolean = false;
  public workHours: WorkHoursModel = { highlight: false };
  public startdate: Object = new Date(2021, 9, 22, 9);
  public enddate: Object = new Date(2021, 12, 22, 20);
  public startHour: string = '09:00';
  public endHour: string = '20:00';
  public currentYear: number = this.selectedDate.getFullYear();
  public currentMonth: number = this.selectedDate.getMonth();
  public currentDay: number = this.selectedDate.getDate();
  public dateValue: Object = new Date(new Date().setDate(14));
  public minDate: Object = new Date(
    this.currentYear,
    this.currentMonth,
    this.currentDay
  );
  public maxDate: Object = new Date(
    this.currentYear,
    this.currentMonth + 3,
    this.currentDay
  );
  public timeScale: TimeScaleModel = { interval: 30, slotCount: 1 };
  public startDate: Date;
  public endDate: Date;
  public statusFields: Object = { text: 'staffName', value: 'id' };
  public fields: Object = { value: 'pId', text: 'patientName' };
  public StatusData: User[] = this.inboxService.staffNameList;
  public booksData: User[] = this.inboxService.patientNameList;
  public watermark: string = 'e.g. Cristiano Ronaldo';
  public value: string = '';
  physicianValue: number;
  patientFilterValue: number;
  physicianStringVal: string = '';
  PatientNamePopUp: string = '';
  selectedPhysician: String = '';
  showPatientError: boolean = false;
  showPhysicianName:string='';
  showPhysicianDisable:boolean=false;
  form: FormGroup = new FormGroup({});
  dropDownValue: string = '';
  startDateCheck:boolean=false;
  endDateCheck:boolean=false;
  slotStartDate:Date;
  slotEndDate:Date;
  slotStartTime:Date;
  slotEndTime:Date;
  showTimeSlotflag:boolean=false;
  physicianSlotflag:boolean=false;
  patientSlotfalg:boolean = false;
  showTimeSlotError:String=''
  showPatientDisable=false;
  showPatientName:string='';
  public validator: FormValidator;
  timeServiceRes:TimeSlotResponse;
  eventSettings: EventSettingsModel;
  reasonFlag: boolean;
  reaonVal:String='';
  loadUser() {
    this.inboxService.getAllAppointmentData().subscribe((data: any) => {
      //scheduleData: extend(data, null, true) as Record<string, any>[];
      this.eventSettings = {
       // dataSource: <InboxData[]>extend(data, null, true),
       dataSource:data,
        fields: {
          subject: {
            name: 'title',
            validation: { required: true, minLength: 5 },
          },
          description: {
            name: 'description',
            validation: { required: true, minLength: 5, maxLength: 500 },
          },
          startTime: { name: 'startTime', validation: { required: true } },
          endTime: { name: 'endTime', validation: { required: true } },
       
        },
      };
    });
  }

  public dateParser(data: string) {
    return new Date(data);
  }
  public getHeaderTitle(data: { [key: string]: Object }): string {
    return data.elementType === 'cell'
      ? 'Add Appointment'
      : 'Appointment Details';
  }
  //Bind the filter event
  public onFiltering: EmitType<FilteringEventArgs> = (
    e: FilteringEventArgs
  ) => {
    let options: Object = {
      keys: ['patientName'],
      includeMatches: true,
      findAllMatches: true,
    };
    // create object from Fuse constructor
    let fuse: Fuse<any> = new Fuse(this.booksData, options);
    // store the search result data based on typed characters
    let result: any = fuse.search(e.text);
    let data: { [key: string]: Object }[] = [];
    for (let i: number = 0; i < result.length; i++) {
      data.push(result[i].item as any);
    }
    // pass the filter data source to updateData method.
    e.updateData(data, null);
    let popupElement: HTMLElement = document.getElementById('books_popup');
    if (popupElement) {
      let lists: Element[] = <NodeListOf<Element> & Element[]>(
        popupElement.querySelectorAll('.e-list-item')
      );
      // For highlight the typed characters, pass the result data and list items to highlightSearch method.
      this.highlightSearch(lists, result);
    }
  };

  public highlightSearch(listItems: Element[], result: any): void {
    if (result.length > 0) {
      for (let i: number = 0; i < listItems.length; i++) {
        let innerHTML: string = listItems[i].innerHTML;
        for (
          let j: number = result[i].matches[0].indices.length - 1;
          j >= 0;j--
        ) {
          let indexes: number[] = <number[]>result[i].matches[0].indices[j];
          innerHTML =
            innerHTML.substring(0, indexes[0]) +
            '<span class="e-highlight">' +
            innerHTML.substring(indexes[0], indexes[1] + 1) +
            '</span>' +
            innerHTML.substring(indexes[1] + 1);
          listItems[i].innerHTML = innerHTML;
        }
      }
    }
  }
  public onActionBegin(args: any): void {
    if (
      args.requestType === 'eventCreate' ||
      args.requestType === 'eventChange' ||
      args.requestType === 'eventRemove'
    ) {
      let data: any;
      if (args.requestType === 'eventCreate') {
        data = <any>args.data[0];
        const objData: InboxData = this.getAppointmentData(data);
        this.inboxService.addAppointment(objData);
       // this.reaonVal = (<HTMLInputElement>document.getElementById("Reason")).value;
        window.location.reload();
       // this.scheduleObj.eventWindow.refresh(); 
      } else if (args.requestType === 'eventChange') {
        data = <any>args.data;
        const objData: InboxData = this.getAppointmentData(data);
        this.inboxService.updateAppointment(objData);
        window.location.reload();
        //this.scheduleObj.eventWindow.refresh(); 
      } else if (args.requestType === 'eventRemove') {
        data = <any>args.data[0];
    
        if (data.id != undefined && data.id) {
          this.inboxService.deleteAppointment(data.id);
         // this.scheduleObj.eventWindow.refresh(); 
          window.location.reload();
        }
      }
    }
  }

  getAppointmentData(data: any) {
    let appointmentId: number = data.id;
    let title: string = data.title;
    let Description: string = data.description;
    let PhysicianId: number = this.physicianValue;
    let EndTime: String = data.endTime;
    let StartTime: String = data.startTime;
    let patientId: number = this.patientFilterValue;
    let status: string = data.Status;
    if( this.inboxService.userRoleId === 2 ){
      PhysicianId =  this.inboxService.userEmpId;
    }else if(this.inboxService.userRoleId === 4){
      patientId = this.inboxService.patientId;
    } 
    const obj = {
      id: appointmentId,
      title: title,
      startTime: StartTime,
      endTime: EndTime,
      description: Description,
      physicianId: PhysicianId,
      patientId: patientId,
     // reason: this.reaonVal,
     reason:"no reason"
    };
    return obj;
  }

  physicianChangeEvent(event: any) {

    if (event.value != null && event.value != undefined) {
      this.physicianValue = event.value;
      this.physicianStringVal = event.value;
      this.inboxService.timeCheck.physicianEmpId = event.value;
      if(event.isInteracted){
        this.inboxService.timeCheck.roleId= 2;
        this.inboxService.timeSlotcheck(this.inboxService.timeCheck).subscribe(
        data=>{
          this.physicianSlotflag =  data.timeSlotFlag;
        });
      }
    }
  }

  filteredval(event: any) {
   
    if (event != null && event != undefined && event.value != null) {
      this.patientFilterValue = event.value;  
      if(event.isInteracted){
        this.inboxService.timeCheck.patientId = event.value;
        this.inboxService.timeCheck.roleId= 4;
        this.inboxService.timeSlotcheck(this.inboxService.timeCheck).subscribe(
          data=>{
            this.patientSlotfalg = data.timeSlotFlag;
            this.showTimeSlotError = data.message;
          });
        }
    }
  }
  public startDateParser(data: string) {
  
    if (isNullOrUndefined(this.startDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.startDate)) {
      return new Date(this.startDate);
    }
   return new Date(data);
  }
  public endDateParser(data: string) {
   
    if (isNullOrUndefined(this.endDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.endDate)) {
      return new Date(this.endDate);
    }
   return new Date(data);
  }

  isValidAction1(date: Date,bool:boolean) {
    if(bool){
     
      return !(date >= new Date() && this.startDate<= date && this.startDate.getTime()<date.getTime());
    }else{
      return !(date >= new Date());
    }
  }
  public onDateChange(args: ChangeEventArgs): void {

    if (!isNullOrUndefined(args.event)) {
      if (args.element.id === 'startTime') {
        this.startDate = args.value;
        this.startDateCheck = this.isValidAction1(this.startDate,false);
        this.inboxService.timeCheck.startDateTime=args.value.toISOString();
        //console.log(this.startDateCheck);
      } else if (args.element.id === 'endTime') {
        this.endDate = args.value;
        this.endDateCheck = this.isValidAction1(this.endDate,true);
        this.inboxService.timeCheck.endDateTime=args.value.toISOString();
      }   
      if((this.startDate <= this.endDate && this.physicianValue != undefined)|| this.inboxService.timeCheck.roleId == 2){
      this.inboxService.timeSlotcheck(this.inboxService.timeCheck).subscribe(
        data=>{
          if(this.inboxService.timeCheck.roleId === 2){
            this.physicianSlotflag =  data.timeSlotFlag;
           }else{
            this.patientSlotfalg= data.timeSlotFlag;
           }
        }
      );
      }
    }

  }
  isValidAction(date: Date) {
   
    return !(date.getTime() > new Date().getTime());
  }
  public onPopupOpen(args: PopupOpenEventArgs): void {
    this.showPatientError=false;
    args.element.querySelector('.e-event-save').classList.remove('e-custom-disable');
    args.element.querySelector('.e-event-save').classList.add('e-custom-disable');
    //let classOptElement: HTMLInputElement = args.element.querySelector('.e-title-text');
    if(this.inboxService.disablePhysician){
      this.showPhysicianName=this.inboxService.uPhyisicanName;
      this.showPhysicianDisable =this.inboxService.disablePhysician;
      this.physicianStringVal=this.inboxService.userEmpId.toString();
    }else if(this.inboxService.disablePatient){
        this.showPatientName = this.inboxService.UIpatientName;
        this.patientFilterValue= this.inboxService.patientId;
        this.showPatientDisable = this.inboxService.disablePatient;
    }
    // if (['QuickInfo', 'Editor'].indexOf(args.type) > -1) {
    //disable all previous days appointments
    // args.cancel = this.isValidAction(args.data.startTime);
    if(args.data.startTime != null && args.data.startTime != undefined && args.data.startTime != ''
    && args.data.endTime != null && args.data.endTime != undefined && args.data.endTime != ''){
      this.startDate  = args.data.startTime;
      this.endDate =args.data.endTime;
      this.inboxService.timeCheck.startDateTime = args.data.startTime.toISOString();
      this.inboxService.timeCheck.endDateTime = args.data.endTime.toISOString();
    } 
    if (((args.data.id != null && args.data.physicianId != null) ||
        (args.data.id != undefined && args.data.physicianId != undefined)) &&
         args.data.id && args.data.physicianId
    ) {
      this.value = args.data.physicianId;
      this.physicianStringVal = args.data.physicianId;
      this.physicianValue = args.data.physicianId;
      this.PatientNamePopUp = args.data.patientId;
     // this.reasonFlag=true;
     // (document.querySelector('#_dialog_wrapper') as HTMLElement).style.height = '90%';
    }
    if (args.type === 'Editor') {
      let formElement: HTMLElement = <HTMLElement>(args.element.querySelector('.e-schedule-form')
      );
      this.validator = (formElement as EJ2Instance).ej2_instances[0] as FormValidator;
      if(!this.inboxService.disablePhysician){
      this.validator.addRules('Status', {required: [true, 'This field is required.'],});
      }
    if(!this.inboxService.disablePatient){
      this.validator.addRules('books', {required: true});
      }
      if (args.target.classList.contains('e-work-cells')) {
        args.element.querySelector('.e-event-save').classList.add('e-custom-disable');
      } else {
        args.element.querySelector('.e-event-save').classList.remove('e-custom-disable');
      }
      console.log((<HTMLInputElement>document.getElementById("startTime")).value);
      
      if (this.isValidAction(args.data.startTime)) {
        args.element.querySelector('.e-event-save').classList.add('e-custom-hide');
        args.element.querySelector('.e-event-delete').classList.add('e-custom-hide');
      } else {
        args.element.querySelector('.e-event-delete').classList.remove('e-custom-hide');
        args.element.querySelector('.e-event-save').classList.remove('e-custom-hide');
      }
    }
  }
  onPopupClose(args: PopupCloseEventArgs): void {
    this.physicianStringVal = '';
    this.value = '';
    this.startDate = null;
    this.endDate = null;
    this.PatientNamePopUp = '';
    this.showPatientError = false;
    this.showPhysicianName='';
    this.showTimeSlotflag=false;
    this.physicianSlotflag= false;
    this.patientSlotfalg = false;
    //this.reasonFlag=false;
    
    
   // (document.querySelector('#_dialog_wrapper') as HTMLElement).style.height = '510px';
  }
  public onEventRendered(args: EventRenderedArgs): void {
  }
  onRenderCell(args: any): void {
    if (
      args.elementType === 'workCells' &&
      args.date.getTime() <= new Date().getTime() &&
      !args.element.classList.contains('e-disable-dates')
    ) {
      args.element.classList.add('e-disable-dates');
      args.element.classList.add('e-disable-cell');
    }
  }

  //==================patient Name=======================
  onchangeName(event:any){
  if (!event.isInteracted && (event.itemData === null || event.itemData.pId === event.itemData.patientName))
  {
    this.showPatientError = true;
    this.patientSlotfalg = false;
  } else {
    this.showPatientError = false;
  }
}


  //========save button disbale code=====================
  public onChange(args: any) {
    let form = (document.querySelector('.e-schedule-form') as any)
      .ej2_instances[0];
    if (args.element && !args.e) {
      return;
    }
    let names:string[]=[];
    if(this.inboxService.disablePhysician){
      names = [
        'title',
        'description',
        'books',
        'endTime',
        'startTime',
      ];
    }else if(this.inboxService.disablePatient){
    
      names = [
        'Status',
        'title',
        'description',
        'endTime',
        'startTime',
      ];
    }else{
     
      names = [
      'title',
      'description',
      'Status',
      'books',
      'endTime',
      'startTime',
    ];  
  }
    names.forEach((e) => {
      form.validateRules(e);
    });
    let isValidated = false;
    let errorElements = document
      .querySelector('.e-dlg-content')
      .querySelectorAll('.e-schedule-error');
    for (let i = 0; i < errorElements.length; i++) {
      isValidated =
        (errorElements[i] as any).style.display === 'none' ? true : false;
      if (isValidated === false) {
        break;
      }
    }
    let trueFlag :boolean = false;
      if(this.showTimeSlotflag || this.physicianSlotflag|| this.startDateCheck ||  this.endDateCheck || this.showPatientError){
        trueFlag = true;
      }
    let saveBtn = document.querySelector('.e-custom-disable');
   
    if (isValidated && saveBtn && !trueFlag) {
      saveBtn.classList.remove('e-custom-disable');
   
    } else if (!isValidated && !saveBtn && trueFlag) {
      document.querySelector('.e-event-save').classList.add('e-custom-disable');
  
    }
  }
}
   //location: { name: 'Reason', validation: { required: true } },
// console.log("appointmentId-------"+appointmentId);
// console.log("title-------"+title);
// console.log("Description-------"+Description);
// console.log("PhysicianId-------"+PhysicianId);
// console.log("EndTime-------"+EndTime);
// console.log("StartTime-------"+StartTime);
// console.log("patientId-------"+patientId);
//const obj = new InboxData(appointmentId,title,StartTime,EndTime,Description,PhysicianId,6);

//dataSource: <InboxData[]>extend([], this.inboxList1, null, true) ,
//  private dataManger: DataManager = new DataManager({
//   url: 'http://localhost:8072/api/appointments',
//   adaptor: new WebApiAdaptor,

//   //crossDomain: false
// });

// public statusFields: Object = { text: 'StatusText', value: 'StatusText' };
// public StatusData: Object[] = [
//   { StatusText: 'phisician1', Id: 1 },
//   { StatusText: 'Requested', Id: 2 },
//   { StatusText: 'Confirmed', Id: 3 }
// ];

// this.form = new FormGroup({
//   status:new FormControl("", [Validators.required]),
//   PhysicianId:new FormControl("", [Validators.required]),
//   patientId:new FormControl("", [Validators.required]),
// });

//public onEventRendered(args: EventRenderedArgs): void {
//     switch (args.data.EventType) {
//         case 'Requested':
//             (args.element as HTMLElement).style.backgroundColor = '#F57F17';
//             break;
//         case 'Confirmed':
//             (args.element as HTMLElement).style.backgroundColor = '#7fa900';
//             break;
//         case 'New':
//             (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
//             break;
//     }
//}

//  this.inboxService.staffNameList.
//   filter(obj=>obj.id == args.data.physicianId)
//   .map(val=>{
//     this.selectedPhysician=val.staffName

//   });
// console.log(physicianname);
