
import { NotesServiceService } from './../services/notes-service.service';
import { Notes } from '../../model/notes.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable, of } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, debounceTime, distinctUntilChanged, finalize, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-recieved-notes',
  templateUrl: './recieved-notes.component.html',
  styleUrls: ['./recieved-notes.component.css']
})
export class RecievedNotesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild('input', { static: true }) input: ElementRef;


  notes:Notes;
  userId:number =1;
  dataSource: MatTableDataSource<Notes>;
  displayedColumns = ["date", "sender","message","urgency"];
  constructor(private notesService:NotesServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadNotes();
  }
  loadNotes() {
    this.notesService.getRecievedNotes(this.userId).subscribe(
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
  onRowClicked(row:any) {
    console.log('Row clicked: ', row);
}
}
