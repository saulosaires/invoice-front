import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../service/contact.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Contact} from "../model/contact";
import {PersistContactComponent} from "../persist/persist-contact.component";

@Component({
  selector: 'app-view-contact',
  standalone: true,
  providers: [ContactsService],
  imports: [HttpClientModule, ReactiveFormsModule, FormsModule, PersistContactComponent],
  templateUrl: './view-contact.component.html',
  styleUrl: './view-contact.component.scss'
})
export class ViewContactComponent implements OnInit {

  contact_dialog: HTMLFormElement | undefined;
  contact: Contact = new Contact();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contactsService: ContactsService) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(
      ({contact}) => {
        this.contact = contact;
      });

    this.contact_dialog = (document.getElementById('contact_dialog') as HTMLFormElement)
  }

  getContact(id?: string) {
    if (id) {
      this.contactsService.findById(id).subscribe(contact => {
        this.contact = contact;
      })
    }
  }

  contactChange(contact: Contact) {

    this.getContact(contact.id);
    (document.getElementById('contact_dialog') as HTMLFormElement)['close']()

  }

  delete() {

    if (this.contact?.id)
      this.contactsService.delete(this.contact.id).subscribe(any => {
        this.router.navigate(['/contact']);
      })
  }
}
