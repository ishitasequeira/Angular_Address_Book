import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../common/app-constant'
import { Contact } from '../models/contact';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ServiceService {

	//variables
	contact: Contact;
	contactResource: string;
	contactResourceURL: string;

	//subject to perform autorefresh of contactsList
	private refresh$ = new Subject<void>();
	get refreshList$() {
		return this.refresh$;
	}

	//constructor to initialize service
	constructor(private http: HttpClient) {
		this.contactResource = 'contacts';
		this.contactResourceURL = `${AppConstants.CONTACT_SERVER_BASE_URL}/${this.contactResource}`;
	}

	//Observable to fetch all the contacts
	getContacts(): Observable<Array<Contact>> {
		return this.http.get<Array<Contact>>(this.contactResourceURL);
	}

	//Observable to fetch a specific contact
	getContactsByID(id): Observable<Contact> {
		return this.http.get<Contact>(this.contactResourceURL + "/" + id);
	}

	//Observable to post a new Contact
	addContact(contact: Contact): Observable<Contact> {
		return this.http.post<Contact>('http://localhost:3000/contacts', contact)
		//adding a pipe to the observable
		.pipe(
			//tap method to create an interceptor
			tap(() => {
			this.refresh$.next();
		}));
	}
}
