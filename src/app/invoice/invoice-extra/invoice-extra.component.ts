import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Payment} from "../invoice-payment/model/payment";

@Component({
  selector: 'app-invoice-extra',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './invoice-extra.component.html',
  styleUrl: './invoice-extra.component.scss'
})
export class InvoiceExtraComponent implements OnInit {

  @Output() extraNote= new EventEmitter<string>();

  note:string="";

  ngOnInit(): void {
  }

  noteChange() {
    this.extraNote.emit(this.note);
  }
}
