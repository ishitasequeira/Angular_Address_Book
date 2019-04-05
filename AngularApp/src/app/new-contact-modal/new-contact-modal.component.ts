import { Component, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';
import { AppConstants } from '../common/app-constant';
import { Contact } from 'src/models/contact';
import { ServiceService } from '../service/service.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-new-contact-modal',
	templateUrl: './new-contact-modal.component.html',
	styleUrls: ['./new-contact-modal.component.scss']
})
export class NewContactModalComponent implements OnInit {

	@Input() id: string;
	msg: string = "";
	contact: Contact = new Contact("", "", "", 0);

	constructor(private serviceService: ServiceService) { }

	ngOnInit() { }

	validateAndAddContact() {
		let msg: string = "";
		if (this.contact.FirstName == null || this.contact.FirstName == "") {
			msg += "Firstname cannot be null!!!";
		}
		if (this.contact.LastName == null || this.contact.LastName == "") {
			msg += "Lastname cannot be null!!!";
		}
		if (this.contact.phoneNumber == null || this.contact.phoneNumber == 123) {
			msg += "PhoneNumber cannot be null!!!";
		}
		if (msg == "") {
			this.msg = msg = "";
			alert("Primary Validations Passed");
			let valid: boolean = true;
			var phoneno = /^\(?([1-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			if (!this.contact.phoneNumber.toString().match(phoneno)) {
				valid = false;
				msg += "Please enter a 10 digit valid phone number!"
			}
			if (this.contact.email == null || this.contact.email == undefined || this.contact.email == "") {
				this.contact.email = "";
			} else {
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if (!this.contact.email.match(mailformat)) {
					valid = false;
					msg += "Please enter a valid email-id!"
				}
			}
			if (valid) {
				alert("Here");
				let contacts$: Observable<Contact> = this.serviceService.addContact(this.contact);
				contacts$.subscribe(contacts => {
					alert("added");
				});
				this.closeModal("addContactModal");
			}
			this.msg = msg;
		} else {
			this.msg = msg;
		}
	}

	// close modal
	closeModal(id: string) {
		document.getElementById(id).style.display = "none";
	}
}
