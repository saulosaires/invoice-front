import {Bank} from "./bank";

export class ItemBank {

  checked: boolean = false;
  bank: Bank;


  constructor(bank: Bank) {
    this.bank = bank;
    this.checked = false;
  }
}
