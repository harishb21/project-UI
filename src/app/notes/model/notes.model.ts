import { Staff } from './Staff.model';


export class Notes{
    public notesid : number;
    public date : Date;

    public sender: Staff;
    public receiver: Staff;
    
    public message : string;
    public urgency : boolean;
}