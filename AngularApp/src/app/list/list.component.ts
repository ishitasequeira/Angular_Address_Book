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
  
  //variables
  contactsList : Array<Contact>;
  contacts$: Observable<Array<Contact>> = this.appService.getContacts();
  
  //Variables to point to child components
  @ViewChild(ViewContactModalComponent) viewContactModal;

  constructor(private appService : ServiceService){
    this.list();
  }

  ngOnInit() { 
    //logic to perform auto-refresh
    this.appService.refreshList$.subscribe(() => {
      this.list();
    });
    this.list();
  }
  
  //subscription to observable to read/display all the contacts
  list(){
    this.appService.getContacts().subscribe((contacts:Array<Contact>)=>{
      this.contactsList = contacts;
    });
  }

  //open view contact modal
  openModal($event) {
    this.appService.getContactsByID($event.target.id).subscribe(contact => this.viewContactModal.contact = contact);
    this.viewContactModal.openModal();
  }

}
