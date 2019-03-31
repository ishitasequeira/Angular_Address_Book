import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app-constant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contactsList : Array<Contact>;
  appService : AppService;
  constructor(appService : AppService){
    let contacts$: Observable<Array<Contact>> = appService.getContacts();
    contacts$.subscribe(contacts => {
      this.contactsList  = contacts;
      console.log(this.contactsList);
      this.contactsList.sort((a, b) => {
        return a.FirstName.toUpperCase() <= b.FirstName.toUpperCase() ? -1 : 1;
    });
      // AppConstants.printData(this.contactsList);
    });
  }

  ngOnInit() {
  }


  displayCard($event : any){
    AppConstants.modalViewDisplay = $event.target.id;
    //alert(AppConstants.modalViewDisplay);
  }
}
