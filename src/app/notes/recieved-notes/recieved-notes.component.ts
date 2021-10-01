import { NotesDataSource } from './../services/notes.datasource';
import { NotesServiceService } from './../services/notes-service.service';
import { Notes } from './../model/notes.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable, of } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, debounceTime, distinctUntilChanged, finalize, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

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
  dataSource: NotesDataSource;
  displayedColumns = ["date ", "sender","message","urgency"];
  constructor(private notesService:NotesServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.notes = this.route.snapshot.data["notes"];

        this.dataSource = new NotesDataSource(this.notesService);

        this.dataSource.loadOneNotes(this.notes.notesid, '', 'asc', 0, 3);
        console.log(this.dataSource)
  }
  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement,'keyup')
        .pipe(
            debounceTime(150),
            distinctUntilChanged(),
            tap(() => {
                this.paginator.pageIndex = 0;

                this.loadLessonsPage();
            })
        )
        .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
        tap(() => this.loadLessonsPage())
    )
    .subscribe();

}

loadLessonsPage() {
    this.dataSource.loadOneNotes(
        this.notes.notesid,
        this.input.nativeElement.value,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize);
}
  onRowClicked(row:any) {
    console.log('Row clicked: ', row);
}
}
