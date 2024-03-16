import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from "../../company/model/company";
import {Contact} from "../../contact/model/contact";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "../../country/country.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ContactsService} from "../../contact/service/contact.service";
import {CompanyService} from "../../company/service/company.service";
import {BanksService} from "../../bank/service/bank.service";

@Component({
  selector: 'app-invoice-client',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './invoice-client.component.html',
  styleUrl: './invoice-client.component.scss'
})
export class InvoiceClientComponent  implements OnInit {

  @Output()  contact= new EventEmitter<Contact>();

  contactId?:string;
  contactSelect=new Contact();
  contacts: Contact[] | undefined = [];

  sortDirection:string="asc";
  page:number=0;
  size:number=10
  field:string='name';

  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService,
              private _snackBar: MatSnackBar,
              private contactsService: ContactsService,
              private companyService: CompanyService,
              private banksService: BanksService) {
  }

  ngOnInit(): void {
    this.getContacts();
    }

  getContacts() {
    this.contactsService.findByUser(this.page,this.size,this.field,this.sortDirection).subscribe(pageable => {
      this.contacts=pageable.content;
    });
  }

  contactChange() {

    if(this.contacts)
      this.contacts.forEach(c=>{
        if(c.id==this.contactId){
          this.contactSelect=c;
          this.contact.emit(c);

        }
      });
  }

}
