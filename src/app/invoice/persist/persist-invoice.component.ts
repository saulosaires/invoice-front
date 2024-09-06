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
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Bank} from "../../bank/model/bank";
import {SortedDirective} from "../../components/sorted.directive";
import {Invoice} from "../model/invoice";
import {InvoiceBusinessComponent} from "../invoice-business/invoice-business.component";
import {InvoiceClientComponent} from "../invoice-client/invoice-client.component";
import {InvoicePaymentComponent} from "../invoice-payment/invoice-payment.component";
import {InvoiceItemComponent} from "../invoice-item/invoice-item.component";
import {Payment} from "../invoice-payment/model/payment";
import {PersistProductComponent} from "../../product/persist/persist-product.component";
import {InvoiceExtraComponent} from "../invoice-extra/invoice-extra.component";
import {MatIconModule} from "@angular/material/icon";
import {InvoiceStyleComponent} from "../invoice-style/invoice-style.component";
import {InvoiceItem} from "../invoice-item/model/invoice.item";

@Component({
  selector: 'app-persist-invoice',
  standalone: true,

  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, MatNativeDateModule, MatInputModule, MatDatepickerModule, NgForOf, FormsModule, NgIf, SortedDirective, InvoiceBusinessComponent, InvoiceClientComponent, InvoicePaymentComponent, InvoiceItemComponent, PersistProductComponent, InvoiceExtraComponent, MatIconModule, NgClass, InvoiceStyleComponent,
  ],
  templateUrl: './persist-invoice.component.html',
  styleUrl: './persist-invoice.component.scss'
})
export class PersistInvoiceComponent implements OnInit {

  contact: Contact = new Contact();
  bank: Bank = new Bank();
  invoice: Invoice = new Invoice();


  stepDetails: boolean = true;
  stepStyle: boolean = true;
  stepExport: boolean = false;
  currentStep: number = 1;
  steps: any;

  showStyleSection: Boolean = false;
  showDataSection: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService,
              private _snackBar: MatSnackBar,
              private contactsService: ContactsService,
              private companyService: CompanyService,
              private banksService: BanksService) {
  }

  ngOnInit(): void {
    this.companyService.findByUser().subscribe(company => {
      console.log(company);
      this.invoice.company = company;
    });


    this.steps = [
      {name: "Details", selected: true},
      {name: "Style", selected: false},
      {name: "Export", selected: false}
    ];

    this.showSections();
  }

  contactSelected(contact: Contact) {
    this.invoice.contact = contact;
  }

  itemChange(items: InvoiceItem[]){
    this.invoice.invoiceItem=items;
  }

  paymentChange(payment: Payment) {
    this.invoice.bank = payment.bank;
    this.invoice.invoiceNumber = payment.invoiceNumber;
    this.invoice.date = payment.date;
    this.invoice.dueDate = payment.dueDate;
  }

  extraNoteChange(comment: string) {
    this.invoice.comment = comment;
  }

  nextStep() {

    let index = this.getNextStep();

    if (index < 0) return;

    this.steps[index].selected = true;

    this.showSections();
  }

  previousStep() {

    let index = this.getNextStep();

    if (index == 1) return;

    if (index < 0) {
      this.steps[this.steps.length - 1].selected = false;
      return
    }

    this.steps[index - 1].selected = false;

    this.showSections();
  }

  getNextStep() {
    return this.steps.findIndex((step: { selected: boolean; }) => !step.selected);
  }

  isStepSelected() {

    let lastStep: any;

    for (const step of this.steps) {
      if (step.selected) {
        lastStep = step;
      }
    }

    return lastStep;
  }

  showSections() {
    this.showDataSection = this.isStepSelected().name == "Details";
    this.showStyleSection = this.isStepSelected().name == "Style";
  }

}
