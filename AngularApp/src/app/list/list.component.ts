import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact'
import { ServiceService } from '../service/service.service'
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app-constant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contactsList : Array<Contact>;
  appService : ServiceService;
  constructor(appService : ServiceService){
    //alert("Here");
    this.appService = appService;
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

  displayCard($event : any){
    AppConstants.modalViewDisplay = $event.target.id;
    //alert(AppConstants.modalViewDisplay);
  }
}
