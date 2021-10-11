import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Notes } from 'src/app/model/notes.model';
import { NotesServiceService } from '../services/notes-service.service';

@Component({
  selector: 'app-sent-notes',
  templateUrl: './sent-notes.component.html',
  styleUrls: ['./sent-notes.component.css']
})
export class SentNotesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild('input', { static: true }) input: ElementRef;


  notes:Notes;
  userId:number =1;
  dataSource: MatTableDataSource<Notes>;
  displayedColumns = ["date", "reciever","message","urgency"];
  constructor(private notesService:NotesServiceService,private route: ActivatedRoute,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.loadNotes();
  }
  loadNotes() {
    this.notesService.getSentNotes(this.userId).subscribe(
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
