import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {Bank} from "../model/bank";
import {RouterLink} from "@angular/router";
import {PersistContactComponent} from "../../contact/persist/persist-contact.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PersistBankComponent} from "../persist/persist-bank.component";
import {NgForOf, NgIf} from "@angular/common";
import {BanksService} from "../service/bank.service";
import {ItemBank} from "../model/item.bank";
import {forkJoin, Observable} from "rxjs";
import {NoDataComponent} from "../../no-data/no-data.component";

@Component({
    selector: 'app-list-bank',
    standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    PersistContactComponent,
    ReactiveFormsModule,
    PersistBankComponent,
    NgForOf,
    FormsModule,
    NgIf,
    NoDataComponent
  ],
    templateUrl: './list-bank.component.html',
    styleUrl: './list-bank.component.scss'
})
export class ListBankComponent implements OnInit {

    bankSelectAll: boolean = false;
    dialog: HTMLFormElement | undefined;
    itemsBank: ItemBank[] = [];

    constructor(private banksService: BanksService) {
    }

    ngOnInit(): void {
        this.getBanks();
        this.dialog = (document.getElementById('bank_dialog') as HTMLFormElement)

    }

    delete() {

        let promises: Observable<Bank>[] = [];
        this.itemsBank.forEach(itemBank => {
            if (itemBank.checked) {
                promises.push(this.banksService.delete(itemBank.bank.id));
            }
        });

        forkJoin(promises).subscribe(v=>{
          this.getBanks();
          this.showDelete();
        });

    }

    selectAll() {

        this.itemsBank.forEach(itemBank => {
            itemBank.checked = !this.bankSelectAll;
        });
    }

    showDelete() {
      this.bankSelectAll =false;
      if( this.itemsBank.length==0)return;

        let countSelect = this.itemsBank.filter((itemBank) => itemBank.checked).length;
        this.bankSelectAll = (countSelect == this.itemsBank.length);
        return countSelect > 0;

    }

    getBanks() {
        this.itemsBank=[];
        this.banksService.findByUser().subscribe(banks => {
            banks.forEach(bank => {
                this.itemsBank.push(new ItemBank(bank));
            });

        });
    }

    bankChanged($event: Bank) {
        if (this.dialog) {
            this.getBanks();
            this.dialog['close']();

        }
    }


}
