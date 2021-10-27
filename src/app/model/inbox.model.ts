
export class InboxData {    
    constructor(
        public id: number,
        public title: String,
        public startTime: Date,
        public endTime: Date,
        public description: String,
        public physicianId:number,
        public patientId:number,
        public reason:String
    ){}
}

export class DashboardInbox{  
    constructor(){}
            public id: number;
            public title: String;
            public dashboardDate:Date;
            public dashboardStime: Date;
            public dashboardEtime: Date;
            public description: String;
            public physicianName:string;
            public patientName:number;
            public declined:boolean;
    }
export class StaffName{

    public staffName:String;
    public id:number;
    constructor(){}
}

export class PatientName{
    public patientName:String;
    public pId:number;
    constructor(){}
}


