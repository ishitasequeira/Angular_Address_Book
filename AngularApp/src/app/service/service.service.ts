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
	contact: Contact;
	contactResource: string;
	contactResourceURL: string;

	private refresh$ = new Subject<void>();

	get refreshList$() {
		return this.refresh$;
	}

	constructor(private http: HttpClient) {
		this.contactResource = 'contacts';
		this.contactResourceURL = `${AppConstants.CONTACT_SERVER_BASE_URL}/${this.contactResource}`;
	}

	getContacts(): Observable<Array<Contact>> {
		return this.http.get<Array<Contact>>(this.contactResourceURL);
	}

	getContactsByID(id): Observable<Contact> {
		return this.http.get<Contact>(this.contactResourceURL + "/" + id);
	}


	addContact(contact: Contact): Observable<Contact> {
		return this.http.post<Contact>('http://localhost:3000/contacts', contact).pipe(tap(() => {
			this.refresh$.next();
		}));
	}
}
