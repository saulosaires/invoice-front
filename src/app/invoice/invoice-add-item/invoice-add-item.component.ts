import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsService} from "../../product/service/product.service";
import {Product} from "../../product/model/product";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {InvoiceItem} from "../invoice-item/model/invoice.item";

@Component({
  selector: 'app-invoice-add-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './invoice-add-item.component.html',
  styleUrl: './invoice-add-item.component.scss'
})
export class InvoiceAddItemComponent implements OnInit {

  products: Product[] = [];
  invoiceItem: InvoiceItem = new InvoiceItem();

  @Output() itemChanged = new EventEmitter<InvoiceItem>()

  constructor(private productsService: ProductsService) {
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.productsService.findByUser().subscribe(products => {
      this.products = products;
    });
  }


  productChange() {

    if (this.products)
      this.products.forEach(product => {
        if (product.id == this.invoiceItem.product.id) {
          this.invoiceItem.product = product;
          this.quantityChange();
        }
      });

  }

  quantityChange() {

    if (this.invoiceItem.quantity > 0) {
      this.invoiceItem.total = (this.invoiceItem.product.price * this.invoiceItem.quantity);
      this.invoiceItem.discountAmount = this.invoiceItem.total * ( this.invoiceItem.discount / 100);
      this.invoiceItem.vat = (this.invoiceItem.total - this.invoiceItem.discountAmount ) * ( this.invoiceItem.product.tax / 100);

      this.invoiceItem.amountDue = (this.invoiceItem.total + this.invoiceItem.vat - this.invoiceItem.discountAmount);
    }

  }

  save() {
    this.itemChanged.emit(this.invoiceItem);
    this.invoiceItem = new InvoiceItem();
  }


}
