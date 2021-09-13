import { Injectable } from '@angular/core';
import { Inbox } from './inbox.model';

@Injectable({ providedIn: 'root' })
export class InboxService {
  listOfData: Inbox[] = [
    new Inbox(
      1,
      'Covid-19',
      'dhoni1',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      true
    ),
    new Inbox(
      2,
      'Covid-19',
      'dhoni2',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      true
    ),
    new Inbox(
      3,
      'Covid-19',
      'dhoni3',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      false
    ),
    new Inbox(
      4,
      'Covid-19',
      'dhoni4',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      false
    ),
    new Inbox(
      5,
      'Covid-19',
      'dhoni5',
      '2021-9-11',
      '4:30',
      `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
      true
    ),
    new Inbox(
      6,
      'Covid-19',
      'dhoni6',
      '2021-9-11',
      '4:30',
     `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
     false
    ),
    new Inbox(
      7,
      'Covid-19',
      'dhoni7',
      '2021-9-11',
      '4:30',
     `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.`,
     false
    ),
  ];

getAllappointments(){

  return this.listOfData.filter(ob=>ob.declined===false);

}
getDeclined(){

  return this.listOfData.filter(ob=>ob.declined===true);

}
  //delete method
  deleteRecord(args:Inbox){
    const pos = this.listOfData.indexOf(args);
    //this.listOfData.splice(pos, 1);
    this.listOfData[pos].declined=true;
  }
}
