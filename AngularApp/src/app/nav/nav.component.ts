import { Component, OnInit, ViewChild } from '@angular/core';
import { NewContactModalComponent } from '../new-contact-modal/new-contact-modal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild(NewContactModalComponent) newContactModal;
  constructor() { 
  }

  ngOnInit() {
  }

  openModal(id: string) {
    //document.getElementById(id).style.display = "block";
    //alert("view");
    //this.appService.getContactsByID($event.target.id).subscribe(contact => this.viewContactModal.contact = contact);
    //this.newContactModal.viewModal = true;
    this.newContactModal.openModal();
  }

}
