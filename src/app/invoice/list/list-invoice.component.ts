import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {InvoiceService} from "../service/invoice.service";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {SortedDirective} from "../../components/sorted.directive";
import {Invoice} from "../model/invoice";

@Component({
  selector: 'app-list-invoice',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    NgForOf,
    SortedDirective,
    CurrencyPipe
  ],
  templateUrl: './list-invoice.component.html',
  styleUrl: './list-invoice.component.scss'
})
export class ListInvoiceComponent implements OnInit {

  invoices: Invoice[] | undefined = [];
  sortDirection: string = "asc";
  page: number = 0;
  size: number = 10
  field: string = 'id';

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {

    this.invoiceService.findByUser(this.page, this.size, this.field, this.sortDirection)
      .subscribe(page => {
        console.log(page);
        this.invoices = page.content;
      });

  }

  sort(name: string) {
    this.sortDirection = this.sortDirection == "desc" ? 'asc' : 'desc';
    this.field = name;

    // this.getContacts();
  }

}
