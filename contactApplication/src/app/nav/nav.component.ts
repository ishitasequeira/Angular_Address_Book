import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../common/app-constant';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addContact(){
    AppConstants.modalAddDisply = true;
    console.log(AppConstants.modalAddDisply);
  }
}
