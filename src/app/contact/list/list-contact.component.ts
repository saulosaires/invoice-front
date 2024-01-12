import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {PersistContactComponent} from "../persist/persist-contact.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ContactsService} from "../service/contact.service";
import {Contact} from "../model/contact";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-contact',
  standalone: true,
  providers: [ContactsService, Document],
  imports: [
    MatIconModule,
    PersistContactComponent,
    ReactiveFormsModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.scss'
})
export class ListContactComponent implements OnInit {

  contact_dialog: HTMLFormElement | undefined;
  contacts: Contact[] = [];

  constructor(private service: ContactsService) {
  }

  ngOnInit(): void {
    this.getContacts();
    this.contact_dialog = (document.getElementById('contact_dialog') as HTMLFormElement)
  }

  getContacts() {
    this.service.findByUser().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  contactChanged($event: Contact) {

    if (this.contact_dialog) {
      this.getContacts();
      this.contact_dialog['close']();

    }

  }
}
