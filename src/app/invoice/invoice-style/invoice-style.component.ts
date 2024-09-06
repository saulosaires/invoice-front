import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from "../model/invoice";
import {InvoiceBusinessComponent} from "../invoice-business/invoice-business.component";
import {InvoiceClientComponent} from "../invoice-client/invoice-client.component";
import {CurrencyPipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-invoice-style',
  standalone: true,
  imports: [
    InvoiceBusinessComponent,
    InvoiceClientComponent,
    NgIf,
    ReactiveFormsModule,
    NgForOf,
    NgStyle,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './invoice-style.component.html',
  styleUrl: './invoice-style.component.scss'
})
export class InvoiceStyleComponent implements OnInit {
  @Input() invoice!: Invoice;

  r: number = 22;
  g: number = 113;
  b: number = 195;
  style: string = `background-color: rgb(${this.r}, ${this.g}, ${this.b});`;

  fonts: string[] = [
    'Roboto',
    'Arial',
    'Verdana',
    'Tahoma',
    'Trebuchet MS',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
    'Brush Script MT'
  ];
  font: string = this.fonts[0];

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.invoice);
  }

  pickColor: any;

  customColor(e: Event) {
    let result = this.hexToRgb(e);
    if (result) {
      this.changeHeaderCoLor(result.r, result.g, result.b);
    }
  }

  hexToRgb(hex: any) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }


  changeHeaderCoLor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.style = `background-color: rgb(${this.r}, ${this.g}, ${this.b});`;
  }

  fontChange() {
    console.log(this.font);
  }
}
