import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "../../country/country.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CompanyService} from "../../company/service/company.service";
import {BanksService} from "../../bank/service/bank.service";
import {Company} from "../../company/model/company";

@Component({
  selector: 'app-persist-invoice',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './persist-invoice.component.html',
  styleUrl: './persist-invoice.component.scss'
})
export class PersistInvoiceComponent implements OnInit {

  company: Company = new Company();
  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService,
              private _snackBar: MatSnackBar,
              private companyService: CompanyService,
              private banksService: BanksService) {
  }

  ngOnInit(): void {

    this.companyService.findByUser().subscribe(company=>{this.company=company;});

  }

}
