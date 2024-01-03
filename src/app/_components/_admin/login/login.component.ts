import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, GoogleLoginProvider} from 'ng4-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  socialUser: any = SocialUser;
  constructor(private socialAuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  googleLogin() {
    if (!environment.production) {
      const userData = {name: 'test account'};
      localStorage.setItem(environment.cookieName, JSON.stringify(userData));
      this.router.navigate(['/admin/tours']);
      return true;
    }

    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.socialUser = userData;
      if (userData) {
        localStorage.setItem(environment.cookieName, JSON.stringify(userData));
        this.router.navigate(['/admin/tours']);
      }
    });
  }
}
