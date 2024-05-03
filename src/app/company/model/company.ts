import {Country} from "../../country/country";
import {Bank} from "../../bank/model/bank";

export class Company {

  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  country: Country = new Country();
  address?: string;
  vat?: string;
  banks: Bank[] = [];

}
