//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{AppService} from './app.service';
import {Contact} from './models/contact';



//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { AddContactModalComponent } from './add-contact-modal/add-contact-modal.component';
import { ViewContactModalComponent } from './view-contact-modal/view-contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    AddContactModalComponent,
    ViewContactModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
