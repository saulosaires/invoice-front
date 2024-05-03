import {Component, Input} from '@angular/core';
import {Company} from "../../company/model/company";

@Component({
  selector: 'app-invoice-business',
  standalone: true,
  imports: [],
  templateUrl: './invoice-business.component.html',
  styleUrl: './invoice-business.component.scss'
})
export class InvoiceBusinessComponent {

  @Input() company: Company = new Company();

}
