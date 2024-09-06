import {Company} from "../../company/model/company";
import {Contact} from "../../contact/model/contact";
import {Bank} from "../../bank/model/bank";
import {InvoiceItem} from "../invoice-item/model/invoice.item";

export class Invoice {

  id?: string;
  company: Company = new Company();
  contact: Contact = new Contact();
  bank: Bank = new Bank();
  invoiceNumber: string = "";
  date: Date = new Date();
  dueDate?: Date;
  dateFormatted: string = "";
  dueDateFormatted: string = "";
  invoiceItem: InvoiceItem[] = [];
  status: string = "";
  comment?: string = "";
  amount: number = 0;


}
