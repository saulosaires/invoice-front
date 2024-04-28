import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from "../model/product";
import {FormsModule} from "@angular/forms";
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

  product: Product = new Product();

  constructor(private service: ProductsService) {
  }

  setProduct(product: Product) {
    this.product = new Product();
    this.product.init(product);
  }

  save() {
    this.service.save(this.product).subscribe(product => {
      this.changed.emit(product);
    })
  }
}
