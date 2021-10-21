export class TimeslotCheck{
    public roleId:number;
	public physicianEmpId:number;
	public patientId:number;
	public startDateTime:String;
	public endDateTime:String;
    constructor(){}
}

export class TimeSlotResponse{
    public timeSlotFlag:boolean;
	public message:String;
    constructor(){}
}