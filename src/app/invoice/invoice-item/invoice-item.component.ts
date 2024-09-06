import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {InvoiceItem} from "./model/invoice.item";
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PersistProductComponent} from "../../product/persist/persist-product.component";
import {InvoiceAddItemComponent} from "../invoice-add-item/invoice-add-item.component";
import {Payment} from "../invoice-payment/model/payment";

@Component({
  selector: 'app-invoice-item',
  standalone: true,
  imports: [
    NgForOf,
    MatIconModule,
    FormsModule,
    PersistProductComponent,
    ReactiveFormsModule,
    CurrencyPipe,
    NgIf,
    AsyncPipe,
    InvoiceAddItemComponent,
  ],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.scss'
})
export class InvoiceItemComponent implements OnInit, AfterViewInit {

  invoiceItems: InvoiceItem[] = [];
  itemSelected: InvoiceItem = new InvoiceItem();

  @Output() items = new EventEmitter<InvoiceItem[]>();


  @ViewChild('add_item') addItem!: ElementRef<HTMLDialogElement>;
  @ViewChild('invoiceAddItem') invoiceAddItem!: InvoiceAddItemComponent

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }


  itemChanged(item: InvoiceItem) {
    console.log(item);
    if (item.index && item.index >= 0) {
      this.invoiceItems[item.index - 1] = item;
    } else {
      this.invoiceItems.push(item);
    }
    console.log(this.invoiceItems);
    this.items.emit(this.invoiceItems);
    this.closeModal();
  }

  itemSelect(i: number) {
    this.itemSelected = this.invoiceItems[i];
    this.itemSelected.index = i + 1;
    this.invoiceAddItem.invoiceItem = this.itemSelected;
    this.openModal();
  }

  closeModal() {
    //(document.getElementById('add_item') as HTMLFormElement)['close']()

    this.addItem.nativeElement.close();
    this.addItem.nativeElement.classList.remove('opened');
  }

  openModal() {
    //(document.getElementById('add_item') as HTMLFormElement)['showModal']()

    this.addItem.nativeElement.showModal();
    this.addItem.nativeElement.classList.add('opened');
  }


}
