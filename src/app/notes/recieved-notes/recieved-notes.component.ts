import { AuthService } from './../../services/auth.service';
import { Notes } from './../../model/notes.model';

import { NotesServiceService } from './../services/notes-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable, of } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, debounceTime, distinctUntilChanged, finalize, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MessageDailogComponent } from './message-dailog/message-dailog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-recieved-notes',
  templateUrl: './recieved-notes.component.html',
  styleUrls: ['./recieved-notes.component.css']
})
export class RecievedNotesComponent implements OnInit {
  animal: string;
  name: string;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild('input', { static: true }) input: ElementRef;
  public user: User;

  notes:Notes;
  dataSource: MatTableDataSource<Notes>;
  displayedColumns = ["date", "sender","message","urgency"];
  constructor(private notesService:NotesServiceService,private route: ActivatedRoute,
    public dialog: MatDialog,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe((res) => {
      this.user = res;
    });
    this.loadNotes();
  }
  loadNotes() {
    this.notesService.getRecievedNotes(this.user.userId).subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
	}
	applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }
  onRowClicked(notesId:any) {
    console.log('Row clicked: ', notesId);
    this.notesService.updateRead(notesId).subscribe(
      (res)=>{
        
      }
    )
}
openDialog(note:Notes): void {
  this.onRowClicked(note.notesid)
  const dialogRef = this.dialog.open(MessageDailogComponent, {
    data: note
  });

  dialogRef.afterClosed().subscribe(result => {
    
  });
}


}

