import {Product} from "../../../product/model/product";

export class InvoiceItem {

  index?: number;
  product: Product = new Product();
  description?: string;
  quantity: number = 0;
  discount: number = 0;
  total: number = 0;

}
