import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CountryService} from "../country/country.service";
import {Country} from "../country/country";
import {NgForOf} from "@angular/common";
import {Company} from "./model/company";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {CompanyService} from "./service/company.service";
import {BanksService} from "../bank/service/bank.service";
import {ListBankComponent} from "../bank/list/list-bank.component";

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
export class CompanyComponent  implements OnInit {

  countries:Country[]=[]
  company:Company= new Company();

  constructor(private countryService: CountryService,
              private companyService: CompanyService,
              private banksService: BanksService) {
  }

  ngOnInit(): void {

    this.countryService.getAll().subscribe(countries=>{
      this.countries=countries;
    })
  }

  saveCompany() {

      this.companyService.save(this.company).subscribe(company=>{
        this.company = company;
      });
  }
}
