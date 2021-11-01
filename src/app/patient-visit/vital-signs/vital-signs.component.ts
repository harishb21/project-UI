import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/toast/toast.service';
import { Vitals } from '../model/vitals';
import { AppointmentService } from '../services/appointment.service';
import { VitalSignsService } from '../services/vital-signs.service';
@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css'],
})
export class VitalSignsComponent implements OnInit {
  appointmentId: string;
  Form: FormGroup = new FormGroup({});
  submitted = false;
  selectedViatalId: number;

  vitalsSubmitted: boolean = false;

  vitals: Vitals = new Vitals();

  constructor(
    private formBuilder: FormBuilder,
    private service: VitalSignsService,
    private appointmentService: AppointmentService,
    private _snackBar: MatSnackBar
  ) {}

  vitalId1: null;
  height1: null;
  weight1: null;
  bloodPressure1: null;
  bodyTemperature1: null;
  respirationRate1: null;

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      vitalId: [''],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      bloodPressure: ['', Validators.required],
      bodyTemperature: ['', Validators.required],
      respirationRate: ['', Validators.required],
    });

    this.appointmentId = this.appointmentService.appointmentId;

    this.service.getByAppointmentId(this.appointmentId).subscribe((data) => {
      console.log(data);

      this.vitalId1 = data.vitalId;
      this.height1 = data.height;
      this.weight1 = data.weight;
      this.bloodPressure1 = data.bloodPressure;
      this.bodyTemperature1 = data.bodyTemperature;
      this.respirationRate1 = data.respirationRate;
    });
  }

  obj: Vitals = new Vitals();

  onSubmit() {
    this.obj.vitalId = this.Form.value.vitalId;
    this.obj.height = this.Form.value.height;
    this.obj.weight = this.Form.value.weight;
    this.obj.bloodPressure = this.Form.value.bloodPressure;
    this.obj.bodyTemperature = this.Form.value.bodyTemperature;
    this.obj.respirationRate = this.Form.value.respirationRate;

    this.service
      .addVitals(this.obj)
      .subscribe((data: { statusMessage: string | TemplateRef<any> }) => {
        this._snackBar.open('Saved Successfully!!', '', { duration: 2000 });
      });
  }
}
