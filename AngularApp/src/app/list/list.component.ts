import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../models/contact'
import { ServiceService } from '../service/service.service'
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app-constant';
import { ViewContactModalComponent } from '../view-contact-modal/view-contact-modal.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contactsList : Array<Contact>;
  //
  @ViewChild(ViewContactModalComponent) viewContactModal;
  constructor(private appService : ServiceService){
    this.list();
  }

  ngOnInit() { }
  
  list(){
    let contacts$: Observable<Array<Contact>> = this.appService.getContacts();
    contacts$.subscribe(contacts => {
      this.contactsList  = contacts;
      console.log(this.contactsList);
      // AppConstants.printData(this.contactsList);
    });
  }

  openModal($event, modalId: string) {
    this.appService.getContactsByID($event.target.id).subscribe(contact => this.viewContactModal.contact = contact);
    document.getElementById(modalId).style.display = "block";
  }
  
}
