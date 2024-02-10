import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CountryService} from "../country/country.service";
import {Country} from "../country/country";
import {NgForOf} from "@angular/common";
import {Company} from "./model/company";
import {MatIconModule} from "@angular/material/icon";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CompanyService} from "./service/company.service";
import {BanksService} from "../bank/service/bank.service";
import {ListBankComponent} from "../bank/list/list-bank.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-company',
  standalone: true,
  providers: [CountryService],
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    MatIconModule,
    RouterLink,
    ListBankComponent
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit {

  countries: Country[] = []
  company: Company = new Company();

  constructor( private activatedRoute: ActivatedRoute,
               private countryService: CountryService,
              private _snackBar: MatSnackBar,
              private companyService: CompanyService,
              private banksService: BanksService) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({company}) => {
        this.company = company;
        if (!this.company.country)
          this.company.country = new Country();
      });

    this.countryService.getAll().subscribe(countries => {
      this.countries = countries;
    })

  }

  saveCompany() {

    this.companyService.save(this.company).subscribe(company => {
      this.company = company;
      this.showMessage("Company Saved")
    });
  }

  showMessage(message:string){
    this._snackBar.open(message, 'close', {
      duration: 2 * 1000
    });
  }
}
