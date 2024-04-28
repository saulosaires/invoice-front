
export class Product {

  id?: string;
  name?: string;
  quantity: number=1
  price: number=0;
  tax: number=0;
  description?: string;


  init(product: Product) {
    this.id = product.id;
    this.name =  product.name;
    this.quantity =  product.quantity;
    this.price =  product.price;
    this.tax =  product.tax;
    this.description =  product.description;
  }
}
