import {Component, OnInit} from '@angular/core';
import {InvoiceItem} from "./model/invoice.item";
import {NgForOf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PersistProductComponent} from "../../product/persist/persist-product.component";

@Component({
  selector: 'app-invoice-item',
  standalone: true,
  imports: [
    NgForOf,
    MatIconModule,
    FormsModule,
    PersistProductComponent,
    ReactiveFormsModule
  ],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.scss'
})
export class InvoiceItemComponent implements OnInit {

  invoiceItems: InvoiceItem[]=[];

  ngOnInit(): void {

    let item =new InvoiceItem();

    item.product.name='DIGITTM II - 7943 – SG - SW development consultancy January -2024';
    item.product.price= 324.08;
    item.product.tax= 21;
    item.quantity=19;
    item.total=8354.54;

    this.invoiceItems.push(item);

  }
}
