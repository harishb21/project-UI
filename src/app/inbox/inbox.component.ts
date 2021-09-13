import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
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
import { InboxService } from '../inbox.service';
import { Inbox } from '../inbox.model';

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
  ELEMENT_DATA1: Inbox[] = this.inboxService.getAllappointments();
  dataSource = new MatTableDataSource<Inbox>(this.ELEMENT_DATA1);
  columnsToDisplay: string[] = [
    'Sno',
    'MeetingTitle',
    'Physician',  
    'Date',
    'Time',
    'action',
  ];

  expandedElement: Inbox | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private inboxService: InboxService) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickAction(args: Inbox) {
    alert('args-' + args);
    this.expandedElement = args;
  }
  onClickDelete(args:Inbox){
    this.expandedElement = args;
    this.inboxService.deleteRecord(args);
    this.ELEMENT_DATA1 = this.inboxService.getAllappointments();
    this.dataSource = new MatTableDataSource<Inbox>(this.ELEMENT_DATA1);
    alert(" component record deleted");
  }
}
