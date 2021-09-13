import { Time } from "@angular/common";

export class Inbox {
    constructor(
    public Sno:number,
    public MeetingTitle: string,
    public Physician: String,
    public Date: string,
    public Time: string,
    public Description:string,
    public declined:boolean
    ){}
  }
  
