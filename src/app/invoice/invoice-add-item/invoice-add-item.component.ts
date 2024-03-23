import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsService} from "../../product/service/product.service";
import {Product} from "../../product/model/product";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {InvoiceItem} from "../invoice-item/model/invoice.item";
import {Contact} from "../../contact/model/contact";

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
export class InvoiceAddItemComponent implements OnInit{

  products: Product[] = [];

  @Output() itemChanged = new EventEmitter<InvoiceItem>()
  @Input() item: InvoiceItem=new InvoiceItem();

  constructor(private productsService: ProductsService) {
  }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.findByUser().subscribe(products => {
      this.products = products;
    });
  }


  productChange() {

    if(this.products)
      this.products.forEach(product=>{
        if(product.id==this.item.product.id){
          this.item.product=product;
          this.quantityChange();
        }
      });

  }

  quantityChange() {

    if( this.item.quantity>0){
      this.item.total = (this.item.product.price * this.item.quantity);
      this.item.total += ((this.item.total * this.item.product.tax)/100);
      this.item.total -= ((this.item.product.price * this.item.discount)/100);
    }

  }

  save() {
    this.itemChanged.emit(this.item);
    this.item=new InvoiceItem();
  }


}
