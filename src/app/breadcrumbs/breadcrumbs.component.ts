import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, NavigationEnd, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {IBreadCrumb} from "./breadcrumb";
import {filter} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";
import {ContactsService} from "../contact/service/contact.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  providers: [ContactsService],
  imports: [
    MatIconModule,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  static readonly ROUTE_DATA_BREADCRUMB_ICON = 'icon';
  static readonly ROUTE_DATA_BREADCRUMB_TYPE = 'type';
  breadCrumbs: IBreadCrumb[] = []

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadCrumbs = [];
        this.breadCrumbs.push({label: 'Home', url: '', icon: 'home'});

        this.createBreadcrumbs(this.activatedRoute.root).forEach(b => {
          this.breadCrumbs.push(b)
        })

      });
  }


  // @ts-ignore
  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (route.children.length === 0) {
      return breadcrumbs;
    }


    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      let label = child.snapshot.data[BreadcrumbsComponent.ROUTE_DATA_BREADCRUMB];
      const icon = child.snapshot.data[BreadcrumbsComponent.ROUTE_DATA_BREADCRUMB_ICON];
      const type = child.snapshot.data[BreadcrumbsComponent.ROUTE_DATA_BREADCRUMB_TYPE];

      if (label) {
        if (label == 'view')
          label = this.translateLabel(type, child.snapshot.data)

        breadcrumbs.push({label, url, icon});
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }

  private translateLabel(type: string, data: Data) {

    if (type == 'contact') {
      let contact = data[type]
      return contact.name;
    }

    if (type == 'product') {
      let product = data[type]
      return product.name;
    }

    return 'view'
  }
}
