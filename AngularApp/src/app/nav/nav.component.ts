import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  openModal(id: string) {
    document.getElementById(id).style.display = "block";
  }

}
