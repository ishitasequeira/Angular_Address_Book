import { Component, OnInit, Output, Input } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view';

@Component({
  selector: 'app-view-contact-modal',
  templateUrl: './view-contact-modal.component.html',
  styleUrls: ['./view-contact-modal.component.scss']
})
export class ViewContactModalComponent implements OnInit {

  contact: Contact;

  constructor() { 
    this.contact = new Contact("","","",0);
  }

  ngOnInit() { }

  // getContact(id:string){
  //   let contacts$: Observable<Contact> = this.serviceService.getContactsByID(id);
  //   contacts$.subscribe(contact => {
  //     this.contact  = contact;
  //     console.log(this.contact);
  // //     // AppConstants.printData(this.contactsList);
  //    });
  //  }

  // close modal
  closeModal(id: string) {
    document.getElementById(id).style.display = "none";
  }
}
