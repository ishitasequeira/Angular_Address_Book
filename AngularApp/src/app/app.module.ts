import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import{ServiceService} from './service/service.service';
import {Contact} from './models/contact';
import { NewContactModalComponent } from './new-contact-modal/new-contact-modal.component';
import { ViewContactModalComponent } from './view-contact-modal/view-contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    NewContactModalComponent,
    ViewContactModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService, ViewContactModalComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
