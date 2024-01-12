import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialogClose, MatDialogTitle} from "@angular/material/dialog";
import {Contact} from "../model/contact";
import {FormsModule} from "@angular/forms";
import {ContactsService} from "../service/contact.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-persist-contact',
  standalone: true,
  providers: [ContactsService],
  imports: [
    MatDialogClose,
    MatDialogTitle,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './persist-contact.component.html',
  styleUrl: './persist-contact.component.scss'
})
export class PersistContactComponent implements OnInit {

  @Output() changed = new EventEmitter<Contact>()

  @Input() contact: Contact = new Contact();

  constructor(private service: ContactsService) {

  }

  ngOnInit(): void {
  }

  save() {
    this.service.save(this.contact).subscribe(contact => {
      this.changed.emit(contact);
    })

  }

}
