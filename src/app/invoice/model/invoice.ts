import {Company} from "../../company/model/company";
import {Contact} from "../../contact/model/contact";
import {Bank} from "../../bank/model/bank";
import {ProductItem} from "./produrct-item";

export class Invoice {

  id?: string;
  company?: Company;
  contact?: Contact;
  invoiceNumber?: string;
  date?: Date;
  dueDate?: Date;
  productItem?: ProductItem[];
  comment?: Date;
  bank?: Bank;

}
