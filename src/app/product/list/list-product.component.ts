import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../service/product.service";
import {Product} from "../model/product";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {PersistContactComponent} from "../../contact/persist/persist-contact.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PersistProductComponent} from "../persist/persist-product.component";

@Component({
  selector: 'app-list-product',
  standalone: true,
  providers: [ProductsService, Document],
  imports: [
    MatIconModule,
    NgForOf,
    RouterLink,
    PersistContactComponent,
    ReactiveFormsModule,
    PersistProductComponent
  ],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent implements OnInit {

  dialog: HTMLFormElement | undefined;
  products: Product[] = [];
  editProduct: Product = new Product();

  constructor(private service: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.dialog = (document.getElementById('product_dialog') as HTMLFormElement)
  }

  getProducts() {
    this.service.findByUser().subscribe(products => {
      this.products = products;
    });
  }

  productChanged($event: Product) {
    if (this.dialog) {
      this.getProducts();
      this.dialog['close']();

    }
  }
}
