import {Component, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {Menu} from "./menu";
import {NgForOf} from "@angular/common";
import {Router,RouterModule} from "@angular/router";

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

        this.menu = [
            {active: "active", label: "Dashboard", icon: "home", href:"dashboard"},
            {active: "", label: "Bill", icon: "receipt", href:"bill"},
            {active: "", label: "Contact", icon: "groups", href:"contact"},
            {active: "", label: "Invoice", icon: "payments", href:"invoice"},
            {active: "", label: "Product", icon: "label", href:"product"}
        ]

    }

    click(i: number) {
        this.menu.forEach(m=>{m.active="";});
        this.menu[i].active="active";
    }
}
