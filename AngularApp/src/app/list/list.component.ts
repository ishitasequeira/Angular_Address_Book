import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
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
export class ListComponent implements OnInit, OnDestroy {
  contactsList : Array<Contact>;
  contacts$: Observable<Array<Contact>> = this.appService.getContacts();
  @ViewChild(ViewContactModalComponent) viewContactModal;
  
  constructor(private appService : ServiceService){
    this.list();
  }

  ngOnInit() { 
    this.appService.refreshList$.subscribe(() => {
      this.list();
    });
    this.list();
  }
  
  list(){
    this.appService.getContacts().subscribe((contacts:Array<Contact>)=>{
      this.contactsList = contacts;
    });
  }

  openModal($event) {
   // alert("view");
    this.appService.getContactsByID($event.target.id).subscribe(contact => this.viewContactModal.contact = contact);
    //this.viewContactModal.viewModal = true;
    this.viewContactModal.openModal();
  }

  ngOnDestroy(){
    alert("Destroy!!!!!");
  }

  refresh(){

  }
}
