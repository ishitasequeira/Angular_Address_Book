import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { AppConstants } from './common/app-constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contactApplication';

  contactsList : Array<Contact>;

  constructor(appService : AppService){
    let contacts$: Observable<Array<Contact>> = appService.getContacts();
    contacts$.subscribe(contacts => {
      this.contactsList  = contacts;
      console.log(this.contactsList);
      AppConstants.printData(this.contactsList);
    });
  }

}
