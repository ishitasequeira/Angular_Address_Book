import { Subject } from 'rxjs';
import { Contact } from 'src/models/contact';

export class AppConstants {
    public static CONTACT_SERVER_BASE_URL: string = 'http://localhost:3000';

    public static modalAddDisply: boolean = false;
    public static modalViewDisplay: Number = 0;
    
    public static contacts$: Subject<Array<Contact>> = null;
}