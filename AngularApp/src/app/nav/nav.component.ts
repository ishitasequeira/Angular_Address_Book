import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NewContactModalComponent } from '../new-contact-modal/new-contact-modal.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //Variables to point to child components
  @ViewChild(NewContactModalComponent) newContactModal;
  
  constructor() { 
  }

  ngOnInit() {
  }

  //open New Contact Modal
  openModal(id: string) {
    this.newContactModal.openModal();
  }

}
