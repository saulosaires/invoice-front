import {Currency} from "../../currency/currency";

export class Bank {

  id: number | undefined
  name: string =""
  accountNumber: string =""
  currency: Currency=new Currency()
  swiftBic: string =""
  type: string =""
  balance: number =0
}
