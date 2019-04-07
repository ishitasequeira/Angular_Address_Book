import { Component, OnInit, Input, OnDestroy, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppConstants } from '../common/app-constant';
import { Contact } from '../models/contact';
import { ServiceService } from '../service/service.service';
import { Observable } from 'rxjs';
import { ListComponent } from '../list/list.component';

@Component({
	selector: 'app-new-contact-modal',
	templateUrl: './new-contact-modal.component.html',
	styleUrls: ['./new-contact-modal.component.scss']
})
export class NewContactModalComponent implements OnInit {

	//Input
	@Input() id: string;

	//Variables
	viewModal:boolean;
	msg: string = "";
	contact: Contact = new Contact("", "", "", 0);

	constructor(private serviceService: ServiceService) {
		this.viewModal = false;
	 }

	ngOnInit() { }

	//Method to perform validations and post data if valid
	validateAndAddContact() {
		let msg: string = "";
		//check if all the fields are filled or not
		if (this.contact.FirstName == null || this.contact.FirstName == "") {
			msg += "Firstname cannot be null!!!";
		}
		if (this.contact.LastName == null || this.contact.LastName == "") {
			msg += "Lastname cannot be null!!!";
		}
		if (this.contact.phoneNumber == null || this.contact.phoneNumber == 123) {
			msg += "PhoneNumber cannot be null!!!";
		}

		//if no fields are blank
		if (msg == "") {
			this.msg = msg = "";
			//Check if phonenumber is valid or not
			let valid: boolean = true;
			var phoneno = /^\(?([1-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			if (!this.contact.phoneNumber.toString().match(phoneno)) {
				valid = false;
				msg += "Please enter a 10 digit valid phone number!"
			}
			//Check for valid email
			if (this.contact.email == null || this.contact.email == undefined || this.contact.email == "") {
				this.contact.email = "";
			} else {
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if (!this.contact.email.match(mailformat)) {
					valid = false;
					msg += "Please enter a valid email-id!"
				}
			}
			//After all validations pass, Save the contact
			if (valid) {
				this.serviceService.addContact(this.contact).subscribe();
				this.closeModal("addContactModal");
				this.contact = new Contact("","","",0)
			}
			this.msg = msg;
		} else {
			this.msg = msg;
		}
	}

	// close modal
	closeModal(id: string) {
		this.viewModal = false;
	}

	//open modal
	openModal() {
		this.viewModal = true;
	}
}
