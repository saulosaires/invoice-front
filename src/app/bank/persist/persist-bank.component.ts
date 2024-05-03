import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bank} from "../model/bank";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CurrencyService} from "../../currency/currency.service";
import {Currency} from "../../currency/currency";
import {NgForOf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {BanksService} from "../service/bank.service";

@Component({
  selector: 'app-persist-bank',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgForOf,
    MatIconModule
  ],
  templateUrl: './persist-bank.component.html',
  styleUrl: './persist-bank.component.scss'
})
export class PersistBankComponent implements OnInit {

  @Output() changed = new EventEmitter<Bank>()

  @Input() bank: Bank = new Bank();

  currencies: Currency[] = [];

  types: string[] = ["Personal", "Business"];

  constructor(private banksService: BanksService, private currencyService: CurrencyService) {
  }

  ngOnInit(): void {

    this.bank.type = this.types[0];
    this.currencyService.getAll().subscribe(currency => {
      this.currencies = currency;
      this.bank.currency = currency[0];
    })


  }

  save() {
    this.banksService.save(this.bank).subscribe(bank => {
      this.changed.emit(bank);
    })
  }
}
