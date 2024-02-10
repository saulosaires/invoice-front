import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {StorageService} from "./service/storage/storage.service";
import {MatIconModule} from '@angular/material/icon';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {HeaderComponent} from "./header/header.component";
import {AuthService} from "./auth/service/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, SideBarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{


  title = 'invoice';
  loggedIn: boolean = false;
  loading: boolean = true;
  isDark: boolean | undefined;


  constructor(private router: Router,
              private authService: AuthService,
              private storageService: StorageService) {
  }

  ngOnInit() {

   let  jsonUser=this.storageService.getItem("user");
    if (!jsonUser) {
      this.loggedIn=false;
      this.router.navigate(['/login']);
    }else{
      this.loggedIn=true;
    }

  }


}
