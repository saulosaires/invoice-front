import {Bank} from "../../../bank/model/bank";

export class Payment {

  bank: Bank = new Bank();
  invoiceNumber?: string;
  date?: Date;
  dueDate?: Date;

}
