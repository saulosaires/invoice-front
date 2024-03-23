import {Component, OnInit} from '@angular/core';
import {InvoiceItem} from "./model/invoice.item";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PersistProductComponent} from "../../product/persist/persist-product.component";
import {InvoiceAddItemComponent} from "../invoice-add-item/invoice-add-item.component";

@Component({
  selector: 'app-invoice-item',
  standalone: true,
  imports: [
    NgForOf,
    MatIconModule,
    FormsModule,
    PersistProductComponent,
    ReactiveFormsModule,
    InvoiceAddItemComponent,
    CurrencyPipe
  ],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.scss'
})
export class InvoiceItemComponent implements OnInit {

  invoiceItems: InvoiceItem[] = [];
  itemSelected = new InvoiceItem();

  ngOnInit(): void {

    /**
    let item = new InvoiceItem();

    item.product.name = 'DIGITTM II - 7943 – SG - SW development consultancy January -2024';
    item.product.price = 324.08;
    item.product.tax = 21;
    item.description = 'something to say';
    item.quantity = 19;
    item.discount = 3;
    item.total = 8354.54;

    this.invoiceItems.push(item);
     **/

  }

  itemChanged(item: InvoiceItem) {
    console.log(item);
    if(item.index && item.index>=0){
      this.invoiceItems[item.index-1]=item;
    }else{
      this.invoiceItems.push(item);
    }
    console.log(this.invoiceItems);
    (document.getElementById('add_item') as HTMLFormElement)['close']()
  }

  itemSelect(i: number) {
    this.itemSelected = this.invoiceItems[i];
    this.itemSelected.index=i+1;

    (document.getElementById('add_item') as HTMLFormElement)['showModal']()

  }
}
