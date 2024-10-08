import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Bank} from "../../bank/model/bank";
import {BanksService} from "../../bank/service/bank.service";
import {Payment} from "./model/payment";

@Component({
  selector: 'app-invoice-payment',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './invoice-payment.component.html',
  styleUrl: './invoice-payment.component.scss'
})
export class InvoicePaymentComponent implements OnInit {

  banks: Bank[] = [];
  bankId?: string;
  paymentModel = new Payment();
  @Output() payment = new EventEmitter<Payment>();

  constructor(private banksService: BanksService) {
  }

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks() {
    this.banksService.findByUser().subscribe(banks => {
      this.banks = banks;
    });
  }

  bankChange() {

    this.banks.forEach(b => {
      if (b.id == this.bankId) {
        this.paymentModel.bank = b;
        this.payment.emit(this.paymentModel);
      }
    });

  }

  change() {
    this.payment.emit(this.paymentModel);
  }
}
