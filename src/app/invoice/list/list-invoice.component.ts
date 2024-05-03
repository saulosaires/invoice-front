import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-invoice',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink
  ],
  templateUrl: './list-invoice.component.html',
  styleUrl: './list-invoice.component.scss'
})
export class ListInvoiceComponent {

}
