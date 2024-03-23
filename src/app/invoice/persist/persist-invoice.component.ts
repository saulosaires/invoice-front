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
import {SortedDirective} from "../../components/sorted.directive";
import {Invoice} from "../model/invoice";
import {InvoiceBusinessComponent} from "../invoice-business/invoice-business.component";
import {InvoiceClientComponent} from "../invoice-client/invoice-client.component";
import {InvoicePaymentComponent} from "../invoice-payment/invoice-payment.component";
import {InvoiceItemComponent} from "../invoice-item/invoice-item.component";
import test from "node:test";
import {Payment} from "../invoice-payment/model/payment";
import {PersistProductComponent} from "../../product/persist/persist-product.component";
import {InvoiceExtraComponent} from "../invoice-extra/invoice-extra.component";

@Component({
  selector: 'app-persist-invoice',
  standalone: true,

  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, MatNativeDateModule, MatInputModule, MatDatepickerModule, NgForOf, FormsModule, NgIf, SortedDirective, InvoiceBusinessComponent, InvoiceClientComponent, InvoicePaymentComponent, InvoiceItemComponent, PersistProductComponent, InvoiceExtraComponent,
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

  invoice:Invoice=new Invoice();
  abc: any;


  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService,
              private _snackBar: MatSnackBar,
              private contactsService: ContactsService,
              private companyService: CompanyService,
              private banksService: BanksService) {
  }

  ngOnInit(): void {
    this.companyService.findByUser().subscribe(company=>{this.company=company;});
  }

  contactSelected($event:Contact){
    console.log($event);
  }
  paymentChange(payment:Payment) {
    console.log(payment);
  }

  extraNoteChange(extraNote:string){
    console.log(extraNote);
  }




}
