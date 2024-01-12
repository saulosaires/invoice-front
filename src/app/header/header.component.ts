import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {BreadcrumbsComponent} from "../breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    BreadcrumbsComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
