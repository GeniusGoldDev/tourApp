
import { CustomersModule } from './_modules/customers.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAdminComponent } from './_shared/_components/_admin/navbar/navbar-admin.component';
import { NavbarComponent } from './_shared/_components/_webapp/navbar/navbar.component';
import { LoginComponent } from './_components/_admin/login/login.component';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'ng4-social-login';
import { VendorsModule } from './_modules/vendors.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GrandServicesModule } from './_modules/grand-services.module';
import { PaymentComponent } from './_components/_admin/payments/payment/payment.component';
import { ToastrModule } from 'ngx-toastr';
import { ReportsComponent } from './_components/_admin/reports/reports.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HomeComponent } from './_components/_webapp/home/home.component';
import { FooterComponent } from './_shared/_components/_webapp/footer/footer.component';
import { TourBookingComponent } from './_components/_webapp/tour-booking/tour-booking.component';
import { TourDetailComponent } from './_components/_webapp/tour-detail/tour-detail.component';
import { TourGridComponent } from './_components/_webapp/tour-grid/tour-grid.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1091791913990-4segraml5e8t9gnr7g0ed2t25la9i48s.apps.googleusercontent.com')
  }
], false);

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1
};

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    NavbarComponent,
    LoginComponent,
    PaymentComponent,
    ReportsComponent,
    HomeComponent,
    FooterComponent,
    TourBookingComponent,
    TourDetailComponent,
    TourGridComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    VendorsModule,
    GrandServicesModule,
    NgxPermissionsModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomersModule,
    ToastrModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SlideshowModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
