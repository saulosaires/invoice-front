import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {BreadcrumbsComponent} from "../breadcrumbs/breadcrumbs.component";
import {Router} from "@angular/router";
import {StorageService} from "../service/storage/storage.service";
import {User} from "../user/model/user";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    BreadcrumbsComponent,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private storageService: StorageService) {
  }

  ngOnInit(): void {

    let jsonUser = this.storageService.getItem("user");
    console.log(jsonUser)
    if (jsonUser) {
      this.user = JSON.parse(jsonUser);
    }

  }

}
