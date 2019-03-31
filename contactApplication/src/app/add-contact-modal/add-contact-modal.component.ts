import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../common/app-constant';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.scss']
})

export class AddContactModalComponent implements OnInit {
 
  constructor() {
   }

  ngOnInit() {
  }

  //to make the modal visible 
  displayModal(){
    return AppConstants.modalAddDisply;
  }

  hideModal(){
    AppConstants.modalAddDisply=false;
    return AppConstants.modalAddDisply;
  }

}
