// tslint:disable-next-line:max-line-length
import { GrandServiceProductComponent } from './../../_components/_admin/grand-services/details/grand-service-product/grand-service-product.component';
// tslint:disable-next-line:max-line-length
import { GrandServicePaymentsStepsComponent } from './../../_components/_admin/grand-services/details/grand-service-payments-steps/grand-service-payments-steps.component';
// tslint:disable-next-line:max-line-length
import { GrandServiceImagesComponent } from './../../_components/_admin/grand-services/details/grand-service-images/grand-service-images.component';
import { GrandServiceComponent } from './../../_components/_admin/grand-services/details/grand-service/grand-service.component';
import { GrandServiceListComponent } from './../../_components/_admin/grand-services/grand-service-list/grand-service-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { GrandServiceCustomerListComponent } from '../../_components/_admin/grand-services/details/grand-service-customers/grand-service-customer-list/grand-service-customer-list.component';
// tslint:disable-next-line:max-line-length
import { GrandServiceTourManagmentComponent } from '../../_components/_admin/grand-services/details/grand-service-tour-managment/grand-service-tour-managment.component';
// tslint:disable-next-line:max-line-length
import { GrandServiceCustomerDetailsComponent } from '../../_components/_admin/grand-services/details/grand-service-customers/grand-service-customer-details/grand-service-customer-details.component';
// tslint:disable-next-line:max-line-length
import { GrandServicePricingComponent } from '../../_components/_admin/grand-services/details/grand-service-pricing/grand-service-pricing.component';

const routes: Routes = [
  { path: 'admin/tours',  component: GrandServiceListComponent, data: { } },
  { path: 'admin/tours/:name/Tour', component: GrandServiceComponent, data: { } },
  { path: 'admin/tours/:name/Images', component: GrandServiceImagesComponent, data: { } },
  { path: 'admin/tours/:name/PaymentSteps', component: GrandServicePaymentsStepsComponent, data: { } },
  { path: 'admin/tours/:name/Customers', component: GrandServiceCustomerListComponent, data: { } },
  { path: 'admin/tours/:name/Customers/:customerId', component: GrandServiceCustomerDetailsComponent, data: { } },
  { path: 'admin/tours/:name/TourManagment', component: GrandServiceTourManagmentComponent, data: { } },
  { path: 'admin/tours/:name/Pricing', component: GrandServicePricingComponent, data: { } },
  { path: 'admin/tours/:name/:productType', component: GrandServiceProductComponent, data: { } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class GrandServicesRoutingModule { }
