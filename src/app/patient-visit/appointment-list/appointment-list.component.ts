import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/patient/patient.service';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}
  dataSource: any;
  APPOINTMENT_DATA: Appointment[] = [];
  public patientId: string;

  ngOnInit(): void {
    this.patientId = this.activatedroute.snapshot.paramMap.get('id');
    this.appointmentService.patientId = this.patientId;

    this.appointmentService.getAllList().subscribe((data) => {
      console.log(data);

      this.dataSource = new MatTableDataSource<Appointment>(data);

      console.log(this.dataSource);
    });
    console.log('Appointment data :' + this.APPOINTMENT_DATA);
  }
  displayedColumns: string[] = ['id', 'start time', 'end time', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editData(id: number) {
    console.log(id);
    // id=1;
    this.router.navigate(['patient-visit/visit/' + id]);
  }
}
