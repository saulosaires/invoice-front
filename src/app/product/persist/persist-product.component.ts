import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../model/product";
import {FormsModule} from "@angular/forms";
import {ContactsService} from "../../contact/service/contact.service";
import {ProductsService} from "../service/product.service";

@Component({
  selector: 'app-persist-product',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './persist-product.component.html',
  styleUrl: './persist-product.component.scss'
})
export class PersistProductComponent {

  @Output() changed = new EventEmitter<Product>()

  @Input() product: Product = new Product();

  constructor(private service: ProductsService) {

  }

  save() {
    this.service.save(this.product).subscribe(product => {
      this.changed.emit(product);
    })
  }
}
