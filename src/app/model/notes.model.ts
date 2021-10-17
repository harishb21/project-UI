
import { User } from './user.model';





export class Notes{
    public notesid : number;
    public date : Date;

    public sender: User;
    public receiver: User;
    
    public message : string;
    public reply:string[];
    
    public isdeleted:boolean
    public isRead:boolean;
    public urgency : boolean;
}