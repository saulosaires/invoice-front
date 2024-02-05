import {Component, OnInit} from '@angular/core';
import {GoogleSigninButtonModule, SocialAuthService} from "@abacritt/angularx-social-login";
import {AuthService} from "../auth/service/auth.service";
import {Auth} from "../auth/model/auth";
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

  constructor(private socialAuthService: SocialAuthService,private authService:AuthService) {
  }

  ngOnInit(): void {

    this.socialAuthService.authState.subscribe((socialUser) => {
      console.log(socialUser);
      let auth = new Auth();

      auth.provider=socialUser.provider;
      auth.providerToken=socialUser.idToken;

      this.authService.login(auth).subscribe(response =>{
        console.log(response)

        if(response.token)
        console.log(atob(response.token.split('.')[1]));
      } );


    });

  }

}
