import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {Bank} from "../model/bank";
import {RouterLink} from "@angular/router";
import {PersistContactComponent} from "../../contact/persist/persist-contact.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PersistBankComponent} from "../persist/persist-bank.component";
import {NgForOf} from "@angular/common";
import {BanksService} from "../service/bank.service";

@Component({
  selector: 'app-list-bank',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    PersistContactComponent,
    ReactiveFormsModule,
    PersistBankComponent,
    NgForOf
  ],
  templateUrl: './list-bank.component.html',
  styleUrl: './list-bank.component.scss'
})
export class ListBankComponent  implements OnInit {

  dialog: HTMLFormElement | undefined;
  banks:Bank[]=[];

  constructor(private banksService: BanksService) {
  }

  ngOnInit(): void {
    this.getBanks();
    this.dialog = (document.getElementById('product_dialog') as HTMLFormElement)

  }

  getBanks() {
    this.banksService.findByUser().subscribe(banks => {
      this.banks = banks;
    });
  }

  bankChanged($event: Bank) {
    if (this.dialog) {
      this.getBanks();
      this.dialog['close']();

    }
  }
}
