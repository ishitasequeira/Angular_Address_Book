import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';
import { AddContactModalComponent } from './add-contact-modal/add-contact-modal.component';
import { ViewContactModalComponent } from './view-contact-modal/view-contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    IndexComponent,
    AddContactModalComponent,
    ViewContactModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
