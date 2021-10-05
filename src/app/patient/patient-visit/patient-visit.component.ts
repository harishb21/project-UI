import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.css'],
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
export class PatientVisitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['position', 'medication', 'dosage'];
  expandedElement: PeriodicElement | null;

  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}

export interface PeriodicElement {
  position: number;
  medication: string;
  dosage: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    medication: 'Paracetamol',
    dosage: 300,
    description: `Paracetamol (acetaminophen) is a pain reliever and a fever reducer. 
      The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, 
      muscle aches, arthritis, backache, toothaches, colds, and fevers.`,
  },
  {
    position: 2,
    medication: 'Benadryl',
    dosage: 500,
    description: `Diphenhydramine is an antihistamine used to relieve symptoms of allergy, 
      hay fever, and the common cold. These symptoms include rash, itching, watery eyes, 
      itchy eyes/nose/throat, cough, runny nose, and sneezing. 
      It is also used to prevent and treat nausea, vomiting and dizziness caused by motion sickness.`,
  },
];
