import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {Menu} from "./menu";
import {NgForOf} from "@angular/common";
import {NavigationEnd, Router, RouterModule} from "@angular/router";
import {filter} from "rxjs";

@Component({
    selector: 'app-side-bar',
    standalone: true,
    imports: [
        RouterModule,
        MatIconModule,
        NgForOf
    ],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {

    menu: Menu[] = []

    constructor(private router: Router) {
    }

    ngOnInit(): void {

        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event  => {
                this.update((event as NavigationEnd).url)
            });


        this.menu = [
            {active: "active", label: "Dashboard", icon: "home", href: "dashboard"},
            {active: "", label: "Bill", icon: "receipt", href: "bill"},
            {active: "", label: "Contact", icon: "groups", href: "contact"},
            {active: "", label: "Invoice", icon: "payments", href: "invoice"},
            {active: "", label: "Product", icon: "label", href: "product"}
        ]

    }

    click(i: number) {
        this.menu.forEach(m => {
            m.active = "";
        });
        this.menu[i].active = "active";
    }

    update(url: string) {

        this.menu = [
            {active: this.isActive(url, "dashboard"), label: "Dashboard", icon: "home", href: "dashboard"},
            {active: this.isActive(url, "bill"), label: "Bill", icon: "receipt", href: "bill"},
            {active: this.isActive(url, "contact"), label: "Contact", icon: "groups", href: "contact"},
            {active: this.isActive(url, "invoice"), label: "Invoice", icon: "payments", href: "invoice"},
            {active: this.isActive(url, "product"), label: "Product", icon: "label", href: "product"}
        ]

    }

    isActive(url: string, menu: string) {

        if(url=='/'&& menu=='dashboard')
            return "active";

        return url.includes(menu) ? "active" : ""
    }
}
