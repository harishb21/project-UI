import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { DashboardInbox } from '../model/inbox.model';
import { InboxServiceBoard } from './inbox.dashboard-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class InboxComponent implements OnInit, AfterViewInit {
patientId : number ;
 // ELEMENT_DATA1: Inbox[] = this.inboxService.getAllappointments();
  //dataSource = new MatTableDataSource<Inbox>(this.ELEMENT_DATA1);
  dataSource = new MatTableDataSource<DashboardInbox>();
  columnsToDisplay: string[] = [
    'Sno',
    'MeetingTitle',
    'Physician',  
    'Date',
    'Time',
    'action',
  ];

  expandedElement: DashboardInbox | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private inboxServiceBoard: InboxServiceBoard, private router: Router) {
    this.inboxServiceBoard.onloadFun();
    this.getUIData();
    this.onloadUIFields();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickAction(args: DashboardInbox) {
    alert('args-' + args);
    this.expandedElement = args;
  }
  ngOnInit(): void {
    console.log(this.patientUIFlag);
    
        if(this.patientUIFlag){
          this.columnsToDisplay=[
            'Sno',
            'MeetingTitle',
            'Physician', 
            'Date',
            'Time',
            'action',
          ];
        }else if(this.pysicianUIFlag){
          this.columnsToDisplay=[
            'Sno',
            'MeetingTitle',
            'Patient', 
            'Date',
            'Time',
            'action',
          ];
        }else{
          this.columnsToDisplay=[
            'Sno',
            'MeetingTitle',
            'Physician', 
            'Patient', 
            'Date',
            'Time',
            'action',
          ];
        }
     }
  patientUIFlag:boolean = false;
  pysicianUIFlag:boolean =false;
  nurseUIFlag:boolean = false;
  elementdata:DashboardInbox[]=[];
   obj:DashboardInbox ;
   getUIData(){
     this.inboxServiceBoard.getAllAppointmentData().subscribe((res) => {
      res.forEach((data:any) => {
         let obj:any ={
           id : data.id,
           title : data.title,
           dashboardDate : this.getUIDate(data.startTime),
           dashboardStime : this.getUIDate(data.startTime),
           dashboardEtime : this.getUIDate(data.endTime),
           description : data.description,
           physicianName : this.getUIPhysicianName(data.physicianId),
           patientName:this.getUIPatientName(data.patientId),
           declined: false
         }
         this.elementdata.push(obj);
         });
         this.dataSource = new MatTableDataSource<DashboardInbox>(this.elementdata);
     });
     
   }
   onloadUIFields(){
 
     if(this.inboxServiceBoard.userRoleId != null && this.inboxServiceBoard.userRoleId != undefined){
       if(this.inboxServiceBoard.userRoleId === 4){
         this.patientUIFlag = true;
     
       }else if(this.inboxServiceBoard.userRoleId === 2){
         this.pysicianUIFlag = true;
  
       }else if(this.inboxServiceBoard.userRoleId === 3){
         this.nurseUIFlag = true;
     
       }
     }
   }
   physicianName:String;
 getUIPhysicianName(physicianId:number){
   this.physicianName ='';
   this.inboxServiceBoard.staffNameList
     .filter(data=>data.id === physicianId).map(
       val=>{
         this.physicianName = val.staffName;
       });
       return this.physicianName; 
   }
 
   getUIDate(date:String){
     return new Date(date.toString())
   }
   patientName:String="";
   getUIPatientName(patientId:number){
    this.patientName='';
    this.inboxServiceBoard.patientNameList
    .filter(data=>data.pId === patientId).map(
      val=>{
        this.patientName = val.patientName;
      });
      return this.patientName; 
   }
   highlight(args:DashboardInbox):boolean{
    if(args.dashboardStime.toDateString() ===  new Date().toDateString()){
      return true;
    }else{
      return false;
    }
  }
 
  onClickEdit(args:DashboardInbox){
    this.expandedElement = args;
    this.router.navigate(['app-inbox-calendar']);
  }
  editData(element:DashboardInbox) {
   
    this.router.navigate(['patient-visit/visit/' + element.id + '/' + element.id]);
  }

  onClickDetails(args:DashboardInbox) {
    this.expandedElement = args;
    let patientId:number;
    let appointmentId:number;
    this.inboxServiceBoard.getAppointmentById(args.id).subscribe(
      data=>{
        console.log(data)
        patientId = data.patientId;
        appointmentId = data.id
      }
    )
    patientId=49;
    appointmentId=2;
    this.router.navigate(['patient-visit/visit/' + patientId + '/' + appointmentId]);
  }
}
