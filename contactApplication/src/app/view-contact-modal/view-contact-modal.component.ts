import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../common/app-constant';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { AppService } from '../app.service';

@Component({
	selector: 'app-view-contact-modal',
	templateUrl: './view-contact-modal.component.html',
	styleUrls: ['./view-contact-modal.component.scss']
})
export class ViewContactModalComponent implements OnInit {
	appService: AppService;
	contactCard: Contact;
	getContactById$: Observable<Contact>;
	constructor(appService: AppService) {
		this.appService = appService;
	}

	ngOnInit() {

	}
	//to make the modal visible 
	displayModal() {

		this.getContactById$ = this.appService.getContactsByID(AppConstants.modalViewDisplay);
		this.getContactById$.subscribe(contact => {
			this.contactCard  = contact;
			console.log(this.contactCard);
		});
		return AppConstants.modalViewDisplay;
	}

	hideModal() {
		AppConstants.modalViewDisplay = 0;
		return AppConstants.modalViewDisplay;
	}

}
