import {Component, OnInit} from '@angular/core';
import {GoogleSigninButtonModule, SocialAuthService} from "@abacritt/angularx-social-login";
import {AuthService} from "../auth/service/auth.service";
import {jwtDecode} from "jwt-decode";

import {Auth} from "../auth/model/auth";
import {User} from "../user/model/user";
import {StorageService} from "../storage/storage.service";
import {Router} from "@angular/router";
import {GlobalConstants} from "../common/global-constants";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    GoogleSigninButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private socialAuthService: SocialAuthService,
              private storageService: StorageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {

    this.socialAuthService.authState.subscribe((socialUser) => {
      console.log(socialUser);
      let auth = new Auth();

      auth.provider = socialUser.provider;
      auth.providerToken = socialUser.idToken;

      this.authService.login(auth).subscribe(response => {

        if (response.token) {
          let user: User = jwtDecode(response.token);
          this.storageService.saveData("user", JSON.stringify(user))
          this.storageService.saveData("token", response.token)
          GlobalConstants.loggedIn = true;
          this.router.navigate(['/']);
        }

      });


    });

  }

}
