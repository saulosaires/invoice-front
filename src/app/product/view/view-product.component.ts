import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product";
import {FormsModule} from "@angular/forms";
import {PersistContactComponent} from "../../contact/persist/persist-contact.component";
import {ProductsService} from "../service/product.service";
import {PersistProductComponent} from "../persist/persist-product.component";

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [
    FormsModule,
    PersistContactComponent,
    PersistProductComponent
  ],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent implements OnInit {

  product_dialog: HTMLFormElement | undefined;
  product: Product = new Product();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(
      ({product}) => {
        this.product = product;
      });

    this.product_dialog = (document.getElementById('product_dialog') as HTMLFormElement)
  }

  getProduct(id?: string) {
    if (id) {
      this.productsService.findById(id).subscribe(product => {
        this.product = product;
      })
    }
  }

  productChanged(product: Product) {
    this.getProduct(product.id)
    if (this.product_dialog)
      this.product_dialog['close']();
  }

  delete() {

    if (this.product && this.product.id)
      this.productsService.delete(this.product.id).subscribe(any => {
        this.router.navigate(['/product']);
      })
  }
}
