import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {PersistContactComponent} from "../persist/persist-contact.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ContactsService} from "../service/contact.service";
import {Contact} from "../model/contact";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {SortedDirective} from "../../components/sorted.directive";

@Component({
  selector: 'app-list-contact',
  standalone: true,
  providers: [ContactsService, Document],
  imports: [
    MatIconModule,
    PersistContactComponent,
    ReactiveFormsModule,
    NgForOf,
    RouterLink,
    SortedDirective
  ],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.scss'
})
export class ListContactComponent implements OnInit {

  contact_dialog: HTMLFormElement | undefined;
  contacts: Contact[] | undefined = [];
  sortDirection: string = "asc";
  page: number = 0;
  size: number = 10
  field: string = 'name';

  constructor(private service: ContactsService) {
  }

  ngOnInit(): void {
    this.getContacts();
    this.contact_dialog = (document.getElementById('contact_dialog') as HTMLFormElement)
  }

  getContacts() {
    this.service.findByUser(this.page, this.size, this.field, this.sortDirection).subscribe(pageable => {
      this.contacts = pageable.content;
    });
  }

  contactChanged($event: Contact) {

    if (this.contact_dialog) {
      this.getContacts();
      this.contact_dialog['close']();

    }

  }

  sort(name: string) {
    this.sortDirection = this.sortDirection == "desc" ? 'asc' : 'desc';
    this.field = name;

    this.getContacts();
  }
}
