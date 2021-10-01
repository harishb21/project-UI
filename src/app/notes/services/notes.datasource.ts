import { NotesServiceService } from './notes-service.service';
import { Notes } from './../model/notes.model';



import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {catchError, finalize} from "rxjs/operators";



export class NotesDataSource implements DataSource<Notes> {

    private notes = new BehaviorSubject<Notes[]>([]);

    private loadingnotes = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingnotes.asObservable();

    constructor(private notesService: NotesServiceService) {

    }

    loadOneNotes(notesId:number,
                filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingnotes.next(true);
        this.notesService.getNotes(notesId, filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingnotes.next(false))
            )
            .subscribe(lessons => this.notes.next(lessons));

    }

    connect(collectionViewer: CollectionViewer): Observable<Notes[]> {
        console.log("Connecting data source");
        return this.notes.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.notes.complete();
        this.loadingnotes.complete();
    }

}

