import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'admin';
  isAdmin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // if not admin
    if (window.location.href.toLowerCase().indexOf('admin') === -1) {
      this.isAdmin = false;
      return;
    }

    this.isAdmin = true;

    this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          if (event.url.toLowerCase().indexOf('login') !== -1) {
            return;
          }

          const stringUsr = localStorage.getItem(environment.cookieName);
          if (stringUsr === null || stringUsr === 'null') {
            this.router.navigate(['/admin/login']);
          } else {
            const parsedData = JSON.parse(stringUsr);
            // if (this.currentUser.roles.find(r => r.name === 'ADMIN') == null) {
            //   this.router.navigate(['/login']);
            // }
          }
        }
    });
  }
}
