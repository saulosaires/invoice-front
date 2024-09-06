import {Country} from "../../country/country";

export class Contact {

  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  country: Country = new Country();
  contactPerson?: string;
  vat?: string;
  isClient: boolean = false;
  isSupplier: boolean = false;
  bankName?: string;
  accountHolder?: string;
  accountNumber?: string;
  swiftBic?: string;
}
