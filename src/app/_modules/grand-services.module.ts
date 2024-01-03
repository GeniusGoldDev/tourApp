// tslint:disable-next-line:max-line-length
import { GrandServicePricingComponent } from './../_components/_admin/grand-services/details/grand-service-pricing/grand-service-pricing.component';
import { GrandServicesRoutingModule } from './../_routing/_admin/grand-services-routing.module';
// tslint:disable-next-line:max-line-length
import { GrandServiceProductComponent } from './../_components/_admin/grand-services/details/grand-service-product/grand-service-product.component';
// tslint:disable-next-line:max-line-length
import { GrandServicePaymentsStepsComponent } from './../_components/_admin/grand-services/details/grand-service-payments-steps/grand-service-payments-steps.component';
import { GrandServiceHeaderComponent } from './../_components/_admin/grand-services/grand-service-header/grand-service-header.component';
// tslint:disable-next-line:max-line-length
import { GrandServiceImagesComponent } from './../_components/_admin/grand-services/details/grand-service-images/grand-service-images.component';
import { GrandServiceListComponent } from '../_components/_admin/grand-services/grand-service-list/grand-service-list.component';
import { GrandServiceDetailsComponent } from '../_components/_admin/grand-services/grand-service-details/grand-service-details.component';

import { GrandServiceComponent } from './../_components/_admin/grand-services/details/grand-service/grand-service.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { FileDropModule } from 'ngx-file-drop';
import { NgxImageGalleryModule } from 'ngx-image-gallery';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// tslint:disable-next-line:max-line-length
import { GrandServiceCustomerListComponent } from '../_components/_admin/grand-services/details/grand-service-customers/grand-service-customer-list/grand-service-customer-list.component';
// tslint:disable-next-line:max-line-length
import { GrandServiceCustomerDetailsComponent } from '../_components/_admin/grand-services/details/grand-service-customers/grand-service-customer-details/grand-service-customer-details.component';
// tslint:disable-next-line:max-line-length
import { GrandServiceTourManagmentComponent } from '../_components/_admin/grand-services/details/grand-service-tour-managment/grand-service-tour-managment.component';


import {MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
@NgModule({
  declarations: [
    GrandServiceHeaderComponent,
    GrandServiceListComponent,
    GrandServiceDetailsComponent,
    GrandServiceComponent,
    GrandServiceImagesComponent,
    GrandServicePaymentsStepsComponent,
    GrandServiceProductComponent,
    GrandServiceCustomerListComponent,
    GrandServiceCustomerDetailsComponent,
    GrandServiceTourManagmentComponent,
    GrandServicePricingComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    GrandServicesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    FileDropModule,
    NgxImageGalleryModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class GrandServicesModule { }
