import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  Form: FormGroup;
  submitted = false;
  selectedViatalId: number;

  constructor(
    private formBuilder: FormBuilder,
    private service: VitalSignsService,
    private toastService: ToastService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      height: ['', Validators.required],
      weight: ['', Validators.required],
      bloodPressure: ['', Validators.required],
      bodyTemperature: ['', Validators.required],
      respirationRate: ['', Validators.required],
    });

    this.appointmentId = this.appointmentService.appointmentId;

    this.service
      .getByAppointmentId(this.appointmentId)
      .subscribe(
        (val: {
          vital_id: number;
          height: any;
          weight: any;
          bloodPressure: any;
          bodyTemperature: any;
          respirationRate: any;
        }) => {
          this.selectedViatalId = val.vital_id;
          this.Form.get('height').setValue(val.height);
          this.Form.get('weight').setValue(val.weight);
          this.Form.get('bloodPressure').setValue(val.bloodPressure);
          this.Form.get('bodyTemperature').setValue(val.bodyTemperature);
          this.Form.get('respirationRate').setValue(val.respirationRate);
        }
      );
  }

  onSubmit() {
    this.submitted = true;
    if (this.Form.invalid) {
      return;
    }
    let vital: Vitals = this.Form.value;
    vital.appointmentId = this.appointmentId;
    if (this.selectedViatalId) {
      vital.vitalId = this.selectedViatalId;
    }
    this.service
      .addVitals(vital)
      .subscribe((data: { statusMessage: string | TemplateRef<any> }) => {
        this.toastService.show(data.statusMessage, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
      });
  }
}
