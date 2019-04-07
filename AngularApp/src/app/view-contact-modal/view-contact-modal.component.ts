import { Component, OnInit, Output, Input } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view';
import { AppConstants } from '../common/app-constant';

@Component({
  selector: 'app-view-contact-modal',
  templateUrl: './view-contact-modal.component.html',
  styleUrls: ['./view-contact-modal.component.scss']
})
export class ViewContactModalComponent implements OnInit {

  contact: Contact;
  viewModal: Boolean;
  constructor() { 
    this.viewModal = false;
    this.contact = new Contact("","","",0);
  }

  ngOnInit() { }

   // close modal
  closeModal(id: string) {
    this.viewModal=false;
  }

  // open modal
  openModal(){
    this.viewModal = true;
  }
}
