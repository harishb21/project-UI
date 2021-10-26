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
  ngOnInit(): void {}
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
  constructor(private inboxServiceBoard: InboxServiceBoard) {
    this.inboxServiceBoard.onloadFun();
    this.getUIData();
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
  onClickDelete(args:DashboardInbox){
    this.expandedElement = args;
   // this.inboxService.deleteRecord(args);
    ///this.ELEMENT_DATA1 = this.inboxService.getAllappointments();
    //this.dataSource = new MatTableDataSource<Inbox>(this.ELEMENT_DATA1);
    alert(" component record deleted");
  }

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
           declined: false
         }
         this.elementdata.push(obj);
         });
         this.dataSource = new MatTableDataSource<DashboardInbox>(this.elementdata);
     });
     
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
   
}
