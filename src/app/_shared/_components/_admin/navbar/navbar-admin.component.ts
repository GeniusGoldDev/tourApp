import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng4-social-login';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.less']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.setItem(environment.cookieName, null);

    this.socialAuthService.signOut().finally(() => {
      this.router.navigate(['/']);
    });
  }
}
