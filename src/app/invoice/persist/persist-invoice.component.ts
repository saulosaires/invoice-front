import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "../../country/country.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CompanyService} from "../../company/service/company.service";
import {BanksService} from "../../bank/service/bank.service";
import {Company} from "../../company/model/company";

 import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ContactsService} from "../../contact/service/contact.service";
import {Contact} from "../../contact/model/contact";
import {NgForOf, NgIf} from "@angular/common";
import {Bank} from "../../bank/model/bank";

@Component({
  selector: 'app-persist-invoice',
  standalone: true,

  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, MatNativeDateModule, MatInputModule, MatDatepickerModule, NgForOf, FormsModule, NgIf,
  ],
  templateUrl: './persist-invoice.component.html',
  styleUrl: './persist-invoice.component.scss'
})
export class PersistInvoiceComponent implements OnInit {

  sortDirection:string="asc";
  page:number=0;
  size:number=10
  field:string='name';

  contacts: Contact[] | undefined = [];
  banks:Bank[] = [];

  company: Company = new Company();
  contact:Contact=new Contact();
  bank:Bank=new Bank();

  bankId?:string;
  contactId?:string;
  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService,
              private _snackBar: MatSnackBar,
              private contactsService: ContactsService,
              private companyService: CompanyService,
              private banksService: BanksService) {
  }

  ngOnInit(): void {

    this.companyService.findByUser().subscribe(company=>{this.company=company;});
    this.getContacts();
    this.getBanks();
  }

  getContacts() {
    this.contactsService.findByUser(this.page,this.size,this.field,this.sortDirection).subscribe(pageable => {
      this.contacts=pageable.content;
    });
  }

  getBanks() {
    this.banksService.findByUser().subscribe(banks => {
      this.banks=banks;
    });
  }

  contactChange() {

    if(this.contacts)
      this.contacts.forEach(c=>{
        if(c.id==this.contactId){
          this.contact=c;
        }
      });
  }

  bankChange() {

    this.banks.forEach(b=>{
      if(b.id==this.bankId){
        this.bank=b;
      }
    });

  }
}
