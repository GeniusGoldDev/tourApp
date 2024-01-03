import { LoginComponent } from './_components/_admin/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './_components/_admin/reports/reports.component';
import { HomeComponent } from './_components/_webapp/home/home.component';
import { TourBookingComponent } from './_components/_webapp/tour-booking/tour-booking.component';
import { TourDetailComponent } from './_components/_webapp/tour-detail/tour-detail.component';
import { TourGridComponent } from './_components/_webapp/tour-grid/tour-grid.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'admin',
    redirectTo: 'admin/vendors',
    pathMatch: 'full'
  },
  { path: 'admin/login',  component: LoginComponent, data: { } },
  { path: 'admin/reports',  component: ReportsComponent, data: { } },
  { path: 'home',  component: HomeComponent, data: { } },
  { path: 'tour/booking',  component: TourBookingComponent, data: { } },
  { path: 'tour/detail',  component: TourDetailComponent, data: { } },
  { path: 'tour/grid',  component: TourGridComponent, data: { } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
