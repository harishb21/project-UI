
import { User } from './user.model';





export class Notes{
    public notesid : number;
    public date : Date;

    public sender: User;
    public receiver: User;
    
    public message : string;
    public urgency : boolean;
}