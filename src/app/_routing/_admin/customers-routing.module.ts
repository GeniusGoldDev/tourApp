import { CustomerDetailsComponent } from './../../_components/_admin/customers/customer-details/customer-details.component';
import { CustomerListComponent } from './../../_components/_admin/customers/customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from '../../_components/_admin/payments/payment/payment.component';

const routes: Routes = [
  { path: 'admin/customers',  component: CustomerListComponent, data: { } },
  { path: 'admin/customers/:id', component: CustomerDetailsComponent, data: { } },
  { path: 'admin/customers/:userid/payment/:productName', component: PaymentComponent, data: { } },
  { path: 'admin/customers/:userid/payment', component: PaymentComponent, data: { } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CustomersRoutingModule { }
