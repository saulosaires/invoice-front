import {Currency} from "../../currency/currency";

export class Bank {

  id?: string;
  name: string =""
  accountNumber: string =""
  currency: Currency=new Currency()
  swiftBic: string =""
  type: string =""
  balance: number =0
}
