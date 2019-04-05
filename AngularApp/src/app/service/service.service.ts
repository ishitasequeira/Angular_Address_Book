import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../common/app-constant'
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
	contact: Contact;
  contactResource: string;
	contactResourceURL: string;
  constructor(private http: HttpClient) {
		this.contactResource = 'contacts';
		this.contactResourceURL = `${AppConstants.CONTACT_SERVER_BASE_URL}/${this.contactResource}`;
	}

	getContacts(): Observable<Array<Contact>> {
		return this.http.get<Array<Contact>>(this.contactResourceURL);
	}
	getContactsByID(id): Observable<Contact> {
		return this.http.get<Contact>(this.contactResourceURL+"/"+id);
	}

addContact(contact:Contact): Observable<Contact> {
	alert(contact);
    return this.http.post<Contact>('http://localhost:3000/contacts', contact);
	}
}
